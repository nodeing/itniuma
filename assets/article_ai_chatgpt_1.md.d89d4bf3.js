import{_ as a,c as s,o as e,a as t}from"./app.4a51e320.js";const C=JSON.parse('{"title":"ChatGPT \u7A33\u5B9A\u4F7F\u7528\u65B9\u6848","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728\u7EBF\u7248\u672C","slug":"\u5728\u7EBF\u7248\u672C","link":"#\u5728\u7EBF\u7248\u672C","children":[]},{"level":2,"title":"\u672C\u5730\u4F7F\u7528","slug":"\u672C\u5730\u4F7F\u7528","link":"#\u672C\u5730\u4F7F\u7528","children":[]},{"level":2,"title":"\u5BA2\u6237\u7AEF\u4E0B\u8F7D","slug":"\u5BA2\u6237\u7AEF\u4E0B\u8F7D","link":"#\u5BA2\u6237\u7AEF\u4E0B\u8F7D","children":[]}],"relativePath":"article/ai/chatgpt/1.md"}'),n={name:"article/ai/chatgpt/1.md"},p=t(`<h1 id="chatgpt-\u7A33\u5B9A\u4F7F\u7528\u65B9\u6848" tabindex="-1">ChatGPT \u7A33\u5B9A\u4F7F\u7528\u65B9\u6848 <a class="header-anchor" href="#chatgpt-\u7A33\u5B9A\u4F7F\u7528\u65B9\u6848" aria-hidden="true">#</a></h1><h2 id="\u5728\u7EBF\u7248\u672C" tabindex="-1">\u5728\u7EBF\u7248\u672C <a class="header-anchor" href="#\u5728\u7EBF\u7248\u672C" aria-hidden="true">#</a></h2><p>ChatGPT-Next-Web \u8FD9\u4E2A\u9879\u76EE\u662F\u4E00\u4E2A\u975E\u5E38\u706B\u7206\u7684\u5F00\u6E90 ChatGPT \u5BA2\u6237\u7AEF\uFF0C\u76EE\u524D\u5DF2\u7ECF 3 \u4E07\u591A\u661F\u4E86\uFF0C\u529F\u80FD\u4E5F\u9010\u6E10\u5B8C\u5584\uFF0C\u4F5C\u8005\u90E8\u7F72\u4E86\u4E00\u4E2A\u5728\u7EBF\u7248\u672C\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528\uFF0C \u9879\u76EE\u5730\u5740\uFF1A<a href="https://github.com/Yidadaa/ChatGPT-Next-Web" target="_blank" rel="noreferrer">\u70B9\u51FB\u8FDB\u5165</a></p><h2 id="\u672C\u5730\u4F7F\u7528" tabindex="-1">\u672C\u5730\u4F7F\u7528 <a class="header-anchor" href="#\u672C\u5730\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u524D\u63D0\uFF1A \u4F60\u9700\u8981\u5728\u4F60\u7684\u7535\u8111\u4E0A\u5B89\u88C5 nodejs \u73AF\u5883\uFF0C\u4E0B\u8F7D\u5730\u5740\uFF1A<a href="https://nodejs.org/en" target="_blank" rel="noreferrer">https://nodejs.org/en</a></p></div><p><img src="https://cdn.jsdelivr.net/gh/nodeing/img-host/20230705184254.png" alt="20230705184254"></p><p>\u8BF7\u5B89\u88C5 lts \u7A33\u5B9A\u7248\u672C\uFF0C\u4E0D\u8981\u5B89\u88C5\u6700\u65B0\u7248\u672C</p><p>\u7B2C 1 \u6B65\uFF0C\u62C9\u53D6\u9879\u76EE\u4EE3\u7801</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//github.com/Yidadaa/ChatGPT-Next-Web.git</span></span>
<span class="line"></span></code></pre></div><p>\u7B2C 2 \u6B65\uFF0C\u62C9\u53D6\u4E0B\u6765\u540E\uFF0C\u8FDB\u5165\u5230\u9879\u76EE\u76EE\u5F55</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd ChatGPT</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Web</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u5B89\u88C5\u4F9D\u8D56</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C 3 \u6B65\uFF0C\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C 4 \u6B65\uFF0C\u586B\u5165 API \u63A5\u53E3\u5730\u5740\u53EF\u7528 Key \u5373\u53EF</p><p><img src="https://cdn.jsdelivr.net/gh/nodeing/img-host/20230705200247.png" alt="20230705200247"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F\uFF1Akey \u9700\u8981\u81EA\u884C\u4ED8\u8D39\u5145\u503C\uFF0C\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u53EF\u4EE5\u8054\u7CFB\u6211\uFF0Cniuma_top</p></div><h2 id="\u5BA2\u6237\u7AEF\u4E0B\u8F7D" tabindex="-1">\u5BA2\u6237\u7AEF\u4E0B\u8F7D <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u4E0B\u8F7D" aria-hidden="true">#</a></h2><p>\u70B9\u51FB\u8FDB\u5165\u4E0B\u8F7D\u5730\u5740\uFF1A<a href="https://github.com/Yidadaa/ChatGPT-Next-Web/releases" target="_blank" rel="noreferrer">\u4E0B\u8F7D\u5730\u5740</a></p><p>\u6839\u636E\u4F60\u81EA\u5DF1\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684\u7248\u672C</p><p><img src="https://cdn.jsdelivr.net/gh/nodeing/img-host/20230713202733.png" alt="20230713202733"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F\uFF1A\u8FD9\u4E2A\u9879\u76EE\u662F\u652F\u6301\u7B2C\u4E09\u65B9\u4EE3\u7406\u548C open ai \u5B98\u7F51 api key \u65B9\u5F0F\u8BBF\u95EE\u7684</p><p>\u5173\u4E8E open ai \u8D26\u53F7\u6CE8\u518C\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u4E0D\u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\uFF0C\u5927\u5BB6\u81EA\u884C\u7814\u7A76\uFF0C\u4E0D\u8FC7\u6839\u636E\u6211\u7684\u4F7F\u7528\u7ECF\u9A8C\uFF0C\u5982\u679C\u6CA1\u6709\u4F7F\u7528 chatgpt plus \u63D2\u4EF6\u7684\u9700\u6C42\uFF0C\u4F7F\u7528\u7B2C\u4E09\u65B9\u7684 key\uFF0C\u8BBF\u95EE\u901F\u5EA6\u662F\u6700\u5FEB\uFF0C\u6700\u7A33\u5B9A\u7684\uFF0C\u6709\u5176\u4ED6\u95EE\u9898\uFF0C\u53EF\u4EE5\u54A8\u8BE2\u6211\uFF1A niuma_top</p></div>`,23),l=[p];function c(o,i,r,d,h,g){return e(),s("div",null,l)}const _=a(n,[["render",c]]);export{C as __pageData,_ as default};