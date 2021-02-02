(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{504:function(t,a,s){t.exports=s.p+"assets/img/transition.5990c1df.png"},505:function(t,a,s){t.exports=s.p+"assets/img/hover-transition-demo.432646c7.png"},506:function(t,a,s){t.exports=s.p+"assets/img/load-animation-demo.8198ffe0.gif"},507:function(t,a,s){t.exports=s.p+"assets/img/sprite-long-image.c75f3688.png"},508:function(t,a,s){t.exports=s.p+"assets/img/moving-character.c2e29ac1.gif"},528:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" "),n("strong",[t._v("前言")])]),t._v(" "),n("p",[t._v("前端动画的出发点通常都是增强前端整体内容的表现形式、丰富交互手段，以改善用户体验，目前前端动画实现方式主要有下面三种方式")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("HTML5中调用绘图api：Canvas")])]),t._v(" "),n("li",[n("p",[t._v("JavaScript中使用定时器：setTimeout(), setInterval()、requestAnimationFrame()")])]),t._v(" "),n("li",[n("p",[t._v("CSS3中transition, animation属性")])])]),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"基础知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" "),n("strong",[t._v("基础知识")])]),t._v(" "),n("p",[t._v("CSS3中动画也叫做关键帧动画可以分为"),n("font",{attrs:{color:"#3a90f6"}},[n("em",[n("strong",[t._v("transition")])])]),t._v("(过渡动画)和"),n("font",{attrs:{color:"#3a90f6"}},[n("em",[n("strong",[t._v("animation")])])]),t._v("(动画)两种，两者实现方式是相似的，都是随着时间变化改变元素的属性值，但是适用的场景是不同的。主要区别如下：")],1),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("触发方式:")]),t._v(" transition是基于事件驱动的，必须触发事件才会执行，而animation则不需要显示的触发事件")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("关键帧:")]),t._v(" transition只有开始&结束两个关键帧，不需要过多关注中间过程；而animation则可以通过百分比自定义更多的中间状态")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("循环:")]),t._v(" transition通常执行一次，多次循环需要指定transitionEnd处理事件，较繁琐；animation可以直接指定循环次数")])])]),t._v(" "),n("br"),t._v(" "),n("h3",{attrs:{id:"transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" "),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("transition")])])],1),t._v(" "),n("p",[t._v("transition属性是CSS3中的过渡动画，它是一个简写属性，用于设置四个过渡属性")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    transition: property duration timing-function delay;\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("value")]),t._v(" "),n("th",[t._v("description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("transition-property")]),t._v(" "),n("td",[t._v("规定设置过渡效果的 CSS 属性的名称。")])]),t._v(" "),n("tr",[n("td",[t._v("transition-duration")]),t._v(" "),n("td",[t._v("规定完成过渡效果需要多少秒或毫秒。")])]),t._v(" "),n("tr",[n("td",[t._v("transition-timing-function")]),t._v(" "),n("td",[t._v("规定速度效果的速度曲线。")])]),t._v(" "),n("tr",[n("td",[t._v("transition-delay")]),t._v(" "),n("td",[t._v("定义过渡效果何时开始。")])])])]),t._v(" "),n("p",[n("em",[t._v("默认值： transition: all 0 ease 0")])]),t._v(" "),n("blockquote",[n("h3",{attrs:{id:"time-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#time-function"}},[t._v("#")]),t._v(" "),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("time-function")])])],1),t._v(" "),n("blockquote",[n("p",[t._v("transition和animation属性中都存在time-function属性，time-function描述了在一个过渡或动画中一维数值的改变速度。这实质上让你可以自己定义一个加速度曲线，以便动画的速度在动画的过程中可以进行改变。这些函数通常被称为缓动函数(easing functions),主要有"),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("cubic-bezier()")])]),t._v("立方贝塞尔曲线的子集和"),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("step()")])]),t._v("阶梯函数两种。")],1),t._v(" "),n("p",[n("strong",[t._v("常见的动画速度曲线")])]),t._v(" "),n("p",[t._v("贝塞尔曲线函数")]),t._v(" "),n("ul",[n("li",[t._v("linear: 匀速,规定以相同速度开始至结束的过渡效果, "),n("code",[t._v("cubic-bezier(0,0,1,1)")])]),t._v(" "),n("li",[t._v("ease: 规定慢速开始，然后变快，然后慢速结束的过渡效果, "),n("code",[t._v("cubic-bezier(0.25,0.1,0.25,1)")])]),t._v(" "),n("li",[t._v("ease-in: 先慢后快,规定以慢速开始的过渡效果，"),n("code",[t._v("cubic-bezier(0.42,0,1,1)")])]),t._v(" "),n("li",[t._v("ease-in-out：规定以慢速开始和结束的过渡效果，"),n("code",[t._v("cubic-bezier(0.42, 0.0, 0.58, 1.0)")])]),t._v(" "),n("li",[t._v("ease-out：规定以慢速结束的过渡效果 "),n("code",[t._v("cubic-bezier(0.0, 0.0, 0.58, 1.0)")])])]),t._v(" "),n("p",[t._v("阶梯函数")]),t._v(" "),n("p",[t._v("steps(number_of_steps, direction)")]),t._v(" "),n("ul",[n("li",[t._v("step(n, start): 动画开始时第一步正好开始")]),t._v(" "),n("li",[t._v("step(n, end): 动画结束时最后一步正好结束\n"),n("br")])])])]),t._v(" "),n("h3",{attrs:{id:"animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" "),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("animation")])])],1),t._v(" "),n("p",[t._v("animation属性是CSS3中的动画，它是一个简写属性，用于设置六个动画属性")]),t._v(" "),n("blockquote",[n("p",[t._v("Internet Explorer 9 以及更早的版本不支持 animation 属性")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    animation: name duration timing-function delay iteration-count direction;\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("value")]),t._v(" "),n("th",[t._v("description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("animation-name")]),t._v(" "),n("td",[t._v("规定需要绑定到选择器的 keyframe 名称")])]),t._v(" "),n("tr",[n("td",[t._v("animation-duration")]),t._v(" "),n("td",[t._v("规定完成动画所花费的时间，以秒或毫秒计")])]),t._v(" "),n("tr",[n("td",[t._v("animation-timing-function")]),t._v(" "),n("td",[t._v("规定动画的速度曲线")])]),t._v(" "),n("tr",[n("td",[t._v("animation-delay")]),t._v(" "),n("td",[t._v("规定在动画开始之前的延迟")])]),t._v(" "),n("tr",[n("td",[t._v("animation-iteration-count")]),t._v(" "),n("td",[t._v("规定动画应该播放的次数(n or infinite)")])]),t._v(" "),n("tr",[n("td",[t._v("animation-direction")]),t._v(" "),n("td",[t._v("规定是否应该轮流反向播放动画(normal or alternate)")])])])]),t._v(" "),n("p",[n("em",[t._v("适用元素： 所有基础dom元素 & 伪元素（::before、::after）")])]),t._v(" "),n("p",[n("strong",[t._v("示例")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mymove 5s ease-in-out infinite alternate\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("br"),t._v(" "),n("h3",{attrs:{id:"keyframe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyframe"}},[t._v("#")]),t._v(" "),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("keyframe")])])],1),t._v(" "),n("p",[t._v("创建动画的原理是，将某一种 CSS 样式随着时间推进逐渐变为另一套样式。@keyframes 通过指定动画中特定时间点必须展现的关键帧样式来控制CSS动画的中间环节。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    @keyframes animationname {keyframes-selector {css-styles;}}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("value")]),t._v(" "),n("th",[t._v("description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("animationname")]),t._v(" "),n("td",[t._v("定义动画的名称。")])]),t._v(" "),n("tr",[n("td",[t._v("keyframes-selector")]),t._v(" "),n("td",[t._v("动画时长的百分比。合法的值：0-100% ,from, to")])]),t._v(" "),n("tr",[n("td",[t._v("css-styles")]),t._v(" "),n("td",[t._v("一个或多个css样式")])])])]),t._v(" "),n("p",[n("strong",[t._v("示例")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" mymove")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("br"),t._v(" "),n("h3",{attrs:{id:"vue中的过渡与动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue中的过渡与动画"}},[t._v("#")]),t._v(" "),n("font",{attrs:{color:"#3a90f6"}},[n("strong",[t._v("vue中的过渡与动画")])])],1),t._v(" "),n("h4",{attrs:{id:"_1-transition组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-transition组件"}},[t._v("#")]),t._v(" 1. transition组件")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show = !show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Toggle"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("transition组件包裹的元素在插入或者删除时可以进行一些过渡处理，其工作方式如下：")]),t._v(" "),n("p",[t._v("(1) 自动检测目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。")]),t._v(" "),n("p",[t._v("(2) 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。")]),t._v(" "),n("p",[t._v("(3) 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 会在下一帧中立即执行")]),t._v(" "),n("p",[t._v("过渡的类名（6个）：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(504),alt:"过渡类名"}})]),t._v(" "),n("ul",[n("li",[t._v("v-enter: 定义进入过渡的开始状态")]),t._v(" "),n("li",[t._v("v-enter-active：定义进入过渡生效时的状态")]),t._v(" "),n("li",[t._v("v-enter-to: 定义进入过渡的结束状态(>v.2.1.8)")]),t._v(" "),n("li",[t._v("v-leave: 定义离开过渡的开始状态")]),t._v(" "),n("li",[t._v("v-leave-active：定义离开过渡生效时的状态")]),t._v(" "),n("li",[t._v("v-leave-to: 定义离开过渡的结束状态(>v.2.1.8)")])]),t._v(" "),n("h4",{attrs:{id:"_2-css过渡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-css过渡"}},[t._v("#")]),t._v(" 2. css过渡")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter-active")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .3s ease"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave-active")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .8s "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter, .v-leave-to")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"_3-css动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-css动画"}},[t._v("#")]),t._v(" 3. css动画")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter-active")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bounce-in .5s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave-active")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bounce-in .5s reverse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" bounce-in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"常见应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见应用"}},[t._v("#")]),t._v(" "),n("strong",[t._v("常见应用")])]),t._v(" "),n("h3",{attrs:{id:"【hover动画】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【hover动画】"}},[t._v("#")]),t._v(" 【hover动画】")]),t._v(" "),n("p",[t._v("hover动画通常是用css transition实现，因为它需要触发事件，并且没有复杂的中间状态。")]),t._v(" "),n("p",[t._v("实现原理： transition")]),t._v(" "),n("p",[n("img",{attrs:{src:s(505),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"【加载动画】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【加载动画】"}},[t._v("#")]),t._v(" 【加载动画】")]),t._v(" "),n("p",[t._v("实现原理：transform、 transition（ transform主要是一些图形变换，如旋转、拉伸、缩放等）")]),t._v(" "),n("p",[n("img",{attrs:{src:s(506),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"【人物动画】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【人物动画】"}},[t._v("#")]),t._v(" 【人物动画】")]),t._v(" "),n("p",[t._v("实现原理：css sprite（雪碧图）、background-position、animation、steps()")]),t._v(" "),n("p",[n("img",{attrs:{src:s(507),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:s(508),alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);