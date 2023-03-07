"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4359],{3905:(t,e,l)=>{l.d(e,{Zo:()=>p,kt:()=>c});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},p=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,m=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),k=o(l),d=r,c=k["".concat(m,".").concat(d)]||k[d]||s[d]||a;return l?n.createElement(c,i(i({ref:e},p),{},{components:l})):n.createElement(c,i({ref:e},p))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=d;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u[k]="string"==typeof t?t:r,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},9833:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var n=l(87462),r=(l(67294),l(3905));const a={},i="Metrics",u={unversionedId:"observability/01metrics",id:"version-5.0/observability/01metrics",title:"Metrics",description:"RocketMQ \u4ee5 Prometheus \u683c\u5f0f\u516c\u5f00\u4ee5\u4e0b\u6307\u6807\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u76d1\u89c6\u60a8\u7684\u96c6\u7fa4\u3002",source:"@site/versioned_docs/version-5.0/12-observability/01metrics.md",sourceDirName:"12-observability",slug:"/observability/01metrics",permalink:"/zh/docs/observability/01metrics",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/12-observability/01metrics.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Promethus Exporter",permalink:"/zh/docs/deploymentOperations/05Exporter"},next:{title:"\u57fa\u672c\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/bestPractice/01bestpractice"}},m={},o=[{value:"Metrics\u6307\u6807\u8be6\u60c5",id:"metrics\u6307\u6807\u8be6\u60c5",level:2},{value:"Metric types",id:"metric-types",level:3},{value:"\u670d\u52a1\u7aefMetrics\u6307\u6807",id:"\u670d\u52a1\u7aefmetrics\u6307\u6807",level:3},{value:"\u751f\u4ea7\u8005Metrics\u6307\u6807",id:"\u751f\u4ea7\u8005metrics\u6307\u6807",level:3},{value:"\u6d88\u8d39\u8005Metrics\u6307\u6807",id:"\u6d88\u8d39\u8005metrics\u6307\u6807",level:3},{value:"\u6307\u6807\u4e1a\u52a1\u573a\u666f",id:"\u6307\u6807\u4e1a\u52a1\u573a\u666f",level:2},{value:"\u6d88\u606f\u5806\u79ef\u573a\u666f",id:"\u6d88\u606f\u5806\u79ef\u573a\u666f",level:3},{value:"PushConsumer \u6d88\u8d39\u573a\u666f",id:"pushconsumer-\u6d88\u8d39\u573a\u666f",level:3}],p={toc:o},k="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"RocketMQ \u4ee5 Prometheus \u683c\u5f0f\u516c\u5f00\u4ee5\u4e0b\u6307\u6807\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u76d1\u89c6\u60a8\u7684\u96c6\u7fa4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aefMetrics\u6307\u6807"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u8005Metrics\u6307\u6807"),(0,r.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005Metrics\u6307\u6807")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7248\u672c\u652f\u6301\uff1a\u4ee5\u4e0b\u6307\u6807 Metrics \u662f\u4ece 5.1.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("h2",{id:"metrics\u6307\u6807\u8be6\u60c5"},"Metrics\u6307\u6807\u8be6\u60c5"),(0,r.kt)("h3",{id:"metric-types"},"Metric types"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u5b9a\u4e49\u7684Metrics\u5b8c\u5168\u517c\u5bb9\u5f00\u6e90Prometheus\u7684\u6807\u51c6\uff0c\u63d0\u4f9b\u7684Metrics\u7684\u7c7b\u578b\u4e3aCounter\u3001Gauge\u548cHistogram\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/metric_types/"},"METRIC TYPES"),"\u3002"),(0,r.kt)("h3",{id:"\u670d\u52a1\u7aefmetrics\u6307\u6807"},"\u670d\u52a1\u7aefMetrics\u6307\u6807"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u670d\u52a1\u7aef\u76f8\u5173Metrics\u6307\u6807\u4e2dLabel\u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cluster: RocketMQ \u96c6\u7fa4\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"node_type: \u670d\u52a1\u8282\u70b9\u7c7b\u578b\u3002\u679a\u4e3e\u503c\u5305\u542bproxy\u3001broker\u3001nameserver\u3002"),(0,r.kt)("li",{parentName:"ul"},"node_id: \u670d\u52a1\u8282\u70b9ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"topic: \u6d88\u606f\u961f\u5217RocketMQ\u7684\u4e3b\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"message_type: \u6d88\u606f\u7c7b\u578b\u3002\u6709\u4ee5\u4e0b\u7c7b\u578b:",(0,r.kt)("br",null),"Normal:\u666e\u901a\u6d88\u606f;",(0,r.kt)("br",null),"FIFO:\u987a\u5e8f\u6d88\u606f;",(0,r.kt)("br",null),"Transaction:\u4e8b\u52a1\u6d88\u606f;",(0,r.kt)("br",null),"Delay:\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f."),(0,r.kt)("li",{parentName:"ul"},"consumer_group: \u6d88\u8d39\u8005 ID\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metrics\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_messages_in_total"),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u751f\u4ea7\u6570\u91cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic,message_type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_messages_out_total"),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6d88\u8d39\u6570\u91cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_throughput_in_total"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u751f\u4ea7\u6d41\u5165\u670d\u52a1\u7aef\u7684\u541e\u5410\u91cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic,message_type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_throughput_out_total"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6d88\u8d39\u4ece\u670d\u52a1\u7aef\u6d41\u51fa\u7684\u541e\u5410\u91cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_message_size"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5927\u5c0f\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u53d1\u9001\u6210\u529f\u65f6\u7edf\u8ba1\u3002\u5206\u5e03\u533a\u95f4\u5982\u4e0b\uff1a",(0,r.kt)("br",null),"le_1_kb: \u2264 1 KB",(0,r.kt)("br",null)," le_4_kb: \u2264 4 KB",(0,r.kt)("br",null),"le_512_kb: \u2264 512 KB",(0,r.kt)("br",null),"le_1_mb: \u2264 1 MB",(0,r.kt)("br",null),"le_2_mb: \u2264 2 MB",(0,r.kt)("br",null),"le_4_mb: \u2264 4 MB",(0,r.kt)("br",null),"le_overflow: > 4 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic,message_type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_ready_messages"),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u91cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_inflight_messages"),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e2d\u6d88\u606f\u91cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_queueing_latency"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u6392\u961f\u5ef6\u8fdf\u65f6\u95f4\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_lag_latency"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u5904\u7406\u5ef6\u8fdf\u65f6\u95f4\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_send_to_dlq_messages_total"),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f6c\u4e3a\u6b7b\u4fe1\u72b6\u6001\u7684\u6d88\u606f\u91cf\u3002\uff08\u53d8\u6210\u6b7b\u4fe1\u72b6\u6001\u6307\u7684\u662f\u6d88\u606f\u8fbe\u5230\u6700\u5927\u91cd\u6295\u6b21\u6570\u540e\u4e0d\u518d\u6295\u9012\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,topic, consumer_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_rpc_latency"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"rpc \u8c03\u7528\u8017\u65f6\uff1a",(0,r.kt)("br",null),"le_1_ms",(0,r.kt)("br",null),"le_3_ms",(0,r.kt)("br",null),"le_5_ms",(0,r.kt)("br",null),"le_10_ms",(0,r.kt)("br",null),"le_100_ms",(0,r.kt)("br",null),"le_1_s",(0,r.kt)("br",null),"le_3_s",(0,r.kt)("br",null),"le_overflow"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_typ,node_id,protocol_type,request_code,response_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_storage_message_reserve_time"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"\u50a8\u5b58\u5c42\u6d88\u606f\u4fdd\u5b58\u65f6\u95f4\uff08broker \u786c\u76d8\u4e0a\u6700\u65e9\u4e00\u6761\u6d88\u606f\u50a8\u5b58\u65f6\u95f4\u548c\u5f53\u524d\u65f6\u95f4\u4f5c\u5dee\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_storage_dispatch_behind_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"dispatch \u843d\u540e\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_storage_flush_behind_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5237\u76d8\u843d\u540e\u5927\u5c0f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_thread_pool_wartermark"),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6c60\u6392\u961f\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster,node_type,node_id,name")))),(0,r.kt)("h3",{id:"\u751f\u4ea7\u8005metrics\u6307\u6807"},"\u751f\u4ea7\u8005Metrics\u6307\u6807"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u751f\u4ea7\u8005\u76f8\u5173Metrics\u6307\u6807\u4e2dLabel\u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cluster: RocketMQ \u96c6\u7fa4\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"node_type: \u670d\u52a1\u8282\u70b9\u7c7b\u578b\u3002\u679a\u4e3e\u503c\u5305\u542bproxy\u3001broker\u3001nameserver\u3002"),(0,r.kt)("li",{parentName:"ul"},"node_id: \u670d\u52a1\u8282\u70b9ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"topic: \u6d88\u606f\u961f\u5217RocketMQ\u7684\u4e3b\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"message_type: \u6d88\u606f\u7c7b\u578b\u3002\u6709\u4ee5\u4e0b\u7c7b\u578b:",(0,r.kt)("br",null),"Normal:\u666e\u901a\u6d88\u606f;",(0,r.kt)("br",null),"FIFO:\u987a\u5e8f\u6d88\u606f;",(0,r.kt)("br",null),"Transaction:\u4e8b\u52a1\u6d88\u606f;",(0,r.kt)("br",null),"Delay:\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f."),(0,r.kt)("li",{parentName:"ul"},"client_id: \u5ba2\u6237\u7aefID\u3002"),(0,r.kt)("li",{parentName:"ul"},"invocation_status: \u6d88\u606f\u53d1\u9001\u63a5\u53e3\u8c03\u7528\u7ed3\u679c\uff0c\u679a\u4e3e\u503c\u5305\u542b success \u548c failure\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metrics\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_send_cost_time"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6d88\u606f\u53d1\u9001\u63a5\u53e3\u6210\u529f\u7684\u8017\u65f6\u5206\u5e03\u60c5\u51b5\u3002\u5206\u5e03\u533a\u95f4\u5982\u4e0b\uff1a: ",(0,r.kt)("br",null),"le_1_ms ",(0,r.kt)("br",null),"le_5_ms",(0,r.kt)("br",null),"le_10_ms",(0,r.kt)("br",null),"le_20_ms ",(0,r.kt)("br",null),"le_50_ms ",(0,r.kt)("br",null),"le_200_ms",(0,r.kt)("br",null),"le_500_ms ",(0,r.kt)("br",null),"le_overflow"),(0,r.kt)("td",{parentName:"tr",align:null},"topic,client_id,invocation_status")))),(0,r.kt)("h3",{id:"\u6d88\u8d39\u8005metrics\u6307\u6807"},"\u6d88\u8d39\u8005Metrics\u6307\u6807"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u6d88\u8d39\u8005\u76f8\u5173Metrics\u6307\u6807\u4e2dLabel\u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topic: \u6d88\u606f\u961f\u5217RocketMQ\u7684\u4e3b\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"consumer_group: \u6d88\u8d39\u8005\u5206\u7ec4ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"client_id: \u5ba2\u6237\u7aefID\u3002"),(0,r.kt)("li",{parentName:"ul"},"invocation_status: \u6d88\u8d39\u7ed3\u679c, \u679a\u4e3e\u503c\u5305\u542b success \u548c failure\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metrics\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_process_time"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"PushConsumer\u7684\u6d88\u606f\u5904\u7406\u8017\u65f6\u5206\u5e03\u60c5\u51b5.\u5206\u5e03\u533a\u95f4\u5982\u4e0b: ",(0,r.kt)("br",null),"le_1_ms ",(0,r.kt)("br",null),"le_5_ms \xa0",(0,r.kt)("br",null),"le_10_ms",(0,r.kt)("br",null),"le_100_ms ",(0,r.kt)("br",null),"le_10000_ms",(0,r.kt)("br",null),"le_60000_ms ",(0,r.kt)("br",null),"le_overflow"),(0,r.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id,invocation_status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_cached_messages"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"PushConsumer\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u6761\u6570\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_consumer_cached_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"PushConsumer\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u6d88\u606f\u7684\u603b\u5927\u5c0f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq_await_time"),(0,r.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5728PushConsumer\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6392\u961f\u65f6\u95f4\u7684\u5206\u5e03\u60c5\u51b5:",(0,r.kt)("br",null),"le_1_ms",(0,r.kt)("br",null)," le_5_ms",(0,r.kt)("br",null),"le_20_ms",(0,r.kt)("br",null),"le_100_ms ",(0,r.kt)("br",null),"le_1000_ms",(0,r.kt)("br",null)," le_5000_ms ",(0,r.kt)("br",null),"le_10000_ms",(0,r.kt)("br",null),"le_overflow"),(0,r.kt)("td",{parentName:"tr",align:null},"topic,consumer_group,client_id")))),(0,r.kt)("h2",{id:"\u6307\u6807\u4e1a\u52a1\u573a\u666f"},"\u6307\u6807\u4e1a\u52a1\u573a\u666f"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u4e3b\u8981\u57fa\u4e8e\u4ee5\u4e0b\u4e1a\u52a1\u573a\u666f\u5b9a\u4e49Metrics\u6307\u6807."),(0,r.kt)("h3",{id:"\u6d88\u606f\u5806\u79ef\u573a\u666f"},"\u6d88\u606f\u5806\u79ef\u573a\u666f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RocketMQ \u961f\u5217\u6d88\u606f\u72b6\u6001",src:l(46444).Z,width:"1213",height:"635"}),(0,r.kt)("br",null),"\u4e0a\u56fe\u8868\u793a\u6307\u5b9a\u4e3b\u9898\u7684\u67d0\u4e00\u961f\u5217\u4e2d\u5404\u6d88\u606f\u7684\u72b6\u6001\uff0c\u6d88\u606f\u961f\u5217RocketMQ\u7248\u5c06\u5904\u4e8e\u4e0d\u540c\u5904\u7406\u9636\u6bb5\u7684\u6d88\u606f\u6570\u91cf\u548c\u8017\u65f6\u8fdb\u884c\u7edf\u8ba1\uff0c\u8fd9\u4e9b\u6307\u6807\u53ef\u76f4\u63a5\u53cd\u6620\u961f\u5217\u4e2d\u6d88\u606f\u7684\u5904\u7406\u901f\u7387\u548c\u5806\u79ef\u60c5\u51b5\uff0c\u901a\u8fc7\u89c2\u5bdf\u8fd9\u4e9b\u6307\u6807\u53ef\u521d\u6b65\u5224\u65ad\u4e1a\u52a1\u7684\u6d88\u8d39\u662f\u5426\u5f02\u5e38\u3002\u5177\u4f53\u7684\u6307\u6807\u542b\u4e49\u548c\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ba1\u7b97\u516c\u5f0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e2d\u7684\u6d88\u606f\uff08inflight messages\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u6b63\u5728\u5904\u7406\uff0c\u4f46\u5ba2\u6237\u7aef\u8fd8\u672a\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u7684\u6d88\u606f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u665a\u4e00\u6761\u62c9\u53d6\u6d88\u606f\u7684\u4f4d\u70b9\uff0d\u6700\u665a\u4e00\u6761\u63d0\u4ea4\u6d88\u606f\u7684\u4f4d\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\uff08ready messages\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5728\u6d88\u606f\u961f\u5217RocketMQ\u7248\u670d\u52a1\u7aef\u5df2\u5c31\u7eea\uff0c\u5bf9\u6d88\u8d39\u8005\u53ef\u89c1\u53ef\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u6d88\u8d39\u4f4d\u70b9\uff0d\u6700\u665a\u4e00\u6761\u62c9\u53d6\u6d88\u606f\u7684\u4f4d\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u7684\u5c31\u7eea\u65f6\u95f4\uff08ready time\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u666e\u901a\u6d88\u606f\u3001\u987a\u5e8f\u6d88\u606f\uff1a\u6d88\u606f\u5b58\u50a8\u5230\u670d\u52a1\u7aef\u7684\u65f6\u95f4\u3002\xa0",(0,r.kt)("br",null)," \u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\uff1a\u6d88\u606f\u5b9a\u65f6\u6216\u5ef6\u65f6\u7ed3\u675f\u7684\u65f6\u95f4\u3002 ",(0,r.kt)("br",null)," \xa0\u4e8b\u52a1\u6d88\u606f\uff1a\u4e8b\u52a1\u63d0\u4ea4\u7684\u65f6\u95f4\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u5c31\u7eea\u6d88\u606f\u7684\u6392\u961f\u65f6\u95f4\uff08ready message queue time\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u65f6\u95f4\u53cd\u5e94\u6d88\u8d39\u8005\u62c9\u53d6\u6d88\u606f\u7684\u53ca\u65f6\u6027\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u65f6\u95f4\uff0d\u6700\u65e9\u4e00\u6761\u5c31\u7eea\u6d88\u606f\u7684\u5c31\u7eea\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u5904\u7406\u6ede\u540e\u65f6\u95f4\uff08consumer lag time\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u65f6\u95f4\u53cd\u5e94\u6d88\u8d39\u8005\u5b8c\u6210\u6d88\u606f\u5904\u7406\u7684\u53ca\u65f6\u6027\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u65f6\u95f4\uff0d\u6700\u65e9\u4e00\u6761\u672a\u63d0\u4ea4\u6d88\u606f\u7684\u5c31\u7eea\u65f6\u95f4")))),(0,r.kt)("h3",{id:"pushconsumer-\u6d88\u8d39\u573a\u666f"},"PushConsumer \u6d88\u8d39\u573a\u666f"),(0,r.kt)("p",null,"\u5728PushConsumer\u7c7b\u578b\u4e2d\uff0c\u6d88\u606f\u7684\u5b9e\u65f6\u5904\u7406\u80fd\u529b\u662f\u57fa\u4e8eSDK\u5185\u90e8\u7684\u5178\u578bReactor\u7ebf\u7a0b\u6a21\u578b\u5b9e\u73b0\u7684\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0cSDK\u5185\u7f6e\u4e86\u4e00\u4e2a\u957f\u8f6e\u8be2\u7ebf\u7a0b\uff0c\u5148\u5c06\u6d88\u606f\u5f02\u6b65\u62c9\u53d6\u5230SDK\u5185\u7f6e\u7684\u7f13\u5b58\u961f\u5217\u4e2d\uff0c\u518d\u5206\u522b\u63d0\u4ea4\u5230\u6d88\u8d39\u7ebf\u7a0b\u4e2d\uff0c\u89e6\u53d1\u76d1\u542c\u5668\u6267\u884c\u672c\u5730\u6d88\u8d39\u903b\u8f91\u3002",(0,r.kt)("br",null),(0,r.kt)("img",{alt:"PushConsumer client",src:l(84161).Z,width:"1392",height:"691"}),(0,r.kt)("br",null),"\u5728PushConsumer\u6d88\u8d39\u573a\u666f\u4e0b\uff0c\u672c\u5730\u7f13\u51b2\u961f\u5217\u76f8\u5173\u6307\u6807\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u91cf\uff1a\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u603b\u6761\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u6d88\u606f\u5927\u5c0f\uff1a\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u6240\u6709\u6d88\u606f\u5927\u5c0f\u7684\u603b\u548c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6d88\u606f\u7b49\u5f85\u5904\u7406\u65f6\u95f4\uff1a\u6d88\u606f\u6682\u5b58\u5728\u672c\u5730\u7f13\u51b2\u961f\u5217\u4e2d\u7684\u65f6\u95f4\u3002")))}s.isMDXComponent=!0},46444:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/message-accumulation-4edf6e541f775da11672dac6d795305f.png"},84161:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/pushconsumer-consumption-4910ceb35c5f21c6f74aa07fb3f79134.png"}}]);