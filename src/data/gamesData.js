/**
 * 游戏数据文件
 * 包含所有游戏相关的数据结构、枚举和工具函数
 */

// 游戏分类枚举
export const gameCategories = {
    PUZZLE: 'puzzle',
    SIMULATION: 'simulation',
    ROLE_PLAYING: 'rolePlay',
    ACTION: 'action',
    DRESS_UP: 'dressUp',
    CARE: 'care',
    ARCADE: 'arcade',
    STRATEGY: 'strategy',
    ADVENTURE: 'adventure',
    RACING: 'racing'
}

// 游戏标签枚举（彩色多重标签）
export const gameTags = {
    CUTE: { id: 'cute', color: 'pink' },
    ANIME: { id: 'anime', color: 'purple' },
    DARK: { id: 'dark', color: 'gray' },
    FUNNY: { id: 'funny', color: 'yellow' },
    RELAXING: { id: 'relaxing', color: 'green' },
    CHALLENGING: { id: 'challenging', color: 'red' },
    EDUCATIONAL: { id: 'educational', color: 'blue' },
    FANTASY: { id: 'fantasy', color: 'indigo' },
    CARTOON: { id: 'cartoon', color: 'orange' },
    RETRO: { id: 'retro', color: 'amber' },
    MULTIPLAYER: { id: 'multiplayer', color: 'cyan' },
    SINGLE_PLAYER: { id: 'singlePlayer', color: 'teal' },
    REALISTIC: { id: 'realistic', color: 'stone' },
    ADVENTURE: { id: 'adventure', color: 'emerald' }
}

// 游戏商店类型
export const gameStores = {
    APP_STORE: 'appStore',
    GOOGLE_PLAY: 'googlePlay',
    STEAM: 'steam',
    WEB: 'web',
    EPIC_GAMES: 'epicGames'
}

