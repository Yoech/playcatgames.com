# PlayCatGames - 猫咪游戏集合

一个基于Vue3构建的现代化猫咪游戏集合网站，提供丰富的免费在线猫咪主题游戏。

## 🎮 特性

- **响应式设计** - 完美适配PC端和移动端
- **现代化界面** - 参考Poki.com的设计风格
- **多语言支持** - 支持中文、英文、日文、韩文、土耳其文、西班牙文、法文、俄文
- **游戏分类** - 装扮、护理、解谜、街机等多种类型
- **即时游玩** - 无需下载，浏览器直接运行
- **搜索功能** - 快速找到喜欢的游戏
- **优雅动画** - 流畅的用户体验

## 🛠️ 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 快速的前端构建工具
- **Tailwind CSS** - 实用优先的CSS框架
- **Vue I18n** - Vue.js国际化插件
- **VueUse** - Vue组合式API工具集

## 📦 安装和运行

1. 克隆项目
```bash
git clone https://github.com/Yoech/playcatgames.com.git
cd playcatgames.com
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

5. 预览生产版本
```bash
npm run preview
```

## 🎯 项目结构

```
playcatgames.com/
├── public/                 # 静态资源
│   └── cat-icon.svg       # 网站图标
├── src/
│   ├── components/        # Vue组件
│   │   ├── Header.vue     # 头部导航
│   │   ├── HeroSection.vue # 首页横幅
│   │   ├── GamesSection.vue # 游戏展示
│   │   ├── CategoriesSection.vue # 分类展示
│   │   ├── AboutSection.vue # 关于页面
│   │   ├── Footer.vue     # 页脚
│   │   └── LanguageSelector.vue # 语言选择器
│   ├── locales/           # 国际化文件
│   │   ├── zh-CN.js      # 中文
│   │   ├── en.js         # 英文
│   │   ├── ja.js         # 日文
│   │   ├── ko.js         # 韩文
│   │   ├── tr.js         # 土耳其文
│   │   ├── es.js         # 西班牙文
│   │   ├── fr.js         # 法文
│   │   ├── ru.js         # 俄文
│   │   └── index.js      # i18n配置
│   ├── App.vue           # 主应用组件
│   ├── main.js           # 应用入口
│   └── style.css         # 全局样式
├── index.html            # HTML模板
├── package.json          # 项目配置
├── vite.config.js        # Vite配置
├── tailwind.config.js    # Tailwind配置
└── postcss.config.js     # PostCSS配置
```

## � 多语言支持

网站支持以下8种语言：

- **中文 (zh-CN)** - 默认语言
- **English (en)** - 英文
- **日本語 (ja)** - 日文
- **한국어 (ko)** - 韩文
- **Türkçe (tr)** - 土耳其文
- **Español (es)** - 西班牙文
- **Français (fr)** - 法文
- **Русский (ru)** - 俄文

语言会根据浏览器语言自动检测，用户也可以通过右上角的语言选择器手动切换。选择的语言会保存在本地存储中。

## �🎨 游戏分类

- **装扮游戏** - 为可爱的猫咪换装打扮
- **护理游戏** - 照顾和护理虚拟宠物猫
- **解谜游戏** - 具有挑战性的猫咪主题解谜
- **街机游戏** - 快节奏的猫咪动作游戏
- **模拟游戏** - 猫咪生活模拟体验

## 🚀 开发计划

- [x] 多语言支持系统
- [x] 响应式设计
- [x] 语言自动检测
- [ ] 添加更多游戏内容
- [ ] 实现用户收藏功能
- [ ] 添加游戏评分系统
- [ ] 集成社交分享功能
- [ ] 游戏排行榜
- [ ] 用户评论系统
- [ ] PWA支持

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🤝 贡献

欢迎提交Pull Request和Issue来帮助改进这个项目！

## 📄 许可证

[MIT License](LICENSE)

## 📞 联系我们

如有任何问题或建议，请通过以下方式联系：

- GitHub Issues: [https://github.com/Yoech/playcatgames.com/issues](https://github.com/Yoech/playcatgames.com/issues)
- Email: contact@playcatgames.com

---

💝 **享受与可爱猫咪们一起的游戏时光！** 🐱