(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{536:function(_,v,t){"use strict";t.r(v);var a=t(6),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"ddd-领域驱动设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddd-领域驱动设计"}},[_._v("#")]),_._v(" DDD 领域驱动设计")]),_._v(" "),t("h2",{attrs:{id:"_1-分布式微服务架构带来的好处和问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分布式微服务架构带来的好处和问题"}},[_._v("#")]),_._v(" 1.分布式微服务架构带来的好处和问题")]),_._v(" "),t("ul",[t("li",[_._v("好处：微服务架构可以很好地实现应用之间的解耦，解决单体应用扩展性和弹性伸缩能力不足的问题。分布式解决了在单机和集中式架构这两种模式下，软件无法快速响应需求和业务的迅速变化的问题。")]),_._v(" "),t("li",[_._v("问题：分布式微服务架构也带来了微服务设计和拆分的问题。过度拆分导致项目复杂过高，上线和运维都变得比较困难。")])]),_._v(" "),t("h2",{attrs:{id:"_2-ddd领域驱动设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-ddd领域驱动设计"}},[_._v("#")]),_._v(" 2.DDD领域驱动设计")]),_._v(" "),t("p",[_._v("可以利用 DDD 设计方法来建立领域模型，划分领域边界，再根据这些领域边界从业务视角来划分微服务边界。而按照 DDD 方法设计出的微服务的业务和应用边界都非常合理，可以很好地实现微服务内部和外部的“高内聚、低耦合”。于是越来越多的人开始把 DDD 作为微服务设计的指导思想。")]),_._v(" "),t("p",[_._v("DDD 是一种处理高度复杂领域的设计思想，它试图分离技术实现的复杂性，并围绕业务概念构建领域模型来控制业务的复杂性，以解决软件难以理解，难以演进的问题。DDD 不是架构，而是一种架构设计方法论，它通过边界划分将复杂业务领域简单化，帮我们设计出清晰的领域和应用边界，可以很容易地实现架构演进。")]),_._v(" "),t("p",[_._v("DDD 包括战略设计和战术设计两部分。战略设计主要从业务视角出发，建立业务领域模型，划分领域边界，建立通用语言的限界上下文，限界上下文可以作为微服务设计的参考边界。战术设计则从技术视角出发，侧重于领域模型的技术实现，完成软件开发和落地，包括：聚合根、实体、值对象、领域服务、应用服务和资源库等代码逻辑的设计和实现。")]),_._v(" "),t("h2",{attrs:{id:"_3-领域驱动设计核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-领域驱动设计核心概念"}},[_._v("#")]),_._v(" 3.领域驱动设计核心概念")]),_._v(" "),t("p",[_._v("DDD 的核心知识体系，具体包括：领域、子域、核心域、通用域、支撑域、限界上下文、实体、值对象、聚合和聚合根等概念。我会用浅显易懂的案例带你理解它们以及它们之间的合作、依赖关系。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/aaronTang98/image_store/blog/dc32e8e4a317fe00121ce18adc407c66.jpg",alt:"img"}})]),_._v(" "),t("p",[_._v("领域：在研究和解决业务问题时，DDD 会按照一定的规则将业务领域进行细分，当领域细分到一定的程度后，DDD 会将问题范围限定在特定的边界内，在这个边界内建立领域模型，进而用代码实现该领域模型，解决相应的业务问题。简言之，DDD 的领域就是这个边界内要解决的业务问题域。")]),_._v(" "),t("p",[_._v("子域：领域可以进一步划分为子领域。我们把划分出来的多个子领域称为子域，每个子域对应一个更小的问题域或更小的业务范围。")]),_._v(" "),t("p",[_._v("核心域：决定产品和公司核心竞争力的子域是核心域，它是业务成功的主要因素和公司的核心竞争力。")]),_._v(" "),t("p",[_._v("通用域：没有太多个性化的诉求，同时被多个子域使用的通用功能子域是通用域。")]),_._v(" "),t("p",[_._v("支撑域：还有一种功能子域是必需的，但既不包含决定产品和公司核心竞争力的功能，也不包含通用功能的子域，它就是支撑域。")]),_._v(" "),t("p",[_._v("限界上下文：限界和上下文。限界就是领域的边界，而上下文则是语义环境。通过领域的限界上下文，我们就可以在统一的领域边界内用统一的语言进行交流。综合一下，我认为限界上下文的定义就是：用来封装通用语言和领域对象，提供上下文环境，保证在领域之内的一些术语、业务相关对象等（通用语言）有一个确切的含义，没有二义性。这个边界定义了模型的适用范围，使团队所有成员能够明确地知道什么应该在模型中实现，什么不应该在模型中实现。")]),_._v(" "),t("p",[_._v("每个领域模型都有它对应的限界上下文，团队在限界上下文内用通用语言交流。领域内所有限界上下文的领域模型构成整个领域的领域模型。理论上限界上下文就是微服务的边界。我们将限界上下文内的领域模型映射到微服务，就完成了从问题域到软件的解决方案。可以说，限界上下文是微服务设计和拆分的主要依据。在领域模型中，如果不考虑技术异构、团队沟通等其它外部因素，一个限界上下文理论上就可以设计为一个微服务。")]),_._v(" "),t("p",[_._v("补充：")]),_._v(" "),t("p",[_._v("一、限界上下文的作用\n1、主要是为了消除通用语言在不同领域中的歧义或者说是限制通用语言的使用范围。\n2、是划分领域的重要依据\n3、通用语言必须与限界上下文配合使用才有意义")]),_._v(" "),t("p",[_._v("二、限界上下文可以作为微服务拆分的重要依据")]),_._v(" "),t("h2",{attrs:{id:"_4-怎样设计聚合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-怎样设计聚合"}},[_._v("#")]),_._v(" 4.怎样设计聚合")]),_._v(" "),t("h3",{attrs:{id:"_4-1-聚合的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-聚合的方法"}},[_._v("#")]),_._v(" 4.1 聚合的方法")]),_._v(" "),t("ul",[t("li",[_._v("第 1 步：采用事件风暴，根据业务行为，梳理出在投保过程中发生这些行为的所有的实体和值对象，比如投保单、标的、客户、被保人等等。")]),_._v(" "),t("li",[_._v("第 2 步：从众多实体中选出适合作为对象管理者的根实体，也就是聚合根。判断一个实体是否是聚合根，你可以结合以下场景分析：是否有独立的生命周期？是否有全局唯一 ID？是否可以创建或修改其它对象？是否有专门的模块来管这个实体。图中的聚合根分别是投保单和客户实体。")]),_._v(" "),t("li",[_._v("第 3 步：根据业务单一职责和高内聚原则，找出与聚合根关联的所有紧密依赖的实体和值对象。构建出 1 个包含聚合根（唯一）、多个实体和值对象的对象集合，这个集合就是聚合。在图中我们构建了客户和投保这两个聚合。")]),_._v(" "),t("li",[_._v("第 4 步：在聚合内根据聚合根、实体和值对象的依赖关系，画出对象的引用和依赖模型。这里我需要说明一下：投保人和被保人的数据，是通过关联客户 ID 从客户聚合中获取的，在投保聚合里它们是投保单的值对象，这些值对象的数据是客户的冗余数据，即使未来客户聚合的数据发生了变更，也不会影响投保单的值对象数据。从图中我们还可以看出实体之间的引用关系，比如在投保聚合里投保单聚合根引用了报价单实体，报价单实体则引用了报价规则子实体。")]),_._v(" "),t("li",[_._v("第 5 步：多个聚合根据业务语义和上下文一起划分到同一个限界上下文内。这就是一个聚合诞生的完整过程了。")])]),_._v(" "),t("h3",{attrs:{id:"_4-2-聚合的设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-聚合的设计原则"}},[_._v("#")]),_._v(" 4.2 聚合的设计原则")]),_._v(" "),t("p",[_._v("聚合的一些设计原则我们不妨先看一下《实现领域驱动设计》一书中对聚合设计原则的描述，原文是有点不太好理解的，我来给你解释一下。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[_._v("1. 在一致性边界内建模真正的不变条件。聚合用来封装真正的不变性，而不是简单地将对象组合在一起。聚合内有一套不变的业务规则，各实体和值对象按照统一的业务规则运行，实现对象数据的一致性，边界之外的任何东西都与该聚合无关，这就是聚合能实现业务高内聚的原因。\n2.  设计小聚合。如果聚合设计得过大，聚合会因为包含过多的实体，导致实体之间的管理过于复杂，高频操作时会出现并发冲突或者数据库锁，最终导致系统可用性变差。而小聚合设计则可以降低由于业务过大导致聚合重构的可能性，让领域模型更能适应业务的变化。\n3. 通过唯一标识引用其它聚合。聚合之间是通过关联外部聚合根 ID 的方式引用，而不是直接对象引用的方式。外部聚合的对象放在聚合边界内管理，容易导致聚合的边界不清晰，也会增加聚合之间的耦合度。\n4. 在边界之外使用最终一致性。聚合内数据强一致性，而聚合之间数据最终一致性。在一次事务中，最多只能更改一个聚合的状态。如果一次业务操作涉及多个聚合状态的更改，应采用领域事件的方式异步修改相关的聚合，实现聚合之间的解耦（相关内容我会在领域事件部分详解）。\n5.  通过应用层实现跨聚合的服务调用。为实现微服务内聚合之间的解耦，以及未来以聚合为单位的微服务组合和拆分，应避免跨聚合的领域服务调用和跨聚合的数据库表关联。\n")])])]),t("p",[_._v("上面的这些原则是 DDD 的一些通用的设计原则，还是那句话：“适合自己的才是最好的。”在系统设计过程时，你一定要考虑项目的具体情况，如果面临使用的便利性、高性能要求、技术能力缺失和全局事务管理等影响因素，这些原则也并不是不能突破的，总之一切以解决实际问题为出发点。")]),_._v(" "),t("h3",{attrs:{id:"_4-3-聚合的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-聚合的特点"}},[_._v("#")]),_._v(" 4.3 聚合的特点")]),_._v(" "),t("ul",[t("li",[_._v("聚合的特点："),t("strong",[_._v("高内聚")]),_._v("、"),t("strong",[_._v("低耦合")]),_._v("，它是领域模型中最底层的边界，可以作为"),t("strong",[_._v("拆分微服务的最小单位")]),_._v("，但我不建议你对微服务过度拆分。但在对性能有极致要求的场景中，聚合可以独立作为一个微服务，以满足版本的高频发布和极致的弹性伸缩能力。一个微服务可以包含多个聚合，聚合之间的边界是微服务内天然的逻辑边界。有了这个逻辑边界，在微服务架构演进时就可以以聚合为单位进行拆分和组合了，微服务的架构演进也就不再是一件难事了。")]),_._v(" "),t("li",[_._v("聚合根的特点：聚合根是实体，有实体的特点，"),t("strong",[_._v("具有全局唯一标识")]),_._v("，有独立的生命周期。一个聚合只有一个聚合根，聚合根在聚合内对实体和值对象采用直接对象引用的方式进行组织和协调，聚合根与聚合根之间通过 ID 关联的方式实现聚合之间的协同。实体的特点：有 ID 标识，通过 ID 判断相等性，ID 在聚合内唯一即可。状态可变，它依附于聚合根，其生命周期由聚合根管理。实体一般会持久化，但与数据库持久化对象不一定是一对一的关系。")]),_._v(" "),t("li",[_._v("实体可以引用聚合内的聚合根、实体和值对象。")]),_._v(" "),t("li",[_._v("值对象的特点：无 ID，不可变，无生命周期，用完即扔。值对象之间通过属性值判断相等性。它的核心本质是值，是一组概念完整的属性组成的集合，用于描述实体的状态和特征。值对象尽量只引用值对象。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);