import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './locales/index.js'

// 禁用右键菜单
document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    return false
})

// 禁用F12、Ctrl+Shift+I、Ctrl+Shift+J、Ctrl+U等开发者工具快捷键
document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12') {
        e.preventDefault()
        return false
    }
    // Ctrl+Shift+I (开发者工具)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
    }
    // Ctrl+Shift+J (控制台)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
    }
    // Ctrl+U (查看源代码)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
    }
    // Ctrl+Shift+C (元素选择器)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
    }
})

// 检测开发者工具是否打开
const detectDevTools = () => {
    const threshold = 160
    const widthThreshold = window.outerWidth - window.innerWidth > threshold
    const heightThreshold = window.outerHeight - window.innerHeight > threshold

    if (widthThreshold || heightThreshold) {
        // 可以选择重定向或显示警告
        document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:24px;">🐱 请关闭开发者工具</div>'
    }
}

// 定期检测开发者工具
setInterval(detectDevTools, 1000)

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')