import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.t0t3spwR.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/2023.06/7.md","filePath":"article/2023.06/7.md"}'),e={name:"article/2023.06/7.md"},i=p(`<h2 id="将你的网页打包成桌面程序" tabindex="-1">将你的网页打包成桌面程序 <a class="header-anchor" href="#将你的网页打包成桌面程序" aria-label="Permalink to &quot;将你的网页打包成桌面程序&quot;">​</a></h2><p>pake 这个工具可以帮你把网页打包成桌面程序，打包后的体积非常小，适合把一些常用的网站打包成桌面应用，然后通过快捷工具唤醒，能大大提升工作效率，节约时间</p><p>使用步骤：</p><p>第 1 步，安装 pake 工具</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g pake</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli</span></span></code></pre></div><p>第 2 步，打包</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pake </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//chat.openai.com/\\?model\\=gpt-4 --name chatgpt --icon ./logo.icns --transparent --show-menu</span></span></code></pre></div><p>命令格式</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>pake url [options]</p></div><p>选项说明</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>  --name &lt;nameValue&gt; 打包出来的名字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --icon &lt;path&gt; 打包的 icon</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --transparent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --show-menu 是否显示菜单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --height &lt;number&gt; 高度，默认 780</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --width &lt;number&gt; 宽度，默认 1200</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --transparent 是否启用沉浸式标题。默认值为 false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --fullscreen 是否全屏，默认 false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 简写 -r</span></span>
<span class="line"><span>  --no-resizable 是否可以调整窗口大小，默认 true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --show-menu 显示菜单栏，不默认显示，输入以下命令即可显示。建议 MacOS 用户启用。</span></span></code></pre></div><p>更多使用说明，请查看官方文档：<a href="https://github.com/tw93/Pake/tree/master" target="_blank" rel="noreferrer">https://github.com/tw93/Pake/tree/master</a></p>`,12),t=[i];function l(c,h,o,r,d,k){return n(),a("div",null,t)}const m=s(e,[["render",l]]);export{u as __pageData,m as default};
