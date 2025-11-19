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
│   ├── games/             # Cocos Creator 游戏目录
│   │   ├── README.md      # 游戏部署说明
│   │   ├── .gitkeep       # 保持目录结构
│   │   └── [gameId]/      # 具体游戏文件（由开发者添加）
│   └── cat-icon.svg       # 网站图标
├── src/
│   ├── components/        # Vue组件
│   │   ├── Header.vue     # 头部导航
│   │   ├── HeroSection.vue # 首页横幅
│   │   ├── GamesSection.vue # 游戏展示
│   │   ├── CategoriesSection.vue # 分类展示
│   │   ├── AboutSection.vue # 关于页面
│   │   ├── Footer.vue     # 页脚
│   │   ├── SearchBox.vue  # 搜索框
│   │   └── LanguageSelector.vue # 语言选择器
│   ├── views/             # 页面视图
│   │   └── GamePlay.vue   # 游戏播放模板页
│   ├── data/              # 数据文件
│   │   ├── gamesData.js   # 游戏数据
│   │   ├── friendlyLinks.js # 友情链接
│   │   └── index.js       # 数据入口
│   ├── stores/            # 状态管理
│   │   └── search.js      # 搜索状态
│   ├── utils/             # 工具函数
│   │   └── urlHelpers.js  # URL处理工具
│   ├── locales/           # 国际化文件
│   │   ├── zh-CN.js      # 中文
│   │   ├── en.js         # 英文
│   │   └── ...           # 其他语言
│   ├── router/            # 路由配置
│   │   └── index.js      # Vue Router
│   ├── App.vue           # 主应用组件
│   ├── main.js           # 应用入口
│   └── style.css         # 全局样式
├── scripts/              # 部署脚本
│   ├── deploy-game.ps1   # Windows部署脚本
│   └── deploy-game.sh    # Linux/Mac部署脚本
├── docs/                 # 文档
│   ├── COCOS_CREATOR_INTEGRATION.md  # Cocos集成指南
│   ├── GAME_URL_HANDLING.md          # URL处理说明
│   └── ...
├── index.html            # HTML模板
├── package.json          # 项目配置
├── vite.config.js        # Vite配置
├── tailwind.config.js    # Tailwind配置
└── postcss.config.js     # PostCSS配置
```

## 🎮 添加 Cocos Creator 游戏

本项目支持集成 Cocos Creator 3.8.5 打包的 H5 游戏。

### 快速开始

1. **打包游戏**
   - 在 Cocos Creator 中选择 Web Mobile 平台
   - 构建并导出游戏文件

2. **部署游戏**

   **Windows:**
   ```powershell
   .\scripts\deploy-game.ps1 -GameId 8848 -SourcePath "C:\path\to\cocos\web-mobile"
   ```

   **Linux/Mac:**
   ```bash
   chmod +x scripts/deploy-game.sh
   ./scripts/deploy-game.sh 8848 /path/to/cocos/web-mobile
   ```

3. **注册游戏**
   - 在 `src/data/gamesData.js` 中添加游戏信息
   - 配置游戏名称、描述、分类等

4. **测试游戏**
   - 直接访问: `http://localhost:3002/games/8848/`
   - 模板页: `http://localhost:3002/play/8848`

📖 详细说明请参考 [Cocos Creator 集成指南](docs/COCOS_CREATOR_INTEGRATION.md)

## 🌍 多语言支持

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