# Self Components

Web组件库，基于Lit框架构建的轻量级UI组件集合

## 功能特性
- 🎉 提供基础交互组件
- 🚀 支持TypeScript类型声明
- 🌈 主题样式可定制化
- 📦 开箱即用的ES模块

## 安装使用
```bash
npm install self-components
```

## 快速开始
```html
<script type="module">
  import 'self-components';
</script>

<my-button variant="primary">提交</my-button>
<my-badge position="top-right" variant="success">通知</my-badge>
```

## 组件文档

### 按钮组件
**属性说明**
- `variant`: 按钮样式类型 (primary | secondary)

**使用示例**
```html
<my-button variant="secondary">取消</my-button>
```

### 徽章组件
**属性说明**
- `variant`: 颜色类型 (primary | success | warning | danger)
- `position`: 定位位置 (top-right | bottom-left | ...)

**使用示例**
```html
<my-badge position="bottom-left" variant="warning">!</my-badge>
```

## 开发指南
```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 生产构建
npm run build
```

## 项目结构
```
src/
  button.ts    # 按钮组件源码
  badge.ts     # 徽章组件源码
  index.ts     # 模块导出
```