import{_ as a,c as s,o as e,V as p}from"./chunks/framework.AW5yxxpt.js";const u=JSON.parse('{"title":"揭密抖音 Java 之父的镰刀之路","description":"","frontmatter":{},"headers":[],"relativePath":"article/2023.08/3.md","filePath":"article/2023.08/3.md"}'),t={name:"article/2023.08/3.md"},n=p(`<h1 id="揭密抖音-java-之父的镰刀之路" tabindex="-1">揭密抖音 Java 之父的镰刀之路 <a class="header-anchor" href="#揭密抖音-java-之父的镰刀之路" aria-label="Permalink to &quot;揭密抖音 Java 之父的镰刀之路&quot;">​</a></h1><h2 id="起源" tabindex="-1">起源 <a class="header-anchor" href="#起源" aria-label="Permalink to &quot;起源&quot;">​</a></h2><p>我和 Java 之父互怼的起因是源于抖音一个叫元哥说 Java 的博主搞线下培训班倒闭的事情，这个博主我们在私下有些交流，觉得人也挺实在的，算是认识，这个博主线下倒闭不干了，被他拿出来喷，说的是同行都被他干倒闭了，特别是这个元哥说 Java，以前几千的课程被他把价格打下来了，而且卖不动了，我虽然也是卖课的，但是没有什么交集，首先我不卖 Java 课，其次，我不卖视频课程，本身是犯不着跟这种人撕逼的，但是看到这种落井下石的视频，我还是有些火大，可能是因为我曾经也是创业者，懂得创业失败的痛苦，再加上他踩的又是我认识的人，我觉得有必要站出来怼一下，下面我就把一些底层的逻辑梳理一遍，有缘人看到这篇文章，能少踩坑就少踩坑吧</p><h2 id="为什么他的视频总是很浮夸" tabindex="-1">为什么他的视频总是很浮夸？ <a class="header-anchor" href="#为什么他的视频总是很浮夸" aria-label="Permalink to &quot;为什么他的视频总是很浮夸？&quot;">​</a></h2><p>本质原因在于抖音的流量算法机制，我们先来看看抖音的数据指标</p><p><img src="https://cdn.jsdelivr.net/gh/nodeing/img-host/20230830143046.png" alt="20230830143046"></p><p>当一个作品发布后，抖音会统计上面这些数据指标，大家可以先看看上面的信息，我这里只挑几个说一下</p><ol><li>完播率</li></ol><p>在播放数据指标方面，抖音会考察一个作品的完播率</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>完播率 = 看完视频的人 / 总播放人数</span></span>
<span class="line"><span>举例： 1000个播放，有100个人看完视频，有900个人没有看完视频，完播率就是：100/1000 = 10%</span></span></code></pre></div><p>在同一级别的作品里面，完播率越高，抖音会给推送更多的流量，例如：都是一个 2 分钟的作品，完播率更高的这个作品会得到系统推流，流量更高</p><ol start="2"><li>2s 跳出率</li></ol><p>2s 跳出率的公式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>2s跳出率 = 看完2秒后滑走的人 / 总播放量</span></span></code></pre></div><ol start="3"><li>5s 完播率</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>5s完播率 = 看完5秒滑走的人 / 总播放量</span></span></code></pre></div><ol start="4"><li>平均播放时长</li></ol><p>这个指的是作品被播放的平均时长</p><p>先了解上面这几个指标，我们再来思考一个问题，为什么抖音的算法要设立这些指标？这里算法的具体内容我们肯定是不清楚的，但是假设是我自己来设计算法，我肯定是要从本质的目的出发，从更高的维度去考虑竞争关系来设计我的算法，而这个本质的目的就是竞争用户的时间</p><p>记住下面的关键字：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>用户的时间是稀缺资源</span></span></code></pre></div><p>在同一时间，你多耍一分钟抖音，你就少耍一分钟微信，所以抖音和微信的竞争本质是抢占更多的用户时间，在用算法来评价一个作品的时候，大致会这样考虑，那就是谁的作品能帮我抢占更多的用户时间，那么我就会认为这个作品是好作品，哪怕是这个作品咋咋呼呼的啥也不是，也依然是一个好作品</p><p>有了前面的这些知识储备，那么，我们再来分析 Java 之父中国分父的视频就不难理解了，你们可以去刷一下他的作品</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.有开屏往头上浇水的</span></span>
<span class="line"><span>2.有开屏搬砖的</span></span>
<span class="line"><span>3.有开屏就被人追赶的</span></span>
<span class="line"><span>4.有开屏就咋咋唬唬吼的</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>这些视频的本质目的就是拉用户停留，也就是完成前面我们说的指标，让你在 2 秒、5 秒这些关键节点不至于滑走，用一句通俗的话来说叫做 <code>吸引眼球，博取关注</code>,当你停留的时间越长，算法就会认为这个作品更优质，从而推送更多的流量</p><p>如果算法仅仅是考虑上面那些播放指标，其实是不完整的，还要考虑其他的指标，例如：评论、转发、点赞、关注等等，这些指标越好，可能被判断的质量就会越高，另外，还有一些负面的指标，例如：掉粉、不感兴趣率等等，所以，当你越讨厌他，你越在他的评论区骂，反而是在给他增加热度，这不划算的，这也是为啥他能挨骂也还能坚持做抖音，是因为你们越骂得厉害，他的收益越高，在高收益面前，不要脸又算得了什么呢？</p><h2 id="为什么销量很高" tabindex="-1">为什么销量很高？ <a class="header-anchor" href="#为什么销量很高" aria-label="Permalink to &quot;为什么销量很高？&quot;">​</a></h2><p>为什么他的课程都是有免费课程可以替代的，但依然会有很多人买呢？为什么有很多博主流量很好，但依然卖不出产品呢？这里涉及到抖音的流量池问题，你可以简单的理解为挂车的流量和不挂车的流量是有区别的？我们每个人在抖音的数据库里面，可能早就被打上了标签，例如：有消费习惯的是一群人，没有消费习惯的是一群人，这个叫做人群包，如果一个作者，他经常在抖音卖货，那么，算法给他推的流量可能就是电商流量，有消费习惯的一波人，那么他的成交就会更高，如果一个作者他的作品，不是经常挂小黄车卖货，那么推荐的流量就会没有那么精准，我举个例子：有个博主叫做 Java 陆总监，这个博主其实是有流量的，几万粉丝，但是他的小店成交量为 0，也不经常挂小黄车卖货，所以他的作品获得的流量是没有 Java 之父精准的</p><h2 id="为什么垃圾课有人买" tabindex="-1">为什么垃圾课有人买？ <a class="header-anchor" href="#为什么垃圾课有人买" aria-label="Permalink to &quot;为什么垃圾课有人买？&quot;">​</a></h2><p>这里就要说一说他的商用模式了，我把这种商业模式称做无差别割韭菜模式，而他赚钱的本质就是赚信息差，你永远要相信，中国是一个人口大国，基数比较大，加上算法的精准推送，永远能给他找的目标客户，也就是那些小白，啥都不懂的，在直播间被精准洗脑以后，一冲动就会下单，举个例子：</p><p><img src="https://cdn.jsdelivr.net/gh/nodeing/img-host/20230830161124.png" alt="20230830161124"></p><p>这个小孩是个初中生，对编程很感兴趣，仅仅是兴趣而已，其他一无所知，刷到他的直播间，差点冲动就买了他 39.9 的课程，而这些课程在 B 站或者在我这里都是免费的内容，这个小孩找到我的时候，我就把我的视频课程给免费送了，也接近 2000 个课时</p><p>也许有些人会说，才 39.9，又不是几大千，这不能算割韭菜？那我就要问了，39.9 割 1 万人和 3999 割 100 人有啥区别？如果课程一样都比较烂的情况下，低价和高价是没有本质区别的，都是出来卖，立什么人设，立什么牌坊？又当婊子又立牌坊就有点恶心了</p><p>那为什么有的人割 39.9 口碑没有崩塌，而有的人割 3999 口碑会崩塌呢？本质上 39.9 是把伤害给缩小了，我割你 39.9 你不会肉疼，但是我割你 3999，对于有些人来说，可能要掉一层皮，对人的伤害是不一样的，所以从直观的感受上来说，卖高价课的人，都是应该被打倒的对象，这就是别人的高明之处，伪装成自己人割你，然后把你们当工具去攻击其他人</p><h2 id="为什么-java-的抖音博主不出来发声" tabindex="-1">为什么 Java 的抖音博主不出来发声？ <a class="header-anchor" href="#为什么-java-的抖音博主不出来发声" aria-label="Permalink to &quot;为什么 Java 的抖音博主不出来发声？&quot;">​</a></h2><p>Java 之父的高明之处在于，擅长搞人际关系，经常去别人直播间连麦互动，由于他自带话题和流量，去别人直播间连麦会给直播间带去流量，根据拿人手短，吃人嘴短的道理，明面上都不会跟他起冲突，明白了吧，有时候他要定向去喷人的时候，私底下也会去私聊，然后加微信交朋友，基本上也就把这些博主搞定了，我知道的他喷元哥，然后又私底下交流，就是这么搞定的，但是我对他们的圈子不感兴趣兴趣，我跟他互怼过后，他也用这种套路，让我加微信交流，我没啥兴趣</p><p><img src="https://cdn.jsdelivr.net/gh/nodeing/img-host/20230830165426.png" alt="20230830165426"></p><p>Java 圈子里面我知道的好像就 IT 老邪喷他，其他的好像跟他聊得不错</p><h2 id="搅屎棍的危害" tabindex="-1">搅屎棍的危害 <a class="header-anchor" href="#搅屎棍的危害" aria-label="Permalink to &quot;搅屎棍的危害&quot;">​</a></h2><p>用低质的内容，忽悠小白，大面积收割，被收割过的人吃了一次亏，见到卖课的就开始喷，这些被喷的优质内容生产者逐渐厌倦这种环境，决定离场，剩下的都是些垃圾内容，垃圾内容越来越多，小白越来越难以分辨，踩的坑也会越来越多，恶性循环，同时，学这些垃圾内容出来的小白大量投简历污染 hr 的邮箱，一个岗位上千简历，让企业以为人多饱和，根据供需关系决定价格的理论，人才供应多，企业一方面可以压低用人的成本，让那些真正有经验的人薪资下降，另一方面，企业从大量的简历中筛选高质量简历的成本变得更高，最后就只有限制学历和限制专业最高效，所以，后续入行的敲门砖会变得越来越高，科班、本科是标配，这意味着早几年入行的这些学历专科的人，工作会越来越难找</p><h2 id="毁三观" tabindex="-1">毁三观 <a class="header-anchor" href="#毁三观" aria-label="Permalink to &quot;毁三观&quot;">​</a></h2><p>打着用低价课把同行价格打下来，把同行搞倒闭的 Java 之父，把人引到朋友圈继续收割，高客单价课程好像是 6000 多，又当婊子，又立牌坊，不知道各位做 Java 的同行怎么看？</p>`,42),i=[n];function l(o,c,h,d,r,v){return e(),s("div",null,i)}const b=a(t,[["render",l]]);export{u as __pageData,b as default};
