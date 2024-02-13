import{_ as s,c as i,o as t,V as a}from"./chunks/framework.AW5yxxpt.js";const e="/assets/2019-03-22-20-44-40.Ci6Iqc3Z.png",p="/assets/2019-03-22-20-48-19.BraoL9tC.png",n="/assets/2019-03-22-20-49-46.D0uqgSsE.png",b=JSON.parse('{"title":"Git 高效入门指南","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/fe/git-github/chapter1/3.md","filePath":"learn-path/fe/git-github/chapter1/3.md"}'),h={name:"learn-path/fe/git-github/chapter1/3.md"},l=a('<h1 id="git-高效入门指南" tabindex="-1">Git 高效入门指南 <a class="header-anchor" href="#git-高效入门指南" aria-label="Permalink to &quot;Git 高效入门指南&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果链接失效或者有其他问题，请联系牛马程序员金牌讲师--迈克尔.牛马，微信：nodeing-cn</p></div><h2 id="_1-3-github-简单使用" tabindex="-1">1.3.github 简单使用 <a class="header-anchor" href="#_1-3-github-简单使用" aria-label="Permalink to &quot;1.3.github 简单使用&quot;">​</a></h2><p>github 网址： <a href="http://github.com" target="_blank" rel="noreferrer">http://github.com</a>, 注册账号过程简单，这里直接跳过，接下来我们介绍一下创建仓库的过程</p><p>1.右上角，New repository</p><p><img src="'+e+'" alt=""></p><p>2.填写必要信息，包括仓库名称，描述以及是否公开，填写完成后点击 create 按钮</p><p><img src="'+p+'" alt=""></p><p>3.创建成功</p><p><img src="'+n+`" alt=""></p><p>4.测试克隆仓库</p><p>在命令行窗口中输入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git clone </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//github.com/nodeing666/git-demo.git</span></span></code></pre></div><p>5.在 git 端设置贡献者</p><p>注意，这里设置的邮箱和 name 最好和 github 使用的邮箱一致</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global user.name nd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00002</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global user.email </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18898887379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@163.com</span></span></code></pre></div><p>接下来查看配置是否成功</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list</span></span></code></pre></div>`,18),o=[l];function r(c,g,k,d,u,E){return t(),i("div",null,o)}const m=s(h,[["render",r]]);export{b as __pageData,m as default};
