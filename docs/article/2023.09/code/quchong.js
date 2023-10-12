const arr1 = require('./resource/DanCiDeMimi_1.json')
const arr2 = require('./resource/DanCiDeMimi_2.json')
const arr3 = require('./resource/KaoYanShanGuo_2023.json')
const arr4 = require('./resource/KaoYan_2024.json')
const arr5 = require('./resource/KaoYan_3_T.json')

// // 合并三个数组
const combinedArray = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5]

// 根据'name'属性去重
const uniqueArray = combinedArray.filter(
  (value, index, self) =>
    self.findIndex((item) => item.name === value.name) === index
)
console.log(uniqueArray.length)

// 将去重后的数组写入JSON文件
const fs = require('fs') // 导入文件系统模块

const jsonContent = JSON.stringify(uniqueArray, null, 2)

fs.writeFile('kaoyan.json', jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('写入文件出错:', err)
  } else {
    console.log('已成功写入JSON文件')
  }
})
