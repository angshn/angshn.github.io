import{_ as a,r as s,o as c,c as d,b as n,w as p,d as o,a as e,e as l}from"./app-1OpTEKPL.js";const i={},h=l('<h2 id="bio" tabindex="-1"><a class="header-anchor" href="#bio"><span>BIO</span></a></h2><p>BIO(Blocking I/O)是同步组设IO模型。当应用程序发起读取操作read之后，调用线程会被一直阻塞，直到OS内核将所需数据拷贝到用户空间。</p><h2 id="nio" tabindex="-1"><a class="header-anchor" href="#nio"><span>NIO</span></a></h2><p>NIO(Non-blocking/New IO)是基于通道的非阻塞I/O的面向缓冲的操作方法。通常用在高负载、高并发的场景。</p><p>与BIO不同，NIO会执行轮训操作，移植调用read操作查询数据是否准备好，自然而然的缺点就是非常耗费CPU资源。</p><p>使用I/O多路复用可以避免轮询操作带来的CPU资源损耗。</p><p>java的NIO使用了<code>Selector</code>来实现非阻塞I/O。通过事件通知API就能确定一组非阻塞套接字中有哪些已经准备就绪。使用一个线程就可以管理多个客户端连接。</p>',7),_=e("img",{style:{"border-radius":"0.3125em","box-shadow":"0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08)"},src:"https://cdn.jsdelivr.net/gh/angshn/imageshome@main/imgs/java/nio/selector.png"},null,-1),I=e("br",null,null,-1),O=e("div",{style:{color:"#999","border-bottom":"1px solid #d9d9d9",display:"inline-block",padding:"2px"}},"图1. Selector示意图",-1),g={href:"https://zhuanlan.zhihu.com/p/115220699",target:"_blank",rel:"noopener noreferrer"},u=l('<blockquote><p>通道方法可以减少CPU在数据读取操作中的操作，可以让CPU将更多的时间放在任务上。CPU会向I/O通道发送一条I/O指令，通道执行通道指令程序就可以完成数据的传送。这一过程不需要CPU的参与。</p></blockquote><h3 id="io多路复用" tabindex="-1"><a class="header-anchor" href="#io多路复用"><span>IO多路复用</span></a></h3><p>IO多路复用可以再单线程或单进程中同时处理多个事件流，本质上是节省系统资源。</p><p>在linux中有三种IO复用可用：<code>select</code>、<code>poll</code>和<code>epoll</code>。他们的功能是类似的。IO多路复用可以同时关注多个文件描述符（linux中意文件描述符代表一个打开的文件）。</p><p><strong>select</strong>的调用会被阻塞，知道有文件描述符可以进行IO或者其他异常情况才会返回。<strong>select</strong>同时设置三组文件描述符<code>readdfs</code>、<code>writefds</code>和<code>exceptdfs</code>，分别代表监听读、监听写和监听异常文件描述符组。<strong>select</strong>返回时会只返回可以进行对应操作的文件描述符，不符合的会被过滤掉。</p><p><strong>select</strong>可以同时监听很多文件，其默认大小是<strong>1024</strong>，这个值是可以更改的。<strong>pselect</strong>和<strong>select</strong>类似。</p>',6),x=e("strong",null,"epoll",-1),m=e("code",null,"select",-1),b={href:"https://man7.org/linux/man-pages/man7/epoll.7.html",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"aio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aio"},[e("span",null,"AIO")])],-1),N=e("p",null,[e("strong",null,"AIO(Asynchronous I/O)"),o(" 异步IO，是NIO的改进版。")],-1),k=e("p",null,"异步IO是基于事件和回调机制实现的，应用操作之后会直接返回，当操作完成之后OS会通过回调机制调用处理操作。",-1),C=e("p",null,"目前netty使用的还是NIO并非是AIO，因为AIO对性能的他提升不是很明显。",-1);function v(B,P){const r=s("center"),t=s("ExternalLinkIcon");return c(),d("div",null,[h,n(r,null,{default:p(()=>[_,o(),I,O]),_:1}),e("p",null,[e("a",g,[o("一文看懂IO多路复用"),n(t)])]),u,e("p",null,[x,o("是linux对"),m,o("的增强操作，进一步优化了I/O的执行效率，同时减少了I/O多路复用带来的损耗。"),e("a",b,[o("epoll"),n(t)])]),f,N,k,C])}const U=a(i,[["render",v],["__file","io-modules.html.vue"]]);export{U as default};