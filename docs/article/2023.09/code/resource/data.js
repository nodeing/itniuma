const data = [
  {
    name: 'file',
    trans: ['n. 档案,公文箱,锉刀,[计算机] 文件 vt. 列队行进,归档,申请']
  },
  {
    name: 'command',
    trans: [
      'n.命令，指挥； 司令部，指挥部； [计算机]指令； 控制力 vt.指挥，控制，命令； 命令； 应得，值得 vi.给出命令； 命令，指令 adj.指挥的，根据命令（或要求）而作的'
    ]
  },
  {
    name: 'use',
    trans: ['n. 运用,用法,使用权,适用 vt. 使用,利用,对待 vi. 吸毒']
  },
  {
    name: 'program',
    trans: ['n. 节目(单),程序,计划 vt. 规划,拟定计划,制作节目']
  },
  {
    name: 'line',
    trans: [
      'n. 行,线,航线,场界,皱纹,家族 vt. &vi. 用做衬里,排成一行,顺...排列 vi. 排成一行,顺...排列,划线于'
    ]
  },
  { name: 'if', trans: ['conj. 如果，是否，即使 n. 条件,设想'] },
  { name: 'display', trans: ['n. 显示,陈列,炫耀 vt. 显示,表现,夸示'] },
  {
    name: 'set',
    trans: [
      'vt.放置，安置； 使处于某种状况； 设置； 摆放餐具 vi.落山； 出发； 凝结 n.一套，一副； 集合； 布景； 电视机 adj.固定的； 位于…的； 顽固的； 安排好的'
    ]
  },
  {
    name: 'key',
    trans: [
      'adj. 主要的,关键的 n. 钥匙,关键,答案,按键,音调 vt. 上锁,调节,提供解答,键入 vi. 使用钥匙'
    ]
  },
  {
    name: 'list',
    trans: [
      'n.清单，目录； 倾斜； 布边，布头； 狭条 vt.列出，列入； 把…编列成表； 记入名单内 vi.列于表上'
    ]
  },
  {
    name: 'by',
    trans: [
      'prep. 被, 经由, 在...之前, 根据 adv. 靠近, 经过, 放在一旁地 adj. 在旁边的, 附带的 n. 次要的事件'
    ]
  },
  {
    name: 'press',
    trans: [
      'vt.压，按； 逼迫； 紧抱 vi.压； 逼迫； 重压 n.强迫征兵； 新闻报道，出版物； 压榨； 印刷机（厂）'
    ]
  },
  { name: 'with', trans: ['prep. 和...一起,用, 随着, 包括'] },
  {
    name: 'format',
    trans: [
      'n. 设计,版式 n.[计算机]格式,DOS 命令 : 格式化(磁盘),用于空盘或使用过的磁盘建立新空盘来存储数据 v. vt.使格式化,设计,安排'
    ]
  },
  { name: 'change', trans: ['n. 变化, 零钱 v. 改变'] },
  { name: 'cursor', trans: ['光标'] },
  {
    name: 'directory',
    trans: ['n. 目录,工商名录,指南 [计算机] 目录 adj. 给予指导的']
  },
  { name: 'from', trans: ['prep. 从,从...起'] },
  { name: 'menu', trans: ['n. 菜单'] },
  {
    name: 'option',
    trans: [
      'n.选择（的自由）； 选项； 选择权； 选择能力 vt.得到或获准进行选择； 调动球员'
    ]
  },
  { name: 'character', trans: ['n. 个性, 品质; 字符; 人物; 名誉; 地位'] },
  {
    name: 'current',
    trans: ['n. (水、气、电)流, 趋势 adj. 流通的, 现在的, 最近的']
  },
  {
    name: 'type',
    trans: [
      'n.类型； 铅字； （印刷或打印的）文字； 于…类型的 vt.& vi.打字 vt.[医学]测定（血型）； 按类型把…归类； 成为…的典型； [印刷]浇铸（铅字等）'
    ]
  },
  {
    name: 'screen',
    trans: [
      'n.屏幕； 银幕； 屏风 vt.筛（煤、矿石等）； 拍摄； 放映（电影）； 庇护'
    ]
  },
  { name: 'specify', trans: ['vt. 明确说明,叙述,指定,详细说明'] },
  {
    name: 'move',
    trans: [
      'vt.& vi.移动，搬动 vi.搬家； 行动； 进展； （机器等）开动 vt.提议； 使感动； 摇动； 变化 n.改变； 迁移'
    ]
  },
  {
    name: 'disk',
    trans: ['n. 圆盘,唱片,花盘,盘形物,光盘 vt. 用圆盘耙耙地 [计算机] 磁盘']
  },
  { name: 'text', trans: ['n. 本文, 文件, 正文, 课文 vt. &vi. 发短信'] },
  {
    name: 'drive',
    trans: ['v. 开车, 驱使, 驾进力 n. 驾车, 快车道, 推进力, 驱使, 路, 街']
  },
  {
    name: 'see',
    trans: [
      'vt. 看见,经历,明白,确保,视为,拜访,陪同 vi. 注意,想象,了解,调查 n. 主教教区,主角权限'
    ]
  },
  {
    name: 'name',
    trans: ['n. 名字, 名称, 姓名 vt. 命名, 称呼, 任命 adj. 有名的, 著名的']
  },
  {
    name: 'record',
    trans: ['n. 记录,纪录,唱片 vt. 记录,(将声音等)录下，表明 adj. 关于']
  },
  {
    name: 'box',
    trans: [
      'n. 盒子,箱,专席,亭子,窘境 vt. 装...入盒中,限制住,调和,改变形状,用拳击... vi.参与拳击'
    ]
  },
  { name: 'database', trans: ['n. 数据库'] },
  { name: 'help', trans: ['n. 帮助,援助 vt. &vi. 帮助,改善'] },
  { name: 'memory', trans: ['n. 记忆,内存,回忆'] },
  {
    name: 'all',
    trans: [
      'adj. 所有的,全部的 adv. 全部,非常,全然,所有 pron. 全部,所有 n. 全部'
    ]
  },
  {
    name: 'on',
    trans: [
      'prep. 在...之上,由…支撑着,在（某一天）,使用, 根据 [计算机] 开 adv.穿着,向前（移动),（表示持续性） adj. 表示已连接、处于工作状态或使用中,表示发生,值班 abbr.=Ontario'
    ]
  },
  {
    name: 'copy',
    trans: [
      'n.复制品； 一份； （报刊等的）稿件； 准备排印的书面材料 vt.& vi.复制； 抄写； 容许复制的 vt.模仿； 仿造…的样式或图案； 抄写； 复制'
    ]
  },
  {
    name: 'shell',
    trans: [
      'n. 贝壳,壳,外形 vt. &vi. 去壳,脱落,炮击,拾贝壳 n.[计算机] DOS 命令 : 安装备用的 COMMAND.COM 文件, 并改变环境尺寸'
    ]
  },
  { name: 'delete', trans: ['vt. 删除'] },
  {
    name: 'enter',
    trans: [
      'vi. 进入,参加,开始,上台,进入角色 vt. 进入,报名,开始,加入,报价,提出 [计算机] 送入'
    ]
  },
  { name: 'margin', trans: ['n. 差额,利润,页边空白,边缘 vt. 使围绕于,加边缘'] },
  {
    name: 'mark',
    trans: [
      'n. 污迹, 标记, 分数, 烙印, 纪录 vt. 做标记于, 留意, 打分数, 留下污痕, 使...明显 vi. 做标志, 记分, 留下印记'
    ]
  },
  { name: 'also', trans: ['adv. 也, 同样地, 而且'] },
  { name: 'do', trans: ['aux. 助动词(无词意) v. 干,做'] },
  { name: 'information', trans: ['n. 信息, 情报, 新闻, 资料, 询问'] },
  { name: 'choose', trans: ['vt. &vi. 选择'] },
  {
    name: 'select',
    trans: [
      'adj. 精选的 n. 被挑选出来的人或物 v. 选择 vi. 选择,挑选,选拔 vt. 选择,挑选'
    ]
  },
  { name: 'group', trans: ['n. 团体,组,团 vt. &vi. 聚合,成群 [计算机] 成组'] },
  {
    name: 'first',
    trans: [
      'adv. 首先,第一,优先 adj. 第一的, 最早的, 一流的 n. (序数词)第一, 第一个人或事物, (大学学位的)最优等, (汽车, 自行车等的)最低挡'
    ]
  },
  {
    name: 'field',
    trans: [
      'n. 领域；牧场；旷野；战场；运动场 vi. 担任场外队员 adj. 扫描场；田赛的；野生的 vt. 把暴晒于场上；使上场；(通常成功地)回答，处理(问题)'
    ]
  },
  { name: 'procedure', trans: ['n. 程序, 手续, 步骤; 常规的做法'] },
  {
    name: 'print',
    trans: ['n. 版,印刷物,印迹 vt. &vi. 印刷,出版,打印 adj. 印刷的']
  },
  {
    name: 'return',
    trans: ['n. 返回,归还,报答,报告 vt. &vi. 返回,归还,回来 adj. 返回的']
  },
  {
    name: 'number',
    trans: ['n. 号码,数字 v. 编号,加号码,总计 vi. 总计 vt. 编号']
  },
  { name: 'selected', trans: ['adj. 选定的 动词 select 的过去式和过去分词'] },
  {
    name: 'want',
    trans: [
      'n. 缺乏, 贫困, 欲望, 需要, 不足 vi. 要, 希望, 必须 vt. 缺少, 渴望, 喜欢, 应该'
    ]
  },
  { name: 'window', trans: ['n. 窗户'] },
  { name: 'message', trans: ['n. 消息,信息,要点 vt. &vi. 传递信息, 通讯'] },
  { name: 'dialog', trans: ['n. 对话, 对白 （美）=dialogue'] },
  { name: 'example', trans: ['n. 榜样,例子 vt. 把...作为例子'] },
  { name: 'create', trans: ['vt. 创造, 造成'] },
  { name: 'insert', trans: ['n. 插入物 vt. &vi. 插入'] },
  {
    name: 'related',
    trans: ['adj. 有关系的,有关联的 v. 讲,有关系 vbl. 讲,有关系']
  },
  { name: 'item', trans: ['n. 项目,条款， 一件商品（或物品） adv. 也'] },
  { name: 'edit', trans: ['vt. 编辑,编校,修订 n. 编辑工作'] },
  {
    name: 'marked',
    trans: [
      'adj. 有记号的,显著的,醒目的 v. 作记号,打分数,表示 vbl. 作记号,打分数,表示'
    ]
  },
  { name: 'area', trans: ['n. 地区, 区域, 面积, 方面'] },
  { name: 'parameter', trans: ['n. 参数,参量,决定因素'] },
  { name: 'then', trans: ['adv. 那么, 当时，然后，于是 adj. 当时的'] },
  { name: 'variable', trans: ['adj. 可变的,易变的 n. 变量, 易变的东西'] },
  {
    name: 'tab',
    trans: ['n.(tabulate)制表, 标签, 垂饰, 拉环,账单 vt. 用标签或垂饰安装']
  },
  {
    name: 'up',
    trans: [
      'adv. 向上,增加,用尽,完全,储存,靠近 adj. 向上的,直立的,完成的,高兴的,在进行的 prep. 向上,迎着 n. 上司,上坡,繁荣,上面 vt. 升起,增加 vi. 上升'
    ]
  },
  {
    name: 'string',
    trans: [
      'n. 线,一串,字串 vt. 串起,成串,收紧, 悬挂；系；扎 vi. 给…装弦 adj. 线的'
    ]
  },
  {
    name: 'each',
    trans: ['adj. 每个, 每, 每一 adv. 每个 int. 每个, 个人, 个自']
  },
  {
    name: 'active',
    trans: ['adj. 积极的；活跃的；主动的；有效的；现役的 n. 主动语态；积极分子']
  },
  { name: 'topic', trans: ['n. 题目, 话题, 主题'] },
  {
    name: 'start',
    trans: [
      'n.开始； 动身； 开动； 起点 vt.& vi.出发，启程 vt.起动； 提出（问题）； 开办； 使开始 vi.起始； 突然出现； 突然跳起； 突然涌出'
    ]
  },
  { name: 'mode', trans: ['n. 方式,样式,模式,风格,时兴 [音乐] 调式'] },
  { name: 'selection', trans: ['n. 选择,挑选,挑选出来的人或事'] },
  { name: 'function', trans: ['n. 功能, 函数, 重大聚会 vi. 运行, 起作用'] },
  { name: 'word', trans: ['n. 词, 单词, 消息, 诺言 vt. 用词语表达'] },
  {
    name: 'make',
    trans: [
      'vt.做，制造； 生产，制定； 使成为； 使产生 vi.开始； 尝试； 行进； 增大 n.制造； 生产量； 性格； 形状，样式'
    ]
  },
  {
    name: 'right',
    trans: [
      'adj. 正确的,正直的,合适的,垂直的,右面的，正常的,正面的 n. 权利,右，正义，实况 adv. 正好,恰当,径直地,正确地,立即,非常,向右边 vt. 纠正,扶直,公正对待,伸冤 vi. 复正'
    ]
  },
  {
    name: 'value',
    trans: ['n. 价值, 重要性, 价格, (pl)价值观 vt. 评价, 估价, 重视']
  },
  {
    name: 'button',
    trans: [
      'n. 钮扣,徽章,像纽扣的东西,未成熟的蘑菇,按钮 vt. 用纽扣装饰,钉纽扣,闭嘴 vi. 扣上'
    ]
  },
  {
    name: 'index',
    trans: [
      'n.索引； <数>指数； 指示； 标志 vt.给…编索引； 把…编入索引； [经济学]按生活指数调整（工资、价格等） vi.[机械学]转位'
    ]
  },
  {
    name: 'without',
    trans: [
      'adv.在外部； 户外； 缺少； 没有或不显示某事物 prep.没有，缺乏； 在外面 conj.除非，如果不'
    ]
  },
  { name: 'appear', trans: ['vi. 出现,显得,出版,抵达'] },
  {
    name: 'left',
    trans: [
      'adj.左边的，左侧的； 左派的 n.左，左面； [军]左翼； 左派，激进分子 adv.向左； 在左边 v.离开( leave 的过去式和过去分词)'
    ]
  },
  {
    name: 'save',
    trans: [
      'vt.节省； 保存； 储蓄； 解救 vi.节省； 挽救； 救球 prep.&conj.除…之外 n.救援，救援'
    ]
  },
  {
    name: 'next',
    trans: [
      'adj.紧接在后的； 次于的； 贴近的； 紧邻的 adv.接下去； 然后； 居后地； 依次的 n.下一位； 下一个 prep.靠近； 居于…之后； 在…的隔壁'
    ]
  },
  {
    name: 'off',
    trans: [
      'adj. 远的,休假的,空闲的,落后懈怠的 adv. 离开,出发,距离隔断,分割,不继续运行,下台 prep. 离开,脱落,下班 vi. 离开, 走开'
    ]
  },
  {
    name: 'following',
    trans: ['n. 下列各项,部下,党羽 adj. 下列的,其次的 prep. 在（某事）以后']
  },
  { name: 'control', trans: ['n. 克制,控制,管制,操作装置 vt. 控制,掌管,支配'] },
  {
    name: 'only',
    trans: [
      'adj. 最好的,唯一的,出众的 adv. 仅仅,只有,专门地,唯一地,刚才 conj. 除非, 但是, 然而, 毕竟'
    ]
  },
  { name: 'user', trans: ['n. 用户, 使用者'] },
  {
    name: 'end',
    trans: ['n. 结束,终点,目标,末端 vt.& vi. 结束,终结 adj. 最终的']
  },
  { name: 'system', trans: ['n. 系统,体系,制度,体制'] },
  { name: 'contain', trans: ['vt. 包含,容纳,克制,抑制 vi. 自制'] },
  {
    name: 'time',
    trans: [
      'n.时间； 时刻； 时代； 次 vt.为…安排时间； 测定…的时间； 调准（机械的）速度； 拨准（钟、表）的快慢 vi.合拍； 和谐； 打拍子 adj.定时的； 定期的； [美国英语]分期（付款）的'
    ]
  },
  {
    name: 'letter',
    trans: [
      'n.信； 证书，许可证； 字母，文字； 字面意义 vt.用字母标明； 写字母于； 加标题 vi.写印刷体字母'
    ]
  },
  { name: 'data', trans: ['n. (datum 的复数)资料,数据'] },
  {
    name: 'setting',
    trans: [
      'n.镶嵌； 环境； 装置； （某事、戏剧、小说等的）背景 v.放( set 的现在分词)； 安插； 树立； 安排'
    ]
  },
  {
    name: 'desire',
    trans: ['n. 愿望, 欲望, 情欲 v. 向往, 要求, 请求 vt. 渴望']
  },
  {
    name: 'position',
    trans: ['n. 位置, 职位; 状态, 立场 vt. 安置, 决定...的位置']
  },
  {
    name: 'down',
    trans: [
      'adj. 向下的,降低的,情绪低落,停止运行 adv. 向下的,下跌,在南方 n. 绒毛,汗毛,轻视 prep. 沿着...而下'
    ]
  },
  { name: 'task', trans: ['n. 工作,任务 vt. 交给某人（任务)'] },
  {
    name: 'view',
    trans: ['n. 视野,风景,见解,方法,检查 vt. 把...视为,看,考虑']
  },
  {
    name: 'switch',
    trans: [
      'n. 开关, 电门，闸，转换器, vt. &vi. 鞭打，转轨，交换，突然转变, 摆动，接通或切断…电流'
    ]
  },
  { name: 'include', trans: ['v. 包括,包含,连...在内 [计算机] 包括'] },
  { name: 'get', trans: ['vt. 使得；获得；受到；变成 vi. 成为；变得；到达'] },
  {
    name: 'default',
    trans: [
      'n. 假设值,默认(值),不履行责任,缺席 v. 默认,不履行义务,缺席,拖欠 [计算机] 缺省'
    ]
  },
  { name: 'structure', trans: ['n. 结构,构造,建筑物 v. 构成,建立,建造'] },
  { name: 'into', trans: ['prep. 到...里'] },
  {
    name: 'path',
    trans: [
      'n.小路，路； 路线，路程； 〈比喻〉（人生的）道路； （思想，行为，生活的）途径'
    ]
  },
  {
    name: 'blank',
    trans: [
      'adj. 空白的, 茫然的, 全部的, 面无表情的, 未完工的 n. 空白(处), 空隙, 空虚, (有弹药而无弹头的)空弹 vi. 消失, 走神 vt. 使模糊不清, 删除, 封闭, (比赛时连续得分)使对手得零分'
    ]
  },
  {
    name: 'open',
    trans: [
      'n. 公开,户外,空旷 adj. 开着的,开放的,公开的 vt. 打开,公开,开放,开始 vi. 开, 通行,大叫'
    ]
  },
  { name: 'add', trans: ['vt. &vi. 增加'] },
  { name: 'enable', trans: ['vt. 使...能够,使可行 [计算机] 使能'] },
  { name: 'operation', trans: ['n. 手术, 行动，活动, 操作'] },
  { name: 'erase', trans: ['v. 抹去,擦掉 [计算机] 擦除'] },
  { name: 'filename', trans: ['文件名'] },
  { name: 'search', trans: ['n. 搜寻, 探究 v. 搜寻, 探求, 调查'] },
  { name: 'another', trans: ['adj. 另一,再一 pron.&amp;prep. 另一个'] },
  {
    name: 'last',
    trans: [
      'adj. 最后的,末尾的,最近的,晚了，迟到了 adv. 最后,最新 n. 最后来的人（或发生的事） vi. &vt. 持续'
    ]
  },
  { name: 'column', trans: ['n.纵队，列； 圆柱； 专栏'] },
  {
    name: 'after',
    trans: ['adj. 以后的 adv. 以后, 后来 conj. 在...以后 prep. 在...之后']
  },
  {
    name: 'prompt',
    trans: [
      'adj. 迅速的, 敏捷的, 立刻的 vt. 激起, 促进, 推动; 提示 vi. 提示 n. 提示; 提示的内容 n. [商]付款期限'
    ]
  },
  { name: 'two', trans: ['num. 二，两个'] },
  { name: 'execute', trans: ['vt. 执行,处决，实行,完成 [计算机] 执行'] },
  { name: 'about', trans: ['adj. 准备 adv. 大约 prep. 关于'] },
  {
    name: 'escape',
    trans: ['n. 逃亡,避难设备 vt. &vi. 逃脱,避开 adj. 逃避的']
  },
  { name: 'error', trans: ['n. 错误, 过失'] },
  { name: 'currently', trans: ['adv. 现在，现时，目前，当前'] },
  { name: 'extension', trans: ['n. 延长,扩充,范围,分机号码'] },
  { name: 'same', trans: ['adj. 同样的 adv. 同样地 pron. 同样的人或事'] },
  { name: 'status', trans: ['n. 地位, 身份, 情形, 状况'] },
  {
    name: 'run',
    trans: [
      'n. 奔跑,路程,趋向 vt. 跑,放牧,经营,走私,使运转,浇铸,使遭受 vi. 跑,竞赛,行驶,运转,遭遇,持续,熔化,褪色,流,蔓延,传播 adj. 熔化的,浇铸的,洄游的'
    ]
  },
  { name: 'argument', trans: ['n. 辩论,争论,论点(据),理由'] },
  { name: 'statement', trans: ['n. 声明, 陈述'] },
  {
    name: 'shift',
    trans: ['n. 交换,变化,移动,接班者 vt. 更替,移转,变声 vi. 改变,定责,更衣']
  },
  {
    name: 'store',
    trans: [
      'n. 商店,贮藏,仓库 vt. 储存,贮藏,供给,保存 adj. 储备的 (在计算机里)存贮；记忆'
    ]
  },
  { name: 'scroll', trans: ['n. 卷轴,目录 vt.& vi. 卷动'] },
  { name: 'replace', trans: ['vt. 取代,更换'] },
  { name: 'macro', trans: ['adj. 巨大的，大范围的，总的 n. [计算机]宏'] },
  {
    name: 'page',
    trans: ['n. 页 v. (给...)当听差 vt. (通过扩音器、传呼机等)呼叫']
  },
  { name: 'quit', trans: ['v. 离开,辞职,停止'] },
  { name: 'define', trans: ['vt. 定义, 解释'] },
  {
    name: 'reference',
    trans: ['n. 参考, 出处, 参照 n. 推荐人, 推荐函 vt. 提供参考']
  },
  {
    name: 'other',
    trans: ['adj. 别的,其他的 pron. 另一个人(或事) n. 其他人(或事)']
  },
  { name: 'while', trans: ['conj. 当...的时候,然而 n. &adj. 一会儿 vt. 消磨'] },
  { name: 'pressing', trans: ['adj. 紧迫的,紧急的,切实的 vbl. 压迫'] },
  { name: 'restore', trans: ['vt. 恢复,归还,翻新'] },
  {
    name: 'top',
    trans: [
      'n. 顶端, 极点, 盖子, (女式)上衣, 最高地位, 陀螺 adj. 最高的, 顶上的, 最一流的 vt. 高耸, 加以顶盖, 超越, 上升到顶端 vi. 得出结论, 到达顶峰'
    ]
  },
  {
    name: 'how',
    trans: ['adv. 如何,怎样,多么,多少 conj. 如何,怎样,以...方式 n. 方式']
  },
  { name: 'color', trans: ['n. 颜色,气色,风格 vt. 把...涂颜色,粉饰 vi. 脸红'] },
  { name: 'allow', trans: ['vi. (for)考虑到,使可能 vt. 给予,承认,允许, 断定'] },
  {
    name: 'block',
    trans: ['n.块； 街区； <英>大楼，大厦； 障碍物，阻碍 vt.阻止； 阻塞； 限制']
  },
  { name: 'decimal', trans: ['adj. 十进位的,小数的 n. 小数'] },
  {
    name: 'main',
    trans: ['adj. 主要的 n. 主要部分,干线,（水、煤气、电等的）供应系统,体力']
  },
  { name: 'definition', trans: ['n. 定义, 阐释，清晰度'] },
  { name: 'between', trans: ['adv. 在中间 prep. 在...之间'] },
  { name: 'optional', trans: ['adj. 可以任选的,非强制的'] },
  {
    name: 'date',
    trans: [
      'n. 日期,约会,枣椰子 vt. 约会,定日期 vi. 追溯到 n.[计算机] DOS 命令 : 显示或设置系统日期'
    ]
  },
  {
    name: 'remove',
    trans: ['n. 间距, 移动 vt. 除去,开除, 移动, 取下, 拿走 vi. 迁徙,离开,搬迁']
  },
  { name: 'arrow', trans: ['n. 箭，箭头 vi. 快且笔直的前进有如穿梭的箭'] },
  {
    name: 'label',
    trans: [
      'n.标签； 称标记，符号； [建] 门或窗户上面的线脚 vt.贴标签于； 把…称为； 把…列为； [化]用放射性元素使（元素或原子等）示踪'
    ]
  },
  {
    name: 'within',
    trans: ['adv. 在内 n. 里面 prep. 在...里面 adj. 在里面的']
  },
  {
    name: 'issue',
    trans: [
      'n. 问题；流出；期号；发行物 vt. 发行，发布；发给；放出，排出 vi. 发行；流出；造成…结果；传下'
    ]
  },
  { name: 'different', trans: ['adj. 不同的,与众不同的'] },
  { name: 'available', trans: ['adj. 可用的,可得到的,有用的，有效的'] },
  { name: 'returned', trans: ['adj.被送回的,归来的'] },
  {
    name: 'associate',
    trans: [
      'vt.（使）发生联系； （使）联合； 结交； 联想 vi.联盟； 陪伴同事 n.合伙人； 伴侣，同志； 非正式会员 adj.联合的； 合伙的； 非正式的； （性质上）有密切联系的'
    ]
  },
  { name: 'attribute', trans: ['n. 属性, 特征; 标志, 象征 vt. 归于, 属于'] },
  { name: 'DOS', trans: ['n. [计] 磁盘操作系统（=Disk Operating System）'] },
  {
    name: 'before',
    trans: [
      'prep.在…之前； 先于，优于； 当着…的面； 与其… conj.在…之前； 在…以前； 比…早些； 与其… adv.先前，从前； 在前，在前方'
    ]
  },
  {
    name: 'order',
    trans: ['n.命令； 秩序； 规则，制度； 次序 vt.命令； 订购； 整理 vi.下订单']
  },
  { name: 'modify', trans: ['vt. 修改,调正,缓和 vi. 修改'] },
  { name: 'array', trans: ['n. 数组,(陈)排列,大批,一系列 vt. 排列,布署,打扮'] },
  {
    name: 'mouse',
    trans: [
      'n. 老鼠,鼠标，胆小如鼠的人，乌青色的肿块 vi. 捕鼠，蹑手蹑脚行动 vt. 仔细寻找'
    ]
  },
  {
    name: 'note',
    trans: [
      'n. 笔记, 注解, 备忘录, 音符, 音调, 票据, 便条, 纸币 vt. 记录, 注解, 注意'
    ]
  },
  { name: 'locate', trans: ['vt. 找出,设于,位于,建立 vi. 建立'] },
  { name: 'video', trans: ['adj. 录像的 n. 录像(机) vt. 制作...的录像'] },
  { name: 'printer', trans: ['n. 打印机，印刷工'] },
  { name: 'bar', trans: ['n. 条,棒,横木,酒吧 vt. 禁止,阻挠'] },
  {
    name: 'bottom',
    trans: [
      'n. 底部;臀部;船身;水底;服装下面的部分;低洼地;底色;尽头 adj. 底部的 vt. 给...装底,建立基础,到达底部 vi. 到达底部,垫底，降到最低点'
    ]
  },
  { name: 'carriage', trans: ['n. 四轮马车,车厢'] },
  {
    name: 'content',
    trans: ['n. 内容, 目录, 含量 adj. 满足的, 满意的 vt. 使...满足, 使...安心']
  },
  {
    name: 'either',
    trans: ['pron. 任一的 conj. 或, 也 adj. 任一, 两方的 adv. 也']
  },
  { name: 'OK', trans: ['adj. 好, 不错, 可以 adv. 好, 不错, 可以'] },
  {
    name: 'space',
    trans: [
      'n. 位置, 空间, 距离, 太空, 空地, 持续的一段时间 vt. &vi. 均匀隔开, 分隔'
    ]
  },
  { name: 'editor', trans: ['n. 编辑, 编者'] },
  { name: 'exist', trans: ['v. 存在'] },
  { name: 'scope', trans: ['n. 能力，范围，眼界，机会，余地 vt. 仔细研究'] },
  { name: 'paragraph', trans: ['n. 段落 vt. 将...分段,写短评 vi. 写短评'] },
  { name: 'multi', trans: ['n. 多种；多数'] },
  {
    name: 'clear',
    trans: [
      'adj. 清楚的,明确的,澄清的,头脑清醒的 vt. 澄清,清除障碍, 使明亮, 明确 vi. 变清晰, 消失, 放晴 adv. 清楚地, 一直 n. 间隙, 空地, 开旷的地方'
    ]
  },
  { name: 'exit', trans: ['n. 出口,退场,离去 vi. 退出,死亡 vt. 离开'] },
  {
    name: 'report',
    trans: ['n. 传闻,报告,成绩单,爆炸声 vt. 报告,报导,记录 vi. 叙述,报告']
  },
  { name: 'execution', trans: ['n. 实行,完成,执行'] },
  { name: 'backup', trans: ['n. 后备,后备'] },
  { name: 'version', trans: ['n. 版本, 说法，翻译'] },
  { name: 'find', trans: ['vt. &vi. 发现,感觉到,认为 n. 发现物'] },
  {
    name: 'pointer',
    trans: ['n. 指针，教鞭，（能指出猎物位置的）猎犬，暗示 Pointer: 指极星']
  },
  { name: 'subset', trans: ['n. 子集'] },
  { name: 'keyboard', trans: ['n. 键盘 vt. 用键盘输入(信息)'] },
  {
    name: 'full',
    trans: [
      'adj.满的，装满的； 完全的，完整的； 丰富的； 详尽的 adv.极其，十分； 充分地，完全地； 整整； 直接地 n.充分，完全； 全部； 完整； 极盛时 v.把衣服缝得宽大； 把裙子缝出皱褶； [印]蒸洗，漂洗'
    ]
  },
  {
    name: 'check',
    trans: [
      'vt.检查，核对； 制止，抑制； 在…上打勾 vi.核实，查核； 中止； 打勾； [象棋]将一军 n.<美>支票； 制止，抑制； 检验，核对'
    ]
  },
  { name: 'should', trans: ['verb auxiliary. 应该,竟然,可能'] },
  {
    name: 'single',
    trans: [
      'adj. 单身的,单纯的,单一的 n. 单程票,单曲,单人房,单身者 vt. 单独挑出 vi. (棒球)作一垒打'
    ]
  },
  { name: 'provide', trans: ['vi. 供给, 提供 vt. 提供; 规定; 准备'] },
  {
    name: 'title',
    trans: [
      'n. 头衔,名称,标题,所有权,资格,冠军 vt. 赋予称号,加标题于 adj. 标题的'
    ]
  },
  { name: 'expression', trans: ['n. 表达,表示,表现,表情,措辞,词句'] },
  {
    name: 'through',
    trans: [
      'adv. 穿越, 完全 prep. 经过, 穿过, 凭借 adj. 完成的, 完结的; 贯穿的, 直通的'
    ]
  },
  {
    name: 'toggle',
    trans: [
      'n. 乒乓开关，触发器，套索钉，棒形纽扣 vt. 系纽扣，提供索钉 vi. 开开关'
    ]
  },
  { name: 'code', trans: ['n. 码,密码,法规,准则 vt. 把...编码,制成法典'] },
  { name: 'such', trans: ['adj. 如此的,这样的 pron. 这样的 adv. 如此地'] },
  {
    name: 'beginning',
    trans: ['n. 开始,开端，起源，早期 adj. 刚开始的 动词 begin 的现在分词']
  },
  {
    name: 'guide',
    trans: [
      'vt.引路； 指导； 操纵； 影响 n.指导者； 向导； 导游； 有指导意义的事物'
    ]
  },
  { name: 'tree', trans: ['n. 树'] },
  { name: 'environment', trans: ['n. 环境,外界'] },
  {
    name: 'but',
    trans: ['adv. 仅仅,只 conj. 但是 prep. 除...以外 pron. 只有']
  },
  { name: 'device', trans: ['n. 装置, 设计, 策略, 设备'] },
  {
    name: 'highlight',
    trans: [
      'n. 加亮区,精彩部分, 最重要的细节或事件, 闪光点 vt. 加亮,强调, 使...显得重要, 照亮 [计算机] 醒目'
    ]
  },
  {
    name: 'call',
    trans: [
      'v.呼唤，喊叫； 召唤，叫来，召集； 下令，命令； 打电话给 n.喊叫，大声喊； 电话联络； 必要，理由； 要求'
    ]
  },
  { name: 'continue', trans: ['vt. &vi. 继续, 连续, 维持'] },
  { name: 'indicate', trans: ['v.指明, 表明, 显示, 象征, 指示'] },
  { name: 'until', trans: ['prep. 直到...为止 conj. 直到...时才...'] },
  {
    name: 'begin',
    trans: [
      'vt.& vi.开始； 着手； 创始； 创办 vi.（从…）开始； 起始； 起初是； 开始讲话'
    ]
  },
  {
    name: 'place',
    trans: ['n. 地方,职位,获奖的名次 vt. 放置,任命,安排 vi. 获得名次']
  },
  { name: 'rename', trans: ['v. 重新命名, 改名 n. [计算机]DOS 命令'] },
  { name: 'swap', trans: ['n. 交换 vt. &vi. 交换,用...作交易'] },
  {
    name: 'work',
    trans: [
      'n. 工作,作用,成果,作品,善行,工艺,奏效,建筑工程,工厂,(机械)活动部件 adj. 工作的 vi. 创造, 实现, 有工作, 起作用, 操作, 正常运转, 成功, 产生影响, 逐渐进行, 处理 vt. 造成, 产生, 使运转, 锻造, 奋力达到, 利用'
    ]
  },
  {
    name: 'remain',
    trans: ['v. 保持, 依然, 剩余, 留下, 逗留 n. 遗迹, 剩余物, 残骸']
  },
  {
    name: 'close',
    trans: [
      'n. 完结, 结论 adj. 靠近的,亲近的，几乎，密切的, 势均力敌的 vt. 关,结束,靠近 vi. 关，停业, 搏斗 adv. 紧挨着, 紧紧地'
    ]
  },
  { name: 'combination', trans: ['n. 结合,联合，联合体'] },
  {
    name: 'profile',
    trans: [
      'n.侧面，半面； 外形，轮廓； [航]翼型； 人物简介 vt.描…的轮廓； 给…画侧面图； 为（某人）写传略； [机]铣出…的轮廓'
    ]
  },
  { name: 'unless', trans: ['conj. 除非 prep. 除...外'] },
  {
    name: 'except',
    trans: ['vt. 除,除外 prep.&conj. 除了...之外,若不是,除非']
  },
  {
    name: 'turn',
    trans: [
      'vt.& vi.使转动； 旋转； 使改变方向； 使不适 vt.使变酸； 使变换； 使变为 n.翻转； （路线或方向的）改变； 机会'
    ]
  },
  {
    name: 'back',
    trans: [
      'adj. 后面的，偏远的, 过时的, 积欠的, 向后的 adv. 向后地 n. 后背, 背脊，后面, 靠背 vt. 后退，支持 vi. 后退'
    ]
  },
  {
    name: 'sure',
    trans: ['adj. 确信, 必然的, 必定的 adv. 当然, 确实地, 无疑地']
  },
  {
    name: 'section',
    trans: ['n. 零件,部分,章节,区域,部门,路段,断面 vt. 划分,切开 vi. 划分']
  },
  {
    name: 'follow',
    trans: ['vt. 跟随,沿行,遵循,听得懂 vi. 跟着做,之后是 n. 跟随']
  },
  {
    name: 'split',
    trans: ['n. 劈开, 裂片, 裂口 adj. 分散的 v. 分离, 分开, 劈开']
  },
  { name: 'need', trans: ['n. 需要,必须,缺乏 v. 需要,必需 conj. 需要'] },
  {
    name: 'access',
    trans: [
      'n.入口，出口； 接近，进入； 增长； 爆发 vt.接近，进入； 使用，接近，获取'
    ]
  },
  { name: 'additional', trans: ['adj. 附加的, 另外的'] },
  { name: 'cancel', trans: ['n. 取消,撤消 vt. 取消,删去, 约分 vi. 抵消'] },
  {
    name: 'document',
    trans: ['n. 文件,公文 vt. 记载,用文件等证明 [计算机] 文档']
  },
  { name: 'case', trans: ['n. 情况,实情,箱,案例 vt. 装箱,踩点'] },
  { name: 'numeric', trans: ['adj. 数字的，数值的 n. 数，数字'] },
  {
    name: 'go',
    trans: [
      'vi. 去, 走, 变得, 进行, 放, 通往, 消失 vt. 走过, 称重 [计算机] 执行'
    ]
  },
  {
    name: 'load',
    trans: [
      'n. 负荷, 重担, 装载量 v. 装载, 装填, 担负, 给(枪)装子弹 [计算机] 装入'
    ]
  },
  { name: 'try', trans: ['n. 尝试,试验 vt. 审理,尝试,试验 vi. 尝试'] },
  {
    name: 'size',
    trans: [
      'n. 尺寸, 大小 vt. 按大小排列(或分类) adj. 一定大小的 vt. 用...填充(某物)'
    ]
  },
  { name: 'entire', trans: ['adj. 全部的,完整的，同性质的，纯正的，全面的'] },
  { name: 'leave', trans: ['离开, 告假, 遗留, 听任'] },
  { name: 'history', trans: ['n. 历史'] },
  {
    name: 'second',
    trans: ['n. vt. 支持 n. 第二,秒 adj. 第二的,次等的,另一个的']
  },
  { name: 'reflow', trans: ['vi. 回流'] },
  { name: 'output', trans: ['n. 产量,输出,输出功率,输出端 vt. 输出(信息等)'] },
  {
    name: 'out',
    trans: [
      'vt. adj. 外面的,向外的,落伍的,不做考虑的 adv. 向外,离岸,外出,出局,出去,用尽,完成,出现,结束 vt. 释放出,揭露 vi. 揭发 prep. 向外,通过 n. 外面,在野者,下台者,出局的一击'
    ]
  },
  {
    name: 'both',
    trans: [
      'adj.二者，两者都 pron.二者 adv.二者，二者都 conj.不仅…而且…，…和…都'
    ]
  },
  {
    name: 'install',
    trans: [
      'v. 安装,安置,使...就职 n.[计算机] 安装,DOS 命令 : 装入结束且驻留软件'
    ]
  },
  { name: 'source', trans: ['n. 来源'] },
  {
    name: 'way',
    trans: [
      'n. 方法,道路,方向,作风,(某)方面,程度,状态 adv. 非常,很多,很远 adj. 与路线的中间点相关的,路线的中间点'
    ]
  },
  {
    name: 'assign',
    trans: ['v. 分配,指派 n.[计算机] DOS 命令将驱动器符重指向第二个驱动器符']
  },
  { name: 'support', trans: ['n. 支持, 援助, 供养 vt. 支援, 帮助, 支持'] },
  {
    name: 'specific',
    trans: ['adj. 特殊的, 明确的, 具有特效的 n. 特效药, 特性, 详情']
  },
  { name: 'join', trans: ['v. 参加, 结合, 联合, 加入'] },
  {
    name: 'expand',
    trans: ['vt. 增加,详述,扩展,使...膨胀 vi. 扩展,增加,详述']
  },
  {
    name: 'like',
    trans: [
      'adj. 相似的,同样的 vt. &vi. 喜欢,愿意,想 prep. 像,如同 n. 爱好,类似的人（或物） adv. 大概,和…一样 conj. 如同'
    ]
  },
  { name: 'Diskette', trans: ['n. [计]软盘'] },
  { name: 'skip', trans: ['n. 跳跃,跳读 vt. &vi. 跳越,蹦跳,略过,跳过'] },
  {
    name: 'application',
    trans: [
      'n.适用，应用，运用； 申请，请求，申请表格； 勤勉，用功； 敷用，敷用药'
    ]
  },
  { name: 'confirmation', trans: ['n. 确认, 证实, 基督教的坚信礼'] },
  { name: 'whether', trans: ['conj.&amp;adv. 是否'] },
  {
    name: 'hold',
    trans: [
      'vt.拿住，握住； 保留，保存； 扣留，拘押； 容纳 vi.拿住，握住； 同意，赞成； 保持不变； 有效 n.握住； 保留； 控制'
    ]
  },
  {
    name: 'click',
    trans: [
      'n. 点击,滴答声,拍答声 vt. 点击,作滴答声,使...作拍答声 vi. 击打,完全符合,成功,以点击的方式选择'
    ]
  },
  { name: 'write', trans: ['v. 写'] },
  { name: 'byte', trans: ['n. 字节, 8 位元组'] },
  { name: 'abbreviate', trans: ['vt. 缩写，缩短，使...简略'] },
  {
    name: 'show',
    trans: ['n. 显示,表现,表演,事情 vt. &vi. 表示,显现,展现,指示']
  },
  {
    name: 'otherwise',
    trans: ['adv. 否则,不同地,在不同方面 pron. 其他 adj. 不同的']
  },
  { name: 'working', trans: ['adj. 工人的, 劳动的'] },
  { name: 'delimiter', trans: ['n. 定界符, 分隔符'] },
  { name: 'location', trans: ['n. 地点,位置'] },
  { name: 'perform', trans: ['v. 执行, 表演, 做'] },
  { name: 'graphic', trans: ['adj. 生动的,图表的 n. 图表'] },
  {
    name: 'read',
    trans: [
      'vt.& vi.阅读，朗读； 显示； 研究； 看得懂 vt.显示； 阅读； 读懂，理解 n.阅读； 读物； 读书； 里德（人名） adj.被朗读的； 博识的； 博览的； 有学问的'
    ]
  },
  { name: 'confirm', trans: ['v. 确定, 批准, 证实'] },
  {
    name: 'sort',
    trans: [
      'n. 种类,样子,态度 v. 分类,整理,排序 n.[计算机] DOS 命令 : 在字符型文件中进行数据排序, 或者将 DOS 命令的输出进行排序'
    ]
  },
  { name: 'clause', trans: ['n. 分句, 从句, 条款, 款项'] },
  { name: 'once', trans: ['adv. 一次, 曾经 conj. 一旦 n. 一次 adj. 曾经的'] },
  { name: 'however', trans: ['adv. 然而 conj. 然而, 可是, 不过'] },
  { name: 'extend', trans: ['v. 扩充, 延伸, 伸展, 扩展'] },
  {
    name: 'look',
    trans: [
      'n. 看, 神色, 样子, 脸色 vi. 看, 注意, 朝着, 好象, 显得 vt. 打量, 注视, 用眼神或脸色表示, 期待'
    ]
  },
  {
    name: 'now',
    trans: [
      'n. 现在,此刻 adj. 现存的, 目前的 adv. 现在,立刻 conj. 既然 abbr. =National Organization of Women 全国妇女组织'
    ]
  },
  {
    name: 'original',
    trans: [
      'adj. 最初的, 原始的; 有独创性的, 原版的 n. 原件, 原稿; 有独创性的人, 怪人'
    ]
  },
  { name: 'correspond', trans: ['vi. 符合,通信,相当'] },
  { name: 'property', trans: ['n. 财产; 性质; 道具'] },
  { name: 'several', trans: ['adj. 几个,各自的 pron. 若干'] },
  { name: 'learn', trans: ['vt. 学习,获悉 vi. 了解,习得'] },
  { name: 'cause', trans: ['n. 原因；事业；目标 vt. 引起；使遭受'] },
  {
    name: 'bracket',
    trans: ['n. 支架, 括号, 档次 vt. 支撑, 放在括号内, 归入一类, 包含, 支持']
  },
  { name: 'omit', trans: ['vt. 省略,疏忽,遗漏'] },
  {
    name: 'running',
    trans: ['n. 跑步;经营,管理 adj. 奔跑的;流动的;运转中的 adv. 连续地']
  },
  {
    name: 'edge',
    trans: ['n. 边,边缘,刀口 vt. 给...加上边,缓慢横过,使逐渐丧失 vi. 徐徐前进']
  },
  { name: 'form', trans: ['n. 形式, 形状, 表格 v. 形成, 组成, 建立'] },
  { name: 'instruction', trans: ['n. 说明,须知,指令,教学'] },
  {
    name: 'ASCII',
    trans: [
      'American Standard Code for Information Interchange,美国信息互换标准代码'
    ]
  },
  {
    name: 'below',
    trans: [
      'adv.在下面，到下面 prep.（表示位置）在…下面； （表示状态）在…掩饰之下； （表示比较）不及； 低于'
    ]
  },
  {
    name: 'standard',
    trans: [
      'n.标准，规格； 旗，军旗； 度量衡标准； 直立支柱 adj.标准的，合格的； 普遍的，一般的； 公认为优秀的'
    ]
  },
  { name: 'occurrence', trans: ['n. 发生,事件,发现'] },
  {
    name: 'lock',
    trans: [
      'n.锁； 水闸，船闸； （机器部件等的）锁定； 一把，一撮 vt.锁上； 锁好，关好； 使固定； 隐藏 vi.卡住，不动； 纠结； 僵硬不动'
    ]
  },
  {
    name: 'append',
    trans: ['v. 附加,添加,悬挂 n.[计算机] DOS 命令建立数据文件的子目录搜索路经']
  },
  { name: 'destination', trans: ['n. 目的地,终点,景点'] },
  { name: 'password', trans: ['n. 口令，密码'] },
  {
    name: 'point',
    trans: ['n. 点, 要点, 尖端，细节，目标 vt. &vi. 指出, 瞄准']
  },
  { name: 'variety', trans: ['n. 多样, 种类, 杂耍'] },
  { name: 'many', trans: ['n. 许多人,许多 adj. 许多的 pron. 许多人或物'] },
  { name: 'buffer', trans: ['n. 缓冲,缓冲区 vt. 减轻,缓冲'] },
  { name: 'useful', trans: ['adj. 有用的'] },
  {
    name: 'object',
    trans: ['n. 物, 物体, 目标, 宾语 v. 反对，提出...作为反对的理由']
  },
  { name: 'again', trans: ['adv. 又,再,另一方面'] },
  {
    name: 'carry',
    trans: [
      'n. 搬运, 射程, 投射, 联运 vt. 负载, 运输, 传送, 传播, 表达, 带有, 容纳, 承担, 怀孕, 延续, 推动, 赢得, 记录 vi. 负载, 被传达, 容许被运输, 被通过'
    ]
  },
  { name: 'update', trans: ['vt. &vi. 更新,补充最新资料 n. 更新'] },
  { name: 'moving', trans: ['vbl.移动'] },
  { name: 'coprocessor', trans: ['协处理器'] },
  { name: 'overlay', trans: ['覆盖'] },
  {
    name: 'practice',
    trans: ['n. 练习, 实行, 习惯; 业务 vt. &vi 练习, 实习, 开业']
  },
  { name: 'navigation', trans: ['n. 航行, 航海, 导航'] },
  { name: 'automatically', trans: ['adj. 不经思索的 adv. 自动地'] },
  {
    name: 'total',
    trans: [
      'adj.总计的（金额等）； 全部的； 完全的； 绝对的 n.总计，总数； 全体数量 vt.& vi.总计达，计算…的总数'
    ]
  },
  { name: 'previous', trans: ['adj. 在...之前, 先, 前, 以前的'] },
  { name: 'software', trans: ['n. 软件'] },
  { name: 'shortcut', trans: ['n. 捷径 v. 抄近路,走捷径'] },
  {
    name: 'long',
    trans: [
      'adj. 长的,很久的,冗长的 vi. 渴望,热望,极想 adv. 长期地,远地 n. 长时间,长音节'
    ]
  },
  { name: 'unique', trans: ['adj. 独一无二的, 独特的, 稀罕的'] },
  {
    name: 'part',
    trans: [
      'n. 部份,零件,角色,部位 vt. 分开,分离,分配 vi. 分离,离开 adv. 部份地 adj. 分离的'
    ]
  },
  { name: 'internal', trans: ['adj. 国内的, 内在的，身体内部的'] },
  { name: 'fill', trans: ['vt. 装满,填充,弥漫,担任 n. 足量'] },
  {
    name: 'basic',
    trans: [
      'adj.基本的； [化学]碱性的； [地质学]基性的； 首要的 n.基础，基本； 基本原则，基本原理，基本规律； 要素； 基础训练'
    ]
  },
  { name: 'math', trans: ['n. 数学'] },
  { name: 'since', trans: ['adv. 后来 conj. 既然,因为,自从 prep. 自从'] },
  {
    name: 'determine',
    trans: [
      'vt.& vi.（使）下决心，（使）做出决定 vt.决定，确定； 判定，判决； 使决定； 限定 vi.[主用于法律]了结，终止，结束'
    ]
  },
  { name: 'making', trans: ['n. 制成 动词 make 的现在分词'] },
  {
    name: 'center',
    trans: [
      'n. 中心, 中间, 主角, 中锋, 重点 vi. 居中, 聚焦于... vt. 使集中, 放在中央'
    ]
  },
  { name: 'already', trans: ['adv. 已经'] },
  { name: 'keyword', trans: ['n. 关键字'] },
  { name: 'action', trans: ['n. 起诉，行为，作用，情节,活动'] },
  {
    name: 'condition',
    trans: ['n. 情况, 条件 v. 以...为条件, 决定, 支配, 训练']
  },
  {
    name: 'quick',
    trans: [
      'adj.快的，急速的； 聪明的，凌厉的； 灵活的； 短时间做成的 adv.迅速地，快速地 n.（指甲下的）活肉； 感情的中枢，感觉最敏锐的地方； 要害，核心'
    ]
  },
  {
    name: 'give',
    trans: [
      'vt.& vi.给予； 赠送； 作出 vt.供给； 产生； 举办； （为购买某物或做某事而）支付 vi.（物体）塌下； 让步 n.伸展性，弹性'
    ]
  },
  { name: 'large', trans: ['adj. 广泛的,大的,强烈的 adv. 普遍地, 大量地'] },
  { name: 'chapter', trans: ['n. 章,回,篇,牧师的例行会议,地方分会'] },
  { name: 'computer', trans: ['n. 计算机'] },
  {
    name: 'complete',
    trans: ['adj. 彻底的, 完整的, 已完成的 vt. 完成; 使圆满, 使完美']
  },
  { name: 'past', trans: ['adj. 过去的 adv. 过 n. 过去 prep. 过,经过'] },
  {
    name: 'match',
    trans: ['n. 比赛, 火柴, 对手, 般配的人, 配偶 v. 使...相配, 与...竞争, 相配']
  },
  {
    name: 'recover',
    trans: [
      'vt.恢复； 重新获得； 找回； <正>恢复（适当的状态或位置） vi.恢复健康（体力、能力等） n.恢复开始时姿势'
    ]
  },
  { name: 'always', trans: ['adv. 总是'] },
  { name: 'require', trans: ['v. 需要, 要求'] },
  {
    name: 'opening',
    trans: ['n. 开始, 口, 揭幕, 空缺的职务 vbl. 打开, 开放, 开始']
  },
  {
    name: 'network',
    trans: ['n. 网络,系统,广播网 vt. 用网覆盖,联网 vi. 加入网络']
  },
  {
    name: 'sign',
    trans: ['n. 符号, 正负号, 手势, 迹象, 招牌 v. 签, 做手势, 做标记']
  },
  {
    name: 'release',
    trans: ['n. 释放, 让渡, 发行 vt. 释放, 让与, 准予发表, 发射']
  },
  { name: 'three', trans: ['num. 三 pron.&amp;adj. 三(个,只...)'] },
  {
    name: 'recall',
    trans: ['vt. 召回；回想起，记起；取消 n. 召回；回忆；撤消']
  },
  { name: 'deletion', trans: ['n. 删除'] },
  {
    name: 'fixed',
    trans: [
      'adj. 固定的,不变的,准备好的 v. 修理,使...固定,决定 vbl. 修理,使...固定,决定 [计算机] 固定的'
    ]
  },
  { name: 'amount', trans: ['n. 数量, 总额 vi. 总计, 等于'] },
  { name: 'alias', trans: ['n. 别名,化名 adv. 又被称为，另外地'] },
  { name: 'quote', trans: ['n. 引用 v. 引述, 举证, 报价'] },
  { name: 'correct', trans: ['adj. 正确的 v. 改正,纠正 vt. 改正'] },
  { name: 'else', trans: ['adj. 别的, 其他的 adv. 另外,否则'] },
  { name: 'maximum', trans: ['n. 极点, 最大量, 极大 adj. 最高的, 最大极限的'] },
  {
    name: 'under',
    trans: [
      'prep. 在...下,在...内,在...控制下,低于 adv. 在...下,在昏迷中,淹没地 adj. 下面的,从属的,少于的'
    ]
  },
  {
    name: 'take',
    trans: [
      'vt.拿，取； 采取； 接受（礼物等）； 耗费（时间等） vi.拿； 获得 n.镜头； 看法； 收入额； 场景'
    ]
  },
  { name: 'element', trans: ['n. 成分,要素,元素,基本原理,(复数)恶劣天气'] },
  { name: 'modification', trans: ['n. 修正, 修饰, 修改'] },
  { name: 'input', trans: ['n. 输入'] },
  {
    name: 'uppercase',
    trans: ['n. 大写字母 adj. 大写的 vt. 用大写字母排版或印刷']
  },
  {
    name: 'plus',
    trans: [
      'prep.（表示运算）加； （表示包容）外加； [口语]和； （表示数目）在零（度）以上 n.加号； [数学]正量； 好处； 附加物 adj.加的； 正的； 附加的； 比所示数量多的'
    ]
  },
  { name: 'found', trans: ['vt. 创立，建立；创办 v. 找到（find 的过去分词）'] },
  {
    name: 'debug',
    trans: [
      'v.调试，驱除（某处的)害虫，排除障碍，纠正...的错误，寻出并拆除...内的窃听器'
    ]
  },
  {
    name: 'force',
    trans: ['n. 力量,武力,暴力,影响力 vt. 施暴,强迫,强夺,加压力 [计算机] 强制']
  },
  {
    name: 'lowercase',
    trans: [
      'adj. 小写体的 vt. 用小写字母书写，用小写字母打字 n. 小写体，小写字母'
    ]
  },
  { name: 'just', trans: ['adj. 公正的,公平的,恰当的 adv. 正好,恰好'] },
  { name: 'undo', trans: ['v. 解开，松开，取消'] },
  { name: 'environ', trans: ['vt. 包围, 环绕'] },
  {
    name: 'why',
    trans: [
      'adv. 为什么 conj. …的理由, 为什么 int. 咳, 哎呀 pron. 为何, 为什么'
    ]
  },
  { name: 'temporary', trans: ['adj. 暂时的,临时的 n. 临时工'] },
  { name: 'put', trans: ['vt. 放,安置, 使处于 vi. 提交, 记下'] },
  { name: 'instead', trans: ['adv. 代替, 反而'] },
  {
    name: 'encounter',
    trans: ['n. 意外的相见,遭遇 vt. &vi. 遇到,偶然碰到,遭遇']
  },
  {
    name: 'across',
    trans: ['adv. 横过, 使...被理解(或接受) prep. 穿过, 横过']
  },
  { name: 'matching', trans: ['adj. 匹配的, 相称的 动词 match 的现在分词'] },
  { name: 'wildcard', trans: ['n.[计]通配符'] },
  {
    name: 'spill',
    trans: [
      'vt.& vi.溢出； 泼出； 涌出； 蜂拥而出 n.洒出； 泼出； 溢出；小塞子'
    ]
  },
  {
    name: 'level',
    trans: [
      'n. 水平,等级,标准,层次 adj. 平坦的,齐平的,稳定的,合理的,满满的 vt. 压平,使同等,瞄准,夷为平地,推翻, 指责 vi. 趋向平稳, 瞄准, 诚恳待人, 使平等'
    ]
  },
  { name: 'browse', trans: ['vt. &vi. 浏览, 随意观看, 吃草 n. 浏览, 嫩叶'] },
  { name: 'speech', trans: ['n. 演讲,对话,话语,语言'] },
  { name: 'occur', trans: ['vi.发生； 出现； 闪现'] },
  { name: 'memo', trans: ['n. 备忘录'] },
  {
    name: 'prior',
    trans: [
      'adj. 更重要的, 较早的, 在先的 adv. 居先 n. 小修道院院长; 大修道院副院长'
    ]
  },
  {
    name: 'loaded',
    trans: ['adj. 有负载的(装着货的, 装有弹药的, 加重的) v. 装载']
  },
  { name: 'length', trans: ['n. 长度,篇幅'] },
  {
    name: 'round',
    trans: [
      'n. 圆,(某种圆形)交谊舞,常规活动,一局(轮) adj. 圆的,微胖的,完整的,坦率的,圆满完成的 adv. 环形地 vt. 弄圆,绕行,使...完全,使成为整数 vi. 变圆(胖),弯曲 prp. 围绕,遍及'
    ]
  },
  { name: 'variant', trans: ['n. 变体 adj. 不同的'] },
  { name: 'floppy', trans: ['adj. 叭塌叭塌响的,懒散的,邋遢的'] },
  {
    name: 'machine',
    trans: [
      'n.机器，机械； 机械般的人； 核心 vt.用机器制造，用机器加工 vi.被机器切削'
    ]
  },
  {
    name: 'square',
    trans: [
      'n. 正方形,街区,平方，广场 adj. 正方形的,正直的,公正的,结实的 vt. 使...成方形,调整，一致 vi. 符合 adv. 成直角,直接的,正方形地'
    ]
  },
  {
    name: 'supply',
    trans: ['n. 补给,供给,供应，贮备 vt. 补给,供给,提供,提供足够以满足']
  },
  {
    name: 'home',
    trans: [
      'adj. 家(乡)的 adv. 回家, 在家, 正确的方向 n. 家, 住所, 国内的, 养老院 vt. 提供住处 vi. 回家, 移向'
    ]
  },
  { name: 'normal', trans: ['adj. 正常的,正规的 n. 常态, 标准'] },
  { name: 'onto', trans: ['prep. 到...上'] },
  { name: 'during', trans: ['prep. 在...期间'] },
  { name: 'module', trans: ['[计算机] 模块 n. 组件'] },
  {
    name: 'monochrome',
    trans: ['n. 单色画,单色画法 adj. 单色的,黑白的 [计算机] 单色的']
  },
  { name: 'assistance', trans: ['n. 帮助, 援助'] },
  {
    name: 'tell',
    trans: ['vt. 告诉,说,知道,认出,计数 vi. 讲述,告发,作证,产生效果']
  },
  { name: 'library', trans: ['n. 图书馆, 藏书'] },
  { name: 'demonstration', trans: ['n. 示范,实证,表达,集会'] },
  { name: 'stack', trans: ['n. 堆叠,堆 vt. 堆积,成叠放在 vi. 堆成一堆'] },
  {
    name: 'even',
    trans: ['adj. 平坦的, 偶数的, 相等的 adv. 甚至, 恰好, 正当 v. 使平坦, 相等']
  },
  { name: 'evaluate', trans: ['vt. 评估,评价'] },
  {
    name: 'times',
    trans: [
      'n. 时间,期限,次数,乘 vt. 为...安排时间,计时,定时,乘 [计算机] DOS 命令 : 显示并允许改变系统时间 adj. 根据时间的, 时间上的'
    ]
  },
  { name: 'previously', trans: ['adv. 以前(预先)'] },
  { name: 'directly', trans: ['adv. 直接地(立即,完全)'] },
  { name: 'logical', trans: ['adj. 符合逻辑的,逻辑上的,有推理能力的'] },
  { name: 'template', trans: ['n. 模板,样板'] },
  { name: 'calling', trans: ['n. 职业, 行业, 邀请 召集'] },
  { name: 'later', trans: ['adj. 更迟的,后面的 adv. 稍后,后来, 迟到地'] },
  { name: 'driver', trans: ['n. 驾驶员, 司机'] },
  { name: 'therefore', trans: ['adv. 因此, 所以'] },
  { name: 'saving', trans: ['n. n. 节约，挽救 （复数)savings:储蓄金，存款'] },
  {
    name: 'detail',
    trans: ['n. 细节,详情,部分,分派 vt. 详述,选派,用小元素装饰 vi. 画细节']
  },
  { name: 'linker', trans: ['[计] (目标代码)连接器'] },
  {
    name: 'loop',
    trans: [
      'n. 环,圈,弯曲部份,回路 vt. 使...成环,以圈结,以环连结 vi. 形成环,环形地行动'
    ]
  },
  {
    name: 'process',
    trans: [
      'n.过程； 工序； 做事方法； 工艺流程 vt.加工； 处理； 审阅； 审核 vi.列队行进 adj.经过特殊加工（或处理）的'
    ]
  },
  {
    name: 'scheme',
    trans: ['n. 方案, 计划, 阴谋 v. 计画, 设计, 体系, 结构, 图谋']
  },
  { name: 'every', trans: ['adj. 每,每个,每隔...的'] },
  {
    name: 'refer',
    trans: ['vt. 把…提交; 把...归因, 归类为 vi. 谈及, 咨询, 参考']
  },
  { name: 'possible', trans: ['adj. 可能的'] },
  {
    name: 'above',
    trans: ['adj. 上面的 adv. 在上面, 超过 n. 上面的东西 prep. 在...上面, 超过']
  },
  { name: 'overview', trans: ['n. 概观(况),总结 [计算机] 概貌'] },
  { name: 'result', trans: ['n. 结果,成绩,答案 v. 产生,起于,致使'] },
  { name: 'syntax', trans: ['n. 句法'] },
  { name: 'abbreviation', trans: ['n. 缩写'] },
  {
    name: 'BIOS',
    trans: ['abbr. (=Basic Input Output System)基本输入输出系统']
  },
  {
    name: 'hidden',
    trans: ['adj. 隐藏的, 秘密的 vbl. 藏着, 隐藏, 躲藏 [计算机] 隐藏的']
  },
  {
    name: 'null',
    trans: ['adj. 无效力的,无效的,无价值的 n. 零 [计算机] 空 vt. 使无效']
  },
  { name: 'send', trans: ['vt. 送给,传,寄，发射 vi. 放送 n. 波浪的推力'] },
  { name: 'private', trans: ['adj. 私人的，隐蔽的 n. 士兵，列兵'] },
  {
    name: 'hard',
    trans: ['adj. 坚硬的;艰难的,苛刻的 adv. 努力地,猛烈地,坚定地']
  },
  { name: 'hardware', trans: ['n. 五金器具 n. (计算机) 硬件'] },
  {
    name: 'say',
    trans: ['vt. 说,讲,表达,假设,,指示 vi. 说 n. 发言权 adv. 大约']
  },
  {
    name: 'equal',
    trans: ['adj. 相等的,平等的,胜任的 n. 对手,匹敌,同辈 vt. 等于,比得上']
  },
  {
    name: 'pack',
    trans: [
      'n. 包裹,一群,一副,一帮,一群 vt. 包装,捆扎,塞满, 收拾行李， 佩戴 vi. 包装，（用某物）保存，保藏 ,塞进'
    ]
  },
  { name: 'minus', trans: ['adj. 负的,减的 n. 减号,负数,缺点 prep. 减去'] },
  {
    name: 'alternate',
    trans: ['adj. 交替的, 轮流的, 间隔的 vt. &vi. 交替, 轮流']
  },
  {
    name: 'collapse',
    trans: ['n. 崩溃,倒塌,暴跌 vi. 倒塌,崩溃,瓦解,折叠 vt. 倒塌,缩减']
  },
  { name: 'linux', trans: ['一种可免费使用的类 UNIX 操作系统'] },
  {
    name: 'corner',
    trans: [
      'n.角落，角； 拐角； 困境； [商]囤积 vi.驾车转弯； 聚于角落 vt.垄断； 逼入困境 adj.位于角落的'
    ]
  },
  {
    name: 'present',
    trans: ['n. 礼物, 现在 adj. 当面的, 出席的, 现在的 v. 赠送, 提出, 呈现']
  },
  { name: 'interpreter', trans: ['n. 译员,口译者，解释程序'] },
  {
    name: 'advance',
    trans: [
      'n. 前进,进步,预支 vt. 前进，增涨，预先 vi. 前进，提升 adj. 预先的，提前的'
    ]
  },
  {
    name: 'forward',
    trans: [
      'adv.前进地； 向前； 至将来； 提前地 adj.向前方的； 迅速的； （社会、政治）进步的； 早熟的 vt.促进，助长； （按新地址）转寄； 发送 n.前锋'
    ]
  },
  {
    name: 'fast',
    trans: [
      'adj.快的； 走得快； 感光快的； 紧的 adv.（比准确的时间或宣布的时间）快； 迅速地； 紧紧地； 彻底地 vi.禁食，（尤指）斋戒 n.禁食期，斋戒期； 断食，节食'
    ]
  },
  {
    name: 'special',
    trans: ['n. 专辑,专车,特色菜,特价,特刊 adj. 特别的,专门的']
  },
  {
    name: 'slash',
    trans: [
      'vi. 大幅度削减 vt. 猛砍,尖锐抨击,大幅减少 n. 猛砍,斜线,长切口,衣衩'
    ]
  },
  {
    name: 'utility',
    trans: ['n. 公共设施,效用,公用程序,实用品,实用 adj. 多效用的，多功能的']
  },
  { name: 'regardless', trans: ['adj. 不注意的, 粗心的 adv. 不顾'] },
  { name: 'disable', trans: ['v. 使...失去能力'] },
  {
    name: 'compatible',
    trans: ['adj. 能共处的,可并立的,适合的, 兼容的 n. 兼容']
  },
  { name: 'depend', trans: ['vi. 依靠,相信,指望'] },
  {
    name: 'empty',
    trans: ['adj. 空的,空虚的,空腹的 n. 空物 vt. 使...空 vi. 变空,流入']
  },
  { name: 'alphabetical', trans: ['adj. 按字母表顺序的'] },
  { name: 'branch', trans: ['n. 分支,树枝 vt &vi. 分支, 分岔'] },
  { name: 'resume', trans: ['v. 再继续, 重新开始 n. 简历, 履历; 摘要'] },
  { name: 'multiple', trans: ['adj. 许多,多种多样的 n. 倍数,并联'] },
  {
    name: 'monitor',
    trans: [
      'n. 监督器, 班长, 监听员, [计算机]显示器, 监视器 v. 监视, 监听, 监督'
    ]
  },
  {
    name: 'configuration',
    trans: ['n. 结构,布局,形态,格式塔心理完形 [计算机] 配置']
  },
  { name: 'replacement', trans: ['n. 交换,更换,代替者'] },
  { name: 'required', trans: ['adj. 必需的'] },
  {
    name: 'table',
    trans: ['n. 桌子, 平地层, 石板, 表格 vt. 搁置, 嵌合, 制表 adj. 桌子的']
  },
  { name: 'loss', trans: ['n. 丧失, 损耗, 亏损'] },
  { name: 'exact', trans: ['adj. 精确的 vt. 强求,要求,索取'] },
  {
    name: 'aboveboard',
    trans: ['adv. 光明正大地, 率直地 adj. 光明正大的, 率直的']
  },
  { name: 'activate', trans: ['v. 刺激,使...活动,创设'] },
  {
    name: 'around',
    trans: [
      'adj. 大约, 在现存范围内 adv. 大约,到处,在周围 prep. 在...附近, 到处'
    ]
  },
  { name: 'slow', trans: ['adj. 慢的 adv. 慢慢地 vt.& vi. 放慢,减速'] },
  {
    name: 'floating',
    trans: ['adj.浮动的，流动性的，不固定的 动词 float 的现在分词形式']
  },
  { name: 'refresh', trans: ['vt.& vi. 使...生气蓬勃,提起精神,恢复精神'] },
  {
    name: 'stop',
    trans: ['n. 停止,车站,滞留,阻挡 vt. 停止,制止,塞住 vi. 停止,停留,结束']
  },
  {
    name: 'pass',
    trans: [
      'vt.& vi.走过； 通过； 批准； 度过 vt.传球； 及格； 发生； 不要 n.通道； 通行证； 关口； 越过'
    ]
  },
  {
    name: 'public',
    trans: ['adj. 公开的,众所周知的,公众的 n. 公共场合,公众,同好者']
  },
  { name: 'eject', trans: ['vt.喷出； 驱逐； 强制离开 vi.弹射出'] },
  { name: 'ignore', trans: ['vt. 不顾,不理,忽视'] },
  {
    name: 'share',
    trans: ['n. 部份,股份,分担,犁头 vt. 分享,共有,分配 vi. 分享']
  },
  { name: 'sequence', trans: ['n. 序列, 一系列, 顺序, 一组镜头 vt. 安排顺序'] },
  { name: 'consist', trans: ['n. 组成 vi. 组成,存在,一致'] },
  { name: 'step', trans: ['n. 步骤,步伐,踏级 vt. 踏,以步测量'] },
  {
    name: 'double',
    trans: [
      'n. 两倍,复制品,替身,双重角色的演员,反转,双人房 adj. 两倍的,双重的,骗人的,加量的 adv. 两倍地,双人地,翻来覆去地,对折地 vt. 使加倍,对折,握紧,做替身 vi. 加倍,转身,兼任,替代演出'
    ]
  },
  { name: 'come', trans: ['vt. 接近，扮演 vi. 来，发生，达到，进入'] },
  {
    name: 'lower',
    trans: [
      'adj. 低的, 下级的, 下层的 vt. 降低, 跌落, 减弱, 贬低 vi. 皱眉, 降低, 阴沉, 变少 n. 皱眉, 下级, 阴沉的样子, 前兆'
    ]
  },
  { name: 'describe', trans: ['vt. 描述, 画(尤指几何图形)'] },
  { name: 'count', trans: ['v. 计算, 视为, 依赖 n. 计数'] },
  {
    name: 'pop',
    trans: [
      'n. 取出,砰然声,流行乐曲,流行文化艺术,（尤用作称呼）爸 adj. 流行的,热门的,通俗的 vt. 取出,发出爆裂声,突然伸出,击打,开火 vi. 发出砰的一声，（因激动、惊奇）张大 adv. 突然间地, 暴发地 POP abbr.=point of purchase POP abbr.=population 人口'
    ]
  },
  { name: 'valid', trans: ['adj. 有确实根据的; 有效的; 正当的, 合法的'] },
  {
    name: 'suspend',
    trans: ['v. 推迟,悬(浮),挂,暂停,取消 vi. 吊,悬浮 vt. 悬,挂,吊,暂停,中止']
  },
  { name: 'enhance', trans: ['vt. 提高,加强,增加'] },
  {
    name: 'separate',
    trans: ['n. 分开, 抽印本 adj. 分开的, 各自的, 单独的 v. 分开, 隔开, 分居']
  },
  {
    name: 'echo',
    trans: [
      'n. 回声,回音,回波,反响,共鸣 vt. 发回声,回响, 重复, 仿效 vi. 回响, 回荡 n.[计算机] DOS 命令 :禁止(或允许)批处理命令行显示屏幕上'
    ]
  },
  { name: 'necessary', trans: ['adj. 必需的,必要的,必然的 n. [pl.]必需品'] },
  { name: 'able', trans: ['adj. 能干的, 有能力的'] },
  { name: 'marking', trans: ['n. 印记, 作记号，打分 动词 mark 的现在分词'] },
  { name: 'ask', trans: ['vt. 询问, 请求，要求，开价 vi. 询问，恳求'] },
  { name: 'term', trans: ['n.学期； 条款； 术语； 期限 vt.把…称为； 把…叫做'] },
  { name: 'bring', trans: ['vt. 带来, 引起, 促使, 劝诱 vi. 产生'] },
  { name: 'warning', trans: ['n. 警告, 预告, 通知 vbl. 警告, 注意, 通知'] },
  {
    name: 'less',
    trans: ['adj. 更少的,更小的 adv. 更少地,更小地 n. 少量, 次要 prep. 减']
  },
  { name: 'comment', trans: ['n. 注释, 评论; 闲话 v. 注释, 评论'] },
  {
    name: 'effect',
    trans: ['n. 结果, 影响, 效果; 要旨 vt. 招致, 引起; 实现, 达到']
  },
  { name: 'expanding', trans: ['adj.展开的,扩大的'] },
  { name: 'on-line', trans: ['adj.在线的,即时的'] },
  { name: 'reorder', trans: ['重新排序, 再定购'] },
  {
    name: 'direct',
    trans: ['adj. 笔直的,直接的,坦白的 vt. 指挥，命令，负责 vi. 指导，指出']
  },
  { name: 'enclose', trans: ['vt. 围绕, 圈起, 放入封套, 附上 [计算机] 括入'] },
  {
    name: 'reset',
    trans: ['n. 重新设定, 重新组合 v. 重新设定, 重新放置, 重新组合']
  },
  { name: 'various', trans: ['adj. 各种各样的'] },
  {
    name: 'paper',
    trans: [
      'n. 纸,文件,论文,报纸,票据 vt. 用纸包,供纸,仓促完成 vi. 贴壁纸 adj.纸制的,文书的,理论上的'
    ]
  },
  { name: 'prevent', trans: ['v. 预防, 防止'] },
  {
    name: 'side',
    trans: ['n. 旁边,侧,方面 adj. 旁的,侧的 vt. 支持,同意 vi. 支持']
  },
  { name: 'push', trans: ['n. 推,奋力,决心 vt. &vi. 推,挤,逼迫'] },
  { name: 'programming', trans: ['n. 程序设计, 编程 动词 program 的现在分词'] },
  {
    name: 'upper',
    trans: [
      'adj. 上部的,地位较高的,上面的,北方的 n. 鞋帮,上牙,兴奋剂,令人愉快的经历'
    ]
  },
  { name: 'row', trans: ['n. 排,船游,吵闹 vt. 划船,成排 vi. 划船,吵架'] },
  {
    name: 'pressed',
    trans: ['adj. 被压迫的，压缩的 动词 press 的过去式和过去分词']
  },
  { name: 'temporarily', trans: ['adj. 临时的 adv. 暂时地,临时地'] },
  { name: 'day', trans: ['n. 白天,一天'] },
  { name: 'repaint', trans: ['v.重漆,重画 v.重新绘制'] },
  { name: 'redefine', trans: ['vt. 重新定义'] },
  { name: 'relation', trans: ['n. 关系,家人,亲戚,叙述,陈述'] },
  {
    name: 'dimension',
    trans: ['n. 尺寸, 次元, 容积, 维度 n. 范围; 方面 vt. 标尺寸; 形成...尺寸']
  },
  { name: 'boundary', trans: ['n. 分界线, 边界'] },
  {
    name: 'zoom',
    trans: [
      'vi.嗡嗡作响； 急速上升 n.嗡嗡声； 隆隆声； （车辆等）疾驰的声音； 变焦 vt.使急速上升； 使猛增'
    ]
  },
  { name: 'initialize', trans: ['vt. 初始化'] },
  { name: 'personal', trans: ['adj. 私人的,个人的 n. (报刊的)私人专栏'] },
  {
    name: 'true',
    trans: [
      'adj. 确切的,可靠的,真实的,正确的,正式的 adv. 笔直地,事实地 n. 真相,精确 vt. 使...平衡'
    ]
  },
  { name: 'wish', trans: ['n. 渴望,愿望,(复数)祝颂,命令 vt. &vi. 想要,希望'] },
  { name: 'font', trans: ['n.字体； 字形； 圣洗池（设于教堂中，常为石造）'] },
  { name: 'know', trans: ['vt. &vi.知道,了解,认识'] },
  {
    name: 'convert',
    trans: ['v. 使转变, 使...改变信仰, 倒置 n. 皈依者, 改宗者']
  },
  { name: 'global', trans: ['adj. 全球性的, 全局的'] },
  { name: 'installation', trans: ['n. 安装,装置, 军事驻地'] },
  {
    name: 'invoke',
    trans: ['vt. 求助,用咒语召唤,请求,应用,引起 [计算机] 调用']
  },
  { name: 'interactive', trans: ['adj. 相互作用的 [计算机] 交互的'] },
  { name: 'century', trans: ['n. 世纪，一百年，成百的东西'] },
  { name: 'literal', trans: ['adj. 逐字的, 字面上的, 文字的 [计算机] 文字的'] },
  { name: 'rather', trans: ['adv. 宁可,宁愿,有些,相当,反而'] },
  {
    name: 'exclusive',
    trans: [
      'adj. 独占的, 唯一的, 排外的; 高价的, 时髦的 [计算机] 互斥的 n. 独家新闻, 独权'
    ]
  },
  { name: 'marker', trans: ['n. 标记，做记号的工具,做记号的人,记分员'] },
  {
    name: 'wait',
    trans: [
      'vt.& vi.等候； 等待； （尤指长期地）希望； 盼望 vi.准备妥； 在手边； 可得到； 可使用 vt.推迟，搁置，延缓'
    ]
  },
  { name: 'appropriate', trans: ['adj. 适当的, 相称的 vt. 拨出(款项); 占用'] },
  {
    name: 'fit',
    trans: ['adj. 适宜的,对的,准备好的 v. 适合,安装 n. 适宜,发作,一阵']
  },
  { name: 'adapter', trans: ['n. 适配器 n. 改编者'] },
  {
    name: 'filter',
    trans: ['n. 筛选,滤波器,过滤器,滤色镜 vt. &vi. 过滤,渗透 [计算机] 过滤']
  },
  { name: 'break', trans: ['n. 休息,中断,破裂 v. 打破,弄破,弄坏'] },
  { name: 'backward', trans: ['adj. 向后的 adv. 向后'] },
  { name: 'searching', trans: ['adj. 探寻的，洞察的 动词 search 的现在分词'] },
  {
    name: 'receive',
    trans: ['vt. 收到,接受,迎接,容纳,遭受,相信 vi. 接到,获得']
  },
  { name: 'dual', trans: ['adj. 双重的, 成双的 n. 双数'] },
  { name: 'retry', trans: ['vt. 重试'] },
  { name: 'normally', trans: ['adv. 正常地,通常地'] },
  {
    name: 'exactly',
    trans: ['adj. 完全的 adv. 恰好地,正好地,正确地,精确地,正是']
  },
  { name: 'immediately', trans: ['adv. 立即,直接地 conj. 一...(就)'] },
  {
    name: 'separated',
    trans: ['adj. 分开的 动词 separate 的过去式和过去分词']
  },
  {
    name: 'high',
    trans: [
      'adj.高的,轻微变质的,高尚的,严重的,强的 adv. 高,好 n. 高地,天堂,高气压,高度,兴奋'
    ]
  },
  { name: 'equivalent', trans: ['adj. 等价的, 相等的 n. 相等物'] },
  {
    name: 'light',
    trans: [
      'n. 光,光线,灯,启发,众所周知的,通光口,眼光 adj. 轻的,不重要的,容易的,明亮的,淡色的 vi. 点燃,着火,变亮,下马,落下,碰巧发生 vt. 点燃,照亮 adv. 轻地,轻便的'
    ]
  },
  { name: 'zero', trans: ['num.&amp;n. 零'] },
  { name: 'storage', trans: ['n. 储存体, 储藏, 仓库, 保管费'] },
  { name: 'width', trans: ['n. 宽度,广度,某一宽度的材料'] },
  { name: 'language', trans: ['n. 语言'] },
  { name: 'startup', trans: ['n. 开动, 出发'] },
  { name: 'much', trans: ['adj. 许多的 adv. 很,非常 pron.&amp;n. 许多'] },
  { name: 'per', trans: ['prep. 每,每一 adv.每人'] },
  {
    name: 'over',
    trans: [
      'prep.（表示方向）越过； （部份或全部覆盖）在…上面； 由于； （表示论及）关于 adv.结束； 再； （倒）下； 从一边至另一边 adj.过去的； 外面的； 在上的； 上级的 n.额外； 剩余； 剩余（或多余）的量； 剩余物'
    ]
  },
  { name: 'mirror', trans: ['n. 镜子 vt. 反映,反射'] },
  { name: 'request', trans: ['n. 要求, 请求 vt. 请求, 要求'] },
  { name: 'keypad', trans: ['n. [计算机]小键盘'] },
  {
    name: 'keep',
    trans: [
      'vt.保持； 保留； 遵守； 阻止 vi.（食品）保持新； 保持健康 n.保持，保养； 供养，抚养； 生活，生计； 饲料；牧草'
    ]
  },
  { name: 'resident', trans: ['adj. 居住的 n. 居民,旅客'] },
  { name: 'learning', trans: ['n. 学问, 学识, 学习 动词 learn 的现在分词'] },
  {
    name: 'talk',
    trans: [
      'n. 谈话,会谈,讲话, 闲话 vt. 说, 谈论, 商讨 vi. 说闲话, 招供, 开口说话, 闲聊'
    ]
  },
  { name: 'summary', trans: ['n. 摘要,概要 adj. 摘要的,简略的'] },
  {
    name: 'well',
    trans: [
      'n. 井,源泉,楼梯井 adj. 健康的,良好的,适宜的 adv. 很好地,适当地 vi. 涌出 interj. 好吧,啊'
    ]
  },
  { name: 'link', trans: ['n. 环节,联系, (链的)环, 圈 vt. &vi. 连接,联系'] },
  {
    name: 'identify',
    trans: ['vt.识别，认出； 确定； 使参与； 把…看成一样 vi.确定； 认同']
  },
  { name: 'pertain', trans: ['vi. 从属, 关于'] },
  { name: 'expansion', trans: ['n. 扩大,膨胀,扩充'] },
  { name: 'incompatible', trans: ['adj. 不相容的, 不能并存的, 矛盾的'] },
  {
    name: 'blinking',
    trans: ['adj. 闪烁的 adj. 该死的, 讨厌的, 十足的 动词 blink 的现在分词']
  },
  { name: 'month', trans: ['n. 月'] },
  { name: 'precede', trans: ['vt. &vi. 在...之前,优于,较...优先'] },
  { name: 'readily', trans: ['adv. 不迟疑地,迅速地,轻易地'] },
  { name: 'transportable', trans: ['便携式计算机, 可传送的'] },
  {
    name: 'routine',
    trans: ['n. 例行公事, 常规，无聊 adj. 常规的, 例行的，乏味的']
  },
  {
    name: 'ready',
    trans: ['adj. 准备好的,乐意的,情愿的，现成的 vt. 做好…的准备']
  },
  { name: 'listing', trans: ['[计算机] 清单'] },
  { name: 'newly', trans: ['adv. 崭新,新改,以新方法'] },
  { name: 'year', trans: ['n.年； 年纪； 一年的期间； 某年级的学生'] },
  { name: 'contact', trans: ['v. (与)联系, (与)接触 n. 接触, 联系; 联系人'] },
  {
    name: 'session',
    trans: [
      'n.开会，会议；（法庭的）开庭； 会期，学期； （进行某活动连续的）一段时间'
    ]
  },
  {
    name: 'own',
    trans: ['adj. 自己的, 嫡亲的 pron. 自己的 vi. 承认 vt. 拥有, 承认']
  },
  { name: 'redraw', trans: ['v. 重划'] },
  {
    name: 'here',
    trans: [
      'adv.在这里； 这时； 在这一点上； （给某人东西或指出某物时说） n.这里 int.喂； 嗨'
    ]
  },
  { name: 'manual', trans: ['adj. 手工的,体力的 n. 手册,指南,键盘'] },
  {
    name: 'particular',
    trans: ['n. 个别项目, 详细说明 adj. 特别的, 独有的; 挑剔的; 详细的']
  },
  { name: 'rectangle', trans: ['n. 长方形,矩形'] },
  { name: 'additive', trans: ['n. 附加物(加法) adj. 加添的'] },
  { name: 'similar', trans: ['adj. 相似的,类似的,相同,一样'] },
  { name: 'assembly', trans: ['n. 集合, 集会, 装配'] },
  { name: 'copyright', trans: ['adj. 版权(的) n. 版权,著作权'] },
  { name: 'description', trans: ['n. 描写, 描述, 说明书, 作图 n. 类型'] },
  {
    name: 'retrieve',
    trans: ['vt. 挽回,恢复,回忆,补偿 vi. 找回猎物 n. 取回,恢复']
  },
  { name: 'mistake', trans: ['n. 错误,误会 vt. 弄错,误认 vi. 犯错'] },
  {
    name: 'produce',
    trans: ['n. 产品, 农作物 vt. 生产, 提出, 引起, 分娩, 制片 vi. 生产, 制造']
  },
  {
    name: 'ram',
    trans: [
      'abbr. 随机存取存储器（random access memory 的缩写）；随机访问内存（random-access memory 的缩写） n. 公羊；撞锤；撞击装置；有撞角的军舰；（水压机的）[机] 活塞 v. 撞击；填塞；强迫通过或接受'
    ]
  },
  { name: 'exception', trans: ['n. 除外,例外'] },
  { name: 'digit', trans: ['n. 数字,位数,指头'] },
  {
    name: 'reverse',
    trans: [
      'n. 相反; 背面; 失败, 挫折 adj. 反面的, 相反的, 颠倒的 v. 颠倒, 逆转, 倒退'
    ]
  },
  { name: 'minimum', trans: ['adj. 最低的, 最小的 n. 最小量, 最低限度'] },
  {
    name: 'enough',
    trans: ['adj. 足够的 adv. 足够地 n. 充足,足够 pron. 足够(的)']
  },
  { name: 'although', trans: ['conj. 尽管, 虽然'] },
  { name: 'third', trans: ['adj. 第三(的) n. 三分之一 num. 第三'] },
  { name: 'red', trans: ['adj. 红色的 n. 红色'] },
  { name: 'along', trans: ['adv. 向前,(与某人)一道 prep. 沿着'] },
  {
    name: 'test',
    trans: ['n. 测试, 试验 vt. 测试, 试验, 接受测验, 测得... adj. 测试的']
  },
  { name: 'small', trans: ['adj. 小的,少的 adv. 些许地 n. 狭小部分'] },
  {
    name: 'feed',
    trans: [
      'vt.喂养； 满足（欲望等）； 向…提供； 供…作食物 vi.吃，以…为食； 流入，注入，进入（如油流入机器）； [电子学]馈入 n.饲料（尤指粗饲料），施肥； 喂送； 草料'
    ]
  },
  { name: 'company', trans: ['n. 同伴,客人,一群,连队,公司 vt. 陪伴 vi. 联合'] },
  { name: 'movie', trans: ['n. 电影'] },
  { name: 'compile', trans: ['v. 编译,编辑,编纂 [计算机] 编译'] },
  { name: 'frequently', trans: ['adv. 经常地, 频繁地'] },
  { name: 'undefined', trans: ['adj. 未定义的'] },
  {
    name: 'state',
    trans: [
      'n. 州, 国, 情形 adj. 国家的, 州的, 正式的 vt. 说, 陈述, 声明, 规定'
    ]
  },
  {
    name: 'accept',
    trans: ['vi.承认； 同意； 承兑 vt.接受； 承认； 承担； 承兑']
  },
  { name: 'intense', trans: ['adj. 非常的,强烈的,紧张的,热情的'] },
  { name: 'documentation', trans: ['n. 文件'] },
  { name: 'asterisk', trans: ['n. 星号(*)'] },
  { name: 'easily', trans: ['adj. 容易地,不费力地 adv. 容易地'] },
  { name: 'become', trans: ['vt. 变得 vi. 存在,变得,经历改变或发展'] },
  { name: 'address', trans: ['n. n.地址； 通信处； 演说； 称呼'] },
  { name: 'interface', trans: ['n. 界面,接触面 vt. 连接,作接口 vi. 连接'] },
  { name: 'pause', trans: ['n. 暂停,中止,犹豫不决 vi. 停顿,中止 vt. 使停顿'] },
  {
    name: 'repeat',
    trans: ['n. 重复,反复 vt. 重复,复述 vi. 重复 adj. 重复的,反复的']
  },
  { name: 'restart', trans: ['重新启动'] },
  {
    name: 'assumed',
    trans: ['adj.假定的, 假装的 动词 assume 的过去式和过去分词']
  },
  {
    name: 'speed',
    trans: ['n. 速度,迅速,感光度,超速 vt. 加速,催促,促进 vi. 超速,加速,进展']
  },
  { name: 'entry', trans: ['n. 进入,入口,登记,项目'] },
  {
    name: 'combine',
    trans: [
      'n. 集团,联合收割机 v. 化合,结合,联合 vi. 结合,联合 vt. 使结合,使联合'
    ]
  },
  { name: 'root', trans: ['n. 根,根源,祖先 vt. &vi. 生根,扎根,翻寻,起源于'] },
  { name: 'symbol', trans: ['n. 符号, 标志, 象征'] },
  { name: 'binary', trans: ['adj. 二进位的,二元的 n. 二进制,二元'] },
  { name: 'whenever', trans: ['adv. 无论何时 conj. 每当, 无论何时, 随时'] },
  {
    name: 'reach',
    trans: ['n. 延伸,范围,河段 vt. 到达,伸出,延伸,取得联系 vi. 延伸']
  },
  {
    name: 'caution',
    trans: ['n. 警告,戒备措施,慎重,吸引人眼球的物品或人 vt. 警告']
  },
  { name: 'subtotal', trans: ['n. 小计 adj. 不完全的'] },
  {
    name: 'card',
    trans: [
      'n. 卡片,纸牌,名片,打牌,节目单 vt. 附上或提供卡片,印卡,在卡片上列出,检查资格'
    ]
  },
  {
    name: 'general',
    trans: ['n. 一般,将军,大体 adj. 一般的,普遍的 v. 指挥,作...将军']
  },
  { name: 'associated', trans: ['adj. 联合的,相关的'] },
  { name: 'transfer', trans: ['n. 迁移, 移动, 换车 v. 转移, 调转, 调任'] },
  { name: 'connect', trans: ['vt. 连接,联通,使有联系 vi. 连接,接通'] },
  { name: 'partition', trans: ['n. 分割,隔离物,隔墙 v. 区分,隔开,分割'] },
  { name: 'hexadecimal', trans: ['adj. 十六的, 十六进制的 n. 十六进制'] },
  { name: 'generate', trans: ['vt. 产生,发生,引起 [计算机] 产生'] },
  { name: 'specification', trans: ['n. 规格,详述,详细说明书'] },
  { name: 'customize', trans: ['vt. 定制 [计算机] 用户化'] },
  { name: 'far', trans: ['adv.&amp;adj. 远的(地) n. 远处'] },
  { name: 'nest', trans: ['n. 巢, 窝 vt. 嵌入 vi. 筑巢'] },
  {
    name: 'duplicate',
    trans: [
      'n. 副本,复制品 adj. 复制的,二重的 vt. 复制,重复 vi. 重复 [计算机] 复制'
    ]
  },
  { name: 'compression', trans: ['n. 压缩, 压榨, 缩小'] },
  { name: 'unable', trans: ['adj. 不能的,不会的 v. 不能,不会'] },
  { name: 'means', trans: ['n. 方法,手段，折中点，物质财富'] },
  { name: 'intensity', trans: ['n. 激烈,强度,强烈,剧烈'] },
  { name: 'reading', trans: ['adj. 阅读的 n. 阅读'] },
  { name: 'let', trans: ['vt. 让,容许,释放 vi. 出租,承包 n. 障碍,擦网球'] },
  { name: 'compare', trans: ['vt.&vi. 比较,比喻,对照 n. 比较，对照'] },
  { name: 'sector', trans: ['n. 扇形,扇区,部门,区域 vt. 分区'] },
  { name: 'problem', trans: ['adj. 成问题的, 难对付的 n. 问题'] },
  { name: 'backspace', trans: ['vi. 按退格键 n. 退格键'] },
  {
    name: 'terminate',
    trans: ['adj. 有结尾的,有限的 vt. 结束,终止,满期 vi. 达到终点']
  },
  { name: 'people', trans: ['n. 民族,人,人们,人民,家人 vt. 居住于'] },
  {
    name: 'short',
    trans: ['adj. 短的,矮的,短暂的 n. 短裤 adv. 短暂地;突然地']
  },
  {
    name: 'drag',
    trans: [
      'n. 用来拖拉的东西,拖,拖累 vt. 拖累,拖拉(动) vi. 拖拉(动),缓慢地行走'
    ]
  },
  {
    name: 'preview',
    trans: ['n. 预审,查阅,预习,预告 vt. 事先查看,查阅,预审,预习']
  },
  {
    name: 'underscore',
    trans: ['vt. 划线于,强调,提供伴奏乐 n. 下划线,影片伴奏乐']
  },
  { name: 'correctly', trans: ['adv.恰当地,正确地'] },
  { name: 'initially', trans: ['adv. 最初, 开头'] },
  { name: 'reformat', trans: ['vt. 重定格式, 重新格式化'] },
  {
    name: 'inside',
    trans: ['adj. 里面的 adv. 在里面 n. 内部 prep. 在...里面']
  },
  { name: 'integrate', trans: ['v. 整合, 使...成整体'] },
  {
    name: 'controlled',
    trans: ['adj. 受控制的, 受约束的 动词 control 的过去式和过去分词形式']
  },
  { name: 'period', trans: ['n. 学时, 课时; 一段时间, 时期, 周期; 句号'] },
  { name: 'huge', trans: ['adj. 巨大的,程度高的'] },
  { name: 'determined', trans: ['adj. 坚毅的,下定决心的'] },
  {
    name: 'trailing',
    trans: ['adj. 牵引的 n. 拖尾 动词 trail 的现在分词形式']
  },
  { name: 'seek', trans: ['n. 找寻 v. 寻求,寻找,搜索'] },
  { name: 'introduction', trans: ['n. 介绍, 引进, 导论, 序言'] },
  {
    name: 'indent',
    trans: ['n. 契约, 订货单 v. 切割成锯齿状, 缩排, 定货 [计算机] 缩排, 缩进']
  },
  {
    name: 'base',
    trans: [
      'n. 基底,（支持、收入、力量等的）基础 vt. 以...作基础 adj. 卑鄙的；不道德的'
    ]
  },
  { name: 'integer', trans: ['n. 完整的事物,整体,整数 [计算机] 整数'] },
  { name: 'attempt', trans: ['vt.试图； 尝试 n.进攻； 尝试，冲击'] },
  { name: 'twice', trans: ['adv. 两倍, 两次'] },
  { name: 'formed', trans: ['adj. 成形的 动词 form 的过去式和过去分词'] },
  { name: 'subscript', trans: ['n. 下标 adj. 写在下方的'] },
  { name: 'tiny', trans: ['adj. 极小的,微小的'] },
  {
    name: 'model',
    trans: [
      'n. 模型, 模范, 模特儿 adj. 模范的, 作模型用的 v. 做模型, 塑造, 模仿'
    ]
  },
  { name: 'correction', trans: ['n. 订正, 改正, 改正的地方'] },
  { name: 'rating', trans: ['n. 等级,评定,收视率'] },
  { name: 'secondary', trans: ['adj. 中级的,中等的,次要的 n. 次要位置, 副手'] },
  { name: 'limit', trans: ['n.限制； 限量，限度； 界限 vt.限制，限定'] },
  {
    name: 'sun',
    trans: ['n. 太阳,阳光,中心人物,像太阳般的东西 vt.& vi. 晒太阳']
  },
  { name: 'translate', trans: ['vt. 翻译；转化；解释；转变为；调动 vi. 翻译'] },
  {
    name: 'reason',
    trans: ['n. 理由,原因,理智,理性 vt. 说服,总结 vi. 规劝,下判断']
  },
  {
    name: 'colon',
    trans: [
      'n. 冒号, 结肠, 科朗(哥斯达黎加和萨尔瓦多的货币单位) (Colon)科隆(巴拿马港市)'
    ]
  },
  { name: 'avoid', trans: ['v. 避免 vt. 避免,逃避'] },
  {
    name: 'range',
    trans: [
      'n.范围； 射程； 类别； （山脉，房屋等的）排列 vi.搜索； 变化； 延伸； 漫游 vt.排列； （按一定位置或顺序）排序； 把…分类； 徘徊 adj.牧场的，放牧区的'
    ]
  },
  { name: 'allocate', trans: ['v. 分派, 分配, 分配额'] },
  { name: 'simply', trans: ['adv.&amp;adj. 简单地,仅仅'] },
  {
    name: 'verify',
    trans: [
      'v. 查证,核实 n.[计算机] DOS 命令 : 打开关闭在 DOS 操作期间的写文件校验开关'
    ]
  },
  { name: 'manner', trans: ['n. 样子,礼貌,风格,方式'] },
  { name: 'direction', trans: ['n. 方向,指导,用法说明,趋势'] },
  { name: 'portion', trans: ['n. 部分,份,命运 v. 将...分配,分配'] },
  { name: 'emulator', trans: ['n. 仿真器'] },
  { name: 'successful', trans: ['adj. 成功的,达到目的的'] },
  { name: 'applied', trans: ['adj. 应用的 v. 应用, 适用 vbl. 应用'] },
  {
    name: 'sum',
    trans: ['n. 总数(计),金额,顶点,概略,一笔钱 vt. 总计,概括 vi. 总计']
  },
  { name: 'achieve', trans: ['vt. 完成,达到,实现 vi. 达到目的'] },
  {
    name: 'together',
    trans: ['adv. 一起，共同，相结合，同时地，协调地 adj. 头脑清楚的，镇定的']
  },
  { name: 'affect', trans: ['vt. 影响, 作用, 感动'] },
  { name: 'delay', trans: ['n. 耽搁,迟滞 vt. 耽搁,延迟 vi. 耽搁'] },
  {
    name: 'free',
    trans: ['adj. 自由的,大方的,免费的 vt. 释放,解放 adv. 自由地,免费地']
  },
  { name: 'properly', trans: ['adv. 适当地, 相当地, 当然地'] },
  { name: 'kind', trans: ['adj. 仁慈的,友好的 n. 种类,本质'] },
  { name: 'splitting', trans: ['爆裂式的'] },
  { name: 'feature', trans: ['n. 特征, 容貌 vt. 以...为特色 vi. 起重要作用'] },
  { name: 'console', trans: ['vt. 安慰,慰藉 n. 仪表盘,操控台,(游戏)平台'] },
  { name: 'operate', trans: ['vi. 操作, 运转 vt. 起作用, 动手术'] },
  { name: 'kernel', trans: ['n. 核心, 中心, 精髓 [计算机] 核心'] },
  { name: 'easy', trans: ['adj. 容易的,安逸的,不费力的 adv. 慢慢地, 当心地'] },
  { name: 'modifier', trans: ['n. 修正的人, 修饰语'] },
  {
    name: 'invalid',
    trans: ['adj. 无效的,伤残的 n. 病人,残疾者 vt. 失去健康']
  },
  { name: 'compiler', trans: ['n. 编辑者，[计算机]编译器, 编译程序'] },
  {
    name: 'dot',
    trans: [
      'n. 小圆点,少量,小东西 vt. 作小点记号,点缀 vi. 作小点记号 [计算机] 点'
    ]
  },
  {
    name: 'beep',
    trans: ['n. 哔哔声 vt. 产生（如号角）声音 vi. 吹号，发出哔哔声']
  },
  { name: 'face', trans: ['n. 脸, 神情, 面子, 表面 vt. 面对, 朝 vi. 朝, 向'] },
  {
    name: 'random',
    trans: ['n. 随意,任意 adj. 任意的,随便的,胡乱的 adv. 随机地']
  },
  { name: 'facility', trans: ['n.设备； 容易； 能力； 灵巧'] },
  { name: 'heading', trans: ['n. 标题，题目，航向 动词 head 的现在分词'] },
  { name: 'asynchronous', trans: ['adj. 异步的'] },
  { name: 'series', trans: ['n. 系列，连续'] },
  { name: 'individual', trans: ['adj. 个别的; 独有的 n. 个人, 个体'] },
  { name: 'explain', trans: ['vt. &vi. 解释,说明'] },
  { name: 'paste', trans: ['n. 糊,浆糊,铅制玻璃 vt. 粘贴,覆盖,猛击'] },
  {
    name: 'welcome',
    trans: [
      'vt.欢迎； 乐于接受 adj.受欢迎的； 令人愉悦的； 表示感谢的 n.欢迎，迎接'
    ]
  },
  { name: 'six', trans: ['n.六；六个；六岁；六点 num.六；六个'] },
  { name: 'early', trans: ['adv.&amp;adj. 早'] },
  {
    name: 'wrap',
    trans: [
      'vt.包； 缠绕； 用…包裹（或包扎、覆盖等）； 掩护 n.膝毯，披肩，围巾，围脖，头巾，罩衫，外套，大衣； 包装纸； 〈俚〉机密 vi.缠绕，盘绕（通常与 over, around 等连用）； 包上，裹上； 穿上（衣服等）'
    ]
  },
  {
    name: 'blue',
    trans: [
      'adj. 蓝色的,沮丧的,忧郁的,(女人)有学问的 n. 蓝色 vt. 使...变蓝 vi. 变蓝'
    ]
  },
  { name: 'queue', trans: ['n. 行列,长队 v. 排队 vi. 排长队'] },
  {
    name: 'interrupt',
    trans: ['n. 中断 vt. 打断,妨碍 vi. 插嘴 [计算机] 中断']
  },
  {
    name: 'respect',
    trans: ['n. 尊敬, 敬重; 关系, 方面 vt. 尊敬, 尊重; 关于, 涉及']
  },
  {
    name: 'common',
    trans: ['adj. 共同的, 平常的, 普通的 n. 平民, 普通, 公地, 公园']
  },
  { name: 'hyphen', trans: ['n. 连字号 v. 以连字号连接'] },
  { name: 'serial', trans: ['n. 序列，串列 adj. 连续的，一连串的'] },
  { name: 'loading', trans: ['n.装载,装填'] },
  { name: 'retain', trans: ['vt. 保持, 保留; 记住'] },
  { name: 'setup', trans: ['n. 装备, 组织, 计划'] },
  { name: 'freeze', trans: ['v. 冻结, 冷冻, 僵硬'] },
  { name: 'intend', trans: ['v. 打算 vt. 想要,打算,计划'] },
  { name: 'explanation', trans: ['n. 解释, 说明'] },
  {
    name: 'certain',
    trans: ['adj. 一定的 pron. 某几个,某些 肯定的,无疑的,必然发生的']
  },
  { name: 'zap', trans: ['vt. 击溃，射杀 vi. 快速移动 int. 嚓(表示枪声等）'] },
  { name: 'archive', trans: ['n. 档案,档案馆 vt. 存档'] },
  {
    name: 'negative',
    trans: ['adj. 否定的,负的,消极的 n. 底片，负数，否定 vt. 否定']
  },
  { name: 'image', trans: ['n. 图像,影像,肖像,想像,形象 vt. 想像,描绘,反映'] },
  { name: 'platform', trans: ['n. 平台,月台,讲台,坛,计划'] },
  { name: 'often', trans: ['adv. 经常'] },
  {
    name: 'signal',
    trans: ['n. 信号,导火线,动机 vt. 发信号,标志 vi. 发信号 adj. 显著的']
  },
  {
    name: 'CPU',
    trans: ['abbr. [计算机]中央处理器(=central processing unit)']
  },
  {
    name: 'bit',
    trans: [
      'n. 一点儿,少量 n. 钻头,马嚼子,辅币 n. 位,比特(二进位制信息单位) v. 控制'
    ]
  },
  { name: 'fully', trans: ['adv. 十分地, 完全地, 全'] },
  { name: 'deactivate', trans: ['vt. 使无效，使不活动，解散部队'] },
  { name: 'especially', trans: ['adv. 特别,尤其'] },
  { name: 'usually', trans: ['adv. 通常'] },
  {
    name: 'recommend',
    trans: ['vt. 建议, 推荐, 劝告 vt. 使成为可取, 使受欢迎']
  },
  { name: 'maintain', trans: ['vt. 维持; 维修, 保养; 坚持; 断言'] },
  { name: 'important', trans: ['adj. 重要的,影响很大的'] },
  {
    name: 'central',
    trans: ['adj. 中心的,基本的,折中的,中枢的 n. 电话交流,中央办公室,中心']
  },
  { name: 'addition', trans: ['n. 增加,附加物,加,加法'] },
  { name: 'anytime', trans: ['adv. 任何时候；无例外地'] },
  { name: 'analyst', trans: ['n. 分析家'] },
  {
    name: 'false',
    trans: ['adj. 不真实的,错误的,人造的,假的,虚伪的 adv. 不真诚地,虚伪地']
  },
  {
    name: 'black',
    trans: [
      'adj.黑（色）的； 黑色人种的； 黑暗的 n.黑色； 黑人； 黑颜料； 黑暗 v.使变黑； 抵制； 拒绝； 使变黑暗'
    ]
  },
  {
    name: 'gather',
    trans: [
      'vt.收集； 聚集，搜集； 收紧，收缩； 采集 vi.逐渐增加，积聚 n.聚集； 衣褶'
    ]
  },
  {
    name: 'cycle',
    trans: ['n. 循环,周期,长期,圈,套曲,自行车, vt. 环行,骑自行车 vi. 使环行']
  },
  {
    name: 'relative',
    trans: ['adj. 相对的,比较的,涉及到的 n. 亲属,同类事物,相关物']
  },
  {
    name: 'offer',
    trans: ['n. 出价, 提议 vt. 提供, 出价; 贡献, 奉献 vi. 提议; 出现; 求婚']
  },
  { name: 'ending', trans: ['n. 结尾, 结局'] },
  { name: 'rent', trans: ['n. 租金 v. 租 vi. 出租 vt. 出租,租用'] },
  {
    name: 'sentence',
    trans: ['n. 句子,意见,宣判,刑罚,命题 vt. 宣判,判决,使遭受']
  },
  { name: 'remember', trans: ['vt. &vi. 记得,记忆'] },
  { name: 'proper', trans: ['adj. 适当的,正确的,合适的,正当的,规矩的'] },
  {
    name: 'design',
    trans: [
      'vt.& vi.设计； 绘制 vt.设计； 计划； 企图； 决意（做） n.设计； 图案； 结构； 计划 vi.设计略图； （为工艺品、装潢项目等）设计； 当设计师； 构思'
    ]
  },
  {
    name: 'examine',
    trans: ['vt.检查，调查； 考试； 诊察； 审问 vi.检查； 调查']
  },
  {
    name: 'initial',
    trans: ['n. (词)首字母 adj. 开始的, 最初的, 字首的 vt. 签姓名的首字母于']
  },
  {
    name: 'corrupt',
    trans: ['adj. 腐败的,堕落的 vt. 使...恶化,贿赂,使...腐烂 vi. 腐烂,堕落']
  },
  { name: 'buy', trans: ['n. 合理的价格,购买 vt. 买,换得,收买,接受 vi. 购买'] },
  { name: 'increase', trans: ['v. 增加, 提高 n. 增加, 增强, 提高'] },
  {
    name: 'host',
    trans: [
      'n.[计算机]主机； 主人，东道主； 节目主持人； 酒店业主 vt.当主人； 主办宴会，主持节目； 款待，做东 vi.做主人，做东道主'
    ]
  },
  { name: 'sample', trans: ['n. 样品,标本 vt. 采样,品尝 adj. 样例的'] },
  {
    name: 'pending',
    trans: ['adj. 待定的,即将发生或来临的 prep. 直到,等待...的时候,在...期间']
  },
  {
    name: 'divide',
    trans: ['vt.& vi.分； 划分； 分离； （使）产生分歧 n.分水岭，分界线； 分配']
  },
  {
    name: 'boot',
    trans: [
      'n. 靴子,[英]汽车行李箱,猛踢, 锁扣 vt. 踢, 穿靴子,锁车 vi. 启动（计算机),在（通常为非法停放的汽车）车轮上装制动装置, 利用, 帮助'
    ]
  },
  {
    name: 'hide',
    trans: [
      'vt.隐藏； 躲避，隐匿，躲藏； 遮蔽，覆盖 vi.隐瞒； 遮住； 遮挡； 掩盖 n.兽皮； <口>生命； <口>人的皮肤； （观看野生动物的）隐蔽处'
    ]
  },
  { name: 'half', trans: ['adj. 一半的, 不完全的 adv. 一半地 n. 半, 一半'] },
  { name: 'magenta', trans: ['n.&amp;adj. 紫红色(的染料)'] },
  {
    name: 'leading',
    trans: [
      'n. 领导, 疏导, 铅板 adj. 领导的, 主要的, 在前的 vbl. 领导, 引领, 以铅接合 [计算机] 行间空白'
    ]
  },
  {
    name: 'wrong',
    trans: [
      'adj. 错误的,不正当的,失常的 adv. 错误地 n. 错误,不公正 vt. 伤害,亏待,欺骗,中伤'
    ]
  },
  { name: 'today', trans: ['n.&amp;adv. 今天'] },
  { name: 'least', trans: ['adj. 最少的,最小的 n.&amp;adv. 最少,最小'] },
  {
    name: 'opposite',
    trans: [
      'adj. 相对的, 相反的, 对面的 n. 对立物，对立者，对手 adv. 在对面地，处于相反位置地 prep. 在...对面'
    ]
  },
  { name: 'white', trans: ['adj. 白色的,白种的,纯洁的,幸运的 n. 白色,白种人'] },
  {
    name: 'override',
    trans: ['vt. 弃绝,渺视,凌驾,过度负重 n. 给代理人的佣金,滥用 [计算机] 废除']
  },
  { name: 'brown', trans: ['adj. 褐色的,棕色的 n. 褐色,棕色 (姓)布朗'] },
  {
    name: 'hex',
    trans: [
      'v. 施法，诅咒 n. 施法的人 abbr. (=hexagon) 六边形 abbr. (=hexadecimal) 十六进制'
    ]
  },
  {
    name: 'rest',
    trans: [
      'n.休息； 剩余部分； 支持物； 宁静，安宁 vt.& vi.（使）休息； （使）倚靠[支撑] vi.休息； 静止； 停止； 安心 vt.使休息； 使轻松； 使长眠； 使依赖'
    ]
  },
  { name: 'damage', trans: ['n. (pl.)赔偿金,损坏,毁坏 vt. 损害,毁坏'] },
  { name: 'instant', trans: ['n. 立即, 瞬间 adj. 立即的, 即时的'] },
  {
    name: 'reserved',
    trans: ['v. 保留(预定,推迟) adj. 保留的(预订的,冷淡的,缄默)']
  },
  { name: 'technology', trans: ['n. 技术,工艺(学)'] },
  { name: 'handle', trans: ['n. 柄,把手 vt. 买卖,处理,操作 vi. 驾驭'] },
  {
    name: 'apply',
    trans: ['vt. 应用, 申请; 涂 vt. 使专心从事 vi.申请; 有关联']
  },
  {
    name: 'stand',
    trans: ['n. 站立,停顿,楼台,货摊 vi. 站立,位于，停滞 vt. 忍受,使站立']
  },
  { name: 'payment', trans: ['n. 支付, 付款'] },
  { name: 'kilobyte', trans: ['n. [计]千字节(1024 字节)'] },
  { name: 'parenthesis', trans: ['n. 圆括号, 插入语, 插曲，间歇,停歇'] },
  {
    name: 'scan',
    trans: [
      'vt. 扫描；浏览；细看；详细调查；标出格律 vi. 扫描；扫掠 n. 扫描；浏览；审视；细看'
    ]
  },
  { name: 'developer', trans: ['n. 开发者，显影剂'] },
  { name: 'murder', trans: ['n. 谋杀,危险物 vt. 谋杀,折磨,损坏 vi. 谋杀'] },
  {
    name: 'flush',
    trans: [
      'n. 流溢, 面红, 旺盛, 冲水(尤指冲马桶), 突然萌发, (纸牌)同花顺, 清一色 [计算机] 冲洗 vi. 脸发红, 冲刷, 旺盛成长 vt. 用水冲洗, 惊起(一群鸟), 抄...老窝, 使兴奋 adj. 丰足的,齐平的,满盈的 adv. 正直地, 羞涩地'
    ]
  },
  { name: 'unlock', trans: ['vt. 开启, 显露, 放开'] },
  { name: 'movement', trans: ['n. 活动,运动,动作,移动'] },
  { name: 'consecutive', trans: ['adj. 连续的,连贯的'] },
  { name: 'collection', trans: ['n. 收藏品,收集物,小组,集合'] },
  {
    name: 'front',
    trans: [
      'n.前面； 正面； 身体前部； 前线 adj.前面的； 正面的； 舌前的 v.面向； 在…前面； 用…作正面； 领导'
    ]
  },
  { name: 'prefix', trans: ['n. 前缀 vt. 加...作为前缀,置于前面 adj. 前缀的'] },
  { name: 'carousel', trans: ['n. 旋转木马, （机场的）行李传送带 =carrousel'] },
  {
    name: 'safety',
    trans: ['n.安全； 安全性； 安全处所； 中卫 adj.保障安全的']
  },
  {
    name: 'static',
    trans: ['n. 静电, 静电干扰, 噪声, 阻碍, 抨击 adj. 静态的,静电的,固态的']
  },
  { name: 'fact', trans: ['n. 实际, 事实'] },
  { name: 'alter', trans: ['v. 改变'] },
  {
    name: 'track',
    trans: ['n. 小路, 跑道, 轨道, 踪迹; 惯例, 常规 v. 跟踪, 追踪']
  },
  { name: 'precedence', trans: ['n. 优先, 居先'] },
  {
    name: 'skeleton',
    trans: ['n. 骨架,纲要,骨骼,骨瘦如柴的人或动物,家丑 adj. 骨骼的']
  },
  {
    name: 'log',
    trans: [
      'n. 记录,圆木,日志,计程仪 vt. 伐木,切,记录,航行,度过(时间) vi. 采伐'
    ]
  },
  { name: 'star', trans: ['n. 星, 明星 v. 以星状物装饰, 变成演员'] },
  {
    name: 'hot',
    trans: [
      'adj. 热的,热情的,辣的,性感的 adv. 激动地,快速地 n. 最高温度,滚烫的东西'
    ]
  },
  { name: 'replaceable', trans: ['adj. 可置换的，可代替的'] },
  { name: 'accessible', trans: ['adj. 可得到的, 易接近的, 可进入的'] },
  { name: 'involve', trans: ['vt. 包含, 使陷入, 使忙于, 使卷入, 牵涉'] },
  { name: 'configure', trans: ['v. 配置'] },
  { name: 'question', trans: ['n. 问题,询问,争论点 vt. 询问,怀疑 vi. 问问题'] },
  {
    name: 'green',
    trans: [
      'adj.绿色的； 未熟的，青春的； 未成熟的； 主张保护环境的 n.绿色蔬菜； 绿色的衣服； 植物 vi.绿化，使重视环境保护问题'
    ]
  },
  { name: 'entirely', trans: ['adv. 完全地'] },
  { name: 'helpful', trans: ['adj. 有帮助的, 有益的'] },
  {
    name: 'middle',
    trans: [
      'n.中部，中间； 腰部； 中央； 正中 adj.中部的； 中央的； 正中的； 中间的 vt.把…放在中间； 把…对折 vi.放在中间； 对折'
    ]
  },
  {
    name: 'declared',
    trans: ['adj. 承认的, 公告的 动词 declare 的过去式和过去分词']
  },
  { name: 'compress', trans: ['vt. 压缩, 压榨 n. [医]敷布'] },
  { name: 'graphically', trans: ['adv. 用图表表示地'] },
  { name: 'auto', trans: ['n. autos=automobile 自动汽车 pref. 自动的,自己的'] },
  {
    name: 'automatic',
    trans: ['n. 自动装置, 半自动武器 adj. 自动的,机械的,半自动化的']
  },
  { name: 'anywhere', trans: ['adv. 任何地方 pron. 任何(一个)地方'] },
  {
    name: 'terminal',
    trans: ['n. n. 终端机,终点,末端 adj. 终点的,晚期的,致死的']
  },
  { name: 'door', trans: ['n. 门'] },
  { name: 'expire', trans: ['vi. 期满,失效,终止,断气 vt. 呼气'] },
  { name: 'resolution', trans: ['n.决心； 解决； 坚决； 分辨率'] },
  { name: 'local', trans: ['adj. 地方性的,当地的,局部的 [计算机] 局部的'] },
  { name: 'semicolon', trans: ['n. 分号'] },
  { name: 'reread', trans: ['vt.重读,再读'] },
  { name: 'overwrite', trans: ['v. 重写, 写得过多, 描述过分'] },
  {
    name: 'critical',
    trans: ['adj.批评的，爱挑剔的； 危险的，危急的； 决定性的； [物]临界的']
  },
  { name: 'manager', trans: ['n. 经理'] },
  { name: 'capability', trans: ['n. 能力,才能,性能,容量'] },
  {
    name: 'affected',
    trans: [
      'adj. 受到影响的；做作的；假装的 vt. 影响；假装；使…感动（affect 的过去式和过去分词）'
    ]
  },
  { name: 'border', trans: ['n. 边缘 vt. 作...之疆界,加边'] },
  {
    name: 'cache',
    trans: ['n. 电脑高速缓冲存储器；贮存物；隐藏处 vt. 隐藏；窖藏 vi. 躲藏']
  },
  {
    name: 'bell',
    trans: ['n. 钟,铃,花冠,吼叫声 vt. 敲钟,使象钟状地张开 vi. 使呈钟状,张开']
  },
  {
    name: 'play',
    trans: [
      'n. 游戏,游玩,剧本,比赛,比赛中的动作,影响 vt. &vi. 玩,进行比赛,演奏,播放,捉弄,假装'
    ]
  },
  { name: 'quickly', trans: ['adv. 快, 迅速'] },
  { name: 'fastback', trans: ['快速返回'] },
  {
    name: 'answer',
    trans: [
      'vt.& vi.答复； 解答； 答辩； 适应 n.回答； 答案； 反应； 足以媲美的人'
    ]
  },
  { name: 'represent', trans: ['vt. 表现, 表示, 描绘, 代表 vi. 提出异议'] },
  { name: 'difference', trans: ['n. 差异,分歧 vt. 引起区别'] },
  {
    name: 'project',
    trans: ['n. 工程,项目,计划,事业 v. 计划,设计,表达 v. 投射,放映,凸出']
  },
  { name: 'physical', trans: ['adj. 身体的,物理的,物质的 n. 体检'] },
  { name: 'matter', trans: ['n. 事件, 物质, 原因 vi. 有关系'] },
  { name: 'hercules', trans: ['n.大力英雄,力士,武仙座'] },
  {
    name: 'reduce',
    trans: [
      'vt.换算； 约束； 使变为； 使变弱 vi.减少； 减轻体重； [生物学]（细胞）减数分裂； （液体）浓缩变稠'
    ]
  },
  { name: 'publisher', trans: ['n. 出版者, 发行人'] },
  {
    name: 'trim',
    trans: [
      'n. 整齐,装饰,修剪下来的部分 adj. 整洁的,匀称的 adv. 整齐地 vt. 修除,削剪,装备,痛打,击败, 使整洁 vi. 保持平衡, 见风使舵'
    ]
  },
  {
    name: 'substitute',
    trans: ['n. 代替者,代用品 v. 代替 vi. (for)代替 vt. 用...代替,代以']
  },
  { name: 'disabled', trans: ['adj. 残废的 n. 残疾人'] },
  { name: 'recent', trans: ['adj. 近来的, 新近的'] },
  {
    name: 'positive',
    trans: ['adj. 肯定的, 积极的, 绝对的 adj. 正面的, 正数的, 阳性的']
  },
  {
    name: 'upgrade',
    trans: ['vt. 提高(上升,浓集,加强) n. 提高(上升,浓集,加强)']
  },
  {
    name: 'instance',
    trans: ['n.例子，实例； 情况； 要求，建议； [法]诉讼手续 vt.举…为例']
  },
  { name: 'happen', trans: ['vi. 发生,碰巧,出现,偶然遇到'] },
  { name: 'future', trans: ['adj. 将来的 n. 将来,未来 n. 期货'] },
  { name: 'midnight', trans: ['n. 午夜，漆黑'] },
  { name: 'though', trans: ['adv. 可是,然而,不过 conj. 尽管,虽然 prep. 但.'] },
  {
    name: 'nor',
    trans: [
      'conj.&adv. 也不,也没有 [计]"或非"，"非或" abbr. 诺曼人(=Norman) abbr. 北方（=North） abbr. 挪威（= Norway） abbr. 挪威人（=Norwegian）'
    ]
  },
  {
    name: 'mono',
    trans: [
      'pref. 表示“一”“单一” adj. (唱片等)单声道的 n. 单声道唱片 n. (=infectious mononucleosis) 传染性单核细胞增多症'
    ]
  },
  {
    name: 'slide',
    trans: ['n. 滑,幻灯片,雪崩,山崩,滑坡,滑梯 vt. 使滑 vi. 滑,跌落']
  },
  { name: 'abort', trans: ['v. 流产, 打胎, 堕胎'] },
  { name: 'jump', trans: ['n. 跳跃,跳动,上涨 vt. &vi. 跳越,突升,惊跳'] },
  {
    name: 'toward',
    trans: ['prep. 对于,关于,接近,将近,向,朝 adj. 有希望的,有利的,逼近的']
  },
  { name: 'throughout', trans: ['adv. 到处, 自始至终 prep. 遍及, 贯穿'] },
  { name: 'via', trans: ['prep. 经由'] },
  { name: 'among', trans: ['prep. 在...之中'] },
  {
    name: 'neither',
    trans: ['adj. 皆不,两者都不 int. 两者都不 conj. 既非,既不']
  },
  {
    name: 'layer',
    trans: [
      'n.层，层次； 膜； [植]压条； 放置者，计划者 vt.把…分层堆放； 借助压条法； 生根繁殖； 将（头发）剪成不同层次 vi.形成或分成层次； [植]通过压条法而生根'
    ]
  },
  {
    name: 'scatter',
    trans: ['n. 散布, 零星少量 vt. 驱散, 散播 vi. 分散, 消散']
  },
  { name: 'attention', trans: ['n. 注意(力),关心,立正'] },
  {
    name: 'convention',
    trans: ['n.会议； 全体与会者； 国际公约； 惯例，习俗，规矩']
  },
  { name: 'conventional', trans: ['adj. 普通的,常见的,习惯的,常规的'] },
  {
    name: 'tool',
    trans: [
      'n. 工具,用具,受人利用的人,印压的图案 vt. 驾驶,用工具加工,印压图案于 vi. 驾驶,用工具加工'
    ]
  },
  { name: 'processor', trans: ['n. 加工者,处理器'] },
  { name: 'desktop', trans: ['n. 桌面，台式电脑 adj. 台式的，桌上用的'] },
  {
    name: 'build',
    trans: ['vt. &vi. 建造，创建，开发，逐渐增强 n. 体格，身材']
  },
  { name: 'development', trans: ['n. 发展,显影, 开发区, 开发'] },
  { name: 'exceed', trans: ['vt. 超过, 胜过, 超出界限 vi. 领先'] },
  { name: 'understand', trans: ['vt. 理解, 闻知 vi. 理解, 相信, 表示同情'] },
  { name: 'horizontal', trans: ['adj. 水平的,横的 n. 水平线,水平面'] },
  {
    name: 'meet',
    trans: [
      'n. 集会,比赛, 运动会 adj. 适宜的,合适的 vt. 遇见,引见,经历,结识,对付,满足,支付 vi. 相遇,集合,交锋,相交'
    ]
  },
  { name: 'protect', trans: ['vt. 保护,投保 vi. 提供保护'] },
  {
    name: 'reserve',
    trans: ['n. 预备品, 贮存, 候补 n. 克制, 含蓄 vt. 保留, 预订, 延期']
  },
  { name: 'clock', trans: ['n. 时钟, 计时器'] },
  {
    name: 'manifest',
    trans: ['n. 载货单,运货单,旅客名单 adj. 显然的,明白的 vt. 显示, 证实, 出示']
  },
  { name: 'safe', trans: ['adj. 安全的 n. 保险箱'] },
  { name: 'disconnect', trans: ['vt. 使分离 vi. 断开，拆开'] },
  { name: 'clockwise', trans: ['adj. 顺时针方向的 adv. 顺时针方向地'] },
  { name: 'eliminate', trans: ['v. 除去,排除,剔除 [计算机] 消除'] },
  { name: 'actual', trans: ['adj. 实际的,真实的'] },
  { name: 'declaration', trans: ['n. 宣布, 宣言'] },
  { name: 'probably', trans: ['adv. 大概,或许'] },
  {
    name: 'ring',
    trans: [
      'n. 环, 戒指, 铃声, 圈 vt. 包围, 挂铃铛 vi. 鸣响, 回响, 在空气中螺旋上扬, 形成圈'
    ]
  },
  { name: 'cover', trans: ['n. 封面, 盖子, 表面 v. 覆盖, 涉及, 包含'] },
  { name: 'indicator', trans: ['n. 指示器, 指示剂 [计算机] 指示符'] },
  { name: 'apple', trans: ['n. 苹果'] },
  { name: 'icon', trans: ['n. 肖像, 偶像, 象征, 图符 [计算机] 图标,图符'] },
  { name: 'consideration', trans: ['n. 考虑, 体贴, 考虑因素, 敬重, 意见'] },
  { name: 'skill', trans: ['n. 技能, 技巧'] },
  { name: 'picture', trans: ['n. 图画,照片,景色 vt. 画,描写,想像'] },
  { name: 'layout', trans: ['n. 布局, 安排, 设计'] },
  { name: 'suggest', trans: ['vt. 建议,暗示,要求'] },
  { name: 'convenient', trans: ['adj. 方便的'] },
  { name: 'instruct', trans: ['v. 教, 命令, 指导 [计算机] 指示'] },
  { name: 'appendix', trans: ['n. 附录,阑尾'] },
  { name: 'medium', trans: ['n. 媒体, 方法, 媒介 adj. 适中的, 中等的'] },
  {
    name: 'truncate',
    trans: ['vt. 切去头端，缩短，截棱成平面 adj. 切去了头，缩短了的，截形的']
  },
  { name: 'inhibit', trans: ['vt. &vi. 禁止,抑制 [计算机] 禁止'] },
  { name: 'nearly', trans: ['adv. 几乎, 差不多'] },
  { name: 'warn', trans: ['vt. 警告,注意,远离 vi. 提醒'] },
  { name: 'underline', trans: ['v. 在...下面划线'] },
  {
    name: 'register',
    trans: [
      'v. 记录, 登记, 注册, 挂号 n. 暂存器, 记录, 登记簿 n. (语)语域; 通风调节设备'
    ]
  },
  {
    name: 'stuff',
    trans: ['n. 材料, 原料, 东西 n. 素质, 本质; 废物 vt. 填满, 塞满']
  },
  { name: 'exclude', trans: ['vt. 除外,排除,拒绝 [计算机] 排除'] },
  { name: 'destroy', trans: ['vt. &vi. 破坏,毁坏 [计算机] 撤消'] },
  { name: 'calculation', trans: ['n. 计算'] },
  {
    name: 'angle',
    trans: [
      'n. 角(度),角落 vt. 斜移,转变角度 vi. 钓鱼,谋取,转变角度 n. (Angle)盎格鲁人'
    ]
  },
  { name: 'lexical', trans: ['adj. 字典的, 语句的'] },
  { name: 'decide', trans: ['vt. &vi. 决定,作出抉择'] },
  { name: 'trouble', trans: ['n. 困扰,麻烦,困难,故障 vt.& vi. 困扰,麻烦'] },
  { name: 'customer', trans: ['n. 顾客，家伙'] },
  {
    name: 'port',
    trans: [
      'n.港口； （事情的）意义； （计算机与其他设备的）接口； （船、飞机等的）左舷 vt.举枪； 持枪； 左转舵 vi.转向左舷 adj.左舷的，左侧的 vt.& vi.转舵（向左），把（舵）转向左边 adv.向左舷，向左'
    ]
  },
  { name: 'discuss', trans: ['vt. 讨论'] },
  { name: 'segment', trans: ['n. 部分 v. 部分,段,分割 vt. 分割'] },
  { name: 'filing', trans: ['n. 锉(文件的整理汇集)'] },
  {
    name: 'market',
    trans: ['n. 市场,交易,推销地区 vt. 在市场上交易,使...上市 vi. 在市场上买卖']
  },
  { name: 'valuable', trans: ['adj. 贵重的, 有价值的 n. (pl.)贵重物品'] },
  { name: 'limited', trans: ['adj. 有限的'] },
  { name: 'trying', trans: ['vbl. 试验,尝试 adj. 难受的, 费劲的, 令人厌烦的'] },
  { name: 'heap', trans: ['n. 堆,许多,累积 vt. 使成堆,装满 [计算机] 堆'] },
  {
    name: 'grey',
    trans: ['adj. 灰色的 n. 灰色(的) v. 变成灰色 [=gray] vi. 变成灰色']
  },
  { name: 'permanently', trans: ['adv. 永久地'] },
  { name: 'accelerator', trans: ['n. 加速器, 油门，[化学]加速剂，促进剂'] },
  { name: 'originally', trans: ['adv. 本来,原来,最初 重要的'] },
  { name: 'ability', trans: ['n. 才能, 能力'] },
  { name: 'internally', trans: ['adv.在内,在中心'] },
  {
    name: 'derelict',
    trans: ['adj. 被抛弃了的,无主的,玩忽职守的 n. 遗弃物,被遗弃的人,玩忽职守者']
  },
  { name: 'redirect', trans: ['adj. 再直接的 v. 重新传入, 重新寄送'] },
  { name: 'reside', trans: ['v. 住,居留,属于'] },
  {
    name: 'header',
    trans: [
      'n. 装盖者，割穗机，顶梁，集管 n.[体]头球，头先入水的跳水姿势 n.[计]页眉'
    ]
  },
  {
    name: 'extra',
    trans: ['adj. 额外的 adv. 特别地 n. 额外的事物，另外收费的']
  },
  {
    name: 'repeated',
    trans: ['adj. 重复的, 再之的 动词 repeat 的过去式和过去分词形式']
  },
  { name: 'death', trans: ['n. 死,死亡，死神，毁灭'] },
  { name: 'observe', trans: ['v. 观察, 遵守, 注意到'] },
  { name: 'density', trans: ['n. 密集,密度,透明度'] },
  { name: 'management', trans: ['n. 管理(层),经营,处理'] },
  { name: 'environmental', trans: ['adj. 环境的'] },
  { name: 'surrounding', trans: ['adj. 周围的 n. 环境, 周围的事物'] },
  {
    name: 'master',
    trans: ['n. 主人, 硕士, 母机 adj. 主人的, 主要的 v. 征服, 控制, 精通']
  },
  { name: 'recursive', trans: ['adj. 递归的，循环的'] },
  {
    name: 'trap',
    trans: ['n. 圈套,陷阱,困境,双轮轻便马车 vt. &vi. 设圈套,设陷阱']
  },
  { name: 'dimensional', trans: ['adj.空间的'] },
  { name: 'logic', trans: ['n. 逻辑(学),逻辑性,合理的推理'] },
  { name: 'conjunction', trans: ['n. 连词, 结合, 关联,(事件等的)同时发生'] },
  { name: 'identical', trans: ['adj. 相同的,同一的'] },
  { name: 'advice', trans: ['n. 忠告，建议，劝告'] },
  { name: 'meaning', trans: ['n. 意义,意思,含义 adj. 意味深长的'] },
  { name: 'fall', trans: ['n. 秋天, 落下, 瀑布 v. 倒下, 落下, 来临'] },
  { name: 'interval', trans: ['n. 间隔,休息时间, (数学)区间, (音乐)音程'] },
  { name: 'compatibility', trans: ['n. 和谐共处, 兼容'] },
  {
    name: 'rule',
    trans: ['n. 惯例,规则,统治 v. 裁定,统治,支配 vi. 裁决,统治 vt. 统治']
  },
  {
    name: 'flag',
    trans: ['n. 旗标,旗子,信号旗 vt. 打旗号 vi. 无力地下垂,减退']
  },
  { name: 'criterion', trans: ['n. 标准, 准则'] },
  { name: 'office', trans: ['n. 办公室，职务，事务'] },
  {
    name: 'express',
    trans: [
      'n. 快车, 快递, 专使 adj. 急速的, 明确的, 直接的 adv. 用快递; 特意地 vt. 表达, 表示; 挤压出; 快递'
    ]
  },
  { name: 'volume', trans: ['n. 体积, 容量, 音量 n. 卷, 册'] },
  {
    name: 'soft',
    trans: [
      'adj. 柔软的,温和的,不强烈的,细腻的,轻的 adv. 柔软地,温和地 n. 柔软的东西'
    ]
  },
  { name: 'activity', trans: ['n. 活动；行动；活跃'] },
  { name: 'odometer', trans: ['n. 里程表'] },
  { name: 'phoenix', trans: ['n. 凤凰, 长生(不死)鸟 引申为重生'] },
  { name: 'obtain', trans: ['vt. 获得, 得到 vi. 通用, 流行, 存在'] },
  { name: 'easel', trans: ['n. 画架'] },
  { name: 'latter', trans: ['adj. 后面的,后者的 pron.&amp;n. 后者'] },
  { name: 'decrease', trans: ['n. 减少(量),降低 vt.& vi. 减少,降低'] },
  { name: 'mainframe', trans: ['n. 主机，大型计算机'] },
  { name: 'diacritical', trans: ['adj. 可区分的 =diacritic'] },
  { name: 'confidential', trans: ['adj. 机密的,获他人信赖的,易于信任他人的'] },
  {
    name: 'trace',
    trans: ['n. 痕迹,踪迹,微量 vt. 追踪,找出根源,描绘 vi. 追踪']
  },
  { name: 'division', trans: ['n. 区分,分开,除法,公司,部门，师（军队里）'] },
  { name: 'regular', trans: ['adj. 有规律的,有规则的,整齐的,正规的'] },
  { name: 'implicit', trans: ['adj. 暗示的,盲从的 [计算机] 隐式'] },
  { name: 'mention', trans: ['vt.提到，说起； 提名表扬 n.提及'] },
  {
    name: 'near',
    trans: [
      'adj. 接近的,近亲的,亲近的,勉强的,直接的,小气的,近似的 adv. 接近,几乎,亲近 prep. 靠近 vt. 靠拢,接近 vi. 接近'
    ]
  },
  { name: 'fifth', trans: ['num. 第五 n.五分之一'] },
  { name: 'seven', trans: ['num. 七'] },
  { name: 'whereas', trans: ['conj.&amp;adv. 然而,却,反之'] },
  {
    name: 'review',
    trans: ['n. 检讨, 复习, 回顾, 评审 vt. 温习, 检讨, 评论, 检阅 vi. 写评论']
  },
  { name: 'transform', trans: ['vt. 转换,变形 vi. 改变 n. 变形'] },
  {
    name: 'align',
    trans: ['vt. 使成一行, 使一致, 使结盟, 调整, 排列 vi. 成一条线']
  },
  { name: 'yellow', trans: ['adj. 黄色的 n. 黄色'] },
  {
    name: 'assist',
    trans: ['n. 帮助,协助,协助的器械 vt. 帮助,协助 vi. 帮助,协助,出席']
  },
  {
    name: 'finish',
    trans: ['n. 完成,最后加工,结局,完美 vt. 结束,获...第几名 vi. 终结,完成']
  },
  { name: 'micro', trans: ['adj. 微小的 n. 微米(百万分之一, 测微计)'] },
  {
    name: 'beyond',
    trans: ['adv. 在更远处,另外 n. 远处, 来世 prep. 超出, 越过,另外']
  },
  { name: 'against', trans: ['prep. 反对,倚靠,违背,防御,相比,相对'] },
  { name: 'upon', trans: ['prep. 在...上'] },
  {
    name: 'service',
    trans: ['n. 服务, 公务部门, 服役, 发球, 发球方式 vt. 维护, 保养']
  },
  {
    name: 'little',
    trans: ['adj. 小的 adv. 毫不，少量地 n. 几乎没有（指数量或程度等）']
  },
  {
    name: 'exhaust',
    trans: ['n. 排气,排气装置 v. 用尽,耗尽,使...精疲力尽 [计算机] 排除']
  },
  { name: 'choice', trans: ['adj. 上等的,精选的 n. 选择,挑选'] },
  {
    name: 'sounding',
    trans: [
      'n. 探测水的深度, 试探 adj. 发声的, 夸大的 动词 sound 的现在分词形式'
    ]
  },
  { name: 'develop', trans: ['vt. 发展,开发,冲洗照片 vi. 进步'] },
  { name: 'holding', trans: ['n. 把持, 支持, 保持 vbl. 握住, 把持, 举行'] },
  {
    name: 'alpha',
    trans: [
      'n. 希腊字母的第一个字母，最初，开端 adj. [化]阿尔法位的，主导的，首要的，按字母顺序的'
    ]
  },
  { name: 'constant', trans: ['adj. 经常的, 不变的 n. 常数, 恒量'] },
  { name: 'warranty', trans: ['n. 担保,保证,根据'] },
  {
    name: 'stay',
    trans: [
      'n. 停留,停止;依靠,忍耐力;撑条 vt. 等待,坚持到底 vi. 保持,停留,留宿'
    ]
  },
  { name: 'industry', trans: ['n. 工业,产业,勤勉,刻苦'] },
  {
    name: 'trigger',
    trans: ['vt. 引发，引起；触发 vi. 松开扳柄 n. 扳机；[电子] 触发器；制滑机']
  },
  { name: 'lesson', trans: ['n. 课，教训 vt. 给...上课,教训'] },
  { name: 'treat', trans: ['v. 对待, 治疗，处理，请客，视为 n. 款待，宴飨'] },
  { name: 'busy', trans: ['adj. 忙的,杂乱的 vt. 使忙于 vi. 忙'] },
  { name: 'usage', trans: ['n. 惯用法,使用,用法'] },
  { name: 'difficult', trans: ['adj. 困难的, (人)难取悦的, 难相处的'] },
  { name: 'failure', trans: ['n. 失败,失败的人或事'] },
  { name: 'communication', trans: ['n. 沟通,交通'] },
  { name: 'building', trans: ['n. 建筑物'] },
  { name: 'ally', trans: ['n. 盟友,同盟国 vt. &vi. 联盟,联合，同盟'] },
  { name: 'exclamation', trans: ['n. 惊呼, 惊叹词'] },
  { name: 'turning', trans: ['n. 旋转, 回转, 转向'] },
  {
    name: 'whole',
    trans: [
      'adj. 整个的, 完全的, 未受损的, (人)全面发展的 n. 全部, 通常情况 adv. 完全地, 统一地'
    ]
  },
  { name: 'parent', trans: ['n. 父母,根源 vt. &vi. 抚养,产生'] },
  { name: 'connection', trans: ['n. 联系,关系,连接,亲戚'] },
  { name: 'connectivity', trans: ['n. [计算机] 连通性'] },
  { name: 'translation', trans: ['n. 翻译, 译文'] },
  {
    name: 'dynamic',
    trans: ['adj. 动态的, (有)动力的, (有)力的; 有活力的 n. 动力; 力学']
  },
  { name: 'foreground', trans: ['n. 前景, 最显著的位置'] },
  {
    name: 'preserve',
    trans: [
      'vt.保护； 保持，保存； 腌制食物； 防腐处理 vi.保鲜； 保持原状； 做蜜饯； 禁猎 n.蜜饯； 防护用品； 禁猎地； 独占的事物（或范围）'
    ]
  },
  {
    name: 'vice',
    trans: ['n. 恶习,恶行,罪恶,缺陷,恶癖,老虎钳 vt. 钳住 prep. 代替,副,次']
  },
  { name: 'necessarily', trans: ['adv. 必然地,必定地，必需地'] },
  { name: 'circle', trans: ['n. 圆周,社交圈,循环 vt. &vi. 包围,盘旋,环绕'] },
  { name: 'differ', trans: ['vi. 不一致,不同(意见)'] },
  { name: 'stationary', trans: ['adj. 不动的(稳定的) n. 固定物(驻军)'] },
  {
    name: 'extract',
    trans: ['n. 榨出物,精华,摘录 vt. 拔出,榨出,摘录,提取,选取 [计算机] 提取']
  },
  { name: 'unrecognized', trans: ['adj. 未被承认的, 未被认出的'] },
  { name: 'thereafter', trans: ['adv. 其后, 从那时以后'] },
  {
    name: 'inverse',
    trans: ['adj. 相反的,倒转的 n. 相反的事物,(数学)逆反函数, 倒数, 负数']
  },
  {
    name: 'spell',
    trans: [
      'v. 拼写，缓慢地或吃力地读 n. 魅力，符咒 vt. 用符咒镇住(某人) n. 一段时间，轮班 v. 轮班，休息'
    ]
  },
  { name: 'limiting', trans: ['adj. 限制的 动词 limit 的现在分词'] },
  { name: 'restructure', trans: ['v. 更改结构, 重建构造'] },
  { name: 'delimit', trans: ['vt. 定界限, 划界'] },
  {
    name: 'pay',
    trans: [
      'n. 薪资,付款,报偿 vt. 支付,付清,报偿,给予 vi. 债清，值得，承担后果 adj. 投币的，要钱的'
    ]
  },
  { name: 'separately', trans: ['adv. 分别地；分离地；个别地'] },
  { name: 'classify', trans: ['v. 分类,归类,分等'] },
  { name: 'interfere', trans: ['vi. 妨碍,冲突,干涉'] },
  {
    name: 'mind',
    trans: [
      'n. 思想, 主意, 心意, 记忆, vt. 留心, 注意, 介意, 照顾 vi. 留心, 关心'
    ]
  },
  { name: 'individually', trans: ['adv. 个别地，单独地，独特地'] },
  {
    name: 'vertical',
    trans: ['adj. 垂直的,顶点的,纵向的 n. 垂直物, 垂直的位置']
  },
  {
    name: 'undesirable',
    trans: [
      'adj. 不受欢迎的, 不良的，不合意的，讨厌的 n. 不受欢迎的人，不良分子'
    ]
  },
  {
    name: 'lot',
    trans: [
      'adv. 很,非常 pron. 大量 n. 许多,量,小组,抽签,场地,命运 vt. 分配,划分'
    ]
  },
  { name: 'piece', trans: ['n. 块,片,篇 vt. 修补,结合'] },
  { name: 'unavailable', trans: ['adj. 得不到的, 没空的, 不能利用的'] },
  { name: 'unlike', trans: ['adj. 不同的, 不相似的 prep. 不像, 和...不同'] },
  { name: 'sit', trans: ['vt. 坐,担任,开会,孵 vi. 坐,孵 n. 坐'] },
  { name: 'insufficient', trans: ['adj. 不足的'] },
  {
    name: 'map',
    trans: ['n. 地图 v. 映射,绘制...之地图,计划 [计算机] 存储区分配图']
  },
  {
    name: 'figure',
    trans: ['n. 图形, 数字, 形状; 人物, 外形, 体型 v. 演算, 认为, 领会到']
  },
  {
    name: 'prepare',
    trans: [
      'vt.准备； 预备（饭菜）； 配备； 使（自己）有准备 vt.& vi.筹备，进行各项准备工作； 做好思想准备； 作出，制订； 锻炼（身体等），训'
    ]
  },
  { name: 'consider', trans: ['vt. 考虑, 思考, 认为'] },
  { name: 'detect', trans: ['vt. 发现,探测信息,侦查 vi. 当侦探'] },
  { name: 'convenience', trans: ['n. 适宜，便利, 便利设施，方便的时间，舒适'] },
  { name: 'method', trans: ['n. 方法,办法,条理'] },
  {
    name: 'mean',
    trans: [
      'n.平均值, 平均数; 中部 adj. 低劣的, 卑贱的; 卑鄙的; 吝啬的 adj. 平均的, 中等的 v. 意味, 想要, 意欲'
    ]
  },
  { name: 'salary', trans: ['n. 薪水 vt. 给...薪水'] },
  {
    name: 'pacific',
    trans: ['adj. 太平洋的,(pacific)热爱和平的,求和的, 和解的 n. 太平洋']
  },
  {
    name: 'strong',
    trans: ['adj. 强壮的, 牢固的, 坚定的, 坚强的, 强烈的, 浓的']
  },
  { name: 'emphasize', trans: ['v. 强调,着重 vt. 强调'] },
  { name: 'department', trans: ['n. 部,部门,系'] },
  {
    name: 'forced',
    trans: ['adj. 被迫的, 强迫的, 用力的，不自然的 force 的过去式(分词）']
  },
  {
    name: 'ANSI',
    trans: ['abbr. 美国国家标准学会(=American National Standards Institute)']
  },
  { name: 'permanent', trans: ['adj. 永久的, 持久的 n. (口)烫发'] },
  { name: 'remark', trans: ['n. 备注,评论,注意 vt. 评论,注意,述及'] },
  { name: 'away', trans: ['adv. 远离,离开,出去,连续的,遥远地'] },
  { name: 'concatenate', trans: ['v. 连结,连锁 adj. 连锁的'] },
  { name: 'lightning', trans: ['n. 闪电 adj. 闪电般的, 快速的 vi. 打闪'] },
  { name: 'additionally', trans: ['adv. 另外(加之, 又)'] },
  { name: 'emulate', trans: ['vt. 效法, 尽力赶上, 仿真 [计算机] 仿真'] },
  {
    name: 'tape',
    trans: ['n. 录像带, 录音带, 磁带, 胶带 vt. 用带子捆起, 给...录音 vi. 录音']
  },
  { name: 'concept', trans: ['n. 概念, 观念'] },
  { name: 'optimize', trans: ['v. 使...完美,乐观,使...完善 v.优化'] },
  {
    name: 'counter',
    trans: [
      'n. 计算器,计算者,柜台 [计算机] 计数器 adj. 相反的 adv. 与…相反地 vt. 反对,反击 vi. 反对,反击'
    ]
  },
  {
    name: 'expect',
    trans: [
      'vt.期望； 预料； 要求； 认为（某事）会发生 vi.预期； 期待； 怀胎； 怀孕'
    ]
  },
  { name: 'subsequently', trans: ['adv. 后来, 随后'] },
  { name: 'registration', trans: ['n. 登记,注册,挂号'] },
  { name: 'city', trans: ['n. 城市'] },
  { name: 'designate', trans: ['adj. 指定的 vt. 指定,选派,标明'] },
  { name: 'visible', trans: ['adj. 可见的, 看得见的'] },
  { name: 'consult', trans: ['v. 商讨,向...请教,查阅'] },
  { name: 'completely', trans: ['adv. 完全地, 十分地, 全然'] },
  { name: 'virtually', trans: ['adv. 几乎,实际上'] },
  { name: 'substantially', trans: ['adv. 实质上,本质上,大体上'] },
  {
    name: 'specialize',
    trans: [
      'vi.专门从事； 专攻； 详细说明； 特化 vt.使专门化； 使适应特殊情况； 详细说明； 列举'
    ]
  },
  {
    name: 'fail',
    trans: ['vi. 衰退,失败,不及格 vt. 辜负,缺少,未能做 n. 不及格']
  },
  { name: 'primarily', trans: ['adv. 首先, 主要地'] },
  { name: 'client', trans: ['n.顾客； 当事人； 诉讼委托人； [计算机]客户端'] },
  { name: 'runtime', trans: ['[计] 运行时间'] },
  {
    name: 'fix',
    trans: ['vt. &vi. 使...固定,修理,准备 n. 困境, (船只、飞机等的)定方位,贿赂']
  },
  { name: 'author', trans: ['n. 作者,创造者 vt. 创造,写作'] },
  {
    name: 'programmer',
    trans: ['n.程序员, 程序规划员 ,节目编排者 =programer（英）']
  },
  { name: 'commercial', trans: ['adj. 商业的 n. 商业广告'] },
  { name: 'particularly', trans: ['adv. 特别, 尤其'] },
  {
    name: 'low',
    trans: [
      'n. 低,低点(价),深度,牛叫声 adj. 低的,消沉的,低等的,粗俗的,衰弱的 vi. 牛叫'
    ]
  },
  {
    name: 'sheet',
    trans: [
      'n. 床单,张,片 vt. 盖上被单,遍布, 使成片状 vi. 成片落下或流动 adj. 片状的'
    ]
  },
  { name: 'employee', trans: ['n. 雇员'] },
  { name: 'legal', trans: ['adj. 法律的,合法的,法定的'] },
  { name: 'qualified', trans: ['adj. 有资格的 vbl. 取得资格'] },
  { name: 'context', trans: ['n. 上下文, 环境,背景'] },
  {
    name: 'involved',
    trans: ['v. 涉及(包含,遍及,占用,促成,自乘) adj. 所包含的(形式复杂的)']
  },
  {
    name: 'conditional',
    trans: ['adj. 有条件的, 假定的，假设的 n. [语]条件句']
  },
  { name: 'halfway', trans: ['adj. 中途的, 不彻底的 adv. 半路地, 在中途'] },
  { name: 'oriented', trans: ['adj. 导向的,定向的'] },
  { name: 'pair', trans: ['n. 双,对,副 vt.& vi. 使...成对,配对'] },
  { name: 'week', trans: ['n. 星期, 周'] },
  { name: 'subroutine', trans: ['n. [计算机]子程序'] },
  { name: 'manually', trans: ['adv.用手'] },
  { name: 'preset', trans: ['vt. 预先装置，事先调整'] },
  { name: 'autoindex', trans: ['adj.[计]自动索引,自动变址'] },
  { name: 'restrict', trans: ['v. 限制,约束'] },
  { name: 'performance', trans: ['n.表演； 演技； 表现； 执行'] },
  { name: 'showing', trans: ['n. 显示, 放映 动词 show 的现在分词'] },
  { name: 'ever', trans: ['adv. 曾经, 永远, 究竟'] },
  { name: 'distribution', trans: ['n. 分发, 分配, 散布, 分布'] },
  { name: 'denote', trans: ['vt. 象征,表示'] },
  { name: 'cash', trans: ['n. 现金 vt. 兑现,付现款 adj. 现金的'] },
  { name: 'repeatedly', trans: ['adv. 重复地, 再三地'] },
  {
    name: 'replicate',
    trans: ['vt. &vi. 折叠,复制,模写 n. 同样的样品 adj. 转折的']
  },
  { name: 'mega', trans: ['兆, 百万'] },
  { name: 'conform', trans: ['vt. 使一致,遵守,使顺从 vi. 一致,符合'] },
  { name: 'rebuild', trans: ['v. 重建，改建，使复原'] },
  { name: 'certainty', trans: ['n. 确定, 确实的事情'] },
  { name: 'controller', trans: ['n. 控制器, 管理者, 主计员'] },
  { name: 'pseudo', trans: ['adj. 假的, 冒充的'] },
  { name: 'manage', trans: ['vt. 管理,处理,维持,达成,经营 vi. 管理,达成'] },
  { name: 'administrator', trans: ['n. 管理人,行政官'] },
  { name: 'ensemble', trans: ['n. 全体, 合唱曲, 女人的全套服装'] },
  { name: 'bus', trans: ['n. 公共汽车'] },
  { name: 'allowable', trans: ['adj. 容许的, 承认的'] },
  { name: 'restriction', trans: ['n. 限制,约束 vi. 结果,(作为结果)发生'] },
  { name: 'height', trans: ['n. 高度,高处,身高, 最高峰, 极点'] },
  {
    name: 'remainder',
    trans: ['n. 剩余物, 其他的人, 残余 vt. 廉价出售 adj. 剩余的']
  },
  { name: 'traverse', trans: ['n. 横贯, 横木 v. 横过, 铭刻'] },
  { name: 'organization', trans: ['n. 机构,组织 adj. 有组织的'] },
  { name: 'resulting', trans: ['adj.作为结果的,因而发生的'] },
  { name: 'solution', trans: ['n. 解答, 解决办法, 溶解, 溶液'] },
  { name: 'external', trans: ['n. 外部 adj. 外部的,外用的,客观的,表面的'] },
  { name: 'adequate', trans: ['adj. 足够的, 充足的, 适当的, 能胜任的'] },
  { name: 'vary', trans: ['vt. 改变,使多样化 vi. 变化,违背'] },
  {
    name: 'gap',
    trans: [
      'n. (意见、个性等的)差异,缝隙,漏洞,缺口 vt. 制造缺口 嘉普(财富 500 强公司之一，总部所在地美国,主要经营服装零售)'
    ]
  },
  {
    name: 'indexing',
    trans: ['n. 指数(分度, 索引, 转位, 转换角度, 换档, 改址)']
  },
  {
    name: 'board',
    trans: [
      'n. 木板, 甲板, 董事会 n. 伙食; 舞台, 演员的职业; 船舷 vt. 登(飞机、车、船等); 有偿提供食宿; 用木板覆盖 vi. 搭伙'
    ]
  },
  { name: 'package', trans: ['n. 包裹,整批交易 vt. 把...打包,把...进行推销'] },
  { name: 'insertion', trans: ['n. 插入,刊载,插入物'] },
  { name: 'intervene', trans: ['vi. 插入,介入,干涉,调停 [计算机] 介入'] },
  {
    name: 'conflict',
    trans: ['n.冲突； 战斗； 相互干扰； 矛盾 vi.抵触； 争斗； 战斗； 冲突']
  },
  { name: 'really', trans: ['adv. 真正地,实在，事实上'] },
  {
    name: 'overflow',
    trans: ['n. 溢值,超值,泛滥 v. 泛滥,溢出,充溢 [计算机] 溢出']
  },
  {
    name: 'charge',
    trans: [
      'n. 电荷, 指控, 费用; 照顾, 责任 vt. &vi 控诉, 加罪于, 要价, 赊帐, 充电, 管理'
    ]
  },
  { name: 'phone', trans: ['n. 音位,电话,耳机 vt. &vi. 打电话'] },
  { name: 'virtual', trans: ['adj. 虚拟的；有效的；实质上的，事实上的'] },
  { name: 'compose', trans: ['vt. 组成, 写作, 作曲, 使镇静 vi. 创作'] },
  { name: 'snapshot', trans: ['n. 快照，印象'] },
  { name: 'sensitivity', trans: ['n. 敏感, 多愁善感, 感受性'] },
  {
    name: 'familiar',
    trans: ['adj. 熟悉的,熟知的,不拘礼节的 n. 熟人,熟悉某种事物的人']
  },
  {
    name: 'Mach',
    trans: [
      'n. [物]马赫（速度单位） n. 马赫(奥地利物理学家, 心理学家、哲学家) abbr. 机器（=machine）'
    ]
  },
  { name: 'incorrect', trans: ['adj. 不正确的, 错误的'] },
  {
    name: 'cut',
    trans: [
      'n. 切口,割伤,降低,份额,删节,割下的一块肉 vt. 切割,减少,停止,修剪 vi. 切割,快速移动 [计算机] 剪掉'
    ]
  },
  { name: 'lowest', trans: ['adj.最低的,最底下的,最小的'] },
  {
    name: 'simple',
    trans: ['adj. 简单的,无辜的,天真的,基本的,纯粹的 n. 平民,精神病人,草药']
  },
  { name: 'subsequent', trans: ['adj. 随后的,后来的'] },
  { name: 'compact', trans: ['adj. 紧凑的,紧密的,简洁的 v. 使装满,使简洁'] },
  {
    name: 'plain',
    trans: ['n. 平原,草原 adj. 简单的,平坦的,平常的,家常的 adj.纯的，不掺杂的']
  },
  {
    name: 'noted',
    trans: ['adj. 著名的，有声望的 动词 note 的过去式和过去分词形式']
  },
  {
    name: 'desirable',
    trans: ['adj. 值得有的,令人满意的,有吸引力的 n. 有吸引力的人']
  },
  { name: 'substitution', trans: ['n. 代理,替换,交换'] },
  {
    name: 'consume',
    trans: ['vt. 消耗，毁灭，吃，喝, 挥霍 vi. 耗尽生命, 被烧毁']
  },
  { name: 'forget', trans: ['vt. &vi. 忘记,忽略'] },
  { name: 'keyed', trans: ['v.键入 vbl.键入'] },
  { name: 'tornado', trans: ['n. 飓风,旋风,龙卷风'] },
  { name: 'quotation', trans: ['n. 1．引语,语录 2．报价单 3．行情表'] },
  { name: 'parse', trans: ['v.&amp;n. 从语法上分析'] },
  { name: 'experience', trans: ['n. 经历, 经验 vt. 经历, 体验'] },
  {
    name: 'manufacture',
    trans: ['n. 产品,制造,制造业 vt. 制造,加工 vi. 参与制造']
  },
  { name: 'hundred', trans: ['n. 百,百个东西 adj. 百,百个'] },
  { name: 'thousand', trans: ['adj. 千,成千'] },
  { name: 'twentieth', trans: ['n. 二十分之一 num.&amp;adj. 第二十'] },
  {
    name: 'understanding',
    trans: [
      'n. 了解, 理解, 个人见解, 非正式协议, 谅解, 同情心, 洞察力 adj. 有同情心的'
    ]
  },
  { name: 'hand', trans: ['n. 手,掌握,协助 vt. 帮助,给 adv. 手动地,人工地'] },
  {
    name: 'fancy',
    trans: [
      'n. 想像力, 幻想, 喜好, 爱 adj. 想像的, 时髦的, 华丽装饰的, 奢侈的, 技巧的 vt. 想象, 自认为, 喜好'
    ]
  },
  { name: 'wide', trans: ['adj. 广泛的,宽阔的 adv. 广大地,全部地'] },
  {
    name: 'fine',
    trans: [
      'n. 罚款,罚金,结尾 vt. 罚款 vi. 净化，细化 adj. 美好的, 优质的, 精致的，晴朗的, 健康的，纤细的，恭维的，辞藻华丽的 adv. 恰好地，合适地'
    ]
  },
  {
    name: 'worry',
    trans: [
      'n. 烦恼,忧虑,苦恼 vt. 使...烦恼,使...焦虑, 叼住某物甩或拉 vi. 感到苦恼,感到焦虑'
    ]
  },
  {
    name: 'quiet',
    trans: [
      'n. 安静,闲适,平静 adj. 安静的,静止的,宁静的 adv. 安静地 vt. &vi. 使...平静,使...安心'
    ]
  },
  {
    name: 'purge',
    trans: [
      'n. 整肃,清除,泻药,净化 vt. 净化,清除,摆脱 vi. 清除,通便,腹泻,变得清洁'
    ]
  },
  {
    name: 'mod',
    trans: ['abbr. (=modern) 现代的，时髦的 abbr. (=modulus) 模数，绝对值']
  },
  { name: 'numeral', trans: ['adj. 数字的, 表示数字的 n. 数字, 数'] },
  { name: 'whichever', trans: ['adj. 无论哪个, 无论哪些 pron. 无论哪个'] },
  {
    name: 'purchase',
    trans: [
      'n. 购买, 购买的物品 n. 支点; 紧握, 抓紧 vt. 购买, 赢得; (用设备)举起, 移动'
    ]
  },
  {
    name: 'care',
    trans: [
      'n. 小心,照料,忧虑，慎思，焦虑因素 vi. 关心,照顾,喜爱 vt. 介意,希望 abbr.=Cooperative for American Remittances to Europe 汇款到欧洲合作社'
    ]
  },
  {
    name: 'watch',
    trans: ['n. 手表,注视 vt. 观察,监视,注视,照顾,等待 vi. 留意,观察']
  },
  {
    name: 'endeavor',
    trans: ['n. 努力, 尽力, 进取心 vt. 努力,尽力 vi. 企图, 谋求']
  },
  { name: 'mismatch', trans: ['vt. 配错, 配合不当 n. 配错, 不相匹配'] },
  { name: 'printout', trans: ['n. (电脑)打印输出'] },
  { name: 'ellipsis', trans: ['n. 省略'] },
  {
    name: 'ship',
    trans: [
      'n. 船,舰,船员,飞船 vt. 以船运送,乘船,运送,进水,在船上工作 vi. 上船,坐船,运送,在船上工作'
    ]
  },
  { name: 'British', trans: ['adj. 英国的 n. 英国人, 英国英语'] },
  {
    name: 'parallel',
    trans: [
      'adj. 平行的,相同的,类似的,并联的 adv. 平行地 n. 平行线(面),相似物,对比 vt. 相比,相应,与...平行'
    ]
  },
  { name: 'custom', trans: ['n. 习惯, 风俗, 海关'] },
  { name: 'congratulation', trans: ['n. 祝贺'] },
  { name: 'protection', trans: ['n. 保护,防卫'] },
  {
    name: 'glass',
    trans: [
      'n. 玻璃, 玻璃器皿, 窗户, (复)眼镜,透镜 vt. 用玻璃把…盖（或罩、围）住,给...装上玻璃, 使成玻璃状, 反映, 反射, 审视 vi. 成为玻璃状, 用光学仪器眺望'
    ]
  },
  { name: 'pattern', trans: ['n. 图案, 式样, 典范 v. 以图案装饰; 仿造, 模仿'] },
  { name: 'insure', trans: ['vt. 保险,确保 vi. 买保险'] },
  { name: 'factory', trans: ['n. 工厂, 制造场所'] },
  {
    name: 'implement',
    trans: ['n. 工具, 器具; 当工具的物品 vt. 实施, 执行; 向...提供工具(或手段)']
  },
  { name: 'effort', trans: ['n. 努力, 努力的成果'] },
  { name: 'worker', trans: ['n. 工人，工作者'] },
  { name: 'ampersand', trans: ['n. 和，＆(and 的符号）'] },
  {
    name: 'deal',
    trans: ['n. 交易,协定,份量 v. (dealt,dealt[delt])处理,应付,分配']
  },
  {
    name: 'power',
    trans: [
      'n. 力量, 权力，电力 vt. 供电，激励，全速前进 adj. 与力量有关的，与权力有关的，电力控制的'
    ]
  },
  { name: 'difficulty', trans: ['n. 困难，争议，反对，麻烦'] },
  {
    name: 'lose',
    trans: ['vt. 遗失,损失,失败,摆脱 vi. 丢失,失败 [计算机] 失去']
  },
  {
    name: 'magic',
    trans: ['adj. 有魔力的, 神奇的 n. 魔法, 魔术 vt. 使用魔(变出等)']
  },
  { name: 'proprietary', trans: ['adj. 专利的, 所有权的 n. 所有权, 所有人'] },
  { name: 'aware', trans: ['adj. 知道的, 意识到的'] },
  { name: 'numerous', trans: ['adj. 为数众多的,许多'] },
  { name: 'vowel', trans: ['n. 母音, 元音'] },
  { name: 'closely', trans: ['adv. 紧密地，接近地，严密地'] },
  { name: 'accuracy', trans: ['n. 准确(性), 精确度'] },
  { name: 'traditional', trans: ['adj. 传统的'] },
  { name: 'synchronization', trans: ['n.同步化'] },
  { name: 'fragment', trans: ['n. 碎片 vt. &vi. 变成碎片 [计算机] 碎片'] },
  { name: 'primary', trans: ['n. 最主要者 adj. 主要的, 初期的, 根本的'] },
  { name: 'safely', trans: ['adv. 安全地'] },
  { name: 'habit', trans: ['n. 习惯，习性；嗜好 vt. 使穿衣'] },
  { name: 'comprise', trans: ['vt. 包含,构成'] },
  { name: 'landler', trans: ['n.兰德勒舞(奥地利农村的民间舞),兰德勒舞曲'] },
  { name: 'absence', trans: ['n. 没有；缺乏；缺席；不注意'] },
  {
    name: 'revolutionize',
    trans: ['vt. 使革命化，使彻底变革 vi. 变革 =revolutionise（英）']
  },
  { name: 'constantly', trans: ['adv. 不断地,经常地'] },
  { name: 'seldom', trans: ['adv. 很少 adj. 很少的'] },
  { name: 'unfortunately', trans: ['adv. 不幸地'] },
  { name: 'expunge', trans: ['v. 擦掉, 删掉, 除去'] },
  {
    name: 'security',
    trans: [
      'n.安全； 保证，担保； 保护，防护； 有价证券 adj.安全的，保安的，保密的'
    ]
  },
  {
    name: 'touch',
    trans: [
      'n. 触觉,接触,少许, 痕迹, 修饰 vt. 触摸,吃,喝,触及,感动 vi. 接触, 联系'
    ]
  },
  {
    name: 'contrast',
    trans: ['n.对比，对照； 差异； 对照物，对立面； [摄]反差']
  },
  { name: 'invent', trans: ['v. 发明 vt. 发明,创造'] },
  { name: 'reflect', trans: ['v. 反映, 反射, 归咎'] },
  {
    name: 'undone',
    trans: ['adj. 未完成的，未做完的 动词 undo 的过去分词形式']
  },
  { name: 'unshift', trans: ['vi. 松开打字机或键盘的字型变换键'] },
  { name: 'complex', trans: ['adj. 复杂的 n. 复合体'] },
  { name: 'complexity', trans: ['n. 复杂，复杂性, 复杂的事物'] },
  { name: 'creation', trans: ['n. 创造, 创作'] },
  { name: 'unknown', trans: ['adj. 未知的，不出名的'] },
  { name: 'greatly', trans: ['adv. 很, 非常'] },
  {
    name: 'cost',
    trans: [
      'n.价钱，代价； 花费，费用； 牺牲； [用复数][法律]诉讼费 vi.价钱为，花费； 估计成本 vt.付出代价； 估价； 使丧失； 使付出努力'
    ]
  },
  {
    name: 'degrade',
    trans: ['vt. 贬低；使……丢脸；使……降级；使……降解 vi. 降级，降低；退化']
  },
  { name: 'suggestion', trans: ['n. 建议, 意见, 迹象, 暗示, 联想'] },
  {
    name: 'real',
    trans: ['adj. 实际的,现实的,真的,真实的 adv. 非常 n. 真实的事, 真实']
  },
  { name: 'experimentation', trans: ['n. 实验, 试验'] },
  { name: 'experiment', trans: ['n. 实验,试验,尝试 vi. 做实验,尝试'] },
  {
    name: 'substantial',
    trans: ['n. 重要部份, 本质 adj. 大量的, 实质上的, 有内容的']
  },
  { name: 'solely', trans: ['adv. 独自地,单独地'] },
  {
    name: 'announce',
    trans: ['vi.宣布参加竞选； 当播音员 vt.宣布； 述说； 声称； 预告']
  },
  {
    name: 'squeeze',
    trans: [
      'n. 压榨,榨出的少量,佣金,经济拮据 vt. 紧握,挤压,使经济困难 vi. 让步,压迫,险胜'
    ]
  },
  { name: 'distribute', trans: ['vt. &vi. 分配,散布'] },
  { name: 'negate', trans: ['v. 否定, 否认, 打消'] },
  { name: 'capture', trans: ['n. 抓取,战利品,捕获之物 vt. 抓取,获得,迷住'] },
  {
    name: 'father',
    trans: ['n. 父亲,鼻祖 vt. 作为父亲生育子女 vi. 像父亲般照顾']
  },
  { name: 'reinstate', trans: ['v. 恢复(原职) vt. 使恢复原有的职位'] },
  { name: 'tutorial', trans: ['n. 个别指导 adj. 个别指导的'] },
  { name: 'nicety', trans: ['n. 精确，谨慎，精细，细微的区别'] },
  {
    name: 'roll',
    trans: [
      'vt.辗； 使（眼球等）左右转动； （使）原地转圈； 滚动 vi.左右摇晃； 翻滚； 开始移动，启动 n.名册； 滚翻'
    ]
  },
  {
    name: 'exponent',
    trans: ['n. 拥护者，说明者，楷模 n. 指数 n. 能手，大师 adj. 说明的']
  },
  { name: 'exponential', trans: ['adj. 指数的 n. 指数'] },
  {
    name: 'prefer',
    trans: [
      'vt.更喜欢； 提升，提拔； 给予（债权人）优先权； 提出（控告） vi.更喜欢，宁愿'
    ]
  },
  { name: 'complicated', trans: ['adj. 复杂的, 难懂的'] },
  { name: 'reactivate', trans: ['v. 使重新活跃，恢复活动'] },
  { name: 'spread', trans: ['n. 传布, 伸展 adj. 扩延的 v. 传布, 推广, 伸出'] },
  { name: 'synchronize', trans: ['v. 使同时, 同时发生'] },
  { name: 'formation', trans: ['n. 构造,编队,形成'] },
  { name: 'widely', trans: ['adv. 广泛地'] },
  { name: 'comma', trans: ['n. 逗号，停顿，间歇 n. 银纹多角蛱蝶'] },
  {
    name: 'very',
    trans: ['adj. 真正的,完全的,自己的,仅仅的,同一个,特别的 adv. 真的,非常']
  },
  { name: 'unnecessary', trans: ['adj. 不必要的,多余的 n. 不必要的东西'] },
  { name: 'unchanged', trans: ['adj. 无变化的'] },
  {
    name: 'cross',
    trans: [
      'n. 十字架,十字架形物件,交叉,交叉路 adj. 生气的,交叉的 vt. 划叉剔除，画横线于 vi. 穿越 prep. 穿过'
    ]
  },
  { name: 'yet', trans: ['adv. 还,仍然，即刻 conj. 尽管，然而'] },
  { name: 'slowly', trans: ['adj. 慢慢地 adv. 缓慢地'] },
  { name: 'inexperienced', trans: ['adj. 无经验的, 不熟练的'] },
  { name: 'unwanted', trans: ['adj. 不必要的, 空闲的'] },
  { name: 'unused', trans: ['adj. 未用过的，不习惯的'] },
  { name: 'unmarked', trans: ['adj. 无记号的, 未被注意的'] },
  {
    name: 'nothing',
    trans: ['adv. 毫不 n. 微不足道的人或事 pron. 什么也没有']
  },
  { name: 'chart', trans: ['n. 图表 vt. 制成图表'] },
  { name: 'dearly', trans: ['adv. 深深地, 真挚地，昂贵地'] },
  { name: 'extremely', trans: ['adv. 极其, 非常'] },
  { name: 'hardly', trans: ['adv. 几乎不'] },
  { name: 'placement', trans: ['n. 方位,位置,找工作,安排'] },
  {
    name: 'think',
    trans: [
      'vt.想； 思索； 以为； 看待 vi.思辩； 考虑； 构想； 回忆 adj.深思的； 供思考的 n.想； 想法'
    ]
  },
  { name: 'technical', trans: ['adj. 工艺的, 技术的'] },
  { name: 'idea', trans: ['n. 主意, 想法, 观念'] },
  { name: 'stamp', trans: ['n. 印,邮票,打印器 vt. 捺印,顿足,贴上邮票'] },
  { name: 'equation', trans: ['n. 相等,方程(式),等式,均衡'] },
  {
    name: 'smooth',
    trans: [
      'adj. 平稳的,流畅的,安祥的,圆滑的,搅拌均匀的 vt. 使光滑,磨光,安慰,理顺(羽毛) vi. 变光滑'
    ]
  },
  { name: 'attached', trans: ['adj. 附加的, 固定的'] },
  {
    name: 'average',
    trans: [
      'n. 平均数,平均水平 adj. 一般的,通常的,平均的 vt. &vi. 取平均值，达到平均水平'
    ]
  },
  { name: 'quietly', trans: ['adj. 寂静地, 静止地 adv. 安静地, 平静地'] },
  { name: 'discard', trans: ['n. 丢牌,废牌 vt. 丢弃,抛弃 vi. 丢牌'] },
  { name: 'never', trans: ['adv. 从不,绝不'] },
  {
    name: 'initiate',
    trans: ['n. 创始人 adj. 新加入的 vt. 开始,创始,启蒙,介绍加入']
  },
  { name: 'powerful', trans: ['adj. 强有力的'] },
  {
    name: 'purpose',
    trans: ['n. 目的, 意图; 意志, 决心; 议题 vt. 打算, 决意']
  },
  {
    name: 'regard',
    trans: [
      'vt.认为； 注视； 涉及； 尊敬 vi.凝视； 留意 n.凝视； 留意； 尊敬； 问候'
    ]
  },
  {
    name: 'daily',
    trans: [
      'adj. 每日的, 按天计算的, 日常的 adv. 每日,天天 n. 日报, (复)工作样片'
    ]
  },
  { name: 'possibly', trans: ['adv. 可能地, 也许'] },
  { name: 'potentially', trans: ['adv. 潜在地'] },
  { name: 'moreover', trans: ['adv.再者； 此外； 而且； 同时'] },
  { name: 'American', trans: ['adj. 美国的, 美式的 n. 美国人, 美式英语'] },
  {
    name: 'guard',
    trans: ['n. 守卫者,警戒, 护卫队, 保护 vt. &vi. 保卫,看守,警惕']
  },
  { name: 'world', trans: ['n. 世界(人),领域,俗世'] },
  {
    name: 'independent',
    trans: ['adj. 独立的, 自主的，私立的，无偏见的 n. 独立派人士, 无党派者']
  },
  { name: 'independently', trans: ['adv.独立地,自立地'] },
  { name: 'continuously', trans: ['adv.不断地,连续地'] },
  { name: 'shield', trans: ['n. 盾,防卫物,盾状物 vt. 保护,遮蔽'] },
  {
    name: 'glance',
    trans: [
      'vi.一瞥； 闪微光； 掠过，擦过； 随便提到，简略地触及 n.浏览； 闪光； 歪斜，一掠'
    ]
  },
  { name: 'happening', trans: ['n. 偶然发生的事 动词 happen 的现在分词形式'] },
  { name: 'transaction', trans: ['n. 交易,处理,办理'] },
  { name: 'emulation', trans: ['n. 效法, 竞争，模仿'] },
  { name: 'strike', trans: ['n. 罢工, 打击, 殴打 v. 打, 撞, 罢工, 划燃'] },
  {
    name: 'dump',
    trans: ['n. 垃圾场,堆放处 vt. 丢弃,抛售,导出 vi. 骤降,扔垃圾']
  },
  { name: 'occasionally', trans: ['adv. 偶尔地'] },
  { name: 'tension', trans: ['n. 紧张,张力,拉力 vt. （使金属线、帆等）拉紧'] },
  { name: 'probable', trans: ['adj. 很可能的 n. 很可能的事'] },
  { name: 'talent', trans: ['n. 才能, 人才, 天资'] },
  { name: 'financial', trans: ['adj. 金融的,财政的'] },
  { name: 'meter', trans: ['n. 公尺,韵律,计量器 vt. 用表测量[计量, 记录]'] },
  {
    name: 'logged',
    trans: [
      'adj. 记录的, 进水的, 锯成圆木的，沉重的 动词 log 的过去式及过去分词形式'
    ]
  },
  {
    name: 'ware',
    trans: ['n. 制品,器具,货物 vt. 留心,意识到 adj. 知道的,意识到的']
  },
  { name: 'disregard', trans: ['n. 不理会, 漠视 vt. 忽视, 不顾'] },
  { name: 'waiting', trans: ['n. 等候 adj. 候补 动词 wait 的现在分词'] },
  { name: 'preceding', trans: ['adj. 在前的,在先的'] },
  { name: 'comparison', trans: ['n. 比较'] },
  { name: 'advanced', trans: ['adj. 高级的, 先进的'] },
  {
    name: 'rate',
    trans: [
      'n. 比率, 等级, 价格 vt. 估价, 认为, 定等级; 责骂 vi. 受欢迎, 受推崇; 责骂'
    ]
  },
  {
    name: 'fly',
    trans: ['n. 苍蝇,两翼昆虫,飞行,升高 vt. &vi. 飞,飞翔,逃走,飞逝,猛然移动']
  },
  { name: 'programmable', trans: ['adj. 可编程的'] },
  { name: 'definable', trans: ['adj. 可定义的, 可确定的'] },
  {
    name: 'readable',
    trans: ['adj. 字迹易辨认的 adj. 可读的, 易读的, 读起来津津有味的']
  },
  { name: 'recoverable', trans: ['adj. 可恢复的，可收回的'] },
  { name: 'possibility', trans: ['n. 可能性,可能的事情,潜在的价值'] },
  { name: 'finisher', trans: ['n. 运动中最后一击者，修整机(精整工)'] },
  { name: 'applicable', trans: ['adj. 合适的,适用的'] },
  { name: 'printable', trans: ['可印刷的'] },
  { name: 'executable', trans: ['adj.实行的,执行的'] },
  { name: 'essentially', trans: ['adv. 本质上,本来'] },
  { name: 'confuse', trans: ['vt. 混乱,狼狈,困惑'] },
  { name: 'familiarize', trans: ['vt. 使熟悉'] },
  { name: 'employe', trans: ['(=employee) n.雇工,从业员'] },
  { name: 'suitable', trans: ['adj. 合适的, 适宜的'] },
  { name: 'generation', trans: ['n. 代, 一代'] },
  { name: 'quality', trans: ['n. 品质, 特质, 才能 adj. 高品质的'] },
  {
    name: 'defective',
    trans: ['adj. 有缺陷的,欠缺,不完全变化动词 n. 有缺陷的人,不完全变化动词']
  },
  { name: 'interpretable', trans: ['adj.能说明的,能翻译的,可判断的'] },
  { name: 'interest', trans: ['n. 兴趣, 嗜好, 利息; 股份 vt. 使...感兴趣'] },
  { name: 'fourscore', trans: ['adj. 八十的 n. 八十'] },
  { name: 'teach', trans: ['vt. 教,教书,教导，教训 vi. 给予指导'] },
  { name: 'procedural', trans: ['adj. 程序的 n.警察疑案作品'] },
  {
    name: 'phrase',
    trans: ['n. 短语,习语,个人风格,乐句 vt. 措词表达,将(乐曲)分成乐句(来演奏)']
  },
  { name: 'specifically', trans: ['adv. 特定地,明确地'] },
  { name: 'penalty', trans: ['n. 处罚,惩罚'] },
  { name: 'violate', trans: ['vt. 违犯, 亵渎, 干扰, 侵犯, 强奸'] },
  { name: 'indefinitely', trans: ['adv. 无限地(在长时期内,无穷地)'] },
  {
    name: 'major',
    trans: [
      'n. 主修, 成年人, 陆军少校; 巨头 adj. 主要的, 较多的, 大部份的 vi. 主修'
    ]
  },
  { name: 'higher', trans: ['adj. 更高的'] },
  {
    name: 'wise',
    trans: ['adj. 明智的,有学问的,有智慧的,聪明的 n. 方式 vt. 引导 vi. 学']
  },
  {
    name: 'becoming',
    trans: ['adj. 合适的，适当的，好看的 动词 become 的现在分词形式']
  },
  { name: 'equally', trans: ['adv. 相等地, 同样地, 平等地'] },
  { name: 'enjoy', trans: ['vt. &vi. 享受,喜欢'] },
  {
    name: 'forth',
    trans: [
      'adv.向前，向前方； 露着的，往外的； [废语]出外，离家 prep.出自，从…离开'
    ]
  },
  { name: 'disappear', trans: ['vi. 消失,灭绝 vt. 引起消失'] },
  {
    name: 'crop',
    trans: [
      'n. 庄稼,收成, 一群,平头 vt. 割掉, 修剪, 剪短, 收割, 使谷物生长 vi. 啃青草, 种植谷物'
    ]
  },
  { name: 'diagonally', trans: ['adv. 斜对地, 对角地'] },
  { name: 'decision', trans: ['n. 决定,决心'] },
  { name: 'effective', trans: ['adj. 有效的,有影响的'] },
  {
    name: 'significant',
    trans: [
      'adj. 有意义的, 意味深长的; 相当数量的; 重要的, 重大的 n. (复)有意义的事物; 标志'
    ]
  },
  { name: 'avail', trans: ['vi. 有利 vt. 有用 n. 益处'] },
  {
    name: 'hang',
    trans: [
      'vt.悬挂； （被）绞死； 贴，装饰； 使悬而未决 vi.悬垂； 被吊死； 附属，依靠； 悬而未决 n.悬挂的样子； （动作的）暂停； 〈口〉大意，要点； 〈口〉做法，诀窍'
    ]
  },
  {
    name: 'craze',
    trans: ['n. 狂热, 大流行，(陶瓷器等表面的)裂纹 v. (使)发狂, (使)产生裂纹']
  },
  { name: 'consequently', trans: ['adv. 所以, 因此'] },
  { name: 'introduce', trans: ['vt. 介绍, 引进, 采用, 提出, 提倡, 放入'] },
  { name: 'team', trans: ['n. 队,组 vt. 协同工作 vi. 结成一队 adj. 团队的'] },
  { name: 'visual', trans: ['adj. 视觉的 n. 画面, 图象'] },
  { name: 'acknowledgment', trans: ['n. 承认, 承认书, 感谢 =acknowledgement'] },
  { name: 'efficiently', trans: ['adv.有效率地,有效地'] },
  { name: 'predict', trans: ['v. 预知, 预言, 预报'] },
  { name: 'anticipate', trans: ['vt. 预期，期望；占先，抢先；提前使用'] },
  { name: 'bypass', trans: ['vt. 绕开, 忽视 n. 支路，旁道'] },
  {
    name: 'nature',
    trans: ['n.自然,自然界,自然状态; 本性,天性,性质; 质; 性格; 性; 本质']
  },
  {
    name: 'natural',
    trans: [
      'adj.自然的； 物质的； 天生的； 不做作的 n.自然的事情； （生来的）白痴； [乐]（风琴等的）白键'
    ]
  },
  {
    name: 'grant',
    trans: [
      'vt.承认； 同意； 准许； 授予 n.拨款； 补助金； 授给物（如财产、授地、专有权、补助、拨款等） vi.同意'
    ]
  },
  { name: 'logarithm', trans: ['n. [数]对数'] },
  { name: 'reload', trans: ['v. 再装入'] },
  { name: 'occupy', trans: ['vt. 占领,占,住进'] },
  { name: 'photograph', trans: ['n. 相片 vi. 照相,摄影 vt. 给...照相'] },
  {
    name: 'resolve',
    trans: ['n. 决定之事,决心,坚决 vt. 决定,解决,分离,表决 vi. 分离,决定']
  },
  { name: 'unsafe', trans: ['adj. 不安全的, 不安稳的, 危险的'] },
  { name: 'separator', trans: ['n. 分隔符，分离器'] },
  { name: 'hierarchical', trans: ['adj. 按等级划分的'] },
  { name: 'assortment', trans: ['n. 分类, 配合, 各色俱备之物'] },
  { name: 'growing', trans: ['adj. 发展的, 扩大的'] },
  { name: 'discussion', trans: ['n. 讨论 v. 讨论,商议'] },
  { name: 'alphabet', trans: ['n. 字母表,基本原理(元素)，符号系统'] },
  { name: 'scattered', trans: ['adj. 分散的，稀疏的'] },
  { name: 'eventually', trans: ['adv. 终于, 最后'] },
  { name: 'finally', trans: ['adv. 最后, 最终'] },
  { name: 'subgroup', trans: ['n. 隶属组织'] },
  { name: 'superimpose', trans: ['vt. 重叠(安装,添加)'] },
  { name: 'reorganization', trans: ['n. 改组, 再编制, 改造'] },
  { name: 'rewrite', trans: ['n. 重写, 改写 vt. 改写, 重写 vi. 修改'] },
  { name: 'university', trans: ['n. 大学'] },
  { name: 'deter', trans: ['v. 制止,使...断念'] },
  {
    name: 'pool',
    trans: ['n. 水塘(池),游泳池,撞球 vi. 形成池塘 vt. 集中,积累']
  },
  { name: 'moment', trans: ['n. 片刻，瞬间，准确时刻，非常重要的时机，力矩'] },
  {
    name: 'shut',
    trans: [
      'adj. 关闭的,合拢的,围绕的 vt. 关上，防止进入，禁闭，合上，停止或中止 vi. 关闭，停止或中止 n. 关闭'
    ]
  },
  {
    name: 'closed',
    trans: ['adj. 关闭的, 封闭的, 停业的 动词 close 的过去式和过去分词']
  },
  { name: 'respond', trans: ['vi. &vt. 回复,反应，响应，应答 n. 拱柱'] },
  {
    name: 'repeating',
    trans: ['adj. 重复的, 反复的 动词 repeat 的现在分词形式']
  },
  { name: 'repetitive', trans: ['adj. 重复的'] },
  { name: 'reenter', trans: ['v. 重新进入'] },
  { name: 'rearrange', trans: ['重新整理, 重新排序'] },
  { name: 'rectangular', trans: ['adj. 矩形的；成直角的'] },
  {
    name: 'tag',
    trans: [
      'n. 标签,附属物,名称,谚语 vt. 附以签条,尾随,添饰,指责,连接 vi. 紧随,尾随'
    ]
  },
  {
    name: 'suppose',
    trans: ['vt.假定； 猜想，推测； 认为； 让（用于祈祷语气） vi.想象，猜想']
  },
  { name: 'supposed', trans: ['adj. 想象上的，假定的'] },
  { name: 'operator', trans: ['n. 操作员,管理者,技工,报务员'] },
  { name: 'masking', trans: ['n. 遮蔽 动词 mask 的现在分词形式'] },
  { name: 'price', trans: ['n. 价格,代价,价值 vt. 定格,标价,比较价格'] },
  { name: 'demonstrate', trans: ['vt. 示范, 演示, 证明 vi. 示威'] },
  { name: 'importance', trans: ['n. 重要,重要性'] },
  {
    name: 'pipe',
    trans: [
      'n. 管,烟斗,笛 vt. 以管输送,装管道,吹奏,尖声说,拷边 vi. 吹奏管乐,尖叫'
    ]
  },
  {
    name: 'overall',
    trans: [
      'adj. 全部的, 全体的, 一切在内的 adv. 总的来说, 全部地 n. 防护服，罩衫'
    ]
  },
  { name: 'turnkey', trans: ['n. 监狱的看守, 狱吏 adj. 即可使用的'] },
  { name: 'restricted', trans: ['vt. 限制,约束 adj. 受限制的,有限的,保密的'] },
  { name: 'suspension', trans: ['n. 悬挂,悬浮液,暂缓,未决,中止'] },
  { name: 'seamless', trans: ['无缝的'] },
  {
    name: 'clipper',
    trans: ['n. 剪削者，大剪刀，理发剪 n. （十九世纪的）快速帆船 n. 快马']
  },
  { name: 'unsigned', trans: ['adj. 未签署的，无符号的'] },
  { name: 'unformatted', trans: ['adj. 无格式的'] },
  { name: 'infinite', trans: ['adj. 无限的,无穷的 n. 无限'] },
  { name: 'useless', trans: ['adj. 无用的，无效的'] },
  { name: 'mountain', trans: ['n. 山,山脉,大量'] },
  { name: 'redundant', trans: ['adj. 多余的,失业的'] },
  { name: 'dependent', trans: ['adj. 附属的,依赖的,悬垂的 n. 受经济援助者'] },
  { name: 'background', trans: ['n. 背景,幕后,配音 vt. 提供背景'] },
  { name: 'product', trans: ['n. 产品,成果,乘积'] },
  {
    name: 'assignment',
    trans: ['n. 分配,功课,任务,被指定的(课外)作业;(分派的)任务, 委派']
  },
  { name: 'bad', trans: ['adj. 坏的,令人不满意的,有害的,有病的 n. 坏人,坏事'] },
  { name: 'declare', trans: ['vt. &vi. 宣布,声明,申报'] },
  { name: 'adjust', trans: ['vt. 调整, 使...适于 vi. 适应'] },
  { name: 'recognize', trans: ['vt. 认出,认可,承认,意识到,表示感激'] },
  { name: 'route', trans: ['n. 航线,路线,途径 vt. 按路线发送, 改变路线'] },
  { name: 'respectively', trans: ['adv. 各自地, 分别地'] },
  { name: 'unsuccessful', trans: ['adj. 不成功的, 失败的'] },
  { name: 'received', trans: ['adj. 被一般承认的,公认的'] },
  { name: 'navigate', trans: ['vi. 航行,驾驶,操纵 vt. 航行,驾驶'] },
  { name: 'considered', trans: ['adj.考虑过的,被尊重的'] },
  {
    name: 'due',
    trans: [
      'adj.由于； 适当的； 预定； 到期 n.应有的权利； 应得到的东西； 应缴款 adv.正向； 正对着'
    ]
  },
  { name: 'recently', trans: ['adv. 最近'] },
  { name: 'room', trans: ['房间, 空间'] },
  { name: 'descend', trans: ['vt. &vi. 降,传,降临'] },
  { name: 'contiguous', trans: ['adj. 邻近的,接触的,连续的'] },
  { name: 'consistent', trans: ['adj. 始终如一的, 一致的, 坚持的'] },
  { name: 'multiprocessing', trans: ['n. 多重处理, 多处理技术'] },
  {
    name: 'architecture',
    trans: ['n. 建筑学, 建筑业, 建筑物, 结构 [总称]建筑物, 建筑风格']
  },
  { name: 'structural', trans: ['adj. 结构的, 构造的，建筑的，建筑用的'] },
  { name: 'outcome', trans: ['n. 结果'] },
  { name: 'association', trans: ['n. 联合,结合,交往,协会,社团,联想'] },
  { name: 'opinion', trans: ['n. 看法,意见 v. 判断,意见,主张'] },
  { name: 'interpret', trans: ['v. 解释, 演出, 翻译 [计算机] 解释'] },
  { name: 'explanatory', trans: ['adj. 说明的, 解释的'] },
  { name: 'assemble', trans: ['vt. 聚集,集合,装配 vi. 集合, 聚集'] },
  { name: 'assembler', trans: ['n. 装配工 n. [计]汇编程序'] },
  {
    name: 'cad',
    trans: [
      'n. 卑鄙的男人，下流人 abbr. (=computer-aided design)计算机辅助设计'
    ]
  },
  { name: 'arithmetic', trans: ['n. 算术'] },
  {
    name: 'representative',
    trans: ['adj. 代表性的, 代议制的, 典型的 n. 代表, 众议员, 典型']
  },
  { name: 'typical', trans: ['adj. 典型的, 有代表性的'] },
  { name: 'sufficient', trans: ['adj. 足够的, 充分的'] },
  {
    name: 'blast',
    trans: [
      'n. 爆破,冲击波,气流,一阵,汽笛声 vi. 爆破,突然发出声音 vt. 喷射,炸掉'
    ]
  },
  {
    name: 'clean',
    trans: [
      'adj. 干净的, 正当的, 纯洁的, 完全的, 精准的, 空的 adv. 完全地 n. 清洁 vt. &vi. 打扫,清扫'
    ]
  },
  { name: 'caret', trans: ['n. 脱字符号, ( 符号：^ 文章中插字使用)'] },
  { name: 'socket', trans: ['n. 插座,插口, 穴孔 vt. 装上或插入插座'] },
  {
    name: 'stated',
    trans: ['adj. 决定了的, 一定的, 定期的 v. 陈述, 说明 vbl. 陈述, 说明']
  },
  { name: 'protocol', trans: ['n. 草案, 协议,礼仪 vt 拟定议定书'] },
  { name: 'presence', trans: ['n. 出席,在场者,举止'] },
  {
    name: 'telephone',
    trans: [
      'n.电话； 电话机； （电话机的）话筒； 受话器 vt.& vi.以电话传送（消息），给（某人）打电话； 用电话与（某人）交谈'
    ]
  },
  { name: 'social', trans: ['adj. 社会的,群居的,社团的'] },
  { name: 'equipment', trans: ['n. 设备,装备'] },
  { name: 'lending', trans: ['n. 借贷, 借贷物 动词 lend 的现在分词形式'] },
  { name: 'book', trans: ['n. 书,本子 vt. 登记,预订 vi. 通过...预订'] },
  { name: 'situation', trans: ['n. 位置, 形势, 局面, 处境, 状况, 职位'] },
  { name: 'desk', trans: ['n. 书桌'] },
  { name: 'please', trans: ['int. 请 vt. 取悦,请,合心意 vi. 取悦,愿意'] },
  { name: 'mixture', trans: ['n. 混合, 混合物'] },
  { name: 'representation', trans: ['n. 表示法,表现,陈述，答辩'] },
  { name: 'esoteric', trans: ['adj. 秘传的，神秘的，难懂的'] },
  { name: 'depth', trans: ['n. 深度,强度,诚挚'] },
  { name: 'final', trans: ['adj. 最后的 决定了的 n. 决赛,期末考试'] },
  { name: 'physically', trans: ['adv. 身体上地'] },
  {
    name: 'aid',
    trans: [
      'n. 帮助,救护,辅助物 vt. &vi. 援助,帮助,救护 abbr.=Agency for International Development 国际开发署[美]'
    ]
  },
  { name: 'successive', trans: ['adj. 接连的, 连续的, 接二连三的'] },
  { name: 'succession', trans: ['n. 连续, 继承权, 继位'] },
  { name: 'unpack', trans: ['vt. 打开取出, 卸下'] },
  {
    name: 'chunk',
    trans: [
      'n. 厚块（片）, 相当大的量，矮胖的人或物 vt. （高尔夫球）没击中 vi. 发出猛冲的声音'
    ]
  },
  { name: 'alignment', trans: ['n. 队列，成直线；校准；结盟'] },
  { name: 'typewriter', trans: ['n. n. 打字机'] },
  {
    name: 'big',
    trans: ['adj. 大的,重要的 adv. 以郑重的方式,大数量 n. 杰出的组织和个人']
  },
  {
    name: 'tone',
    trans: [
      'n. 音调,语气,品质,调子,色调 vt. 使更健壮,装腔作势地说, 定调, 调色 vi. 调和(颜色), 呈现悦目色调'
    ]
  },
  {
    name: 'sensitive',
    trans: ['adj. 敏感的,灵敏的,易受伤害的,感光的,善解人意的 n. 敏感的人']
  },
  { name: 'reduction', trans: ['n. 减少,缩小, (化学)还原反应, (数学)约分'] },
  { name: 'indentation', trans: ['n. 刻痕，印压, 缩进, （海岸线等）凹进处'] },
  { name: 'terminology', trans: ['n. 术语,术语学'] },
  { name: 'ascending', trans: ['adj. 上升的'] },
  { name: 'augment', trans: ['vt. 增加,补充 vi.扩大 n. 增加,补充物'] },
  { name: 'increment', trans: ['n. 增加(增加物, 增量, 余差)'] },
  {
    name: 'gain',
    trans: [
      'n. 增益, 获得, 利润 vt. 得到, 增进, 获利 vi. 增加, 得到, (钟, 表等)走得快'
    ]
  },
  {
    name: 'stream',
    trans: ['n. (人,车,气)流,水流,组 vt. 流出,飘动 vi. 流动,飘动,接踵而来']
  },
  { name: 'obsolete', trans: ['adj. 已废弃的, 过时的'] },
  {
    name: 'accommodate',
    trans: ['vi. 使自己适应 vt. 使一致，和解；提供方便；容纳；顾及']
  },
  { name: 'motif', trans: ['n. 主题, 意念, 动机'] },
  {
    name: 'subject',
    trans: [
      'n. 科目, 主题; 缘由 n. (君主国)国民; 实验对象 adj. 服从的, 易患的 vt. 使隶属, 使服从; 使遭遇'
    ]
  },
  {
    name: 'job',
    trans: [
      'n. 工作,职责,任务 vt. 投机买卖,营私舞弊,不公正地判罚,分包任务 vi. 工作,假公济私,做分销商或批发商 adj. 与工作有关的'
    ]
  },
  {
    name: 'differentiate',
    trans: ['vt. 识别, 使差异, 求导数, 区分, 区别对待 vi. 区别,变异']
  },
  { name: 'distinction', trans: ['n. 区别; 卓越; 殊荣'] },
  { name: 'distinguish', trans: ['vt. 区别,辨认,特别关注 vi. 区别'] },
  { name: 'locking', trans: ['n. 锁定 动词 lock 的现在分词形式'] },
  { name: 'progress', trans: ['n. 进步, 发展, 前进 vi. 促进，进步, 进行'] },
  {
    name: 'fundamental',
    trans: ['adj. 基本的,根本的,重要的 n. 基本原理,基础']
  },
  { name: 'basis', trans: ['n. 基础,根据,主要成分'] },
  { name: 'underlying', trans: ['adj. 在下面的, 基本的, 隐含的'] },
  {
    name: 'sound',
    trans: [
      'vt. 听（诊）；测量，测…深；使发声；试探；宣告 n. 声音，语音；噪音；海峡；吵闹；听力范围；[医] 探条 adj. 健全的，健康的；合理的；可靠的；有效彻底的 adv. 彻底地，充分地 vi. 听起来；发出声音；回响；测深'
    ]
  },
  {
    name: 'vital',
    trans: ['adj. 至关重要的, 生死攸关的, 有活力的, 充满生机的']
  },
  { name: 'national', trans: ['adj. 国家的,民族的 n. 国民'] },
  { name: 'sale', trans: ['n. 销售(量),削价出售'] },
  { name: 'agree', trans: ['vt. 同意,赞成,承认 vi. 同意,一致,符合'] },
  { name: 'iterative', trans: ['adj. 迭代的, 重复的'] },
  {
    name: 'inclusive',
    trans: ['adj. 包含...在内的, 包罗广泛的, 包括端点的 [计算机] 包括的']
  },
  {
    name: 'charm',
    trans: ['n. 魔力, 魅力, 护身符, 小饰物 vt. 吸引, 使...迷醉, 对...施以魔法']
  },
  {
    name: 'hit',
    trans: [
      'n. 打(击),冲撞,讽刺,成功.一次毒品的剂量,点击量 vt. 打(击),碰撞,偶然发现,要求,符合 vi. 打(击),袭击,达到'
    ]
  },
  { name: 'course', trans: ['n. 课程, 讲座, 过程, 路线, 一道(菜)'] },
  { name: 'numerical', trans: ['adj. 数字的, 用数字表示的'] },
  { name: 'digital', trans: ['adj. 手指的,数字的,数码的,电子的'] },
  { name: 'combo', trans: ['套餐，结合物'] },
  { name: 'cord', trans: ['n. 绳索,束缚 vt. 用绳索绑'] },
  { name: 'organise', trans: ['vt.组织,创办'] },
  { name: 'permit', trans: ['n. 许可证,执照 vt. &vi. 允许,许可'] },
  {
    name: 'still',
    trans: [
      'adj. 静止的, 不动的, 静寂的 adv. 仍然,更,静止地 conj. 然而,但是 vi. 变沉默 vt. 使冷静, 抓住, 使停止, 使放松 n. 沉默, 定格照, 酒厂'
    ]
  },
  { name: 'explicit', trans: ['adj. 明确的,详述的，明晰的,外在的'] },
  { name: 'elapse', trans: ['v. 逝去, 过去'] },
  {
    name: 'accidental',
    trans: ['adj. 意外的,偶然的,附属的 n. 偶然,不重要的东西,变调的临时符号']
  },
  { name: 'sequential', trans: ['adj. 连续的(序贯的)'] },
  {
    name: 'indirect',
    trans: ['adj. 间接的, 迂回的，次要的，不坦率的，欺骗的']
  },
  { name: 'reappear', trans: ['vi. 再出现'] },
  { name: 'circumstance', trans: ['n. 环境,(复数)境况,事件,详情'] },
  {
    name: 'mix',
    trans: ['n. 混合(物),融合 vt. &vi. 混合,掺入,合成,交往,联系 [计算机] 混合']
  },
  { name: 'suppress', trans: ['vt. 镇压,使...止住,禁止'] },
  { name: 'E', trans: ['n.字母 E'] },
  { name: 'recognition', trans: ['n. 认出,承认, 感知，知识'] },
  {
    name: 'arm',
    trans: [
      'n. 手臂, 港湾, 狭长地带, 扶手, 袖子, 枪 vt. 装备, 准备(炸弹) vi. 武装自己'
    ]
  },
  { name: 'alphanumeric', trans: ['adj. 字母数字的'] },
  { name: 'analog', trans: ['n. (=analogue)类似(模拟量) adj. 类比的, 模拟的'] },
  { name: 'automation', trans: ['n. 自动化'] },
  { name: 'band', trans: ['n. 带;箍,队,乐队 vt. &vi. 联合,结合'] },
  {
    name: 'batch',
    trans: ['n. 一次所烘的面包,一次所制之量,一组, 批, 分批 vi. 分批处理']
  },
  {
    name: 'brush',
    trans: [
      'n. 刷子,画笔,轻擦,小冲突, 灌木丛 vt. 用刷子清洗,画,拭去,打发 vi. 轻擦,拂拭'
    ]
  },
  { name: 'calculator', trans: ['n. 计算器'] },
  {
    name: 'punch',
    trans: [
      'n. 打洞器,钻孔机,殴打 n. 酒、水、糖等制成的鸡尾酒 vt. 以拳重击,开洞,剪票,按(键)'
    ]
  },
  { name: 'reader', trans: ['n. 读者，读物, 读本'] },
  {
    name: 'cell',
    trans: ['n. 细胞, 电池, 小组, 小房间, 单人牢房, (蜂房的)巢室, 手机']
  },
  {
    name: 'channel',
    trans: ['n. 通道,频道,海峡,方法 vt. 引导,开导,形成河道,输送']
  },
  { name: 'circuit', trans: ['n. 电路,一圈,巡回 vt. &vi. 巡回'] },
  {
    name: 'to',
    trans: [
      'prep. (表示方向)到,向；(表示间接关系)给；离,对于,为了 adv. （表示方向）去,（门）关上'
    ]
  },
  { name: 'coder', trans: ['n. 编码器'] },
  { name: 'unit', trans: ['n. 单位, 单元'] },
  {
    name: 'core',
    trans: [
      'n.中心，核心，精髓； 果心，果核； [地质学]地核； [计] 磁心 vt.去（果）核，挖去…的果心； 提取岩芯（样品）'
    ]
  },
  { name: 'cybernetics', trans: ['n. 控制论'] },
  { name: 'disc', trans: ['n. 圆盘，[电子] 唱片（等于 disk） vt. 灌唱片'] },
  {
    name: 'drum',
    trans: [
      'n. 鼓, 鼓声, 鼓状物, 冰丘 vi. 击鼓, 作鼓声, 引起兴趣 vt. 召集入伍, 逐出, (经过努力)推动..., 连续击打'
    ]
  },
  { name: 'electronics', trans: ['n. 电子学，电子器件'] },
  { name: 'emitter', trans: ['n.发射器'] },
  { name: 'encode', trans: ['vt. 编码, 译码'] },
  { name: 'feedback', trans: ['n. 反馈,成果'] },
  {
    name: 'flow',
    trans: [
      'vi.流； 垂； 流出； （谈话、文体等）流畅 n.流动； 滔滔不绝； 涨潮； 连贯 vt.使泛滥； 淹没； 排出'
    ]
  },
  {
    name: 'frame',
    trans: ['n. 框,结构,骨架 v. 构成，把...框起来，陷害 adj. 木结构的']
  },
  { name: 'identifier', trans: ['n. 标识符'] },
  { name: 'inquiry', trans: ['n. 打听, 询问, 调查, 查问 =enquiry(英)'] },
  {
    name: 'integrated',
    trans: ['adj. 整合的,综合的 vt.&vi. 使整合(integrate 的过去式及过去分词)']
  },
  { name: 'latency', trans: ['n. 潜伏, 潜在'] },
  { name: 'linkage', trans: ['n. 连合, 连锁, 结合'] },
  { name: 'logger', trans: ['n. 伐木工, 记录器, 注册器'] },
  { name: 'magnetic', trans: ['adj. 有磁性的,有吸引力的,催眠术的'] },
  { name: 'matrix', trans: ['n. 母体,子宫 细胞 脉石,字母 n.矩阵'] },
  { name: 'microcomputer', trans: ['n. 微电脑 [计算机] 微机计算机'] },
  { name: 'nanosecond', trans: ['n. 毫微秒，极短的时间'] },
  { name: 'octet', trans: ['n. [音] 八重唱, 八重奏 n. 八位位组'] },
  { name: 'optical', trans: ['adj. 眼睛的, 视觉的, 光学的'] },
  {
    name: 'panel',
    trans: [
      'n.镶板； 面； （门、墙等上面的）嵌板； 控制板 vt.选定（陪审团）； 把…分格； 在…上置鞍垫； 把…镶入框架内'
    ]
  },
  { name: 'perforator', trans: ['n.穿孔器,穿孔员'] },
  { name: 'peripheral', trans: ['adj. 不重要的,外围的 n. 外围设备'] },
  { name: 'pulse', trans: ['n. 脉冲,脉波,脉搏 vt. &vi. 跳动,脉跳'] },
  { name: 'redundancy', trans: ['n. 冗余,备份,多余信息'] },
  { name: 'selector', trans: ['n. 挑选者，选择器'] },
  { name: 'sentinel', trans: ['n. 哨兵(标记,传送) vt 放哨(守卫)'] },
  { name: 'simulation', trans: ['n. 模拟,仿真,赝品'] },
  { name: 'simulator', trans: ['模拟程序'] },
  { name: 'sorter', trans: ['n.从事分类的人,把东西分类拣选的人'] },
  { name: 'symbolic', trans: ['n. 代号 adj. 象征的, 符号的'] },
  { name: 'tabulator', trans: ['n. 制表者, 制表机, 跳格键'] },
  { name: 'teleprinter', trans: ['n. 电传打印机'] },
  { name: 'timer', trans: ['n. 计时员，记时器, 跑表'] },
  { name: 'timing', trans: ['n. 时间的掌握(安排, 配合)'] },
  { name: 'transducer', trans: ['n. 转换器, 传感器'] },
  { name: 'translator', trans: ['n. 翻译者'] },
  { name: 'Winchester', trans: ['n. 温彻斯特(英格兰南部城市)'] },
  { name: 'multimedia', trans: ['adj. 多媒体的 n. 多媒体'] },
  { name: 'pentium', trans: ['Intel 公司生产的 CPU 芯片,中文译名为"奔腾"'] },
  {
    name: 'kilo',
    trans: ['pref. 表示“千” abbr. 千克，公斤(=kilogram/kilogramme)']
  },
  { name: 'giga', trans: ['pref. 千兆'] },
  { name: 'bracketed', trans: ['方括号；托架；括号'] },
  { name: 'debugger', trans: ['调试器'] }
]
module.exports = data
