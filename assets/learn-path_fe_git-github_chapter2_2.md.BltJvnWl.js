import{_ as s,c as a,o as i,V as n}from"./chunks/framework.AW5yxxpt.js";const t="/assets/2019-03-23-09-13-12.DWxWoRBV.png",e="/assets/2019-03-23-09-15-19.mPxACmEU.png",p="/assets/2019-03-23-09-25-06.ByvSWfN7.png",u=JSON.parse('{"title":"Git 高效入门指南","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/fe/git-github/chapter2/2.md","filePath":"learn-path/fe/git-github/chapter2/2.md"}'),l={name:"learn-path/fe/git-github/chapter2/2.md"},h=n('<h1 id="git-高效入门指南" tabindex="-1">Git 高效入门指南 <a class="header-anchor" href="#git-高效入门指南" aria-label="Permalink to &quot;Git 高效入门指南&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果链接失效或者有其他问题，请联系牛马程序员金牌讲师--迈克尔.牛马，微信：Michael-Niuma</p></div><h2 id="_2-2-工作区中-git-目录详解" tabindex="-1">2.2.工作区中.git 目录详解 <a class="header-anchor" href="#_2-2-工作区中-git-目录详解" aria-label="Permalink to &quot;2.2.工作区中.git 目录详解&quot;">​</a></h2><p>以 git-demo 项目为例，进入到 git-demo 目录，通过 ls -al 命令查看里面内容</p><p><img src="'+t+'" alt=""></p><p>注意：如果是 windows 用户，命令行窗口不支持 ls -al 命令，可以安装 cmder 终端，这样体验会更好，效果如图：</p><p><img src="'+e+'" alt=""></p><p>cmder 下载地址：<a href="http://edu.nodeing.com/group/1/thread/27" target="_blank" rel="noreferrer">http://edu.nodeing.com/group/1/thread/27</a></p><p>接下来，我们进入到.git 目录，分别介绍这个目录下的文件和文件夹的功能</p><p><img src="'+p+`" alt=""></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.hooks文件夹,这个文件夹下存放一些shell脚本，可以设置一些特定的git命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">后触发相应的脚本，在搭建一些git托管系统的时候会用到</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.info文件夹，这里包含了一些git仓库信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.logs文件夹，保存所有更改的引用记录，继续打开logs文件夹，有refs文件夹和HEAD文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4.objects文件夹,该目录存放所有的Git对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5.refs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heads文件夹，存储本地所有分支文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">6.refs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tags文件夹，当给当前分支打上标签时，就会在tags文件夹下，生成对应文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">7.COMMIT_EDITMSG文件提交的是最近一次提交的描述信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8.config文件，这个是GIt仓库的配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">9.description文件，仓库的描述信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.index文件，这个文件就是我们前面提到的暂存区（stage），是一个二进制文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">11.HEAD文件里面只存储了当前分支的关联</span></span></code></pre></div>`,11),r=[h];function c(o,E,d,k,g,_){return i(),a("div",null,r)}const f=s(l,[["render",c]]);export{u as __pageData,f as default};
