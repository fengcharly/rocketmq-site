"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),n=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=n(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=n(r),m=s,k=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:s,o[1]=l;for(var n=2;n<i;n++)o[n]=r[n];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>n});var a=r(87462),s=(r(67294),r(3905));const i={title:"Release Notes - Apache RocketMQ - Version 5.0.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},o=void 0,l={permalink:"/release-notes/2022/09/09/5.0.0",source:"@site/release-notes/2022-09-09-5.0.0.md",title:"Release Notes - Apache RocketMQ - Version 5.0.0",description:"- Source: rocketmq-all-5.0.0-source-release.zip [PGP] [SHA512]",date:"2022-09-09T00:00:00.000Z",formattedDate:"September 9, 2022",tags:[{label:"Release_Notes",permalink:"/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/release-notes/tags/version"}],readingTime:3.9,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 5.0.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Schema Registry - Version 0.1.0",permalink:"/release-notes/2022/10/17/release-notes-rocketmq-schema-registry-all-0.1.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",permalink:"/release-notes/2022/07/25/release-notes-rocketmq-client-go-2.1.1"}},c={authorsImageUrls:[]},n=[{value:"Feature",id:"feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],u={toc:n};function h(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Download the 5.0.0 release",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Source: ",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip"},"rocketmq-all-5.0.0-source-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip.sha512"},"SHA512"),"]"),(0,s.kt)("li",{parentName:"ul"},"Binary: ",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-bin-release.zip"},"rocketmq-all-5.0.0-bin-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/5.0.0/rocketmq-all-5.0.0-bin-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/5.0.0/rocketmq-all-5.0.0-bin-release.zip.sha512"},"SHA512"),"]"))),(0,s.kt)("p",null,"Below is a summary of the issues addressed in the 5.0.0 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,s.kt)("a",{href:"/docs/quickStart/02quickstart/"},"Quick Start"),"."),(0,s.kt)("h2",{id:"feature"},"Feature"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/%5BRIP-19%5D-Server-side-rebalance,--lightweight-consumer-client-support"},"RIP-19"),"] -  Server side rebalance, lightweight consumer client support."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-21-logical-queue-abstraction-for-static-topic-and-fast-scale-out"},"RIP-21"),"] -  Logical queue abstraction for fast scale out."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-26-Improve-Batch-Message-Processing-Throughput"},"RIP-26"),"] - Improve Batch Message Processing Throughput."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-31-Support-RocketMQ-BrokerContainer"},"RIP-31"),"] - RIP-31-Support-RocketMQ-BrokerContainer."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-32-Slave-Acting-Master-Mode"},"RIP-32"),"] - Slave Acting Master Mode."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-34-Support-quorum-write-and-adaptive-degradation-in-master-slave-architecture"},"RIP-34"),"] - Support quorum write and adaptive degradation in master slave architecture."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://shimo.im/docs/gXqmeEPYgdUw5bqo"},"RIP-39"),"] - Support gRPC protocol."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://shimo.im/docs/gXqme9PKKpIeD7qo/read"},"RIP-43"),"] - Support timing messages with arbitrary time delay."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-44-Support-DLedger-Controller"},"RIP-44"),"] - Support DLedger Controller.")),(0,s.kt)("h2",{id:"improvement"},"Improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4993"},"ISSUE-4993"),"] - [ISSUE-4993] - Polish the documents for mq Dledger Quick Deployment"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4982"},"ISSUE-4982"),"] - [ISSUE-4982] - Remove useless import in proxy module"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4487"},"ISSUE-4487"),"] - [ISSUE-4487] - The trackType is wrong when the consumer in broadcasting subscription"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5001"},"ISSUE-5001"),"] - [ISSUE-5001] - Sort the property when persist config."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4968"},"ISSUE-4968"),"] - [ISSUE-4968] - Add windows/macos into build matrix"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4964"},"ISSUE-4964"),"] - [ISSUE-4964] - Remove Unnecessary Imports"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4955"},"ISSUE-4955"),"] - [ISSUE-4955] - validate userProperties contain control character or not"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4953"},"ISSUE-4953"),"] - [ISSUE-4953] - return INVALID_RECEIPT_HANDLE when cannot find the broker of handle"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4936"},"ISSUE-4936"),"] - [ISSUE-4936] - Remove useless log output after the master and slave broker are started on the empty disk in controller mode"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4934"},"ISSUE-4934"),"] - [ISSUE-4934] - Checking for violations as part of build"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4374"},"ISSUE-4374"),"] - [ISSUE-4374] - Replace findbugs by spotbugs and make it applied during compile"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4911"},"ISSUE-4911"),"] - [ISSUE-4911] - Make all admin command descriptions begin with capital letters"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4904"},"ISSUE-4904"),"] - [ISSUE-4904] - Optimize store module test cases to reduce execution time"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4897"},"ISSUE-4897"),"] - [ISSUE-4897] - Increase the retry interval of registration failure to prevent frequent log output"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4879"},"ISSUE-4879"),"] - [ISSUE-4879] - Enable GitHub Action dependency caching for coverage"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4870"},"ISSUE-4870"),"] - [ISSUE-4870] - Enhance the mergeability: add status checker about the protected branch"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4855"},"ISSUE-4855"),"] - [ISSUE-4855] - Add example of timing messages with arbitrary time delay"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4832"},"ISSUE-4832"),"] - [ISSUE-4832] - Remove innerProducer and innerConsumer in EscapeBridge"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4817"},"ISSUE-4817"),"] - [ISSUE-4817] - Add a command to clear broker data from controller for CLI"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4821"},"ISSUE-4821"),"] - [ISSUE-4821] - Add some integration tests for POP consumption in slave-acting-master mode"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4810"},"ISSUE-4810"),"] - [ISSUE-4810] - Correction of spelling mistakes in TimerMessageStore"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4785"},"ISSUE-4785"),"] - [ISSUE-4785] - Enable misspell check GitHub Action"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3998"},"ISSUE-3998"),"] - [ISSUE-3998] - Enable Github Action for CI Build"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4776"},"ISSUE-4776"),"] - [ISSUE-4776] - Support tag in litepullconsumer assign mode"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4755"},"ISSUE-4755"),"] - [ISSUE-4755] - Some improvement about branch management"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4725"},"ISSUE-4725"),"] - [ISSUE-4725] - Optimize the CK/ACK 's invisibleTime in POP consumption mode."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4746"},"ISSUE-4746"),"] - [ISSUE-4746] - add controller stand-alone and cluster 3 nodes config file"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4732"},"ISSUE-4732"),"] - [ISSUE-4732] - Make new timer message can adapt to HA and brokerContainer"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4167"},"ISSUE-4167"),"] - [ISSUE-4167] - Add unit test (EscapeBridgeTest\u3001FilterServerManagerTest\u3001PullRequestHoldServiceTest )"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4167"},"ISSUE-4167"),"] - [ISSUE-4167] - Add unit test"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4677"},"ISSUE-4677"),"] - [ISSUE-4677] - Optimize information when the variable is not set"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4670"},"ISSUE-4670"),"] - [ISSUE-4670] - Modify the package path and fix typo"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4650"},"ISSUE-4650"),"] - [ISSUE-4650] - Admin tool sendMsgStatus add more description"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4579"},"ISSUE-4579"),"] - [ISSUE-4579] - Add unit test"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4576"},"ISSUE-4576"),"] - [ISSUE-4576] - Upgrade dledger version to 0.2.7"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4568"},"ISSUE-4568"),"] - [ISSUE-4568] - Improve performance of consume queue")),(0,s.kt)("h2",{id:"bug"},"Bug"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4995"},"ISSUE-4995"),"] - [ISSUE-4995] - Fix test case:BrokerPathConfigHelperTest#testGetLmqConsumerOffsetPath"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/5002"},"ISSUE-5002"),"] - [ISSUE-5002] - Fix code style in any net modules."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4987"},"ISSUE-4987"),"] - [ISSUE-4987] - fix test case:PlainAccessValidatorTest#testUpdateSpecifiedAclFileGlobalWhiteAddrsConfig"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4985"},"ISSUE-4985"),"] - [ISSUE-4985] - Fix TimerMetrics#persist tmpFile can't rename to configFile"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4979"},"ISSUE-4979"),"] - [ISSUE-4979] - Fix flaky integration test NormalMessageSendAndRecvIT"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4977"},"ISSUE-4977"),"] - [ISSUE-4977] - Fix BrokerOuterAPITest#test_register_timeout"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4972"},"ISSUE-4972"),"] - [ISSUE-4972] - Fix DefaultLitePullConsumerTest#testConsumerCommitSyncWithMQOffset"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4920"},"ISSUE-4920"),"] - [ISSUE-4920] - Fix comment word typo"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4841"},"ISSUE-4841"),"] - [ISSUE-4841] - Fix the reply message is the original request msg."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4894"},"ISSUE-4894"),"] - [ISSUE-4894] - Fix NPE in CommandUtil"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4889"},"ISSUE-4889"),"] - [ISSUE-4889] - Fix controller test:DLedgerControllerTest#testChangeControllerLeader"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4842"},"ISSUE-4842"),"] - [ISSUE-4842] - fix thread-safety problem of admin tools"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4734"},"ISSUE-4734"),"] - [ISSUE-4734] - Fix DLedgerController startScheduling concurrency problem"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4628"},"ISSUE-4628"),"] - [ISSUE-4628] - Fix bug in LMQ when checking multiple Dispatch Queue"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4579"},"ISSUE-4579"),"] - [ISSUE-4579] - Fix ACL information update failed bugs"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4522"},"ISSUE-4522"),"] - [ISSUE-4522] - Fix topic route info not found in some case"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4507"},"ISSUE-4507"),"] - [ISSUE-4507] - fix message trace throws exception #4507"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4501"},"ISSUE-4501"),"] - [ISSUE-4501] - fix Namesrv auto discovery not work")))}h.isMDXComponent=!0}}]);