import{_ as s,c as a,o as i,V as n}from"./chunks/framework.AW5yxxpt.js";const y=JSON.parse('{"title":"Hello World","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/python/basic/chapter1/1.md","filePath":"learn-path/python/basic/chapter1/1.md"}'),t={name:"learn-path/python/basic/chapter1/1.md"},p=n(`<h1 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-label="Permalink to &quot;Hello World&quot;">​</a></h1><h2 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h2><h3 id="python-环境安装" tabindex="-1">python 环境安装 <a class="header-anchor" href="#python-环境安装" aria-label="Permalink to &quot;python 环境安装&quot;">​</a></h3><p>python 是一门解释型语言，我们需要安装 python 的解释器才能运行我们的 python 程序，安装 python 解释器和安装普通的程序一样，直接下载运行即可，下载地址：<a href="https://www.python.org/downloads/release/python-3104/" target="_blank" rel="noreferrer">点击进入</a>,根据自己的电脑操作系统，选择对应的安装包下载即可</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430092214.png" alt="20220430092214"></p><p>注意上面版本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1 X86 和 X86-64 的区别：系統是 32 bit 的版本还是 64bit 的</span></span>
<span class="line"><span>2 Windows embeddable package (64-bit)  这种是嵌入式版本，可以集成到其他应用中</span></span>
<span class="line"><span>3 Windows installer (64-bit) 这种是安装版本，下载后直接运行即可</span></span></code></pre></div><p>下载完成 python 解释器程序后，双击运行</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430094529.png" alt="20220430094529"></p><p>注意哈，上面该勾的一定要勾上，这也就不用单独配置环境变量了</p><p>安装完成</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430094718.png" alt="20220430094718"></p><h3 id="开发工具准备" tabindex="-1">开发工具准备 <a class="header-anchor" href="#开发工具准备" aria-label="Permalink to &quot;开发工具准备&quot;">​</a></h3><p>python 的开发工具推荐 vscode 和 pycharm，vscode 开源免费，pycharm 收费软件，大多数情况 vscode 已经足够使用了，如果你的项目非常大，可以使用 pycharm，功能非常强大，在我们的课程中，默认你已经会使用 vscode 了，如果不会，需要先去了解如何使用，这里是课程地址：<a href="https://edu.nodeing.com/#/courses/detail?id=25" target="_blank" rel="noreferrer">点击进入</a></p><p>安装 vscode 的 python 插件</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430095139.png" alt="20220430095139"></p><p>还要安装一个 code runner 的插件，方便我们运行代码</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430095401.png" alt="20220430095401"></p><h2 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h2><h3 id="打印-hello-world" tabindex="-1">打印 hello world <a class="header-anchor" href="#打印-hello-world" aria-label="Permalink to &quot;打印 hello world&quot;">​</a></h3><p>项目下面，新建 hello.py 文件</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world!!!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>代码写完后，vscode 会提示你是否安装一个 autopep8 的包，这是一个开源的 python 代码格式化工具，点击是即可，会自动帮你安装</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430100727.png" alt="20220430100727"></p><p>接下来，我们只需要右键运行 python 代码即可</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430100857.png" alt="20220430100857"></p><p>运行结果</p><p><img src="https://nodeing-book.oss-cn-beijing.aliyuncs.com/juyin8848/20220430100940.png" alt="20220430100940"></p><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h3><p>python 的单行注释使用#开头</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这是第一个hello程序</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>python 的多行注释用三个引号包裹，可以是单引号也可以是双引号</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这里是多行注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">使用双引号来注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这里是多行注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">使用单引号</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world!!!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\`\`\`</span></span></code></pre></div>`,33),e=[p];function l(o,h,r,c,d,k){return i(),a("div",null,e)}const u=s(t,[["render",l]]);export{y as __pageData,u as default};
