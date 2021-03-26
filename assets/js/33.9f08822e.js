(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{539:function(e,r,t){"use strict";t.r(r);var n=t(6),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"一、安装介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装介绍"}},[e._v("#")]),e._v(" 一、安装介绍")]),e._v(" "),t("p",[e._v("本节整体概述了 Rancher 各种安装方式，并介绍了每个选项的优点。")]),e._v(" "),t("h2",{attrs:{id:"_1-名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-名词解释"}},[e._v("#")]),e._v(" 1.名词解释")]),e._v(" "),t("p",[e._v("在这个部分的主要涉及的名词如下：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Rancher Server：")]),e._v(" 是用于管理和配置 Kubernetes 集群。您可以通过 Rancher Server 的 UI 与下游 Kubernetes 集群进行交互。")]),e._v(" "),t("li",[e._v("**RKE（Rancher Kubernetes Engine)：**是经过认证的 Kubernetes 发行版，它拥有对应的 CLI 工具可用于创建和管理 Kubernetes 集群。在 Rancher UI 中创建集群时，它将调用 RKE 来配置 Rancher 启动的 Kubernetes 集群。")]),e._v(" "),t("li",[t("strong",[e._v("K3s (轻量级 Kubernetes)：")]),e._v(" 和 RKE 类似，也是经过认证的 Kubernetes 发行版。它比 RKE 更新，更易用且更轻量化，全部组件都在一个小于 100 MB 的二进制文件中。从 Rancher v2.4 开始，Rancher 可以安装在 K3s 集群上。")]),e._v(" "),t("li",[t("strong",[e._v("RKE2")]),e._v("是一个完全合规的 Kubernetes 发行版，专注于美国联邦政府部门的安全和合规性。")]),e._v(" "),t("li",[t("strong",[e._v("RancherD")]),e._v("是安装 Rancher 的新工具，从 Rancher v2.5.4 开始提供。它是一个实验性功能。RancherD 是一个二进制文件，它首先启动一个 RKE2 Kubernetes 集群，然后在集群上安装 Rancher 服务器 Helm 图。")])]),e._v(" "),t("h2",{attrs:{id:"_2-安装选项概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装选项概述"}},[e._v("#")]),e._v(" 2.安装选项概述")]),e._v(" "),t("p",[e._v("Rancher 的部署可以有三种架构：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("使用 Helm CLI 进行高可用 Kubernetes 安装、")])]),e._v(" "),t("li",[t("p",[e._v("使用 RancherD 进行高可用 Kubernetes 安装")])]),e._v(" "),t("li",[t("p",[e._v("使用 Kubernetes 进行单节点安装")])])]),e._v(" "),t("h3",{attrs:{id:"_2-1使用-helm-cli-进行高可用-kubernetes-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1使用-helm-cli-进行高可用-kubernetes-安装"}},[e._v("#")]),e._v(" 2.1使用 Helm CLI 进行高可用 Kubernetes 安装")]),e._v(" "),t("p",[e._v("我们建议使用 Kubernetes 程序包管理器 "),t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/overview/concepts/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm"),t("OutboundLink")],1),e._v(" 在专用的 Kubernetes 集群上安装 Rancher。在 RKE 集群中，需要使用三个节点以实现高可用性。在 K3s 集群中，仅需要两个节点即可。")]),e._v(" "),t("h3",{attrs:{id:"_2-2使用-rancherd-进行高可用-kubernetes-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2使用-rancherd-进行高可用-kubernetes-安装"}},[e._v("#")]),e._v(" 2.2使用 RancherD 进行高可用 Kubernetes 安装")]),e._v(" "),t("p",[t("em",[e._v("从 v2.5.4 开始提供")])]),e._v(" "),t("p",[e._v("RancherD 是一个的二进制文件，它首先启动一个 RKE2 Kubernetes 集群，然后在集群上安装 Rancher 服务器的 Helm Chart。这是一个实验性的功能。在 RancherD 安装和 Helm CLI 安装中，Rancher 都是作为 Helm 图安装在 Kubernetes 集群上。使用 RancherD 也简化了配置和升级。当您升级 RancherD 二进制时，Kubernetes 集群和 Rancher Helm Chart 都会升级。")]),e._v(" "),t("h3",{attrs:{id:"_2-3使用-kubernetes-进行单节点安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3使用-kubernetes-进行单节点安装"}},[e._v("#")]),e._v(" 2.3使用 Kubernetes 进行单节点安装")]),e._v(" "),t("p",[e._v("另一个选择是在 Kubernetes 集群上使用 Helm 安装 Rancher，仅在集群中使用单个节点。虽然在这种情况下的 Rancher Server 不具有高可用性，但是这种架构既节省了资源，又保留了可扩展性。如果您想在短期内通过使用单个节点来节省资源，同时又保留高可用性迁移路径，最合适的架构就是单节点 Kubernetes 安装。")]),e._v(" "),t("p",[e._v("关于在私有环境中或 HTTP 代理后面安装 Rancher，我们有单独的说明文档：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("网络访问水平")]),e._v(" "),t("th",[e._v("基于 Kubernetes 安装（推荐）")]),e._v(" "),t("th",[e._v("基于 Docker 安装")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("可直接访问 Internet")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/install-rancher-on-k8s/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("高可用安装文档"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/single-node-docker/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("依托 HTTP 代理")]),e._v(" "),t("td",[e._v("基于"),t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/install-rancher-on-k8s/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("此文档"),t("OutboundLink")],1),e._v("，并附加"),t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/resources/chart-options/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("相关配置"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("基于"),t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/single-node-docker/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("此文档"),t("OutboundLink")],1),e._v("，并附加"),t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/single-node-docker/proxy/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("相关配置"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("私有网络环境")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/air-gap/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/air-gap/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),t("OutboundLink")],1)])])])]),e._v(" "),t("h3",{attrs:{id:"_2-4高可用安装文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4高可用安装文档"}},[e._v("#")]),e._v(" 2.4高可用安装文档")]),e._v(" "),t("h2",{attrs:{id:"先决条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[e._v("#")]),e._v(" 先决条件")]),e._v(" "),t("p",[e._v("设置 Rancher 服务器的本地 Kubernetes 集群。")]),e._v(" "),t("p",[e._v("集群要求取决于 Rancher 版本。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("从 Rancher v2.5 开始，")]),e._v(" "),t("p",[e._v("Rancher 可以安装在任何 Kubernetes 集群上。这个集群可以使用上游 Kubernetes，也可以使用 Rancher 的 Kubernetes 发行版之一，也可以是来自 Amazon EKS 等提供商的托管 Kubernetes 集群。")]),e._v(" "),t("blockquote",[t("p",[e._v("**注意：**要在托管的 Kubernetes 集群（如 EKS、GKE 或 AKS）上部署 Rancher v2.5，应该先部署一个兼容的 Ingress 控制器来配置"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/install-rancher-on-k8s/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rancher 上的 SSL 终止。"),t("OutboundLink")],1),e._v("。")])])]),e._v(" "),t("li",[t("p",[e._v("在 Rancher v2.4.x 中，Rancher 需要安装在 K3s Kubernetes 集群或 RKE Kubernetes 集群上。")])]),e._v(" "),t("li",[t("p",[e._v("在 Rancher v2.4 之前，Rancher 需要安装在 RKE Kubernetes 集群上。")])])]),e._v(" "),t("p",[e._v("有关安装 RKE Kubernetes 集群的教程，请参考"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/resources/k8s-tutorials/ha-rke/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("本页"),t("OutboundLink")],1),e._v("有关为高可用性 RKE 集群设置基础设施的帮助，请参考"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/resources/k8s-tutorials/infrastructure-tutorials/infra-for-ha/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("本页"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("安装 K3s Kubernetes 集群的教程，请参考"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/resources/k8s-tutorials/ha-with-external-db/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("本页面"),t("OutboundLink")],1),e._v(" 如需帮助设置高可用性 K3s 集群的基础架构，请参考"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/resources/k8s-tutorials/infrastructure-tutorials/infra-for-ha-with-external-db/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("本页"),t("OutboundLink")],1)]),e._v(" "),t("h1",{attrs:{id:"二、安装要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装要求"}},[e._v("#")]),e._v(" 二、安装要求")]),e._v(" "),t("h2",{attrs:{id:"_2-1-操作系统和docker-版本要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-操作系统和docker-版本要求"}},[e._v("#")]),e._v(" 2.1.操作系统和docker 版本要求")]),e._v(" "),t("p",[e._v("对于将运行 K3s 或 RKE Kubernetes 集群的节点，需要使用 Docker。对于 RancherD 安装来说，Docker 不是必需的。")]),e._v(" "),t("p",[e._v("Rancher 需要安装在支持的 Kubernetes 版本上。要了解你的 Rancher 版本支持哪些 Kubernetes 版本，请参考"),t("a",{attrs:{href:"https://rancher.com/support-maintenance-terms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("所有受支持的操作系统都是 64-bit x86。")]),e._v(" "),t("p",[e._v("我们建议安装 "),t("code",[e._v("ntp")]),e._v(" (Network Time Protocol)，这样可以防止在客户端和服务器之间因为时钟不同步而发生证书验证错误。")]),e._v(" "),t("p",[e._v("一些 Linux 发行版可能有默认的防火墙规则。这些规则可能会屏蔽掉 Helm 的通信。这个"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/resources/advanced/firewall/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("操作指南"),t("OutboundLink")],1),e._v("展示了如何检查 Oracle Linux 的默认防火墙规则，以及在必要时如何使用"),t("code",[e._v("firewalld")]),e._v("开放端口。")]),e._v(" "),t("p",[e._v("如果计划在 ARM64 上运行 Rancher，请参阅"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/resources/advanced/arm64-platform/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("在 ARM64 上运行（实验性）"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"_2-1-1-rke-要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-rke-要求"}},[e._v("#")]),e._v(" 2.1.1.RKE 要求")]),e._v(" "),t("p",[e._v("RKE 可以兼容当前的所有 Docker 版本。")]),e._v(" "),t("h3",{attrs:{id:"_2-1-2-k3s要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-k3s要求"}},[e._v("#")]),e._v(" 2.1.2.K3S要求")]),e._v(" "),t("p",[e._v("K3s 兼容当前的所有 Docker 版本或 containerd。")]),e._v(" "),t("p",[e._v("Rancher 需要安装在受支持的 Kubernetes 版本上。要了解您的 Rancher 版本支持哪些版本的 Kubernetes，请参考"),t("a",{attrs:{href:"https://rancher.com/support-maintenance-terms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("支持维护条款"),t("OutboundLink")],1),e._v("。要指定 K3s 版本，请在运行 K3s 安装脚本时使用 INSTALL_K3S_VERSION 环境变量。")]),e._v(" "),t("p",[e._v("如果您在使用 Raspbian Buster 的 K3s 集群上安装 Rancher，请按照"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/k3s/advanced/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("这些步骤"),t("OutboundLink")],1),e._v("切换到传统的 iptables。")]),e._v(" "),t("p",[e._v("如果您在使用 Alpine Linux 的 K3s 集群上安装 Rancher，请按照"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/k3s/advanced/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("这些步骤"),t("OutboundLink")],1),e._v("]进行额外的设置。")]),e._v(" "),t("h3",{attrs:{id:"_2-1-3-rancherd-要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-rancherd-要求"}},[e._v("#")]),e._v(" 2.1.3.RancherD 要求")]),e._v(" "),t("p",[e._v("RancherD 安装从 v2.5.4 开始可用。这是一个实验性功能。")]),e._v(" "),t("p",[e._v("目前，只支持利用 systemd 的 Linux 操作系统。")]),e._v(" "),t("p",[e._v("RancherD 安装时不需要 Docker。")]),e._v(" "),t("p",[e._v("要在 SELinux Enforcing CentOS 8 或 RHEL 8 节点上安装 RancherD，需要一些额外的步骤。")]),e._v(" "),t("h2",{attrs:{id:"_2-2-安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装-docker"}},[e._v("#")]),e._v(" 2.2.安装 Docker")]),e._v(" "),t("p",[e._v("您可以按照"),t("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 官方文档"),t("OutboundLink")],1),e._v("中的步骤安装 Docker。Rancher 也提供了使用命令安装 Docker 的"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/requirements/installing-docker/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("脚本"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("对于 Helm CLI 安装，需要在运行 Rancher 服务器的任何节点上安装 Docker。")]),e._v(" "),t("p",[e._v("有两种安装 Docker 的选择。一种选择是参考"),t("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方 Docker 文档"),t("OutboundLink")],1),e._v("来了解如何在 Linux 上安装 Docker。这些安装步骤将根据 Linux 发行版而有所不同。")]),e._v(" "),t("p",[e._v("另一种选择是使用 Rancher 提供的 Docker 安装脚本，该脚本可用于安装较新的 Docker 版本。")]),e._v(" "),t("p",[e._v("例如，此命令可用于在 Ubuntu 上安装 Docker 19.03：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl https://releases.rancher.com/install-docker/19.03.sh | sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Rancher 为 Kubernetes 支持的每个上游 Docker 版本都有安装脚本。要想知道是否有安装某个 Docker 版本的脚本，可以参考这个"),t("a",{attrs:{href:"https://github.com/rancher/install-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub 仓库"),t("OutboundLink")],1),e._v("，其中包含了 Rancher 所有的 Docker 安装脚本。")]),e._v(" "),t("h2",{attrs:{id:"_2-3-端口要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-端口要求"}},[e._v("#")]),e._v(" 2.3. 端口要求")]),e._v(" "),t("p",[e._v("为了保证正常运行，Rancher 要求在 Rancher 节点和下游 Kubernetes 集群节点上开放一些端口。")]),e._v(" "),t("p",[e._v("Rancher 节点")]),e._v(" "),t("p",[e._v("下表列出了运行 Rancher Server 的节点之间需要开放的端口。")]),e._v(" "),t("p",[e._v("端口要求因 Rancher 是安装在 K3s Kubernetes 集群，RKE Kubernetes 集群还是单个 Docker 容器中而有所不同。")]),e._v(" "),t("ul",[t("li",[e._v("K3s")]),e._v(" "),t("li",[e._v("RKE")]),e._v(" "),t("li",[e._v("Docker")]),e._v(" "),t("li",[e._v("RancherD")])]),e._v(" "),t("p",[e._v("K3s Server 需要开放 6443 端口供节点访问。")]),e._v(" "),t("p",[e._v("使用 Flannel VXLAN 时，这些节点需要能够通过 UDP 端口 8472 访问其他节点。节点不应侦听其他端口。K3s 使用反向隧道，建立节点与服务器的出站连接，所有 kubelet 通信都通过该隧道进行。但是，如果您不使用 Flannel，而是使用自定义的 CNI，则 K3s 不需要 8472 端口。")]),e._v(" "),t("p",[e._v("如果要使用指标服务器（Metrics Server），则需要在每个节点上开放端口 10250。")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("重要：")]),e._v(" 节点上的 VXLAN 端口不应暴露给外界，因为这会开放集群网络，任何人都可以访问它。请在禁止访问 8472 端口的防火墙/安全组后面运行节点。")])]),e._v(" "),t("p",[e._v("Rancher Server 节点的入站规则")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("协议")]),e._v(" "),t("th",[e._v("端口")]),e._v(" "),t("th",[e._v("源")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("TCP")]),e._v(" "),t("td",[e._v("6443")]),e._v(" "),t("td",[e._v("K3s server 节点")]),e._v(" "),t("td",[e._v("Kubernetes API")])]),e._v(" "),t("tr",[t("td",[e._v("UDP")]),e._v(" "),t("td",[e._v("8472")]),e._v(" "),t("td",[e._v("K3s server 和 agent 节点")]),e._v(" "),t("td",[e._v("Flannel VXLAN 需要")])]),e._v(" "),t("tr",[t("td",[e._v("TCP")]),e._v(" "),t("td",[e._v("10250")]),e._v(" "),t("td",[e._v("K3s server 和 agent 节点")]),e._v(" "),t("td",[e._v("kubelet")])])])]),e._v(" "),t("p",[e._v("通常情况下，可以允许全部出站流量。")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("注意：")])]),e._v(" "),t("ul",[t("li",[e._v("如果您配置了的外部"),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/admin-settings/authentication/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("身份验证系统"),t("OutboundLink")],1),e._v("（例如 LDAP），Rancher 节点可能还需要其他出站规则。")]),e._v(" "),t("li",[e._v("Kubernetes 建议将 TCP 30000-32767 用于节点端口服务（NodePort svc）。")]),e._v(" "),t("li",[e._v("可能需要对防火墙进行配置，启用在集群和 Pod CIDR 中的流量。")])])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("从 / 到")]),e._v(" "),t("th",[e._v("Rancher 节点")]),e._v(" "),t("th",[e._v("etcd 节点")]),e._v(" "),t("th",[e._v("Control Plane 节点")]),e._v(" "),t("th",[e._v("Worker 节点")]),e._v(" "),t("th",[e._v("外部负载均衡")]),e._v(" "),t("th",[e._v("互联网")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Rancher 节点 (1)")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("22 TCP")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("git.rancher.io (2): 35.160.43.145:32 35.167.242.46:32 52.33.59.17:32")]),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",[e._v("2376 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("etcd 节点")]),e._v(" "),t("td",[e._v("443 TCP (3)")]),e._v(" "),t("td",[e._v("2379 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("443 TCP")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("2380 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",[e._v("6443 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("8472 UDP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("9099 TCP (4)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Control Plane 节点")]),e._v(" "),t("td",[e._v("443 TCP (3)")]),e._v(" "),t("td",[e._v("2379 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("443 TCP")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("2380 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",[e._v("6443 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("8472 UDP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("10250 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",[e._v("9099 TCP (4)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",[e._v("10254 TCP (4)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Worker 节点")]),e._v(" "),t("td",[e._v("443 TCP (3)")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("6443 TCP")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("443 TCP")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("8472 UDP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("9099 TCP (4)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("10254 TCP (4)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("外部负载均衡 (5)")]),e._v(" "),t("td",[e._v("80 TCP")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("443 TCP (6)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("API / UI 客户端")]),e._v(" "),t("td",[e._v("80 TCP (3)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("80 TCP")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("443 TCP (3)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("443 TCP")]),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("工作负载客户端")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("30000-32767 TCP / UDP (nodeport)")]),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("80 TCP (Ingress)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("443 TCP (Ingress)")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("注意：  1. 运行Rancher的单节点或者Rancher高可用的节点。 2. 需要用来拉取Rancher应用商店库。 3. 适用于不使用外部负载均衡的情况。 4. 本地流量（非跨节点流量）。 5. 负责Rancher UI / API的负载均衡或反向代理。 6. 仅适用于SSL没有在外部负载均衡终止。")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")])])]),e._v(" "),t("h1",{attrs:{id:"三、-单节点安装rancher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-单节点安装rancher"}},[e._v("#")]),e._v(" 三、 单节点安装rancher")]),e._v(" "),t("h3",{attrs:{id:"选项-a-使用-rancher-默认的自签名证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项-a-使用-rancher-默认的自签名证书"}},[e._v("#")]),e._v(" 选项 A - 使用 Rancher 默认的自签名证书")]),e._v(" "),t("p",[e._v("如果要在不涉及身份验证的开发或测试环境中安装 Rancher，请使用其生成的自签名证书安装 Rancher。此安装选项省去了自己生成证书的麻烦。")]),e._v(" "),t("h5",{attrs:{id:"重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要"}},[e._v("#")]),e._v(" 重要")]),e._v(" "),t("p",[e._v("在使用单节点安装时，Rancher Server 的数据默认保存在容器里。这意味着，在 Rancher Server 容器被删除时，Rancher Server 的数据将会丢失。您可以通过添加 "),t("code",[e._v("-v")]),e._v(" 参数以挂载目录的方式将数据保存在 Rancher Server 所在的主机上。详情请参阅 "),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/single-node-docker/advanced/_index#persist-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rancher 单节点数据持久化"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"rancher-2-4-x-及之前的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rancher-2-4-x-及之前的版本"}},[e._v("#")]),e._v(" Rancher 2.4.x 及之前的版本")]),e._v(" "),t("p",[e._v("登录到 Linux 主机，然后运行下面这个非常简洁的安装命令。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -d --privileged --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    rancher/rancher:latest\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h4",{attrs:{id:"rancher-2-5-x-及之后的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rancher-2-5-x-及之后的版本"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"http://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/single-node-docker/_index#rancher-25x-%E5%8F%8A%E4%B9%8B%E5%90%8E%E7%9A%84%E7%89%88%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("Rancher 2.5.x 及之后的版本")]),e._v(" "),t("p",[e._v("登录到 Linux 主机，然后运行下面这个非常简洁的安装命令。")]),e._v(" "),t("p",[e._v("与 2.4.x 或之前的版本相比，使用"),t("code",[e._v("docker run")]),e._v("命令安装 Rancher 2.5.x 时，需要添加"),t("code",[e._v("--privileged")]),e._v("标志变量，启用特权模式安装 Rancher。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:v2.5.7\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h2",{attrs:{id:"在相同节点运行rancher-rancher-和-rancher-rancher-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在相同节点运行rancher-rancher-和-rancher-rancher-agent"}},[e._v("#")]),e._v(" 在相同节点运行"),t("code",[e._v("rancher/rancher")]),e._v(" 和 "),t("code",[e._v("rancher/rancher-agent")])]),e._v(" "),t("p",[e._v("在要使用单个节点运行 Rancher 并将同一个节点添加到集群的情况下，必须为"),t("code",[e._v("rancher/ rancher")]),e._v("容器调整映射的主机端口。")]),e._v(" "),t("p",[e._v("如果将节点添加到集群中，它将部署使用端口 80 和 443 的 nginx ingress 控制器。这将与我们建议为"),t("code",[e._v("rancher/ rancher")]),e._v("容器公开的默认端口冲突。")]),e._v(" "),t("p",[e._v("请注意，不建议将此设置用于生产环境，这种方式仅用来方便进行开发/演示。")]),e._v(" "),t("p",[e._v("要更改主机端口映射，请将以下部分"),t("code",[e._v("-p 80:80 -p 443:443")]),e._v("替换为"),t("code",[e._v("-p 8080:80 -p 8443:443")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\ndocker run -d --restart=unless-stopped \\\n  -p 8080:80 -p 8443:443 \\\n  -v /opt/rancher:/var/lib/rancher \\\n  --privileged \\\n  rancher/rancher:v2.5.7 \\\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"国内使用阿里云镜像部署rancher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#国内使用阿里云镜像部署rancher"}},[e._v("#")]),e._v(" 国内使用阿里云镜像部署rancher")]),e._v(" "),t("ol",[t("li",[e._v("使用阿里云镜像仓库的 rancher 镜像启动 rancher")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' docker run -itd -p 8080:80 -p 8443:443 \\\n    --restart=unless-stopped \\\n    --privileged \\\n    -v /opt/rancher:/var/lib/rancher \\\n    -e CATTLE_AGENT_IMAGE="registry.cn-hangzhou.aliyuncs.com/rancher/rancher-agent:v2.5.7" \\\n    registry.cn-hangzhou.aliyuncs.com/rancher/rancher:v2.5.7\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("ul",[t("li",[t("code",[e._v("CATTLE_AGENT_IMAGE:")]),e._v(" 指定 rancher-agent 的镜像名称")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("设置默认镜像仓库")]),e._v(" "),t("p",[e._v("从 UI 导航到Settings，然后编辑system-default-registry，Value 设置为registry.cn-hangzhou.aliyuncs.com")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);