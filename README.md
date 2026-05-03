# fi梨 - 非遗草编文化传承平台

## 项目简介

本项目是一个展示草编文化传承的现代化网站，旨在弘扬和传承中华优秀传统文化。网站通过精美的视觉设计和丰富的内容展示，向用户介绍草编传承人、传统工艺、精美作品等内容。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 8.x
- **路由**: Vue Router 4.x
- **图标**: Lucide Vue Next
- **动画**: VueUse Motion

## 主要功能模块

| 模块 | 说明 |
|------|------|
| **首页** | 网站主入口，展示非遗文化概览 |
| **传承人** | 展示非遗传承大师风采 |
| **工艺** | 介绍传统手工艺制作技艺 |
| **创意** | 非遗创意产品展示 |
| **草编** | 草编工艺专题展示 |
| **历史** | 非遗文化历史溯源 |
| **作品** | 非遗精品作品展示 |
| **新闻** | 非遗相关资讯动态 |

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

启动后访问: http://localhost:3000

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # 公共组件
│   ├── MainPage.vue    # 主页面布局
│   └── NavBar.vue      # 导航栏
├── views/              # 页面视图
│   ├── Home.vue        # 首页
│   ├── Inheritors.vue  # 传承人
│   ├── Craft.vue       # 工艺
│   ├── Creativity.vue  # 创意
│   ├── Grass.vue       # 草编
│   ├── History.vue     # 历史
│   ├── Works.vue       # 作品
│   └── News.vue        # 新闻
├── router/             # 路由配置
│   └── index.js
├── imgs/               # 图片资源
├── videos/             # 视频资源
├── App.vue             # 根组件
└── main.js             # 入口文件
```

## 可用脚本

| 脚本 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |

## 开发说明

- 开发服务器默认端口: 3000
- 项目使用 Vue 3 Composition API
- 路由采用 Vue Router 4.x 配置