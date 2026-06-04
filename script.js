const dishes = [
  {
    name: "酸辣土豆丝",
    tags: ["素菜", "重口"],
    ingredients: ["土豆 2 个", "干辣椒 4 个", "蒜 3 瓣", "白醋 1 汤匙", "生抽 1 茶匙", "盐 适量"],
    steps: ["土豆去皮切细丝，清水多冲几遍去淀粉。", "蒜切末，干辣椒剪段。", "热锅下油，先爆香蒜末和干辣椒。", "倒入土豆丝大火快炒 1 分钟。", "加盐、生抽、白醋继续翻炒到断生即可。"],
    tips: "土豆丝要先洗掉淀粉，炒出来更脆。醋最好沿锅边下，酸味更清亮。"
  },
  {
    name: "干煸杏鲍菇",
    tags: ["素菜", "重口"],
    ingredients: ["杏鲍菇 3 根", "蒜 3 瓣", "干辣椒 3 个", "孜然粉 1 茶匙", "生抽 1 汤匙", "盐 适量"],
    steps: ["杏鲍菇切条，蒜切末，辣椒切段。", "少油下杏鲍菇中火煸到边缘发黄。", "拨到一边，下蒜末和辣椒炒香。", "加生抽、盐、孜然粉翻匀。", "继续煸到水分收干、表面微焦即可。"],
    tips: "杏鲍菇先煸出水再调味，口感更像肉。"
  },
  {
    name: "茄汁西葫芦",
    tags: ["素菜"],
    ingredients: ["西葫芦 1 根", "番茄 2 个", "蒜 2 瓣", "番茄酱 1 汤匙", "盐 适量", "糖 少许"],
    steps: ["西葫芦切片，番茄切块，蒜切末。", "热锅下油爆香蒜末，放番茄炒软。", "加入番茄酱和少许糖炒出汁。", "倒入西葫芦翻炒。", "加盐调味，炒到西葫芦微软即可。"],
    tips: "番茄先炒出汁，西葫芦不要炒太久，保留一点脆感更好吃。"
  },
  {
    name: "双椒鸡丁",
    tags: ["鸡肉", "重口"],
    ingredients: ["鸡胸肉 300 克", "青椒 1 个", "小米椒 3 个", "蒜 3 瓣", "料酒 1 汤匙", "生抽 1 汤匙", "淀粉 1 茶匙"],
    steps: ["鸡胸肉切丁，加料酒、生抽、淀粉抓匀腌 10 分钟。", "青椒切丁，小米椒切圈，蒜切末。", "先炒鸡丁至变色盛出。", "锅里留底油，下蒜末和双椒炒香。", "回锅鸡丁，加少许盐翻匀即可。"],
    tips: "鸡丁提前抓淀粉会更嫩，青椒最后下保持清爽口感。"
  },
  {
    name: "小白菜炒平菇",
    tags: ["素菜"],
    ingredients: ["小白菜 1 把", "平菇 200 克", "蒜 3 瓣", "盐 适量", "蚝油 1 茶匙"],
    steps: ["平菇撕小朵，小白菜切段，蒜切末。", "热锅下油炒香蒜末。", "先下平菇炒到微软出汁。", "放入小白菜快速翻炒。", "加盐和少许蚝油调味，炒匀出锅。"],
    tips: "平菇本身会出水，小白菜下锅后大火快炒，颜色更翠。"
  },
  {
    name: "红烧茄子",
    tags: ["素菜", "重口"],
    ingredients: ["长茄子 2 根", "蒜 4 瓣", "生抽 1 汤匙", "老抽 半茶匙", "蚝油 1 汤匙", "糖 少许", "淀粉 1 茶匙"],
    steps: ["茄子切滚刀块，蒜切末。", "茄子可先少油煎软，或者微波 2 分钟预处理。", "调一碗汁：生抽、老抽、蚝油、糖、少许水和淀粉。", "锅里爆香蒜末，下茄子翻炒。", "倒入料汁收浓即可。"],
    tips: "茄子先处理软一点能明显少吸油。"
  },
  {
    name: "豆角炒肉",
    tags: ["猪肉"],
    ingredients: ["豆角 300 克", "瘦肉 150 克", "蒜 3 瓣", "生抽 1 汤匙", "料酒 1 茶匙", "淀粉 1 茶匙"],
    steps: ["瘦肉切片，加料酒、生抽、淀粉抓匀。", "豆角切段，蒜切末。", "豆角先炒到颜色变深、基本熟透。", "另起锅滑散肉片。", "合并豆角和肉片，加盐翻匀即可。"],
    tips: "豆角一定要炒熟，避免夹生。"
  },
  {
    name: "杏鲍菇炒鸡蛋",
    tags: ["素菜"],
    ingredients: ["杏鲍菇 2 根", "鸡蛋 3 个", "小葱 1 根", "盐 适量", "胡椒粉 少许"],
    steps: ["杏鲍菇切片，鸡蛋打散，小葱切花。", "先炒熟鸡蛋盛出。", "锅里再下少许油炒杏鲍菇至变软。", "回锅鸡蛋，加盐和胡椒粉翻匀。", "撒小葱出锅。"],
    tips: "鸡蛋不要炒太老，最后回锅就够了。"
  },
  {
    name: "酸辣包菜",
    tags: ["素菜", "重口"],
    ingredients: ["包菜 半个", "干辣椒 4 个", "蒜 3 瓣", "白醋 1 汤匙", "生抽 1 茶匙", "盐 适量"],
    steps: ["包菜手撕块，蒜切末，辣椒切段。", "热锅下油爆香蒜末和辣椒。", "下包菜大火翻炒。", "加生抽、盐继续炒到微软。", "沿锅边下白醋翻匀即可。"],
    tips: "手撕比切的更容易挂汁，也更有家常味。"
  },
  {
    name: "鱼香肉丝",
    tags: ["猪肉", "重口"],
    ingredients: ["里脊肉 200 克", "木耳 一小把", "胡萝卜 半根", "青椒 1 个", "郫县豆瓣 1 茶匙", "生抽 1 汤匙", "醋 1 汤匙", "糖 1 汤匙"],
    steps: ["肉切丝腌一下，木耳、胡萝卜、青椒切丝。", "调鱼香汁：生抽、醋、糖、少许淀粉和水。", "先炒散肉丝盛出。", "下豆瓣酱炒香，再下配菜翻炒。", "回锅肉丝，倒入鱼香汁收浓即可。"],
    tips: "鱼香味重点是酸甜咸辣平衡，糖和醋都别省。"
  },
  {
    name: "清炒豌豆尖",
    tags: ["素菜"],
    ingredients: ["豌豆尖 300 克", "蒜 2 瓣", "盐 适量"],
    steps: ["豌豆尖洗净沥水，蒜切末。", "热锅下油，蒜末炒香。", "下豌豆尖快速翻炒。", "加盐调味。", "菜一塌软立刻出锅。"],
    tips: "这道菜讲究火大手快，时间长了容易发黄。"
  },
  {
    name: "清炒四季豆丝",
    tags: ["素菜"],
    ingredients: ["四季豆 300 克", "蒜 3 瓣", "盐 适量"],
    steps: ["四季豆去筋切细丝，蒜切末。", "热锅下油炒香蒜末。", "放四季豆丝中火翻炒。", "加少许水焖 1 分钟。", "加盐炒熟出锅。"],
    tips: "四季豆要完全熟透再吃。"
  },
  {
    name: "土豆焖豆角",
    tags: ["素菜"],
    ingredients: ["土豆 2 个", "豆角 250 克", "蒜 3 瓣", "生抽 1 汤匙", "盐 适量"],
    steps: ["土豆切块，豆角切段，蒜切末。", "锅里先炒香蒜末，倒入土豆和豆角翻炒。", "加生抽和少量水。", "盖盖焖 6 到 8 分钟。", "收汁后加盐调味即可。"],
    tips: "土豆切小块更容易焖透，豆角也会吸收土豆香。"
  },
  {
    name: "火腿片炒土豆片",
    tags: ["猪肉"],
    ingredients: ["土豆 2 个", "火腿片 120 克", "青椒 半个", "蒜 2 瓣", "盐 适量"],
    steps: ["土豆切薄片泡水，火腿切片，青椒切块。", "先炒火腿片出香。", "下蒜末和土豆片翻炒。", "土豆快熟时下青椒。", "加少许盐翻匀即可。"],
    tips: "火腿本身有咸味，盐量别放多。"
  },
  {
    name: "辣椒炒肉",
    tags: ["猪肉", "重口"],
    ingredients: ["瘦肉 200 克", "青椒 3 个", "蒜 3 瓣", "生抽 1 汤匙", "料酒 1 茶匙", "豆豉 少许"],
    steps: ["肉切片腌一下，青椒切块，蒜切片。", "先炒肉到变色盛出。", "锅里爆香蒜和豆豉。", "下青椒炒到起虎皮。", "回锅肉片，加生抽翻匀。"],
    tips: "青椒稍微炒焦一点，香味会更足。"
  },
  {
    name: "酸辣鸡腿",
    tags: ["鸡肉", "重口"],
    ingredients: ["鸡腿肉 2 只", "小米椒 3 个", "蒜 4 瓣", "醋 1 汤匙", "生抽 1 汤匙", "糖 半茶匙"],
    steps: ["鸡腿剁块或切丁，焯去血沫。", "蒜切末，小米椒切圈。", "锅里少油煎香鸡腿。", "下蒜末、小米椒、生抽翻炒。", "加少许水焖熟后淋醋和一点糖收汁。"],
    tips: "酸味放在后段更提香，鸡腿肉比鸡胸更适合做这道菜。"
  },
  {
    name: "洋葱炒鸡肉",
    tags: ["鸡肉"],
    ingredients: ["鸡胸肉 250 克", "洋葱 1 个", "生抽 1 汤匙", "黑胡椒 少许", "料酒 1 茶匙"],
    steps: ["鸡肉切片腌 10 分钟，洋葱切块。", "先炒鸡肉至变色。", "下洋葱大火翻炒。", "加生抽和黑胡椒。", "洋葱炒软即可出锅。"],
    tips: "洋葱不要炒得太烂，保留一点脆甜更好。"
  },
  {
    name: "木须肉",
    tags: ["猪肉"],
    ingredients: ["瘦肉 150 克", "鸡蛋 2 个", "木耳 一把", "黄瓜 半根", "胡萝卜 半根", "生抽 1 汤匙"],
    steps: ["木耳泡发，黄瓜和胡萝卜切片，鸡蛋炒熟盛出。", "肉片腌一下后滑散。", "下胡萝卜和木耳翻炒。", "回锅鸡蛋和黄瓜。", "加生抽、盐翻匀即可。"],
    tips: "黄瓜最后放，颜色和口感都会更好。"
  },
  {
    name: "番茄炒蛋",
    tags: ["素菜"],
    ingredients: ["番茄 2 个", "鸡蛋 3 个", "盐 适量", "糖 少许", "葱花 少许"],
    steps: ["鸡蛋打散炒熟盛出。", "番茄切块下锅炒出汁。", "加一点盐和糖调味。", "回锅鸡蛋翻匀。", "撒葱花即可。"],
    tips: "番茄炒到出沙会更好吃，少量糖能把酸味提得更圆润。"
  },
  {
    name: "椒盐鸡翅",
    tags: ["鸡肉"],
    ingredients: ["鸡翅中 8 个", "黑胡椒 少许", "椒盐 1 茶匙", "料酒 1 汤匙", "淀粉 1 汤匙"],
    steps: ["鸡翅划两刀，加料酒和黑胡椒腌 20 分钟。", "表面薄薄拍一层淀粉。", "平底锅煎到两面金黄熟透。", "撒椒盐翻匀。", "喜欢的话可再撒点辣椒粉。"],
    tips: "中小火慢煎更容易熟透，外皮也会更脆。"
  },
  {
    name: "可乐鸡翅",
    tags: ["鸡肉"],
    ingredients: ["鸡翅中 8 个", "可乐 1 听", "生抽 1 汤匙", "姜 3 片", "料酒 1 汤匙"],
    steps: ["鸡翅焯一下或直接煎到表面金黄。", "下姜片炒香。", "倒入生抽、料酒和可乐没过鸡翅一半。", "中火焖煮 12 分钟。", "最后大火收汁裹匀即可。"],
    tips: "收汁时要多翻几次，防止糖分糊锅。"
  },
  {
    name: "干锅花菜",
    tags: ["素菜", "重口"],
    ingredients: ["花菜 300 克", "五花肉 少许可选", "蒜 4 瓣", "干辣椒 3 个", "生抽 1 汤匙"],
    steps: ["花菜掰小朵焯水 1 分钟。", "蒜切片，辣椒切段。", "锅里先煸香五花肉或直接下蒜和辣椒。", "放花菜翻炒。", "加生抽和少量盐炒到边缘微焦即可。"],
    tips: "花菜先焯一下更容易炒透，干锅口感要稍微带点焦香。"
  },
  {
    name: "干煸豆角",
    tags: ["素菜", "重口"],
    ingredients: ["豆角 300 克", "蒜 3 瓣", "干辣椒 3 个", "生抽 1 茶匙", "盐 适量"],
    steps: ["豆角切段并擦干水分。", "锅里少油慢慢煸豆角至表皮起皱。", "加入蒜末和干辣椒炒香。", "加生抽和盐翻匀。", "炒到完全熟透即可。"],
    tips: "这道菜关键就是先煸后炒，豆角会更香。"
  },
  {
    name: "荷兰豆炒腊肠",
    tags: ["猪肉"],
    ingredients: ["荷兰豆 200 克", "腊肠 1 根", "蒜 2 瓣", "盐 少许"],
    steps: ["荷兰豆撕筋洗净，腊肠切片。", "锅里先炒腊肠出油。", "下蒜末和荷兰豆大火翻炒。", "加少许盐调味。", "荷兰豆断生后出锅。"],
    tips: "腊肠自带油脂和咸味，菜会很快入味。"
  },
  {
    name: "西芹炒鸡胸肉",
    tags: ["鸡肉"],
    ingredients: ["鸡胸肉 250 克", "西芹 2 根", "蒜 3 瓣", "黑胡椒 少许", "生抽 1 汤匙"],
    steps: ["鸡胸肉切片腌一下，西芹斜切段。", "先炒鸡肉到变色。", "下蒜末和西芹快速翻炒。", "加生抽和黑胡椒。", "西芹断生即可出锅。"],
    tips: "西芹不要炒太久，脆感是这道菜的灵魂。"
  },
  {
    name: "蒜薹炒肉丝",
    tags: ["猪肉"],
    ingredients: ["瘦肉丝 180 克", "蒜薹 250 克", "蒜 2 瓣", "料酒 1 茶匙", "生抽 1 汤匙"],
    steps: ["肉丝加料酒、生抽和淀粉抓匀。", "蒜薹切段。", "先滑散肉丝盛出。", "炒香蒜末，下蒜薹。", "回锅肉丝翻匀，加盐即可。"],
    tips: "蒜薹略带生脆口感时最好吃，不用炒太烂。"
  },
  {
    name: "青椒炒香菇",
    tags: ["素菜"],
    ingredients: ["青椒 2 个", "鲜香菇 8 朵", "蒜 3 瓣", "蚝油 1 茶匙", "盐 适量"],
    steps: ["香菇切片，青椒切块，蒜切末。", "先炒香菇到微软。", "加入蒜末和青椒翻炒。", "加少许蚝油和盐。", "青椒断生即可出锅。"],
    tips: "香菇先炒出香味，整道菜会更鲜。"
  },
  {
    name: "照烧鸡腿肉",
    tags: ["鸡肉"],
    ingredients: ["鸡腿肉 300 克", "生抽 2 汤匙", "蚝油 1 茶匙", "蜂蜜 1 茶匙", "料酒 1 汤匙"],
    steps: ["鸡腿肉切块或整片剔骨。", "调照烧汁：生抽、蚝油、蜂蜜、料酒、少许水。", "鸡腿肉先煎到两面金黄。", "倒入酱汁小火焖一会儿。", "收汁后切块装盘。"],
    tips: "鸡腿肉比鸡胸更适合做照烧，口感更嫩。"
  },
  {
    name: "酸辣藕丁",
    tags: ["素菜", "重口"],
    ingredients: ["莲藕 1 节", "干辣椒 3 个", "蒜 3 瓣", "白醋 1 汤匙", "生抽 1 茶匙", "盐 适量"],
    steps: ["莲藕切丁后焯水 1 分钟。", "爆香蒜末和干辣椒。", "下藕丁大火翻炒。", "加盐、生抽调味。", "沿锅边下醋翻匀即可。"],
    tips: "焯过水的藕丁口感更脆，也不容易发黑。"
  },
  {
    name: "蚝油生菜",
    tags: ["素菜"],
    ingredients: ["生菜 1 颗", "蒜 4 瓣", "蚝油 1 汤匙", "生抽 1 茶匙", "淀粉 半茶匙"],
    steps: ["生菜洗净沥干。", "蒜切末，调碗汁：蚝油、生抽、少量水和淀粉。", "生菜快速焯水或快炒断生。", "另起锅炒香蒜末。", "倒入碗汁烧到微稠，淋在生菜上。"],
    tips: "生菜时间不要长，保持脆嫩才好吃。"
  },
  {
    name: "肉末豆角",
    tags: ["猪肉"],
    ingredients: ["豆角 250 克", "肉末 150 克", "蒜 3 瓣", "生抽 1 汤匙", "料酒 1 茶匙"],
    steps: ["豆角切小丁，蒜切末。", "先炒肉末，烹入料酒。", "下蒜末和豆角丁翻炒。", "加生抽和少量水焖 2 分钟。", "豆角熟透后收汁即可。"],
    tips: "切成小丁后更适合拌饭，也更容易炒熟。"
  },
  {
    name: "蒜蓉娃娃菜",
    tags: ["素菜"],
    ingredients: ["娃娃菜 2 颗", "蒜 5 瓣", "生抽 1 茶匙", "盐 适量"],
    steps: ["娃娃菜切条，蒜切成蒜蓉。", "热锅下油炒香一半蒜蓉。", "下娃娃菜翻炒。", "加盐和生抽调味。", "出锅前加入另一半蒜蓉翻匀。"],
    tips: "蒜分两次下，香味会更有层次。"
  },
  {
    name: "孜然火腿土豆",
    tags: ["猪肉", "重口"],
    ingredients: ["土豆 2 个", "火腿肠 2 根", "孜然粉 1 茶匙", "辣椒粉 少许", "盐 适量"],
    steps: ["土豆切丁，火腿切片。", "土豆丁煎或炒到表面金黄。", "加入火腿继续翻炒。", "撒孜然粉和辣椒粉。", "加少量盐翻匀即可。"],
    tips: "土豆先煎香再调味，孜然味会更立体。"
  },
  {
    name: "糖醋樱桃肉",
    tags: ["猪肉"],
    ingredients: ["里脊肉 250 克", "番茄酱 1 汤匙", "白醋 1 汤匙", "糖 1 汤匙", "淀粉 2 汤匙"],
    steps: ["里脊切小块，加盐和淀粉抓匀。", "肉块下锅煎或炸至表面定型。", "调糖醋汁：番茄酱、醋、糖、少许水。", "锅里烧开糖醋汁。", "倒入肉块裹匀即可。"],
    tips: "喜欢更亮口一点，可以起锅前再补半勺醋。"
  },
  {
    name: "红烧排骨",
    tags: ["猪肉"],
    ingredients: ["排骨 500 克", "姜 4 片", "生抽 2 汤匙", "老抽 半汤匙", "冰糖 一小把", "料酒 1 汤匙"],
    steps: ["排骨焯水洗净。", "锅里少油炒糖色或直接下冰糖炒化。", "放排骨和姜片翻炒上色。", "加生抽、老抽、料酒和热水没过。", "小火炖 35 分钟后收汁。"],
    tips: "热水炖肉更容易保持肉香，收汁别太急。"
  },
  {
    name: "大盘鸡",
    tags: ["鸡肉", "重口"],
    ingredients: ["鸡块 600 克", "土豆 2 个", "青椒 1 个", "洋葱 半个", "豆瓣酱 1 汤匙", "姜蒜 适量"],
    steps: ["鸡块焯水，土豆切块，青椒和洋葱切块。", "炒香姜蒜和豆瓣酱。", "下鸡块翻炒上色。", "加入土豆和热水炖 20 分钟。", "最后放青椒、洋葱收汁即可。"],
    tips: "土豆要炖到边角发沙，汤汁拌面特别香。"
  },
  {
    name: "口水鸡",
    tags: ["鸡肉", "重口"],
    ingredients: ["鸡腿 2 只", "蒜 4 瓣", "辣椒油 2 汤匙", "生抽 2 汤匙", "醋 1 汤匙", "花生碎 适量"],
    steps: ["鸡腿煮熟后泡凉水，切块装盘。", "调料汁：蒜末、辣椒油、生抽、醋、少许糖。", "把料汁淋在鸡腿上。", "撒花生碎和葱花。", "静置几分钟更入味。"],
    tips: "鸡肉煮好后过凉水，口感更紧实。"
  },
  {
    name: "蜜汁青椒酿肉",
    tags: ["猪肉"],
    ingredients: ["青椒 6 个", "肉末 200 克", "生抽 1 汤匙", "蚝油 1 茶匙", "蜂蜜 半茶匙", "淀粉 1 茶匙"],
    steps: ["青椒去籽，肉末加生抽和淀粉拌匀。", "把肉末塞进青椒。", "平底锅少油煎至两面定型。", "调汁：生抽、蚝油、蜂蜜、少许水。", "倒入料汁焖到熟透。"],
    tips: "煎的时候先肉面朝下，更容易定型。"
  },
  {
    name: "红烧肉土豆",
    tags: ["猪肉"],
    ingredients: ["五花肉 400 克", "土豆 2 个", "姜 4 片", "生抽 2 汤匙", "老抽 半汤匙", "冰糖 一小把"],
    steps: ["五花肉切块焯水。", "锅里煸五花肉出油。", "下冰糖炒化，再加生抽老抽。", "放土豆块和热水没过食材。", "小火炖 40 分钟，最后收汁。"],
    tips: "先把五花肉煸出油，成品不会太腻。"
  },
  {
    name: "宫保鸡丁",
    tags: ["鸡肉", "重口"],
    ingredients: ["鸡胸肉 250 克", "黄瓜 半根", "花生米 一把", "干辣椒 4 个", "生抽 1 汤匙", "醋 1 茶匙", "糖 1 茶匙"],
    steps: ["鸡丁腌一下，黄瓜切丁，花生米备好。", "调碗汁：生抽、醋、糖、少量淀粉和水。", "先炒鸡丁至变色。", "爆香干辣椒后回锅鸡丁。", "下黄瓜和花生，倒汁收匀。"],
    tips: "花生最后放，保持酥脆。"
  },
  {
    name: "辣炒腐竹",
    tags: ["素菜", "重口"],
    ingredients: ["腐竹 150 克", "青椒 1 个", "小米椒 2 个", "蒜 3 瓣", "生抽 1 汤匙"],
    steps: ["腐竹提前泡发切段。", "蒜切末，青椒和小米椒切段。", "先炒香蒜末和辣椒。", "下腐竹翻炒。", "加生抽和少量盐，最后放青椒炒匀。"],
    tips: "腐竹泡到没有硬芯再炒，口感才会柔韧。"
  },
  {
    name: "茄辣西",
    tags: ["素菜"],
    ingredients: ["茄子 1 根", "番茄 2 个", "青椒 1 个", "蒜 3 瓣", "盐 适量"],
    steps: ["茄子切块，番茄切块，青椒切块。", "先把茄子炒软。", "加入番茄炒出汁。", "再下青椒翻炒。", "加盐调味即可。"],
    tips: "这道菜吃的是蔬菜本味，调味不用太重。"
  },
  {
    name: "红烧猪蹄",
    tags: ["猪肉"],
    ingredients: ["猪蹄 1 只", "姜 5 片", "生抽 2 汤匙", "老抽 半汤匙", "冰糖 一小把", "料酒 1 汤匙"],
    steps: ["猪蹄焯水后洗净。", "锅里炒糖色，下猪蹄翻匀。", "加入姜片、生抽、老抽、料酒。", "加热水没过，小火炖 1 小时以上。", "最后收汁到黏亮。"],
    tips: "猪蹄要炖够时间，胶质出来才香。"
  },
  {
    name: "辣子鸡丁",
    tags: ["鸡肉", "重口"],
    ingredients: ["鸡腿肉 350 克", "干辣椒 一小把", "花椒 1 茶匙", "蒜 3 瓣", "生抽 1 汤匙"],
    steps: ["鸡腿肉切丁腌一下。", "先把鸡丁煎或炸到表面金黄。", "锅里下干辣椒、花椒和蒜炒香。", "回锅鸡丁翻炒。", "加生抽和少许糖提味。"],
    tips: "鸡腿肉做辣子鸡更嫩，辣椒别炒糊。"
  },
  {
    name: "毛血旺",
    tags: ["猪肉", "重口"],
    ingredients: ["午餐肉 100 克", "鸭血 1 盒", "豆芽 1 把", "毛肚 适量可选", "火锅底料 1 块", "蒜 4 瓣"],
    steps: ["鸭血切片焯水，豆芽烫熟垫底。", "锅里炒香火锅底料和蒜末。", "加水煮开后放午餐肉和鸭血。", "再下毛肚等易熟食材。", "倒入大碗，可泼热油和辣椒面增香。"],
    tips: "这道菜可以做家常简化版，主打麻辣鲜香。"
  },
  {
    name: "酱香鸡蛋",
    tags: ["素菜"],
    ingredients: ["鸡蛋 4 个", "蒜 3 瓣", "黄豆酱 1 汤匙", "生抽 1 茶匙", "糖 少许"],
    steps: ["鸡蛋煮熟剥壳，对半切开或划刀。", "锅里少油把鸡蛋煎出一点金边。", "炒香蒜末和黄豆酱。", "加少许生抽、糖和半碗水。", "放鸡蛋焖几分钟收汁即可。"],
    tips: "鸡蛋表面先煎一下，酱汁更容易挂住。"
  },
  {
    name: "蒜蓉大虾",
    tags: ["海鲜"],
    ingredients: ["大虾 12 只", "蒜 8 瓣", "粉丝 1 小把可选", "生抽 1 汤匙", "料酒 1 茶匙"],
    steps: ["虾开背去虾线，蒜剁蓉。", "粉丝泡软铺底，可省略。", "虾摆盘，铺上蒜蓉。", "淋少许生抽和料酒。", "蒸 6 到 8 分钟后撒葱花，浇热油。"],
    tips: "蒜蓉可分生熟两部分拌在一起，香气更丰富。"
  },
  {
    name: "水煮肉片",
    tags: ["猪肉", "重口"],
    ingredients: ["里脊肉 250 克", "豆芽 1 把", "生菜 一把", "火锅底料 1 小块", "蒜 4 瓣", "淀粉 1 茶匙"],
    steps: ["肉片加料酒、盐、淀粉抓匀。", "豆芽和生菜焯熟垫底。", "锅里炒香底料和蒜末，加水煮开。", "下肉片轻轻划散。", "煮熟后倒入碗中，可撒辣椒面再泼热油。"],
    tips: "肉片不要煮太久，不然会发柴。"
  },
  {
    name: "牛肉娃娃菜",
    tags: ["牛羊肉"],
    ingredients: ["牛肉片 200 克", "娃娃菜 2 颗", "蒜 3 瓣", "蚝油 1 茶匙", "黑胡椒 少许"],
    steps: ["牛肉片简单腌一下，娃娃菜切段。", "先炒牛肉变色盛出。", "锅里炒香蒜末，下娃娃菜。", "娃娃菜变软后回锅牛肉。", "加蚝油和黑胡椒翻匀。"],
    tips: "牛肉要快炒，娃娃菜会带一点自然甜味。"
  },
  {
    name: "孜然牛肉",
    tags: ["牛羊肉", "重口"],
    ingredients: ["牛肉 250 克", "洋葱 半个", "孜然粉 1 茶匙", "辣椒粉 少许", "生抽 1 汤匙"],
    steps: ["牛肉切片腌一下，洋葱切丝。", "先炒牛肉到变色。", "下洋葱翻炒。", "撒孜然粉、辣椒粉和生抽。", "快速翻匀即可。"],
    tips: "这道菜火候要快，避免牛肉出水过多。"
  },
  {
    name: "孜然羊肉",
    tags: ["牛羊肉", "重口"],
    ingredients: ["羊肉片 250 克", "洋葱 半个", "孜然粒 1 茶匙", "辣椒粉 少许", "生抽 1 茶匙"],
    steps: ["羊肉片解冻沥水，洋葱切丝。", "锅里大火先炒羊肉。", "待羊肉出香后下洋葱。", "撒孜然粒、辣椒粉和少许生抽。", "翻匀出锅。"],
    tips: "羊肉不宜久炒，久了口感会老。"
  },
  {
    name: "葱烧鸡",
    tags: ["鸡肉"],
    ingredients: ["鸡腿肉 300 克", "大葱 2 根", "姜 3 片", "生抽 1 汤匙", "蚝油 1 茶匙"],
    steps: ["鸡腿肉切块，大葱切段。", "先煎鸡腿肉到表面金黄。", "下姜片和大葱段炒香。", "加生抽和蚝油调味。", "焖 3 分钟收汁即可。"],
    tips: "大葱量可以多一点，香味会更明显。"
  },
  {
    name: "小鸡炖蘑菇",
    tags: ["鸡肉"],
    ingredients: ["鸡块 500 克", "干蘑菇 一把", "姜 4 片", "生抽 2 汤匙", "料酒 1 汤匙"],
    steps: ["蘑菇提前泡发，鸡块焯水。", "锅里炒香姜片，下鸡块翻炒。", "加料酒、生抽和蘑菇。", "倒入热水炖 30 分钟。", "收汁到汤汁浓郁即可。"],
    tips: "泡蘑菇的水过滤后可以倒进去一起炖，味道更香。"
  },
  {
    name: "糖醋排骨",
    tags: ["猪肉"],
    ingredients: ["排骨 500 克", "料酒 1 汤匙", "生抽 1 汤匙", "白醋 2 汤匙", "糖 2 汤匙", "熟芝麻 少许"],
    steps: ["排骨焯水后沥干。", "锅里把排骨煎到表面微黄。", "加入料酒、生抽、醋、糖和适量水。", "中小火焖 30 分钟。", "最后收浓汁，撒芝麻。"],
    tips: "糖醋排骨的酸甜要明显一些，收汁时颜色会很漂亮。"
  },
  {
    name: "麻辣香锅",
    tags: ["重口"],
    ingredients: ["喜欢的丸子和肉类 300 克", "藕片 适量", "土豆片 适量", "花菜 适量", "火锅底料 1 块", "蒜 4 瓣"],
    steps: ["所有配菜分批焯熟备用。", "锅里炒香蒜末和火锅底料。", "先下不易入味的食材。", "再下肉类和其他菜翻炒。", "最后撒芝麻和香菜即可。"],
    tips: "香锅最适合清冰箱，先焯后炒会更高效。"
  },
  {
    name: "黄瓜鸡蛋炒火腿片",
    tags: ["猪肉"],
    ingredients: ["黄瓜 1 根", "鸡蛋 2 个", "火腿片 100 克", "蒜 2 瓣", "盐 适量"],
    steps: ["黄瓜切片，鸡蛋打散，火腿切片。", "先炒鸡蛋盛出。", "再炒火腿和蒜末。", "下黄瓜翻炒。", "回锅鸡蛋，加盐调味即可。"],
    tips: "黄瓜断生就好，保持清脆更好吃。"
  },
  {
    name: "土豆炒腊肠",
    tags: ["猪肉"],
    ingredients: ["土豆 2 个", "腊肠 1 根", "青椒 半个", "蒜 2 瓣", "盐 少许"],
    steps: ["土豆切片泡水，腊肠切片。", "先炒腊肠出油。", "下蒜末和土豆片翻炒。", "快熟时加入青椒。", "少量盐调味后出锅。"],
    tips: "土豆片尽量切薄一点，口感更好。"
  },
  {
    name: "话梅鸡翅",
    tags: ["鸡肉"],
    ingredients: ["鸡翅中 8 个", "话梅 5 颗", "生抽 1 汤匙", "料酒 1 汤匙", "冰糖 少许"],
    steps: ["鸡翅煎到表面微黄。", "加入生抽、料酒、话梅和少量水。", "小火焖 12 分钟。", "加入少许冰糖提味。", "大火收汁裹匀即可。"],
    tips: "话梅会带一点果酸和回甘，很适合鸡翅。"
  }
];

