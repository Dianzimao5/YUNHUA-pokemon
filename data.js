// data.js
const typeColors = {
  "normal": "#A8A878",
  "fire": "#F08030",
  "water": "#6890F0",
  "grass": "#78C850",
  "electric": "#F8D030",
  "ice": "#98D8D8",
  "fighting": "#C03028",
  "poison": "#A040A0",
  "ground": "#E0C068",
  "flying": "#A890F0",
  "psychic": "#F85888",
  "bug": "#A8B820",
  "rock": "#B8A038",
  "ghost": "#705898",
  "dragon": "#7038F8",
  "dark": "#705848",
  "steel": "#B8B8D0",
  "fairy": "#EE99AC"
};

const pokemonData = {
  "001": {
    "id": "001",
    "name": "竹芽仔",
    "nameEn": "Pandling",
    "dexEntry": {
      "description": "云华地区最受欢迎的宝可梦之一！这个圆滚滚的小家伙总是抱着一根竹笋，就像人类小孩抱着心爱的玩具。有趣的是，它从不会吃掉自己抱着的那根竹笋，反而会认真地给它浇水。",
      "category": "竹苗宝可梦",
      "types": [
        "grass"
      ],
      "height": "0.4",
      "weight": "6.5"
    },
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 48,
      "spAtk": 45,
      "spDef": 55,
      "speed": 60,
      "total": 318
    },
    "abilities": {
      "normal": [
        "叶绿素"
      ],
      "hidden": {
        "name": "培育",
        "description": "使草系技能威力提升20%"
      }
    },
    "features": [
      "圆滚滚的熊猫幼崽",
      "耳朵尖端和四肢末端呈浅绿色",
      "背部有三片竹叶，会随心情摆动",
      "总是抱着一根新鲜的竹笋"
    ],
    "moves": {
      "initial": [
        {
          "name": "撞击",
          "type": "normal",
          "category": "physical",
          "power": 40,
          "accuracy": 100,
          "pp": 35,
          "effect": "无特殊效果",
          "description": "用整个身体撞击对手进行攻击。"
        },
        {
          "name": "叫声",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 40,
          "effect": "降低对手攻击一级",
          "description": "发出响亮的叫声降低对手的攻击力。"
        }
      ],
      "levelUp": [
        {
          "level": 5,
          "name": "吸取",
          "type": "grass",
          "category": "special",
          "power": 20,
          "accuracy": 100,
          "pp": 25,
          "effect": "吸收伤害的50%回复自身HP",
          "description": "吸取对手的能量，一部分转化为自己的体力。"
        },
        {
          "level": 8,
          "name": "竹叶斩",
          "type": "grass",
          "category": "physical",
          "power": 45,
          "accuracy": 95,
          "pp": 25,
          "effect": "无特殊效果",
          "description": "用锋利的竹叶进行切斩攻击。"
        },
        {
          "level": 10,
          "name": "光合作用",
          "type": "grass",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 5,
          "effect": "回复最大HP的一半；晴天下回复2/3",
          "description": "吸收阳光来恢复体力。在大晴天时效果更好。"
        },
        {
          "level": 12,
          "name": "生长",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "提升攻击和特攻各一级；晴天下提升两级",
          "description": "使身体快速成长，提升攻击力和特攻。"
        },
        {
          "level": 15,
          "name": "飞叶快刀",
          "type": "grass",
          "category": "physical",
          "power": 55,
          "accuracy": 95,
          "pp": 25,
          "effect": "高要害率",
          "description": "发射锋利的叶子进行攻击。容易击中要害。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "001",
        "name": "竹芽仔"
      },
      "next": {
        "id": "002",
        "name": "竹武童",
        "level": 16,
        "condition": "达到16级"
      }
    },
    "habitat": {
      "description": "早晨喜欢在竹林中翻滚，用露水给自己洗脸。特别喜欢和同伴玩'竹叶转转看'的游戏，就是抱着竹笋原地转圈，看谁能转得更久不倒。",
      "locations": [
        "竹林深处",
        "山间草地",
        "古朴庭院"
      ],
      "rarity": "在竹林地区较为常见",
      "warning": "千万不要试图抢走它抱着的竹笋！它会很伤心，甚至可能哭上一整天。"
    },
    "training": {
      "tips": [
        "非常容易饲养，只需要保证有充足的阳光和水分",
        "特别喜欢在下雨天训练，这时它的学习能力会显著提高",
        "建议准备多根竹笋，它们会把竹笋当作心爱的玩具",
        "如果它开心，背后的竹叶会轻轻摇摆"
      ]
    },
    "trivia": [
      "会用竹叶给受伤的小宝可梦遮荫",
      "有时会模仿训练家的动作，但因为太胖总是会摔倒",
      "最喜欢的游戏是躲在竹林里玩捉迷藏"
    ]
  },
  "002": {
    "id": "002",
    "name": "竹武童",
    "nameEn": "Pandojo",
    "dexEntry": {
      "description": "竹林中总能看到它手持竹棍，认真练习武艺的身影。这位热血的少年会把背后的竹叶当作标靶来练习精准度，不过失手打歪时，总会害羞地四处张望，确认有没有人看见。虽然竹武童看起来很酷，但其实内心还保留着竹芽仔的顽皮，经常偷偷用竹棍去戳其他宝可梦的屁股，然后装作若无其事的样子。",
      "category": "竹艺宝可梦",
      "types": [
        "grass"
      ],
      "height": "1.1",
      "weight": "25.0"
    },
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 65,
      "spAtk": 55,
      "spDef": 70,
      "speed": 70,
      "total": 405
    },
    "abilities": {
      "normal": [
        "叶绿素"
      ],
      "hidden": {
        "name": "培育",
        "description": "使草系技能威力提升20%"
      }
    },
    "features": [
      "站立姿态的少年熊猫",
      "背部的三片竹叶发育成小型竹林，呈扇形排列",
      "双手能熟练使用竹棍作为武器，战斗时会从背后竹林抽取",
      "耳朵尖端呈现深绿色，部分关节处有竹节状的花纹",
      "头顶的白色毛发生长，扎成一个武者发髻"
    ],
    "moves": {
      "initial": [
        {
          "name": "竹杖功",
          "type": "grass",
          "category": "physical",
          "power": 70,
          "accuracy": 100,
          "pp": 15,
          "effect": "10%的几率降低对手防御一级",
          "description": "使用竹杖进行精准打击。可能降低对手的防御力。"
        }
      ],
      "levelUp": [
        {
          "level": 18,
          "name": "燕返",
          "type": "flying",
          "category": "physical",
          "power": 60,
          "accuracy": 100,
          "pp": 20,
          "effect": "必定命中",
          "description": "以迅捷的身手进行攻击。这个技能必定会命中。"
        },
        {
          "level": 20,
          "name": "竹林缠绕",
          "type": "grass",
          "category": "status",
          "power": null,
          "accuracy": 85,
          "pp": 20,
          "effect": "束缚对手2-5回合，每回合损失最大HP的1/8",
          "description": "用竹子缠绕对手进行束缚。每回合都会造成伤害。"
        },
        {
          "level": 23,
          "name": "健身",
          "type": "fighting",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "提升攻击和防御各一级",
          "description": "锻炼身体，提升攻击力和防御力。"
        },
        {
          "level": 25,
          "name": "能量球",
          "type": "grass",
          "category": "special",
          "power": 90,
          "accuracy": 100,
          "pp": 10,
          "effect": "10%几率降低对手特防一级",
          "description": "发射蕴含自然能量的球体。可能降低对手的特防。"
        },
        {
          "level": 28,
          "name": "劈开",
          "type": "normal",
          "category": "physical",
          "power": 70,
          "accuracy": 100,
          "pp": 20,
          "effect": "无特殊效果",
          "description": "用锋利的前爪或武器劈砍对手。"
        },
        {
          "level": 32,
          "name": "守住",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 10,
          "effect": "完全防御这一回合的攻击；连续使用成功率降低",
          "description": "防御一切攻击。连续使用会降低成功率。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "002",
        "name": "竹武童"
      },
      "next": {
        "id": "003",
        "name": "竹林大师",
        "level": 36,
        "condition": "达到36级"
      }
    },
    "habitat": {
      "description": "每天清晨都会准时打坐冥想，但经常会因为听到树果掉落的声音而分心。特别热衷于收集各种竹棍，认为不同的竹棍会带来不同的好运。晚上会偷偷给在竹林里迷路的小宝可梦指路，但被发现时就会害羞地躲起来。",
      "locations": [
        "竹林深处",
        "武馆周围",
        "古朴庭院"
      ],
      "rarity": "较为少见，通常在晨练时才能遇到",
      "warning": "不要打扰它练武！它会害羞到连续失误，然后躲进竹林里好几天不出来。"
    },
    "training": {
      "tips": [
        "需要定期更换竹棍，它会把用旧的竹棍郑重地埋葬在竹林里",
        "最喜欢和训练家一起晨练，这时它的学习效率最高",
        "要准备充足的竹子，它会在休息时编织竹篮送给训练家",
        "表扬它时要适度，太过热情会让它害羞地把头藏在竹叶后面"
      ]
    },
    "trivia": [
      "经常在月光下练习武术，但其实是在跳舞",
      "会用竹叶为小朋友编织竹帽，但总是大小不合适",
      "最喜欢下雨天练功，因为能顺便给竹子浇水",
      "有时会故意摆出帅气的姿势，但被人看到就会立刻转身假装在练功"
    ]
  },
  "003": {
    "id": "003",
    "name": "竹林大师",
    "nameEn": "Bamboanda",
    "dexEntry": {
      "description": "当晨雾笼罩竹林时，你或许能看到它盘坐在晨光中冥想的身影。这位竹林的守护者不仅精通武艺，更是一位智者。传说它能听懂竹子的低语，了解竹林中每一个生命的心声。虽然看起来威严庄重，但偶尔也会背着徒弟们偷偷溜去竹林深处打滚，重温幼年时的快乐时光。毕竟，就算是大师，也曾是调皮的竹芽仔呀！",
      "category": "竹武宝可梦",
      "types": [
        "grass",
        "fighting"
      ],
      "height": "2.0",
      "weight": "95.5"
    },
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "spAtk": 75,
      "spDef": 95,
      "speed": 85,
      "total": 530
    },
    "abilities": {
      "normal": [
        "叶绿素",
        "气场浪涌"
      ],
      "hidden": {
        "name": "培育",
        "description": "使草系技能威力提升20%"
      }
    },
    "features": [
      "威武庄严的成年熊猫，站姿挺拔，有武者风范",
      "战斗时背后会环绕一圈飘动的竹林虚影，形成气场",
      "手臂和腿部的肌肉线条分明",
      "额头正中央有一片特殊的嫩绿色竹叶印记"
    ],
    "moves": {
      "initial": [
        {
          "name": "竹林九式",
          "type": "fighting",
          "category": "physical",
          "power": 90,
          "accuracy": 100,
          "pp": 10,
          "effect": "30%几率提升使用者攻击和速度各一级",
          "description": "融合竹林武艺精髓的必杀技。可能提升自身能力。"
        }
      ],
      "levelUp": [
        {
          "level": 40,
          "name": "碧竹连环击",
          "type": "grass",
          "category": "physical",
          "power": 25,
          "accuracy": 95,
          "pp": 15,
          "effect": "攻击2-5次，每次命中有20%几率提升防御一级",
          "description": "连续使用竹杖进行快速打击。每次命中都可能提升防御力。"
        },
        {
          "level": 45,
          "name": "下马威",
          "type": "dark",
          "category": "physical",
          "power": 80,
          "accuracy": 100,
          "pp": 10,
          "effect": "在登场的第一回合威力翻倍",
          "description": "气势汹汹的攻击。在战斗开始时效果更好。"
        },
        {
          "level": 50,
          "name": "神秘守护",
          "type": "grass",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 10,
          "effect": "一回合内减少受到的特殊伤害",
          "description": "展开神秘的防护罩减少特殊攻击的伤害。"
        },
        {
          "level": 55,
          "name": "真气拳",
          "type": "fighting",
          "category": "physical",
          "power": 85,
          "accuracy": 100,
          "pp": 15,
          "effect": "30%几率提升自身特防一级",
          "description": "凝聚真气的强力一击。可能提升自身特防。"
        },
        {
          "level": 60,
          "name": "青竹风暴",
          "type": "grass",
          "category": "special",
          "power": 95,
          "accuracy": 85,
          "pp": 10,
          "effect": "攻击范围内的所有对手；在草地场地威力提升20%",
          "description": "引发竹叶风暴攻击所有对手。在草地上威力更强。"
        },
        {
          "level": 65,
          "name": "冥想",
          "type": "psychic",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "提升特攻和特防各一级",
          "description": "静心冥想，提升特殊攻击和特殊防御。"
        },
        {
          "level": 70,
          "name": "终极吸取",
          "type": "grass",
          "category": "special",
          "power": 75,
          "accuracy": 100,
          "pp": 10,
          "effect": "吸收伤害的75%回复自身HP",
          "description": "更强力的吸取技能，吸收大量对手的能量。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "003",
        "name": "竹林大师"
      },
      "next": null
    },
    "habitat": {
      "description": "每日清晨会在竹林中教导年轻的宝可梦修行。闲暇时喜欢用竹子制作各种乐器，有时会在月下独自演奏竹笛。下雨天会站在最高的竹子顶端，借助雨水净化心灵。据说它能预知竹林的灾难，会提前疏散生活在那里的宝可梦。",
      "locations": [
        "千年竹林",
        "古武馆",
        "山峰之巅"
      ],
      "rarity": "极其稀有，据说每片竹林只会有一位竹林大师",
      "warning": "请勿贸然挑战！它不会拒绝任何挑战，但被打败的训练家需要负责照料竹林一个月。"
    },
    "training": {
      "tips": [
        "每天清晨必须陪它打坐冥想，这是建立信任的关键",
        "它会要求训练家先照顾好一片小竹林，才会听从指挥",
        "战斗时要注意保护周围的竹子，否则它会很不高兴",
        "学会新招式后，总要找个安静的地方独自练习到完美"
      ]
    },
    "trivia": [
      "会用竹子编织摇篮，照顾生病的小宝可梦",
      "虽然很强大，但看到竹笋时还是会像幼年时一样双眼放光",
      "据说它知道一百零八种用竹子制作乐器的方法",
      "有时会偷偷模仿自己徒弟们的样子，觉得很有趣"
    ]
  },
  "004": {
    "id": "004",
    "name": "虎崽焰",
    "nameEn": "Cubiger",
    "dexEntry": {
      "description": "在云华地区的山林间，时常能看到一团雪白的小火球在欢快地跳跃。那就是活泼好动的虎崽焰！这个小家伙虽然想表现得威风凛凛，但每次试图发出震慑性的吼叫时，却总是可爱的“喵呜”声。尽管它现在看起来圆滚滚的像个毛球，但那额头上的“王”字火焰印记昭示着它与生俱来的王者血统。",
      "category": "幼虎宝可梦",
      "types": [
        "fire"
      ],
      "height": "0.5",
      "weight": "9.8"
    },
    "stats": {
      "hp": 45,
      "attack": 70,
      "defense": 45,
      "spAtk": 55,
      "spDef": 45,
      "speed": 58,
      "total": 318
    },
    "abilities": {
      "normal": [
        "猛火"
      ],
      "hidden": {
        "name": "威仪",
        "description": "首次登场时降低对手攻击"
      }
    },
    "features": [
      "雪白毛色的虎形幼崽，体态圆润可爱",
      "额头中央有朱红色的“王”字火焰印记",
      "尾巴尖端呈现火焰形状，会随情绪闪烁",
      "四肢和腹部有淡金色的条纹花纹",
      "眼睛是琥珀色，瞳孔在兴奋时会变成火焰形状",
      "耳朵尖端带有红色绒毛"
    ],
    "moves": {
      "initial": [
        {
          "name": "叫声",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 40,
          "effect": "降低对手攻击一级",
          "description": "用响亮的叫声让对手丧失战意，从而降低攻击力。"
        },
        {
          "name": "抓",
          "type": "normal",
          "category": "physical",
          "power": 40,
          "accuracy": 100,
          "pp": 35,
          "effect": "无特殊效果",
          "description": "用锋利的爪子抓对手。"
        }
      ],
      "levelUp": [
        {
          "level": 5,
          "name": "火花",
          "type": "fire",
          "category": "special",
          "power": 40,
          "accuracy": 100,
          "pp": 25,
          "effect": "10%几率造成烧伤",
          "description": "喷射小型火花攻击对手。可能使对手陷入烧伤状态。"
        },
        {
          "level": 6,
          "name": "虎啸",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 95,
          "pp": 20,
          "effect": "降低对手速度一级",
          "description": "发出震慑性的吼叫，让对手因为害怕而速度降低。"
        },
        {
          "level": 8,
          "name": "电光一闪",
          "type": "normal",
          "category": "physical",
          "power": 40,
          "accuracy": 100,
          "pp": 30,
          "effect": "必定先制",
          "description": "以快到几乎看不见的速度攻击对手。必定先制攻击。"
        },
        {
          "level": 10,
          "name": "火焰轮",
          "type": "fire",
          "category": "physical",
          "power": 60,
          "accuracy": 100,
          "pp": 25,
          "effect": "10%几率造成烧伤",
          "description": "包裹着火焰进行滚动攻击。可能使对手陷入烧伤状态。"
        },
        {
          "level": 12,
          "name": "煽动",
          "type": "dark",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 20,
          "effect": "使对手混乱",
          "description": "激怒对手使其混乱，无法正常行动。"
        },
        {
          "level": 14,
          "name": "火焰牙",
          "type": "fire",
          "category": "physical",
          "power": 65,
          "accuracy": 95,
          "pp": 15,
          "effect": "10%几率造成烧伤，10%几率使对手畏缩",
          "description": "用燃烧的牙齿咬住对手。可能使对手陷入烧伤状态或畏缩。"
        },
        {
          "level": 16,
          "name": "吓唬",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 20,
          "effect": "降低对手攻击一级",
          "description": "用恐吓的表情吓唬对手，降低其攻击力。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "004",
        "name": "虎崽焰"
      },
      "next": {
        "id": "005",
        "name": "焰虎武",
        "level": 16,
        "condition": "达到16级"
      }
    },
    "habitat": {
      "description": "喜欢在晨曦时分练习捕猎，但常常因为太兴奋而打草惊蛇。在阳光明媚的日子里，会找一处温暖的地方晒太阳，尾巴的火焰会随着呼噜声一闪一闪。特别喜欢和其他幼崽宝可梦玩耍，但有时会因为太过热情把对方吓跑。",
      "locations": [
        "温暖的山林",
        "火山周边的草地",
        "古老的虎庙"
      ],
      "rarity": "在山林里较为常见",
      "warning": "不要被它可爱的外表迷惑，它咬人的时候还是会很疼的！"
    },
    "training": {
      "tips": [
        "特别怕冷，要记得在寒冷天气给它保暖",
        "容易因为过度兴奋而控制不住尾巴的火焰",
        "训练时要准备大量零食，它的干劲和食欲一样旺盛",
        "不要嘲笑它稚嫩的吼叫，会伤害它幼小的自尊心"
      ]
    },
    "trivia": [
      "打喷嚏时会喷出小火花，经常把自己的毛发烧焦",
      "最喜欢追着蒲公英玩，但常常不小心把它们烧掉",
      "睡觉时会把尾巴含在嘴里，像是在吃棒棒糖",
      "试图装凶的样子反而会让人更想逗它玩"
    ]
  },
  "005": {
    "id": "005",
    "name": "焰虎武",
    "nameEn": "Blaziger",
    "dexEntry": {
      "description": "随着实力的增长，虎崽焰进化为了更具威武之势的焰虎武。它的吼叫不再稚嫩，而是充满了力量与震慑力。全身的火焰纹路形成了独特的铠甲状花纹，彰显着它逐渐成熟的战士气质。额头上的“王”字印记扩大，延伸出神秘的火焰纹路，预示着它即将觉醒的王者之力。",
      "category": "斗虎宝可梦",
      "types": [
        "fire"
      ],
      "height": "1.3",
      "weight": "35.5"
    },
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "spAtk": 75,
      "spDef": 60,
      "speed": 60,
      "total": 405
    },
    "abilities": {
      "normal": [
        "猛火"
      ],
      "hidden": {
        "name": "威仪",
        "description": "首次登场时降低对手攻击"
      }
    },
    "features": [
      "体型修长矫健的少年白虎",
      "全身火焰纹路更为显著，形成铠甲般的花纹",
      "背部与四肢关节处有金色护甲状的毛发",
      "尾巴变长且有力，燃烧着稳定的火焰",
      "额头的“王”字印记扩大，并延伸出火焰纹路",
      "獠牙初现，泛着金属般的光泽"
    ],
    "moves": {
      "initial": [
        {
          "name": "焰甲守护",
          "type": "fire",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 15,
          "effect": "提升防御和特防",
          "description": "以火焰之力形成护甲，提升自身的防御能力。"
        }
      ],
      "levelUp": [
        {
          "level": 18,
          "name": "金刚牙",
          "type": "normal",
          "category": "physical",
          "power": 80,
          "accuracy": 90,
          "pp": 15,
          "effect": "10%降低对手防御",
          "description": "用坚硬的牙齿咬住对手。可能降低对手的防御。"
        },
        {
          "level": 20,
          "name": "烈焰践踏",
          "type": "fire",
          "category": "physical",
          "power": 75,
          "accuracy": 100,
          "pp": 20,
          "effect": "20%几率造成烧伤",
          "description": "用燃烧的利爪践踏对手，可能造成烧伤状态。"
        },
        {
          "level": 23,
          "name": "猛虎下山",
          "type": "fire",
          "category": "physical",
          "power": 85,
          "accuracy": 95,
          "pp": 15,
          "effect": "容易击中要害",
          "description": "如猛虎下山般扑向对手，容易击中要害部位。"
        },
        {
          "level": 25,
          "name": "大字爆炎",
          "type": "fire",
          "category": "special",
          "power": 90,
          "accuracy": 100,
          "pp": 15,
          "effect": "30%几率造成烧伤",
          "description": "释放出王字形状的烈焰，威力强大且易造成烧伤。"
        },
        {
          "level": 28,
          "name": "神圣之火",
          "type": "fire",
          "category": "special",
          "power": 100,
          "accuracy": 95,
          "pp": 10,
          "effect": "可能提升使用者特攻",
          "description": "释放出蕴含神圣之力的火焰，可能提升自身特攻。"
        },
        {
          "level": 32,
          "name": "逆鳞",
          "type": "dragon",
          "category": "physical",
          "power": 120,
          "accuracy": 100,
          "pp": 10,
          "effect": "使用后陷入混乱",
          "description": "以无比强大的愤怒力量攻击对手，但之后会陷入混乱。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "005",
        "name": "焰虎武"
      },
      "next": {
        "id": "006",
        "name": "圣焰王虎",
        "level": 36,
        "condition": "达到36级"
      }
    },
    "habitat": {
      "description": "常在山间的古老武馆或寺庙附近修行，追求着更强的力量。天性好战，但有着强烈的荣誉感，从不欺凌弱小。在修行之余，也会默默守护着山林中的其他宝可梦。每当夜幕降临，都能看到它在月光下练习招式，尾巴的火焰映照着周围，如同一位年轻的武者。",
      "locations": [
        "古武馆",
        "山间寺庙",
        "火山峡谷",
        "虎王遗迹"
      ],
      "rarity": "在修行圣地较为常见",
      "warning": "虽然性格变得沉稳，但在战斗时仍会爆发出惊人的战意！"
    },
    "training": {
      "tips": [
        "需要保持规律的训练，否则会变得焦躁不安",
        "适合进行力量与速度的均衡培养",
        "要注意控制它的好战倾向，引导其正确使用力量",
        "在修行时要注意保护周围的环境，避免火焰失控"
      ]
    },
    "trivia": [
      "经常在晨曦时分练习虎步功，但有时会不小心踩出火焰脚印",
      "非常在意自己的吼叫声，经常躲在无人处练习",
      "虽然装作很冷酷，但看到以前的玩伴还是会表现得很开心",
      "特别喜欢收集闪亮的物品，认为这些能让自己看起来更威武"
    ]
  },
  "006": {
    "id": "006",
    "name": "圣焰王虎",
    "nameEn": "Tigempest",
    "dexEntry": {
      "description": "传说中的圣兽之一，据说是上古时期守护云华地区的白虎战神的化身。它全身覆盖着蕴含神圣力量的白金色战甲，口中吐出的白色圣焰能净化一切邪祟。当它展现真正实力时，全身会被神圣的白焰环绕，仿佛来自天界的战神降世，震慑群魔。",
      "category": "天虎宝可梦",
      "types": [
        "fire",
        "steel"
      ],
      "height": "2.2",
      "weight": "115.0"
    },
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 85,
      "spAtk": 90,
      "spDef": 75,
      "speed": 80,
      "total": 530
    },
    "abilities": {
      "normal": [
        "猛火",
        "百炼成钢"
      ],
      "hidden": {
        "name": "虎威",
        "description": "使用火系技能时，有20%几率让对手畏缩"
      }
    },
    "features": [
      "威严霸气的圣兽形态",
      "全身覆盖着精美的古代战甲，甲片呈现白金色",
      "鬃毛如烈焰燃烧，在阳光下熠熠生辉",
      "额头的“王”字化作真实火焰王冠",
      "四爪锋利如钢，缠绕着白色圣焰",
      "尾部火焰形成长鞭，可作为武器挥舞",
      "战斗时全身会被白色火焰环绕"
    ],
    "moves": {
      "initial": [
        {
          "name": "圣虎百啸",
          "type": "fire",
          "category": "special",
          "power": 95,
          "accuracy": 100,
          "pp": 10,
          "effect": "必定造成灼伤，对已灼伤的目标威力提升50%",
          "description": "释放出蕴含神圣之力的虎啸，必定使对手陷入灼伤状态，对已灼伤的对手威力更强。"
        }
      ],
      "levelUp": [
        {
          "level": 40,
          "name": "白虎神焰",
          "type": "fire",
          "category": "physical",
          "power": 100,
          "accuracy": 90,
          "pp": 5,
          "effect": "30%几率提升攻击和速度",
          "description": "释放出白虎战神之力，击中后有几率提升自身的攻击与速度。"
        },
        {
          "level": 45,
          "name": "制裁光砾",
          "type": "steel",
          "category": "special",
          "power": 100,
          "accuracy": 95,
          "pp": 10,
          "effect": "可能降低对手特防",
          "description": "发射锋利的金属光刃，可能降低对手的特防。"
        },
        {
          "level": 50,
          "name": "热风",
          "type": "fire",
          "category": "special",
          "power": 95,
          "accuracy": 90,
          "pp": 10,
          "effect": "有几率提升使用者特攻",
          "description": "释放炽热的旋风攻击对手，可能提升自身特攻。"
        },
        {
          "level": 55,
          "name": "王者之风",
          "type": "steel",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 15,
          "effect": "提升己方全体宝可梦的能力",
          "description": "释放王者威势，提升己方全体宝可梦的各项能力。"
        },
        {
          "level": 60,
          "name": "神圣剑",
          "type": "steel",
          "category": "physical",
          "power": 90,
          "accuracy": 100,
          "pp": 15,
          "effect": "容易击中要害",
          "description": "挥舞神圣之剑进行攻击，容易击中要害部位。"
        },
        {
          "level": 65,
          "name": "闪焰冲锋",
          "type": "fire",
          "category": "physical",
          "power": 120,
          "accuracy": 100,
          "pp": 15,
          "effect": "自身也会受到伤害",
          "description": "包裹着烈焰进行猛烈的冲撞，自身也会受到反作用力的伤害。"
        },
        {
          "level": 70,
          "name": "地火喷发",
          "type": "fire",
          "category": "special",
          "power": 110,
          "accuracy": 95,
          "pp": 5,
          "effect": "30%几率造成烧伤",
          "description": "引发地底烈焰喷发攻击对手，可能造成烧伤状态。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "006",
        "name": "圣焰王虎"
      },
      "next": null
    },
    "habitat": {
      "description": "常年栖息在神圣的山巅或古老的虎王祭坛附近。相传它会在月圆之夜现身，用神圣的白焰净化邪祟。虽然极少在人类面前现身，但据说在云华地区遭遇危难时，就会看到它带领着一群焰虎武守护着这片土地。",
      "locations": [
        "圣山之巅",
        "虎王祭坛",
        "古老神庙"
      ],
      "rarity": "极为稀有，被视为神兽",
      "warning": "拥有毁天灭地的力量，但性情高洁，不轻易对人类显露真身。"
    },
    "training": {
      "tips": [
        "需要极高的驯服资质，一般训练家难以驾驭",
        "要以平等和尊重的态度相处，切勿试图居高临下",
        "训练时需要找到足够开阔的场地，以免其力量造成破坏",
        "若能获得它的认可，将成为最忠诚的伙伴"
      ]
    },
    "trivia": [
      "据说它的白色圣焰能够净化一切邪恶，是正义的象征",
      "每到满月时分，额头的火焰王冠会变得格外璀璨",
      "虽然威严无比，但对曾经的训练家和玩伴依然保持着温柔的一面",
      "传说云华地区的四大神兽之一，代表着西方白虎"
    ]
  },
  "007": {
    "id": "007",
    "name": "锦鲤童",
    "nameEn": "Koiling",
    "dexEntry": {
      "description": "这种可爱的锦鲤宝可梦经常出现在云华地区的河流湖泊中。它优雅的游姿和美丽的花纹让它深受人们喜爱。据说锦鲤童额头上的水滴宝珠会在月光下泛出微光，这被视为吉祥的象征。虽然现在看起来只是一条普通的锦鲤，但它体内蕴含着可能进化为神龙的潜力。",
      "category": "锦鲤宝可梦",
      "types": [
        "water"
      ],
      "height": "0.4",
      "weight": "3.5"
    },
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "spAtk": 70,
      "spDef": 60,
      "speed": 48,
      "total": 318
    },
    "abilities": {
      "normal": [
        "激流"
      ],
      "hidden": {
        "name": "逆流而上",
        "description": "被克制属性攻击时提升特攻"
      }
    },
    "features": [
      "小巧玲珑的锦鲤形态，鳞片呈现珍珠白底色",
      "身上点缀着红、金、黑三色斑纹，排列成祥云图案",
      "头部有类似莲花瓣的鳍，透明晶莹",
      "尾鳍飘逸优雅，像丝绸般轻柔飘动",
      "金色眼睛大而明亮",
      "额头有一个小小的水滴形宝珠凸起"
    ],
    "moves": {
      "initial": [
        {
          "name": "撞击",
          "type": "normal",
          "category": "physical",
          "power": 40,
          "accuracy": 100,
          "pp": 35,
          "effect": "无特殊效果",
          "description": "用身体撞击对手进行攻击。"
        },
        {
          "name": "玩水",
          "type": "water",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 15,
          "effect": "回复少量HP",
          "description": "在水中嬉戏，恢复少量体力。"
        }
      ],
      "levelUp": [
        {
          "level": 5,
          "name": "水枪",
          "type": "water",
          "category": "special",
          "power": 40,
          "accuracy": 100,
          "pp": 25,
          "effect": "无特殊效果",
          "description": "喷射水流攻击对手。"
        },
        {
          "level": 8,
          "name": "迷人",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 20,
          "effect": "降低对手攻击",
          "description": "用可爱的动作魅惑对手，降低其攻击力。"
        },
        {
          "level": 12,
          "name": "水之波动",
          "type": "water",
          "category": "special",
          "power": 60,
          "accuracy": 100,
          "pp": 20,
          "effect": "20%几率使对手混乱",
          "description": "发射水之波动攻击对手，可能使其混乱。"
        },
        {
          "level": 15,
          "name": "泡沫光线",
          "type": "water",
          "category": "special",
          "power": 65,
          "accuracy": 100,
          "pp": 20,
          "effect": "10%几率降低对手速度",
          "description": "发射泡沫光束攻击对手，可能降低其速度。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "007",
        "name": "锦鲤童"
      },
      "next": {
        "id": "008",
        "name": "跃鲤士",
        "level": 16,
        "condition": "达到16级"
      }
    },
    "habitat": {
      "description": "主要生活在清澈的浅水湖泊和河流中。它们喜欢成群结队地游动，在阳光下展示自己美丽的鳞片。特别喜欢有莲花的水域，常常在莲叶下嬉戏。夜晚时会被月光吸引，浮到水面观望星空。",
      "locations": [
        "莲花池",
        "浅水湖泊",
        "清澈河流"
      ],
      "rarity": "较为常见",
      "warning": "虽然性格温顺，但不要随意触摸它的额头宝珠。"
    },
    "training": {
      "tips": [
        "保持水质清洁对其成长至关重要",
        "喜欢和同伴一起训练",
        "要经常让它接触月光，有助于开发潜力",
        "不要强迫它们对战，应该循序渐进地培养"
      ]
    },
    "trivia": [
      "传说能在满月时看到它额头的宝珠发光",
      "最喜欢吃莲子，会把莲蓬当玩具顶着玩",
      "睡觉时会藏在莲叶下，只露出小小的鼻子",
      "据说祈福时看到成群的锦鲤童会带来好运"
    ]
  },
  "008": {
    "id": "008",
    "name": "跃鲤士",
    "nameEn": "Carpleap",
    "dexEntry": {
      "description": "跃鲤士优雅的身姿暗示着它体内觉醒的龙之血脉。它的鳞片能折射出彩虹般的光芒，古人常将其视为祥瑞之兆。头顶的莲花鳍不仅是美丽的装饰，更能感知水流的变化。传说它额头的宝珠其实是远古龙族的馈赠，蕴含着神秘的力量。",
      "category": "飞鲤宝可梦",
      "types": [
        "water"
      ],
      "height": "1.0",
      "weight": "15.0"
    },
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 60,
      "spAtk": 90,
      "spDef": 75,
      "speed": 60,
      "total": 405
    },
    "abilities": {
      "normal": [
        "激流"
      ],
      "hidden": {
        "name": "逆流而上",
        "description": "在不利情况下能力会得到提升"
      }
    },
    "features": [
      "体型修长优雅，已具有些许龙的特征",
      "鳞片呈现出彩虹般的光泽，能随光线变化色彩",
      "头部的莲花鳍更大，形成冠状装饰",
      "背鳍和胸鳍更发达，能短暂滑翔",
      "全身祥云纹路隐约有金光流动",
      "额头的宝珠变大，散发出淡淡的蓝光"
    ],
    "moves": {
      "initial": [
        {
          "name": "飞龙踏浪",
          "type": "water",
          "category": "special",
          "power": 85,
          "accuracy": 100,
          "pp": 15,
          "effect": "有30%几率提升特攻",
          "description": "借助水流的力量腾空而起，以优雅的姿态发动攻击，可能提升自身特攻。"
        }
      ],
      "levelUp": [
        {
          "level": 18,
          "name": "水流喷射",
          "type": "water",
          "category": "special",
          "power": 40,
          "accuracy": 100,
          "pp": 20,
          "effect": "必定先制",
          "description": "以迅捷的速度喷射水流进行攻击。必定先制。"
        },
        {
          "level": 20,
          "name": "神圣之水",
          "type": "water",
          "category": "special",
          "power": 75,
          "accuracy": 95,
          "pp": 15,
          "effect": "可能提升自身特攻",
          "description": "释放出蕴含神圣之力的水流，可能提升自身特攻。"
        },
        {
          "level": 23,
          "name": "雨天舞",
          "type": "water",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 10,
          "effect": "召唤雨天，提升速度",
          "description": "跳起优美的舞蹈召唤雨水，同时提升自身速度。"
        },
        {
          "level": 25,
          "name": "盘龙升天",
          "type": "water",
          "category": "special",
          "power": 90,
          "accuracy": 95,
          "pp": 10,
          "effect": "威力随着连续使用增加",
          "description": "像传说中的神龙一般升空盘旋，每次连续使用威力都会提升。"
        },
        {
          "level": 28,
          "name": "水流爆裂",
          "type": "water",
          "category": "special",
          "power": 110,
          "accuracy": 85,
          "pp": 5,
          "effect": "可能降低对手特防",
          "description": "凝聚强大的水压进行爆发性攻击，可能降低对手特防。"
        },
        {
          "level": 32,
          "name": "龙之舞",
          "type": "dragon",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 20,
          "effect": "提升攻击和速度",
          "description": "跳起神秘的舞蹈，提升攻击力和速度。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "008",
        "name": "跃鲤士"
      },
      "next": {
        "id": "009",
        "name": "御龙锦帝",
        "level": 36,
        "condition": "达到36级"
      }
    },
    "habitat": {
      "description": "常出现在清澈的江河湖泊中，特别是有瀑布的地方。它们喜欢在月光下跃出水面练习飞行，形成美丽的彩虹水帘。当地居民相信，能看到跃鲤士群舞的人会得到祝福。它们通常生活在水域较深的地方，但在晴朗的日子里会浮到水面晒太阳。",
      "locations": [
        "深潭瀑布",
        "月光下的湖泊",
        "前往海洋的清澈河流"
      ],
      "rarity": "在有瀑布的水域较为常见",
      "warning": "虽然性情温和，但受惊时会激起强大的水流，需要小心靠近。"
    },
    "training": {
      "tips": [
        "要经常让它练习跃出水面，这对它的进化很重要",
        "保持水质清洁是培育的关键",
        "喜欢在月光下活动，建议在夜间进行特训",
        "对食物比较挑剔，最好准备新鲜的水生植物"
      ]
    },
    "trivia": [
      "额头的宝珠会随着心情变化颜色",
      "最喜欢在雨天跃出水面，借着雨滴滑翔",
      "能准确预知水域的天气变化",
      "传说能在月圆之夜看到它们群体升天的景象预示着好运"
    ]
  },
  "009": {
    "id": "009",
    "name": "御龙锦帝",
    "nameEn": "Dragoking",
    "dexEntry": {
      "description": "传说中的神兽之一，被视为云华地区的守护神。当锦鲤童完全觉醒龙之血脉后，便会越过龙门，化身为这个威严的东方神龙。它能呼风唤雨，游走于云端之上。据古籍记载，在云华地区遭遇大旱时，御龙锦帝曾显灵降下甘霖，拯救了万民于水火。",
      "category": "龙帝宝可梦",
      "types": [
        "water",
        "dragon"
      ],
      "height": "6.5",
      "weight": "235.0"
    },
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 80,
      "spAtk": 115,
      "spDef": 90,
      "speed": 85,
      "total": 535
    },
    "abilities": {
      "normal": [
        "激流",
        "逆鳞觉醒"
      ],
      "hidden": {
        "name": "水行御龙",
        "description": "水系技能追加龙系伤害"
      }
    },
    "features": [
      "威严雄伟的东方龙形态，身躯修长优美",
      "鳞片晶莹剔透，头部装饰华丽，莲花鳍化作龙角，镶嵌金边",
      "背部长有飘逸的鳍翼，能在空中优雅滑行",
      "全身缠绕着流动的水波纹，如同活物",
      "额头的宝珠完全显现，成为明珠状的龙珠",
      "尾部分叉成三股，能掀起巨浪"
    ],
    "moves": {
      "initial": [
        {
          "name": "锦龙玄水诀",
          "type": "water",
          "category": "special",
          "power": 95,
          "accuracy": 100,
          "pp": 10,
          "effect": "50%几率提升特防",
          "description": "召唤神秘的玄水之力进行攻击，可能提升自身的特殊防御。"
        }
      ],
      "levelUp": [
        {
          "level": 40,
          "name": "沧龙破浪",
          "type": "water",
          "category": "special",
          "power": 110,
          "accuracy": 85,
          "pp": 5,
          "effect": "技能命中后改变天气为下雨",
          "description": "召唤远古沧龙之力掀起巨浪，技能命中后会引发降雨。"
        },
        {
          "level": 45,
          "name": "龙星群",
          "type": "dragon",
          "category": "special",
          "power": 130,
          "accuracy": 90,
          "pp": 5,
          "effect": "攻击后自身特攻降低2级",
          "description": "召唤星辰之力发动猛烈攻击，使用后自身特攻大幅下降。"
        },
        {
          "level": 50,
          "name": "水龙弹",
          "type": "dragon",
          "category": "special",
          "power": 85,
          "accuracy": 100,
          "pp": 10,
          "effect": "无特殊效果",
          "description": "发射由水凝聚而成的龙形弹丸进行攻击。"
        },
        {
          "level": 55,
          "name": "神龙摆尾",
          "type": "dragon",
          "category": "physical",
          "power": 100,
          "accuracy": 90,
          "pp": 10,
          "effect": "有几率令对手畏缩",
          "description": "以神龙之威挥动尾巴进行攻击，可能令对手畏缩。"
        },
        {
          "level": 60,
          "name": "暴风雨",
          "type": "water",
          "category": "special",
          "power": 110,
          "accuracy": 70,
          "pp": 10,
          "effect": "30%几率混乱",
          "description": "召唤强大的暴风雨攻击对手，可能使对手混乱。"
        },
        {
          "level": 65,
          "name": "逆鳞",
          "type": "dragon",
          "category": "physical",
          "power": 120,
          "accuracy": 100,
          "pp": 10,
          "effect": "使用后陷入混乱",
          "description": "以无比强大的愤怒力量攻击对手，但之后会陷入混乱。"
        },
        {
          "level": 70,
          "name": "湍流",
          "type": "water",
          "category": "special",
          "power": 110,
          "accuracy": 85,
          "pp": 5,
          "effect": "可能令对手混乱",
          "description": "掀起猛烈的水流攻击对手，可能使对手陷入混乱。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "009",
        "name": "御龙锦帝"
      },
      "next": null
    },
    "habitat": {
      "description": "常年隐居于云端之上，只在特殊时节才会现身。传说它们会在深海龙宫中修炼，掌管着云华地区的风雨。当地区遭遇灾害时，会看到它们在云层中游弋，为民祈福。它们特别钟爱古代祭坛和深邃的龙潭。",
      "locations": [
        "云端祭坛",
        "龙王宫殿",
        "玄水深潭",
        "祥云峰顶"
      ],
      "rarity": "极为稀有，被视为圣兽",
      "warning": "虽为祥瑞之兽，但若被惊扰可能引发暴风雨，需谨慎对待。"
    },
    "training": {
      "tips": [
        "只有得到它认可的训练家才能与其缔结契约",
        "需要在雨天和满月时进行特训来提升默契",
        "战斗时要注意控制它的力量，避免造成自然灾害",
        "最好在水域充足的地方训练，让它能充分发挥实力"
      ]
    },
    "trivia": [
      "据说它的龙珠能映照出人心善恶",
      "喜欢在暴风雨中遨游，但见到彩虹会特别开心",
      "每当祭祀时节，民间都会举行祈雨仪式供奉它",
      "传说云华地区的四大神兽之一，代表着东方青龙"
    ]
  },
  "010": {
    "id": "010",
    "name": "云雀儿",
    "nameEn": "Cloudaril",
    "dexEntry": {
      "description": "云华地区常见的小型飞行宝可梦。它优雅的飞行姿态让人联想到流云，飞过时会在空中留下淡淡的云痕。清晨时分，它婉转的歌声会随着第一缕阳光传遍整个城镇。",
      "category": "云雀宝可梦",
      "types": [
        "flying",
        "normal"
      ],
      "height": "0.2",
      "weight": "1.8"
    },
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAtk": 50,
      "spDef": 40,
      "speed": 110,
      "total": 320
    },
    "abilities": {
      "normal": [
        "健壮胸肌"
      ],
      "hidden": {
        "name": "飞行恩惠",
        "description": "使飞行系技能必定会心一击"
      }
    },
    "features": [
      "小巧灵动的云雀，全身羽毛呈现淡灰白色",
      "头顶有一簇向后飘逸的羽冠，像流云形状",
      "尾羽轻盈飘逸，飞行时能在空中留下淡淡云痕",
      "翅膀边缘的羽毛略带银色",
      "眼睛是澄澈的天蓝色",
      "脚爪小巧精致，适合在细枝上停留"
    ],
    "moves": {
      "initial": [
        {
          "name": "啄",
          "type": "flying",
          "category": "physical",
          "power": 35,
          "accuracy": 100,
          "pp": 35,
          "effect": "无特殊效果",
          "description": "用尖喙啄击对手进行攻击。"
        },
        {
          "name": "叫声",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 40,
          "effect": "降低对手攻击一级",
          "description": "发出响亮的叫声降低对手的攻击力。"
        }
      ],
      "levelUp": [
        {
          "level": 4,
          "name": "唧唧喳喳",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 20,
          "effect": "降低对手特防一级",
          "description": "发出烦人的叫声，降低对手的特防。"
        },
        {
          "level": 8,
          "name": "翅膀攻击",
          "type": "flying",
          "category": "physical",
          "power": 60,
          "accuracy": 100,
          "pp": 35,
          "effect": "无特殊效果",
          "description": "展开翅膀猛击对手。"
        },
        {
          "level": 10,
          "name": "高速移动",
          "type": "psychic",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 30,
          "effect": "提升速度两级",
          "description": "放松身体肌肉，大幅提升自己的速度。"
        },
        {
          "level": 14,
          "name": "清晨歌声",
          "type": "normal",
          "category": "special",
          "power": 65,
          "accuracy": 95,
          "pp": 20,
          "effect": "有30%概率提升自身特攻",
          "description": "唱出清脆悦耳的晨歌进行攻击，可能会提升自己的特攻。"
        },
        {
          "level": 16,
          "name": "空气利刃",
          "type": "flying",
          "category": "special",
          "power": 60,
          "accuracy": 95,
          "pp": 25,
          "effect": "高要害率",
          "description": "用锋利的风刃切割对手，容易击中要害。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "010",
        "name": "云雀儿"
      },
      "next": {
        "id": "011",
        "name": "彩羽鸟",
        "level": 18,
        "condition": "达到18级"
      }
    },
    "habitat": {
      "description": "喜欢在清晨时分在高处歌唱，它的歌声被认为能带来好运。经常三五成群在城镇上空盘旋，为居民带来美丽的表演。",
      "locations": [
        "城镇屋顶",
        "山间草地",
        "开阔平原"
      ],
      "rarity": "在城镇和草原地区较为常见",
      "warning": "虽然性格温和，但在筑巢季节要避免接近它们的巢穴，否则可能会遭到群体攻击。"
    },
    "training": {
      "tips": [
        "喜欢在高处训练，建议选择开阔的环境",
        "容易和训练家建立感情，会用歌声表达喜悦",
        "训练时要注重速度技能的开发",
        "早晨训练效果最好，此时它们最为活跃"
      ]
    },
    "trivia": [
      "能准确预知天气变化，天气晴朗时唱的歌格外动听",
      "幼年的云雀儿经常会模仿其他宝可梦的叫声来玩耍",
      "在云华地区的传统中，清晨听到云雀儿的歌声被视为美好的一天的开始"
    ]
  },
  "011": {
    "id": "011",
    "name": "彩羽鸟",
    "nameEn": "Colorave",
    "dexEntry": {
      "description": "这种绚丽的鸟类宝可梦总是吸引着训练家的目光。它胸前的彩虹色羽毛会随着心情变化色彩，据说可以通过这些色彩变化预测天气。在晴朗的日子里，彩羽鸟会在高空翱翔，展开美丽的翅膀，让阳光透过羽毛在地面上投射出彩虹般的光影。",
      "category": "彩雀宝可梦",
      "types": [
        "flying",
        "normal"
      ],
      "height": "0.6",
      "weight": "9.0"
    },
    "stats": {
      "hp": 55,
      "attack": 60,
      "defense": 50,
      "spAtk": 65,
      "spDef": 50,
      "speed": 70,
      "total": 350
    },
    "abilities": {
      "normal": [
        "炫彩变换"
      ],
      "hidden": {
        "name": "彩羽守护",
        "description": "降低对手的命中率"
      }
    },
    "features": [
      "绚丽多彩的中型鸟类，主色调为靛蓝色",
      "翅膀上有五彩斑斓的羽毛，排列如孔雀开屏",
      "头部有丰富的冠状装饰羽毛",
      "尾羽呈扇形展开，边缘有金色细边",
      "喙部修长优雅，略微上扬",
      "胸前的彩虹色羽毛会随心情变色"
    ],
    "moves": {
      "initial": [
        {
          "name": "羽毛舞",
          "type": "flying",
          "category": "status",
          "power": null,
          "accuracy": 100,
          "pp": 15,
          "effect": "降低对手攻击两级",
          "description": "挥洒美丽的羽毛，降低对手的攻击力。"
        }
      ],
      "levelUp": [
        {
          "level": 20,
          "name": "彩虹光线",
          "type": "normal",
          "category": "special",
          "power": 65,
          "accuracy": 100,
          "pp": 20,
          "effect": "10%几率混乱对手",
          "description": "发射彩虹色的光束进行攻击。可能使对手混乱。"
        },
        {
          "level": 22,
          "name": "羽栖",
          "type": "flying",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 10,
          "effect": "恢复最大HP的50%",
          "description": "落在安全的地方休息，恢复自己的体力。"
        },
        {
          "level": 25,
          "name": "七彩之舞",
          "type": "flying",
          "category": "special",
          "power": 80,
          "accuracy": 95,
          "pp": 15,
          "effect": "20%几率提升自身特攻",
          "description": "跳起优美的舞蹈并发动攻击。可能提升自己的特攻。"
        },
        {
          "level": 30,
          "name": "空气斩",
          "type": "flying",
          "category": "special",
          "power": 75,
          "accuracy": 95,
          "pp": 15,
          "effect": "高要害率",
          "description": "发射锋利的空气刃进行攻击。容易击中要害。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "011",
        "name": "彩羽鸟"
      },
      "next": {
        "id": "012",
        "name": "锦绣鸟",
        "level": 30,
        "condition": "达到30级"
      }
    },
    "habitat": {
      "description": "喜欢在晴朗的日子里高空飞行，用羽毛在地面投射彩虹。它们经常在山间的开阔地带聚集，举行华丽的歌舞表演。下雨前，它们会收集七彩的花瓣装饰巢穴，等待雨后的彩虹出现。",
      "locations": [
        "高山平原",
        "花海草地",
        "彩虹瀑布"
      ],
      "rarity": "在晴朗天气较常见，雨天难得一见",
      "warning": "请勿在它表演时惊扰它，否则会用彩虹光线反击。"
    },
    "training": {
      "tips": [
        "训练时要注意天气变化，晴天训练效果最好",
        "要准备充足的彩色的物品，它们喜欢收集各种颜色的东西",
        "多让它参加表演可以提升自信",
        "观察胸前羽毛的颜色变化来了解它的心情"
      ]
    },
    "trivia": [
      "会用掉落的羽毛装饰其他宝可梦的巢穴",
      "特别喜欢和云雀儿一起在空中跳舞",
      "据说能看到普通人看不到的彩虹",
      "会收集不同颜色的花朵来装饰自己"
    ]
  },
  "012": {
    "id": "012",
    "name": "锦绣鸟",
    "nameEn": "Embroidrix",
    "dexEntry": {
      "description": "云华地区优雅华贵的飞行宝可梦。它展开的翅膀宛如精美的绣品，每一片羽毛都蕴含着独特的图案。传说锦绣鸟飞过的地方会出现五彩祥云，它们在黄昏时分在云端跳舞的景象被誉为“锦绣天光”。当它施展彩霞幻舞时，整个天空都会被绚丽的光芒笼罩，仿佛置身画卷之中。",
      "category": "锦绣宝可梦",
      "types": [
        "flying",
        "normal"
      ],
      "height": "1.5",
      "weight": "25.5"
    },
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 70,
      "spAtk": 95,
      "spDef": 70,
      "speed": 105,
      "total": 500
    },
    "abilities": {
      "normal": [
        "锦绣织造"
      ],
      "hidden": {
        "name": "彩霞幻化",
        "description": "每次使用技能后随机改变外观和一个技能属性"
      }
    },
    "features": [
      "华贵高雅的大型鸟类，外形似凤凰",
      "全身羽毛如丝绸般光滑，呈现出绚丽的锦绣图案",
      "头冠高耸优雅，装饰羽毛形成五色祥云",
      "尾羽长而飘逸，如同绸缎",
      "胸前的彩虹羽毛形成完整的太阳图案"
    ],
    "moves": {
      "initial": [
        {
          "name": "锦绣天舞",
          "type": "flying",
          "category": "special",
          "power": 90,
          "accuracy": 95,
          "pp": 10,
          "effect": "30%几率混乱对手",
          "description": "展开绚丽的羽翼跳起优雅的舞蹈进行攻击。可能使对手混乱。"
        }
      ],
      "levelUp": [
        {
          "level": 35,
          "name": "彩霞幻舞",
          "type": "flying",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 15,
          "effect": "提升特攻和速度各一级，3回合内改变外观和一个技能属性",
          "description": "施展神秘的舞蹈，提升能力并获得特殊变化。"
        },
        {
          "level": 42,
          "name": "热风",
          "type": "fire",
          "category": "special",
          "power": 95,
          "accuracy": 90,
          "pp": 10,
          "effect": "10%几率造成灼伤",
          "description": "吹出炙热的大风进行攻击。可能使对手陷入灼伤状态。"
        },
        {
          "level": 49,
          "name": "神鸟猛击",
          "type": "flying",
          "category": "physical",
          "power": 120,
          "accuracy": 100,
          "pp": 15,
          "effect": "使用后自己损失最大HP的33%",
          "description": "以惊人的气势撞击对手。自己也会受到伤害。"
        },
        {
          "level": 56,
          "name": "羽毛风暴",
          "type": "flying",
          "category": "special",
          "power": 110,
          "accuracy": 85,
          "pp": 10,
          "effect": "可能命中场上所有对手",
          "description": "掀起由锋利羽毛组成的暴风进行攻击。"
        },
        {
          "level": 63,
          "name": "终极冲击",
          "type": "normal",
          "category": "special",
          "power": 150,
          "accuracy": 90,
          "pp": 5,
          "effect": "使用后必须休息一回合",
          "description": "聚集全身力量发动强大的一击。使用后需要休息。"
        },
        {
          "level": 70,
          "name": "虹彩飞翔",
          "type": "flying",
          "category": "special",
          "power": 100,
          "accuracy": 100,
          "pp": 10,
          "effect": "50%几率提升自身所有能力一级",
          "description": "化作彩虹般的光芒飞翔并攻击。可能大幅提升自己的能力。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "012",
        "name": "锦绣鸟"
      },
      "next": null
    },
    "habitat": {
      "description": "常在云端活动，很少降落到地面。喜欢在晚霞最美的时刻在高空翱翔，用羽毛在天空中绘制出绚丽的图案。它们会选择最高的山峰筑巢，用收集来的七色云彩装饰巢穴。传说看到锦绣鸟在空中跳舞的人会得到好运。",
      "locations": [
        "云端之上",
        "彩霞峰顶",
        "锦绣谷地"
      ],
      "rarity": "极其稀有，据说只在最美的晚霞中才能看到它的身影",
      "warning": "不要打扰它在晚霞中的飞舞表演，它会召唤彩虹风暴作为惩罚。"
    },
    "training": {
      "tips": [
        "需要在开阔的高空进行训练，最好选择晚霞时分",
        "要欣赏它的每一次表演，这能增进感情",
        "准备美丽的装饰品可以提升它的心情",
        "让它有充足的时间打理羽毛，保持最佳状态"
      ]
    },
    "trivia": [
      "能预知天气的变化，会在暴风雨来临前散播讯息",
      "据说它们在月圆之夜会聚集在云端举行盛大的舞会",
      "羽毛脱落后会化作彩虹消散在空气中",
      "最喜欢的事情是用翅膀在云彩上作画"
    ]
  },
  "013": {
    "id": "013",
    "name": "丝宝宝",
    "nameEn": "Silkling",
    "dexEntry": {
      "description": "这种可爱的小宝可梦以吐丝闻名。它会用自己吐出的丝线编织出小小的庇护所，在里面安心地生活。恩多丝宝宝喜欢用丝线装饰树叶和花朵，虽然会给路人带来一些困扰。",
      "category": "吐丝宝可梦",
      "types": [
        "bug"
      ],
      "height": "0.3",
      "weight": "2.8"
    },
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 45,
      "spAtk": 40,
      "spDef": 45,
      "speed": 45,
      "total": 250
    },
    "abilities": {
      "normal": [
        "虫之预感",
        "吐丝"
      ],
      "hidden": {
        "name": "蚕食",
        "description": "进食时恢复更多体力"
      }
    },
    "features": [
      "体型圆润可爱，呈乳白色",
      "身体有细小的环节",
      "头部有两个小触角，蓝色眼睛大而圆润",
      "身体表面有淡淡的珍珠光泽"
    ],
    "moves": {
      "initial": [
        {
          "name": "吐丝",
          "type": "bug",
          "category": "status",
          "power": null,
          "accuracy": 95,
          "pp": 40,
          "effect": "降低对手速度一级",
          "description": "向对手吐出丝线，降低对手的速度。"
        },
        {
          "name": "撞击",
          "type": "normal",
          "category": "physical",
          "power": 40,
          "accuracy": 100,
          "pp": 35,
          "effect": "无特殊效果",
          "description": "用整个身体撞击对手进行攻击。"
        }
      ],
      "levelUp": [
        {
          "level": 4,
          "name": "虫咬",
          "type": "bug",
          "category": "physical",
          "power": 60,
          "accuracy": 100,
          "pp": 20,
          "effect": "无特殊效果",
          "description": "用锋利的牙齿咬住对手进行攻击。"
        },
        {
          "level": 6,
          "name": "保护色",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "提升闪避率一级",
          "description": "通过改变体色来提高自己的闪避率。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "013",
        "name": "丝宝宝"
      },
      "next": {
        "id": "014",
        "name": "绸茧儿",
        "level": 7,
        "condition": "达到7级"
      }
    },
    "habitat": {
      "description": "常在树林的低处活动，喜欢在树叶间编织小巢。它们会在清晨时分吐出最优质的丝线，这时的露水会让丝线格外坚韧。多数丝宝宝会选择在桑树附近群居，互相照应。",
      "locations": [
        "桑树林",
        "花园",
        "森林低层"
      ],
      "rarity": "在有桑树的地方十分常见",
      "warning": "虽然性格温和，但不要破坏它们的丝网，否则会让整群丝宝宝都很伤心。"
    },
    "training": {
      "tips": [
        "要准备充足的新鲜树叶，这是它们最喜欢的食物",
        "保持环境清洁干燥很重要，潮湿会影响它们吐丝",
        "让它们参与装饰工作可以培养感情",
        "注意观察吐出丝线的光泽，这关系到丝宝宝的健康状况"
      ]
    },
    "trivia": [
      "偶尔会因为食用了不同的食物而吐出彩色的丝线",
      "特别喜欢在朋友睡觉时给他们盖上丝织的小被子",
      "会收集漂亮的花瓣装饰自己的巢穴",
      "古时候的人们喜欢用丝宝宝吐出的第一根丝线来制作婴儿的衣服，据说这可以保佑孩子健康成长"
    ]
  },
  "014": {
    "id": "014",
    "name": "绸茧儿",
    "nameEn": "Cocoonyx",
    "dexEntry": {
      "description": "被誉为最美丽的茧状宝可梦。它的茧壳上布满了精致的传统丝绸纹样，仿佛一件天然的艺术品。绸茧儿在进化过程中会不断编织新的丝线来强化自己的防护，这些丝线在阳光下会呈现出瑰丽的珍珠光泽。",
      "category": "丝茧宝可梦",
      "types": [
        "bug"
      ],
      "height": "0.6",
      "weight": "12.5"
    },
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "spAtk": 45,
      "spDef": 85,
      "speed": 15,
      "total": 325
    },
    "abilities": {
      "normal": [
        "蜕皮",
        "绸缎守护"
      ],
      "hidden": {
        "name": "防尘",
        "description": "免疫粉末类技能效果"
      }
    },
    "features": [
      "整体呈现蚕茧形状，通体洁白",
      "表面覆盖着带有珍珠光泽的精致丝线",
      "茧壳上有传统丝绸图案般的纹路",
      "偶尔会微微震动",
      "底部有精巧的支撑结构，能稳固地依附在树枝上"
    ],
    "moves": {
      "initial": [
        {
          "name": "变硬",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 30,
          "effect": "提升防御一级",
          "description": "强化身体，提高自己的防御力。"
        }
      ],
      "levelUp": [
        {
          "level": 10,
          "name": "丝线缠绕",
          "type": "bug",
          "category": "status",
          "power": null,
          "accuracy": 95,
          "pp": 20,
          "effect": "降低对手速度一级，有机会束缚对手",
          "description": "用特殊的丝线缠绕对手，降低速度并可能造成束缚。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "014",
        "name": "绸茧儿"
      },
      "next": {
        "id": "015",
        "name": "锦蛾仙",
        "level": 10,
        "condition": "到达10级"
      }
    },
    "habitat": {
      "description": "常见于桑树的枝干上，它们会选择阳光充足但不太显眼的位置安歇。绸茧儿会释放出特殊的香气来吸引其他虫系宝可梦守护自己。在月圆之夜，它们的茧壳会发出柔和的光芒。",
      "locations": [
        "桑林",
        "花园"
      ],
      "rarity": "在传统养蚕地区很常见",
      "warning": "虽然看起来毫无防备，但它的茧壳极其坚韧，贸然触碰可能会被弹开。"
    },
    "training": {
      "tips": [
        "保持环境安静和温暖对其进化至关重要",
        "不要打扰它的休眠，这是为进化储备能量",
        "定期为它喷洒清水保持茧壳湿润",
        "月圆之夜是观察其进化程度的最佳时机"
      ]
    },
    "trivia": [
      "茧壳的纹路会随着心情变化而改变",
      "有时会散发出令人安心的淡淡香气",
      "月光下的绸茧儿非常美丽"
    ]
  },
  "015": {
    "id": "015",
    "name": "锦蛾仙",
    "nameEn": "Silkmoth",
    "dexEntry": {
      "description": "传说中的丝绸守护者，它的翅膀上织就了千年的丝绸文明图样。它们被视为纺织技艺的守护者，经常在织锦坊周围飞舞，为匠人们带来灵感。据说看到锦蛾仙飞过的人，都能获得编织出稀世珍品的灵感。",
      "category": "锦绣宝可梦",
      "types": [
        "bug",
        "fairy"
      ],
      "height": "1.2",
      "weight": "25.0"
    },
    "stats": {
      "hp": 75,
      "attack": 60,
      "defense": 70,
      "spAtk": 105,
      "spDef": 95,
      "speed": 95,
      "total": 500
    },
    "abilities": {
      "normal": [
        "鳞粉",
        "织锦使者"
      ],
      "hidden": {
        "name": "神秘鳞片",
        "description": "受到攻击时有几率提升特防"
      }
    },
    "features": [
      "形似华丽的蛾子，翅膀上有传统丝绸纹样",
      "主色调为素雅的白色和浅金色",
      "翅膀边缘有精致的丝质流苏纹理",
      "触角弯曲优美，形似古代仕女眉形",
      "飞行时散落的鳞粉闪耀如金"
    ],
    "moves": {
      "initial": [
        {
          "name": "彩粉",
          "type": "bug",
          "category": "special",
          "power": 50,
          "accuracy": 100,
          "pp": 20,
          "effect": "100%几率降低对手特攻一级",
          "description": "散布美丽的鳞粉进行攻击。必定降低对手特攻。"
        }
      ],
      "levelUp": [
        {
          "level": 13,
          "name": "虫之抵抗",
          "type": "bug",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "提升虫系招式威力",
          "description": "提高自身的虫系技能威力。"
        },
        {
          "level": 16,
          "name": "光墙",
          "type": "psychic",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "降低受到的特殊攻击伤害",
          "description": "制造神奇的墙壁减少特殊攻击的伤害。"
        },
        {
          "level": 18,
          "name": "铁壁",
          "type": "steel",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 15,
          "effect": "大幅提升防御",
          "description": "大幅提高自己的防御力。"
        },
        {
          "level": 20,
          "name": "丝绸护盾",
          "type": "bug",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 10,
          "effect": "提升双防各一级",
          "description": "用特殊的丝线织成护盾，提高防御力和特防。"
        },
        {
          "level": 25,
          "name": "守住",
          "type": "normal",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 10,
          "effect": "完全防御这一回合的攻击",
          "description": "防御一切攻击。连续使用会降低成功率。"
        },
        {
          "level": 30,
          "name": "银色旋风",
          "type": "bug",
          "category": "special",
          "power": 60,
          "accuracy": 100,
          "pp": 15,
          "effect": "10%几率提升自身所有能力一级",
          "description": "掀起带有银色鳞粉的旋风。可能提升自己的各项能力。"
        },
        {
          "level": 35,
          "name": "锦绣织造",
          "type": "fairy",
          "category": "special",
          "power": 80,
          "accuracy": 95,
          "pp": 15,
          "effect": "追加虫系伤害",
          "description": "用神秘的力量编织攻击，造成妖精和虫系的复合伤害。"
        },
        {
          "level": 40,
          "name": "蝶舞",
          "type": "bug",
          "category": "status",
          "power": null,
          "accuracy": null,
          "pp": 20,
          "effect": "提升特攻和速度各一级",
          "description": "跳优雅的舞蹈，提升特攻和速度。"
        },
        {
          "level": 45,
          "name": "蛾之舞翼",
          "type": "bug",
          "category": "special",
          "power": 90,
          "accuracy": 100,
          "pp": 10,
          "effect": "必定追加妖精系伤害",
          "description": "展开闪耀的双翼进行攻击，必定造成复合属性伤害。"
        }
      ]
    },
    "evolution": {
      "current": {
        "id": "015",
        "name": "锦蛾仙"
      },
      "next": null
    },
    "habitat": {
      "description": "多在古老的织锦坊和丝绸之乡出没。它们喜欢在在织锦坊上空翩翩起舞，洒落的鳞粉会为织物增添神秘的光泽。据说锦蛾仙居住的地方，纺织技艺都特别发达。",
      "locations": [
        "织锦坊",
        "古老桑林",
        "丝绸之乡"
      ],
      "rarity": "较为稀有",
      "warning": "它们的鳞粉虽然美丽，但不要随意触碰，可能会引起过敏。"
    },
    "training": {
      "tips": [
        "要给它们充足的时间整理羽翅上的纹路",
        "喜欢收集各种织物，可以用来培养感情",
        "让它们参与编织工作能提升默契"
      ]
    },
    "trivia": [
      "据说它们的鳞粉可以织就永不褪色的锦缎",
      "最喜欢在织娘织布时在一旁观看",
      "飞过的地方会留下淡淡的丝绸香气",
      "传说它们是远古丝绸女神的使者"
    ]
  }
};

// 导出变量到全局作用域
window.typeColors = typeColors;
window.pokemonData = pokemonData;