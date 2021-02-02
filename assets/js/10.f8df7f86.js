(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{509:function(t,a,e){t.exports=e.p+"assets/img/docker_today.bf1149c5.png"},510:function(t,a,e){t.exports=e.p+"assets/img/dockerhub.c84ed4d7.png"},511:function(t,a,e){t.exports=e.p+"assets/img/mongodb_download.d74b12f8.png"},512:function(t,a,e){t.exports=e.p+"assets/img/countly_dashboard.e91bace5.png"},529:function(t,a,e){"use strict";e.r(a);var r=e(6),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_1-前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),r("p",[t._v("最近刚接触和熟悉"),r("strong",[t._v("countly")]),t._v("，对countly中的crashes插件根据需求进行了部分改动和完善，这篇文章主要记录一下windows10中使用docker容器安装和部署countly-server的整个流程，也算是自己的一些简单的总结和思考")]),t._v(" "),r("h2",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),r("p",[t._v("docker是一个开源的应用容器引擎，容器完全使用沙箱机制，相互之间不会有任何接口影响，可以帮助开发者安全地创建、分享和运行现代化的应用程序。")]),t._v(" "),r("h2",{attrs:{id:"countly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#countly"}},[t._v("#")]),t._v(" countly")]),t._v(" "),r("p",[t._v("countly是开源的数据分析平台，可以一站式收集、展示和分析移动端、客户端等多种来源的数据，以并且它内置了许多插件，可以以此为基础进行个性化开发，也可以根据业务需要完全自定义新的插件")]),t._v(" "),r("h1",{attrs:{id:"_2-安装与配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装与配置"}},[t._v("#")]),t._v(" 2. 安装与配置")]),t._v(" "),r("h2",{attrs:{id:"dokcer安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dokcer安装"}},[t._v("#")]),t._v(" dokcer安装")]),t._v(" "),r("p",[t._v("doker现在支持linux、windows、DataCenter、Cloud等诸多平台，在windows环境下安装和其他软件的安装并无二致，只要按照提示一步步完成即可，这是"),r("a",{attrs:{href:"https://pan.baidu.com/s/1nkEjaRqP04hHL-8d-nlWPA",target:"_blank",rel:"noopener noreferrer"}},[t._v("网盘下载地址&提取码:eumv"),r("OutboundLink")],1),t._v("，最新版请移步官网")]),t._v(" "),r("p",[r("img",{attrs:{src:e(509),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"镜像安装与运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像安装与运行"}},[t._v("#")]),t._v(" 镜像安装与运行")]),t._v(" "),r("p",[t._v("counltly-server运行环境需要在linux下，因此需要安装linux镜像，可以事先在"),r("a",{attrs:{href:"https://hub.docker.com/search/?q=ubuntu&type=image",target:"_blank",rel:"noopener noreferrer"}},[t._v("dockerhub"),r("OutboundLink")],1),t._v("官网上搜索")]),t._v(" "),r("p",[r("img",{attrs:{src:e(510),alt:""}})]),t._v(" "),r("p",[t._v("本文选择了docker hub中的ubutun镜像,后面不指定版本号默认下载最新版")]),t._v(" "),r("blockquote",[r("p",[t._v("进入docker的安装目录, 使用docker命令下载ubuntu")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    // download latest ubuntu\n    docker pull ubuntu\n")])])]),r("blockquote",[r("p",[t._v("docker运行ubuntu：-i: 以交互式方式运行，-t: 终端，-p:端口映射，-v: 文件目录映射（windows目录：ubuntu目录)")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    docker run -ti -p 6001:6001 -v /c/countly-server:/countly/countly-server ubuntu bash\n")])])]),r("h2",{attrs:{id:"ubuntun下countly-server配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntun下countly-server配置"}},[t._v("#")]),t._v(" ubuntun下countly-server配置")]),t._v(" "),r("h3",{attrs:{id:"mongodb安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongodb安装"}},[t._v("#")]),t._v(" mongodb安装")]),t._v(" "),r("ul",[r("li",[t._v("方法一（可能会落后官网的版本）")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    apt-get update\n    apt-get install mongo\n")])])]),r("ul",[r("li",[t._v("方法二（直接从官网下载解压）：")])]),t._v(" "),r("blockquote",[r("p",[t._v("进入到"),r("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoDB 下载页面"),r("OutboundLink")],1),t._v(",切换到【"),r("em",[t._v("MongoDB Community Sever")]),t._v("】选择版本、操作系统、安装包格式等，下方会出现下载地址")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(511),alt:""}})]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    # 更新\n    apt-get update \n    # 下载curl\n    apt-get install curl \n    # 下载mongodb官网对应linux版本的压缩包\n    get curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1804-4.2.1.tgz\n    # 解压mongo压缩包\n    tar -zxvf mongodb-linux-x86_64-ubuntu1804-4.2.1.tgz\n    # 移动解压文件到全局安装目录\n    mv mongodb-linux-x86_64-ubuntu1804-4.2.1.tgz  /usr/local/mongodb\n    # 设置path路径\n    export PATH=/usr/local/mongodb/bin:$PATH\n")])])]),r("p",[t._v("nodejs安装")]),t._v(" "),r("ul",[r("li",[t._v("方法一：")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    apt-get update\n    apt-get install nodejs\n")])])]),r("ul",[r("li",[t._v("方法二：\n从"),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs官网"),r("OutboundLink")],1),t._v("下载安装包，具体步骤和mongodb安装类似")])]),t._v(" "),r("h3",{attrs:{id:"端口配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#端口配置"}},[t._v("#")]),t._v(" 端口配置")]),t._v(" "),r("ul",[r("li",[t._v("mongodb："),r("em",[t._v("27017")]),t._v(" 。")]),t._v(" "),r("li",[t._v("dashboard: "),r("em",[t._v("6001")])])]),t._v(" "),r("h3",{attrs:{id:"启动counlty-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动counlty-server"}},[t._v("#")]),t._v(" 启动counlty-server")]),t._v(" "),r("p",[t._v("启动过程中涉及到数据库、接口服务、dashboard页面多个命令行会话，这里可考虑使用screen进行多窗口的分屏，这样可在多个会话之间自由切换")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    apt-get install screen\n")])])]),r("ol",[r("li",[t._v("start mongodb(启动mongodb):")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    # 新建mongodb\n    screen -S mongodb\n    # 启动mongodb\n    mongod --dbpath=/countly/mongodb/data --logpath=/countly/mongodb/log/mongo.log --logappend\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("start api(启动api)")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    # 新建api服务会话\n    screen -S api\n    # 进入到countly-server目录\n    cd countly/countly-server\n    # 启动countly的api接口服务\n    DEBUG=development supervisor node api/api.js\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("start dashboard(启动dashboard)")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    # 新建dashboard会话\n    screen -S dashboard\n    # 进入到countly-server目录\n    cd countly/countly-server\n    # 启动countly-server主项目\n    NODE_ENV=development supervisor node frontend/express/app.js\n")])])]),r("ol",{attrs:{start:"4"}},[r("li",[t._v("浏览器访问localhost:6001")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(512),alt:""}})]),t._v(" "),r("p",[t._v("本文只是做一个简单的记录方便后续回顾，刚开始些博客之类的文章，不足之处也欢迎大家指正")])])}),[],!1,null,null,null);a.default=n.exports}}]);