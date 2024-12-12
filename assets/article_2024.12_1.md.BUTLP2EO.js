import{_ as s,c as a,o as i,a1 as p}from"./chunks/framework.t0t3spwR.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/2024.12/1.md","filePath":"article/2024.12/1.md"}'),n={name:"article/2024.12/1.md"},t=p(`<h2 id="使用-frp-搭建内网穿透服务" tabindex="-1">使用 frp 搭建内网穿透服务 <a class="header-anchor" href="#使用-frp-搭建内网穿透服务" aria-label="Permalink to &quot;使用 frp 搭建内网穿透服务&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你需要准备的东西：</p><ul><li>一台有公网 IP 的服务器</li><li>一台本地电脑</li><li>一个备案的域名</li></ul></div><h2 id="搭建-frp-服务端" tabindex="-1">搭建 frp 服务端 <a class="header-anchor" href="#搭建-frp-服务端" aria-label="Permalink to &quot;搭建 frp 服务端&quot;">​</a></h2><p>第 1 步，下载最新的 frp 二进制文件，上传到服务器</p><p>第 2 步，解压 frp 文件到/usr/local/bin 目录下</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frp_0.61.0_linux_amd64.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --strip-components=1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frp_0.61.0_linux_amd64/frps</span></span></code></pre></div><p>第 3 步，创建一个 frp 目录来存放配置文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/frp</span></span></code></pre></div><p>第 4 步，创建 frps.toml 配置文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/frp/frps.toml</span></span></code></pre></div><p>填入配置文件内容</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bindPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vhostHTTPSPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7443</span></span></code></pre></div><p>第 5 步，安装 systemd 服务管理器</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd</span></span></code></pre></div><p>第 6 步，创建 frps.service 文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/frps.service</span></span></code></pre></div><p>填入配置文件内容</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">frp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">After</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">simple</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RestartSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/bin/frps</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/frp/frps.toml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">multi-user.target</span></span></code></pre></div><p>第 7 步，启动 frp 服务</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frps</span></span></code></pre></div><p>第 8 步，设置开机自启</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frps</span></span></code></pre></div><h2 id="搭建-frp-客户端" tabindex="-1">搭建 frp 客户端 <a class="header-anchor" href="#搭建-frp-客户端" aria-label="Permalink to &quot;搭建 frp 客户端&quot;">​</a></h2><p>第 1 步，把前面我们下载的 frp 二进制文件解压，解压后，得到的目录结构如下：</p><p><img src="https://img.bokecity.com/ndedu/20241212140744.png" alt="20241212140744"></p><p>这个目录下面有一个二进制文件 frpc 这个文件是客户端文件，frps 这个文件是服务端文件，服务端的文件是要放到远程服务器上跑起来的，客户端的这个 frpc 文件是本地电脑上跑起来的。用 fprc 去链接远程 frps 服务端</p><p>第 2 步，创建一个 frp 目录来存放配置文件，我的是 mac 电脑，我把这个目录创建到我的 home 目录下：/Users/key/frp</p><p><img src="https://img.bokecity.com/ndedu/20241212141028.png" alt="20241212141028"></p><p>第 3 步，把 fpr 解压后的二进制文件 frpc 复制到这个目录下，然后创建一个 frpc.toml 配置文件，并且在这个配置文件里面填入以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>serverAddr = &quot;xxx.xxx.2xx.xx8&quot;</span></span>
<span class="line"><span>serverPort = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 鉴权方式为token</span></span>
<span class="line"><span>auth.method = &quot;token&quot;</span></span>
<span class="line"><span># TOKEN 客户端需要设置和服务端一样才能鉴权通过</span></span>
<span class="line"><span>auth.token = &quot;xxxx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 公众号调试代理</span></span>
<span class="line"><span>[[proxies]]</span></span>
<span class="line"><span>name = &quot;mp-weixin-debug&quot;</span></span>
<span class="line"><span>type = &quot;http&quot;</span></span>
<span class="line"><span>localPort = 3000</span></span>
<span class="line"><span>customDomains = [&quot;test.itniuma.com&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[proxies]]</span></span>
<span class="line"><span>name = &quot;mp-weixin&quot;</span></span>
<span class="line"><span>type = &quot;https&quot;</span></span>
<span class="line"><span>customDomains = [&quot;test.itniuma.com&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[proxies.plugin]</span></span>
<span class="line"><span>type = &quot;https2http&quot;</span></span>
<span class="line"><span>localAddr = &quot;127.0.0.1:3000&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTPS 证书相关的配置</span></span>
<span class="line"><span>crtPath = &quot;/Users/key/frp/server.crt&quot;</span></span>
<span class="line"><span>keyPath = &quot;/Users/key/frp/server.key&quot;</span></span>
<span class="line"><span>hostHeaderRewrite = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>requestHeaders.set.x-from-where = &quot;frp&quot;</span></span></code></pre></div><p>第 4 步，去申请一个 ssl 证书，把证书放到/Users/key/frp 目录下，这里需要注意，证书绑定的域名是 test.itniuma.com，所以，在申请证书的时候，需要把 test.itniuma.com 这个域名添加到证书里面，否则，在访问的时候，会提示证书不匹配。</p><p><img src="https://img.bokecity.com/ndedu/20241212141636.png" alt="20241212141636"></p><p>配置完成后，frp 目录下有 4 个文件，其中，server.crt 和 server.key 是 ssl 证书，这个名字是我申请完证书后重命名的，frpc.toml 是客户端配置文件，frpc 是客户端二进制文件</p><p>第 5 步，启动 frp 客户端</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./frpc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./frpc.toml</span></span></code></pre></div><p>执行结果如下，表示连接成功</p><p><img src="https://img.bokecity.com/ndedu/20241212141755.png" alt="20241212141755"></p><p>在上面配置文件中，有这样一条配置：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">localAddr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;127.0.0.1:3000&quot;</span></span></code></pre></div><p>意味着，我本地电脑上的后端项目是跑在这个 3000 端口上的，例如：我启动了一个 go 项目</p><p><img src="https://img.bokecity.com/ndedu/20241212143936.png" alt="20241212143936"></p><p>我们想要把这个本地的 go 服务暴露到公网上，就可以通过 frp 来实现了，还差最后一步</p><p>第 6 步，把 test.itniuma.com 这个域名解析到远程服务器的公网 IP 上，这个公网 ip 就是我们 frps 服务器的 ip， 这个 ip 我们已经配置在了本地 frpc.toml 文件中了</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">serverAddr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx.xxx.2xx.xx8&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 这里你需要改成你自己的服务器ip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">serverPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7000</span></span></code></pre></div><p>由于我们在服务端配置文件中配置的 https 端口是 7443</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bindPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vhostHTTPSPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7443</span></span></code></pre></div><p>我们在访问的时候，需要加上端口号，例如：<a href="https://test.itniuma.com:7443" target="_blank" rel="noreferrer">https://test.itniuma.com:7443</a>，这样就可以访问到我们本地的 go 服务了</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>通过以上步骤，我们就可以把本地的服务暴露到公网上，并且通过 https 来访问，这样就可以实现内网穿透了。架构图如下：</p><p><img src="https://img.bokecity.com/ndedu/20241212145757.png" alt="20241212145757"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>访问流程总结：</p><p>1.域名解析到 frps 服务器的公网 ip</p><p>2.frps 和 frpc 建立通信</p><p>3.访问<a href="https://test.itniuma.com:7443" target="_blank" rel="noreferrer">https://test.itniuma.com:7443</a>，frps转发请求到frpc，frpc转发请求到本地的go服务</p></div>`,51),l=[t];function e(h,k,r,c,o,d){return i(),a("div",null,l)}const u=s(n,[["render",e]]);export{F as __pageData,u as default};