import{_ as e,o as n,c as a,e as s}from"./app-1OpTEKPL.js";const i={},d=s(`<h2 id="多版本并发控制-multi-version-concurrency-control" tabindex="-1"><a class="header-anchor" href="#多版本并发控制-multi-version-concurrency-control"><span>多版本并发控制 (Multi-Version Concurrency Control)</span></a></h2><p>MVC用于在并发事务上保持数据的一致性和隔离性。通过在买个数据上维护多个版本的数据来实现。</p><p>当某事务要对数据进行修改时，MVCC会为该事务创建一个数据快照，而不是直接修改实际数据行。</p><h2 id="一致性非锁定读和锁定读" tabindex="-1"><a class="header-anchor" href="#一致性非锁定读和锁定读"><span>一致性非锁定读和锁定读</span></a></h2><h3 id="一致性非锁定读" tabindex="-1"><a class="header-anchor" href="#一致性非锁定读"><span>一致性非锁定读</span></a></h3><p>MVCC就是一致性锁定读的实现，MVCC实现了RR和防止部分幻读</p><h3 id="锁定读" tabindex="-1"><a class="header-anchor" href="#锁定读"><span>锁定读</span></a></h3><ul><li><code>select xx lock in share mode</code></li><li><code>select xx for update</code></li><li><code>insert</code>、<code>update</code>、<code>delete</code></li></ul><p>上述操作都会出发锁定读，在锁定读下读取的是数据的最新版本。锁定读会对读取到的记录加锁。</p><p><code>select ... lock in share mode</code> 对记录加<code>S</code>共享锁</p><p><code>select ... for update</code>,<code>insert</code>,<code>update</code>,<code>delete</code>：对记录上x锁，排它锁，其他任何事务不能加任何锁。</p><h2 id="mvcc-实现" tabindex="-1"><a class="header-anchor" href="#mvcc-实现"><span>MVCC 实现</span></a></h2><h3 id="隐藏字段" tabindex="-1"><a class="header-anchor" href="#隐藏字段"><span>隐藏字段</span></a></h3><ul><li>DB_TRX_ID：该行最后一次更新操作该行数据的事务id</li><li>DB_ROLL_PTR：回滚指针，指向该行的<code>undo log</code>。</li><li>DB_ROW_ID: 无主键且无唯一非空索引时，使用该字段生成聚簇索引。</li></ul><h3 id="readview" tabindex="-1"><a class="header-anchor" href="#readview"><span>ReadView</span></a></h3><p>ReadView用来做可见性判断。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">ReadView</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token comment">//大于等于这个 ID 的事务均不可见</span>
    <span class="token comment">//不可见事务的最低限制，即下一次要被分配的事务id</span>
    trx_id_t m_low_limit_id<span class="token punctuation">;</span>     
    <span class="token comment">//小于这个 ID 的事务均可见</span>
    <span class="token comment">//以前的事务都能看到，本事务不可见</span>
    trx_id_t m_up_limit_id<span class="token punctuation">;</span>
    <span class="token comment">// 对应的事务id</span>
    trx_id_t m_creator_trx_id<span class="token punctuation">;</span>    <span class="token comment">/* 创建该 Read View 的事务ID */</span>

    trx_id_t m_low_limit_no<span class="token punctuation">;</span>      <span class="token comment">/* 事务 Number, 小于该 Number 的 Undo Logs 均可以被 Purge */</span>
    <span class="token comment">// 当时的未提交的活跃事务id列表，这些id对应的事务对当前事务不可见</span>
    ids_t m_ids<span class="token punctuation">;</span>                  <span class="token comment">/* 创建 Read View 时的活跃事务列表 */</span>

    m_closed<span class="token punctuation">;</span>                     <span class="token comment">/* 标记 Read View 是否 close */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log"><span>undo-log</span></a></h3><p>MVCC中的undo-log用于在某记录被其他事务占用且对本事务不可见的时候读取历史数据，实现了非锁定读。</p><p>undo-log中有两种类型：</p><ol><li>insert undo log</li><li>update undo log</li></ol><p>insert undo log执行的数据插入只对本事务可见，因此对其他事物没有影响。</p><p>update undo log执行会对数据进行了修改。MVCC使用该类型来提供历史数据。</p><h3 id="数据可见性算法" tabindex="-1"><a class="header-anchor" href="#数据可见性算法"><span>数据可见性算法</span></a></h3><p>Select语句会创建一个快照<code>ReadView</code>记录，简而言之保存的是系统中当前不应该被本事务看到的其他事务 ID 列表（即 m_ids）。当用户在这个事务中读取某个记录时，会将该行当前的DB_TRX_ID和<code>ReadView</code>中的一些变量与当前事务ID进行比较，然后找到满足的数据记录。</p><ol><li>如果事务id小于当前ReadView中的最小活跃事务id或者当前事务id就是创建者的id，则可以访问</li><li>事务id大于等于即将要分配的事务id，就表示超出了可见范围，我不能看见未来的事务</li><li>如果没有活跃事务则默认表示可见。</li><li>在活跃事务id列表中二分查找是否有当前id，这些事务都是不可见的。</li></ol><p>用在该记录行的<code>DB_ROLL_PTR</code>来从undo log获取快照记录。</p><h2 id="rc和rr的差异" tabindex="-1"><a class="header-anchor" href="#rc和rr的差异"><span>RC和RR的差异</span></a></h2><ul><li>RC每次<code>select</code>之前都生成一个<code>ReadView</code></li><li>RR只在事务开始的第一个<code>Select</code>生产一个<code>ReadView</code></li></ul><h2 id="mvcc能够解决那些并发问题" tabindex="-1"><a class="header-anchor" href="#mvcc能够解决那些并发问题"><span>MVCC能够解决那些并发问题</span></a></h2><ul><li>RC 读已提交</li><li>RR 可重复读</li><li>幻读，一次事务中前后两次读取操作记录数不一致。</li></ul><h2 id="幻读的结局" tabindex="-1"><a class="header-anchor" href="#幻读的结局"><span>幻读的结局</span></a></h2><p>MVCC不能解决幻读，InnoDB使用额MVCC和Next-key Lock来解决幻读。Next-Key Lock可以锁住某些记录以及他们之间的<strong>缝隙</strong>以此来达到防止幻读。</p>`,33),c=[d];function o(l,t){return n(),a("div",null,c)}const r=e(i,[["render",o],["__file","MVCC.html.vue"]]);export{r as default};