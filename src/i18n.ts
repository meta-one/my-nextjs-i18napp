import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 导入语言资源文件
import translationEN from './locales/en/translation.json'
import translationZH from './locales/zh/translation.json'

// 语言资源配置
const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
}

i18n
  // 使用浏览器语言检测器
  .use(LanguageDetector)
  // 传递 i18n 实例给 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    resources,
    fallbackLng: 'zh', // 默认使用中文作为备用语言
    debug: true, // 开发环境下启用调试模式

    interpolation: {
      escapeValue: false // React 已经默认转义了
    },

    detection: {
      // 语言检测顺序
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      // 缓存用户语言选择
      caches: ['localStorage', 'cookie']
    }
  })

export default i18n
