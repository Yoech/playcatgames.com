import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.js'
import en from './en.js'
import ja from './ja.js'
import ko from './ko.js'
import tr from './tr.js'
import es from './es.js'
import fr from './fr.js'
import ru from './ru.js'

const messages = {
    'zh-CN': zhCN,
    'en': en,
    'ja': ja,
    'ko': ko,
    'tr': tr,
    'es': es,
    'fr': fr,
    'ru': ru
}

// 语言配置
export const languages = [
    {
        code: 'zh-CN',
        name: '中文',
        flag: '🇨🇳'
    },
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'ja',
        name: '日本語',
        flag: '🇯🇵'
    },
    {
        code: 'ko',
        name: '한국어',
        flag: '🇰🇷'
    },
    {
        code: 'tr',
        name: 'Türkçe',
        flag: '🇹🇷'
    },
    {
        code: 'es',
        name: 'Español',
        flag: '🇪🇸'
    },
    {
        code: 'fr',
        name: 'Français',
        flag: '🇫🇷'
    },
    {
        code: 'ru',
        name: 'Русский',
        flag: '🇷🇺'
    }
]

// 获取浏览器语言
function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage

    // 匹配完整的语言代码（如 zh-CN）
    if (messages[browserLang]) {
        return browserLang
    }

    // 匹配语言前缀（如 zh 匹配 zh-CN）
    const langPrefix = browserLang.split('-')[0]
    const matchedLang = Object.keys(messages).find(lang => lang.startsWith(langPrefix))

    return matchedLang || 'zh-CN' // 默认中文
}

// 从本地存储获取保存的语言，或使用浏览器语言
function getStoredLanguage() {
    const stored = localStorage.getItem('language')
    if (stored && messages[stored]) {
        return stored
    }
    return getBrowserLanguage()
}

const i18n = createI18n({
    legacy: false,
    locale: getStoredLanguage(),
    fallbackLocale: 'zh-CN',
    messages,
    globalInjection: true
})

export default i18n