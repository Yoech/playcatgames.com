/**
 * URL 辅助工具函数
 */

/**
 * 判断URL是否为外部链接
 * @param {string} url - 要检查的URL
 * @returns {boolean} 是否为外部链接
 */
export const isExternalUrl = (url) => {
    if (!url || typeof url !== 'string') return false

    // 检查是否以 http://, https://, // 开头
    return url.startsWith('http://') ||
        url.startsWith('https://') ||
        url.startsWith('//')
}

/**
 * 判断URL是否为相对路径
 * @param {string} url - 要检查的URL
 * @returns {boolean} 是否为相对路径
 */
export const isRelativeUrl = (url) => {
    if (!url || typeof url !== 'string') return false
    return !isExternalUrl(url)
}

/**
 * 规范化游戏URL
 * 如果是相对路径，确保以 / 开头
 * 如果是外部链接，直接返回
 * @param {string} url - 原始URL
 * @returns {string} 规范化后的URL
 */
export const normalizeGameUrl = (url) => {
    if (!url) return ''

    // 外部链接直接返回
    if (isExternalUrl(url)) {
        return url
    }

    // 相对路径，确保以 / 开头
    return url.startsWith('/') ? url : `/${url}`
}

/**
 * 获取URL的域名
 * @param {string} url - URL字符串
 * @returns {string} 域名，如果无法解析返回空字符串
 */
export const getDomain = (url) => {
    try {
        const urlObj = new URL(url, window.location.origin)
        return urlObj.hostname
    } catch (e) {
        return ''
    }
}

/**
 * 判断URL是否为当前站点
 * @param {string} url - 要检查的URL
 * @returns {boolean} 是否为当前站点
 */
export const isSameOrigin = (url) => {
    if (!url) return false

    // 相对路径肯定是同源
    if (isRelativeUrl(url)) return true

    try {
        const urlObj = new URL(url)
        const currentOrigin = window.location.origin

        // 检查是否为当前站点（支持localhost和playcatgames.com）
        return urlObj.origin === currentOrigin ||
            (urlObj.hostname === 'playcatgames.com' && currentOrigin.includes('localhost')) ||
            (urlObj.hostname.includes('localhost') && currentOrigin === 'https://playcatgames.com')
    } catch (e) {
        return false
    }
}

/**
 * 获取适合iframe的sandbox属性
 * @param {string} url - iframe的URL
 * @returns {string} sandbox属性值
 */
export const getIframeSandbox = (url) => {
    const baseSandbox = 'allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock'

    // 外部链接需要额外权限
    if (isExternalUrl(url) && !isSameOrigin(url)) {
        return `${baseSandbox} allow-top-navigation-by-user-activation`
    }

    return baseSandbox
}

/**
 * 构建完整的游戏URL（用于分享等场景）
 * @param {number|string} gameId - 游戏ID
 * @returns {string} 完整的游戏URL
 */
export const buildGameUrl = (gameId) => {
    const baseUrl = window.location.origin
    return `${baseUrl}/play/${gameId}`
}

/**
 * 验证URL是否有效
 * @param {string} url - 要验证的URL
 * @returns {boolean} 是否有效
 */
export const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false

    // 相对路径认为有效
    if (isRelativeUrl(url)) {
        return url.length > 0
    }

    // 外部链接验证
    try {
        new URL(url)
        return true
    } catch (e) {
        return false
    }
}

/**
 * 转换游戏URL用于开发环境
 * 在开发环境下，将生产域名替换为本地域名
 * @param {string} url - 原始游戏URL
 * @returns {string} 转换后的URL
 */
export const convertGameUrlForDev = (url) => {
    if (!url) return url

    // 仅在开发环境转换
    if (import.meta.env.DEV) {
        // 将生产域名替换为本地域名
        const currentOrigin = window.location.origin

        // 替换 playcatgames.com 域名为当前本地域名
        if (url.includes('playcatgames.com')) {
            return url.replace(/https?:\/\/playcatgames\.com/, currentOrigin)
        }
    }

    return url
}