const resultEl = document.getElementById("result");
const resultMetaEl = document.getElementById("resultMeta");
const pickBtn = document.getElementById("pickBtn");
const rerollBtn = document.getElementById("rerollBtn");
const copyBtn = document.getElementById("copyBtn");
const menuListEl = document.getElementById("menuList");
const countEl = document.getElementById("count");
const historyListEl = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const filtersEl = document.getElementById("filters");
const avoidRecentCheckbox = document.getElementById("avoidRecentCheckbox");
const toggleMenuBtn = document.getElementById("toggleMenuBtn");
const template = document.getElementById("menuItemTemplate");
const filterTemplate = document.getElementById("filterTemplate");
const recipeEmptyEl = document.getElementById("recipeEmpty");
const recipePanelEl = document.getElementById("recipePanel");
const recipeServingsEl = document.getElementById("recipeServings");
const recipeTitleEl = document.getElementById("recipeTitle");
const recipeTagsEl = document.getElementById("recipeTags");
const ingredientsListEl = document.getElementById("ingredientsList");
const stepsListEl = document.getElementById("stepsList");
const recipeTipsEl = document.getElementById("recipeTips");

const HISTORY_KEY = "dish-picker-history";
const MAX_HISTORY = 8;
const RECENT_AVOID_COUNT = 3;
const filters = ["全部", "素菜", "鸡肉", "猪肉", "牛羊肉", "海鲜", "重口"];

