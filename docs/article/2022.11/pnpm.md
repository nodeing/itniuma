## 从 npm/yarn 切换到 pnpm

### 为什么使用 pnpm？

一句话，可以节约磁盘空间并提升安装速度，如果你使用的是 npm 或者 yarn，有 100 个项目都依赖了同一个包，这个包会被存放 100 次在你的硬盘上，如果使用的是 pnpm，依赖会被存储在内容可寻址的存储中

1.如果你用到了某依赖项的不同版本，只会将不同版本间有差异的文件添加到仓库。 例如，如果某个包有 100 个文件，而它的新版本只改变了其中 1 个文件。那么 pnpm update 时只会向存储中心额外添加 1 个新文件，而不会因为仅仅一个文件的改变复制整新版本包的内容。

2.所有文件都会存储在硬盘上的某一位置。 当软件包被被安装时，包里的文件会硬链接到这一位置，而不会占用额外的磁盘空间。 这允许你跨项目地共享同一版本的依赖。

### 安装

```
npm install -g pnpm
```

查看安装的版本

```
pnpm --version
```

我目前安装的版本

```
7.16.1
```

mac 系统添加别名

只需将下面这行放入 .bashrc、 .zshrc 或 config.fish 中：

```
alias pn=pnpm
```

然后执行命令

```
source ~/.zshrc or ~/. bash_profile
```

Windows 系统添加别名

在终端窗口(powershell)执行

```
notepad $profile.AllUsersAllHosts
```

在 profile.ps1 文件里加入：

```
set-alias -name pn -value pnpm

```
