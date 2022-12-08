"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,c=d["".concat(u,".").concat(k)]||d[k]||m[k]||l;return r?n.createElement(c,i(i({ref:t},s),{},{components:r})):n.createElement(c,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},93781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},i="\u57fa\u672c\u6700\u4f73\u5b9e\u8df5",o={unversionedId:"bestPractice/15bestpractice",id:"version-5.0/bestPractice/15bestpractice",title:"\u57fa\u672c\u6700\u4f73\u5b9e\u8df5",description:"\u751f\u4ea7\u8005",source:"@site/versioned_docs/version-5.0/06-bestPractice/15bestpractice.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/15bestpractice",permalink:"/zh/docs/bestPractice/15bestpractice",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/15bestpractice.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Promethus Exporter",permalink:"/zh/docs/deploymentOperations/18Exporter"},next:{title:"Dledger",permalink:"/zh/docs/bestPractice/16dledger"}},u={},p=[{value:"\u751f\u4ea7\u8005",id:"\u751f\u4ea7\u8005",level:2},{value:"\u53d1\u9001\u6d88\u606f\u6ce8\u610f\u4e8b\u9879",id:"\u53d1\u9001\u6d88\u606f\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Tag\u7684\u4f7f\u7528",id:"tag\u7684\u4f7f\u7528",level:4},{value:"Keys\u7684\u4f7f\u7528",id:"keys\u7684\u4f7f\u7528",level:4},{value:"\u65e5\u5fd7\u7684\u6253\u5370",id:"\u65e5\u5fd7\u7684\u6253\u5370",level:4},{value:"\u6d88\u606f\u53d1\u9001\u5931\u8d25\u5904\u7406\u65b9\u5f0f",id:"\u6d88\u606f\u53d1\u9001\u5931\u8d25\u5904\u7406\u65b9\u5f0f",level:3},{value:"\u6d88\u8d39\u8005",id:"\u6d88\u8d39\u8005",level:2},{value:"\u6d88\u8d39\u8fc7\u7a0b\u5e42\u7b49",id:"\u6d88\u8d39\u8fc7\u7a0b\u5e42\u7b49",level:3},{value:"\u6d88\u8d39\u901f\u5ea6\u6162\u7684\u5904\u7406\u65b9\u5f0f",id:"\u6d88\u8d39\u901f\u5ea6\u6162\u7684\u5904\u7406\u65b9\u5f0f",level:3},{value:"\u63d0\u9ad8\u6d88\u8d39\u5e76\u884c\u5ea6",id:"\u63d0\u9ad8\u6d88\u8d39\u5e76\u884c\u5ea6",level:3},{value:"\u6279\u91cf\u65b9\u5f0f\u6d88\u8d39",id:"\u6279\u91cf\u65b9\u5f0f\u6d88\u8d39",level:3},{value:"\u91cd\u7f6e\u4f4d\u70b9\u8df3\u8fc7\u975e\u91cd\u8981\u6d88\u606f",id:"\u91cd\u7f6e\u4f4d\u70b9\u8df3\u8fc7\u975e\u91cd\u8981\u6d88\u606f",level:3},{value:"\u4f18\u5316\u6bcf\u6761\u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b",id:"\u4f18\u5316\u6bcf\u6761\u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b",level:4},{value:"\u6d88\u8d39\u6253\u5370\u65e5\u5fd7",id:"\u6d88\u8d39\u6253\u5370\u65e5\u5fd7",level:3},{value:"Broker",id:"broker",level:2},{value:"Broker \u89d2\u8272",id:"broker-\u89d2\u8272",level:3},{value:"FlushDiskType",id:"flushdisktype",level:3},{value:"Broker \u914d\u7f6e",id:"broker-\u914d\u7f6e",level:3}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u672c\u6700\u4f73\u5b9e\u8df5"},"\u57fa\u672c\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("h2",{id:"\u751f\u4ea7\u8005"},"\u751f\u4ea7\u8005"),(0,a.kt)("h3",{id:"\u53d1\u9001\u6d88\u606f\u6ce8\u610f\u4e8b\u9879"},"\u53d1\u9001\u6d88\u606f\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("h4",{id:"tag\u7684\u4f7f\u7528"},"Tag\u7684\u4f7f\u7528"),(0,a.kt)("p",null,'\u4e00\u4e2a\u5e94\u7528\u5c3d\u53ef\u80fd\u7528\u4e00\u4e2aTopic\uff0c\u800c\u6d88\u606f\u5b50\u7c7b\u578b\u5219\u53ef\u4ee5\u7528tags\u6765\u6807\u8bc6\u3002tags\u53ef\u4ee5\u7531\u5e94\u7528\u81ea\u7531\u8bbe\u7f6e\uff0c\u53ea\u6709\u751f\u4ea7\u8005\u5728\u53d1\u9001\u6d88\u606f\u8bbe\u7f6e\u4e86tags\uff0c\u6d88\u8d39\u65b9\u5728\u8ba2\u9605\u6d88\u606f\u65f6\u624d\u53ef\u4ee5\u5229\u7528tags\u901a\u8fc7broker\u505a\u6d88\u606f\u8fc7\u6ee4\uff0c5.x SDK \u53ef\u4ee5\u8c03\u7528messageBuilder.setTag("messageTag")\uff0c\u5386\u53f2\u7248\u672c\u53ef\u4ee5\u8c03\u7528 message.setTags("messageTag")\u3002  '),(0,a.kt)("h4",{id:"keys\u7684\u4f7f\u7528"},"Keys\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u6d88\u606f\u5728\u4e1a\u52a1\u5c42\u9762\u4e00\u822c\u5efa\u8bae\u6620\u5c04\u5230\u4e1a\u52a1\u7684\u552f\u4e00\u6807\u8bc6\u5e76\u8bbe\u7f6e\u5230keys\u5b57\u6bb5\uff0c\u65b9\u4fbf\u5c06\u6765\u5b9a\u4f4d\u6d88\u606f\u4e22\u5931\u95ee\u9898\u3002\u670d\u52a1\u5668\u4f1a\u4e3a\u6bcf\u4e2a\u6d88\u606f\u521b\u5efa\u7d22\u5f15\uff08\u54c8\u5e0c\u7d22\u5f15\uff09\uff0c\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7topic\u3001key\u6765\u67e5\u8be2\u8fd9\u6761\u6d88\u606f\u5185\u5bb9\uff0c\u4ee5\u53ca\u6d88\u606f\u88ab\u8c01\u6d88\u8d39\u3002\u7531\u4e8e\u662f\u54c8\u5e0c\u7d22\u5f15\uff0c\u8bf7\u52a1\u5fc5\u4fdd\u8bc1key\u5c3d\u53ef\u80fd\u552f\u4e00\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6f5c\u5728\u7684\u54c8\u5e0c\u51b2\u7a81\u3002\u5e38\u89c1\u7684\u8bbe\u7f6e\u7b56\u7565\u4f7f\u7528\u8ba2\u5355Id\u3001\u7528\u6237Id\u3001\u8bf7\u6c42Id\u7b49\u6bd4\u8f83\u79bb\u6563\u7684\u552f\u4e00\u6807\u8bc6\u6765\u5904\u7406\u3002"),(0,a.kt)("h4",{id:"\u65e5\u5fd7\u7684\u6253\u5370"},"\u65e5\u5fd7\u7684\u6253\u5370"),(0,a.kt)("p",null,"\u6d88\u606f\u53d1\u9001\u6210\u529f\u6216\u8005\u5931\u8d25\u8981\u6253\u5370\u6d88\u606f\u65e5\u5fd7\uff0c\u7528\u4e8e\u4e1a\u52a1\u6392\u67e5\u95ee\u9898\u3002Send\u6d88\u606f\u65b9\u6cd5\u53ea\u8981\u4e0d\u629b\u5f02\u5e38\uff0c\u5c31\u4ee3\u8868\u53d1\u9001\u6210\u529f\u3002"),(0,a.kt)("h3",{id:"\u6d88\u606f\u53d1\u9001\u5931\u8d25\u5904\u7406\u65b9\u5f0f"},"\u6d88\u606f\u53d1\u9001\u5931\u8d25\u5904\u7406\u65b9\u5f0f"),(0,a.kt)("p",null,"Producer\u7684send\u65b9\u6cd5\u672c\u8eab\u652f\u6301\u5185\u90e8\u91cd\u8bd5\uff0c5.x SDK\u7684\u91cd\u8bd5\u903b\u8f91\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/05sendretrypolicy"},"\u53d1\u9001\u91cd\u8bd5\u7b56\u7565"),"\uff1a"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u7b56\u7565\u4e5f\u662f\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4fdd\u8bc1\u4e86\u6d88\u606f\u53ef\u4ee5\u53d1\u9001\u6210\u529f\u3002\u5982\u679c\u4e1a\u52a1\u8981\u6c42\u6d88\u606f\u53d1\u9001\u4e0d\u80fd\u4e22\uff0c\u4ecd\u7136\u9700\u8981\u5bf9\u53ef\u80fd\u51fa\u73b0\u7684\u5f02\u5e38\u505a\u515c\u5e95\uff0c\u6bd4\u5982\u8c03\u7528send\u540c\u6b65\u65b9\u6cd5\u53d1\u9001\u5931\u8d25\u65f6\uff0c\u5219\u5c1d\u8bd5\u5c06\u6d88\u606f\u5b58\u50a8\u5230db\uff0c\u7136\u540e\u7531\u540e\u53f0\u7ebf\u7a0b\u5b9a\u65f6\u91cd\u8bd5\uff0c\u786e\u4fdd\u6d88\u606f\u4e00\u5b9a\u5230\u8fbeBroker\u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0DB\u91cd\u8bd5\u65b9\u5f0f\u4e3a\u4ec0\u4e48\u6ca1\u6709\u96c6\u6210\u5230MQ\u5ba2\u6237\u7aef\u5185\u90e8\u505a\uff0c\u800c\u662f\u8981\u6c42\u5e94\u7528\u81ea\u5df1\u53bb\u5b8c\u6210\uff0c\u4e3b\u8981\u57fa\u4e8e\u4ee5\u4e0b\u51e0\u70b9\u8003\u8651\uff1a\u9996\u5148\uff0cMQ\u7684\u5ba2\u6237\u7aef\u8bbe\u8ba1\u4e3a\u65e0\u72b6\u6001\u6a21\u5f0f\uff0c\u65b9\u4fbf\u4efb\u610f\u7684\u6c34\u5e73\u6269\u5c55\uff0c\u4e14\u5bf9\u673a\u5668\u8d44\u6e90\u7684\u6d88\u8017\u4ec5\u4ec5\u662fcpu\u3001\u5185\u5b58\u3001\u7f51\u7edc\u3002\u5176\u6b21\uff0c\u5982\u679cMQ\u5ba2\u6237\u7aef\u5185\u90e8\u96c6\u6210\u4e00\u4e2aKV\u5b58\u50a8\u6a21\u5757\uff0c\u90a3\u4e48\u6570\u636e\u53ea\u6709\u540c\u6b65\u843d\u76d8\u624d\u80fd\u8f83\u53ef\u9760\uff0c\u800c\u540c\u6b65\u843d\u76d8\u672c\u8eab\u6027\u80fd\u5f00\u9500\u8f83\u5927\uff0c\u6240\u4ee5\u901a\u5e38\u4f1a\u91c7\u7528\u5f02\u6b65\u843d\u76d8\uff0c\u53c8\u7531\u4e8e\u5e94\u7528\u5173\u95ed\u8fc7\u7a0b\u4e0d\u53d7MQ\u8fd0\u7ef4\u4eba\u5458\u63a7\u5236\uff0c\u53ef\u80fd\u7ecf\u5e38\u4f1a\u53d1\u751f kill -9 \u8fd9\u6837\u66b4\u529b\u65b9\u5f0f\u5173\u95ed\uff0c\u9020\u6210\u6570\u636e\u6ca1\u6709\u53ca\u65f6\u843d\u76d8\u800c\u4e22\u5931\u3002\u7b2c\u4e09\uff0cProducer\u6240\u5728\u673a\u5668\u7684\u53ef\u9760\u6027\u8f83\u4f4e\uff0c\u4e00\u822c\u4e3a\u865a\u62df\u673a\uff0c\u4e0d\u9002\u5408\u5b58\u50a8\u91cd\u8981\u6570\u636e\u3002\u7efc\u4e0a\uff0c\u5efa\u8bae\u91cd\u8bd5\u8fc7\u7a0b\u4ea4\u7531\u5e94\u7528\u6765\u63a7\u5236\u3002"),(0,a.kt)("h2",{id:"\u6d88\u8d39\u8005"},"\u6d88\u8d39\u8005"),(0,a.kt)("h3",{id:"\u6d88\u8d39\u8fc7\u7a0b\u5e42\u7b49"},"\u6d88\u8d39\u8fc7\u7a0b\u5e42\u7b49"),(0,a.kt)("p",null,"RocketMQ \u65e0\u6cd5\u907f\u514d\u6d88\u606f\u91cd\u590d\uff08Exactly-Once\uff09\uff0c\u6240\u4ee5\u5982\u679c\u4e1a\u52a1\u5bf9\u6d88\u8d39\u91cd\u590d\u975e\u5e38\u654f\u611f\uff0c\u52a1\u5fc5\u8981\u5728\u4e1a\u52a1\u5c42\u9762\u8fdb\u884c\u53bb\u91cd\u5904\u7406\u3002\u53ef\u4ee5\u501f\u52a9\u5173\u7cfb\u6570\u636e\u5e93\u8fdb\u884c\u53bb\u91cd\u3002\u9996\u5148\u9700\u8981\u786e\u5b9a\u6d88\u606f\u7684\u552f\u4e00\u952e\uff0c\u53ef\u4ee5\u662fmsgId\uff0c\u4e5f\u53ef\u4ee5\u662f\u6d88\u606f\u5185\u5bb9\u4e2d\u7684\u552f\u4e00\u6807\u8bc6\u5b57\u6bb5\uff0c\u4f8b\u5982\u8ba2\u5355Id\u7b49\u3002\u5728\u6d88\u8d39\u4e4b\u524d\u5224\u65ad\u552f\u4e00\u952e\u662f\u5426\u5728\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u3002\u5982\u679c\u4e0d\u5b58\u5728\u5219\u63d2\u5165\uff0c\u5e76\u6d88\u8d39\uff0c\u5426\u5219\u8df3\u8fc7\u3002\uff08\u5b9e\u9645\u8fc7\u7a0b\u8981\u8003\u8651\u539f\u5b50\u6027\u95ee\u9898\uff0c\u5224\u65ad\u662f\u5426\u5b58\u5728\u53ef\u4ee5\u5c1d\u8bd5\u63d2\u5165\uff0c\u5982\u679c\u62a5\u4e3b\u952e\u51b2\u7a81\uff0c\u5219\u63d2\u5165\u5931\u8d25\uff0c\u76f4\u63a5\u8df3\u8fc7\uff09"),(0,a.kt)("p",null,"msgId\u4e00\u5b9a\u662f\u5168\u5c40\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u4f46\u662f\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u76f8\u540c\u7684\u6d88\u606f\u6709\u4e24\u4e2a\u4e0d\u540cmsgId\u7684\u60c5\u51b5\uff08\u6d88\u8d39\u8005\u4e3b\u52a8\u91cd\u53d1\u3001\u56e0\u5ba2\u6237\u7aef\u91cd\u6295\u673a\u5236\u5bfc\u81f4\u7684\u91cd\u590d\u7b49\uff09\uff0c\u8fd9\u79cd\u60c5\u51b5\u5c31\u9700\u8981\u4f7f\u4e1a\u52a1\u5b57\u6bb5\u8fdb\u884c\u91cd\u590d\u6d88\u8d39\u3002"),(0,a.kt)("h3",{id:"\u6d88\u8d39\u901f\u5ea6\u6162\u7684\u5904\u7406\u65b9\u5f0f"},"\u6d88\u8d39\u901f\u5ea6\u6162\u7684\u5904\u7406\u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u63d0\u9ad8\u6d88\u8d39\u5e76\u884c\u5ea6"},"\u63d0\u9ad8\u6d88\u8d39\u5e76\u884c\u5ea6"),(0,a.kt)("p",null,"\u7edd\u5927\u90e8\u5206\u6d88\u606f\u6d88\u8d39\u884c\u4e3a\u90fd\u5c5e\u4e8e IO \u5bc6\u96c6\u578b\uff0c\u5373\u53ef\u80fd\u662f\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u6216\u8005\u8c03\u7528 RPC\uff0c\u8fd9\u7c7b\u6d88\u8d39\u884c\u4e3a\u7684\u6d88\u8d39\u901f\u5ea6\u5728\u4e8e\u540e\u7aef\u6570\u636e\u5e93\u6216\u8005\u5916\u7cfb\u7edf\u7684\u541e\u5410\u91cf\uff0c\u901a\u8fc7\u589e\u52a0\u6d88\u8d39\u5e76\u884c\u5ea6\uff0c\u53ef\u4ee5\u63d0\u9ad8\u603b\u7684\u6d88\u8d39\u541e\u5410\u91cf\uff0c\u4f46\u662f\u5e76\u884c\u5ea6\u589e\u52a0\u5230\u4e00\u5b9a\u7a0b\u5ea6\uff0c\u53cd\u800c\u4f1a\u4e0b\u964d\u3002\u6240\u4ee5\uff0c\u5e94\u7528\u5fc5\u987b\u8981\u8bbe\u7f6e\u5408\u7406\u7684\u5e76\u884c\u5ea6\u3002 \u5982\u4e0b\u6709\u51e0\u79cd\u4fee\u6539\u6d88\u8d39\u5e76\u884c\u5ea6\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a ConsumerGroup \u4e0b\uff0c\u901a\u8fc7\u589e\u52a0 Consumer \u5b9e\u4f8b\u6570\u91cf\u6765\u63d0\u9ad8\u5e76\u884c\u5ea6\u3002\u53ef\u4ee5\u901a\u8fc7\u52a0\u673a\u5668\uff0c\u6216\u8005\u5728\u5df2\u6709\u673a\u5668\u542f\u52a8\u591a\u4e2a\u8fdb\u7a0b\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u5355\u4e2a Consumer \u7684\u6d88\u8d39\u5e76\u884c\u7ebf\u7a0b\uff0c5.x PushConsumer SDK \u53ef\u4ee5\u901a\u8fc7PushConsumerBuilder.setConsumptionThreadCount() \u8bbe\u7f6e\u7ebf\u7a0b\u6570\uff0cSimpleConsumer\u53ef\u4ee5\u7531\u4e1a\u52a1\u7ebf\u7a0b\u81ea\u7531\u589e\u52a0\u5e76\u53d1\uff0c\u5e95\u5c42\u7ebf\u7a0b\u5b89\u5168\uff1b\u5386\u53f2\u7248\u672cSDK PushConsumer\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u53c2\u6570 consumeThreadMin\u3001consumeThreadMax\u5b9e\u73b0\u3002")),(0,a.kt)("h3",{id:"\u6279\u91cf\u65b9\u5f0f\u6d88\u8d39"},"\u6279\u91cf\u65b9\u5f0f\u6d88\u8d39"),(0,a.kt)("p",null,"\u67d0\u4e9b\u4e1a\u52a1\u6d41\u7a0b\u5982\u679c\u652f\u6301\u6279\u91cf\u65b9\u5f0f\u6d88\u8d39\uff0c\u5219\u53ef\u4ee5\u5f88\u5927\u7a0b\u5ea6\u4e0a\u63d0\u9ad8\u6d88\u8d39\u541e\u5410\u91cf\uff0c\u4f8b\u5982\u8ba2\u5355\u6263\u6b3e\u7c7b\u5e94\u7528\uff0c\u4e00\u6b21\u5904\u7406\u4e00\u4e2a\u8ba2\u5355\u8017\u65f6 1 s\uff0c\u4e00\u6b21\u5904\u7406 10 \u4e2a\u8ba2\u5355\u53ef\u80fd\u4e5f\u53ea\u8017\u65f6 2 s\uff0c\u8fd9\u6837\u5373\u53ef\u5927\u5e45\u5ea6\u63d0\u9ad8\u6d88\u8d39\u7684\u541e\u5410\u91cf\u3002\u5efa\u8bae\u4f7f\u75285.x SDK\u7684SimpleConsumer\uff0c\u6bcf\u6b21\u63a5\u53e3\u8c03\u7528\u8bbe\u7f6e\u6279\u6b21\u5927\u5c0f\uff0c\u4e00\u6b21\u6027\u62c9\u53d6\u6d88\u8d39\u591a\u6761\u6d88\u606f\u3002"),(0,a.kt)("h3",{id:"\u91cd\u7f6e\u4f4d\u70b9\u8df3\u8fc7\u975e\u91cd\u8981\u6d88\u606f"},"\u91cd\u7f6e\u4f4d\u70b9\u8df3\u8fc7\u975e\u91cd\u8981\u6d88\u606f"),(0,a.kt)("p",null,"\u53d1\u751f\u6d88\u606f\u5806\u79ef\u65f6\uff0c\u5982\u679c\u6d88\u8d39\u901f\u5ea6\u4e00\u76f4\u8ffd\u4e0d\u4e0a\u53d1\u9001\u901f\u5ea6\uff0c\u5982\u679c\u4e1a\u52a1\u5bf9\u6570\u636e\u8981\u6c42\u4e0d\u9ad8\u7684\u8bdd\uff0c\u53ef\u4ee5\u9009\u62e9\u4e22\u5f03\u4e0d\u91cd\u8981\u7684\u6d88\u606f\u3002\u5efa\u8bae\u4f7f\u7528\u91cd\u7f6e\u4f4d\u70b9\u529f\u80fd\u76f4\u63a5\u8c03\u6574\u6d88\u8d39\u4f4d\u70b9\u5230\u6307\u5b9a\u65f6\u523b\u6216\u8005\u6307\u5b9a\u4f4d\u7f6e\u3002"),(0,a.kt)("h4",{id:"\u4f18\u5316\u6bcf\u6761\u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b"},"\u4f18\u5316\u6bcf\u6761\u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u4e3e\u4f8b\u5982\u4e0b\uff0c\u67d0\u6761\u6d88\u606f\u7684\u6d88\u8d39\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u6d88\u606f\u4ece DB \u67e5\u8be2\u3010\u6570\u636e 1\u3011"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u6d88\u606f\u4ece DB \u67e5\u8be2\u3010\u6570\u636e 2\u3011"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u7684\u4e1a\u52a1\u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ul"},"\u5411 DB \u63d2\u5165\u3010\u6570\u636e 3\u3011"),(0,a.kt)("li",{parentName:"ul"},"\u5411 DB \u63d2\u5165\u3010\u6570\u636e 4\u3011")),(0,a.kt)("p",null,"\u8fd9\u6761\u6d88\u606f\u7684\u6d88\u8d39\u8fc7\u7a0b\u4e2d\u67094\u6b21\u4e0e DB\u7684 \u4ea4\u4e92\uff0c\u5982\u679c\u6309\u7167\u6bcf\u6b21 5ms \u8ba1\u7b97\uff0c\u90a3\u4e48\u603b\u5171\u8017\u65f6 20ms\uff0c\u5047\u8bbe\u4e1a\u52a1\u8ba1\u7b97\u8017\u65f6 5ms\uff0c\u90a3\u4e48\u603b\u8fc7\u8017\u65f6 25ms\uff0c\u6240\u4ee5\u5982\u679c\u80fd\u628a 4 \u6b21 DB \u4ea4\u4e92\u4f18\u5316\u4e3a 2 \u6b21\uff0c\u90a3\u4e48\u603b\u8017\u65f6\u5c31\u53ef\u4ee5\u4f18\u5316\u5230 15ms\uff0c\u5373\u603b\u4f53\u6027\u80fd\u63d0\u9ad8\u4e86 40%\u3002\u6240\u4ee5\u5e94\u7528\u5982\u679c\u5bf9\u65f6\u5ef6\u654f\u611f\u7684\u8bdd\uff0c\u53ef\u4ee5\u628aDB\u90e8\u7f72\u5728SSD\u786c\u76d8\uff0c\u76f8\u6bd4\u4e8eSCSI\u78c1\u76d8\uff0c\u524d\u8005\u7684RT\u4f1a\u5c0f\u5f88\u591a\u3002"),(0,a.kt)("h3",{id:"\u6d88\u8d39\u6253\u5370\u65e5\u5fd7"},"\u6d88\u8d39\u6253\u5370\u65e5\u5fd7"),(0,a.kt)("p",null,"\u5982\u679c\u6d88\u606f\u91cf\u8f83\u5c11\uff0c\u5efa\u8bae\u5728\u6d88\u8d39\u5165\u53e3\u65b9\u6cd5\u6253\u5370\u6d88\u606f\uff0c\u6d88\u8d39\u8017\u65f6\u7b49\uff0c\u65b9\u4fbf\u540e\u7eed\u6392\u67e5\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'   new MessageListener() {\n        @Override\n        public ConsumeResult consume(MessageView messageView) {\n            LOGGER.info("Consume message={}", messageView);\n            //Do your consume process\n            return ConsumeResult.SUCCESS;\n            }\n    }\n')),(0,a.kt)("p",null,"\u5982\u679c\u80fd\u6253\u5370\u6bcf\u6761\u6d88\u606f\u6d88\u8d39\u8017\u65f6\uff0c\u90a3\u4e48\u5728\u6392\u67e5\u6d88\u8d39\u6162\u7b49\u7ebf\u4e0a\u95ee\u9898\u65f6\uff0c\u4f1a\u66f4\u65b9\u4fbf\u3002\u4f46\u5982\u679c\u7ebf\u4e0a\u73af\u5883TPS\u5f88\u9ad8\uff0c\u4e0d\u5efa\u8bae\u5f00\u542f\uff0c\u907f\u514d\u65e5\u5fd7\u592a\u591a\u5f71\u54cd\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"broker"},"Broker"),(0,a.kt)("h3",{id:"broker-\u89d2\u8272"},"Broker \u89d2\u8272"),(0,a.kt)("p",null,"  Broker \u89d2\u8272\u5206\u4e3a ASYNC_MASTER\uff08\u5f02\u6b65\u4e3b\u673a\uff09\u3001SYNC_MASTER\uff08\u540c\u6b65\u4e3b\u673a\uff09\u4ee5\u53caSLAVE\uff08\u4ece\u673a\uff09\u3002\u5982\u679c\u5bf9\u6d88\u606f\u7684\u53ef\u9760\u6027\u8981\u6c42\u6bd4\u8f83\u4e25\u683c\uff0c\u53ef\u4ee5\u91c7\u7528 SYNC_MASTER\u52a0SLAVE\u7684\u90e8\u7f72\u65b9\u5f0f\u3002\u5982\u679c\u5bf9\u6d88\u606f\u53ef\u9760\u6027\u8981\u6c42\u4e0d\u9ad8\uff0c\u53ef\u4ee5\u91c7\u7528ASYNC_MASTER\u52a0SLAVE\u7684\u90e8\u7f72\u65b9\u5f0f\u3002\u5982\u679c\u53ea\u662f\u6d4b\u8bd5\u65b9\u4fbf\uff0c\u5219\u53ef\u4ee5\u9009\u62e9\u4ec5ASYNC_MASTER\u6216\u4ec5SYNC_MASTER\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"flushdisktype"},"FlushDiskType"),(0,a.kt)("p",null," SYNC_FLUSH\uff08\u540c\u6b65\u5237\u65b0\uff09\u76f8\u6bd4\u4e8eASYNC_FLUSH\uff08\u5f02\u6b65\u5904\u7406\uff09\u4f1a\u635f\u5931\u5f88\u591a\u6027\u80fd\uff0c\u4f46\u662f\u4e5f\u66f4\u53ef\u9760\uff0c\u6240\u4ee5\u9700\u8981\u6839\u636e\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u505a\u597d\u6743\u8861\u3002"),(0,a.kt)("h3",{id:"broker-\u914d\u7f6e"},"Broker \u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listenPort"),(0,a.kt)("td",{parentName:"tr",align:null},"10911"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7\u5ba2\u6237\u7aef\u8fde\u63a5\u7684\u76d1\u542c\u7aef\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"namesrvAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"nameServer \u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerIP1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f51\u5361\u7684 InetAddress"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d broker \u76d1\u542c\u7684 IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerIP2"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ddf brokerIP1 \u4e00\u6837"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728\u4e3b\u4ece broker \u65f6\uff0c\u5982\u679c\u5728 broker \u4e3b\u8282\u70b9\u4e0a\u914d\u7f6e\u4e86 brokerIP2 \u5c5e\u6027\uff0cbroker \u4ece\u8282\u70b9\u4f1a\u8fde\u63a5\u4e3b\u8282\u70b9\u914d\u7f6e\u7684 brokerIP2 \u8fdb\u884c\u540c\u6b65")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerName"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"broker \u7684\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerClusterName"),(0,a.kt)("td",{parentName:"tr",align:null},"DefaultCluster"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c broker \u6240\u5c5e\u7684 Cluser \u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerId"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"broker id, 0 \u8868\u793a master, \u5176\u4ed6\u7684\u6b63\u6574\u6570\u8868\u793a slave")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storePathCommitLog"),(0,a.kt)("td",{parentName:"tr",align:null},"$HOME/store/commitlog/"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8 commit log \u7684\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storePathConsumerQueue"),(0,a.kt)("td",{parentName:"tr",align:null},"$HOME/store/consumequeue/"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8 consume queue \u7684\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mapedFileSizeCommitLog"),(0,a.kt)("td",{parentName:"tr",align:null},"1024 ",(0,a.kt)("em",{parentName:"td"}," 1024 ")," 1024(1G)"),(0,a.kt)("td",{parentName:"tr",align:null},"commit log \u7684\u6620\u5c04\u6587\u4ef6\u5927\u5c0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deleteWhen"),(0,a.kt)("td",{parentName:"tr",align:null},"04"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u6bcf\u5929\u7684\u4ec0\u4e48\u65f6\u95f4\u5220\u9664\u5df2\u7ecf\u8d85\u8fc7\u6587\u4ef6\u4fdd\u7559\u65f6\u95f4\u7684 commit log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fileReserverdTime"),(0,a.kt)("td",{parentName:"tr",align:null},"72"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ee5\u5c0f\u65f6\u8ba1\u7b97\u7684\u6587\u4ef6\u4fdd\u7559\u65f6\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerRole"),(0,a.kt)("td",{parentName:"tr",align:null},"ASYNC_MASTER"),(0,a.kt)("td",{parentName:"tr",align:null},"SYNC_MASTER/ASYNC_MASTER/SLAVE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flushDiskType"),(0,a.kt)("td",{parentName:"tr",align:null},"ASYNC_FLUSH"),(0,a.kt)("td",{parentName:"tr",align:null},"SYNC_FLUSH/ASYNC_FLUSH SYNC_FLUSH \u6a21\u5f0f\u4e0b\u7684 broker \u4fdd\u8bc1\u5728\u6536\u5230\u786e\u8ba4\u751f\u4ea7\u8005\u4e4b\u524d\u5c06\u6d88\u606f\u5237\u76d8\u3002ASYNC_FLUSH \u6a21\u5f0f\u4e0b\u7684 broker \u5219\u5229\u7528\u5237\u76d8\u4e00\u7ec4\u6d88\u606f\u7684\u6a21\u5f0f\uff0c\u53ef\u4ee5\u53d6\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002")))))}d.isMDXComponent=!0}}]);