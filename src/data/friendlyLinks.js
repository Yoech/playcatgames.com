/**
 * 友情链接数据文件
 * 包含所有友情链接的配置信息
 */

// 友情链接数据
export const friendlyLinks = [
    {
        id: 1,
        name: 'Poki Games',
        url: 'https://poki.com',
        logo: '/images/logos/placeholder-logo.svg',
        description: '免费在线游戏平台，提供各种类型的浏览器游戏'
    },
    {
        id: 2,
        name: 'CrazyGames',
        url: 'https://crazygames.com',
        logo: '/images/logos/placeholder-logo.svg',
        description: '最新的免费在线游戏，无需下载即可游玩'
    },
    {
        id: 3,
        name: 'Y8 Games',
        url: 'https://y8.com',
        logo: '/images/logos/placeholder-logo.svg',
        description: '在线游戏社区，提供免费的Flash和HTML5游戏'
    },
    {
        id: 4,
        name: 'Friv Games',
        url: 'https://friv.com',
        logo: '/images/logos/placeholder-logo.svg',
        description: '经典的免费在线游戏网站，适合所有年龄段'
    },
    {
        id: 5,
        name: 'Miniclip',
        url: 'https://miniclip.com',
        logo: '/images/logos/placeholder-logo.svg',
        description: '世界领先的在线游戏网站和移动游戏开发商'
    },
    {
        id: 6,
        name: 'Kongregate',
        url: 'https://kongregate.com',
        logo: '/images/logos/placeholder-logo.svg',
        description: '独立游戏发布平台，支持开发者和玩家社区'
    }
]

// 友情链接工具函数
export const getFriendlyLinkById = (id) => {
    return friendlyLinks.find(link => link.id === id)
}

export const getFriendlyLinksByCategory = (category) => {
    // 如果需要按类别分类友情链接，可以在这里实现
    return friendlyLinks
}

export const getRandomFriendlyLinks = (count = 3) => {
    const shuffled = [...friendlyLinks].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

// 验证友情链接数据
export const validateFriendlyLink = (link) => {
    return (
        link &&
        typeof link.id === 'number' &&
        typeof link.name === 'string' &&
        typeof link.url === 'string' &&
        link.url.startsWith('http') &&
        typeof link.logo === 'string'
    )
}

// 友情链接统计
export const getFriendlyLinksStats = () => {
    return {
        total: friendlyLinks.length,
        withLogos: friendlyLinks.filter(link => link.logo && !link.logo.includes('placeholder')).length,
        withDescriptions: friendlyLinks.filter(link => link.description).length
    }
}