import{_ as s,c as p,o as a,a as e}from"./app.4a51e320.js";const l="/assets/55.d15f7590.png",n="/assets/77.79f9905b.png",t="/assets/88.e4a889ed.png",c="/assets/11.266153b4.png",o="/assets/22.c9e9df26.png",i="/assets/33.5e4ed81e.png",r="/assets/44.766108e6.png",d="/assets/x1.f08f42f4.png",u="/assets/x2.ef54e7b0.png",D=JSON.parse('{"title":"TS \u5168\u6808\u5F00\u53D1\u4F53\u7CFB\u8BFE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BFE\u7A0B\u6307\u5357","slug":"\u8BFE\u7A0B\u6307\u5357","link":"#\u8BFE\u7A0B\u6307\u5357","children":[{"level":3,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":3,"title":"\u5B66\u4E60\u4EBA\u7FA4","slug":"\u5B66\u4E60\u4EBA\u7FA4","link":"#\u5B66\u4E60\u4EBA\u7FA4","children":[]},{"level":3,"title":"\u8BFE\u7A0B\u7684\u6536\u83B7","slug":"\u8BFE\u7A0B\u7684\u6536\u83B7","link":"#\u8BFE\u7A0B\u7684\u6536\u83B7","children":[]},{"level":3,"title":"\u8BFE\u7A0B\u5185\u5BB9","slug":"\u8BFE\u7A0B\u5185\u5BB9","link":"#\u8BFE\u7A0B\u5185\u5BB9","children":[]},{"level":3,"title":"\u8BFE\u7A0B\u4EF7\u683C","slug":"\u8BFE\u7A0B\u4EF7\u683C","link":"#\u8BFE\u7A0B\u4EF7\u683C","children":[]},{"level":3,"title":"\u5B66\u4E60\u65B9\u5F0F","slug":"\u5B66\u4E60\u65B9\u5F0F","link":"#\u5B66\u4E60\u65B9\u5F0F","children":[]}]}],"relativePath":"course/system/ts/index.md"}'),h={name:"course/system/ts/index.md"},b=e(`<h1 id="ts-\u5168\u6808\u5F00\u53D1\u4F53\u7CFB\u8BFE" tabindex="-1">TS \u5168\u6808\u5F00\u53D1\u4F53\u7CFB\u8BFE <a class="header-anchor" href="#ts-\u5168\u6808\u5F00\u53D1\u4F53\u7CFB\u8BFE" aria-hidden="true">#</a></h1><p>\u8FD9\u662F\u6211\u4EEC\u63A8\u51FA\u7684\u5C31\u4E1A\u4F53\u7CFB\u8BFE\u7A0B\uFF0C\u5173\u4E8E\u4EC0\u4E48\u662F\u5C31\u4E1A\u4F53\u7CFB\u8BFE\u7A0B\uFF0C\u8BF7\u5148\u79FB\u6B65\uFF1A<a href="/service/product/2.html">\u5C31\u4E1A\u4F53\u7CFB\u8BFE\u8BE6\u89E3</a></p><p>\u4E86\u89E3\u5B8C\u6211\u4EEC\u5C31\u4E1A\u4F53\u7CFB\u8BFE\u7684\u5B9A\u4F4D\uFF0C\u4F60\u518D\u6765\u4E86\u89E3\u6211\u4EEC\u7684\u300ATS \u5168\u6808\u5F00\u53D1\u4F53\u7CFB\u8BFE\u300B\uFF0C\u5BF9\u4F60\u5B66\u4E60\u7684\u6548\u679C\u3001\u672A\u6765\u7684\u5C31\u4E1A\u65B9\u5411\u4F1A\u6709\u66F4\u6DF1\u5165\u7684\u601D\u8003\u548C\u5E2E\u52A9</p><h2 id="\u8BFE\u7A0B\u6307\u5357" tabindex="-1">\u8BFE\u7A0B\u6307\u5357 <a class="header-anchor" href="#\u8BFE\u7A0B\u6307\u5357" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FD9\u5957\u4F53\u7CFB\u8BFE\u7A0B\u662F\u6211\u4EEC\u6839\u636E\u5F53\u524D\u6700\u65B0\u7684\u5E02\u573A\u8C03\u7814\u63A8\u51FA\u7684\u4EA7\u54C1\uFF0C\u53EB\u505A\u300A\u524D\u7AEF + Nestjs \u540E\u7AEF+Web3 + AI \u5E94\u7528\u5168\u6808\u300B\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u5B66\u5B8C\u540E\u53EF\u4EE5\u83B7\u5F97\u4E00\u5957\u5168\u6808\u7684\u5F00\u53D1\u89E3\u51B3\u65B9\u6848\uFF0C\u4E00\u5957\u9AD8\u6548\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u4E00\u5957\u5546\u4E1A\u53CA\u7684\u4EA7\u54C1\u6E90\u7801</p><p>\u6709\u5C31\u4E1A\u9700\u6C42\u7684\u540C\u5B66\uFF0C\u8BA4\u771F\u5B66\u5B8C\u8FD9\u95E8\u8BFE\u7A0B\uFF0C\u95EE\u9898\u4E0D\u5927</p><p>\u5173\u4E8E\u8BFE\u7A0B\u7684\u7EC6\u8282\uFF0C\u8BF7\u8BE6\u7EC6\u9605\u8BFB\u5B8C\u672C\u6587</p></div><h3 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h3><blockquote><h4 id="\u4E3A\u4EC0\u4E48\u63A8\u51FA\u8FD9\u5957\u5168\u6808\u8BFE\u7A0B" tabindex="-1">\u4E3A\u4EC0\u4E48\u63A8\u51FA\u8FD9\u5957\u5168\u6808\u8BFE\u7A0B\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u63A8\u51FA\u8FD9\u5957\u5168\u6808\u8BFE\u7A0B" aria-hidden="true">#</a></h4></blockquote><p>\u6211\u4E5F\u662F\u88AB\u90A3\u4E9B\u5531\u8870 IT \u7684\u7A0B\u5E8F\u5458\u535A\u4E3B\u5F71\u54CD\u7684\u4EBA\uFF0C\u518D\u52A0\u4E0A ChatGPT \u7684\u706B\u7206\uFF0C\u8BA9\u6211\u524D\u51E0\u4E2A\u6708\u975E\u5E38\u7684\u7126\u8651\uFF0C\u4EE5\u81F3\u4E8E\u60F3\u653E\u5F03\u5F55\u5236\u8BFE\u7A0B\uFF0C\u73B0\u5728\u5728\u77ED\u89C6\u9891\u5E73\u53F0\uFF0C\u5982\u679C\u4E0D\u5531\u8870 IT\uFF0C\u5C31\u4E0D\u662F\u653F\u6CBB\u6B63\u786E\uFF0C\u5176\u5B9E\uFF0C\u90A3\u4E9B\u7A0B\u5E8F\u5458\u535A\u4E3B\u4E5F\u6CA1\u5FC5\u8981\u7838\u81EA\u5DF1\u7684\u996D\u7897\uFF0C\u53EA\u662F\u4E3A\u4E86\u8FCE\u5408\u89C2\u4F17\u7F62\u4E86\uFF0C\u8FD9\u6837\u624D\u4F1A\u6709\u6D41\u91CF\uFF0C\u6709\u4E86\u6D41\u91CF\u624D\u80FD\u53D8\u73B0\uFF0C\u56E0\u6B64\uFF0C\u4F60\u4EEC\u4F1A\u5728\u4ED6\u4EEC\u7684\u89C6\u9891\u91CC\u9762\u7ECF\u5E38\u542C\u5230\u8FD9\u6837\u7684\u4E3B\u9898</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1.\u5144\u5F1F\u4EEC\uFF0C\u524D\u7AEF\u5DF2\u7ECF\u6B7B\u4E86\uFF0C\u5F88\u591A\u57F9\u8BAD\u673A\u6784\u51FA\u6765\u7684\u627E\u4E0D\u5230\u5DE5\u4F5C\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5144\u5F1F\u4EEC\uFF0CJava\u5D29\u76D8\u4E86\uFF0C\u627E\u4E0D\u5230\u5DE5\u4F5C\u53EA\u6709\u53BB\u642C\u7816\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7ED3\u679C\u5462\uFF0C\u5728\u76F4\u64AD\u7684\u65F6\u5019\uFF0C\u53C8\u5F00\u59CB\u53CD\u5411\u6E32\u67D3</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1.\u5144\u5F1F\u4EEC\uFF0C\u524D\u7AEF\u56DE\u6696\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5144\u5F1F\u4EEC\uFF0CJava\u56DE\u6696\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u4E00\u6765\u4E00\u53BB\u7684\u8868\u6F14\uFF0C\u4E00\u4E9B\u5C0F\u767D\u5B8C\u5168\u4E0D\u6562\u5165\u884C\u4E86\uFF0C\u4E00\u4E9B\u8981\u9009\u8BA1\u7B97\u673A\u4E13\u4E1A\u7684\u540C\u5B66\u671B\u800C\u5374\u6B65\u4E86\uFF0C\u8FD9\u7279\u4E48\u5C31\u662F\u8BEF\u4EBA\u5B50\u5F1F</p><p>\u6211\u60F3\u8BF4\u4E00\u4E0B\uFF0C\u6211\u4EEC\u8FD9\u8FB9\u7684\u89C2\u70B9</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1.\u7ECF\u6D4E\u4E0B\u884C\uFF0C\u9752\u5E74\u5931\u4E1A\u7387\u6FC0\u589E\uFF0C\u8FD9\u662F\u6574\u4F53\u7684\u5927\u73AF\u5883\uFF0C\u5E76\u4E0D\u53EA\u662FIT\u884C\u4E1A\uFF0C\u56E0\u4E3A\u5E72IT\u8FD9\u6CE2\u4EBA\u5929\u751F\u5C31\u662F\u73A9\u513F\u4E92\u8054\u7F51\u7684\uFF0C\u56E0\u6B64\uFF0C\u5728\u7F51\u4E0A\u95F9\u5F97\u6700\u5389\u5BB3\uFF0C\u4F60\u4EEC\u53BB\u770B\u4E00\u4E0B\u5176\u4ED6\u7684\u4E13\u4E1A\u3001\u5176\u4ED6\u7684\u65B9\u5411\uFF0C\u96BE\u9053\u5C31\u4E1A\u7387\u5C31\u5F88\u597D\u5417\uFF1F\u8FD9\u5C31\u662F\u626F\u6DE1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u4E92\u8054\u7F51\u7684\u884C\u60C5\u662F\u4ECE\u4E00\u4E2A\u6574\u4F53\u7684\u7EA2\u5229\u671F\u5230\u7EA2\u5229\u6D88\u5931\u7684\u4E00\u79CD\u8F6C\u53D8\uFF0C\u4F60\u539F\u6765\u4ECE\u6708\u85AA\u4E24\u4E07\uFF0C\u964D\u5230\u4E86\u6708\u85AA1\u4E07\uFF0C\u5FC3\u7406\u96BE\u53D7\u4E0D\u96BE\uFF0C\u7531\u4FED\u5165\u5962\u6613\uFF0C\u7531\u5962\u5165\u4FED\u96BE\uFF0C\u56E0\u6B64\uFF0C\u6709\u975E\u5E38\u591A\u7684\u4EBA\u96BE\u53D7\uFF0C\u5728\u62B1\u6028\uFF0C\u4F60\u4EEC\u8981\u5BA2\u89C2\u7684\u770B\u5F85\uFF0C\u9000\u4E00\u4E07\u6B65\u8BF4\uFF0C\u4ECE2\u4E07\u6708\u85AA\u964D\u85AA\u4E00\u534A\u52301\u4E07\uFF0C\u56DE\u5F52\u6B63\u5E38\u6C34\u5E73\uFF0C\u90A3\u8FD9\u4E2A\u884C\u4E1A\u5C31\u6CA1\u524D\u9014\u5417\uFF1F\u5C31\u4E0D\u662F\u4E00\u4E2A\u597D\u7684\u9009\u9879\u5417\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3.\u7ECF\u8FC7\u6CE1\u6CAB\u540E\u7684\u8C03\u6574\uFF0C\u6211\u4EEC\u8981\u5BA2\u89C2\u7684\u8BA4\u8BC6\u5230\uFF0C\u957F\u671F\u7684\u7ADE\u4E89\u662F\u4E0D\u53EF\u907F\u514D\u7684\uFF0C\u90A3\u600E\u4E48\u529E\uFF1F\u4E0D\u6D3B\u4E86\u5417\uFF1F\u8BE5\u5377\u7684\u8FD8\u662F\u8981\u5377\uFF1F\u5377\u6B7B\u5404\u4F4D\u5C31\u5B8C\u4E8B\u513F\u4E86\uFF0C\u73B0\u5728\u8270\u96BE\u53C8\u4E0D\u662F\u4F60\u4E00\u4E2A\u4EBA\u8270\u96BE\uFF0C\u5927\u5BB6\u90FD\u5F88\u96BE\uFF0C\u4F60\u9700\u8981\u505A\u7684\u662F\u5C3D\u60C5\u7684\u5377\uFF0C\u5E72\u6389\u4F60\u7684\u7ADE\u4E89\u5BF9\u624B\u6765\u83B7\u5F97\u5DE5\u4F5C\u673A\u4F1A\uFF0C\u800C\u4E0D\u662F\u5728\u90A3\u62B1\u6028\u673A\u4F1A\u5F88\u5C11\uFF0C\u627E\u4E0D\u5230\u5DE5\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4.\u884C\u4E1A\u95E8\u69DB\u53D8\u9AD8\u662F\u597D\u4E8B\u60C5\uFF0C\u6709\u95E8\u69DB\u7684\u8BDD\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u6709\u6572\u95E8\u7816\u7684\u4EBA\u6765\u8BF4\uFF0C\u8FD9\u5C31\u662F\u58C1\u5792\u5440\uFF0C\u5982\u679C\u4F60\u662F\u79D1\u73ED\u7684\u3001\u672C\u79D1\u7684\uFF0C\u4F60\u6709\u5929\u7136\u7684\u5165\u573A\u5377\u4E86\uFF0C\u6709\u58C1\u5792\u4E86\uFF0C\u575A\u6301\u4E0B\u6765\u4E86\uFF0C\u90A3\u4E9B\uFF0C\u975E\u79D1\u73ED\u7684\u3001\u4E13\u79D1\u7684\u3001\u5B66\u5386\u66F4\u4F4E\u7684\u4EBA\u53EA\u80FD\u5728\u95E8\u5916\u770B\u7740\uFF0C\u8FD9\u96BE\u9053\u4E0D\u9999\u5417</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5.\u57FA\u4E8E\u4EE5\u4E0A\u51E0\u70B9\uFF0C\u73B0\u5728\u5165\u884C\u786E\u5B9E\u5F88\u56F0\u96BE\uFF0C\u56E0\u6B64\uFF0C\u4E0D\u5EFA\u8BAE\u975E\u79D1\u73ED\u7684\u3001\u5E74\u9F84\u5927\u7684\u3001\u5B66\u5386\u4F4E\u7684\u8FDB\u6765\u5192\u9669\uFF0C\u4F46\u662F\u4F60\u5982\u679C\u662F\u79D1\u73ED\u3001\u672C\u79D1\uFF0C\u4F60\u5C31\u653E\u5FC3\u5927\u80C6\u5B66\u5C31\u5B8C\u4E8B\u513F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u8FD9\u4E9B\u89C2\u70B9\u4EC5\u4EC5\u662F\u6211\u4EEC\u4E2A\u4EBA\u7684\u8BA4\u77E5\uFF0C\u4F60\u4E0D\u540C\u610F\u7684\u8BDD\u5C31\u662F\u4F60\u8BF4\u7684\u5BF9\uFF0C\u6211\u4EEC\u6CA1\u6709\u592A\u591A\u65F6\u95F4\u548C\u4F60\u6760\uFF0C\u4E0B\u9762\uFF0C\u6211\u8981\u8BF4\u7684\u662F\uFF0C\u5982\u679C\u4F60\u8981\u8FDB\u6765\u5377\uFF0C\u5E94\u8BE5\u5177\u5907\u4EC0\u4E48\u6837\u7684\u7B56\u7565</p><p>\u7528\u4E00\u53E5\u8BDD\u6765\u6982\u62EC\u5C31\u662F</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5DEE\u5F02\u5316\u7ADE\u4E89\u624D\u80FD\u8131\u5F15\u800C\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A\u4E86\u4E86\u89E3\u5B9E\u9645\u7684\u5C31\u4E1A\u60C5\u51B5\uFF0C\u6211\u7528\u4E86\u6211\u7684\u76AE\u5305\u516C\u53F8\uFF0C\u5728 boos \u4E0A\u53D1\u5E03\u4E86 4 \u4E2A\u5C97\u4F4D\uFF0C\u7528\u6765\u6D4B\u8BD5\u6536\u5230\u7B80\u5386\u7684\u6570\u636E\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5E2E\u52A9\u6211\u5927\u6982\u7387\u63A8\u6D4B\u51FA\u7ADE\u4E89\u60C5\u51B5</p><p><img src="`+l+`" alt=""></p><p>\u603B\u7ED3\u4E00\u4E0B\u4E0A\u9762\u7684\u6570\u636E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">java\u4E24\u4E2A\u5C97\u4F4D\uFF1A843+286 = 1129 \u4EFD\u6253\u62DB\u547C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u524D\u7AEF\u4E24\u4E2A\u5C97\u4F4D\uFF1A946 + 22 = 968 \u4EFD\u6253\u62DB\u547C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u6570\u636E\u53EF\u4EE5\u770B\u51FA\uFF0C\u524D\u7AEF\u548C Java \u4F5C\u4E3A IT \u884C\u4E1A\u6700\u70ED\u95E8\u7684\u4E24\u4E2A\u65B9\u5411\uFF0C\u7ADE\u4E89\u60C5\u51B5\u90FD\u662F\u5728\u4E00\u4E2A\u6570\u91CF\u7EA7\u522B\u7684\uFF0C\u90FD\u7279\u4E48\u5377\uFF0C\u5927\u54E5\u522B\u8BF4\u4E8C\u54E5\uFF0C\u5982\u679C\u4F60\u6309\u7167\u4F20\u7EDF\u7684\u8BFE\u7A0B\u5B66\u4E60\uFF0C\u62A5\u57F9\u8BAD\u73ED\u6216\u8005\u4E70\u7EBF\u4E0A\u8BFE\uFF0C\u8FD9\u79CD\u65E0\u8111\u51B2\u7684\u6A21\u5F0F\uFF0C\u53EA\u6709\u4E00\u4E2A\u7ED3\u679C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5927\u6982\u7387\u4F1A\u88AB\u5377\u6B7B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F60\u4EEC\u518D\u6765\u770B\u770B\u6211\u53D1\u5E03\u7684\u5C97\u4F4D\u7279\u70B9\uFF0C\u7ADE\u4E89\u6700\u6FC0\u70C8\u7684\u662F\u521D\u7EA7\u5C97\u4F4D\uFF0C\u521D\u7EA7 Java \u6253\u62DB\u547C\u7684\u4EBA\u6570\u662F 843\uFF0C\u5360\u6BD4 74%\uFF0C \u521D\u7EA7\u524D\u7AEF\u6253\u62DB\u547C\u662F 946\uFF0C\u5360\u6BD4 97%\uFF0C\u8FD9\u610F\u5473\u7740\u521D\u7EA7\u5DF2\u7ECF\u7ADE\u4E89\u767D\u70ED\u5316\u4E86\uFF0C\u8FD9\u4E9B\u521D\u7EA7\u524D\u7AEF\u3001\u521D\u7EA7 Java \u57FA\u672C\u4E0A\u90FD\u662F\u57F9\u8BAD\u73ED\u51FA\u6765\u7684\uFF0C\u7B80\u5386\u90FD\u4E00\u4E2A\u6837\uFF0C\u600E\u4E48\u80FD\u627E\u5230\u5DE5\u4F5C\u5462\uFF1F</p><p>\u90A3\u8FD9\u4E2A\u95EE\u9898\u5230\u5E95\u8FD8\u6709\u6CA1\u6709\u89E3\uFF1F\u56DE\u7B54\u662F\u80AF\u5B9A\u7684</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5148\u6765\u601D\u8003\u4E00\u4E0B\u6211\u4EEC\u524D\u9762\u63D0\u51FA\u7684\u89C2\u70B9\uFF1A\u5DEE\u5F02\u5316\u7ADE\u4E89\u624D\u80FD\u8131\u5F15\u800C\u51FA</p></div><p>\u770B\u4E86\u524D\u9762\u6211\u4EEC\u53D1\u5E03\u7684\u6570\u636E\uFF0C\u4F60\u6709\u6CA1\u6709\u60F3\u8FC7\uFF0C\u4E3A\u5565 Nodejs \u5C97\u4F4D\u7684\u62DB\u547C\u4EBA\u6570\u5F88\u5C11\uFF1F\u56E0\u4E3A\u5927\u90E8\u5206\u524D\u7AEF\u90FD\u4E0D\u4F1A\u53BB\u5173\u6CE8\u8FD9\u4E2A\u9886\u57DF\uFF0C\u8FD9\u662F\u540E\u7AEF\u5E72\u7684\u4E8B\u60C5\uFF0CNodejs \u7684\u7ADE\u4E89\u4EBA\u7FA4\u57FA\u672C\u4E0A\u90FD\u662F\u522B\u7684\u8BED\u8A00\u8F6C\u8FC7\u6765\u7684\uFF0C\u771F\u6B63\u4ECE\u96F6\u57FA\u7840\u4E13\u95E8\u7528 JS \u5199\u540E\u7AEF\u7684\u4EBA\u5F88\u5C11\uFF0C\u518D\u52A0\u4E0A\u57F9\u8BAD\u73ED\u6CA1\u6709\u628A\u8FD9\u5757\u5F53\u6210\u91CD\u70B9\u6765\u57F9\u517B\uFF0C\u8FD9\u4E9B\u79CD\u79CD\u56E0\u7D20\u52A0\u8D77\u6765\uFF0C\u5C31\u4F7F\u5F97\u8FD9\u4E2A\u5C97\u4F4D\u6253\u62DB\u547C\u7684\u4EBA\u6BD4\u666E\u901A\u524D\u7AEF\u8981\u5C11\u5F88\u591A</p><p>\u901A\u8FC7\u8FD9\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u80FD\u660E\u767D\u5DEE\u5F02\u5316\u7684\u610F\u601D\u4E86\u4E48\uFF0C\u5C31\u662F\u53BB\u505A\u4E00\u4E9B\u548C\u522B\u4EBA\u4E0D\u540C\u7684\u4E8B\u60C5\uFF0C\u5BF9\u4E00\u4E2A Nodejs \u5C97\u4F4D\u6765\u8BF4\uFF0C\u4F60\u719F\u7EC3\u4F7F\u7528 JS \u6765\u5F00\u53D1\u540E\u7AEF\u5E94\u7528\uFF0C\u8FD9\u662F 95%\u4EE5\u4E0A\u524D\u7AEF\u90FD\u505A\u4E0D\u4E86\u7684\u4E8B\u60C5\uFF0C\u90A3\u548C\u5269\u4E0B\u7684 5%\u7ADE\u4E89\uFF0C\u96BE\u5EA6\u662F\u4E0D\u662F\u5C31\u5C0F\u5F88\u591A\u4E86</p><p>\u4F60\u4EEC\u4E0B\u6765\u518D\u53BB\u641C\u4E00\u4E0B nodejs \u540E\u7AEF\uFF0C\u5C97\u4F4D\u4E5F\u4E0D\u5C11\uFF0C\u867D\u7136\u6CA1\u6709\u4F20\u7EDF\u524D\u7AEF\u3001Java \u591A\uFF0C\u4F46\u95E8\u69DB\u5728\u90A3\uFF0C\u5DF2\u7ECF\u5E2E\u4F60\u8FC7\u6EE4\u4E86\u5F88\u591A\u4EBA\u4E86\uFF0C\u4F60\u8FD8\u6015\u4E2A\u6BDB\u5440</p><p><img src="`+n+'" alt=""></p><p><img src="'+t+`" alt=""></p><blockquote><h4 id="\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350-java-\u5F00\u53D1\u5462" tabindex="-1">\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350 Java \u5F00\u53D1\u5462\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350-java-\u5F00\u53D1\u5462" aria-hidden="true">#</a></h4></blockquote><p>\u4E00\u65B9\u9762\u662F\u56E0\u4E3A\u5B66\u4E60 Java \u7684\u4EBA\u5DF2\u7ECF\u70C2\u5927\u8857\u4E86\uFF0C\u5176\u6B21\u662F\u56E0\u4E3A Java \u5377\u5230\u540E\u9762\u5DF2\u7ECF\u6CA1\u6709\u4EC0\u4E48\u4E1C\u897F\u53EF\u4EE5\u5377\u4E86\uFF0C\u4E3E\u4E2A\u5F88\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A\u4E00\u4E2A Java \u9879\u76EE\u60F3\u8981\u6709\u4EAE\u70B9\uFF0C\u9664\u4E86\u589E\u5220\u67E5\u6539\u8FD9\u4E9B\u5E38\u7528\u529F\u80FD\u4EE5\u5916\uFF0C\u65E0\u975E\u5C31\u662F\u4E09\u9AD8\uFF0C\u9AD8\u6027\u80FD\u3001\u9AD8\u5E76\u53D1\u3001\u9AD8\u53EF\u7528\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u521D\u5B66\u8005\uFF0C\u4F60\u6CA1\u6709\u5B9E\u9645\u7684\u5E94\u7528\u573A\u666F\uFF0C\u4F60\u53BB\u641E\u8FD9\u4E9B\u9AD8\u5E76\u53D1\u7684\u9879\u76EE\u5176\u5B9E\u662F\u5F88\u5047\u7684\uFF0C\u4E00\u773C\u5C31\u80FD\u770B\u51FA\u6765\u662F\u5047\u9879\u76EE\u4E86\uFF0C\u627E\u5DE5\u4F5C\u5C31\u6BD4\u8F83\u5C34\u5C2C\uFF0C\u589E\u5220\u67E5\u6539\u6CA1\u4EAE\u70B9\uFF0C\u4E09\u9AD8\u9879\u76EE\u53C8\u592A\u5047\uFF0C\u6700\u7EC8\u5C31\u5377\u5230\u5B66\u5386\u4E0A\u53BB\u4E86\uFF0C\u5982\u679C\u4F60\u5DF2\u7ECF\u6709\u8DB3\u591F\u597D\u7684\u5B66\u5386\uFF0C\u82B1\u5927\u628A\u7684\u65F6\u95F4\u5377 Java \u53C8\u662F\u6027\u4EF7\u6BD4\u6BD4\u8F83\u4F4E\u7684\u4E86</p><p>\u4ECE\u53E6\u4E00\u4E2A\u7EAC\u5EA6\u6765\u5206\u6790\uFF0C\u8FD9\u4E2A\u7EAC\u5EA6\u662F\u7EDD\u5927\u90E8\u5206\u4EBA\u4E0D\u4F1A\u8003\u8651\u7684\uFF0C\u90A3\u5C31\u662F\u7ADE\u4E89\u7684\u4EBA\u7FA4\uFF0CJava \u5728\u5927\u5B66\u91CC\u9762\u662F\u5F00\u4E86\u8BFE\u7A0B\u7684\uFF0C\u4E13\u4E1A\u7684\u524D\u7AEF\u8BFE\u7A0B\u5728\u5927\u5B66\u91CC\u9762\u5F00\u5F97\u5C11\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u4E86\u5927\u5B66\u79D1\u73ED\u7684\u8FD9\u6CE2\u4EBA\u6700\u5148\u4E86\u89E3\u7684\u5C31\u662F Java\uFF0C\u540C\u65F6\uFF0C\u57F9\u8BAD\u73ED\u7684\u8001\u5E08\u4E5F\u4F1A\u6839\u636E\u5B66\u751F\u7684\u60C5\u51B5\u63A8\u8350\u5B66\u4E60\u65B9\u5411\uFF0C\u5E95\u5B50\u597D\u7684\u63A8\u8350\u5B66 Java\uFF0C\u5E95\u5B50\u5DEE\u7684\u63A8\u8350\u4ECE\u524D\u7AEF\u5F00\u59CB\uFF0C\u8FD9\u4E9B\u539F\u56E0\u90FD\u5BFC\u81F4\u4E86\u5B66\u4E60 Java \u7684\u4EBA\u7FA4\uFF0C\u6574\u4F53\u7684\u57FA\u7840\u3001\u6574\u4F53\u7684\u7D20\u8D28\u8981\u6BD4\u524D\u9AD8\u5F88\u591A\uFF0C\u90A3\u4E48\uFF0C\u5982\u679C\u95EE\u9898\u5C31\u6765\u4E86\uFF0C\u540C\u6837\u90FD\u662F\u4EBA\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53BB\u548C\u4E00\u7FA4\u79D1\u73ED\u7684\u3001\u672C\u79D1\u7684\u4EBA\u7ADE\u4E89\u4F18\u52BF\u5927\u5462\uFF1F\u8FD8\u662F\u548C\u4E00\u7FA4\u6574\u4F53\u57FA\u7840\u7D20\u8D28\u7A0D\u5FAE\u66F4\u5DEE\u7684\u4EBA\u7ADE\u4E89\u673A\u4F1A\u5927\uFF1F\u5982\u679C\u4F60\u662F\u4E2A\u666E\u901A\u7684\u672C\u79D1\uFF0C\u4F60\u53BB\u5377 Java\uFF0C\u53EF\u80FD\u5C31\u5E73\u5E73\u65E0\u5947\uFF0C\u5982\u679C\u4F60\u5377\u524D\u7AEF\uFF0C\u81F3\u5C11\u8FD8\u6709\u4E00\u5806\u975E\u79D1\u73ED\u7684\u3001\u5927\u4E13\u7684\u5728\u57AB\u5E95\uFF0C\u660E\u767D\u4E86\u4E48</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6211\u4EEC\u8FD9\u79CD\u5356\u8BFE\u7684\u673A\u6784\uFF0C\u5BF9\u5E02\u573A\u5982\u679C\u4E0D\u654F\u611F\uFF0C\u5B66\u751F\u627E\u4E0D\u5230\u5DE5\u4F5C\uFF0C\u53E3\u7891\u5D29\u88C2\u4E86\uFF0C\u90A3\u8FD8\u5356\u4E2A\u6BDB\u7EBF\u7684\u8BFE\u7A0B\uFF0C\u300A\u524D\u7AEF + Nestjs + Web3 + AI \u5E94\u7528\u300B\u8FD9\u6837\u7684\u6280\u672F\u6808\u7EC4\u5408\uFF0C\u662F\u5F53\u524D\u6211\u4EEC\u8BA4\u4E3A\u6700\u4F73\u7684\u5165\u884C\u8DEF\u5F84\u4E86\uFF0CJava\u3001Python\u3001\u6211\u4EEC\u5176\u5B9E\u4E5F\u6709\u5408\u4F5C\u7684\u8BB2\u5E08\uFF0C\u4F46\u6CA1\u6709\u63D0\u4E0A\u4F18\u5148\u7EA7\uFF0C\u5F88\u5927\u7684\u539F\u56E0\u5C31\u662F\u53D1\u5C55\u524D\u666F\u7684\u95EE\u9898\uFF0C\u4F46\u540E\u9762\u6211\u4EEC\u4E5F\u4F1A\u51FA\u76F8\u5173\u7684\u4F53\u7CFB\u8BFE\u7A0B\uFF0C\u56E0\u4E3A\uFF0C\u4E0D\u7BA1\u4F60\u600E\u4E48\u8BF4\uFF0C\u90FD\u6709\u4EBA\u8981\u53BB\u51B2\uFF0C\u5982\u679C\u4E0D\u505A\u6DF1\u5EA6\u7684\u4EA4\u4ED8\uFF0C\u5176\u5B9E\u5BF9\u4E8E\u673A\u6784\u6765\u8BF4\uFF0C\u6700\u5927\u7684\u82B1\u8D39\u5C31\u662F\u5F55\u8BFE\u7684\u6210\u672C\u800C\u5DF2\uFF0C\u603B\u6709\u5B66\u751F\u80FD\u627E\u5230\u5DE5\u4F5C\uFF0C\u81F3\u4E8E\u56F0\u96BE\u7A0B\u5EA6\u5982\u4F55\u3001\u662F\u4E0D\u662F\u4F60\u627E\u5230\u5DE5\u4F5C\uFF0C\u90A3\u5C31\u53E6\u8BF4\u4E86\uFF0C\u603B\u4E4B\uFF0C\u76EE\u524D\u6765\u8BF4\uFF0C\u6211\u4EEC\u81EA\u8BA4\u4E3A\uFF0C\u89C4\u5212\u7684\u5B66\u4E60\u8DEF\u5F84\u8FD8\u662F\u6BD4\u8F83\u79D1\u5B66\u7684</p></div><h3 id="\u5B66\u4E60\u4EBA\u7FA4" tabindex="-1">\u5B66\u4E60\u4EBA\u7FA4 <a class="header-anchor" href="#\u5B66\u4E60\u4EBA\u7FA4" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u4F60\u662F\u672C\u79D1\u3001\u8BA1\u7B97\u673A\u4E13\u4E1A\uFF0C\u53EF\u4EE5\u653E\u5FC3\u5927\u80C6\u7684\u5B66\uFF0C\u627E\u5DE5\u4F5C\u95EE\u9898\u4E0D\u5927</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u4F60\u662F\u672C\u79D1\u3001\u975E\u8BA1\u7B97\u673A\u4E13\u4E1A\uFF0C\u5B66\u4E60\u5C31\u9700\u8981\u66F4\u52A0\u52AA\u529B\uFF0C\u627E\u5DE5\u4F5C\u770B\u4F60\u7684\u6280\u672F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u4F60\u662F\u4E13\u79D1\u3001\u8BA1\u7B97\u673A\u4E13\u4E1A\uFF0C\u5EFA\u8BAE\u5F53\u7231\u597D\u5B66\uFF0C\u627E\u5DE5\u4F5C\u770B\u8FD0\u6C14\u4E0E\u6280\u672F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u4F60\u662F\u4E13\u79D1\u53CA\u4EE5\u4E0B\u5B66\u5386\uFF0C\u5F53\u7231\u597D\u5B66\uFF0C\u627E\u5DE5\u4F5C\u9760\u8FD0\u6C14\uFF0C\u5165\u884C\u56F0\u96BE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8BFE\u7A0B\u7684\u6536\u83B7" tabindex="-1">\u8BFE\u7A0B\u7684\u6536\u83B7 <a class="header-anchor" href="#\u8BFE\u7A0B\u7684\u6536\u83B7" aria-hidden="true">#</a></h3><p>\u5B66\u4E60\u5B8C\u8BFE\u7A0B\u540E\uFF0C\u4F60\u5C06\u83B7\u5F97\u591A\u65B9\u9762\u7684\u5168\u6808\u6280\u80FD</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.\u5177\u5907\u524D\u7AEF\u5F00\u53D1\u80FD\u529B\uFF0C\u80DC\u4EFB\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C</p><p>2.\u5177\u5907 TS \u8BED\u8A00\u5F00\u53D1\u540E\u7AEF\u5E94\u7528\u7684\u80FD\u529B\uFF0C\u80DC\u4EFB\u540E\u7AEF\u5F00\u53D1\u5DE5\u4F5C</p><p>3.\u5177\u5907\u4E00\u5B9A\u7684\u8FD0\u7EF4\u80FD\u529B\u548C\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1\u80FD\u529B\uFF0C\u627E\u8FD0\u7EF4\u5F00\u53D1\u5DE5\u4F5C</p><p>4.\u5177\u5907 Web3 \u5F00\u53D1\u7684\u80FD\u529B\uFF0C\u50A8\u5907\u6280\u672F\uFF0C\u5E03\u5C40\u672A\u6765</p><p>5.\u8BFE\u7A0B\u5B66\u4E60\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u83B7\u5F97\u53EF\u4EE5\u5546\u7528\u7684\u5168\u6808\u6E90\u7801\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u90E8\u7F72\u8FD0\u8425</p><p>6.\u5177\u5907\u4E00\u5B9A\u7684\u4EA7\u54C1\u548C\u8FD0\u8425\u80FD\u529B\uFF0C\u5F00\u62D3\u601D\u7EF4\uFF0C\u53EF\u4EE5\u505A\u72EC\u7ACB\u5F00\u53D1\u8005</p></div><p>\u6211\u4EEC\u4EE5\u5F00\u6E90\u9879\u76EE playedu \u4E3A\u9879\u76EE\u539F\u578B\uFF0C\u4F7F\u7528\u5168\u65B0\u6280\u672F\u6808\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u62D3\u5C55\u529F\u80FD\uFF0C\u628A\u8FD9\u4E2A\u9879\u76EE\u505A\u6210\u4E00\u4E2A\u57FA\u4E8E\u533A\u5757\u94FE\u6280\u672F\u7684\u521B\u65B0\u9879\u76EE</p><p>\u9879\u76EE\u622A\u56FE\uFF1A</p><p><img src="`+c+'" alt=""></p><p><img src="'+o+'" alt=""></p><p><img src="'+i+'" alt=""></p><p><img src="'+r+'" alt=""></p><p>\u9879\u76EE\u5B98\u7F51\uFF1A<a href="https://playedu.xyz/" target="_blank" rel="noreferrer">https://playedu.xyz/</a></p><p>PC \u524D\u53F0\u6F14\u793A\u5730\u5740\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7F51\u7AD9\u5730\u5740(PC \u7AEF)\uFF1A<a href="https://demo.playedu.xyz" target="_blank" rel="noreferrer">https://demo.playedu.xyz</a></p><p>\u6F14\u793A\u8D26\u53F7\uFF1A1@playedu.xyz</p><p>\u6F14\u793A\u5BC6\u7801\uFF1A123123</p></div><p>\u7BA1\u7406\u540E\u53F0\u6F14\u793A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7F51\u7AD9\u5730\u5740(PC \u7AEF)\uFF1A<a href="https://admin.playedu.xyz" target="_blank" rel="noreferrer">https://admin.playedu.xyz</a></p><p>\u540E\u53F0\u6F14\u793A\u8D26\u53F7\uFF1Aadmin@playedu.xyz</p><p>\u540E\u53F0\u6F14\u793A\u5BC6\u7801\uFF1A123123</p></div><h3 id="\u8BFE\u7A0B\u5185\u5BB9" tabindex="-1">\u8BFE\u7A0B\u5185\u5BB9 <a class="header-anchor" href="#\u8BFE\u7A0B\u5185\u5BB9" aria-hidden="true">#</a></h3><blockquote><p>\u7B2C 1 \u90E8\u5206\uFF0C\u524D\u7AEF\u5F00\u53D1</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.html+css \u5FEB\u901F\u5165\u95E8</p><p>2.\u4E00\u5C0F\u65F6\u641E\u5B9A flex \u5E03\u5C40</p><p>3.JavaScript \u5165\u95E8\u521D\u4F53\u9A8C</p><p>4.JavaScript \u8BED\u6CD5\u57FA\u7840</p><p>5.JavaScript \u4E8B\u4EF6\u7CBE\u8BB2</p><p>6.JavaScript \u539F\u751F\u5BF9\u8C61</p><p>7.JavaScript \u5B9A\u65F6\u5668</p><p>8.BOM \u4E0E DOM</p><p>9.\u6B63\u5219\u8868\u8FBE\u5F0F</p><p>10.Node \u6838\u5FC3\u57FA\u7840</p><p>11.Ajax \u57FA\u7840</p><p>12.JavaScript \u9AD8\u7EA7\u77E5\u8BC6</p><p>13.ES6+\u5FEB\u901F\u5165\u95E8</p><p>14.Vue \u57FA\u7840</p><p>15.Vue \u5168\u5BB6\u6876</p><p>16.Vue \u9879\u76EE\u5B9E\u6218-\u4EFF\u9B45\u65CF\u5546\u57CE</p><p>17.Vue \u9879\u76EE\u5B9E\u6218-\u97F3\u4E50 APP</p></div><p>\u8FD9\u4E00\u90E8\u5206\u662F\u524D\u7AEF\u57FA\u7840\u90E8\u5206\uFF0C\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u662F\u6240\u6709\u8FDB\u9636\u5185\u5BB9\u7684\u57FA\u7840\uFF0C\u5982\u679C\u662F\u96F6\u57FA\u7840\u5F00\u59CB\u5B66\u7684\u540C\u5B66\uFF0C\u9700\u8981\u4ECE\u5934\u638C\u63E1\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u4EE5\u89C6\u9891\u6559\u7A0B\u4E3A\u4E3B\uFF0C\u89C6\u9891\u8D28\u91CF\u7ECF\u8FC7\u5927\u51E0\u5343\u7528\u6237\u68C0\u9A8C\uFF0C\u5B66\u4E60\u9AD8\u6548\uFF0C\u6CA1\u6709\u5E9F\u8BDD\uFF0C\u8DDF\u7740\u8BFE\u7A0B\u7684\u5185\u5BB9\u7EC3\uFF0C\u95EE\u9898\u4E0D\u5927</p><blockquote><p>\u7B2C 2 \u90E8\u5206\uFF0CNest \u6846\u67B6\u57FA\u7840</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.Nestjs \u57FA\u7840</p><p>2.MySQL \u8BE6\u89E3</p><p>3.TypeORM \u8BE6\u89E3</p><p>4.Redis \u5FEB\u901F\u5165\u95E8</p><p>5.\u901A\u7528\u6743\u9650\u63A7\u5236\u7CFB\u7EDF\u5B9E\u6218</p><p>6.\u9879\u76EE\u90E8\u7F72\u5B9E\u6218</p></div><p>\u8FD9\u90E8\u5206\u5185\u5BB9\u7684\u76EE\u7684\u662F\u719F\u6089\u4F7F\u7528 Nest \u8FD9\u4E2A\u540E\u7AEF\u6846\u67B6\uFF0C\u8DD1\u901A\u6574\u4E2A\u9879\u76EE\u5F00\u53D1\u7684\u6D41\u7A0B\uFF0C\u4ECE\u5634\u57FA\u7840\u7684\u6846\u67B6\u4F7F\u7528\uFF0C\u5230\u6700\u540E\u9879\u76EE\u4E0A\u7EBF\u90E8\u7F72\uFF0C\u8D70\u5B8C\u4E00\u4E2A\u5B8C\u6574\u7684\u6D41\u7A0B\uFF0C\u5B66\u5B8C\u8FD9\u90E8\u5206\u5185\u5BB9\uFF0C\u5E94\u8BE5\u80FD\u77E5\u9053\u4E00\u4E2A\u5355\u4F53\u670D\u52A1\u662F\u600E\u4E48\u5F00\u53D1\u51FA\u6765\u7684\u4E86</p><blockquote><p>\u7B2C 3 \u90E8\u5206\uFF0C\u5FAE\u670D\u52A1</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.\u5FAE\u670D\u52A1\u57FA\u7840\u7406\u8BBA</p><p>2.\u914D\u7F6E\u4E2D\u5FC3</p><p>3.\u6CE8\u518C\u4E2D\u5FC3</p><p>4.RabbitMQ \u5FEB\u901F\u5165\u95E8</p><p>5.nginx \u5165\u95E8</p><p>6.\u5FAE\u670D\u52A1\u7535\u5546\u9879\u76EE\u5B9E\u6218</p><p>7.Docker \u5165\u95E8</p></div><p>\u8FD9\u90E8\u5206\u5185\u5BB9\u662F\u540E\u7AEF\u5FAE\u670D\u52A1\u77E5\u8BC6\u7684\u7CFB\u7EDF\u8BB2\u89E3\uFF0C\u8BFE\u7A0B\u91CC\u9762\u8BB2\u89E3\u4E86\u540E\u7AEF\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u9700\u8981\u7528\u5230\u7684\u5404\u79CD\u4E2D\u95F4\u4EF6\uFF0C\u540C\u65F6\u4F1A\u4EE5\u4E00\u4E2A\u5FAE\u670D\u52A1\u7535\u5546\u9879\u76EE\u4E3A\u6848\u4F8B\uFF0C\u5C06\u7528\u5230\u7684\u5FAE\u670D\u52A1\u77E5\u8BC6\u4E32\u8054\u8D77\u6765\uFF0C\u7ECF\u8FC7\u8FD9\u4E2A\u9636\u6BB5\u7684\u5B66\u4E60\uFF0C\u80FD\u7406\u89E3\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5404\u79CD\u7EC6\u8282\uFF0C\u4E3A\u540E\u7EED\u505A\u5546\u4E1A\u7EA7\u7684\u9879\u76EE\u6253\u57FA\u7840</p><blockquote><p>\u7B2C 4 \u90E8\u5206\uFF0C\u524D\u7AEF\u8FDB\u9636</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.\u901A\u7528\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u89E3\u51B3\u65B9\u6848--Vue \u7248\u672C</p><p>2.React \u5168\u5BB6\u6876</p><p>3.\u901A\u7528\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u89E3\u51B3\u65B9\u6848--React \u7248\u672C</p><p>4.Vue \u6E90\u7801\u89E3\u6790</p><p>5.React \u6E90\u7801\u89E3\u6790</p><p>6.\u524D\u7AEF\u5DE5\u7A0B\u5316</p><p>7.\u524D\u7AEF\u63D0\u6548\u5DE5\u5177\u7814\u53D1</p></div><p>\u8FD9\u90E8\u5206\u662F\u524D\u7AEF\u7684\u8FDB\u9636\u5185\u5BB9\uFF0C\u6D89\u53CA\u5230\u975E\u5E38\u591A\u7684\u524D\u7AEF\u9AD8\u4EF7\u77E5\u8BC6\uFF0C\u96BE\u5EA6\u5C42\u6B21\u4F1A\u98D9\u5347\uFF0C\u4F46\u6536\u83B7\u4F1A\u5F88\u5927\uFF0C\u80FD\u505A\u5230\u8D28\u7684\u98DE\u8DC3\uFF0C\u8FD9\u662F\u4F60\u80FD\u5728\u524D\u7AEF\u5F00\u53D1\u5C97\u4F4D\u8131\u5F15\u800C\u51FA\u5FC5\u987B\u8981\u5B66\u4E60\u7684\u5185\u5BB9\uFF0C\u5B66\u5B8C\u8FD9\u90E8\u5206\u5185\u5BB9\uFF0C\u78BE\u538B\u57F9\u8BAD\u73ED\u51FA\u6765\u7684\u524D\u7AEF\uFF0C\u95EE\u9898\u4E0D\u5927\uFF0C\u6709\u4E9B\u540C\u5B66\u5B66\u5B8C\u8FD9\u4E2A\u9636\u6BB5\u6709\u53EF\u80FD\u53BB\u6295\u7B80\u5386\u62FF offer \u53BB\u4E86</p><blockquote><p>\u7B2C 5 \u90E8\u5206\uFF0C\u9879\u76EE\u5B9E\u6218</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.\u50F0\u8BFE\u5B66\u57CE\u670D\u52A1\u7AEF\u9879\u76EE\u5B9E\u6218</p><p>2.\u50F0\u8BFE\u5B66\u57CE\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u9879\u76EE\u5B9E\u6218</p><p>3.\u50F0\u8BFE\u5B66\u57CE PC \u7AEF\u9879\u76EE\u5B9E\u6218</p><p>4.\u50F0\u8BFE\u5B66\u57CE APP \u9879\u76EE\u5B9E\u6218</p></div><p>\u8FD9\u4E00\u90E8\u5206\u662F\u771F\u6B63\u7684\u5546\u4E1A\u5B9E\u6218\uFF0C\u6211\u4EEC\u5C06\u4ECE\u96F6\u5230\u4E00\uFF0C\u5F00\u53D1\u4E00\u4E2A\u7EBF\u4E0A\u8FD0\u8425\u7684\u5728\u7EBF\u6559\u80B2\u9879\u76EE\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u9879\u76EE\u5C06\u662F\u6211\u4EEC\u957F\u671F\u8FD0\u8425\u7684\u9879\u76EE\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u4EE5\u5B9E\u9645\u5F00\u53D1\u4E3A\u4E3B\uFF0C\u6587\u6863\u548C\u89C6\u9891\u6559\u7A0B\u90FD\u4F1A\u5C11\uFF0C\u7ECF\u8FC7\u8FD9\u4E2A\u9879\u76EE\u7684\u6D17\u793C\uFF0C\u4F60\u624D\u80FD\u771F\u6B63\u72EC\u7ACB\u7684\u5F00\u53D1\u4E00\u4E2A\u5E94\u7528\uFF0C\u4F60\u624D\u7B97\u5F97\u4E0A\u771F\u6B63\u5B66\u4F1A\u7F16\u7A0B\uFF0C\u5F53\u4F60\u5DF2\u7ECF\u5B66\u4F1A\u7F16\u7A0B\u4E86\uFF0C\u627E\u5DE5\u4F5C\u8FD8\u4F1A\u96BE\u5417</p><blockquote><p>\u7B2C 6 \u90E8\u5206\uFF0CNodejs \u8FDB\u9636\u548C\u5176\u4ED6\u6846\u67B6</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.Nodejs API \u57FA\u7840</p><p>2.Express \u6846\u67B6</p><p>3.Koa \u6846\u67B6</p></div><p>\u8FD9\u90E8\u5206\u5185\u5BB9\u662F\u9009\u5B66\u5185\u5BB9\uFF0C\u4E86\u89E3\u4E00\u4E0B node \u540E\u7AEF\u751F\u6001\u91CC\u9762\u7684\u5176\u4ED6\u6846\u67B6\uFF0C\u5982\u679C\u5DE5\u4F5C\u4E2D\u7528\u5230\uFF0C\u53EF\u4EE5\u5FEB\u901F\u4E0A\u624B</p><blockquote><p>\u7B2C 7 \u90E8\u5206\uFF0C\u4E13\u4E1A\u65B9\u5411-\u8FDB\u519B Web3</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.JS \u624B\u5199\u533A\u5757\u94FE</p><p>2.Go \u8BED\u8A00\u5B9E\u73B0\u8FF7\u4F60\u6BD4\u7279\u5E01\u7CFB\u7EDF</p><p>3.\u5BC6\u7801\u5B66\u57FA\u7840\u5165\u95E8</p><p>4.\u4EE5\u592A\u574A\u5F00\u53D1\u5165\u95E8</p><p>5.\u4EE5\u592A\u574A\u5F00\u53D1\u5B9E\u6218-\u94B1\u5305\u9879\u76EE</p><p>6.vue3+naiveui \u5F00\u53D1\u94FE\u4E0A\u9009\u8BFE\u7CFB\u7EDF</p><p>7.NFT \u9879\u76EE\u5B9E\u6218</p><p>8.\u8054\u76DF\u94FE\u5165\u95E8\u4E0E\u5B9E\u6218</p></div><p>\u8FD9\u90E8\u5206\u5185\u5BB9\u662F\u6BD4\u8F83\u786C\u6838\u7684\u4E86\uFF0C\u6211\u4EEC\u8FD9\u8FB9\u575A\u5B9A\u7684\u8BA4\u4E3A Web3 \u662F\u4E0B\u4E00\u4EE3\u4E92\u8054\u7F51\uFF0C\u533A\u5757\u94FE\u6280\u672F\u662F\u653E\u5230\u4E86\u56FD\u5BB6\u6218\u7565\u9AD8\u5EA6\u7684\uFF0C\u4E00\u65E6\u5E94\u7528\u5927\u89C4\u6A21\u843D\u5730\uFF0C\u5C06\u8FCE\u6765\u975E\u5E38\u5927\u7684\u673A\u4F1A\uFF0C\u867D\u7136\u73B0\u5728\u5F88\u591A\u4EBA\u4E0D\u770B\u597D\u56FD\u5185\u7684\u751F\u6001\uFF0C\u57FA\u672C\u4E0A\u90FD\u662F\u51FA\u6D77\u505A\u76F8\u5173\u7684\u4E1A\u52A1\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD8\u662F\u575A\u4FE1\u8FD9\u4E2A\u65B9\u5411\u662F\u53EF\u4EE5\u6323\u94B1\u7684\uFF0C\u8FDC\u7A0B\u5DE5\u4F5C\u673A\u4F1A\u6BD4\u8F83\u591A\uFF0C\u5982\u679C\u4F60\u5B66\u5386\u5B66\u6821\u8FD8\u4E0D\u9519\uFF0C\u82F1\u8BED\u8FC7\u5F97\u53BB\uFF0C\u5728\u8FD9\u4E2A\u884C\u4E1A\u6DF7\u6BD4\u5176\u4ED6\u5927\u90E8\u5206\u884C\u4E1A\u90FD\u8981\u597D\uFF0C\u8FD9\u662F\u6211\u8BA4\u4E3A\u6700\u6709\u53EF\u80FD\u8D22\u5BCC\u81EA\u7531\u7684\u884C\u4E1A\u4E86</p><blockquote><p>\u7B2C 8 \u90E8\u5206\uFF0C\u4E13\u4E1A\u65B9\u5411-AI \u5E94\u7528\u843D\u5730\u5F00\u53D1</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.\u96F6\u57FA\u7840\u73A9\u8F6C ChatGPT</p><p>2.ChatGPT API \u4EE3\u7406\u5E73\u53F0\u5F00\u53D1</p><p><a href="http://3.AI" target="_blank" rel="noreferrer">3.AI</a> \u5E73\u53F0\u63D2\u4EF6\u5F00\u53D1</p><p>4.\u57FA\u4E8E Langchain \u7684\u9879\u76EE\u5B9E\u6218</p></div><p>\u8FD9\u4E2A\u90E8\u5206\u7684\u5185\u5BB9\u662F\u5F53\u4E0B\u6700\u706B\u70ED\u7684\u98CE\u53E3\uFF0CAI \u901A\u7528\u5927\u6A21\u578B\u7684\u5927\u89C4\u6A21\u843D\u5730\uFF0C\u8FD9\u662F\u666E\u901A\u7A0B\u5E8F\u5458\u5343\u8F7D\u96BE\u9022\u7684\u673A\u4F1A\uFF0C\u674E\u5F00\u590D\u7684\u673A\u6784\u9884\u6D4B\u7684\uFF0CAI2.0 \u65F6\u4EE3\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u5E94\u7528\u90FD\u53EF\u4EE5\u57FA\u4E8E AI \u91CD\u505A\u4E00\u904D\uFF0C\u8FD9\u4E2A\u673A\u4F1A\u6BD4\u4F20\u7EDF\u4E92\u8054\u7F51\u5927 10 \u500D\uFF0C\u5982\u679C\u4F60\u8FD8\u7EA0\u7ED3\u4E92\u8054\u7F51\u5927\u7EA2\u5229\u6D88\u5931\uFF0C\u8FD8\u4E0D\u5982\u6293\u4F4F\u672A\u6765\u7684\u7EA2\u5229\uFF0C\u63D0\u524D\u5E03\u5C40</p><h3 id="\u8BFE\u7A0B\u4EF7\u683C" tabindex="-1">\u8BFE\u7A0B\u4EF7\u683C <a class="header-anchor" href="#\u8BFE\u7A0B\u4EF7\u683C" aria-hidden="true">#</a></h3><p>\u4ECE\u96F6\u5F00\u59CB\u5B66\u4E60\u8FD9\u5957\u7CFB\u7EDF\u7684\u8BFE\u7A0B\uFF0C\u603B\u4EF7\u683C\uFF1A<span style="color:red;font-weight:bold;">4980</span> \u5143</p><p>\u5355\u4E70 Web3 \u90E8\u5206\u8BFE\u7A0B\uFF0C\u4EF7\u683C\uFF1A<span style="color:red;font-weight:bold;">1980</span>\u5143</p><p>\u5355\u4E70 Nestjs \u8BED\u8A00\u90E8\u5206\u8BFE\u7A0B\uFF0C\u4EF7\u683C\uFF1A<span style="color:red;font-weight:bold;">1980</span>\u5143</p><p>\u5355\u4E70\u300A\u524D\u7AEF\u5DE5\u7A0B\u5316\u63D0\u6548\u300B\u8BFE\u7A0B\u4EF7\u683C\uFF1A<span style="color:red;font-weight:bold;">499</span>\u5143</p><h5 id="\u6D3B\u52A8" tabindex="-1">\u6D3B\u52A8 <a class="header-anchor" href="#\u6D3B\u52A8" aria-hidden="true">#</a></h5><p>\u666E\u901A\u73ED\uFF1A\u5982\u679C\u60F3\u8981\u8D2D\u4E70\u6574\u4E2A\u4F53\u7CFB\u8BFE\u7A0B\uFF0C\u524D 100 \u540D\uFF0C\u65E9\u9E1F\u4EF7\uFF1A<span style="color:red;font-weight:bold;">998</span>\u5143</p><p>\u534F\u8BAE\u73ED\uFF1A\u4EC5\u9650\u524D 100 \u540D\uFF0C\u62A5\u540D\u7B7E\u8BA2\u5C31\u4E1A\u670D\u52A1\u5408\u540C\uFF0C\u627E\u4E0D\u5230\u5DE5\u4F5C\u9000\u5168\u6B3E\uFF0C\u4EF7\u683C\uFF1A<span style="color:red;font-weight:bold;">1998</span>\u5143\uFF0C\u534F\u8BAE\u73ED\u8981\u6C42\u5177\u6709\u672C\u79D1\u53CA\u4EE5\u4E0A\u5B66\u5386</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F\uFF1A\u534F\u8BAE\u73ED\u9700\u8981\u6309\u7167\u6211\u4EEC\u7684\u8981\u6C42\u6BCF 2-3 \u5929\u4F5C\u4E3A\u4E00\u4E2A\u5468\u671F\uFF0C\u4E0A\u4EA4\u5B66\u4E60\u603B\u7ED3\uFF0C\u5B66\u4E60\u603B\u7ED3\u4EE5\u5F55\u5236\u77ED\u89C6\u9891\u7684\u5F62\u5F0F\u4E0A\u4EA4\uFF0C\u8FD9\u662F\u6211\u4EEC\u6700\u65B0\u91C7\u7528\u7684\u9AD8\u6548\u5B66\u4E60\u65B9\u6CD5\uFF0C\u4E86\u89E3\u8BE6\u60C5\uFF0C\u8BF7\u79FB\u6B65\u8FD9\u91CC\u9605\u8BFB\uFF1A<a href="/article/2023.06/5.html">\u9AD8\u6548\u5B66\u4E60\u65B9\u6CD5\u5B9E\u8DF5</a></p><p>\u4E3A\u4E86\u8FBE\u5230\u7763\u5B66\u7684\u76EE\u7684\uFF0C\u51E1\u662F\u53C2\u52A0\u5C31\u4E1A\u534F\u8BAE\u73ED\u7684\u540C\u5B66\uFF0C\u5B66\u4E60\u603B\u7ED3\u8D85\u8FC7 3 \u6B21\u4E0D\u63D0\u4EA4\uFF0C\u534F\u8BAE\u4F5C\u5E9F</p></div><h3 id="\u5B66\u4E60\u65B9\u5F0F" tabindex="-1">\u5B66\u4E60\u65B9\u5F0F <a class="header-anchor" href="#\u5B66\u4E60\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u62A5\u540D\u540E\uFF0C\u6211\u4EEC\u4F1A\u7ED9\u4F60\u63D0\u4F9B\u6211\u4EEC\u5185\u90E8\u5B66\u4E60\u5E73\u53F0\u7684\u8D26\u53F7\uFF0C\u4F60\u8DDF\u7740\u5B66\u4E60\u8DEF\u7EBF\u5B66\u4E60\u5373\u53EF</p><p><img src="'+d+'" alt=""></p><p><img src="'+u+'" alt=""></p>',92),C=[b];function v(A,y,k,g,m,_){return a(),p("div",null,C)}const T=s(h,[["render",v]]);export{D as __pageData,T as default};