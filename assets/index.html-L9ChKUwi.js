import{_ as n,o as s,c as a,e}from"./app-Ec_z8kpw.js";const p={},t=e(`<h1 id="行人检测" tabindex="-1"><a class="header-anchor" href="#行人检测"><span>行人检测</span></a></h1><p><strong>TODO</strong>:</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 行人检测介绍</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 现有数据集</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 评价指标</li></ul><h2 id="行人检测简要介绍" tabindex="-1"><a class="header-anchor" href="#行人检测简要介绍"><span>行人检测简要介绍</span></a></h2><h2 id="数据集" tabindex="-1"><a class="header-anchor" href="#数据集"><span>数据集</span></a></h2><p><code>CityPersons</code>: cityscapes数据集的子集</p><p><code>CrowdHuman</code>: 复杂场景的行人检测数据集，每张图片的人数要大大多于citypersons</p><h2 id="评价指标" tabindex="-1"><a class="header-anchor" href="#评价指标"><span>评价指标</span></a></h2><p><code>MR-2</code>: log-average missing rate, 对数平均丢失率。通常是在9个FPPI值下取平均miss rate。</p><p><code>FPPI</code>: <code>False Negetive Per Image</code>，每张图片的FN</p><p>在<code>mmdetection</code>中的计算代码如下</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">eval_mr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> score_list<span class="token punctuation">,</span> gt_num<span class="token punctuation">,</span> img_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Evaluate by Caltech-style log-average miss rate.

        Args:
            score_list(list[tuple[ndarray, int, str]]): Matching result.
                a list of tuples (dtbox, label, imgID) in the descending
                sort of dtbox.score.
            gt_num(int): The number of gt boxes in the entire dataset.
            img_num(int): The number of image in the entire dataset.

        Returns:
            mr(float): result of miss rate.
        &quot;&quot;&quot;</span>

        <span class="token comment"># find greater_than</span>
        <span class="token keyword">def</span> <span class="token function">_find_gt</span><span class="token punctuation">(</span>lst<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> idx<span class="token punctuation">,</span> _item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> _item <span class="token operator">&gt;=</span> target<span class="token punctuation">:</span>
                    <span class="token keyword">return</span> idx
            <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>

        <span class="token keyword">if</span> self<span class="token punctuation">.</span>mr_ref <span class="token operator">==</span> <span class="token string">&#39;CALTECH_-2&#39;</span><span class="token punctuation">:</span>
            <span class="token comment"># CALTECH_MRREF_2: anchor points (from 10^-2 to 1) as in</span>
            <span class="token comment"># P.Dollar&#39;s paper</span>
            ref <span class="token operator">=</span> <span class="token punctuation">[</span>
                <span class="token number">0.0100</span><span class="token punctuation">,</span> <span class="token number">0.0178</span><span class="token punctuation">,</span> <span class="token number">0.03160</span><span class="token punctuation">,</span> <span class="token number">0.0562</span><span class="token punctuation">,</span> <span class="token number">0.1000</span><span class="token punctuation">,</span> <span class="token number">0.1778</span><span class="token punctuation">,</span> <span class="token number">0.3162</span><span class="token punctuation">,</span>
                <span class="token number">0.5623</span><span class="token punctuation">,</span> <span class="token number">1.000</span>
            <span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># CALTECH_MRREF_4: anchor points (from 10^-4 to 1) as in</span>
            <span class="token comment"># S.Zhang&#39;s paper</span>
            ref <span class="token operator">=</span> <span class="token punctuation">[</span>
                <span class="token number">0.0001</span><span class="token punctuation">,</span> <span class="token number">0.0003</span><span class="token punctuation">,</span> <span class="token number">0.00100</span><span class="token punctuation">,</span> <span class="token number">0.0032</span><span class="token punctuation">,</span> <span class="token number">0.0100</span><span class="token punctuation">,</span> <span class="token number">0.0316</span><span class="token punctuation">,</span> <span class="token number">0.1000</span><span class="token punctuation">,</span>
                <span class="token number">0.3162</span><span class="token punctuation">,</span> <span class="token number">1.000</span>
            <span class="token punctuation">]</span>

        tp<span class="token punctuation">,</span> fp <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
        fppiX<span class="token punctuation">,</span> fppiY <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>score_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                tp <span class="token operator">+=</span> <span class="token number">1.0</span>
            <span class="token keyword">elif</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                fp <span class="token operator">+=</span> <span class="token number">1.0</span>

            fn <span class="token operator">=</span> gt_num <span class="token operator">-</span> tp
            recall <span class="token operator">=</span> tp <span class="token operator">/</span> <span class="token punctuation">(</span>tp <span class="token operator">+</span> fn<span class="token punctuation">)</span>
            missrate <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">-</span> recall
            fppi <span class="token operator">=</span> fp <span class="token operator">/</span> img_num
            fppiX<span class="token punctuation">.</span>append<span class="token punctuation">(</span>fppi<span class="token punctuation">)</span>
            fppiY<span class="token punctuation">.</span>append<span class="token punctuation">(</span>missrate<span class="token punctuation">)</span>

        score <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> pos <span class="token keyword">in</span> ref<span class="token punctuation">:</span>
            argmin <span class="token operator">=</span> _find_gt<span class="token punctuation">(</span>fppiX<span class="token punctuation">,</span> pos<span class="token punctuation">)</span>
            <span class="token keyword">if</span> argmin <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                score<span class="token punctuation">.</span>append<span class="token punctuation">(</span>fppiY<span class="token punctuation">[</span>argmin<span class="token punctuation">]</span><span class="token punctuation">)</span>
        score <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>score<span class="token punctuation">)</span>
        mr <span class="token operator">=</span> np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>np<span class="token punctuation">.</span>log<span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> mr

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
