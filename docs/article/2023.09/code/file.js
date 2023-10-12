const fs = require('fs')
const data = require('./resource/Level8luan_2_T.json')

function generateMarkdown(dataChunk, start, end) {
  let markdown = `专八单词库(${start + 1}-${end})\n\n## 单词\n\n`

  // 定义词性缩写数组
  const abbreviations = [
    'n.',
    'int.',
    'vt.',
    'v.',
    'conj.',
    'adv.',
    'vi.',
    'adj.',
    'pron.',
    'prep.',
    'vbl.',
    'abbr.'
  ]

  for (let i = 0; i < dataChunk.length; i++) {
    const entry = dataChunk[i]
    markdown += `### ${i + 1}. ${entry.name}\n\n\`\`\`\n`

    // 处理英文词性缩写
    const transLines = entry.trans.map((line) => {
      // 根据词性缩写数组来处理换行
      return abbreviations.reduce((result, abbreviation) => {
        const parts = result.split(abbreviation)
        return parts.join('\n' + abbreviation)
      }, line)
    })

    markdown += `${transLines.join('\n')}\n\`\`\`\n\n`
  }
  // 去掉代码块后面的第一行空行
  markdown = markdown.replace(/\`\`\`\n\n/g, '```\n')
  return markdown
}

// 将数据分批次，每个文件包含 100 个元素
const batchSize = 100
const numFiles = Math.ceil(data.length / batchSize)

for (let i = 0; i < numFiles; i++) {
  const start = i * batchSize
  const end = Math.min((i + 1) * batchSize, data.length)
  const dataChunk = data.slice(start, end)

  const markdownContent = generateMarkdown(dataChunk, start, end)
  const fileName = `./output/Level8_${i + 1}.md`

  fs.writeFileSync(fileName, markdownContent, 'utf8')
  console.log(`File ${fileName} created.`)
}
