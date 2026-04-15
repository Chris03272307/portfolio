const notes = [
    {
        id: 1,
        title: "端到端自动驾驶学习笔记",
        date: "2026-04-15",
        category: "自动驾驶",
        tags: ["AD", "深度学习"],
        summary: "深入理解端到端自动驾驶的核心概念和方法",
        content: `
# 端到端自动驾驶学习笔记

## 什么是端到端自动驾驶？

端到端（End-to-End）自动驾驶是指直接从传感器输入（如摄像头、雷达）到车辆控制输出（如方向盘角度、油门刹车）的深度学习模型，不需要传统的模块化pipeline。

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
        tags: ["VLM", "多模态"],
        summary: "视觉语言模型在自动驾驶决策中的应用",
        content: `
# VLM/VLA 学习笔记

## VLM (Vision-Language Model)
- 理解图像和文本
- 可以用于场景描述

## VLA (Vision-Language-Action)
- 在VLM基础上加入动作预测
- 代表：RT-2, PaLM-E

## 自动驾驶中的应用场景
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
        tags: ["World Model", "预测"],
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
        tags: ["PyTorch", "Python"],
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
    }
];