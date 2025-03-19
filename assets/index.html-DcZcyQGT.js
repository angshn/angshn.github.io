import{_ as s,o as n,c as a,e as t}from"./app-Ec_z8kpw.js";const o={},r=t('<h2 id="分布式理论" tabindex="-1"><a class="header-anchor" href="#分布式理论"><span>分布式理论</span></a></h2><h3 id="cap理论" tabindex="-1"><a class="header-anchor" href="#cap理论"><span>CAP理论</span></a></h3><p>CAP理论又被叫做布鲁斯定理。CAP是<strong>Consistency</strong>、<strong>Availability</strong>和<strong>Partition Tolerence</strong>（分区容错性）的组合。</p><ul><li><strong>一致性</strong>：所有节点访问同一份最新的数据副本</li><li><strong>可用性</strong>：非故障节点在合理时间内返回合理的数据</li><li><strong>分区容错性</strong>：出现网络分区时仍能够提供服务。</li></ul><p>CAP理论中只能出现<strong>AP</strong>或者<strong>CP</strong>，常见的AP架构的应用有：<strong>Cassandra</strong>、<strong>Eureka</strong>和<strong>Nacos</strong>，常见的CP架构有Zookeeper和Nacos，Nacos即是AP也是CP，但是只能是其中一个角色。</p><h3 id="base理论" tabindex="-1"><a class="header-anchor" href="#base理论"><span>BASE理论</span></a></h3><p>BASE理论是Basically Available（基本可用）、Soft-state（软状态）和Eventually Consistent（最终一致性）的组合。是从CAP理论演化而来。</p><p>在AP理论中不是说放弃一致性，而是要在系统故障恢复之后能够达到最终一致性。</p><p><strong>基本可用</strong></p><p>基本可用是指系统发生分区故障时，允许损失部分的可用性。一般允许两种类型的损失：<strong>响应时间</strong>上的损失和<strong>系统功能</strong>上的损失。</p><p>一部分功能的损失并不会影响整体的可用性，这一部分是可接受的。</p><p><strong>软状态</strong></p><p>软状态是指允许系统中存在不一致的数据中间状态，并且这些中间状态是不影响系统的整体可用性，例如搜索引擎的数据可以允许一部分的数据延迟，但是在某一时间段之后应该达到一致性。</p><p><strong>最终一致性</strong></p><p>最终一致性是指经过一段时间后系统的数据最终能够到到一致状态。</p><h4 id="一致性的分类" tabindex="-1"><a class="header-anchor" href="#一致性的分类"><span>一致性的分类</span></a></h4><p>一致性分为三种：</p><ul><li>强一致性：要求最高的一级</li><li>弱一致性：不要求某个时间段内必须一致</li><li>最终一致性：比弱一致性还弱，能在一定时间内达到一致性即可。</li></ul><h2 id="分布式共识" tabindex="-1"><a class="header-anchor" href="#分布式共识"><span>分布式共识</span></a></h2><p>分布式共识基础算法有Paxos、Raft和Gossip等。</p>',20),e=[r];function p(i,l){return n(),a("div",null,e)}const g=s(o,[["render",p],["__file","index.html.vue"]]);export{g as default};
