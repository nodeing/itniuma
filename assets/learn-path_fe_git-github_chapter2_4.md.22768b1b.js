import{_ as s,c as a,o as n,a as l}from"./app.c80995a5.js";const p="/assets/2019-03-23-10-57-54.798d952d.png",o="/assets/2019-03-23-11-00-46.9e6d43cf.png",e="/assets/2019-03-23-11-04-40.27137c09.png",t="/assets/2019-03-23-11-08-32.8f288325.png",c="/assets/2019-03-23-15-43-12.346f3ba8.png",_=JSON.parse('{"title":"Git \u9AD8\u6548\u5165\u95E8\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"2.4.\u5E38\u7528 git \u547D\u4EE4","slug":"_2-4-\u5E38\u7528-git-\u547D\u4EE4","link":"#_2-4-\u5E38\u7528-git-\u547D\u4EE4","children":[{"level":3,"title":"2.4.1.\u56DE\u987E\u524D\u9762\u4F7F\u7528\u7684\u547D\u4EE4","slug":"_2-4-1-\u56DE\u987E\u524D\u9762\u4F7F\u7528\u7684\u547D\u4EE4","link":"#_2-4-1-\u56DE\u987E\u524D\u9762\u4F7F\u7528\u7684\u547D\u4EE4","children":[]},{"level":3,"title":"2.4.2.\u67E5\u770B\u65E5\u5FD7","slug":"_2-4-2-\u67E5\u770B\u65E5\u5FD7","link":"#_2-4-2-\u67E5\u770B\u65E5\u5FD7","children":[]},{"level":3,"title":"2.4.3.\u5BF9\u6BD4\u64CD\u4F5C","slug":"_2-4-3-\u5BF9\u6BD4\u64CD\u4F5C","link":"#_2-4-3-\u5BF9\u6BD4\u64CD\u4F5C","children":[]},{"level":3,"title":"2.4.4.\u64A4\u9500\u64CD\u4F5C","slug":"_2-4-4-\u64A4\u9500\u64CD\u4F5C","link":"#_2-4-4-\u64A4\u9500\u64CD\u4F5C","children":[]},{"level":3,"title":"2.4.5.\u5220\u9664\u64CD\u4F5C","slug":"_2-4-5-\u5220\u9664\u64CD\u4F5C","link":"#_2-4-5-\u5220\u9664\u64CD\u4F5C","children":[]},{"level":3,"title":"2.4.6.\u6062\u590D\u64CD\u4F5C","slug":"_2-4-6-\u6062\u590D\u64CD\u4F5C","link":"#_2-4-6-\u6062\u590D\u64CD\u4F5C","children":[]}]}],"relativePath":"learn-path/fe/git-github/chapter2/4.md"}'),i={name:"learn-path/fe/git-github/chapter2/4.md"},r=l(`<h1 id="git-\u9AD8\u6548\u5165\u95E8\u6307\u5357" tabindex="-1">Git \u9AD8\u6548\u5165\u95E8\u6307\u5357 <a class="header-anchor" href="#git-\u9AD8\u6548\u5165\u95E8\u6307\u5357" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u94FE\u63A5\u5931\u6548\u6216\u8005\u6709\u5176\u4ED6\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u725B\u9A6C\u7A0B\u5E8F\u5458\u91D1\u724C\u8BB2\u5E08--\u8FC8\u514B\u5C14.\u725B\u9A6C\uFF0C\u5FAE\u4FE1\uFF1Anodeing_cn</p></div><h2 id="_2-4-\u5E38\u7528-git-\u547D\u4EE4" tabindex="-1">2.4.\u5E38\u7528 git \u547D\u4EE4 <a class="header-anchor" href="#_2-4-\u5E38\u7528-git-\u547D\u4EE4" aria-hidden="true">#</a></h2><h3 id="_2-4-1-\u56DE\u987E\u524D\u9762\u4F7F\u7528\u7684\u547D\u4EE4" tabindex="-1">2.4.1.\u56DE\u987E\u524D\u9762\u4F7F\u7528\u7684\u547D\u4EE4 <a class="header-anchor" href="#_2-4-1-\u56DE\u987E\u524D\u9762\u4F7F\u7528\u7684\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">git add  \u6587\u4EF6\u540D   \u8FD9\u4E2A\u547D\u4EE4\u7528\u6765\u5C06\u4EE3\u7801\u63D0\u4EA4\u5230\u6682\u5B58\u533A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">git status  \u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u63D0\u4EA4\u7684\u72B6\u6001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6CE8\u91CA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  \u5C06\u4EE3\u7801\u4ECE\u6682\u5B58\u533A\u63D0\u4EA4\u5230\u7248\u672C\u5E93</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-4-2-\u67E5\u770B\u65E5\u5FD7" tabindex="-1">2.4.2.\u67E5\u770B\u65E5\u5FD7 <a class="header-anchor" href="#_2-4-2-\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-4-3-\u5BF9\u6BD4\u64CD\u4F5C" tabindex="-1">2.4.3.\u5BF9\u6BD4\u64CD\u4F5C <a class="header-anchor" href="#_2-4-3-\u5BF9\u6BD4\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u7ECF\u8FC7\u7B2C\u4E00\u6B21\u63D0\u4EA4\uFF0C\u7248\u672C\u5E93\u4E2D\u7684 index.html \u662F\u7A7A\u6587\u4EF6\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5F00\u59CB\u5199\u4EE3\u7801\uFF0C\u5728\u5DE5\u4F5C\u533A index.html \u6587\u4EF6\u4E2D\u5199\u4E00\u70B9\u5185\u5BB9</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u87BA\u9489\u8BFE\u5802</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u4EE3\u7801\u5199\u597D\u540E\uFF0C\u6211\u4EEC\u5C06\u4EE3\u7801\u63D0\u4EA4\u5230\u6682\u5B58\u533A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git add index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u7EE7\u7EED\u4FEE\u6539\u5DE5\u4F5C\u533A\u4E2D index.html \u7684\u4EE3\u7801\uFF0C\u589E\u52A0\u4E00\u884C\u4EE3\u7801</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u87BA\u9489\u8BFE\u5802</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hello nodeing!!!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u7ECF\u8FC7\u4E0A\u9762\u6B65\u9AA4\u4EE5\u540E\uFF0C\u5DE5\u4F5C\u533A\uFF0C\u6682\u5B58\u533A\uFF0C\u7248\u672C\u5E93\u4E2D\u7684 index.html \u5185\u5BB9\u5982\u56FE\uFF1A</p><p><img src="`+p+`" alt=""></p><p>1.\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u4F60\u60F3\u8981\u5BF9\u6BD4\u67E5\u770B\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u7684\u6587\u4EF6\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"></span></code></pre></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+o+`" alt=""></p><p>\u5176\u4E2D\uFF0C\u7EFF\u8272\u5B57\u4F53\u90E8\u5206\u8868\u793A\u5DE5\u4F5C\u533A\u65B0\u589E\u52A0\u7684\u4FEE\u6539</p><p>2.\u5982\u679C\u4F60\u60F3\u8981\u5BF9\u6BD4\u6682\u5B58\u533A\u548C\u7248\u672C\u5E93\u7684\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;">// \u4F7F\u7528git diff --staged \u4E5F\u80FD\u8FBE\u5230\u4E00\u6837\u7684\u6548\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">cached</span></span>
<span class="line"></span></code></pre></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+e+`" alt=""></p><p>\u7531\u4E8E\u7248\u672C\u5E93\u4E2D index.html \u662F\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u6B64\u65F6\uFF0C\u7EFF\u8272\u90E8\u5206\u5168\u662F\u589E\u52A0\u7684\u5185\u5BB9\uFF0C\u610F\u5473\u7740\u6682\u5B58\u533A\u91CC\u9762\u65B0\u589E\u4E86\u591A\u884C\u4EE3\u7801</p><p>3.\u5982\u679C\u4F60\u60F3\u8981\u5BF9\u6BD4\u5DE5\u4F5C\u533A\u548C\u7248\u672C\u5E93\u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#A6ACCD;">git diff master</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u6548\u679C\u5982\u4E0B:</p><p><img src="`+t+`" alt=""></p><p>\u6700\u540E\uFF0C\u6211\u4EEC\u628A\u5BF9\u6BD4\u529F\u80FD\u6F14\u793A\u7684\u4EE3\u7801\u63D0\u4EA4\u5230\u7248\u672C\u5E93</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B2C\u4E8C\u6B21\u63D0\u4EA4\uFF0C\u5BF9\u6BD4\u529F\u80FD\u6F14\u793A\u5B8C\u6210</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-4-4-\u64A4\u9500\u64CD\u4F5C" tabindex="-1">2.4.4.\u64A4\u9500\u64CD\u4F5C <a class="header-anchor" href="#_2-4-4-\u64A4\u9500\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u63A5\u524D\u9762\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u5148\u628A\u5DE5\u4F5C\u533A\u4E2D\u7684\u4FEE\u6539\u63D0\u4EA4\u5230\u6682\u5B58\u533A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git add index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"></span></code></pre></div><p>1.\u5982\u679C\u63D0\u4EA4\u540E\uFF0C\u4F60\u89C9\u5F97\u4EE3\u7801\u5199\u9519\u4E86\uFF0C\u60F3\u8981\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u56DE\u5DE5\u4F5C\u533A\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u547D\u4EE4\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// git reset HEAD &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset HEAD index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"></span></code></pre></div><p>2.\u5982\u679C\u60F3\u8BA9\u5DE5\u4F5C\u533A\u8FD8\u539F\u56DE\u4E0A\u4E00\u6B21\u63D0\u4EA4\u5230\u7248\u672C\u5E93\u7684\u72B6\u6001\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// git checkout -- &lt;file&gt;...</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"></span></code></pre></div><p>3.\u5982\u679C\u63D0\u4EA4\u5230\u7248\u672C\u5E93\u540E\u53D1\u73B0\u5F53\u524D\u7684\u63D0\u4EA4\u662F\u6709\u95EE\u9898\u7684\uFF0C\u53EF\u4EE5\u64A4\u9500\u56DE\u6765\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git commit -m &#39;\u6CE8\u91CA&#39; --amend</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u8FD9\u6761\u547D\u4EE4\u4F1A\u628A\u4E0A\u4E00\u6B21\u63D0\u4EA4\u64A4\u9500\u7136\u540E\u5408\u5E76\u672C\u6B21\u63D0\u4EA4</p><h3 id="_2-4-5-\u5220\u9664\u64CD\u4F5C" tabindex="-1">2.4.5.\u5220\u9664\u64CD\u4F5C <a class="header-anchor" href="#_2-4-5-\u5220\u9664\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>1.\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u53EF\u4EE5\u968F\u610F\u5220\u9664</p><p>2.\u5982\u679C\u5DE5\u4F5C\u533A\u7684\u8FD9\u4E2A\u6587\u4EF6\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u5230\u4E86\u6682\u5B58\u533A\uFF0C\u9664\u4E86\u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u547D\u4EE4\u628A\u6682\u5B58\u533A\u6587\u4EF6\u4E5F\u5220\u9664\u4E86</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// git rm \u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u5982\u679C\u5DE5\u4F5C\u533A\u4E2D\u6CA1\u6709\u5220\u9664 test.html \u8FD9\u4E2A\u6587\u4EF6\uFF0C\u800C\u76F4\u63A5\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u662F\u4E0D\u80FD\u5220\u9664\u6682\u5B58\u533A\u6587\u4EF6\u7684</p><p>3.\u5982\u679C\u60F3\u540C\u65F6\u5220\u9664\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u547D\u4EE4</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"></span></code></pre></div><p>4.\u5982\u679C\u53EA\u60F3\u5220\u9664\u6682\u5B58\u533A\u6587\u4EF6\uFF0C\u800C\u4FDD\u7559\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u547D\u4EE4</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git rm --cached test.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-4-6-\u6062\u590D\u64CD\u4F5C" tabindex="-1">2.4.6.\u6062\u590D\u64CD\u4F5C <a class="header-anchor" href="#_2-4-6-\u6062\u590D\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>1.\u5982\u679C\u5DE5\u4F5C\u533A\u4E2D\u7684 index.html \u88AB\u5220\u9664\u6389\u4E86\uFF0C\u8FD9\u4E2A\u65F6\u5019\u60F3\u4ECE\u7248\u672C\u5E93\u56DE\u590D\u8FD9\u4E2A index.html \u6587\u4EF6\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u547D\u4EE4:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u8BED\u6CD5\uFF1A git checkout \u7248\u672C\u53F7 \u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout bf52d177b1cfd091db index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u4E0A\u9762\u547D\u4EE4\u4E2D\u7528\u5230\u7684\u7248\u672C\u53F7\uFF0C\u53EF\u4EE5\u901A\u8FC7 git log \u6253\u5370\u51FA\u6765\u83B7\u53D6\u5230\uFF0C\u5982\u4E0B\u56FE</p><p><img src="`+c+`" alt=""></p><p>2.\u5982\u679C\u60F3\u6062\u590D\u591A\u4E2A\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6062\u590D\u6574\u4E2A\u7248\u672C\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF0C\u6267\u884C\u547D\u4EE4\uFF1B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u8BED\u6CD5\uFF1Agit reset --hard \u7248\u672C\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">hard  bf52d177b1cfd091db</span></span>
<span class="line"></span></code></pre></div>`,58),D=[r];function y(d,F,C,g,h,A){return n(),a("div",null,D)}const m=s(i,[["render",y]]);export{_ as __pageData,m as default};
