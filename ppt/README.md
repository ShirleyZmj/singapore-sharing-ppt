# 新加坡工作与生活分享 PPT

基于 Next.js, Tailwind CSS 和 Reveal.js 构建的网页幻灯片应用。

## 项目结构

- `src/app`: Next.js 应用程序入口
- `src/components/slides`: 各个幻灯片组件
- `public/images`: 背景图片等静态资源

## 安装与使用

### 安装依赖

```bash
cd ppt
npm install
```

### 开发模式

```bash
npm run dev
```

然后访问 [http://localhost:3000](http://localhost:3000) 查看幻灯片。

### 构建生产版本

```bash
npm run build
npm run start
```

## 幻灯片操作

- 使用键盘箭头键 (→, ←) 或空格键进行导航
- 按 `ESC` 查看幻灯片概览
- 按 `F` 全屏显示
- 按 `S` 开启演讲者视图

## 幻灯片内容

1. 标题页
2. 问卷收集结果 - 话题偏好
3. 问卷收集结果 - 提出的问题
4. 目录
5. 自我背景介绍
6. 新加坡概况
7. 留学（研究生）
8. 新加坡身份介绍
9. 求职介绍（实习）
10. 工作感受区别
11. 求职介绍（工作）
12. 住房
13. 交通
14. 法律
15. Q&A

## 自定义样式

样式定义在 `src/app/globals.css` 文件中。背景图片位于幻灯片右下角。

## 添加新幻灯片

1. 在 `src/components/slides` 目录下创建新的幻灯片组件
2. 在 `src/app/page.js` 中导入并添加到幻灯片顺序中 