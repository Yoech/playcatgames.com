/**
 * 数据模块统一入口文件
 * 重新导出所有数据模块的内容，保持向后兼容性
 */

// 从友情链接模块导出所有内容
export * from './friendlyLinks.js'

// 从游戏数据模块导出所有内容
export * from './gamesData.js'

// 为了保持向后兼容性，也可以提供命名导出
import { friendlyLinks } from './friendlyLinks.js'
import {
    gamesData,
    gameCategories,
    gameTags,
    gameStores,
    getGamesByCategory,
    getGamesByTag,
    getPopularGames,
    getFeaturedGames,
    getHighRatedGames,
    getGameById,
    incrementGameClicks,
    getLatestGames,
    getRecentlyUpdatedGames,
    searchGames,
    getRandomGames,
    getGameStats,
    getTagStats,
    validateGameData
} from './gamesData.js'

// 统一的数据导出对象（可选，便于一次性导入所有数据）
export const allData = {
    // 友情链接
    friendlyLinks,

    // 游戏相关
    gamesData,
    gameCategories,
    gameTags,
    gameStores,

    // 工具函数
    gameUtils: {
        getGamesByCategory,
        getGamesByTag,
        getPopularGames,
        getFeaturedGames,
        getHighRatedGames,
        getGameById,
        incrementGameClicks,
        getLatestGames,
        getRecentlyUpdatedGames,
        searchGames,
        getRandomGames,
        getGameStats,
        getTagStats,
        validateGameData
    }
}

// 默认导出（包含所有数据的汇总）
export default allData