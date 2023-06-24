# 使用node镜像作为基础镜像
FROM node:lts-alpine as build-stage

# 设置工作目录
WORKDIR /app

# 复制项目的package.json和package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目的其他文件
COPY . .

# 构建项目
RUN npm run build

# 使用nginx作为生产阶段的基础镜像
FROM nginx:stable-alpine as production-stage

# 将构建好的项目文件复制到nginx的html目录下
COPY --from=build-stage /app/docs/.vitepress/dist /usr/share/nginx/html

# 对外暴露80端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
