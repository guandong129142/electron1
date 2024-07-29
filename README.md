electron + react 的脚手架项目。

## 项目特点

- 提供 Electron + React 桌面程序创建，测试，打包的示例。
- 提供 Electron 环境下调用 DLL 的示例。
- 提供 Nodejs 最新版本环境下的示例。
- 示例界面使用 ant-design

## 快速开始

### 1. 安装工具

需要安装 [Git](https://git-scm.com) 和 [Node.js](https://nodejs.org/en/download/)。

安装 Python 3.x 版本，请使用[最新稳定版本](https://www.python.org/downloads)。

安装[visual studio build tool](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=BuildTools)或 [visual studio Community](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&rel=17)，安装时选择 c++桌面开发项。本示例使用 VS Community 2022。

> nodejs 原生编译工具 node-gyp 8.4.x 以上版本才支持 vs 2022，请确保 npm 环境下的 node-gyp 为最新版本。

```bash
node -v
v18.16.0
npm -v
v9.5.1
npx node-gyp -v
v9.3.1
```

### 2. 设置 npm 镜像:

```bash
# 设置npm镜像
npm config set registry https://registry.npmmirror.com/
# 设置环境变量 ELECTRON_MIRROR=https://registry.npmmirror.com/
```

### 3. 运行项目

> 需要管理员权限，可能需要关闭 360 等杀毒软件。

```bash
# 克隆项目到本地
git clone https://github.com/fddi/electron-react-quick-start
# 转到项目目录
cd electron-react-quick-start
# 设置vs 版本
npm config set msvs_version 2022
# 安装
npm install
# 运行
npm run start
```

- 运行界面

<img src="https://gitee.com/fddi/electron-react-quick-start/raw/master/docs/img-example1.png" width="60%">

- 调用 DLL 文件示例

<img src="https://gitee.com/fddi/electron-react-quick-start/raw/master/docs/img-example2.png" width="60%">

### 4. 打包

```bash
# 打包(win64位)
npm run build  & npm run make
```

本项目使用 electron-forge 工具打包，打包配置请修改 forge.config.js 文件。
[查看 packagerConfig 配置 API](https://electron.github.io/packager/main/interfaces/Options.html)

## 问题汇总

### 1. 无法找到 VS 工具

> gyp ERR! stack Error: Could not find any Visual Studio installation to use

情况一：VS2022 需要 node-gyp8.4.0 以上版本才能支持,由于 npm 自带版本过低导致 需要升级 nodejs,或升级 npm：

```bash
设置vs 版本
npm config set msvs_version 2022
npm -g install npm
# 安装最新npm后，查看版本
npm -v
8.5.0
npm install -g node-gyp
npx node-gyp -v
v8.4.1
```

情况二：删除淘宝镜像地址配置

```bash
npm config list
npm config delete electron_mirror
```

情况三：使用 PowerShell

### 2. electron 无法安装

> Electron failed to install correctly, please delete node_modules/electron and try installing again

node_modules/electron 文件夹没有 dist 文件夹。[淘宝镜像](https://registry.npmmirror.com/binary.html?path=electron/)下载对应包，解压至 node_modules/electron/dist 内。node_modules/electron 新建 path.txt,输入以下内容保存

```
electron.exe
```

### 3. 打包网络超时

> 下载 nsis-3.0.4.2.7z 超时

网络原因，[淘宝镜像](https://registry.npmmirror.com/binary.html?path=electron-builder-binaries/)下载对应包，解压至 C:\Users\\{User}\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.4.2。

> 下载 winCodeSign 超时

网络原因，[淘宝镜像](https://registry.npmmirror.com/binary.html?path=electron-builder-binaries/)下载对应 winCodeSign 包，解压至 C:\Users\\{User}\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0。

## 使用到的资源

- [electronjs](https://www.electronjs.org/docs) - Electron 是由 GitHub 开发的一个开源库，用于构建具有 HTML，CSS 和 JavaScript 的跨平台桌面应用程序。
- [reactjs](https://react.dev/) - React 是一个用于构建用户界面的 JavaScript 库。
- [ant.design](https://ant-design.gitee.io/index-cn) - 一套企业级的 UI 设计语言和 React 实现。
- [Koffi](https://koffi.dev/) - 是一个快速且易于使用的 Node.js C FFI 模块。

## 许可证

[MIT License](LICENSE.md)

package.json
"@electron-forge/cli": "^7.2.0",
"@electron-forge/maker-deb": "^7.2.0",
"@electron-forge/maker-rpm": "^7.2.0",
"@electron-forge/maker-squirrel": "^7.2.0",
"@electron-forge/maker-zip": "^7.2.0",
"@electron-forge/plugin-auto-unpack-natives": "^7.2.0",
"electron": "^28.1.3",

"electron-is-dev": "^2.0.0",
"electron-squirrel-startup": "^1.0.0",

"extraMetadata": {
"main": "./dist/main.js"
},

"publish": [
"github"
],

"build/**/\*",
"node_modules/**/\*",
"package.json",
"main.js",
"src/menuTemplate.js"
