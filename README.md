# React + TypeScript + Vite + i18n

这是一个基于 React + TypeScript + Vite 的多语言应用模板，集成了国际化（i18n）功能和庆祝彩带动画。

## 功能特性

- ⚡️ **Vite** - 快速的开发构建工具
- ⚛️ **React 19** - 最新版本的 React
- 🔷 **TypeScript** - 类型安全
- 🌐 **i18next** - 完整的国际化支持
- 🎊 **react-confetti** - 庆祝彩带动画
- 🔍 **自动语言检测** - 基于浏览器语言自动切换
- 🇨🇳🇬🇧 **中英文支持** - 内置中文和英文语言包

## 已安装的依赖

### 核心依赖
- `react` - React 核心库
- `react-dom` - React DOM 渲染
- `i18next` - 国际化核心库
- `react-i18next` - React i18next 集成
- `i18next-browser-languagedetector` - 浏览器语言自动检测
- `react-confetti` - 庆祝彩带动画组件

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 多语言配置

### 语言文件结构

```
src/
├── locales/
│   ├── en/
│   │   └── translation.json  # 英文翻译
│   └── zh/
│       └── translation.json  # 中文翻译
└── i18n.ts  # i18next 配置文件
```

### 添加新的翻译

1. 在 `src/locales/en/translation.json` 添加英文翻译
2. 在 `src/locales/zh/translation.json` 添加对应的中文翻译
3. 在组件中使用 `t('key')` 访问翻译

### 使用示例

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t, i18n } = useTranslation()

  // 使用翻译
  return <h1>{t('welcome')}</h1>

  // 切换语言
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
}
```

## Vite 官方插件

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
