import{_ as s,c as a,o as n,a as p}from"./app.c7a8eb5d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C06\u4F60\u7684\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F","slug":"\u5C06\u4F60\u7684\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F","link":"#\u5C06\u4F60\u7684\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F","children":[]}],"relativePath":"article/2023.06/7.md"}'),l={name:"article/2023.06/7.md"},e=p(`<h2 id="\u5C06\u4F60\u7684\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F" tabindex="-1">\u5C06\u4F60\u7684\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F <a class="header-anchor" href="#\u5C06\u4F60\u7684\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p>pake \u8FD9\u4E2A\u5DE5\u5177\u53EF\u4EE5\u5E2E\u4F60\u628A\u7F51\u9875\u6253\u5305\u6210\u684C\u9762\u7A0B\u5E8F\uFF0C\u6253\u5305\u540E\u7684\u4F53\u79EF\u975E\u5E38\u5C0F\uFF0C\u9002\u5408\u628A\u4E00\u4E9B\u5E38\u7528\u7684\u7F51\u7AD9\u6253\u5305\u6210\u684C\u9762\u5E94\u7528\uFF0C\u7136\u540E\u901A\u8FC7\u5FEB\u6377\u5DE5\u5177\u5524\u9192\uFF0C\u80FD\u5927\u5927\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\uFF0C\u8282\u7EA6\u65F6\u95F4</p><p>\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><p>\u7B2C 1 \u6B65\uFF0C\u5B89\u88C5 pake \u5DE5\u5177</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g pake</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cli</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u7B2C 2 \u6B65\uFF0C\u6253\u5305</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> pake </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//chat.openai.com/\\?model\\=gpt-4 --name chatgpt --icon ./logo.icns --transparent --show-menu</span></span>
<span class="line"></span></code></pre></div><p>\u547D\u4EE4\u683C\u5F0F</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>pake url [options]</p></div><p>\u9009\u9879\u8BF4\u660E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --name &lt;nameValue&gt; \u6253\u5305\u51FA\u6765\u7684\u540D\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --icon &lt;path&gt; \u6253\u5305\u7684 icon</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --transparent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --show-menu \u662F\u5426\u663E\u793A\u83DC\u5355</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --height &lt;number&gt; \u9AD8\u5EA6\uFF0C\u9ED8\u8BA4 780</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --width &lt;number&gt; \u5BBD\u5EA6\uFF0C\u9ED8\u8BA4 1200</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --transparent \u662F\u5426\u542F\u7528\u6C89\u6D78\u5F0F\u6807\u9898\u3002\u9ED8\u8BA4\u503C\u4E3A false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --fullscreen \u662F\u5426\u5168\u5C4F\uFF0C\u9ED8\u8BA4 false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7B80\u5199 -r</span></span>
<span class="line"><span style="color:#A6ACCD;">  --no-resizable \u662F\u5426\u53EF\u4EE5\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\uFF0C\u9ED8\u8BA4 true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --show-menu \u663E\u793A\u83DC\u5355\u680F\uFF0C\u4E0D\u9ED8\u8BA4\u663E\u793A\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\u663E\u793A\u3002\u5EFA\u8BAE MacOS \u7528\u6237\u542F\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u66F4\u591A\u4F7F\u7528\u8BF4\u660E\uFF0C\u8BF7\u67E5\u770B\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://github.com/tw93/Pake/tree/master" target="_blank" rel="noreferrer">https://github.com/tw93/Pake/tree/master</a></p>`,12),t=[e];function o(c,r,i,C,A,y){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{D as __pageData,h as default};
