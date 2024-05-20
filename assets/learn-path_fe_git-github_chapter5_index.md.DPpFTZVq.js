import{_ as t,c as a,o as s,a1 as e}from"./chunks/framework.t0t3spwR.js";const i="/assets/2019-03-23-21-15-40.B5HzZXyW.png",p="/assets/2019-03-23-21-16-22.BLFii0eK.png",n="/assets/2019-03-23-21-23-05.CtkOgm3h.png",o="/assets/2019-03-23-21-25-13.Bx5zn2LD.png",c="/assets/2019-03-23-21-25-37.C7FRGtt6.png",l="/assets/2019-03-23-21-26-49.DH_gcvk5.png",h="/assets/2019-03-23-21-27-39.Bp1CPiPP.png",P=JSON.parse('{"title":"Git 高效入门指南","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/fe/git-github/chapter5/index.md","filePath":"learn-path/fe/git-github/chapter5/index.md"}'),r={name:"learn-path/fe/git-github/chapter5/index.md"},g=e('<h1 id="git-高效入门指南" tabindex="-1">Git 高效入门指南 <a class="header-anchor" href="#git-高效入门指南" aria-label="Permalink to &quot;Git 高效入门指南&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果链接失效或者有其他问题，请联系牛马程序员金牌讲师--迈克尔.牛马，微信：Michael-Niuma</p></div><h2 id="_5-1-标签的作用" tabindex="-1">5.1.标签的作用 <a class="header-anchor" href="#_5-1-标签的作用" aria-label="Permalink to &quot;5.1.标签的作用&quot;">​</a></h2><p>给当前版本打一个标签，在 github 上就会形成一个 releases 版本</p><p><img src="'+i+'" alt=""></p><p>点击进去后，用户就可以下载对应版本的源代码</p><p><img src="'+p+'" alt=""></p><h2 id="_5-2-在本地-git-工具上创建标签-同步到-github" tabindex="-1">5.2.在本地 git 工具上创建标签，同步到 github <a class="header-anchor" href="#_5-2-在本地-git-工具上创建标签-同步到-github" aria-label="Permalink to &quot;5.2.在本地 git 工具上创建标签，同步到 github&quot;">​</a></h2><p>1.查看当前有多少标签</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git tag</span></span></code></pre></div><p>2.创建一个标签</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git tag v1.0</span></span></code></pre></div><p>3.把标签推送到 github</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push origin v1.0</span></span></code></pre></div><p>推送完成后，我们去 github 查看结果：</p><p><img src="'+n+'" alt=""></p><h2 id="_5-3-直接在-github-上创建标签" tabindex="-1">5.3.直接在 github 上创建标签 <a class="header-anchor" href="#_5-3-直接在-github-上创建标签" aria-label="Permalink to &quot;5.3.直接在 github 上创建标签&quot;">​</a></h2><p>1.点击进入版本发布页面</p><p><img src="'+o+'" alt=""></p><p>2.点击创建一个版本</p><p><img src="'+c+'" alt=""></p><p>3.填写相应的版本号和描述，点击发布</p><p><img src="'+l+'" alt=""></p><p>4.结果</p><p><img src="'+h+'" alt=""></p>',25),d=[g];function _(u,m,b,v,k,f){return s(),a("div",null,d)}const C=t(r,[["render",_]]);export{P as __pageData,C as default};
