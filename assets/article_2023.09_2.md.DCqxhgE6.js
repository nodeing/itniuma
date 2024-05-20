import{_ as s,c as a,o as e,a1 as n}from"./chunks/framework.t0t3spwR.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/2023.09/2.md","filePath":"article/2023.09/2.md"}'),p={name:"article/2023.09/2.md"},t=n(`<h2 id="eslint-prettier-vscode-环境搭建" tabindex="-1">ESLint + Prettier + VSCode 环境搭建 <a class="header-anchor" href="#eslint-prettier-vscode-环境搭建" aria-label="Permalink to &quot;ESLint + Prettier + VSCode 环境搭建&quot;">​</a></h2><h2 id="创建新项目" tabindex="-1">创建新项目 <a class="header-anchor" href="#创建新项目" aria-label="Permalink to &quot;创建新项目&quot;">​</a></h2><p>第 1 步，先检查你的电脑 vue-cli 版本，确保是最新版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vue -V</span></span></code></pre></div><p>当前我使用的版本是 <code>@vue/cli 5.0.8</code>,如果这个没有装上，自行去官网查看安装命令</p><p>第 2 步，创建项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vue create vue2-template</span></span></code></pre></div><p>第 3 步，选择创建模版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Vue CLI v5.0.8</span></span>
<span class="line"><span>? Please pick a preset:</span></span>
<span class="line"><span>  vue3-template ([Vue 3] babel, router, vuex, eslint)</span></span>
<span class="line"><span>  Default ([Vue 3] babel, eslint)</span></span>
<span class="line"><span>  Default ([Vue 2] babel, eslint)</span></span>
<span class="line"><span>❯ Manually select features</span></span></code></pre></div><p>这步我们选择<code>Manually select features</code> 自己去定义安装配置项</p><p>第 3 步，选择安装各种工具</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Vue CLI v5.0.8</span></span>
<span class="line"><span>? Please pick a preset: Manually select features</span></span>
<span class="line"><span>? Check the features needed for your project: (Press &lt;space&gt; to select, &lt;a&gt; to</span></span>
<span class="line"><span>toggle all, &lt;i&gt; to invert selection, and &lt;enter&gt; to proceed)</span></span>
<span class="line"><span> ◉ Babel</span></span>
<span class="line"><span> ◯ TypeScript</span></span>
<span class="line"><span> ◯ Progressive Web App (PWA) Support</span></span>
<span class="line"><span> ◉ Router</span></span>
<span class="line"><span> ◉ Vuex</span></span>
<span class="line"><span>❯◉ CSS Pre-processors</span></span>
<span class="line"><span> ◉ Linter / Formatter</span></span>
<span class="line"><span> ◯ Unit Testing</span></span>
<span class="line"><span> ◯ E2E Testing</span></span></code></pre></div><p>我们这里一次性把<code>Babel</code>、<code>Vuex</code>、<code>CSS Pre-processors</code>、<code>Linter/Formater</code>都选上，其中<code>Babel</code>是用来做编译转化 JS 代码的，例如：把 ES6 的一些新特性，转成浏览器兼容的 ES5 代码，<code>CSS Pre-processors</code>这里可以选择<code>less</code>或者<code>sass</code>来辅助开发，如果这两个不清楚是啥，需要先了解，也可以先跳过，你只需要掌握极少数的规则，例如，嵌套写 css 即可，<code>Linter / Formatter</code> 这个是代码检查和格式化工具，这些选项到后面都会具体的来选择，选择好以后，按回车确认</p><p>第 4 步，选择 Vue 的版本，我们这里选择 2.x 版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Vue CLI v5.0.8</span></span>
<span class="line"><span>? Please pick a preset: Manually select features</span></span>
<span class="line"><span>? Check the features needed for your project: Babel, Router, Vuex, CSS</span></span>
<span class="line"><span>Pre-processors, Linter</span></span>
<span class="line"><span>? Choose a version of Vue.js that you want to start the project with</span></span>
<span class="line"><span>  3.x</span></span>
<span class="line"><span>❯ 2.x</span></span></code></pre></div><p>第 5 步，选择路由模式，可以是 hash，可以是 history</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>➜  debug vue create vue2-template</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue CLI v5.0.8</span></span>
<span class="line"><span>? Please pick a preset: Manually select features</span></span>
<span class="line"><span>? Check the features needed for your project: Babel, Router, Vuex, CSS</span></span>
<span class="line"><span>Pre-processors, Linter</span></span>
<span class="line"><span>? Choose a version of Vue.js that you want to start the project with 2.x</span></span>
<span class="line"><span>? Use history mode for router? (Requires proper server setup for index fallback</span></span>
<span class="line"><span>in production) (Y/n)Y</span></span></code></pre></div><p>我们选择 Y，使用 history 模式</p><p>第 6 步，选择 CSS 预处理器，也就是前面我们说的 less 或者 sass，我们这里选择 less</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported</span></span>
<span class="line"><span>by default):</span></span>
<span class="line"><span>  Sass/SCSS (with dart-sass)</span></span>
<span class="line"><span>❯ Less</span></span>
<span class="line"><span>  Stylus</span></span></code></pre></div><p>第 7 步，选择格式化工具，我们这里选择 ESLint + Prettier</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported</span></span>
<span class="line"><span>by default): Less</span></span>
<span class="line"><span>? Pick a linter / formatter config:</span></span>
<span class="line"><span>  ESLint with error prevention only</span></span>
<span class="line"><span>  ESLint + Airbnb config</span></span>
<span class="line"><span>  ESLint + Standard config</span></span>
<span class="line"><span>❯ ESLint + Prettier</span></span></code></pre></div><p>格式化工具都是大同小异的，遵循的规范不一样而已，你也可以选择其他的，但是为了和我们课程同步，建议你选择和我一样的规范</p><p>第 8 步，选择代码检查的时机，我们选择保存就代码检查</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? Pick additional lint features: (Press &lt;space&gt; to select, &lt;a&gt; to toggle all,</span></span>
<span class="line"><span>&lt;i&gt; to invert selection, and &lt;enter&gt; to proceed)</span></span>
<span class="line"><span>❯◉ Lint on save</span></span>
<span class="line"><span> ◯ Lint and fix on commit</span></span></code></pre></div><p>第 9 步，选择配置文件保存位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? Pick additional lint features: Lint on save</span></span>
<span class="line"><span>? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)</span></span>
<span class="line"><span>❯ In dedicated config files</span></span>
<span class="line"><span>  In package.json</span></span></code></pre></div><p>这一步我们选择把配置放到各自的配置文件中，而不是放到 package.json 中</p><p>第 10 步，问你是否把上面的选择保存起来，下次创建项目的时候就直接使用上面选择的配置，我们选择 Yes,然后自己定义一个配置名称即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated</span></span>
<span class="line"><span>config files</span></span>
<span class="line"><span>? Save this as a preset for future projects? (y/N)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? Save this as a preset for future projects? Yes</span></span>
<span class="line"><span>? Save preset as: vue2-template</span></span></code></pre></div><p>第 11 步，启动运行项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd vue2-template</span></span>
<span class="line"><span>npm run serve</span></span></code></pre></div><p>访问 <code>http://localhost:8080/</code> 即可</p>`,34),l=[t];function i(c,o,r,d,u,h){return e(),a("div",null,l)}const b=s(p,[["render",i]]);export{v as __pageData,b as default};
