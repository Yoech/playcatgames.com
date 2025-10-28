import { ref, computed, readonly } from 'vue'
import { gamesData } from '@/data/gamesData'

// 全局搜索状态
const searchQuery = ref('')
const activeCategory = ref('all')

// 搜索功能
export const useSearch = () => {
    // 设置搜索查询
    const setSearchQuery = (query) => {
        searchQuery.value = query.toLowerCase().trim()
    }

    // 设置活动分类
    const setActiveCategory = (category) => {
        activeCategory.value = category
    }

    // 清空搜索
    const clearSearch = () => {
        searchQuery.value = ''
        activeCategory.value = 'all'
    }

    // 过滤游戏
    const filteredGames = computed(() => {
        let games = [...gamesData]

        // 按分类过滤
        if (activeCategory.value !== 'all') {
            games = games.filter(game => game.category === activeCategory.value)
        }

        // 按搜索词过滤
        if (searchQuery.value) {
            games = games.filter(game => {
                const query = searchQuery.value
                return (
                    game.name.toLowerCase().includes(query) ||
                    game.description.toLowerCase().includes(query) ||
                    game.tags.some(tag => tag.id.toLowerCase().includes(query))
                )
            })
        }

        return games
    })

    // 搜索建议
    const searchSuggestions = computed(() => {
        if (!searchQuery.value || searchQuery.value.length < 2) {
            return []
        }

        const suggestions = []
        const query = searchQuery.value

        // 游戏名称建议
        gamesData.forEach(game => {
            if (game.name.toLowerCase().includes(query)) {
                suggestions.push({
                    type: 'game',
                    text: game.name,
                    value: game.name,
                    game: game
                })
            }
        })

        // 标签建议
        const allTags = new Set()
        gamesData.forEach(game => {
            game.tags.forEach(tag => {
                if (tag.id.toLowerCase().includes(query)) {
                    allTags.add(tag.id)
                }
            })
        })

        allTags.forEach(tagId => {
            suggestions.push({
                type: 'tag',
                text: `#${tagId}`,
                value: tagId
            })
        })

        return suggestions.slice(0, 5) // 限制建议数量
    })

    return {
        searchQuery: readonly(searchQuery),
        activeCategory: readonly(activeCategory),
        filteredGames,
        searchSuggestions,
        setSearchQuery,
        setActiveCategory,
        clearSearch
    }
}