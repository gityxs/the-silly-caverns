/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "- 1 New celestial.": "- 1 新天体。",
    "Total Time": "总时长",
    "Total": "总计",
    "Track Ores!": "跟踪矿石!",
    "Trophy Room": "奖杯室",
    "Tree of Life Levels:": "生命之树等级:",
    "Undersea Eviscerator": "海底切割器",
    "Yin-Yang: Mine in World 2 with the Key equipped.": "阴阳:在装备了钥匙的情况下，世界2中的矿井。",
    "You appear to be new to this game, would you like to see how to play? The information can be viewed at any time by selecting 'FAQ' in the menu.": "你似乎对这个游戏很陌生，你想看看怎么玩吗?您可以随时在菜单中选择“FAQ”查看相关信息。",
    "You can either hold W, A, S, D to manually move in that direction, press the buttons with 1 arrow to move 1 block in that direction, press any of the arrow keys to automine in that direction, or press the buttons with 3 arrows to automine in that direction.": "你可以按住W, A, S, D手动朝那个方向移动，按下带有1个箭头的按钮朝那个方向移动一个方块，按下任意方向键自动朝那个方向移动，或者按下带有3个箭头的按钮自动朝那个方向移动。",
    "You can get: ->": "你可以得到: ->",
    "World One": "世界 1",
    "World Two": "世界 2",
    "What are variants?": "什么是变体?",
    "Webhook Settings": "Webhook设置",
    "Preview": "预览",
    "Quantum Entangler": "量子纠缠器",
    "Play!": "开始！",
    "Pickaxes": "镐子",
    "Powerups": "通电",
    "Player Statistics": "玩家统计",
    "Planet Buster": "星球爆炸",
    "Ore Index": "矿石指标",
    "Ore Fissions!": "矿石裂变！",
    "Ore Crafts!": "矿石工艺品！",
    "Ore Logs": "矿石日志",
    "Ore Tiers": "矿石层级",
    "Ore Tracker": "矿石跟踪器",
    "Other Questions": "其他问题",
    "Paradoxical Progression": "矛盾进程",
    "Paradoxical Progression will give access to the next level instead of a random item.": "矛盾进程将让玩家进入下一个关卡，而不是随机道具。",
    "Pickaxe consistency is the average amount of blocks you would be mining per block mined. It is calculated with the formula: (revealed * luck / proc)": "镐子一致性是指你将开采的每个区块的平均数量。其计算公式为:(显示 * 幸运 / 产量)",
    "Automatically cycles through powerups and activates them if they are ready. -25% cooldown time, +50% activation time.": "自动循环通电，并在通电准备就绪时激活它们-25%的冷却时间，+50%的激活时间。",
    "Blocks Mined": "已开采的区块",
    "Capacity": "容量",
    "Something after Coronary Catastrophe...": "冠状动脉灾难之后…",
    "One thing you have to pay attention to is spawn sounds. Rare ores all have a noise to indicate they have been spawned in the mine, and it is generally recommended to always collect these ores.": "你需要注意的一件事是产生声音。稀有矿石都有噪音，表明他们已经在矿山中产卵，一般建议总是收集这些矿石。",
    "Crafting is the most important part of the game. It allows you to create better pickaxes and make gears that will help you progress. New pickaxes will either let you mine more blocks through abilities or gain more luck. Gears are just like upgrades in other games and can increase luck, speed, and other silly things that will help with progression.": "锻造是游戏中最重要的部分。它可以让你创造更好的镐和装备，这将有助于你的进步。新的镐子可以让你通过技能挖掘更多方块或获得更多运气。装备就像其他游戏中的升级一样，可以增加运气、速度和其他有助于进程的东西。",
    "Create!": "创造!",
    "Craft": "制作",
    "Back to Game": "返回游戏",
    "Audio Settings": "音频设置",
    "Automine Protection": "自动保护",
    "Allows you to access the ore tracker menu, pointing you towards the nearest rare ore that had a spawn message with it owned.": "允许你访问矿石跟踪菜单，指向你最近的稀有矿石，有一个产生消息与它拥有。",
    "Artifice Annihilator": "神兵歼灭者",
    "Cave Types": "洞穴类型",
    "Cave": "洞穴",
    "Caves Generated": "生成的洞穴",
    "Cloud Layer": "云层",
    "Events": "事件",
    "Enables cave spawns in World 2 and moderately increases cave size.": "允许在世界2中生成洞穴，并适度增加洞穴大小。",
    "Enables the spawn of Abysstone Caves.": "启用深渊石窟的生成。",
    "Equip!": "装备!",
    "Menu": "菜单",
    "How do I play?": "玩法？",
    "Gives you any unowned pickaxe or gear for at least 1 minute. Will not give World 1 pickaxes in World 2, and is disabled in Subworld 1. The given item is wiped on refresh.": "给你任意无主的镐子或工具至少1分钟。在世界2中不会给世界1的镐子，在子世界1中被禁用。给定的物品在刷新时被擦除。",
    "Haste II Beacon": "急速 II 信标",
    "Hyperdrive Accelerator": "超光速加速器",
    "It doesn't appear like you have a name yet! Pick one out for yourself!": "你好像还没有名字啊!为你自己挑一个吧!",
    "(Make sure your name is appropriate as it will appear when you generate ore logs)": "(确保你的名字是合适的，因为它会在你生成日志时出现)",
    "Confirm!": "确认!",
    "Cave types have a chance of generating when a cave is generated. These have special blocks instead of the normal layer, and have their own loot tables. These loot tables contain cave exclusives, which can only be generated in that specific cave type and are not affected by any luck as of now. Any cave exclusive will log, no matter the rarity.": "当洞穴生成时，洞穴类型有一定几率生成。这些有特殊的块而不是普通的层，并有自己的战利品表。这些战利品表包含洞穴专属，只能在特定的洞穴类型中生成，并且目前不受任何运气的影响。任何洞穴都是独一无二的，无论多么稀有。",
    "Caves generate in the mine at a rate of 1/500 after crafting Geode Staff. They will mine a little over 1,500 blocks and will give you whatever was mined. They don't increase blocks mined.": "在制作水晶杖后，洞穴以1/500的速度在矿井中生成。他们将开采超过1500个区块，然后把挖到的都给你。它们不会增加开采的区块。",
    "Currently, this will allow miners to obtain ores from World 1 that spawn in caves, this will be a thing until new cave types are made for World 2.": "目前，这将允许矿工从世界1中获得在洞穴中产生的矿石，这将是一个事情，直到新的洞穴类型为世界2。",
    "Draws from past creations and through corruption, magnifies it fivefold.": "从过去的创造中吸取，通过腐败，将其放大五倍。",
    "- 2 New World 2 gears": "- 2 新世界2装备",
    "- 2 New Gears!": "- 2 新装备!",
    "- 2 new ore tiers": "- 2 新矿石层级",
    "- 9 New event ores found in a few World 1 layers.": "- 9个新的事件矿石会在部分世界1层中发现",
    "- Changed a few powerup effects.": "- 改变了一些通电效果。",
    "- A few QOL changes with crafting.": "- 一些关于锻造的QOL改变。",
    "- Overhauled Powerup UI.": "- 升级通电UI。",
    "- Let me know if progression needs any more tweaking and I'll try to make it better.": "- 让我知道进程是否需要更多的调整，我会努力让它变得更好。",
    "Events:": "事件:",
    "Export Data": "导出存档",
    "Fission": "裂变",
    "Flawless": "完美无瑕",
    "Flawless :": "完美无瑕:",
    "Fortune III Book": "财富 III 书",
    "Game Settings": "游戏设置",
    "Gears": "装备",
    "Generate Ore Logs": "生成矿石日志",
    "Has x luck.": "拥有 x 幸运.",
    "High Powered Vacuum": "大功率真空",
    "How do i find [layer]? (and other secrets)": "我如何找到[层]? (以及其他秘密)",
    "How to use: Click on an ore in a variant inventory, or manually input the information!": "使用方法:点击一个变体库存中的矿石，或者手动输入信息!",
    "I think there's something new for you to check out in the Portal Room, you should head on over there!": "我觉得传送室里有新的东西给你看，你应该去那里看看!",
    "Exponential Centrifuge": "指数离心机",
    "Every pigment of color swirls up from below, surrounding you in an eternal rainbow...": "每一种颜色都从下面盘旋而上，在你周围形成一道永恒的彩虹……",
    "Disguised Chills": "伪装的寒意",
    "Dimensional Update": "维度更新",
    "..This is where it ends? The most powerful tool in all the worlds..? No.. it can't end here there must be something more...": "..这就是结束的地方?世界上最强大的工具…?没有. .事情不会就此结束，一定还有别的事情……",
    "The Key to World 2.": "世界2的钥匙。",
    "The Key": "钥匙",
    "The locations tab provides some very helpful areas. The first one is the forge, which allows you to craft certain ores you might need, or fission rare ores you have into a bunch of more common ores. The second is variant conversion, which can be more easily accessed by clicking on an ore in your inventory that is a variant. It will allow you to convert these variants into their normal selves, gaining more the rarer the variant. The third location is the workshop, which is currently only visible in Subrealm 1. The workshop will allow you to upgrade certain items, making them work better than usual.": "位置选项卡提供了一些非常有用的区域。第一个是锻造，它允许你制造你可能需要的某些矿石，或者将你拥有的稀有矿石裂变成一堆更常见的矿石。第二种是变体转换，你可以通过点击库存中的变体矿石来更轻松地访问它。它将允许你将这些变体转换成它们的正常自我，越稀有的变体获得越多。第三个位置是车间，目前只在子领域1中可见。车间将允许您升级某些物品，使它们比平时更好地工作。",
    "The logs tab is where you can generate ore logs for your current session. This only logs Flawless tier and above ores, along with any rare cave ores. These are also how you can provide proof of ores in the Discord.": "在 日志 选项卡中，您可以为当前会话生成 矿石日志。这只记录完美层和以上的矿石，以及任何稀有的洞穴矿石。这些也是你在Discord中提供矿石证明的方式。",
    "The Menu": "菜单",
    "The menu contains a lot of important tabs that you should make note of!": "菜单包含很多重要的标签，你应该注意!",
    "The main pickaxe of Subrealm 1.": "子领域1的主要 镐子。",
    "Offline Progression": "离线进度",
    "Pickaxe: Mine down into the barrier to have a chance to obtain it": "镐子:挖到障碍物有机会获得它",
    "Please Login to Galaxy for Cloud autosave.": "请登入Galaxy进行云端自动储存。",
    "Potentiality Multiplier": "潜能乘数",
    "Powerups And Other Things Like Them": "升级道具和其他类似的东西",
    "Set Webhook Name": "设置Webhook名称",
    "Show Tiers": "显示层级",
    "Silly Caverns Forge": "愚蠢的洞穴锻造",
    "Simulated RNG": "模拟RNG",
    "Spawn Effects": "生产效果",
    "Spawn Effects Enabled": "生产效果已启用",
    "Spawn Messages Appear Here!": "生产的消息出现在这里!",
    "Logs": "日志",
    "Luck:": "幸运:",
    "Lunar Lightsabre": "月球光剑",
    "Mines blocks from an alternate dimension, lowers RNG accuracy but increases block output.": "从另一个维度挖掘区块，降低RNG精度，但增加区块输出。",
    "Minimum Spawn Message": "最小生成信息",
    "Minimum Speed": "最低速度",
    "Movement:": "移动:",
    "Mud Sickle": "泥浆镰刀",
    "Multiplies all luck by 5% of your current pickaxe's luck +1. (Cannot lower luck)": "所有运气乘以你当前镐子运气的5% +1。(不能降低运气)",
    "Create Custom Webhook": "创建自定义Webhook",
    "Event Messages Appear Here!": "事件消息出现在这里!",
    "Explosive": "爆炸",
    "Extreme Echolocator": "极端回声定位器",
    "Gambler's Fallacy": "赌徒的谬论",
    "Gemstone Engraver": "宝石雕刻师",
    "Infinitesimal": "无穷小",
    "Instantly mines any rare ore that spawns, excluding celestials.": "立即开采任何稀有矿石，不包括天体。",
    "Join Our Community!": "加入我们的社区！",
    "Invisible Path Blocks": "隐形路径块",
    "The Workshop": "作坊",
    "The Tree of Life": "",
    "The Silly Caverns Forge": "愚蠢洞窟锻造厂",
    "This setting is one of the more important ones, and will stop you mining if you spawn an ore of the specified tier. Click on tiers and select which tiers you would like to be automatically stopped on.": "这个设置是更重要的设置之一，如果你生成了指定层的矿石，它将停止你的采矿。点击层级，选择你想要自动停止的层级。",
    "This setting changes the ore tracker arrow to the :nyerd: emoji.": "这个设置将矿石追踪器箭头更改为:nyerd: emoji。",
    "This setting makes abilities and Infinity Collector unable to mine ores, and you have to manually mine them.": "这个设置使得能力和无限收集器无法开采矿石，你必须手动开采。",
    "This setting sets the tiers an ore has to be for it to generate a spawn message and appear in latest spawns and latest finds.": "这个设置设置了一个矿石必须的层，它必须生成一个刷出消息，并出现在最近的刷出和最近的发现中。",
    "This setting switches pickaxe names to become numbers, like \"Pickaxe 1\" instead of the pickaxes actual name.": "这个设置将镐子的名称转换为数字，比如“镐子1”而不是镐子的实际名称。",
    "This setting switches the white circles to nothing, can negatively impact performance but looks better.": "这种设置将白色圆圈切换为零，可能会对性能产生负面影响，但看起来更好。",
    "This settings either enables or disables the blocks on the screen, and can increase performance.": "这个设置可以启用或禁用屏幕上的块，并且可以提高性能。",
    "Tier": "层级",
    "Toggle Block Updates": "切换块更新",
    "Toggle Caves": "切换洞穴",
    "Toggle Simulated RNG": "切换模拟RNG",
    "Travel To Index On Click": "旅行到索引通过点击",
    "Travel to layer index on crafting click": "旅行到层索引通过点击制作",
    "Unlocked by crafting the ore tracker gear. Points you in the direction of the nearest rare ore that had a spawn message and gives you its coordinates upon clicking \"Track Ores!\". Will also display the variant of the ore if it has one.": "",
    "77 Leaf Destroyer": "77叶破坏者",
    "A highlight reel of your journey in the mines is faintly visible in the corner of your eyes...": "你的眼角依稀能看到你矿井之旅的精彩片段。",
    "A thundercloud begins brewing above the mines...": "雷雨云开始在矿井上空酝酿。",
    "Ability Size:": "能力大小:",
    "Abyssal Leaper": "深渊跃迁者",
    "Abysstone Caves": "深渊岩洞",
    "Abysstone caves are unlocked with a special, secret gear in World 2. They are the rarest cave type and generate any ore from World 1 and World 2, excluding celestials and any cave exclusives. It has its own exclusive ore, which is celestial tier.": "在世界2中，深渊石洞穴是用一个特殊的秘密装备解锁的。他们是最稀有的洞穴类型和产生任何矿石从世界1和世界2，不包括天界和任何洞穴专属。它有自己的专属矿石，这是天梯。",
    "Abysstone Gear": "深渊装备",
    "AFK Mode": "AFK 模式",
    "Activate!": "激活!",
    "All other gears function normally.": "所有其他齿轮正常工作。",
    "All the knowledge of this realm courses through you as a new intelligence forms...": "这个领域的所有知识都通过你作为一种新的智能形式…",
    "All World 2 gears will work in World 1 (Speed gears will only be used in World 1 when all are owned).": "所有世界2的装备都将在世界1中工作(只有当所有装备都拥有时才能在世界1中使用速度装备)。",
    "Allow Auto?": "允许自动?",
    "Allows any Infinity Collector to mine Celestial tier ores.": "允许任何无限收集器开采天界层矿石。",
    "Block Update Speed": "区块更新速度",
    "BOMBS AWAY!!!...": "投弹完毕! !…",
    "Can be upgraded in The Workshop.": "可以在作坊升级。",
    "Can duplicate layer blocks.": "可以复制图层块。",
    "Cavern Capacitator": "迷窟电容",
    "Caves": "洞穴",
    "Celestial": "天体",
    "Celestial :": "天体 :",
    "Celestian Reaper": "天体收割者",
    "Change Block Update Speed": "更改块更新速度",
    "Change Latest Ores Max Length": "更改最新矿石最大长度",
    "Not Active!": "不活跃!",
    "Rare Spawns": "稀有产生",
    "Re-Repurposed Replicator": "重新利用的复制器",
    "Re-Repurpused Replicator": "重新改造的复制器",
    "Replicator Prototype": "复制器原型",
    "Session Time": "会话时间",
    "Session Resets": "会话重置",
    "Set Multiplier": "设置乘数",
    "Set Minimum Log RNG": "设置最小日志RNG",
    "Set Webhook Link": "设置Webhook链接",
    "Singularity Slammer": "奇点监狱",
    "Superenergetic Automaton": "超能量自动机",
    "Crafting": "制作",
    "Dirt Ravager": "污垢掠夺者",
    "Crystalline Excavator": "结晶挖掘机",
    "Crypt Smasher": "地穴粉碎者",
    "Earth Soiler": "土壤收集器",
    "Use Different Emojis": "使用不同的表情符号",
    "Upload Save File": "导入存档文件",
    "Use Different Emojis (for improper display)": "使用不同的表情符号(用于不恰当的展示)",
    "Use New Music": "使用新音乐",
    "Use Numbers For Pickaxe Names": "使用数字作为镐子名称",
    "Use Numbers for Pickaxe Names": "使用数字作为镐子名称",
    "Variant Conversion Machine!": "变型转换机!",
    "Variant Conversions": "变体转换",
    "You hear a bell start dinging in the 🚪 layer...": "你听到🚪层开始响起铃声……",
    "You've mined too much, best to turn back now. Be warned.": "",
    "Geode Staff": "晶矿法杖",
    "Craft the Ore Tracker!": "制造矿石追踪器!",
    "Corundum Caver": "刚玉洞穴",
    "Rarity": "稀有度",
    "Real Candilium": "真正的Candilium",
    "Real Vitriol": "真正的硫酸盐",
    "Normal": "普通",
    "Normal Inventory": "普通库存",
    "An electrical container in the rock layer energizes the air around you...": "岩石层中的一个电子容器给你周围的空气提供能量……",
    "and lowers by 1ms for every upgrade (only in Subrealm). The only luck gear that works here is Statistical Amplifier.": "并且每次升级降低1毫秒(仅在子领域)。唯一有用的幸运装置是统计放大器。",
    "Convert!": "转换!",
    "Data": "数据",
    "Dimensional Slicer": "维度切割器",
    "Electrified Inventory": "通电库存",
    "Energy Siphoner": "能量虹吸器",
    "Stop On Rare": "停在稀有",
    "Staff of Binding": "束缚法杖",
    "New": "新",
    "Name": "名称",
    "Mute Sacreds": "沉默的圣徒",
    "Mute Music": "静音音乐",
    "Mute Mysticals": "静音神秘",
    "Music Volume": "音乐音量",
    "Mute Antiques": "静音古董",
    "Resets": "重置",
    "Return Home": "回家",
    "RNG Manipulator": "RNG操控者",
    "Sacred": "神圣",
    "Sacred :": "神圣:",
    "Server Webhook Link": "服务器Webhook链接",
    "Set Min Speed": "设置最小速度",
    "Speed": "速度",
    "Speed is locked at": "速度被锁定在",
    "Stacks with all other luck additions.": "与所有其他运气叠加。",
    "Stacks with all other speed buffs.": "与所有其他速度Buff叠加。",
    "Starborne Slasher": "星载粉碎机",
    "Statistical Amplifier": "统计放大器",
    "Storm Sneakers": "风暴运动鞋",
    "Terrestrial Terror": "大地恐怖",
    "Teleport!": "传送!",
    "Wings of Glory": "荣耀之翼",
    "Whirlpool of Fate": "命运漩涡",
    "What is pickaxe consistency (cons)?": "什么是镐一致性(缺点)?",
    "Void Crusher": "虚空粉碎机",
    "Upgrade!": "升级！",
    "Update Capacity": "更新容量",
    "Updates, Leaks, and Secrets Included!": "包括更新，泄漏和秘密!",
    "Unlocked Speedcap": "解锁速度上限",
    "Tropical Carver": "热带雕刻师",
    "Completion": "完成",
    "Convert All Variants But One": "转换除一个之外的所有变体",
    "Coronary Catastrophe": "冠状动脉大灾难",
    "Ballast Breaker": "压舱断路器",
    "Alteration Reiterator": "变换重申器",
    "Locations": "位置",
    "Locked! Reason": "锁定了!原因",
    "Logical Randomiser": "逻辑随机器",
    "Login Here.": "在这里登录。",
    "Lyle! Lyle, wake up! You gotta wake up, please!...": "莱尔!莱尔，醒醒!你得醒醒，求你了!",
    "Mulch Mallet": "护根锤",
    "Description": "介绍",
    "View Ability": "查看能力",
    "85% line repetition chance, 7 max repetitions.": "85%的线路重复率，最大重复7次。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "FAQ": "FAQ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Duration: ": "持续时长: ",
    "Infinity Collector": "无限收集器",
    "Side Effect(s): ": "副作用: ",
    "Ore: ": "矿石: ",
    "World(s): ": "世界: ",
    "Boosts ability luck by ": "提升能力幸运值 ",
    "Icon made by @": "图标作者 @",
    "Ability design created by @": "能力设计来自 @",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "ms Mining Speed.": "ms 采矿速度.",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\- New(.+)$/,
    /^\- Bug(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.]+)\/([\d\.,]+)\*$/,
    /^([\d\.]+)\/([\d\.]+)T\*$/,
    /^([\d\.]+)\/([\d\.]+)Qn\*$/,
    /^([\d\.]+)\/([\d\.]+)qd\*$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.]+)\/([\d\.]+)T$/,
    /^([\d\.]+)\/([\d\.]+)Qn$/,
    /^([\d\.]+)\/([\d\.]+)qd$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^X: \-([\d\.,]+) \| Y: \-([\d\.,]+)$/,
    /^X: ([\d\.,]+) \| Y: ([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+)x Luck. (.+) Average Blocks Per Minute.$/, '$1x 幸运. 每分钟平均 $2 块.'],
    [/^(.+) Blocks Mined.$/, '$1 开采的区块。'],
    [/^(.+) Blocks Revealed This Reset.$/, '挖掘 $1 区块在本轮游戏'],
    [/^Has an ability proc rate of (.+).$/, '能力触发率为 $1。'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^Has ([\d\.]+)x luck.$/, '拥有 $1x 幸运。'],
    [/^\+([\d\.]+)x Luck.$/, '\+$1x 幸运。'],
    [/^\+([\d\.]+)x Base Luck.$/, '\+$1x 基础幸运。'],
    [/^\+([\d\.]+)\% ability activation rate.$/, '\+$1x 能力激活率。'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Blocks Mined$/, '$1 已开采地块'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Event ([\d\.,]+):$/, '事件 $1:'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Main Effect\(s\): (.+) boost on (.+)$/, '主效果：$1 提升到 $2'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Rate: (.+) every (.+)ms$/, '速率：$1 每 $2ms'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);