let currentDish = "";
let rollingTimer = null;
let history = loadHistory();
let activeFilter = "全部";
let menuExpanded = false;

function renderMenu() {
  const fragment = document.createDocumentFragment();

  dishes.forEach((dish) => {
    const item = template.content.firstElementChild.cloneNode(true);
    item.textContent = dish.name;
    item.dataset.dish = dish.name;
    item.addEventListener("click", () => {
      currentDish = dish.name;
      resultEl.textContent = dish.name;
      resultEl.classList.remove("is-rolling");
      resultMetaEl.textContent = `${dish.tags.join(" / ")} · 已打开菜谱`;
      highlightDish(dish.name);
      renderRecipe(dish);
    });
    fragment.appendChild(item);
  });

  menuListEl.innerHTML = "";
  menuListEl.appendChild(fragment);
  updateMenuVisibility();
}

function renderFilters() {
  const fragment = document.createDocumentFragment();

  filters.forEach((filterName) => {
    const chip = filterTemplate.content.firstElementChild.cloneNode(true);
    chip.textContent = filterName;
    chip.dataset.filter = filterName;
    chip.classList.toggle("active", filterName === activeFilter);
    chip.addEventListener("click", () => {
      activeFilter = filterName;
      renderFilters();
      updateMenuVisibility();
      syncResultMeta();
    });
    fragment.appendChild(chip);
  });

  filtersEl.innerHTML = "";
  filtersEl.appendChild(fragment);
}