// 游戏数据
export const gamesData = [
    {
        id: 8848,
        orderId: 8,
        name: 'Cat Cafe',
        nameKey: 'com.playcatgames.catcafe',
        description: 'Have fun managing your business in this fun simulation game!',
        descriptionKey: 'games.catCafe.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/52137b41ccfdf27fd24bb3e01d0a0eb1.png',
        category: gameCategories.ARCADE,
        tags: [gameTags.CUTE, gameTags.FUNNY, gameTags.SINGLE_PLAYER],
        rating: 4.5,
        clickCount: 15420,
        storeLinks: {
            [gameStores.WEB]: 'https://playcatgames.com/games/8848/', // 完整游戏URL
            [gameStores.APP_STORE]: null,
            [gameStores.GOOGLE_PLAY]: null
        },
        featured: true,
        createdAt: '2024-01-15',
        updatedAt: '2024-03-10'
    },
    {
        id: 2,
        orderId: 7,
        name: 'Cat Pizza',
        nameKey: 'games.catPizza.name',
        description: 'Run your own cat-themed pizza restaurant and serve delicious meals',
        descriptionKey: 'games.catPizza.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/8c2c74af-a748-4d18-9b35-e68c6b3a43e1.png',
        category: gameCategories.SIMULATION,
        tags: [gameTags.CUTE, gameTags.RELAXING, gameTags.SINGLE_PLAYER],
        rating: 4.3,
        clickCount: 23150,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/cat-pizza',
            [gameStores.APP_STORE]: 'https://apps.apple.com/app/cat-pizza',
            [gameStores.GOOGLE_PLAY]: 'https://play.google.com/store/apps/details?id=com.catpizza'
        },
        featured: true,
        createdAt: '2024-02-01',
        updatedAt: '2024-03-15'
    },
    {
        id: 3,
        orderId: 6,
        name: 'Funny Kitty Care',
        nameKey: 'games.funnyKittyCare.name',
        description: 'Take care of adorable kittens - feed, bathe, and play with them',
        descriptionKey: 'games.funnyKittyCare.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/3b49afec-7cb2-4b8b-9e4b-7c8f9d8f1a2b.png',
        category: gameCategories.CARE,
        tags: [gameTags.CUTE, gameTags.EDUCATIONAL, gameTags.RELAXING],
        rating: 4.7,
        clickCount: 31200,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/funny-kitty-care',
            [gameStores.APP_STORE]: null,
            [gameStores.GOOGLE_PLAY]: 'https://play.google.com/store/apps/details?id=com.kittycare'
        },
        featured: true,
        createdAt: '2024-01-20',
        updatedAt: '2024-03-08'
    },
    {
        id: 4,
        orderId: 5,
        name: 'Cat Simulator',
        nameKey: 'games.catSimulator.name',
        description: 'Experience life as a cat in this realistic simulation game',
        descriptionKey: 'games.catSimulator.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/4d8e7f9a-1c3b-4a5b-8e9f-6d7c8b9a0e1f.png',
        category: gameCategories.SIMULATION,
        tags: [gameTags.REALISTIC, gameTags.ADVENTURE, gameTags.SINGLE_PLAYER],
        rating: 4.2,
        clickCount: 18750,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/cat-simulator',
            [gameStores.STEAM]: 'https://store.steampowered.com/app/cat-simulator'
        },
        featured: false,
        createdAt: '2024-02-15',
        updatedAt: '2024-03-12'
    },
    {
        id: 5,
        orderId: 4,
        name: 'Kitten Dress Up',
        nameKey: 'games.kittenDressUp.name',
        description: 'Dress up cute kittens with adorable outfits and accessories',
        descriptionKey: 'games.kittenDressUp.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/5e9f8a1b-2d4c-5b6e-9f0a-7e8d9c0b1a2e.png',
        category: gameCategories.DRESS_UP,
        tags: [gameTags.CUTE, gameTags.CARTOON, gameTags.RELAXING],
        rating: 4.6,
        clickCount: 27890,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/kitten-dress-up',
            [gameStores.APP_STORE]: 'https://apps.apple.com/app/kitten-dress-up',
            [gameStores.GOOGLE_PLAY]: 'https://play.google.com/store/apps/details?id=com.kittendressup'
        },
        featured: true,
        createdAt: '2024-01-10',
        updatedAt: '2024-03-05'
    },
    {
        id: 6,
        orderId: 3,
        name: 'Cat Puzzle Adventure',
        nameKey: 'games.catPuzzleAdventure.name',
        description: 'Solve challenging puzzles with your feline friend in this brain-teasing adventure',
        descriptionKey: 'games.catPuzzleAdventure.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/6f0a9b2c-3e5d-6c7e-0a1b-8f9e0d1c2b3a.png',
        category: gameCategories.PUZZLE,
        tags: [gameTags.CHALLENGING, gameTags.EDUCATIONAL, gameTags.ADVENTURE],
        rating: 4.4,
        clickCount: 19650,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/cat-puzzle-adventure',
            [gameStores.APP_STORE]: 'https://apps.apple.com/app/cat-puzzle-adventure'
        },
        featured: false,
        createdAt: '2024-02-28',
        updatedAt: '2024-03-18'
    },
    {
        id: 7,
        orderId: 2,
        name: 'Ninja Cat',
        nameKey: 'games.ninjaCat.name',
        description: 'Join the stealthy ninja cat on an epic action-packed adventure',
        descriptionKey: 'games.ninjaCat.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/7a1b0c3d-4f6e-7d8f-1a2b-9c0d1e2f3a4b.png',
        category: gameCategories.ACTION,
        tags: [gameTags.DARK, gameTags.CHALLENGING, gameTags.ADVENTURE],
        rating: 4.5,
        clickCount: 22340,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/ninja-cat',
            [gameStores.GOOGLE_PLAY]: 'https://play.google.com/store/apps/details?id=com.ninjacat',
            [gameStores.STEAM]: 'https://store.steampowered.com/app/ninja-cat'
        },
        featured: true,
        createdAt: '2024-01-25',
        updatedAt: '2024-03-14'
    },
    {
        id: 8,
        orderId: 1,
        name: 'Anime Cat Girl',
        nameKey: 'games.animeCatGirl.name',
        description: 'Create and customize your own anime-style cat girl character',
        descriptionKey: 'games.animeCatGirl.description',
        logo: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=194,height=194,fit=cover,f=auto/8b2c1d4e-5a7f-8e9a-2b3c-0d1e2f3a4b5c.png',
        category: gameCategories.ROLE_PLAYING,
        tags: [gameTags.ANIME, gameTags.CUTE, gameTags.CARTOON],
        rating: 4.3,
        clickCount: 16780,
        storeLinks: {
            [gameStores.WEB]: 'https://poki.com/en/g/anime-cat-girl',
            [gameStores.APP_STORE]: 'https://apps.apple.com/app/anime-cat-girl'
        },
        featured: false,
        createdAt: '2024-02-10',
        updatedAt: '2024-03-07'
    }
]

