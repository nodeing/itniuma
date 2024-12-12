import{_ as a,c as e,o as s,a1 as t}from"./chunks/framework.t0t3spwR.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/2023.10/command/ls.md","filePath":"article/2023.10/command/ls.md"}'),l={name:"article/2023.10/command/ls.md"},i=t('<h2 id="ls" tabindex="-1">ls <a class="header-anchor" href="#ls" aria-label="Permalink to &quot;ls&quot;">​</a></h2><p>作用：显示目录内容列表</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ls [选项] [文件名...]</span></span></code></pre></div><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><ol><li>仅列出当前目录可见文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls</span></span></code></pre></div><p>2.列出当前目录可见文件详细信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -l</span></span></code></pre></div><p>3.列出详细信息并以可读大小显示文件大小</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -hl</span></span></code></pre></div><p>4.列出所有文件（包括隐藏）的详细信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -al</span></span></code></pre></div><p>5.按文件大小排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls --human-readable --size -1 -S --classify</span></span></code></pre></div><p>6.按文件大小排序(同上)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ du -sh \\* | sort -h</span></span></code></pre></div><p>7.每行只列出一个文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -1 # 注意，这里是数字1，不是字母l</span></span></code></pre></div><p>8.水平输出文件列表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -m</span></span></code></pre></div><p>9.显示递归文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -R</span></span></code></pre></div><p>10.最近修改的文件显示在最上面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -t</span></span></code></pre></div><p>11.显示文件夹信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -ld /etc/</span></span></code></pre></div><p>12.按时间列出文件和文件夹详细信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -lt</span></span></code></pre></div><h3 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h3><p>ls 就是 list 的缩写，这个命令是在 Linux 中是使用频率较高的命令, 万能大法，如果你临时记不住命令，可以使用 <code>ls --help</code> 来查看帮助信息</p><h2 id="cd" tabindex="-1">cd <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;cd&quot;">​</a></h2><h2 id="ln" tabindex="-1">ln <a class="header-anchor" href="#ln" aria-label="Permalink to &quot;ln&quot;">​</a></h2><h2 id="pwd" tabindex="-1">pwd <a class="header-anchor" href="#pwd" aria-label="Permalink to &quot;pwd&quot;">​</a></h2><h2 id="mkdir" tabindex="-1">mkdir <a class="header-anchor" href="#mkdir" aria-label="Permalink to &quot;mkdir&quot;">​</a></h2><h2 id="rm" tabindex="-1">rm <a class="header-anchor" href="#rm" aria-label="Permalink to &quot;rm&quot;">​</a></h2><h2 id="rmdir" tabindex="-1">rmdir <a class="header-anchor" href="#rmdir" aria-label="Permalink to &quot;rmdir&quot;">​</a></h2><h2 id="mv" tabindex="-1">mv <a class="header-anchor" href="#mv" aria-label="Permalink to &quot;mv&quot;">​</a></h2><h2 id="cp" tabindex="-1">cp <a class="header-anchor" href="#cp" aria-label="Permalink to &quot;cp&quot;">​</a></h2><h2 id="touch" tabindex="-1">touch <a class="header-anchor" href="#touch" aria-label="Permalink to &quot;touch&quot;">​</a></h2><h2 id="cat" tabindex="-1">cat <a class="header-anchor" href="#cat" aria-label="Permalink to &quot;cat&quot;">​</a></h2><h2 id="nl" tabindex="-1">nl <a class="header-anchor" href="#nl" aria-label="Permalink to &quot;nl&quot;">​</a></h2><h2 id="more" tabindex="-1">more <a class="header-anchor" href="#more" aria-label="Permalink to &quot;more&quot;">​</a></h2><h2 id="less" tabindex="-1">less <a class="header-anchor" href="#less" aria-label="Permalink to &quot;less&quot;">​</a></h2><h2 id="tail" tabindex="-1">tail <a class="header-anchor" href="#tail" aria-label="Permalink to &quot;tail&quot;">​</a></h2><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-label="Permalink to &quot;head&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span></code></pre></div>',47),n=[i];function p(o,h,d,c,r,u){return s(),e("div",null,n)}const m=a(l,[["render",p]]);export{g as __pageData,m as default};