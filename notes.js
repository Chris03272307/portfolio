const notes = [
    {
        id: 1,
        title: "端到端自动驾驶学习笔记",
        date: "2026-04-15",
        category: "自动驾驶",
        tags: ["AD", "深度学习", "感知"],
        summary: "深入理解端到端自动驾驶的核心概念和方法",
        content: `
# 端到端自动驾驶学习笔记

## 什么是端到端自动驾驶？

端到端（End-to-End）自动驾驶是指直接从传感器输入（如摄像头、雷达）到车辆控制输出（如方向盘角度、油门刹车）的深度学习模型。

### 核心优势

1. 避免误差级联传播
2. 全局优化
3. 更紧凑的系统

### 代表性工作

- Wayve的GAIA-1
- Tesla的FSD V12
- NVIDIA的DriveGPT
        `
    },
    {
        id: 2,
        title: "VLM/VLA 在自动驾驶中的应用",
        date: "2026-04-10",
        category: "AI",
        tags: ["VLM", "多模态", "决策"],
        summary: "视觉语言模型在自动驾驶决策中的应用",
        content: `
# VLM/VLA 学习笔记

## VLM (Vision-Language Model)

- 理解图像和文本
- 可以用于场景描述

## VLA (Vision-Language-Action)

- 在VLM基础上加入动作预测
- 代表：RT-2, PaLM-E

## 自动驾驶中的应用

1. 场景理解与描述
2. 驾驶决策解释
3. 人机交互
        `
    },
    {
        id: 3,
        title: "世界模型入门",
        date: "2026-04-05",
        category: "AI",
        tags: ["World Model", "预测", "仿真"],
        summary: "理解世界模型的原理和应用",
        content: `
# 世界模型学习笔记

## 什么是世界模型？

世界模型是学习环境动态的预测模型，可以模拟未来的场景变化。

## 核心思想

- 学习世界的物理规律
- 预测未来状态
- 支持规划和决策

## 应用

- GAIA-1: 生成式世界模型
- DriveDreamer: 真实感的自动驾驶仿真
        `
    },
    {
        id: 4,
        title: "PyTorch 深度学习入门",
        date: "2026-03-20",
        category: "工具",
        tags: ["PyTorch", "Python", "基础"],
        summary: "PyTorch基础学习笔记",
        content: `
# PyTorch 基础笔记

## 张量 (Tensor)

\`\`\`python
import torch
x = torch.tensor([1.0, 2.0, 3.0])
\`\`\`

## 神经网络

\`\`\`python
import torch.nn as nn
model = nn.Linear(10, 1)
\`\`\`

## 需要学习的内容

1. 张量操作
2. 自动求导
3. nn.Module使用
4. 数据加载
        `
    },
    {
        id: 5,
        title: "BEV感知算法总结",
        date: "2026-03-15",
        category: "自动驾驶",
        tags: ["BEV", "感知", "Transformer"],
        summary: "BEV视角下的感知算法总结",
        content: `
# BEV感知算法总结

## 什么是BEV？

BEV (Bird's Eye View) 鸟瞰图视角

## 主流方法

- BEVDet
- BEVFusion
- Tesla的occupancy network

## 优势

- 统一视角
- 多传感器融合
- 时序建模
        `
    },
    {
        id: 6,
        title: "Transformer注意力机制",
        date: "2026-03-10",
        category: "AI",
        tags: ["Transformer", "注意力", "基础"],
        summary: "Transformer核心注意力机制解析",
        content: `
# Transformer注意力机制

## Self-Attention

\`\`\`python
import torch.nn.functional as F
def scaled_dot_product_attention(Q, K, V):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    attn_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attn_weights, V)
\`\`\`

## 核心公式

Attention(Q,K,V) = softmax(QK^T/√d)V
        `
    },
    {
        id: 7,
        title: "NVIDIA Omniverse入门",
        date: "2026-03-05",
        category: "工具",
        tags: ["Omniverse", "仿真", "工具"],
        summary: "NVIDIA Omniverse仿真平台使用指南",
        content: `
# NVIDIA Omniverse

## 什么是Omniverse？

一个开放的元宇宙平台，用于实时3D协作和仿真

## 核心组件

- USD (Universal Scene Description)
- Kit SDK
- PhysX

## 应用场景

- 自动驾驶仿真
- 机器人仿真
- 数字孪生
        `
    },
    {
        id: 8,
        title: "论文阅读笔记：UniAD",
        date: "2026-02-28",
        category: "自动驾驶",
        tags: ["论文", "UniAD", "规划"],
        summary: "UniAD统一自动驾驶规划算法笔记",
        content: `
# UniAD 论文笔记

## 核心创新

- 统一的自动驾驶框架
- 感知到规划的端到端
- 查询锚点设计

## 实验结论

在nuScenes上取得SOTA效果
        `
    }
];