// ===== 游戏工具函数 =====

// 获取所有游戏（按 orderId 降序排列）
export const getAllGames = () => {
    return [...gamesData].sort((a, b) => b.orderId - a.orderId)
}

// 根据分类筛选游戏
export const getGamesByCategory = (category) => {
    return gamesData
        .filter(game => game.category === category)
        .sort((a, b) => b.orderId - a.orderId)
}

// 根据标签筛选游戏
export const getGamesByTag = (tagId) => {
    return gamesData
        .filter(game => game.tags.some(tag => tag.id === tagId))
        .sort((a, b) => b.orderId - a.orderId)
}

// 获取热门游戏（根据点击次数排序）
export const getPopularGames = (limit = 6) => {
    return [...gamesData]
        .sort((a, b) => b.clickCount - a.clickCount)
        .slice(0, limit)
}

// 获取精选游戏
export const getFeaturedGames = () => {
    return gamesData.filter(game => game.featured)
}

// 根据评分获取高分游戏
export const getHighRatedGames = (minRating = 4.5, limit = 6) => {
    return gamesData
        .filter(game => game.rating >= minRating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit)
}

// 根据ID获取游戏
export const getGameById = (id) => {
    return gamesData.find(game => game.id === id)
}

// 增加游戏点击次数
export const incrementGameClicks = (gameId) => {
    const game = getGameById(gameId)
    if (game) {
        game.clickCount += 1
        game.updatedAt = new Date().toISOString().split('T')[0]
    }
    return game
}

// 获取最新游戏
export const getLatestGames = (limit = 6) => {
    return [...gamesData]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, limit)
}

// 获取最近更新的游戏
export const getRecentlyUpdatedGames = (limit = 6) => {
    return [...gamesData]
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, limit)
}

// 搜索游戏
export const searchGames = (query) => {
    if (!query || query.trim().length === 0) {
        return getAllGames()
    }

    const searchQuery = query.toLowerCase().trim()
    return gamesData
        .filter(game => {
            return (
                game.name.toLowerCase().includes(searchQuery) ||
                game.description.toLowerCase().includes(searchQuery) ||
                game.tags.some(tag => tag.id.toLowerCase().includes(searchQuery))
            )
        })
        .sort((a, b) => b.orderId - a.orderId)
}

// 获取随机游戏
export const getRandomGames = (limit = 6) => {
    const shuffled = [...gamesData].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, limit)
}

// ===== 游戏统计函数 =====

// 获取游戏统计信息
export const getGameStats = () => {
    const totalGames = gamesData.length
    const featuredGames = gamesData.filter(game => game.featured).length
    const totalClicks = gamesData.reduce((sum, game) => sum + game.clickCount, 0)
    const averageRating = gamesData.reduce((sum, game) => sum + game.rating, 0) / totalGames

    const categoryCounts = Object.values(gameCategories).reduce((acc, category) => {
        acc[category] = getGamesByCategory(category).length
        return acc
    }, {})

    return {
        totalGames,
        featuredGames,
        totalClicks,
        averageRating: Math.round(averageRating * 10) / 10,
        categoryCounts,
        mostPopularGame: getPopularGames(1)[0],
        highestRatedGame: getHighRatedGames(0, 1)[0]
    }
}

// 获取标签统计
export const getTagStats = () => {
    const tagCounts = {}

    gamesData.forEach(game => {
        game.tags.forEach(tag => {
            tagCounts[tag.id] = (tagCounts[tag.id] || 0) + 1
        })
    })

    return Object.entries(tagCounts)
        .map(([tagId, count]) => ({
            tag: Object.values(gameTags).find(t => t.id === tagId),
            count
        }))
        .sort((a, b) => b.count - a.count)
}

// 验证游戏数据
export const validateGameData = (game) => {
    const requiredFields = ['id', 'orderId', 'name', 'description', 'logo', 'category', 'tags', 'rating']

    return requiredFields.every(field => {
        if (field === 'tags') {
            return Array.isArray(game[field]) && game[field].length > 0
        }
        if (field === 'rating') {
            return typeof game[field] === 'number' && game[field] >= 0 && game[field] <= 5
        }
        if (field === 'orderId') {
            return typeof game[field] === 'number' && game[field] > 0
        }
        return game[field] !== undefined && game[field] !== null && game[field] !== ''
    })
}