function renderHistory() {
  historyListEl.innerHTML = "";

  if (history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "还没抽过，今天第一道菜等你来定。";
    historyListEl.appendChild(empty);
    return;
  }

  history.forEach((dish, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${dish}`;
    historyListEl.appendChild(li);
  });
}

function loadHistory() {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function highlightDish(dish) {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.dish === dish);
  });
}

function getFilteredDishes() {
  let list = dishes;

  if (activeFilter !== "全部") {
    list = list.filter((dish) => dish.tags.includes(activeFilter));
  }

  if (avoidRecentCheckbox.checked) {
    const recentSet = new Set(history.slice(0, RECENT_AVOID_COUNT));
    const trimmed = list.filter((dish) => !recentSet.has(dish.name));
    if (trimmed.length > 0) {
      list = trimmed;
    }
  }

  return list;
}

function updateMenuVisibility() {
  const filteredNames = new Set(getFilteredDishes().map((dish) => dish.name));

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("is-hidden", !filteredNames.has(item.dataset.dish));
  });

  countEl.textContent = `${filteredNames.size} / ${dishes.length} 道菜`;
  menuListEl.classList.toggle("is-collapsed", !menuExpanded);
  toggleMenuBtn.textContent = menuExpanded ? "收起菜单" : "展开全部菜单";
}

function syncResultMeta() {
  if (currentDish) {
    return;
  }

  const pool = getFilteredDishes();
  const filterText = activeFilter === "全部" ? "全部菜单" : `${activeFilter}分类`;
  resultMetaEl.textContent = `${filterText}可选 ${pool.length} 道菜${avoidRecentCheckbox.checked ? "，已尽量避开最近 3 次" : ""}。`;
}

function drawDish() {
  const pool = getFilteredDishes();
  if (pool.length === 0) {
    return null;
  }

  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

function renderRecipe(dish) {
  recipeEmptyEl.classList.add("hidden");
  recipePanelEl.classList.remove("hidden");
  recipeTitleEl.textContent = dish.name;
  recipeServingsEl.textContent = "默认 2 人份";
  recipeTipsEl.textContent = dish.tips;

  recipeTagsEl.innerHTML = "";
  dish.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "recipe-tag";
    chip.textContent = tag;
    recipeTagsEl.appendChild(chip);
  });

  ingredientsListEl.innerHTML = "";
  dish.ingredients.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsListEl.appendChild(li);
  });

  stepsListEl.innerHTML = "";
  dish.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsListEl.appendChild(li);
  });
}

function stopRolling(finalDish) {
  if (rollingTimer) {
    clearInterval(rollingTimer);
    rollingTimer = null;
  }

  resultEl.classList.remove("is-rolling");

  if (!finalDish) {
    currentDish = "";
    resultEl.textContent = "当前筛选下没有可抽的菜";
    resultMetaEl.textContent = "可以切回“全部”，或关闭避开最近 3 次后再试。";
    highlightDish("");
    return;
  }

  currentDish = finalDish.name;
  resultEl.textContent = finalDish.name;
  resultMetaEl.textContent = `${finalDish.tags.join(" / ")}${avoidRecentCheckbox.checked ? " · 已避开最近 3 次" : ""}`;
  highlightDish(finalDish.name);
  renderRecipe(finalDish);

  history = [finalDish.name, ...history.filter((dish) => dish !== finalDish.name)].slice(0, MAX_HISTORY);
  saveHistory();
  renderHistory();
  updateMenuVisibility();
}

function pickDish() {
  pickBtn.disabled = true;
  rerollBtn.disabled = true;
  resultEl.classList.add("is-rolling");

  let ticks = 0;
  rollingTimer = setInterval(() => {
    const previewDish = drawDish();
    resultEl.textContent = previewDish ? previewDish.name : "当前筛选下没有可抽的菜";
    highlightDish(previewDish ? previewDish.name : "");
    ticks += 1;

    if (ticks >= 16) {
      stopRolling(drawDish());
      pickBtn.disabled = false;
      rerollBtn.disabled = false;
    }
  }, 90);
}

async function copyCurrentDish() {
  if (!currentDish) {
    resultEl.textContent = "先抽一道，再复制结果。";
    return;
  }

  try {
    await navigator.clipboard.writeText(currentDish);
    copyBtn.textContent = "已复制";
    window.setTimeout(() => {
      copyBtn.textContent = "复制结果";
    }, 1200);
  } catch {
    copyBtn.textContent = "复制失败";
    window.setTimeout(() => {
      copyBtn.textContent = "复制结果";
    }, 1200);
  }
}

function clearHistory() {
  history = [];
  saveHistory();
  renderHistory();
  updateMenuVisibility();
  currentDish = "";
  syncResultMeta();
}

pickBtn.addEventListener("click", pickDish);
rerollBtn.addEventListener("click", pickDish);
copyBtn.addEventListener("click", copyCurrentDish);
clearHistoryBtn.addEventListener("click", clearHistory);
avoidRecentCheckbox.addEventListener("change", () => {
  updateMenuVisibility();
  if (!currentDish) {
    syncResultMeta();
  }
});
toggleMenuBtn.addEventListener("click", () => {
  menuExpanded = !menuExpanded;
  updateMenuVisibility();
});

renderMenu();
renderFilters();
renderHistory();
syncResultMeta();
