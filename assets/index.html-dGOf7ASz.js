import{_ as n,o as s,c as a,e as p}from"./app-Ec_z8kpw.js";const t={},o=p(`<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引"><span>倒排索引</span></a></h2><p>倒排索引是指根据文档内容和文档id做关联，也就是说根据关键字来关联<strong>主键</strong>。</p><h2 id="主要概念" tabindex="-1"><a class="header-anchor" href="#主要概念"><span>主要概念</span></a></h2><p>Index： 索引</p><p>Document: 文档</p><h2 id="索引操作" tabindex="-1"><a class="header-anchor" href="#索引操作"><span>索引操作</span></a></h2><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引"><span>创建索引</span></a></h3><p>PUT <code>http://localhost:9200/shoping</code>，即可创建一个索引</p><h3 id="获取索引信息" tabindex="-1"><a class="header-anchor" href="#获取索引信息"><span>获取索引信息</span></a></h3><p>GET <code>http://localhost:9200/shoping</code>，即可获取</p><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引"><span>删除索引</span></a></h3><p>DELETE <code>http://localhost:9200/shoping</code></p><h2 id="文档操作" tabindex="-1"><a class="header-anchor" href="#文档操作"><span>文档操作</span></a></h2><h3 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档"><span>创建文档</span></a></h3><p>发送POST请求<code>http://localhost:9200/shoping/_doc</code>，<code>_doc</code>表示在<code>shoping</code>的索引下新增文档。这里不能使用PUT方法新增，因为PUT方式要求幂等性，但是新增请求可能会有重复消息所以不能使用PUT。</p><p>发送的请求体如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://xiaomi.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">3999.00</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功新增后会返回以下消息内容：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shoping&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CwQ1e4wBYeaqJ9naL2z7&quot;</span><span class="token punctuation">,</span> #文档id，由es自动创建
    <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span> #创建成功
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增文档可以自定义id，例如在请求连接之后追加文档id就可以，<code>http://localhost:9200/shoping/_doc/1001</code>，此时新增的文档的id就由指定的id<code>1001</code>来确定。如果给定了文档id，此时也可以使用PUT方法来新增，但是后续对于同一个id的文档，其操作会变成updated而不再是created。</p><p>另外，新增文档也可以将<code>_doc</code>关键字变成<code>_create</code>，同样可以执行新建操作。</p><h3 id="查询文档" tabindex="-1"><a class="header-anchor" href="#查询文档"><span>查询文档</span></a></h3><p><strong>主键查询</strong><code>GET http://localhost:9200/shoping/_doc/{doc_id}</code>，通过GET操作加上文档id就能获取一个指定的文档。例如：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>curl -X GET http<span class="token operator">:</span><span class="token comment">//localhost:9200/shoping/_doc/1003</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shoping&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//true表示找到了</span>
    <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xiaomi.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果查询的主键对应的内容不存在，那么其返回的json数据中的<code>found</code>字段为<code>false</code>。</p><p><strong>全查询</strong></p><p><code>GET http://localhost:9200/shoping/_search</code>即可获取对应index的所有数据</p><p>样例如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">47</span><span class="token punctuation">,</span> <span class="token comment">//消耗时间</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//命中结果</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shoping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CwQ1e4wBYeaqJ9naL2z7&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xiaomi.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            ...<span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shoping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1004&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xiaomi.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档修改" tabindex="-1"><a class="header-anchor" href="#文档修改"><span>文档修改</span></a></h3><p><strong>完全覆盖</strong></p><p>使用PUT方法来操作</p><p><code>PUT http://localhost:9200/shoping/_doc/{id}</code>，在请求体中填写数据即可。此时数据的<code>_version</code>字段的值会自动<code>+1</code>。</p><p><strong>部分字段更新</strong></p><p>使用POST方法局部更新</p><p><code>POST http://localhost:9200/shoping/_update/{id}</code>。</p><p>请求体格式如下</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>

    <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//这里填写要修改的字段</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档删除" tabindex="-1"><a class="header-anchor" href="#文档删除"><span>文档删除</span></a></h3><p><code>DELETE http://localhost:9200/shoping/_doc/{id}</code>即可删除，但是只能删除一次，多次删除会说明<code>not_found</code>。</p><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h2><h3 id="全量查询" tabindex="-1"><a class="header-anchor" href="#全量查询"><span>全量查询</span></a></h3><p>样例1： <code>curl -X GET http://localhost:9200/shoping/_search?q=category:小米</code>，这里全量查询所有类别为小米的商品。</p><p>也可以使用带请求体的GET方法来查询，例如</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>curl</code>请求如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>curl -X GET http<span class="token operator">:</span><span class="token comment">//localhost:9200/shoping/_search -H &#39;Content-Type:application/json&#39; -d &#39;{ &quot;query&quot;: { &quot;match&quot;:{ &quot;category&quot;:&quot;小米&quot; } } }&#39;</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.9400072</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shoping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CwQ1e4wBYeaqJ9naL2z7&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.9400072</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xiaomi.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shoping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1004&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.9400072</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://xiaomi.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要查询所有的数据直接在请求体中的<code>match</code>改为<code>match_all</code>就会拿到所有的数据。</p><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询"><span>分页查询</span></a></h3><p>在请求体中添加<code>from</code>和<code>size</code>字段来获取分页数据，例如</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段过滤" tabindex="-1"><a class="header-anchor" href="#字段过滤"><span>字段过滤</span></a></h3><p>在<code>_source</code>中指定想要的字段即可，类似mysql的指定字段。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h3><p>请求体中新增字段，并在其中给定根据什么字段来排序和排序方式等。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多条件查询" tabindex="-1"><a class="header-anchor" href="#多条件查询"><span>多条件查询</span></a></h3><ul><li>bool：表示条件查询 <ul><li>must: 多个条件同时成立，单条件查询可以写在这里，类似于and</li><li>should: 类似于or</li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.0</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询"><span>范围查询</span></a></h3><p>在请求体的<code>bool</code>字段中添加<code>filter</code>字段，例如：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token number">3000.00</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全匹配" tabindex="-1"><a class="header-anchor" href="#完全匹配"><span>完全匹配</span></a></h3><p>默认的查询字段会被es分词，如果要根据关键字来完全匹配则需要使用完全匹配。<code>match_phrase</code>表示完全匹配。</p><p><code>highlight</code>字段会对查询的字段做样式设定（前端代码）。例如下面的例子。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;米&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;catetory&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聚合操作" tabindex="-1"><a class="header-anchor" href="#聚合操作"><span>聚合操作</span></a></h3><p>聚合操作可以对删选出的数据做聚合。例如分组和求平均。</p><p>将<code>size</code>设置为0就不会返回原始数据了。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;price_group&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//分子名称</span>
            <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//分组</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span><span class="token comment">// 分组字段</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射关系" tabindex="-1"><a class="header-anchor" href="#映射关系"><span>映射关系</span></a></h2><p>映射关系可以规定数据的格式。</p><p>type:</p><ul><li>text。可以索引</li><li>keyword，必须完全匹配</li></ul><p>index，表示是否可以索引</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h2><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h3><p>索引是为了能够更快的找到索引，因此索引对ES非常重要。</p><h3 id="类型type" tabindex="-1"><a class="header-anchor" href="#类型type"><span>类型Type</span></a></h3><p>早起为了对应关系型数据库而引入了Type类型，对应于数据库中的表。目前Type的概念已被废弃。</p><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h3><h3 id="映射" tabindex="-1"><a class="header-anchor" href="#映射"><span>映射</span></a></h3><p>某个字段的数据类型、是否被索引等</p><h3 id="分片" tabindex="-1"><a class="header-anchor" href="#分片"><span>分片</span></a></h3><p>类似于数据库的分表，或者Kafka的分区partition</p><h3 id="副本" tabindex="-1"><a class="header-anchor" href="#副本"><span>副本</span></a></h3><p>一个分片或者节点设置一个副本，增加了分布式的分区容错性。</p><h3 id="分配" tabindex="-1"><a class="header-anchor" href="#分配"><span>分配</span></a></h3><p>将分片分配给某个节点的过程，类似于Redis的hash槽，包括副本的分配。</p>`,91),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
