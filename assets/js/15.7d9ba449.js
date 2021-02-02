(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{502:function(s,t,a){s.exports=a.p+"assets/img/timeline.1135e721.png"},503:function(s,t,a){s.exports=a.p+"assets/img/blog_preview.e4618d74.png"},527:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("很早之前使用hexo搭建的个人博客由于年久失修逐渐被遗忘，为了激励自己多积累多动笔多思考，所以使用vuepress重新搭建个人博客。相比于hexo，vuepress定制起来也更加灵活，对于熟悉vue的前端开发者来说，完全可以编写单页组件并且运用到博客的每个角落，当然博客最终要的还是坚持思考和保持文章积累，个性化的东西说到底只是服务博客本身或者激励自己的一种手段。")]),s._v(" "),e("h2",{attrs:{id:"vuepress基础使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress基础使用"}},[s._v("#")]),s._v(" vuepress基础使用")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),e("OutboundLink")],1),s._v("是基于vue的静态网站打包工具，其中最核心的部分就是.vuepress中的config.js，这里面包含了对网站整体的配置，包括顶部的navbar分类，侧边的sidebar文档列表，打包路径等基础配置,全部配置可查看VuePress官网的"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置页"),e("OutboundLink")],1),s._v("。平台搭建过程中的常见问题与解决方法可参考文章"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/UjIrFhfiG5saJYKT53ORBA",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepresss建站过程中遇到的一些问题"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"安装vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装vuepress"}},[s._v("#")]),s._v(" 安装vuepress")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n")])])]),e("h3",{attrs:{id:"本地运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地运行"}},[s._v("#")]),s._v(" 本地运行")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    npm run dev\n")])])]),e("h3",{attrs:{id:"项目打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目打包"}},[s._v("#")]),s._v(" 项目打包")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    npm run build\n")])])]),e("h2",{attrs:{id:"博客目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客目录"}},[s._v("#")]),s._v(" 博客目录")]),s._v(" "),e("p",[s._v("在空的文档目录下创建一个 .vuepress 目录，所有 VuePress 相关的文件都将会被放在这里。博客根目录下的内容分为.vuepress和文档目录两部分。")]),s._v(" "),e("p",[s._v("1 .vuepress: 用于存储静态资源、核心配置文件、自定义组件、自定义样式等")]),s._v(" "),e("p",[s._v("2 剩余部分为文档目录, 可以通过不同的文件夹分类存储不同类的文档，然后在.vuepress/config.js中可根据文档目录及内容配置网站顶部的nav和左边的sideBar组件")]),s._v(" "),e("p",[s._v("官方推荐的目录结构如下：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("├── docs\n│   ├── .vuepress\n│   │   ├── `components`\n│   │   ├── `theme`\n│   │   │   └── Layout.vue\n│   │   ├── `public`\n│   │   ├── `styles`\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── `templates`\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── `config.js`\n│   │   └── `enhanceApp.js`\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),e("hr"),s._v(" "),e("h2",{attrs:{id:"博客主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客主题"}},[s._v("#")]),s._v(" 博客主题")]),s._v(" "),e("p",[s._v("vuepress博客采用的默认主题vuepress-theme-default, 但是这种风格比较适合文档系统，vue官方文档的主体vuepress-theme-vue就是基于该主题进行的扩展。目前我采用了vuepress-theme-reco作为博客的主体，个人感觉风格还是不错的，比较简约而且拥有分类、标签、时间线等配置")]),s._v(" "),e("h3",{attrs:{id:"博客配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客配置"}},[s._v("#")]),s._v(" 博客配置")]),s._v(" "),e("ol",[e("li",[s._v("安装vuepress-theme-reco")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-theme-reco "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress-theme-reco")]),s._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v(".vuepress/config.js中设置主题为vuepress-theme-reco")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h3",{attrs:{id:"分类和标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类和标签"}},[s._v("#")]),s._v(" 分类和标签")]),s._v(" "),e("p",[s._v("这两个栏目在hexo的时候也有，所以看到reco主题内置categroy和tag时还是比较亲切的")]),s._v(" "),e("ol",[e("li",[s._v("新增markdown时顶部增加Front Matter配置")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("---\ncategories:\n    - CSS\ntags: \n    - CSS动画\n---\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("修改.vuepress/config.js中的主题配置文件")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'blog'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    blogConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        category"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            location"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     \n            text"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分类'")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        tag"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            location"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            text"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'标签'")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h3",{attrs:{id:"时间轴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间轴"}},[s._v("#")]),s._v(" 时间轴")]),s._v(" "),e("ol",[e("li",[s._v(".vuepress同级目录下增加timeline文件夹，并在其中新增README.md")]),s._v(" "),e("li",[s._v("在README.md增加顶部FrontMatter以及标题, 该md文件会编译时间轴展示页")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("---\nisTimeLine: true\nsidebar: false\nisComment: false\n---\n\n## Time Line\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("修改.vuepress/config.js中的主题配置文件")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    nav"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TimeLine'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/timeline/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" icon"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco-date'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("新增markdown时顶部增加Front Matter配置")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("---\ndate: 2019-11-10\n---\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("预览\n"),e("img",{attrs:{src:a(502),alt:""}})])]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"博客自定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客自定义"}},[s._v("#")]),s._v(" 博客自定义")]),s._v(" "),e("p",[s._v("本文目前讨论的自定义是基于已有主题的修改,如果想从零开始建立自己的主题可参考vuepress官网的"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("开发主题"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"方法一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),e("p",[s._v("目前的自定义是基于已有主题的调整，主要原理是.vuepress/theme目录下的自定义组件会覆盖默认主题中对应的组件。此处以修改vuepress-theme-default默认主题Navbar顶部hover样式为例，默认主题中选中顶部栏目时下划线高亮，但是文本不高亮；个人博客调整navbar选中时文本高亮")]),s._v(" "),e("ol",[e("li",[s._v("在.vuepress/theme目录下增加index.js入口文件，指定继承的主题。")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    extend"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/theme-reco'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("拷贝vuepress源码默认主题中components目录下的NavLinks.vue至.vuepress/theme/components下")]),s._v(" "),e("li",[s._v("修改拷贝后的文件NavLinks.vue中增加样式如下")])]),s._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[s._v("&.router-link-active\n     color "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("lighten")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$accentColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 8%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("保存后执行npm run dev查看效果")])]),s._v(" "),e("h3",{attrs:{id:"方法二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),e("p",[s._v(".vuepress/styles目录中palette.styl可更改全局样式；index.styl可自定义某一个class, class名可以在浏览器页面审查元素时查看其对应的类名")]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"博客部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客部署"}},[s._v("#")]),s._v(" 博客部署")]),s._v(" "),e("h3",{attrs:{id:"部署到githubpage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署到githubpage"}},[s._v("#")]),s._v(" 部署到GithubPage")]),s._v(" "),e("ol",[e("li",[s._v(".vuepress/config.js中设置打包路径, 默认为.vuepress/dist")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    dest"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("执行如下命令")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" src/dist\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到 https://<USERNAME>.github.io")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f https://"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io master\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("预览")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(503),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"文档与项目分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档与项目分离"}},[s._v("#")]),s._v(" 文档与项目分离")]),s._v(" "),e("p",[s._v("最后，有些情况下我们可能会考虑文档与项目分离的问题，即vuepress核心配置与自定义组件保持不变，文档目录以及相关配置单独放到一个仓库中。这时可以考虑使用git subModule来管理文档子仓库, git submodule详细使用可参考"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/87053283",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),e("OutboundLink")],1)]),s._v(" "),e("ol",[e("li",[s._v("引入子模块，根目录下执行如下命令")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("   "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule_url"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("p",[s._v("其中submodule_url是分离后的文档仓库my-blog-docs的地址")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("每次git clone主仓库后需初始化文档子仓库")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule init\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("更新文档子仓库")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    cd src/my-blog-docs\n    git pull origin master\n    git add .\n    git commit -m [M]子模块文档更新\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);