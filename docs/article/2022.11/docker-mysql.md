## docker 安装 mysql 环境

### 安装

第一步，安装 docker，下载地址：[点击进入](https://www.docker.com/products/docker-desktop/)

下载完成后，直接双击安装即可，安装完成后，需要启动这个软件，然后在你的命令提示行窗口里面，会有 docker 命令,你可以查看版本

```
PS C:\Users\Administrator> docker --version
Docker version 20.10.14, build a224086
```

如果你运行 docker 命令后，像我上面的内容一样输出了版本号，说明你的 docker 可以正常工作

第二步，打开终端，下载 mysql 镜像

```
docker pull mysql:latest
```

第三步，通过镜像启动 mysql

```
docker run -p 3306:3306 --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

执行完上面命令后，会得到一个容器的 id，这个 id 下一条命令会用到，例如：eyJhbGc

第四步，进入到容器

注意下面命令中的 容器 id， 这里的 id 是上面一步命令得到的启动的容器的 id， 举个例子：如果上一步，我得到的 docker 容器 id 是：eyJhbGc， 那么我要运行这个容器的命令就是 docker exec -it eyJhbGc /bin/bash

```

docker exec -it 容器id /bin/bash
```

第五步，进入到 mysql

```
mysql -uroot -p
```

输入密码：123456， 注意输入密码的时候密码是不可见的，输入后直接敲回车即可

第六步，更改授权策略

使用 mysql 数据库

```
use mysql

```

修改表

```
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```

刷新

```
FLUSH PRIVILEGES
```

上面步骤执行后，密码改为 123456，下次进入的时候使用新密码登录

注意：

```
1 每次你要保持docker软件处于启动状态

2 你要让你的docker容器处于启动状态， 打开你的docker软件，containers/Apps下面会有你创建好的容器，如果没有启动，你需要点击启动
```

### 镜像加速

#### mac

在任务栏点击 Docker Desktop 应用图标 -> Perferences，在左侧导航菜单选择 Docker Engine，在右侧输入栏编辑 json 文件。将

https://0mjupp2c.mirror.aliyuncs.com加到"registry-mirrors"的数组里，点击 Apply & Restart 按钮，等待 Docker 重启并应用配置的镜像加速器。

```ts
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "registry-mirrors": ["https://0mjupp2c.mirror.aliyuncs.com"]
}
```

#### windows

针对安装了 Docker for Windows 的用户，您可以参考以下配置步骤：

在系统右下角托盘图标内右键菜单选择 Settings，打开配置窗口后左侧导航菜单选择 Docker Daemon。编辑窗口内的 JSON 串，填写下方加速器地址：

```js
{
  "registry-mirrors": ["https://0mjupp2c.mirror.aliyuncs.com"]
}
```

编辑完成后点击 Apply 保存按钮，等待 Docker 重启并应用配置的镜像加速器。

注意
Docker for Windows 和 Docker Toolbox 互不兼容，如果同时安装两者的话，需要使用 hyperv 的参数启动。

```

docker-machine create --engine-registry-mirror=https://0mjupp2c.mirror.aliyuncs.com -d hyperv default
```

Docker for Windows 有两种运行模式，一种运行 Windows 相关容器，一种运行传统的 Linux 容器。同一时间只能选择一种模式运行。
