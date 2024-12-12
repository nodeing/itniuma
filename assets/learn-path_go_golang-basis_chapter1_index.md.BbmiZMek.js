import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.t0t3spwR.js";const h="/assets/2023-04-06-20-47-02.DSgY_gUt.png",p="/assets/2021-05-28-22-14-34.Df0ACmIe.png",t="/assets/2021-05-28-22-15-43.6mlEYw3z.png",l="/assets/2021-05-28-22-16-14.Demshbyy.png",k="/assets/2021-05-28-22-16-32.dfw2Mt1m.png",e="/assets/2021-05-28-22-26-55.DNRSj4WQ.png",E="/assets/2021-05-28-22-57-55.BzXo224I.png",g="/assets/2021-05-28-23-07-38.DQl-YelJ.png",d="/assets/2021-05-28-23-08-58.DDU5Wenc.png",v=JSON.parse('{"title":"helloworld","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/go/golang-basis/chapter1/index.md","filePath":"learn-path/go/golang-basis/chapter1/index.md"}'),r={name:"learn-path/go/golang-basis/chapter1/index.md"},o=n('<h1 id="helloworld" tabindex="-1">helloworld <a class="header-anchor" href="#helloworld" aria-label="Permalink to &quot;helloworld&quot;">​</a></h1><h2 id="课程说明" tabindex="-1">课程说明 <a class="header-anchor" href="#课程说明" aria-label="Permalink to &quot;课程说明&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>适合人群：本课程适合有一定编程基础的同学学习，你还需要具备一些基础的终端命令知识，知道什么是终端，如果不清楚这些基础命令，一定要加微信咨询，否则看不懂文档 答疑微信：Michael-Niuma</p></div><h2 id="视频教程" tabindex="-1">视频教程 <a class="header-anchor" href="#视频教程" aria-label="Permalink to &quot;视频教程&quot;">​</a></h2><p>百度云盘下载地址：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>链接: <a href="https://pan.baidu.com/s/15I4s2ZGFoZ4gkuyxl7Xkvw?pwd=f7t4" target="_blank" rel="noreferrer">https://pan.baidu.com/s/15I4s2ZGFoZ4gkuyxl7Xkvw?pwd=f7t4</a> 提取码: f7t4 复制这段内容后打开百度网盘手机 App，操作更方便哦 --来自百度网盘超级会员 v7 的分享</p></div><h2 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-label="Permalink to &quot;环境安装&quot;">​</a></h2><p>Golang 环境下载地址：<a href="https://golang.org/dl/" target="_blank" rel="noreferrer">https://golang.org/dl/</a>，说明一下，本文档写作的适合，最新版本为 1.16.4</p><p>目前，安装 Golang 的环境已经非常容易了，你只需要下载和自己系统相对应的版本，然后傻瓜式安装即可</p><p><img src="'+h+'" alt=""></p><p>安装过程，以 windows 为例：首先双击运行，注意：写文档的时候下载的最新版本是 1.16.4，所以下面截图和最新版本不一致，但不影响操作</p><p><img src="'+p+'" alt=""></p><p><img src="'+t+'" alt=""></p><p><img src="'+l+'" alt=""></p><p><img src="'+k+'" alt=""></p><p>等待安装完成即可，安装完成后，打开你的命令行工具输入命令检查是否安装成功</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> version</span></span></code></pre></div><p><img src="'+e+`" alt=""></p><p>出现版本号说明说明 Golang 的命令已经可以用了，如果你输入命令后没有显示版本号，可能是因为环境变量没配置好，可以加微信 nodeing-com，帮你一对一指导</p><p>你也可以使用下面命令来查看环境相关的信息</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> env</span></span></code></pre></div><p>我的电脑输出结果：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GO111MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOARCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOBIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOCACHE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator\\AppData\\Local\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator\\AppData\\Roaming\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOEXE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.exe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOHOSTARCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOHOSTOS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">windows</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOINSECURE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOMODCACHE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E:\\workspace\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\pkg\\mod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GONOPROXY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GONOSUMDB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOOS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">windows</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOPATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E:\\workspace\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOPRIVATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOPROXY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//goproxy.cn,direct</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOROOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Program Files\\Go</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOSUMDB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sum.golang.org</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOTMPDIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOTOOLDIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Program Files\\Go\\pkg\\tool\\windows_amd64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOVCS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOVERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go1.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16.4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GCCGO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gccgo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set AR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gcc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CXX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CGO_ENABLED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOMOD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NUL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CGO_CFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CGO_CPPFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CGO_CXXFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CGO_FFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set CGO_LDFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set PKG_CONFIG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set GOGCCFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m64 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mthreads </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fno</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">caret</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">diagnostics </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Qunused</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arguments </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fdebug</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-map=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator\\AppData\\Local\\Temp\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build292707287</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tmp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/go-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gno</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gcc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">switches</span></span></code></pre></div><p>通常情况下，Go 的安装包装好以后都会自动设置好环境变量, 这些配置你现在还没有必要去详细了解，我们先把基础语法学习了，等后面用到相关的配置，我们再回过头来看这里面的配置信息</p><h2 id="动手实践" tabindex="-1">动手实践 <a class="header-anchor" href="#动手实践" aria-label="Permalink to &quot;动手实践&quot;">​</a></h2><p>我们使用 vscode 来作为编写 Go 程序的工具，你需要安装一个扩展，方便我们编写 Go 程序代码</p><p><img src="`+E+`" alt=""></p><p>接下来，你可以在你电脑上任意位置创建你的 Go 项目，这得益于 Go Module 的推出，在 Go Module 推出之前，你必须把项目放到 GOPATH 目录下，这不是太灵活</p><p>我习惯把我的项目放到 GOPATH/src 目录下，因此，本套教程的源代码我还是会放到这个目录下来演示</p><p>这是我的演示目录 /e/workspace/go/go-demo，我们需要先初始化项目</p><p>第一步，打开命令行工具，进入到 go-demo 这个项目目录下，输入命令</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mod init </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">demo</span></span></code></pre></div><p>第二步，输入命令，打开编辑器,开始编码</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">code .</span></span></code></pre></div><p>第三步，新建一个 main.go 的文件,编写代码</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>第四步，运行代码，这里我们推荐最简便的方式，右键运行，但这需要你安装一个 vscode 的插件</p><p><img src="`+g+'" alt=""></p><p>安装 Code Runner 这个插件，安装好以后，你就可以通过 右键 --&gt; Run Code 这种方式来运行你的代码了</p><p>结果如下：</p><p><img src="'+d+`" alt=""></p><p>下面我们来看一下 Code Runner 帮我们做了哪些事情，首先来观察一下输出的结果</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Running] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> run </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;e:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\\w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">orkspace</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\\g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">o</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\\g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">o-demo</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ain.go&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hello world</span></span></code></pre></div><p>我们发现 Code Runner 调用了一个 go run 的命令来执行 main.go 这个文件，这实际上是 Go 自带的命令，另外，我们还可以手动的方式运行</p><p>第一步，先把 go 程序编译成 可以执行文件，以 windows 系统为例，可执行文件以 .exe 结尾</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 运行命令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> build .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span></span></code></pre></div><p>此时，你会发现项目目录下，生成了一个 main.exe 的可执行程序</p><p>第二步，执行这个 main.exe 的可执行程序</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 输出 hello world</span></span></code></pre></div><p>编译运行 go 程序只需要两步，但是这在开发中会显得更麻烦，因此，你可以使用更为简单的命令</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> run .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">go</span></span></code></pre></div><p>go run 这个命令和 go build 这个命令的区别是，go run 并不会生成可执行文件，而是直接编译运行，这个时候你应该知道 Code Runner 帮我们做了哪些事情了，那就是直接帮我们去调用 go run 这个命令来运行 go 程序，到此为止，我们的第一个 go 程序已经跑起来了，欢迎进入 golang 的世界</p>`,52),y=[o];function c(F,A,D,u,m,C){return a(),i("div",null,y)}const G=s(r,[["render",c]]);export{v as __pageData,G as default};