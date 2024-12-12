import{_ as a,c as p,o as c,a1 as s}from"./chunks/framework.t0t3spwR.js";const u=JSON.parse('{"title":"环境搭建","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/java/java-basic/chapter1/2.md","filePath":"learn-path/java/java-basic/chapter1/2.md"}'),n={name:"learn-path/java/java-basic/chapter1/2.md"},o=s(`<h1 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h1><h3 id="什么是-jdk" tabindex="-1">什么是 JDK？ <a class="header-anchor" href="#什么是-jdk" aria-label="Permalink to &quot;什么是 JDK？&quot;">​</a></h3><p>JDK（Java Development Kit）：Java 开发工具包，做 Java 开发，必须安装 JDK，既然需要安装，说明这个 JDK 也就是一个程序，我们下载好以后，可以直接双击运行安装</p><h3 id="下载安装-jdk" tabindex="-1">下载安装 JDK <a class="header-anchor" href="#下载安装-jdk" aria-label="Permalink to &quot;下载安装 JDK&quot;">​</a></h3><p>下载地址：<a href="https://www.oracle.com/cn/java/technologies/downloads/" target="_blank" rel="noreferrer">点击进入</a>，这里是官方的下载地址，你也可以直接使用我们已经下载好的版本</p><p>目前,可以用的版本是 19 和 17</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221029122247.png" alt="20221029122247"></p><p>jdk 安装包我们已经下载好了，放到了百度云盘</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>链接: https://pan.baidu.com/s/1l1XZCpoLgF475JZgqUQ7RA?pwd=6g6g 提取码: 6g6g 复制这段内容后打开百度网盘手机App，操作更方便哦</span></span>
<span class="line"><span>--来自百度网盘超级会员v7的分享</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意哈，上面安装包里面有几个文件，你要找到和你操作系统对应的安装，不要安装错了</p><p>jdk-19_macos-x64_bin.dmg 如果你的电脑是 mac 系统，并且是 intel 的 cpu 你就安装这个</p><p>jdk-19_macos-aarch64_bin.dmg 如果你的电脑是 mac 系统，并且是苹果自家的 cpu 你就安装这个</p><p>jdk-19_windows-x64_bin.exe 如果你的电脑是 windows 系统，安装这个</p></div><p>我们的课程基于版本 19 讲解，下面是安装过程截图</p><h3 id="mac-电脑安装" tabindex="-1">mac 电脑安装 <a class="header-anchor" href="#mac-电脑安装" aria-label="Permalink to &quot;mac 电脑安装&quot;">​</a></h3><p>我的是苹果自家的 cpu 芯片，双击 jdk-19_macos-aarch64_bin.dmg 进行安装</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113401.png" alt="20221109113401"></p><p>第二步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113508.png" alt="20221109113508"></p><p>第三步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113537.png" alt="20221109113537"></p><p>第四步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113628.png" alt="20221109113628"></p><p>第五步，安装完成</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113707.png" alt="20221109113707"></p><p>第六步，打开终端工具，输入命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>java --version</span></span></code></pre></div><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113826.png" alt="20221109113826"></p><p>出现版本信息就说明安装成功了</p><h3 id="windows-电脑安装" tabindex="-1">windows 电脑安装 <a class="header-anchor" href="#windows-电脑安装" aria-label="Permalink to &quot;windows 电脑安装&quot;">​</a></h3><p>第一步，在你的电脑上新建一个 local 的文件夹，放 C 盘、D 盘都可以，不做要求，但是需要记住两点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.路径不要有中文</span></span>
<span class="line"><span>2.路径不要有文件空格</span></span>
<span class="line"><span>建议就直接放到C盘或者D盘的根目录下，例如：C:/local,D:/local</span></span></code></pre></div><p>这个 local 是一个单独放软件安装信息的文件夹，例如：我的 windows 电脑上只有一个 C 盘，我就在 C 盘下新建一个 local 文件夹来存放</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：一定要规划好你电脑上的存放目录，不然等你电脑用久了又得重新安装系统</span></span></code></pre></div><p>我电脑上 jdk 的安装位置： C:/local/java/jdk-19, 这一步你们自己新建好文件夹，记住，后面安装的时候选这个安装目录</p><p>第二步，双击 jdk-19_windows-x64_bin.exe 安装程序进行安装</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109113944.png" alt="20221109113944"></p><p>第三步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109120454.png" alt="20221109120454"></p><p>第四步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109133056.png" alt="20221109133056"></p><p>第五步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109121612.png" alt="20221109121612"></p><p>第六步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109121637.png" alt="20221109121637"></p><p>第七步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109121705.png" alt="20221109121705"></p><p>第八步</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221109121729.png" alt="20221109121729"></p>`,46),e=[o];function t(d,i,l,m,h,g){return c(),p("div",null,e)}const v=a(n,[["render",t]]);export{u as __pageData,v as default};