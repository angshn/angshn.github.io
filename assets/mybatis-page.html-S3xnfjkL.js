import{_ as e,r as t,o as p,c as o,a as s,d as n,b as c,e as l}from"./app-Ec_z8kpw.js";const i={},u=l(`<h1 id="mybatis-分页" tabindex="-1"><a class="header-anchor" href="#mybatis-分页"><span>Mybatis 分页</span></a></h1><p>Mybatis中分页有多种方法，分别是：</p><ol><li>Limits物理分页</li><li>RowBounds逻辑分页</li><li>实现Interceptor拦截器</li><li>使用PageHelper插件</li></ol><h2 id="limits分页" tabindex="-1"><a class="header-anchor" href="#limits分页"><span>Limits分页</span></a></h2><p>使用原生的SQL语句<code>LIMIT</code>完成。例如查询用户信息</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	SELECT * FROM user limit #{start}, #{size}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rowbounds分页" tabindex="-1"><a class="header-anchor" href="#rowbounds分页"><span>RowBounds分页</span></a></h2><p>Mybatis提供了一个专门处理分类的类<code>RowBounds</code>。可以在对应的接口中直接给出<code>RowBounds</code>的实例。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">RowBounds</span><span class="token punctuation">(</span><span class="token keyword">int</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>offset <span class="token operator">=</span> offset<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>limit <span class="token operator">=</span> limit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设有一个查询用户的接口</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">UserMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token class-name">User</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token class-name">RowBounds</span> rowBounds<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时可以直接给该方法一个<code>RowBounds</code>来实现分页</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> pageNumber <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token keyword">int</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token class-name">RowBounds</span> pageinfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RowBounds</span><span class="token punctuation">(</span>pageNumber<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>pageinfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rowbounds-分页的原理" tabindex="-1"><a class="header-anchor" href="#rowbounds-分页的原理"><span>RowBounds 分页的原理</span></a></h3><p>Mybatis使用<code>RowBounds</code>来实现<strong>逻辑分类</strong>，这种方式会获取所有的<strong>ResultSet</strong>，但是该方式不会将所有的ResultSet内容放在内存里。<code>org.apache.ibatis.executor.resultset.DefaultResultSetHandler#handleRowValuesForSimpleResultMap</code>方法执行了这个过程。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">handleRowValuesForSimpleResultMap</span><span class="token punctuation">(</span><span class="token class-name">ResultSetWrapper</span> rsw<span class="token punctuation">,</span> <span class="token class-name">ResultMap</span> resultMap<span class="token punctuation">,</span> <span class="token class-name">ResultHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> resultHandler<span class="token punctuation">,</span> <span class="token class-name">RowBounds</span> rowBounds<span class="token punctuation">,</span> <span class="token class-name">ResultMapping</span> parentMapping<span class="token punctuation">)</span>
      <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    <span class="token class-name">DefaultResultContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> resultContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultResultContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> rsw<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//游标设置到指定位置</span>
    <span class="token function">skipRows</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">,</span> rowBounds<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 持续处理下一条结果，判断条件为；还有结果需要处理 &amp;&amp; 结果集没有关闭 &amp;&amp; 还有下一条结果</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">shouldProcessMoreRows</span><span class="token punctuation">(</span>resultContext<span class="token punctuation">,</span> rowBounds<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>resultSet<span class="token punctuation">.</span><span class="token function">isClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ResultMap</span> discriminatedResultMap <span class="token operator">=</span> <span class="token function">resolveDiscriminatedResultMap</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">,</span> resultMap<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Object</span> rowValue <span class="token operator">=</span> <span class="token function">getRowValue</span><span class="token punctuation">(</span>rsw<span class="token punctuation">,</span> discriminatedResultMap<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">storeObject</span><span class="token punctuation">(</span>resultHandler<span class="token punctuation">,</span> resultContext<span class="token punctuation">,</span> rowValue<span class="token punctuation">,</span> parentMapping<span class="token punctuation">,</span> resultSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义拦截器插件分页" tabindex="-1"><a class="header-anchor" href="#自定义拦截器插件分页"><span>自定义拦截器插件分页</span></a></h2><p><code>Mybatis</code>提供了一个<code>Interceptor</code>接口，任何分页插件相对<code>Mybatis</code>的结构进行分页就必须实现<code>Interceptor</code>接口，<code>PageHelper</code>也同样实现了这个接口。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interceptor</span> <span class="token punctuation">{</span>

  <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>

  <span class="token keyword">default</span> <span class="token class-name">Object</span> <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Plugin</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token class-name">Properties</span> properties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// NOP</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义拦截器还需要在实现类上添加<code>@Interceptors</code>注解，该注解标识这个类是一个拦截器。<code>@Signature</code>知名自定义的拦截器拦截哪一个类型和方法。</p><p>Mybatis中有四种可拦截的类型：</p><ol><li>Executor: 拦截执行器</li><li>ParameterHandler: 拦截参数的处理</li><li>ResultHandler: 拦截结果集的护理</li><li>StatementHandler: 拦截Sql语法构建的处理</li></ol><p>每个类型对应的可拦截方法如下：</p><p><img src="https://pic2.zhimg.com/v2-87a0026ead1754cf82f4a8e09fb87f01_r.jpg" alt=""></p><h3 id="intercept方法" tabindex="-1"><a class="header-anchor" href="#intercept方法"><span>intercept方法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>intercept</code>方法可以拦截指定的<code>type</code>类型。参数<code>invocation</code>是对应的拦截消息，可以从中获取对应的数据。</p><h3 id="plugin方法" tabindex="-1"><a class="header-anchor" href="#plugin方法"><span>plugin方法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">default</span> <span class="token class-name">Object</span> <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token class-name">Plugin</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>plugin方法可以决定这个类型对象是否要生成代理。</p><h3 id="setproperties" tabindex="-1"><a class="header-anchor" href="#setproperties"><span>setProperties</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token class-name">Properties</span> properties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// NOP</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>setProperties</code>方法可以为拦截器添加代理对象的参数。</p><h2 id="pagehelper插件" tabindex="-1"><a class="header-anchor" href="#pagehelper插件"><span>PageHelper插件</span></a></h2>`,34),r={href:"https://github.com/pagehelper/Mybatis-PageHelper",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"Mybatis",-1),k=s("p",null,"具体使用可参考官网文档。",-1);function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,s("p",null,[n("一般有普遍需求的地方就会有开源实现，"),s("a",r,[n("Mybatis-PageHelper"),c(a)]),n("提供了该实现，以"),d,n("插件的形式嵌入Mybatis。使得可以轻松的实现分页功能。")]),k])}const h=e(i,[["render",v],["__file","mybatis-page.html.vue"]]);export{h as default};
