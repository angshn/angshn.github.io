import{_ as n,o as s,c as a,e as t}from"./app-1OpTEKPL.js";const p={},e=t(`<h2 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理"><span>基本原理</span></a></h2><p>KMP算法基于朴素字符串匹配算法，目的是尽量的减少回溯，也就是让主串不进行位置回溯。时间复杂度为O(n+m)。</p><p>在朴素的字符串匹配中，如果<code>s[i]</code>和<code>p[j]</code>对应的元素不相等，则需要将<code>i</code>后移且<code>j</code>初始化到<code>0</code>，此时重新开始匹配。 KMP算法利用前后缀的思想，使得当失配发生的时候不会回溯的太厉害。</p><p>假设已经知道<code>Next[i]</code>的值，<code>Next[i]</code>表示前<code>i</code>个字符组成的字符串的前缀和后缀的公共部分，例如有字符串<code>s=&quot;abcdabc&quot;</code>，则<code>Next[7]=3</code>。 设<code>j</code>表示前i个字符前后缀公共部分的前缀的最后一个字符。 此时已经处理了前<code>i</code>个字符，此时<code>j</code>指向前缀的后一个字符，<code>i</code>指向已处理子字符串位置，即<code>Next[j]</code>和<code>P[i]</code>，这里下标是从0开始的，对第<code>i+1</code>个字符来说有多重情况，分别讨论：</p><ol><li><code>p[i]==p[j]</code>： 如果最新一个位置的字符相等那么就表示可以直接从原来的前后缀共同部分直接扩展过来，显而易见<code>Next[i+1] = Next[i]+1</code>；</li><li><code>p[i]!=p[j]</code>： 如果不匹配就需要减少公共部分的长度，此时只需要回退到<code>j=Next[j]</code>的位置就可以。<code>j=Next[j]</code>表示将公共部分回退到子串<code>p[0~i-1]</code>中<code>Next[j]</code>上一个公共部分子串的长度。这一过程持续到<code>j</code>回退到<code>0</code>或者<code>p[j]==p[i]</code>。</li></ol><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1e5</span><span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> Next<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">getNext</span><span class="token punctuation">(</span>string p<span class="token punctuation">)</span><span class="token punctuation">{</span>
	Next<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>Next<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> plen <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>plen<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> j <span class="token operator">=</span> Next<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&amp;&amp;</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>p<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			j <span class="token operator">=</span> Next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>p<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			Next<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Next<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			Next<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">kmp</span><span class="token punctuation">(</span>string s<span class="token punctuation">,</span>string p<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> slen <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>plen <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">getNext</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>slen<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&amp;&amp;</span>p<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">!=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			j <span class="token operator">=</span> Next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>p<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> plen<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token operator">-</span>plen<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","kmp.html.vue"]]);export{k as default};