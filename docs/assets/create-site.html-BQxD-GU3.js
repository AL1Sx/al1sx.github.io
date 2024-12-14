import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,b as c,d as r,e as o,f as l,g as s,r as h,o as u}from"./app-BLv9iYKs.js";const b={};function v(m,i){const a=h("Tabs");return u(),p("div",null,[i[14]||(i[14]=e("p",null,"记述了使用VuePress创建该静态博客的过程。",-1)),c(" more "),i[15]||(i[15]=r('<h1 id="使用生成器创建静态网站指北" tabindex="-1"><a class="header-anchor" href="#使用生成器创建静态网站指北"><span>使用生成器创建静态网站指北</span></a></h1><h2 id="使用工具" tabindex="-1"><a class="header-anchor" href="#使用工具"><span>使用工具</span></a></h2><ul><li><p>Node.js: 是一个开源、跨平台的JavaScript运行环境，它允许开发者在服务器端运行JavaScript代码。接下来需要它进行支持。</p></li><li><p>VuePress: 这是一个目前接触到开箱即用的静态网站生成器，使用MarkDown为中心的项目结构。虽然说使用Vue写的，但实际上我不懂Vue也能用，所以包开箱即用的（</p></li><li><p>VuePress-Theme-Hope: 上面只是架构，这个是主题。由于能直接通过这个安装所需的运行环境，而且这个主题的界面也比默认更适合。所以直接使用来进行接下来的操作。</p></li><li><p>MarkDown: 一种语法，强烈建议进行了解一下再操作。</p></li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress文档</a><br><a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">VuePress-Theme-Hope文档</a><br><a href="https://commonmark.org/help/" target="_blank" rel="noopener noreferrer">MarkDown语法</a></p></div><h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备"><span>前期准备</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本文基于Windows系统，x86_64架构处理器进行部署，在其它系统以及其他架构处理器可能会有不一样的地方。</p></div><ol><li>安装Node.js<br> 这是这次任务的基础。好比是造房子，我们先从地基开始喵。<br> 前往<a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">官方网站</a>进行安装它。</li></ol><blockquote><p>网站是中文的，找到对应系统及其架构安装即可。</p></blockquote><ol start="2"><li>查看安装结果<br> 如果一切安装妥当后，打开PowerShell输入<code>npm -v</code>，应当会显示npm的版本号。</li></ol>',9)),o(a,{id:"64",data:[{id:"PowerShell"},{id:"PowerShell 回复"}]},{title0:l(({value:n,isActive:t})=>i[0]||(i[0]=[s("PowerShell")])),title1:l(({value:n,isActive:t})=>i[1]||(i[1]=[s("PowerShell 回复")])),tab0:l(({value:n,isActive:t})=>i[2]||(i[2]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"npm -v")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab1:l(({value:n,isActive:t})=>i[3]||(i[3]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"10.11.45(版本号数字)")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),i[16]||(i[16]=r('<ol start="3"><li>选择你要部署的地方<br> 正如其意，你要给你的房子找块地。找个电脑硬盘里熟悉的地方新建个文件夹存放工程。</li></ol><blockquote><p>想不到文件夹名？vuepress-hope-xxxx是个不错的主意。</p></blockquote><h2 id="开始安装" tabindex="-1"><a class="header-anchor" href="#开始安装"><span>开始安装</span></a></h2><ol><li>打开目录<br> 打开文件资源管理器，进入你创建的目录上一级，Shift+右键后点击<code>从此处打开PowerShell窗口</code>，使用命令行进行安装。</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>什么是上一级目录？比如说你的之前创建的目录是<code>X:/Project/vuepress-hope-xxx</code>，那么你应该在<code>X:/Project</code>来进行上述操作。<br><code>X:/Project/vuepress-hope-xxx</code>将在下文称为工程目录。</p></div><ol start="2"><li>进行安装<br> 在PowerShell里输入<code>npm create vuepress-theme-hope [目录]</code>。</li></ol>',6)),o(a,{id:"106",data:[{id:"PowerShell"}]},{title0:l(({value:n,isActive:t})=>i[4]||(i[4]=[s("PowerShell")])),tab0:l(({value:n,isActive:t})=>i[5]||(i[5]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"npm create vuepress-theme-hope vuepress-hope-xxx")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),i[17]||(i[17]=e("p",null,[s("等加载完后，根据提示进行输入与安装即可。"),e("br"),s(" 稍等片刻，应该就会安装成功。")],-1)),i[18]||(i[18]=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"如果显示网络不佳等提示，可以尝试代理网络。")],-1)),i[19]||(i[19]=e("h2",{id:"运行本地服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行本地服务"},[e("span",null,"运行本地服务")])],-1)),i[20]||(i[20]=e("p",null,[s("在工程目录下使用PowerShell命令行输入"),e("code",null,"npm run docs:dev"),s("并运行，这将开启一个本地服务器，你所做的修改都将会及时呈现。")],-1)),o(a,{id:"125",data:[{id:"PowerShell"},{id:"PowerShell 回复"}]},{title0:l(({value:n,isActive:t})=>i[6]||(i[6]=[s("PowerShell")])),title1:l(({value:n,isActive:t})=>i[7]||(i[7]=[s("PowerShell 回复")])),tab0:l(({value:n,isActive:t})=>i[8]||(i[8]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"npm run docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab1:l(({value:n,isActive:t})=>i[9]||(i[9]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"> xxxxxxxxx@xxx.0.0 docs:dev")]),s(`
`),e("span",{class:"line"},[e("span",null,"> vuepress-vite dev src")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"√ Initializing and preparing data - done in 7.35s")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"  vite v5.4.11 dev server running at:")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ➜  Local:   http://localhost:8080/")]),s(`
`),e("span",{class:"line"},[e("span",null,"  ➜  Network: http://114.51.41.91:8080/")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),i[21]||(i[21]=r('<div class="hint-container note"><p class="hint-container-title">注</p><p>安装完后直接运行了？对这确实没错，不过下次就要用上述操作进行运行哦。</p></div><h2 id="修改文件" tabindex="-1"><a class="header-anchor" href="#修改文件"><span>修改文件</span></a></h2><p>这部分需要稍微自己摸索下，有点表达不清楚www。不过看<a href="https://theme-hope.vuejs.press/zh/guide/" target="_blank" rel="noopener noreferrer">官方文档</a>能很快理解它的。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>简单来说，工程目录下，<code>src</code>是VuePress目录。在这里面，<code>README.md</code>类似于普通网站的<code>index.html</code>，<code>posts</code>目录下是你所写的博文，文件格式为<code>.md</code>。当然你也可以新建文件夹进行整理。<br><code>.vuepress</code>目录下，<code>config.ts</code>等这些是主题设置文件，<code>public</code>目录下是存放网页图片的地方，网站图标也是在这里。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>修改<code>config.ts</code>等内容使其符合自己审美的话，请参考<a href="https://theme-hope.vuejs.press/zh/guide/" target="_blank" rel="noopener noreferrer">官方文档</a>进行修改哦。</p></div><h2 id="打包并部署网页" tabindex="-1"><a class="header-anchor" href="#打包并部署网页"><span>打包并部署网页</span></a></h2><ol><li>进行打包<br> 打开PowerShell，输入<code>npm run docs:build</code>，就能进行打包操作。<br> 打包完的所有网页文件在<code>../src/.vuepress/dist</code>文件夹下。</li></ol>',7)),o(a,{id:"164",data:[{id:"PowerShell"},{id:"PowerShell 回复"}]},{title0:l(({value:n,isActive:t})=>i[10]||(i[10]=[s("PowerShell")])),title1:l(({value:n,isActive:t})=>i[11]||(i[11]=[s("PowerShell 回复")])),tab0:l(({value:n,isActive:t})=>i[12]||(i[12]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"npm run docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab1:l(({value:n,isActive:t})=>i[13]||(i[13]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"> xxxxxxxxx@xxx.0.0 docs:build")]),s(`
`),e("span",{class:"line"},[e("span",null,"> vuepress-vite build src")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"√ Initializing and preparing data - done in 5.33s")]),s(`
`),e("span",{class:"line"},[e("span",null,"√ Compiling with vite - done in 4.54s")]),s(`
`),e("span",{class:"line"},[e("span",null,"√ Rendering 19 pages - done in 373ms")]),s(`
`),e("span",{class:"line"},[e("span",null,"@vuepress/plugin-seo:  √ Generating robots.txt")]),s(`
`),e("span",{class:"line"},[e("span",null,"@vuepress/plugin-sitemap:  √ Generating sitemap to sitemap.xml")]),s(`
`),e("span",{class:"line"},[e("span",null,"@vuepress/plugin-sitemap:  √ Appended sitemap path to robots.txt")]),s(`
`),e("span",{class:"line"},[e("span",null,"@vuepress/plugin-redirect:  √ Generating redirect files")]),s(`
`),e("span",{class:"line"},[e("span",null,"success VuePress build completed in 11.54s!")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),i[22]||(i[22]=r('<ol start="2"><li>GitHub新建Repo</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果没有GitHub账户请先新建GitHub账户（</p></div><p>打开GitHub，新建<code>Repository</code>，<code>Reoisitory name</code>里填写<code>你的用户名.github.io</code>，设置为公开，然后点击<code>Create repository</code>进行创建。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请务必按照<code>你的用户名.github.io</code>格式。</p></div><ol start="3"><li>修改属性<br> 进入刚刚创建的Repo，进入设置，点击左侧<code>Pages</code>选项卡，<code>Source</code>选择<code>Deploy from a branch</code>,<code>Branch</code>选择<code>main/docs</code>并保存。</li></ol><div class="hint-container note"><p class="hint-container-title">注</p><p>由于这里最早我就已经创建过了www，只有个模糊大概的记忆www</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你有域名也可以进行绑定哦。<br> 可以将你的域名托管到<a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>，然后DNS解析到<code>你的用户名.github.io</code>，GitHub Pages的<code>Custom domain</code>填写你的域名。</p></div><ol start="4"><li>将你的<code>dist</code>目录下生成的网页文件上传到你的Repo中的<code>docs</code>目录下。<br> 不出意外的话就能看到GitHub Pages正在转圈，过个1小时就能查看了。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你也可以通过Git以及<a href="https://github.com/apps/desktop" target="_blank" rel="noopener noreferrer">GitHub Desktop</a>进行更方便更舒服的上传。</p></div><h2 id="完成" tabindex="-1"><a class="header-anchor" href="#完成"><span>完成</span></a></h2><p>轰擦擦，你已经完成了！（</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>看到这，是不是发现全文没有图片？哈哈还真是。</p></div>',12))])}const x=d(b,[["render",v],["__file","create-site.html.vue"]]),f=JSON.parse('{"path":"/posts/create-site.html","title":"使用生成器创建静态网站指北","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-12-12T00:00:00.000Z","category":["网页","编辑","代码"],"tag":["开发"],"description":"记述了使用VuePress创建该静态博客的过程。","head":[["meta",{"property":"og:url","content":"https://al1sx.github.io/posts/create-site.html"}],["meta",{"property":"og:site_name","content":"卡戎: 喵~~~"}],["meta",{"property":"og:title","content":"使用生成器创建静态网站指北"}],["meta",{"property":"og:description","content":"记述了使用VuePress创建该静态博客的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"开发"}],["meta",{"property":"article:published_time","content":"2024-12-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用生成器创建静态网站指北\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lagrange\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"使用工具","slug":"使用工具","link":"#使用工具","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[]},{"level":2,"title":"开始安装","slug":"开始安装","link":"#开始安装","children":[]},{"level":2,"title":"运行本地服务","slug":"运行本地服务","link":"#运行本地服务","children":[]},{"level":2,"title":"修改文件","slug":"修改文件","link":"#修改文件","children":[]},{"level":2,"title":"打包并部署网页","slug":"打包并部署网页","link":"#打包并部署网页","children":[]},{"level":2,"title":"完成","slug":"完成","link":"#完成","children":[]}],"git":{},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"posts/create-site.md","localizedDate":"2024年12月12日","excerpt":"<p>记述了使用VuePress创建该静态博客的过程。</p>\\n","autoDesc":true}');export{x as comp,f as data};
