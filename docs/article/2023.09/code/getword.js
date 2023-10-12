// 去重操作
const dict = require('./data')
const words = require('./words')
const fs = require('fs')
const filePath = './filteredWords.txt'

// 使用 fs 模块创建可写流
const writeStream = fs.createWriteStream(filePath)

const arr = []
dict.forEach((item) => {
  arr.push(item.name)
})

const filteredWords = words.filter((word) => !arr.includes(word.trim()))

// 遍历 filteredWords 数组并逐行写入文件
filteredWords.forEach((word) => {
  writeStream.write(word + '\n')
})

// 关闭可写流
writeStream.end()

// 在流关闭后，可以添加一个回调以处理完成事件
writeStream.on('finish', () => {
  console.log('写入完成')
})

// 处理错误事件
writeStream.on('error', (err) => {
  console.error('写入出错', err)
})
