#!/bin/bash
# 游戏部署脚本 (Linux/Mac)
# 使用方法: ./deploy-game.sh <GameId> <SourcePath>

set -e

if [ $# -lt 2 ]; then
    echo "使用方法: ./deploy-game.sh <GameId> <SourcePath>"
    echo "示例: ./deploy-game.sh 8848 /path/to/cocos/web-mobile"
    exit 1
fi

GAME_ID=$1
SOURCE_PATH=$2
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TARGET_PATH="$SCRIPT_DIR/../public/games/$GAME_ID"

echo "=== PlayCatGames 游戏部署工具 ==="
echo ""

# 验证源路径
if [ ! -d "$SOURCE_PATH" ]; then
    echo "错误: 源路径不存在: $SOURCE_PATH"
    exit 1
fi

# 验证 index.html 存在
if [ ! -f "$SOURCE_PATH/index.html" ]; then
    echo "错误: 在源路径中找不到 index.html"
    echo "请确保源路径指向 Cocos Creator 构建输出的根目录"
    exit 1
fi

# 检查目标路径是否已存在
if [ -d "$TARGET_PATH" ]; then
    echo "警告: 目标目录已存在: $TARGET_PATH"
    read -p "是否覆盖? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "部署已取消"
        exit 0
    fi
    echo "删除现有目录..."
    rm -rf "$TARGET_PATH"
fi

# 创建目标目录
echo "创建目标目录: $TARGET_PATH"
mkdir -p "$TARGET_PATH"

# 复制文件
echo "复制游戏文件..."
cp -r "$SOURCE_PATH/"* "$TARGET_PATH/"

# 验证部署
if [ -f "$TARGET_PATH/index.html" ]; then
    echo ""
    echo "✓ 部署成功!"
    echo ""
    echo "游戏信息:"
    echo "  游戏 ID: $GAME_ID"
    echo "  目标路径: $TARGET_PATH"
    echo ""
    echo "访问地址:"
    echo "  开发环境 (直接): http://localhost:3002/games/$GAME_ID/"
    echo "  开发环境 (模板): http://localhost:3002/play/$GAME_ID"
    echo "  生产环境 (直接): https://playcatgames.com/games/$GAME_ID/"
    echo "  生产环境 (模板): https://playcatgames.com/play/$GAME_ID"
    echo ""
    echo "下一步:"
    echo "  1. 在 src/data/gamesData.js 中注册游戏信息"
    echo "  2. 运行 'npm run dev' 启动开发服务器"
    echo "  3. 访问上述地址测试游戏"
    echo ""
else
    echo "错误: 部署验证失败"
    exit 1
fi
