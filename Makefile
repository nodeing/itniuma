# Makefile for automated deployment to server
# 变量定义
SERVER_HOST = t2
SERVER_PATH = /www/wwwroot/itniuma.com
BUILD_DIR = docs/.vitepress/dist
DEPLOY_FILE = deploy.tar.gz
BACKUP_DIR = /www/wwwroot/itniuma.com/backup

# 默认目标
.PHONY: help deploy build clean

help:
	@echo "可用命令:"
	@echo "  make deploy    - 构建并部署到服务器"
	@echo "  make build     - 仅构建项目"
	@echo "  make clean     - 清理构建文件和临时文件"
	@echo "  make backup    - 备份服务器上的当前文件"

# 完整部署流程
deploy: clean build backup-server upload deploy-server cleanup

# 本地构建
build:
	@echo "🏗️  开始构建项目..."
	pnpm build
	@if [ ! -d "$(BUILD_DIR)" ]; then \
		echo "❌ 构建失败：构建目录不存在"; \
		exit 1; \
	fi
	@echo "✅ 构建完成"

# 创建压缩包
create-package:
	@echo "📦 创建压缩包..."
	cd $(BUILD_DIR) && tar -czf ../../../$(DEPLOY_FILE) .
	@echo "✅ 压缩包创建完成: $(DEPLOY_FILE)"

# 上传到服务器
upload: create-package
	@echo "📤 上传文件到服务器..."
	scp $(DEPLOY_FILE) $(SERVER_HOST):/tmp/
	@echo "✅ 上传完成"

# 备份服务器上的现有文件
backup-server:
	@echo "💾 备份服务器文件..."
	ssh $(SERVER_HOST) "mkdir -p $(BACKUP_DIR) && \
		if [ -d '$(SERVER_PATH)' ] && [ \"\`ls -A $(SERVER_PATH)\`\" != '' ]; then \
			tar -czf $(BACKUP_DIR)/backup_\`date +%Y%m%d_%H%M%S\`.tar.gz -C $(SERVER_PATH) .; \
			echo '✅ 备份完成'; \
		else \
			echo '📝 服务器目录为空，跳过备份'; \
		fi"

# 在服务器上部署
deploy-server:
	@echo "🚀 在服务器上部署..."
	ssh $(SERVER_HOST) " \
		echo '📂 清理目标目录...'; \
		mkdir -p $(SERVER_PATH) && \
		if [ -f '$(SERVER_PATH)/.user.ini' ]; then \
			echo '🔓 移除.user.ini文件的不可变属性...'; \
			chattr -i '$(SERVER_PATH)/.user.ini' 2>/dev/null || true; \
		fi; \
		rm -rf $(SERVER_PATH)/* && \
		echo '📂 解压文件到目标目录...'; \
		tar -xzf /tmp/$(DEPLOY_FILE) -C $(SERVER_PATH) && \
		echo '🔧 设置文件权限...'; \
		chown -R www:www $(SERVER_PATH) 2>/dev/null || chown -R \$$USER:\$$USER $(SERVER_PATH); \
		chmod -R 755 $(SERVER_PATH); \
		if [ -f '$(SERVER_PATH)/.user.ini' ]; then \
			echo '🔒 恢复.user.ini文件的安全属性...'; \
			chattr +i '$(SERVER_PATH)/.user.ini' 2>/dev/null || true; \
		fi; \
		echo '✅ 服务器部署完成'"

# 清理本地临时文件
cleanup:
	@echo "🧹 清理本地临时文件..."
	rm -f $(DEPLOY_FILE)
	@echo "✅ 清理完成"

# 仅清理本地文件
clean:
	@echo "🧹 清理本地构建文件..."
	rm -rf $(BUILD_DIR)
	rm -f $(DEPLOY_FILE)
	@echo "✅ 清理完成"

# 手动备份服务器文件
backup:
	@echo "💾 备份服务器文件..."
	ssh $(SERVER_HOST) "mkdir -p $(BACKUP_DIR) && \
		if [ -d '$(SERVER_PATH)' ] && [ \"\`ls -A $(SERVER_PATH)\`\" != '' ]; then \
			tar -czf $(BACKUP_DIR)/manual_backup_\`date +%Y%m%d_%H%M%S\`.tar.gz -C $(SERVER_PATH) .; \
			echo '✅ 手动备份完成'; \
		else \
			echo '📝 服务器目录为空，无需备份'; \
		fi"