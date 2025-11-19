# 游戏部署脚本
# 使用方法: .\deploy-game.ps1 -GameId 8848 -SourcePath "C:\path\to\cocos\web-mobile"

param(
    [Parameter(Mandatory=$true)]
    [int]$GameId,
    
    [Parameter(Mandatory=$true)]
    [string]$SourcePath,
    
    [switch]$Force
)

$ErrorActionPreference = "Stop"

Write-Host "=== PlayCatGames 游戏部署工具 ===" -ForegroundColor Cyan
Write-Host ""

# 验证源路径
if (-not (Test-Path $SourcePath)) {
    Write-Host "错误: 源路径不存在: $SourcePath" -ForegroundColor Red
    exit 1
}

# 验证 index.html 存在
$indexPath = Join-Path $SourcePath "index.html"
if (-not (Test-Path $indexPath)) {
    Write-Host "错误: 在源路径中找不到 index.html" -ForegroundColor Red
    Write-Host "请确保源路径指向 Cocos Creator 构建输出的根目录" -ForegroundColor Yellow
    exit 1
}

# 目标路径
$targetPath = Join-Path $PSScriptRoot "public\games\$GameId"

# 检查目标路径是否已存在
if (Test-Path $targetPath) {
    if (-not $Force) {
        Write-Host "警告: 目标目录已存在: $targetPath" -ForegroundColor Yellow
        $response = Read-Host "是否覆盖? (y/N)"
        if ($response -ne 'y' -and $response -ne 'Y') {
            Write-Host "部署已取消" -ForegroundColor Yellow
            exit 0
        }
    }
    Write-Host "删除现有目录..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force $targetPath
}

# 创建目标目录
Write-Host "创建目标目录: $targetPath" -ForegroundColor Green
New-Item -ItemType Directory -Path $targetPath -Force | Out-Null

# 复制文件
Write-Host "复制游戏文件..." -ForegroundColor Green
Copy-Item -Path "$SourcePath\*" -Destination $targetPath -Recurse -Force

# 验证部署
$deployedIndexPath = Join-Path $targetPath "index.html"
if (Test-Path $deployedIndexPath) {
    Write-Host ""
    Write-Host "✓ 部署成功!" -ForegroundColor Green
    Write-Host ""
    Write-Host "游戏信息:" -ForegroundColor Cyan
    Write-Host "  游戏 ID: $GameId"
    Write-Host "  目标路径: $targetPath"
    Write-Host ""
    Write-Host "访问地址:" -ForegroundColor Cyan
    Write-Host "  开发环境 (直接): http://localhost:3002/games/$GameId/"
    Write-Host "  开发环境 (模板): http://localhost:3002/play/$GameId"
    Write-Host "  生产环境 (直接): https://playcatgames.com/games/$GameId/"
    Write-Host "  生产环境 (模板): https://playcatgames.com/play/$GameId"
    Write-Host ""
    Write-Host "下一步:" -ForegroundColor Yellow
    Write-Host "  1. 在 src/data/gamesData.js 中注册游戏信息"
    Write-Host "  2. 运行 'npm run dev' 启动开发服务器"
    Write-Host "  3. 访问上述地址测试游戏"
    Write-Host ""
} else {
    Write-Host "错误: 部署验证失败" -ForegroundColor Red
    exit 1
}
