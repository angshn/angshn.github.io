import{_ as c,r as e,o as i,c as l,a as n,b as a,w as r,d as o,e as t}from"./app-Ec_z8kpw.js";const d={},u=t('<h2 id="什么是spring" tabindex="-1"><a class="header-anchor" href="#什么是spring"><span>什么是Spring</span></a></h2><h2 id="bean生命周期" tabindex="-1"><a class="header-anchor" href="#bean生命周期"><span>Bean生命周期</span></a></h2><p>Spring Bean的生命周期大致可以分为<strong>实例化</strong>，<strong>属性赋值</strong>，<strong>初始化</strong>，<strong>使用</strong>和<strong>销毁阶段</strong>，其大致流程都是在<code>AbstractAutowireCapableBeanFactory#doCreateBean</code>方法中定义的。</p><p>Spring Bean的生命周期大致过程如图1所示：</p>',4),k=n("img",{style:{"border-radius":"0.3125em","box-shadow":"0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08)"},src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/15/170485f55560d36e~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp"},null,-1),v=n("br",null,null,-1),m=n("div",{style:{color:"#999","border-bottom":"1px solid #d9d9d9",display:"inline-block",padding:"2px"}}," 图1. Spring Bean生命周期",-1),b=t(`<p><strong>实例化 Instantiation</strong></p><p>实例化一个对象是通过调用<code>createBeanInstance</code>得到。</p><p><strong>属性赋值 populateBean</strong></p><p>在Spring中对一个实例属性赋值都通过一个叫做<code>populate</code>的动作完成，Bean属性赋值也不例外。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token function">populateBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> instanceWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>初始化实例 Initialzation</strong></p><p>一个实例只有在被初始化之后才能被用户使用，因此这一个步骤是必要的,initializeBean实现这一过程。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token function">initializeBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> exposedObject<span class="token punctuation">,</span> mbd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化步骤较为重要</p><ol><li>Spring首先为Bean查看是否定义了三种<code>Aware</code>接口，如果定义了就需要进行注入，这三种<code>Aware</code>接口为</li></ol><ul><li><code>BeanNameAware</code></li><li><code>BeanClassLoaderAware</code></li><li><code>BeanFactoryAware</code></li></ul><ol start="2"><li><code>Aware</code>应用之后就要开始考虑<code>BeanPost</code>的前置处理<code>applyBeanPostProcessorBeforeInitialization</code></li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// invokeAwareMethods之后调用</span>
wrappedBean <span class="token operator">=</span> <span class="token function">applyBeanPostProcessorsBeforeInitialization</span><span class="token punctuation">(</span>wrappedBean<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">applyBeanPostProcessorsBeforeInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> existingBean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>

    <span class="token class-name">Object</span> result <span class="token operator">=</span> existingBean<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> processor <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> current <span class="token operator">=</span> processor<span class="token punctuation">.</span><span class="token function">postProcessBeforeInitialization</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        result <span class="token operator">=</span> current<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里看出,<code>applyBeanPostProcessorBeforeInitialization</code>方法会获取所有的<code>BeanPostProcessor</code>的实现。如果一个<code>beanpostProcessor</code>返回null就说明没有后续的<code>beanPostProcessor</code>被调用了。</p><ol start="3"><li>调用自定义的初始化方法<code>init-method</code></li></ol><p>这一步骤会检查Bean是否实现<code>InitializingBean</code>接口，如果一个Bean实现了该接口那么就会调用其<code>afterProperties</code>方法，该接口定义为</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InitializingBean</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了是否实现<code>InitializingBean</code>接口，还可以使用<code>@PostConstruct</code>和<code>@Bean(initMethod=&quot;initMethod&quot;)</code>来定义一个初始化方法。也就是说自定义的初始化方法一共有三种：</p><ul><li><code>InitializingBean</code>接口</li><li><code>@PostConstruct</code>注解</li><li><code>@Bean(initMethod=&quot;initMethod&quot;)</code>注解</li></ul><ol start="4"><li>调用BeanPostProcessor的后处理办法</li></ol><p>这里会执行<code>applyBeanPostProcessorsAfterInitialization</code>方法，大致流程与<code>applyBeanPostProcessorsAfterInitialization</code>一致。</p><p><strong>销毁方法注册</strong></p><p>一个Bean存在销毁阶段，其扩展点为实现<code>DisposableBean</code>接口，</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DisposableBean</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该接口可以在实例被销毁时进行一些后置处理。除了实现<code>DisposableBean</code>接口，还可以使用<code>@Bean(destroyMethod=&quot;destroyMethod&quot;)</code>。当然在<code>XML</code>文件形式的bean配置中也可以通过<code>destroy-method</code>来标注一个销毁函数。</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,26),g={href:"https://juejin.cn/post/7010017313625735198",target:"_blank",rel:"noopener noreferrer"},B={href:"https://juejin.cn/post/6844904065457979405",target:"_blank",rel:"noopener noreferrer"};function h(f,j){const p=e("center"),s=e("ExternalLinkIcon");return i(),l("div",null,[u,n("div",null,[a(p,null,{default:r(()=>[k,v,m]),_:1})]),b,n("p",null,[n("a",g,[o("1. Spring框架@PostConstruct注解详解"),a(s)])]),n("p",null,[n("a",B,[o("2. 如何记忆 Spring Bean 的生命周期"),a(s)])])])}const w=c(d,[["render",h],["__file","introduction.html.vue"]]);export{w as default};
