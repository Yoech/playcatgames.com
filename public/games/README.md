# Games Directory

此目录用于存放 Cocos Creator 3.8.5 打包的 H5 子游戏。

## 目录结构

```
public/games/
├── README.md (本文件)
├── 8848/          # 游戏ID对应的目录
│   ├── index.html # Cocos Creator打包的入口文件
│   ├── assets/    # 游戏资源
│   ├── src/       # 游戏代码
│   └── ...        # 其他Cocos打包文件
├── 9999/          # 另一个游戏
│   └── ...
└── .gitkeep       # 保持空目录
```

## 使用说明

### 1. 添加新游戏

1. 使用 Cocos Creator 3.8.5 打包游戏为 Web Mobile 格式
2. 创建对应游戏ID的目录，例如 `public/games/8848/`
3. 将打包后的所有文件复制到该目录下
4. 确保 `index.html` 在目录根下

### 2. 在 gamesData.js 中注册游戏

```javascript
{
    id: 8848,
    orderId: 1,
    name: 'Your Game Name',
    description: 'Game description',
    storeLinks: {
        web: 'https://playcatgames.com/games/8848/'
    }
    // ... 其他配置
}
```

### 3. 访问游戏

- 直接访问: `https://playcatgames.com/games/8848/`
- 通过模板页: `https://playcatgames.com/play/8848`（推荐）
- 模板页会自动嵌入游戏URL

## Cocos Creator 打包设置

建议的打包配置：

1. **构建平台**: Web Mobile
2. **初始场景**: 设置游戏启动场景
3. **资源服务器地址**: 留空（使用相对路径）
4. **MD5 Cache**: 建议开启
5. **内联所有 SpriteFrame**: 根据需要选择
6. **合并初始场景 JSON**: 建议开启

## 注意事项

⚠️ **文件路径**: Cocos Creator 打包后的资源使用相对路径，确保目录结构完整

⚠️ **跨域问题**: 本地开发时注意浏览器安全策略

⚠️ **资源大小**: 优化资源以提升加载速度

⚠️ **移动端适配**: 确保游戏支持触摸操作

## 开发环境

开发时，URL会自动转换：
- 开发: `http://localhost:3002/games/8848/`
- 生产: `https://playcatgames.com/games/8848/`

## 版本兼容性

- ✅ Cocos Creator 3.8.5
- ✅ Cocos Creator 3.8.x (应该兼容)
- ⚠️ 其他版本需要测试验证

## 示例游戏结构

```
games/8848/
├── index.html              # 入口文件 (必需)
├── application.js          # 应用代码
├── cocos-js/              # Cocos引擎文件
│   ├── cocos.js
│   └── ...
├── assets/                # 游戏资源
│   ├── main/
│   ├── resources/
│   └── ...
└── src/                   # 源代码 (打包后)
    └── ...
```

## 故障排查

### 游戏无法加载
1. 检查 `index.html` 是否存在
2. 检查浏览器控制台错误信息
3. 验证资源路径是否正确

### 黑屏问题
1. 检查 Cocos Creator 构建设置
2. 确认初始场景配置正确
3. 查看控制台是否有 JavaScript 错误

### 资源404错误
1. 确保所有资源文件都已复制
2. 检查资源路径大小写
3. 验证资源服务器地址配置

## 更多信息

- [Cocos Creator 文档](https://docs.cocos.com/creator/3.8/manual/zh/)
- [Web 平台发布](https://docs.cocos.com/creator/3.8/manual/zh/editor/publish/publish-web.html)
