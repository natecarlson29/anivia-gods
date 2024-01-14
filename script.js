const itemsJson = {
    "type": "item",
    "version": "13.23.1",
    "basic": {
        "name": "",
        "rune": {
            "isrune": false,
            "tier": 1,
            "type": "red"
        },
        "gold": {
            "base": 0,
            "total": 0,
            "sell": 0,
            "purchasable": false
        },
        "group": "",
        "description": "",
        "colloq": ";",
        "plaintext": "",
        "consumed": false,
        "stacks": 1,
        "depth": 1,
        "consumeOnFull": false,
        "from": [

        ],
        "into": [

        ],
        "specialRecipe": 0,
        "inStore": true,
        "hideFromAll": false,
        "requiredChampion": "",
        "requiredAlly": "",
        "stats": {
            "FlatHPPoolMod": 0,
            "rFlatHPModPerLevel": 0,
            "FlatMPPoolMod": 0,
            "rFlatMPModPerLevel": 0,
            "PercentHPPoolMod": 0,
            "PercentMPPoolMod": 0,
            "FlatHPRegenMod": 0,
            "rFlatHPRegenModPerLevel": 0,
            "PercentHPRegenMod": 0,
            "FlatMPRegenMod": 0,
            "rFlatMPRegenModPerLevel": 0,
            "PercentMPRegenMod": 0,
            "FlatArmorMod": 0,
            "rFlatArmorModPerLevel": 0,
            "PercentArmorMod": 0,
            "rFlatArmorPenetrationMod": 0,
            "rFlatArmorPenetrationModPerLevel": 0,
            "rPercentArmorPenetrationMod": 0,
            "rPercentArmorPenetrationModPerLevel": 0,
            "FlatPhysicalDamageMod": 0,
            "rFlatPhysicalDamageModPerLevel": 0,
            "PercentPhysicalDamageMod": 0,
            "FlatMagicDamageMod": 0,
            "rFlatMagicDamageModPerLevel": 0,
            "PercentMagicDamageMod": 0,
            "FlatMovementSpeedMod": 0,
            "rFlatMovementSpeedModPerLevel": 0,
            "PercentMovementSpeedMod": 0,
            "rPercentMovementSpeedModPerLevel": 0,
            "FlatAttackSpeedMod": 0,
            "PercentAttackSpeedMod": 0,
            "rPercentAttackSpeedModPerLevel": 0,
            "rFlatDodgeMod": 0,
            "rFlatDodgeModPerLevel": 0,
            "PercentDodgeMod": 0,
            "FlatCritChanceMod": 0,
            "rFlatCritChanceModPerLevel": 0,
            "PercentCritChanceMod": 0,
            "FlatCritDamageMod": 0,
            "rFlatCritDamageModPerLevel": 0,
            "PercentCritDamageMod": 0,
            "FlatBlockMod": 0,
            "PercentBlockMod": 0,
            "FlatSpellBlockMod": 0,
            "rFlatSpellBlockModPerLevel": 0,
            "PercentSpellBlockMod": 0,
            "FlatEXPBonus": 0,
            "PercentEXPBonus": 0,
            "rPercentCooldownMod": 0,
            "rPercentCooldownModPerLevel": 0,
            "rFlatTimeDeadMod": 0,
            "rFlatTimeDeadModPerLevel": 0,
            "rPercentTimeDeadMod": 0,
            "rPercentTimeDeadModPerLevel": 0,
            "rFlatGoldPer10Mod": 0,
            "rFlatMagicPenetrationMod": 0,
            "rFlatMagicPenetrationModPerLevel": 0,
            "rPercentMagicPenetrationMod": 0,
            "rPercentMagicPenetrationModPerLevel": 0,
            "FlatEnergyRegenMod": 0,
            "rFlatEnergyRegenModPerLevel": 0,
            "FlatEnergyPoolMod": 0,
            "rFlatEnergyModPerLevel": 0,
            "PercentLifeStealMod": 0,
            "PercentSpellVampMod": 0
        },
        "tags": [

        ],
        "maps": {
            "1": true,
            "8": true,
            "10": true,
            "12": true
        }
    },
    "data": {
        "1001": {
            "name": "Boots",
            "description": "<mainText><stats><attention>25</attention> Move Speed</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Move Speed",
            "into": [
                "3005",
                "3158",
                "3117",
                "3047",
                "3020",
                "3006",
                "3009",
                "3111"
            ],
            "image": {
                "full": "1001.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 210
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 25
            }
        },
        "1004": {
            "name": "Faerie Charm",
            "description": "<mainText><stats><attention>50%</attention> Base Mana Regen</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Mana Regen",
            "into": [
                "3012",
                "3114",
                "4642"
            ],
            "image": {
                "full": "1004.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 250,
                "sell": 175
            },
            "tags": [
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "1006": {
            "name": "Rejuvenation Bead",
            "description": "<mainText><stats><attention>100%</attention> Base Health Regen</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Health Regen",
            "into": [
                "3801"
            ],
            "image": {
                "full": "1006.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 120
            },
            "tags": [
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "1011": {
            "name": "Giant's Belt",
            "description": "<mainText><stats><attention>350</attention> Health</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Greatly increases Health",
            "from": [
                "1028"
            ],
            "into": [
                "3075",
                "3084",
                "3083",
                "8001",
                "3116",
                "3143",
                "3748",
                "4637",
                "6667"
            ],
            "image": {
                "full": "1011.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Health"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350
            },
            "depth": 2
        },
        "1018": {
            "name": "Cloak of Agility",
            "description": "<mainText><stats><attention>15%</attention> Critical Strike Chance</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases critical strike chance",
            "into": [
                "6676",
                "3086",
                "6672",
                "3095",
                "3031",
                "3033",
                "3036",
                "3072",
                "3087",
                "3139",
                "3508",
                "6673",
                "6675"
            ],
            "image": {
                "full": "1018.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 600,
                "sell": 420
            },
            "tags": [
                "CriticalStrike"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.15
            }
        },
        "1026": {
            "name": "Blasting Wand",
            "description": "<mainText><stats><attention>40</attention> Ability Power</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Moderately increases Ability Power",
            "into": [
                "3116",
                "3115",
                "6657",
                "6655",
                "3135",
                "3152",
                "4633",
                "4637"
            ],
            "image": {
                "full": "1026.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 850,
                "sell": 595
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 40
            }
        },
        "1027": {
            "name": "Sapphire Crystal",
            "description": "<mainText><stats><attention>250</attention> Mana</stats></mainText><br>",
            "colloq": ";blue",
            "plaintext": "Increases Mana",
            "into": [
                "3024",
                "3803",
                "3802"
            ],
            "image": {
                "full": "1027.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 245
            },
            "tags": [
                "Mana"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 250
            }
        },
        "1028": {
            "name": "Ruby Crystal",
            "description": "<mainText><stats><attention>150</attention> Health</stats></mainText><br>",
            "colloq": ";red",
            "plaintext": "Increases Health",
            "into": [
                "6035",
                "6609",
                "1011",
                "3066",
                "3067",
                "3211",
                "6660",
                "3742",
                "4401",
                "3012",
                "3023",
                "3803",
                "3044",
                "3053",
                "3814",
                "3119",
                "6664",
                "6665",
                "3145",
                "3748",
                "3801",
                "4635"
            ],
            "image": {
                "full": "1028.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 280
            },
            "tags": [
                "Health"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150
            }
        },
        "1029": {
            "name": "Cloth Armor",
            "description": "<mainText><stats><attention>15</attention> Armor</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Armor",
            "into": [
                "1031",
                "3082",
                "3076",
                "3193",
                "3191",
                "3047",
                "3024",
                "3105",
                "3023"
            ],
            "image": {
                "full": "1029.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 210
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 15
            }
        },
        "1031": {
            "name": "Chain Vest",
            "description": "<mainText><stats><attention>40</attention> Armor</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Greatly increases Armor",
            "from": [
                "1029"
            ],
            "into": [
                "3068",
                "3742",
                "3026",
                "6333",
                "6662"
            ],
            "image": {
                "full": "1031.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "1033": {
            "name": "Null-Magic Mantle",
            "description": "<mainText><stats><attention>25</attention> Magic Resist</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Magic Resist",
            "into": [
                "3091",
                "1057",
                "3193",
                "3211",
                "3105",
                "3190",
                "3001",
                "3111",
                "3140",
                "3155",
                "4632"
            ],
            "image": {
                "full": "1033.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 315
            },
            "tags": [
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 25
            }
        },
        "1035": {
            "name": "Emberknife",
            "description": "<mainText><stats></stats><li><passive>Sear:</passive> Damaging Monsters burns them over time.<li><passive>Challenging Path:</passive> Smiting 5 times consumes this item upgrade your Smite to <attention>Challenging Smite</attention> and increases its damage to monsters. Challenging Smite marks champions. During this time, you deal bonus true damage to them on hit and take reduced damage from them.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen mana when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules><br><br><rules>Only attacks and abilities apply Challenging Smite's burn</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1035.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "LifeSteal",
                "SpellVamp",
                "Jungle"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1036": {
            "name": "Long Sword",
            "description": "<mainText><stats><attention>10</attention> Attack Damage</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Attack Damage",
            "into": [
                "3071",
                "1053",
                "3004",
                "2015",
                "3179",
                "3051",
                "3094",
                "3035",
                "3044",
                "3814",
                "3123",
                "3133",
                "3134",
                "3155",
                "3156",
                "4003",
                "6670",
                "6671"
            ],
            "image": {
                "full": "1036.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 245
            },
            "tags": [
                "Damage",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 10
            }
        },
        "1037": {
            "name": "Pickaxe",
            "description": "<mainText><stats><attention>25</attention> Attack Damage</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Moderately increases Attack Damage",
            "into": [
                "6035",
                "3077",
                "3124",
                "6676",
                "2019",
                "3031",
                "3039",
                "3053",
                "3139",
                "3153",
                "3156",
                "3161",
                "6029",
                "3181",
                "6333",
                "6673",
                "6695"
            ],
            "image": {
                "full": "1037.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 875,
                "purchasable": true,
                "total": 875,
                "sell": 613
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25
            }
        },
        "1038": {
            "name": "B. F. Sword",
            "description": "<mainText><stats><attention>40</attention> Attack Damage</stats></mainText><br>",
            "colloq": ";bf",
            "plaintext": "Greatly increases Attack Damage",
            "into": [
                "3172",
                "3146",
                "4403",
                "3026",
                "3031",
                "3072",
                "6671",
                "6675"
            ],
            "image": {
                "full": "1038.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1300,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40
            }
        },
        "1039": {
            "name": "Hailblade",
            "description": "<mainText><stats></stats><li><passive>Sear:</passive> Damaging Monsters burns them over time.<li><passive>Chilling Path:</passive> Smiting 5 times consumes this item upgrade your Smite to <attention>Chilling Smite</attention> and increases its damage to monsters. When smiting champions Chilling Smite deals true damage and steals their Move Speed.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen mana when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules><br><br></mainText><br>",
            "colloq": ";jungle;Jungle",
            "plaintext": "Provides damage against Monsters and Mana Regen in the Jungle",
            "inStore": false,
            "image": {
                "full": "1039.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "LifeSteal",
                "SpellVamp",
                "Jungle"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1040": {
            "name": "Obsidian Edge",
            "description": "<mainText><stats></stats><li><passive>Sear:</passive> Damaging Monsters burns them over time.<li><passive>Auto Path:</passive> Smiting 5 times consumes this item upgrade your Attack-Smite, increasing its damage to monsters.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen mana when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1040.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "LifeSteal",
                "SpellVamp",
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1042": {
            "name": "Dagger",
            "description": "<mainText><stats><attention>12%</attention> Attack Speed</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slightly increases Attack Speed",
            "into": [
                "3172",
                "1043",
                "6677",
                "3086",
                "3051",
                "3006",
                "3131",
                "6670"
            ],
            "image": {
                "full": "1042.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 300,
                "sell": 210
            },
            "tags": [
                "AttackSpeed"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.12
            }
        },
        "1043": {
            "name": "Recurve Bow",
            "description": "<mainText><stats><attention>15%</attention> Attack Speed</stats>Attacks apply bonus magic damage On-Hit.</mainText><br>",
            "colloq": ";",
            "plaintext": "Greatly increases Attack Speed",
            "from": [
                "1042"
            ],
            "into": [
                "3091",
                "3085",
                "6672",
                "3115",
                "3153"
            ],
            "image": {
                "full": "1043.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 700,
                "sell": 490
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 2
        },
        "1052": {
            "name": "Amplifying Tome",
            "description": "<mainText><stats><attention>20</attention> Ability Power</stats></mainText><br>",
            "colloq": ";amptome",
            "plaintext": "Slightly increases Ability Power",
            "into": [
                "3124",
                "4629",
                "3191",
                "3116",
                "3108",
                "3113",
                "6657",
                "3145",
                "3152",
                "3165",
                "3802",
                "4632",
                "3916",
                "4630",
                "4635",
                "4636",
                "4637",
                "4642",
                "4644",
                "6656"
            ],
            "image": {
                "full": "1052.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 435,
                "purchasable": true,
                "total": 435,
                "sell": 305
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 20
            }
        },
        "1053": {
            "name": "Vampiric Scepter",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>7%</attention> Life Steal</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Basic attacks restore Health",
            "from": [
                "1036"
            ],
            "into": [
                "3074",
                "4403",
                "3072",
                "3153",
                "6673"
            ],
            "image": {
                "full": "1053.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "PercentLifeStealMod": 0.07
            },
            "depth": 2
        },
        "1054": {
            "name": "Doran's Shield",
            "description": "<mainText><stats><attention>110</attention> Health</stats><br><li><passive>Focus:</passive> Attacks deal additional damage to minions.<li><passive>Recovery:</passive> Restores Health over time.<li><passive>Endure:</passive> Restores Health after taking damage from a champion, large jungle monster, or epic jungle monster. Restoration increases when you are low Health.<br><br><rules><passive>Endure</passive> 66% effective when owned by Ranged champions or when taking damage from area of effect or periodic damage sources.</rules></mainText><br>",
            "colloq": ";dshield",
            "plaintext": "Good defensive starting item",
            "image": {
                "full": "1054.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 110,
                "FlatHPRegenMod": 0.8
            },
            "effect": {
                "Effect1Amount": "8",
                "Effect2Amount": "5",
                "Effect3Amount": "45",
                "Effect4Amount": "0.66"
            }
        },
        "1055": {
            "name": "Doran's Blade",
            "description": "<mainText><stats><attention>10</attention> Attack Damage<br><attention>100</attention> Health</stats><br><li><passive>Warmonger:</passive> Gain Omnivamp.<br><br><rules>Omnivamp is only 33% effective when dealing area of effect damage or damage through pets.</rules></mainText><br>",
            "colloq": ";dblade",
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "1055.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Health",
                "Damage",
                "SpellVamp",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 10,
                "FlatHPPoolMod": 100
            }
        },
        "1056": {
            "name": "Doran's Ring",
            "description": "<mainText><stats><attention>18</attention> Ability Power<br><attention>90</attention> Health</stats><br><li><passive>Focus:</passive> Attacks deal additional damage to minions. <li><passive>Drain:</passive> Restore Mana every second. Damaging an enemy champion increases this amount. If you can't gain Mana, regenerate Health instead. </mainText><br>",
            "colloq": ";dring",
            "plaintext": "Good starting item for casters",
            "image": {
                "full": "1056.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 90,
                "FlatMagicDamageMod": 18
            }
        },
        "1057": {
            "name": "Negatron Cloak",
            "description": "<mainText><stats><attention>50</attention> Magic Resist</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Moderately increases Magic Resist",
            "from": [
                "1033"
            ],
            "into": [
                "4401",
                "6664",
                "8020"
            ],
            "image": {
                "full": "1057.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 50
            },
            "depth": 2
        },
        "1058": {
            "name": "Needlessly Large Rod",
            "description": "<mainText><stats><attention>60</attention> Ability Power</stats></mainText><br>",
            "colloq": ";nlr",
            "plaintext": "Greatly increases Ability Power",
            "into": [
                "3089",
                "4645",
                "3146",
                "3128",
                "4403",
                "3003"
            ],
            "image": {
                "full": "1058.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": true,
                "total": 1250,
                "sell": 875
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 60
            }
        },
        "1082": {
            "name": "Dark Seal",
            "description": "<mainText><stats><attention>15</attention> Ability Power<br><attention>50</attention> Health</stats><br><li><passive>Glory:</passive> Gain 2 stacks for a champion kill or 1 stack for an assist (up to 10 stacks total). Lose 5 stacks on death.<li><passive>Dread:</passive> Grants <scaleAP>4 Ability Power</scaleAP> per stack of <passive>Glory</passive>.<br><br><rules>Obtained <passive>Glory</passive> stacks are preserved between this item and <rarityLegendary>Mejai's Soulstealer</rarityLegendary>.</rules></mainText><br>",
            "colloq": ";Noxian",
            "plaintext": "Provides Ability Power and Mana.  Increases in power as you kill enemies.",
            "into": [
                "3041"
            ],
            "image": {
                "full": "1082.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 50,
                "FlatMagicDamageMod": 15
            }
        },
        "1083": {
            "name": "Cull",
            "description": "<mainText><stats><attention>7</attention> Attack Damage</stats><br><li>Attacks restore Health per hit.<li><passive>Reap:</passive> Killing a lane minion grants <goldGain>1</goldGain> additional gold. Killing 100 lane minions grants an additional <goldGain>350</goldGain> bonus gold immediately and disables <passive>Reap</passive>.<br></mainText><br>",
            "colloq": ";dblade",
            "plaintext": "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
            "image": {
                "full": "1083.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Damage",
                "OnHit",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 7
            }
        },
        "1101": {
            "name": "Scorchclaw Pup",
            "description": "<mainText><stats></stats><li><passive>Jungle Companions:</passive> Summon an <font color='#DD2E2E'>Scorchclaw</font> to assist you in the jungle.<li><passive>Scorchclaw's Slash:</passive> When fully grown your companion periodically imbues your next damaging effect to <status>Slow</status> and <passive>damage</passive> enemy champions.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1101.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "1102": {
            "name": "Gustwalker Hatchling",
            "description": "<mainText><stats></stats><li><passive>Jungle Companions:</passive> Summon a <font color='#38A8E8'>Gustwalker</font> to assist you while in the jungle.<li><passive>Gustwalker's Gait:</passive> When fully grown your companion grants <speed>Move Speed</speed> after entering brush or killing monsters.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1102.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1103": {
            "name": "Mosstomper Seedling",
            "description": "<mainText><stats></stats><li><passive>Jungle Companions:</passive> Summon a <font color='#1CA935'>Mosstomper</font> to assist you while in the jungle. <li><passive>Mosstomper's Courage:</passive> When fully grown your companion grants a <shield>permanent shield</shield> that regenerates either after killing monsters or out of combat. While the shield holds gain 0% Tenacity and Slow Resist.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "1103.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 450,
                "sell": 180
            },
            "tags": [
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "25",
                "Effect3Amount": "5",
                "Effect4Amount": "8"
            }
        },
        "1104": {
            "name": "Eye of the Herald",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Crush the Eye of the Herald, summoning Rift Herald. The Herald will proceed down the nearest lane and deal massive damage to any turrets in the way.<br><br><passive>Glimpse of the Void:</passive> Grants Empowered Recall.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "1104.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Trinket",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "240",
                "Effect2Amount": "1",
                "Effect3Amount": "20",
                "Effect4Amount": "180"
            }
        },
        "1500": {
            "name": "Penetrating Bullets",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1500.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1501": {
            "name": "Fortification",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1501.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "5",
                "Effect3Amount": "0.35"
            }
        },
        "1502": {
            "name": "Reinforced Armor",
            "description": "<mainText><stats></stats><mainText><unique>Reinforced:</unique> Reduces incoming damage by 66.66% and becomes immune to True Damage when no enemy minions are nearby.</mainText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1502.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "66.66"
            }
        },
        "1503": {
            "name": "Warden's Eye",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1503.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "1000"
            }
        },
        "1504": {
            "name": "Vanguard",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1504.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "30",
                "Effect3Amount": "30",
                "Effect4Amount": "300"
            }
        },
        "1506": {
            "name": "Reinforced Armor",
            "description": "<mainText><stats></stats><mainText><unique>Reinforced:</unique> Reduces incoming damage by 66% and becomes immune to True Damage when no enemy minions are nearby.<br><unique>Regeneration: </unique>Base turrets have health regeneration, but cannot regenerate past their current segment. Base turrets are segmented at 33%, 66% and 100% health.</mainText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1506.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "66",
                "Effect2Amount": "66"
            }
        },
        "1507": {
            "name": "Overcharged",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1507.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "75",
                "Effect2Amount": "75"
            }
        },
        "1508": {
            "name": "Anti-tower Socks",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1508.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "1509": {
            "name": "Gusto",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1509.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "1510": {
            "name": "Phreakish Gusto",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1510.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "1511": {
            "name": "Super Mech Armor",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1511.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "1512": {
            "name": "Super Mech Power Field",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1512.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "1515": {
            "name": "Turret Plating",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1515.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "40",
                "Effect2Amount": "125",
                "Effect3Amount": "20",
                "Effect4Amount": "45",
                "Effect5Amount": "0.17"
            }
        },
        "1516": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1516.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1517": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1517.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1518": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1518.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1519": {
            "name": "Structure Bounty",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1519.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "0.4",
                "Effect3Amount": "1.2",
                "Effect4Amount": "3"
            }
        },
        "1520": {
            "name": "OvererchargedHA",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1520.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "ManaRegen",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "75",
                "Effect2Amount": "75"
            }
        },
        "1521": {
            "name": "Fortification",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1521.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0.3",
                "Effect2Amount": "60",
                "Effect3Amount": "0.35"
            }
        },
        "1522": {
            "name": "Tower Power-Up",
            "description": "",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "1522.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "3",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "40",
                "Effect6Amount": "40",
                "Effect7Amount": "9",
                "Effect8Amount": "12"
            }
        },
        "2003": {
            "name": "Health Potion",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Drink the potion to restore <healing>120 Health</healing> over 15 seconds.<br><br><rules>You may carry up to 5 Health Potions.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Consume to restore Health over time",
            "stacks": 5,
            "consumed": true,
            "image": {
                "full": "2003.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": true,
                "total": 50,
                "sell": 20
            },
            "tags": [
                "HealthRegen",
                "Consumable",
                "Lane",
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "2010": {
            "name": "Total Biscuit of Everlasting Will",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Eat the biscuit to restore <healing>8% missing Health</healing> and <scaleMana>Mana</scaleMana> over 5 seconds. Consuming or selling a biscuit permanently grants <scaleMana>40 maximum Mana</scaleMana>. </mainText><br>",
            "colloq": ";",
            "plaintext": "",
            "stacks": 10,
            "consumed": true,
            "inStore": false,
            "hideFromAll": true,
            "image": {
                "full": "2010.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 50,
                "purchasable": false,
                "total": 50,
                "sell": 5
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "10"
            }
        },
        "2015": {
            "name": "Kircheis Shard",
            "description": "<mainText><stats><attention>15</attention> Attack Damage</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Jolt:</passive> Energized Attacks gain an additional <magicDamage>60 magic damage</magicDamage>.</mainText><br>",
            "colloq": ";",
            "plaintext": "Attack speed and a chargable magic hit",
            "from": [
                "1036"
            ],
            "into": [
                "3095",
                "3094",
                "3087"
            ],
            "image": {
                "full": "2015.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 700,
                "sell": 490
            },
            "tags": [
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15
            },
            "depth": 2
        },
        "2019": {
            "name": "Steel Sigil",
            "description": "<mainText><stats><attention>30</attention> Attack Damage</stats><br><li><passive>Feast:</passive> Killing a unit restores health.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037"
            ],
            "inStore": false,
            "image": {
                "full": "2019.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": false,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30
            },
            "depth": 2
        },
        "2031": {
            "name": "Refillable Potion",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Consumes a charge to restore <healing>100 Health</healing> over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.</mainText><br>",
            "colloq": ";",
            "plaintext": "Restores Health over time. Refills at shop.",
            "into": [
                "2033"
            ],
            "image": {
                "full": "2031.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 150,
                "sell": 60
            },
            "tags": [
                "HealthRegen",
                "Consumable",
                "Active",
                "Lane",
                "Jungle"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "2033": {
            "name": "Corrupting Potion",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Consumes a charge to restore <healing>100 Health</healing> and <scaleMana>75 Mana</scaleMana> over 12 seconds. During this time, damaging Abilities and Attacks burn enemy champions for <magicDamage>15 (20 if you cannot gain Mana) magic damage</magicDamage> over 3 seconds. Holds up to 3 charges and refills upon visiting the shop.<br><br><rules>Corrupting damage is reduced to 50% when triggered by area of effect or periodic damage.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Restores Health and Mana over time and boosts combat power - Refills at Shop",
            "from": [
                "2031"
            ],
            "image": {
                "full": "2033.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Active",
                "Consumable",
                "HealthRegen",
                "Lane",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "depth": 2
        },
        "2049": {
            "name": "Guardian's Amulet",
            "description": "<mainText><stats><attention>20%</attention> Heal and Shield Power<br><attention>20</attention> Ability Power<br><attention>25</attention> Ability Haste</stats><br><li><passive>Recovery:</passive> Restores <scaleMana>10 Mana</scaleMana> every 5 seconds. If you can't gain mana, restores <healing>3 Health</healing> instead.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Health and provides Stealth Wards over time",
            "image": {
                "full": "2049.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 20
            }
        },
        "2050": {
            "name": "Guardian's Shroud",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>30</attention> Ability Power<br><attention>15</attention> Ability Haste</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": ";",
            "plaintext": "",
            "image": {
                "full": "2050.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 30
            }
        },
        "2051": {
            "name": "Guardian's Horn",
            "description": "<mainText><stats><attention>150</attention> Health</stats><br><li><passive>Recovery:</passive> Restores Health over time.<li><passive>Undaunted:</passive> Blocks damage from attacks and spells from champions.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": "Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf",
            "plaintext": "Good starting item for tanks",
            "image": {
                "full": "2051.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatHPRegenMod": 4
            },
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "0.25"
            }
        },
        "2052": {
            "name": "Poro-Snax",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Serves a scrumptious scoop to a nearby Poro, causing it to grow in size.<br><br><flavorText>This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br>All proceeds will be donated towards fighting Noxian animal cruelty. </flavorText></mainText><br>",
            "colloq": ";",
            "plaintext": "",
            "stacks": 2,
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "2052.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "2055": {
            "name": "Control Ward",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Places a powerful Control Ward that grants vision of the surrounding area. This device will also reveal <keywordStealth>Invisible</keywordStealth> traps, reveal <keywordStealth>Camouflaged</keywordStealth> enemies, and reveal (and disable) enemy Stealth Wards. <br><br><rules>You may carry up to 2 Control Wards. Control Wards do not disable other Control Wards.</rules></mainText><br>",
            "colloq": "orange;",
            "plaintext": "Used to disable wards and invisible traps in an area.",
            "stacks": 2,
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2055.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 75,
                "purchasable": true,
                "total": 75,
                "sell": 30
            },
            "tags": [
                "Consumable",
                "Lane",
                "Stealth",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "2"
            }
        },
        "2065": {
            "name": "Shurelya's Battlesong",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><br><active>Active -</active> <active>Inspire:</active> Grants nearby allies Move Speed.<li><passive>Motivate:</passive> Empowering or Protecting another ally Champion grants both allies Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.<br></mainText><br>",
            "colloq": ";shurelya;reverie;",
            "plaintext": "Activate to speed up nearby allies.",
            "from": [
                "3067",
                "4642"
            ],
            "into": [
                "7020"
            ],
            "image": {
                "full": "2065.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 35
            },
            "depth": 3
        },
        "2138": {
            "name": "Elixir of Iron",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Drink to gain <scaleHealth>300 Health</scaleHealth>, 25% Tenacity, and increased champion size for 3 minutes. While active, moving leaves a path behind that boosts allied champions' <speed>Move Speed by 15%</speed>.<br><br><rules>Drinking a different Elixir will replace the existing one's effects.</rules></mainText><br>",
            "colloq": ";white",
            "plaintext": "Temporarily increases defenses. Leaves a trail for allies to follow.",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2138.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Health",
                "Consumable",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "300",
                "Effect2Amount": "0.25",
                "Effect3Amount": "3",
                "Effect4Amount": "0.15",
                "Effect5Amount": "0.15",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "9"
            }
        },
        "2139": {
            "name": "Elixir of Sorcery",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Drink to gain <scaleAP>50 Ability Power</scaleAP> and <scaleMana>15% Mana Regen</scaleMana> for 3 minutes. While active, damaging a champion or turret deals <trueDamage>25 bonus true damage</trueDamage> (5s cooldown).<br><br><rules>Champion level <attention>9</attention> or greater required to purchase. Elixir of Sorcery's true damage effect has no cooldown when attacking turrets. Drinking a different Elixir will replace the existing one's effects.</rules></mainText><br>",
            "colloq": ";blue",
            "plaintext": "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2139.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Consumable",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "50",
                "Effect2Amount": "50",
                "Effect3Amount": "25",
                "Effect4Amount": "3",
                "Effect5Amount": "5",
                "Effect6Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "9"
            }
        },
        "2140": {
            "name": "Elixir of Wrath",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Drink to gain <scaleAD>30 Attack Damage</scaleAD> and <lifeSteal>12% Physical Vamp</lifeSteal> (against champions) for 3 minutes.<br><br><rules>Drinking a different Elixir will replace the existing one's effects.</rules></mainText><br>",
            "colloq": ";red",
            "plaintext": "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2140.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 500,
                "sell": 200
            },
            "tags": [
                "Consumable",
                "Damage",
                "LifeSteal",
                "SpellVamp"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "30",
                "Effect3Amount": "0.12",
                "Effect4Amount": "3",
                "Effect5Amount": "0",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "9"
            }
        },
        "2141": {
            "name": "Cappa Juice",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> This juice does nothing.<br><br><flavorText>For a limited time only, get a free hat with every purchase!</flavorText><br><br><rules>Helps you get on a head.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2141.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 700,
                "sell": 700
            },
            "tags": [
                "Damage",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "2142": {
            "name": "Juice of Power",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Automatically activates on Combat Start. Drink to gain <scaleAP>30+ 10% bonus Ability Power</scaleAP> or <scaleAD>18+ 10% bonus Attack Damage</scaleAD> for the next round.<br><br><flavorText>Made with 100% real cherries. Warning: May cause imbiber to deal tons of damage.</flavorText><br><br><rules>Juices do not stack with themselves, but you can have multiple different ones active.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2142.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 700,
                "sell": 700
            },
            "tags": [
                "SpellDamage",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "2143": {
            "name": "Juice of Vitality",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Automatically activates on Combat Start. Drink to gain <healing>300+ 10% Health</healing> for the next round.<br><br><flavorText>Our specially formulated veggie blend is proven to harden your skin to resist even the strongest attacks!</flavorText><br><br><rules>Juices do not stack with themselves, but you can have multiple different ones active.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2143.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 700,
                "sell": 700
            },
            "tags": [
                "Health",
                "Consumable"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "2144": {
            "name": "Juice of Haste",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Automatically activates on Combat Start. Drink to gain <speed>20+ 15% Ability Haste</speed> for the next round.<br><br><flavorText>For people who gotta go FAST. Made with lightning. REAL lightning!</flavorText><br><br><rules>Juices do not stack with themselves, but you can have multiple different ones active.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "image": {
                "full": "2144.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 700,
                "sell": 700
            },
            "tags": [
                "Consumable",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "221038": {
            "name": "B. F. Sword",
            "description": "<mainText><stats><attention>40</attention> Attack Damage</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221038.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1300,
                "purchasable": false,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40
            }
        },
        "221053": {
            "name": "Vampiric Scepter",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>10%</attention> Life Steal</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221053.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "PercentLifeStealMod": 0.1
            }
        },
        "221058": {
            "name": "Needlessly Large Rod",
            "description": "<mainText><stats><attention>100</attention> Ability Power</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "221058.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": false,
                "total": 1250,
                "sell": 875
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 100
            }
        },
        "222051": {
            "name": "Guardian's Horn",
            "description": "<mainText><stats><buffedStat>250</buffedStat> Health</stats><br><li><passive>Recovery:</passive> Restores Health over time.<li><passive>Undaunted:</passive> Blocks damage from attacks and spells from champions.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "222051.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatHPRegenMod": 4
            },
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "0.25"
            }
        },
        "222065": {
            "name": "Shurelya's Battlesong",
            "description": "<mainText><stats><buffedStat>45</buffedStat> Ability Power<br><buffedStat>500</buffedStat> Health<br><buffedStat>40</buffedStat> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><br><active>Active -</active> <active>Inspire:</active> Grants nearby allies Move Speed.<li><passive>Motivate:</passive> Empowering or Protecting another ally Champion grants both allies Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227020"
            ],
            "image": {
                "full": "222065.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 45
            }
        },
        "223001": {
            "name": "Evenshroud",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227023"
            ],
            "image": {
                "full": "223001.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            }
        },
        "223003": {
            "name": "Archangel's Staff",
            "description": "<mainText><stats><nerfedStat>60</nerfedStat> Ability Power<br><attention>500</attention> Mana<br><attention>350</attention> Health<br><attention>10</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain Ability Power equal to bonus Mana.<li><passive>Mana Charge:</passive> <buffedStat>After 2 combat rounds</buffedStat>, this item transforms into <rarityLegendary>Seraph's Embrace</rarityLegendary>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223003.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMPPoolMod": 500,
                "FlatMagicDamageMod": 60
            }
        },
        "223004": {
            "name": "Manamune",
            "description": "<mainText><stats><buffedStat>45</buffedStat> Attack Damage<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus <scaleAD>Attack Damage equal to your max Mana</scaleAD>. <li><passive>Mana Charge:</passive> <buffedStat>After 2 combat rounds</buffedStat>, this item transforms into <rarityLegendary>Muramana</rarityLegendary>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223004.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatMPPoolMod": 500
            }
        },
        "223005": {
            "name": "Ghostcrawlers",
            "description": "<mainText><stats><attention>55</attention> Move Speed</stats><br><br><active>Active -</active> <active>Wall Walk:</active> Gain the ability to walk through walls for 6 seconds. While inside walls, gain 300 move speed. Casting a spell or attacking will end this effect. (15s ).</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223005.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 55
            }
        },
        "223006": {
            "name": "Berserker's Greaves",
            "description": "<mainText><stats><buffedStat>45%</buffedStat> Attack Speed<br><attention>30</attention> Move Speed</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223006.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "AttackSpeed",
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 30,
                "PercentAttackSpeedMod": 0.45
            }
        },
        "223009": {
            "name": "Boots of Swiftness",
            "description": "<mainText><stats><buffedStat>70</buffedStat> Move Speed</stats><br><li>The strength of movement slowing effects is reduced by <buffedStat>40%</buffedStat>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223009.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 70
            },
            "effect": {
                "Effect1Amount": "0.4"
            }
        },
        "223011": {
            "name": "Chemtech Putrifier",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><buffedStat>16%</buffedStat> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><buffedStat>30</buffedStat> Ability Haste</stats><br><li><passive>Puffcap Toxin:</passive> Dealing damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223011.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 40
            }
        },
        "223020": {
            "name": "Sorcerer's Shoes",
            "description": "<mainText><stats><buffedStat>20</buffedStat> Magic Penetration<br><buffedStat>55</buffedStat> Move Speed</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223020.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 55
            },
            "effect": {
                "Effect1Amount": "22"
            }
        },
        "223026": {
            "name": "Guardian Angel",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>40</attention> Armor</stats><br><li><passive>Saving Grace:</passive> Upon taking lethal damage, restores <healing>50% base Health</healing> and <scaleMana>30% max Mana</scaleMana> after 4 seconds of stasis. This effect has a one round cooldown.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223026.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatArmorMod": 40
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "4",
                "Effect3Amount": "45",
                "Effect4Amount": "0.3"
            }
        },
        "223031": {
            "name": "Infinity Edge",
            "description": "<mainText><stats><nerfedStat>65</nerfedStat> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>45%</attention> Critical Strike Damage</stats><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227031"
            ],
            "image": {
                "full": "223031.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatCritChanceMod": 0.2
            }
        },
        "223033": {
            "name": "Mortal Reminder",
            "description": "<mainText><stats><buffedStat>45</buffedStat> Attack Damage<br><buffedStat>30%</buffedStat> Armor Penetration<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Sepsis:</passive> Dealing physical damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223033.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatCritChanceMod": 0.2
            }
        },
        "223036": {
            "name": "Lord Dominik's Regards",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>30%</attention> Armor Penetration</stats><br><li><passive>Giant Slayer:</passive> Deal bonus damage against champions with greater max Health than you.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223036.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatCritChanceMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.2"
            }
        },
        "223039": {
            "name": "Atma's Reckoning",
            "description": "<mainText><stats><attention>800</attention> Health<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Big Hands:</passive> Gain 1% critical chance per 100 bonus health, up to 30%.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223039.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "CriticalStrike",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatHPPoolMod": 800
            }
        },
        "223040": {
            "name": "Seraph's Embrace",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>860</attention> Mana<br><attention>350</attention> Health<br><attention>10</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain Ability Power based on Mana.<li><passive>Lifeline:</passive> Upon taking damage that would reduce your Health below 30%, gain a Shield based on your current Mana.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 223003,
            "inStore": false,
            "image": {
                "full": "223040.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMPPoolMod": 860,
                "FlatMagicDamageMod": 70
            }
        },
        "223042": {
            "name": "Muramana",
            "description": "<mainText><stats><buffedStat>45</buffedStat> Attack Damage<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus Attack Damage based on Mana. <li><passive>Shock:</passive> Attacks against champions deal additional physical damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 223004,
            "inStore": false,
            "image": {
                "full": "223042.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatMPPoolMod": 860
            }
        },
        "223046": {
            "name": "Phantom Dancer",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><buffedStat>40%</buffedStat> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><buffedStat>7%</buffedStat> Move Speed</stats><br><li><passive>Spectral Waltz:</passive> Attacks grant <status>Ghosting</status> and stacking increased Move Speed. In addition, Attacking 4 times causes Spectral Waltz to also grant Attack Speed.<br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223046.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.4
            },
            "effect": {
                "Effect1Amount": "0.24",
                "Effect2Amount": "10",
                "Effect3Amount": "550",
                "Effect4Amount": "0.1",
                "Effect5Amount": "0.3",
                "Effect6Amount": "2.5",
                "Effect7Amount": "90",
                "Effect8Amount": "240",
                "Effect9Amount": "600",
                "Effect10Amount": "40",
                "Effect11Amount": "5",
                "Effect12Amount": "0.3",
                "Effect13Amount": "0.7",
                "Effect14Amount": "3",
                "Effect15Amount": "300",
                "Effect16Amount": "1",
                "Effect17Amount": "0.4",
                "Effect18Amount": "9"
            }
        },
        "223047": {
            "name": "Plated Steelcaps",
            "description": "<mainText><stats><buffedStat>25</buffedStat> Armor<br><attention>30</attention> Move Speed</stats><br><li>Reduces incoming damage from Attacks by <buffedStat>14%</buffedStat>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223047.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Armor",
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 30,
                "FlatArmorMod": 25
            },
            "effect": {
                "Effect1Amount": "0.14"
            }
        },
        "223050": {
            "name": "Zeke's Convergence",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><attention>250</attention> Mana<br><buffedStat>40</buffedStat> Armor<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Conduit:</active> Designate an <attention>Accomplice</attention>.<br><li><passive>Convergence:</passive> After you <status>Immobilize</status> an enemy, your <attention>Accomplice's</attention> Attacks and Ability hits apply additional damage to that enemy.<br><br><rules>Champions can only be linked by one Zeke's Convergence at a time.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223050.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "Active",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 40
            }
        },
        "223053": {
            "name": "Sterak's Gage",
            "description": "<mainText><stats><nerfedStat>350</nerfedStat> Health</stats><br><li><passive>The Claws that Catch:</passive> Gain base AD as bonus Attack Damage.<li><passive>Lifeline:</passive> Upon taking damage that would reduce your Health below 30%, gain a Shield, decaying over time, and Tenacity.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223053.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350
            }
        },
        "223057": {
            "name": "Sheen",
            "description": "<mainText><stats></stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223057.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": false,
                "total": 700,
                "sell": 490
            },
            "tags": [
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "223065": {
            "name": "Spirit Visage",
            "description": "<mainText><stats><nerfedStat>400</nerfedStat> Health<br><nerfedStat>40</nerfedStat> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><li><passive>Boundless Vitality:</passive> Increases all Healing and Shielding effectiveness on you.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223065.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 40
            }
        },
        "223067": {
            "name": "Kindlegem",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223067.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Health",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300
            }
        },
        "223068": {
            "name": "Sunfire Aegis",
            "description": "<mainText><stats><attention>500</attention> Health<br><attention>50</attention> Armor</stats><br><li><passive>Immolate:</passive> Taking or dealing damage causes you to begin dealing <magicDamage> (15 + 2.5% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions) for 3 seconds. Damaging Champions or Epic Monsters with this effect adds a stack, increasing subsequent <passive>Immolate</passive> damage by 10% for 5 seconds (max stacks 10).<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223068.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "Aura"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatArmorMod": 50
            }
        },
        "223071": {
            "name": "Black Cleaver",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>400</attention> Health<br><nerfedStat>25</nerfedStat> Ability Haste</stats><br><li><passive>Carve:</passive> Dealing physical damage to a champion applies a stack of Armor reduction.<li><passive>Rage:</passive> Dealing physical damage to a champion grants Move Speed per stack of <unique>Carve</unique> on them.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223071.png",
                "sprite": "item0.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 400
            },
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0.05",
                "Effect3Amount": "6",
                "Effect4Amount": "6",
                "Effect5Amount": "0.3",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            }
        },
        "223072": {
            "name": "Bloodthirster",
            "description": "<mainText><stats><nerfedStat>50</nerfedStat> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>18%</attention> Life Steal</stats><br><li><passive>Engorge:</passive> While above 50% Health, gain additional Attack Damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223072.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "LifeSteal"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatCritChanceMod": 0.2,
                "PercentLifeStealMod": 0.18
            }
        },
        "223074": {
            "name": "Ravenous Hydra",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>25</attention> Ability Haste<br><buffedStat>15%</buffedStat> Life Steal</stats><br><li><passive>Cleave:</passive> Attacks and Abilities deal physical damage to other nearby enemies.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223074.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "PercentLifeStealMod": 0.15
            }
        },
        "223075": {
            "name": "Thornmail",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>70</attention> Armor</stats><br><li><passive>Thorns:</passive> When struck by an Attack, deal damage to the attacker and apply 40% <status>Grievous Wounds</status> if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223075.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 70
            }
        },
        "223078": {
            "name": "Trinity Force",
            "description": "<mainText><stats><nerfedStat>33</nerfedStat> Attack Damage<br><attention>33%</attention> Attack Speed<br><attention>333</attention> Health<br><attention>20</attention> Ability Haste</stats><br><li><passive>Threefold Strike:</passive> Attacks grant Move Speed. If the target is a champion, increase your base Attack Damage, stacking.<li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Attack Damage, Ability Haste, and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227018"
            ],
            "image": {
                "full": "223078.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 33,
                "FlatHPPoolMod": 333,
                "PercentAttackSpeedMod": 0.33
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            }
        },
        "223084": {
            "name": "Heartsteel",
            "description": "<mainText><stats><attention>800</attention> Health<br><attention>200%</attention> Base Health Regen<br><nerfedStat>10</nerfedStat> Ability Haste</stats><br><li><passive>Colossal Consumption:</passive> Charge up a powerful attack against a champion over 3s while within 700 range of them. The charged attack deals 125 + <scalehealth>7%</scalehealth> of your max Health as bonus physical damage, and grants you 12% of that amount as permanent max Health. (20s) cooldown per target.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>1%</attention> Increased Health & <attention>6%</attention> Champion Size.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227025"
            ],
            "image": {
                "full": "223084.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 800
            }
        },
        "223085": {
            "name": "Runaan's Hurricane",
            "description": "<mainText><stats><buffedStat>55%</buffedStat> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Peck:</passive> Attacks apply <magicDamage>magic damage</magicDamage> <OnHit>On-Hit</OnHit>.<li><passive>Wind's Fury:</passive> When Attacking, bolts are fired at up to 2 enemies near the target. Bolts apply On-Hit effects and can Critically Strike.<br><br><rules>Item is for Ranged champions only.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223085.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.55
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect3Amount": "2",
                "Effect4Amount": "0",
                "Effect5Amount": "40",
                "Effect6Amount": "1"
            }
        },
        "223087": {
            "name": "Statikk Shiv",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Electroshock:</passive> Fires chain lightning that bounces to and damages nearby enemies.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223087.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatCritChanceMod": 0.2,
                "PercentAttackSpeedMod": 0.3
            }
        },
        "223089": {
            "name": "Rabadon's Deathcap",
            "description": "<mainText><stats><nerfedStat>80</nerfedStat> Ability Power</stats><br><li><passive>Magical Opus:</passive> Increases your total <scaleAP>Ability Power by 40%</scaleAP>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223089.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80
            }
        },
        "223091": {
            "name": "Wit's End",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>40</attention> Magic Resist</stats><br><li><passive>Fray:</passive> Attacks apply magic damage On-Hit and grant Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223091.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatSpellBlockMod": 40,
                "PercentAttackSpeedMod": 0.4
            }
        },
        "223094": {
            "name": "Rapid Firecannon",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Sharpshooter:</passive> Your Energized Attack applies bonus damage. In addition, Energized attacks gain Attack Range.<br><br><rules>Attack Range cannot increase more than 150 units.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223094.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.15
            }
        },
        "223095": {
            "name": "Stormrazor",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Bolt:</passive> Your Energized Attack applies bonus magic damage and grants Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223095.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2,
                "PercentAttackSpeedMod": 0.25
            }
        },
        "223100": {
            "name": "Lich Bane",
            "description": "<mainText><stats><attention>85</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Move Speed</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional magic damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223100.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.1,
                "FlatMagicDamageMod": 85
            }
        },
        "223102": {
            "name": "Banshee's Veil",
            "description": "<mainText><stats><buffedStat>90</buffedStat> Ability Power<br><buffedStat>55</buffedStat> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Annul:</passive> Grants a Spell Shield that blocks the next enemy Ability.<br><br><rules>Item cooldown is restarted if you take damage from champions before it is completed.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223102.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatMagicDamageMod": 90
            },
            "effect": {
                "Effect1Amount": "40",
                "Effect2Amount": "45",
                "Effect3Amount": "10",
                "Effect4Amount": "-0.1",
                "Effect5Amount": "8",
                "Effect6Amount": "2"
            }
        },
        "223105": {
            "name": "Aegis of the Legion",
            "description": "<mainText><stats><attention>25</attention> Armor<br><attention>25</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "223105.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": false,
                "total": 450,
                "sell": 315
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatArmorMod": 25
            }
        },
        "223107": {
            "name": "Redemption",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><buffedStat>100%</buffedStat> Base Mana Regen<br><buffedStat>20%</buffedStat> Heal and Shield Power</stats><br><br><active>Active -</active> <active>Intervention:</active> Target an area within. After 2.5 seconds, call down a beam of light to restore Health to allies and damage enemy champions.<br><li><passive>Harmony:</passive> Gain 25% Base Health Regeneration for every additional <scalemana>25% Base Mana Regeneration</scalemana>.<br><br><rules>Item can be activated whilst dead. Damage and healing reduced by 50% if the target has recently been affected by another <active>Intervention</active>. Strength of level-scaling effects are based on the ally's level.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223107.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "ManaRegen"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400
            }
        },
        "223109": {
            "name": "Knight's Vow",
            "description": "<mainText><stats><buffedStat>500</buffedStat> Health<br><buffedStat>25</buffedStat> Armor<br><attention>15</attention> Ability Haste<br><attention>125%</attention> Base Health Regen</stats><br><br><active>Active -</active> <active>Pledge:</active> Designate an ally who is <attention>Worthy</attention>..<br><li><passive>Sacrifice:</passive> While your <attention>Worthy</attention> ally is nearby, redirect damage they take to you and heal based on the damage dealt by your <attention>Worthy</attention> ally to Champions.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223109.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Aura",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatArmorMod": 25
            }
        },
        "223110": {
            "name": "Frozen Heart",
            "description": "<mainText><stats><buffedStat>100</buffedStat> Armor<br><attention>400</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Winter's Caress:</passive> Reduces the <attackSpeed>Attack Speed</attackSpeed> of nearby enemies.<li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223110.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Armor",
                "Mana",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatArmorMod": 100
            }
        },
        "223111": {
            "name": "Mercury's Treads",
            "description": "<mainText><stats><buffedStat>35</buffedStat> Magic Resist<br><attention>30</attention> Move Speed<br><buffedStat>35%</buffedStat> Tenacity</stats><br><br><rules>Tenacity reduces the duration of <status>Stun</status>, <status>Slow</status>, <status>Taunt</status>, <status>Fear</status>, <status>Silence</status>, <status>Blind</status>, <status>Polymorph</status> and <status>Immobilizing</status> effects. It has no effect on <status>Airborne</status> or <status>Suppression</status>.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223111.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots",
                "SpellBlock",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 30,
                "FlatSpellBlockMod": 35
            }
        },
        "223112": {
            "name": "Guardian's Orb",
            "description": "<mainText><stats><attention>65</attention> Ability Power<br><attention>25</attention> Ability Haste</stats><br><li><passive>Recovery:</passive> Restores Mana over time. If you can't gain mana, restores Health instead.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223112.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 65
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "223115": {
            "name": "Nashor's Tooth",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><nerfedStat>45%</nerfedStat> Attack Speed<br><attention>15</attention> Ability Haste</stats><br><li><passive>Icathian Bite:</passive> Attacks apply magic damage <OnHit>On-Hit</OnHit>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223115.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 100,
                "PercentAttackSpeedMod": 0.45
            }
        },
        "223116": {
            "name": "Rylai's Crystal Scepter",
            "description": "<mainText><stats><buffedStat>85</buffedStat> Ability Power<br><buffedStat>475</buffedStat> Health</stats><br><li><passive>Rimefrost:</passive> Damaging Abilities <status>Slow</status> enemies.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223116.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Slow"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 475,
                "FlatMagicDamageMod": 85
            },
            "effect": {
                "Effect1Amount": "-0.3",
                "Effect2Amount": "-0.3",
                "Effect3Amount": "-0.3",
                "Effect4Amount": "1",
                "Effect5Amount": "1",
                "Effect6Amount": "1"
            }
        },
        "223119": {
            "name": "Winter's Approach",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus <scaleHealth>Health equal to Total Mana</scaleHealth>.<li><passive>Mana Charge:</passive> <buffedStat>After 2 combat rounds</buffedStat>, this item transforms into <rarityLegendary>Fimbulwinter</rarityLegendary>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223119.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 500
            }
        },
        "223121": {
            "name": "Fimbulwinter",
            "description": "<mainText><stats><buffedStat>500</buffedStat> Health<br><attention>860</attention> Mana<br><buffedStat>20</buffedStat> Ability Haste</stats><li><passive>Awe:</passive> Gain bonus Health based on Mana.<li><passive>Everlasting:</passive> <status>Immobilizing</status> or <status>Slowing</status> an enemy champion grants a Shield. The Shield is increased if more than one enemy is nearby.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 223119,
            "inStore": false,
            "image": {
                "full": "223121.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMPPoolMod": 860
            }
        },
        "223124": {
            "name": "Guinsoo's Rageblade",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>25</attention> Ability Power<br><buffedStat>30%</buffedStat> Attack Speed</stats><br><li><passive>Wrath:</passive> Attacks apply bonus damage <OnHit>On-Hit</OnHit>. Your Critical Strike Chance is converted into more.<li><passive>Seething Strike:</passive> Basic attacks grant bonus <attackSpeed>Attack Speed</attackSpeed>, stacking up to a cap. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5%</attention> Armor Penetration and <attention>6%</attention> Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227030"
            ],
            "image": {
                "full": "223124.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "FlatMagicDamageMod": 25,
                "PercentAttackSpeedMod": 0.3
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "6",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            }
        },
        "223135": {
            "name": "Void Staff",
            "description": "<mainText><stats><buffedStat>75</buffedStat> Ability Power<br><attention>40%</attention> Magic Penetration</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223135.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 75
            }
        },
        "223139": {
            "name": "Mercurial Scimitar",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>50</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223139.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "CriticalStrike",
                "Active",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatCritChanceMod": 0.2,
                "FlatSpellBlockMod": 50
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1.5",
                "Effect3Amount": "45"
            }
        },
        "223142": {
            "name": "Youmuu's Ghostblade",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><buffedStat>22</buffedStat> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Wraith Step:</active> Gain Move Speed and Ghosting.<br><li><passive>Haunt:</passive> Gain up to 100 Spectral Shards while moving. Gain <speed> Move Speed</speed> out of champion combat based on the number of Spectral Shards. While at max Shards, gain <scaleAD> Lethality</scaleAD>. Shards will reset 3 seconds after dealing damage to an enemy champion.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention></attention> Attack Damage. <br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227029"
            ],
            "image": {
                "full": "223142.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0.4",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            }
        },
        "223143": {
            "name": "Randuin's Omen",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>60</attention> Armor</stats><br><br><active>Active -</active> <active>Humility:</active> <status>Slow</status> nearby enemies.<br><li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks.<li><passive>Critical Resilience:</passive> Critical Strikes deal 25% less damage to you.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223143.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "Active",
                "Slow"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 60
            }
        },
        "223146": {
            "name": "Hextech Gunblade",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>40</attention> Attack Damage<br><attention>20%</attention> Omnivamp</stats><br><br><active>Active -</active> <active>Lightning Bolt:</active> Shocks the target enemy champion, dealing 0 magic damage and slowing them by 40% for 2 seconds (30 second cooldown).</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223146.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "SpellDamage",
                "Active",
                "SpellVamp"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatMagicDamageMod": 80
            }
        },
        "223152": {
            "name": "Hextech Rocketbelt",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>9</attention> Magic Penetration<br><attention>400</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Supersonic:</active> Dash in target direction, unleashing an arc of magic missiles that deal damage. Then, gain Move Speed towards enemy champions.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227011"
            ],
            "image": {
                "full": "223152.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 90
            }
        },
        "223153": {
            "name": "Blade of The Ruined King",
            "description": "<mainText><stats><nerfedStat>35</nerfedStat> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>8%</attention> Life Steal</stats><br><li><passive>Mist's Edge:</passive> Attacks apply physical damage based off of the target's current Health. <li><passive>Siphon:</passive> Attacking a champion 3 times deals magic damage and steals Move Speed.<br><br>Item performance differs for melee and ranged users.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223153.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "LifeSteal",
                "Slow",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "PercentAttackSpeedMod": 0.25,
                "PercentLifeStealMod": 0.08
            }
        },
        "223156": {
            "name": "Maw of Malmortius",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>50</attention> Magic Resist</stats><br><li><passive>Lifeline:</passive> Upon taking magic damage that would reduce Health below 30%, gain a magic damage Shield. When <passive>Lifeline</passive> triggers, gain Omnivamp until the end of combat.  </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "image": {
                "full": "223156.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatSpellBlockMod": 50
            }
        },
        "223157": {
            "name": "Zhonya's Hourglass",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>45</attention> Armor<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Stasis:</active> You become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time <buffedStat>(30s )</buffedStat>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223157.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "FlatArmorMod": 45
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "30"
            }
        },
        "223158": {
            "name": "Ionian Boots of Lucidity",
            "description": "<mainText><stats><buffedStat>40</buffedStat> Ability Haste<br><attention>45</attention> Move Speed</stats><br><li>Gain 12 Summoner Spell Haste.<br><br><flavorText>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.'</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223158.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            }
        },
        "223161": {
            "name": "Spear of Shojin",
            "description": "<mainText><stats><nerfedStat>60</nerfedStat> Attack Damage<br><nerfedStat>200</nerfedStat> Health<br><attention>20</attention> Ability Haste</stats><br><li><passive>Dragonforce:</passive> Your Non-Ultimate spells gain (8 (+0.08 per 100 Bonus AD) | 6 (+0.06 per 100 Bonus AD)) Ability Haste, reduced to (4 (+0.04 per 100 Bonus AD) | 3 (+0.03 per 100 Bonus AD))) Ability Haste for Immobilizing spells.<li><passive>Exigency:</passive> Gain up to (0.15 | 0.1) increased move speed, based on your missing health (Maxed when below 33% Health).<br><br>Item performance differs for melee and ranged users.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223161.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "FlatHPPoolMod": 200
            }
        },
        "223165": {
            "name": "Morellonomicon",
            "description": "<mainText><stats><buffedStat>100</buffedStat> Ability Power<br><buffedStat>250</buffedStat> Health<br><attention>10</attention> Magic Penetration</stats><br><li><passive>Affliction:</passive> Dealing magic damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223165.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 100
            }
        },
        "223172": {
            "name": "Zephyr",
            "description": "<mainText><stats><attention>50%</attention> Attack Speed<br><attention>10%</attention> Move Speed<br><attention>25</attention> Ability Haste<br><attention>30%</attention> Tenacity</stats><br><li><passive>Like the Wind:</passive> Gain 5% Attack Speed <OnHit>On-Hit</OnHit> for 6 seconds, stacking up to 30% Attack Speed.<br><br><rules>Tenacity reduces the duration of <status>Stun</status>, <status>Slow</status>, <status>Taunt</status>, <status>Fear</status>, <status>Silence</status>, <status>Blind</status>, <status>Polymorph</status> and <status>Immobilizing</status> effects. It has no effect on <status>Airborne</status> or <status>Suppression</status>.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223172.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.1,
                "PercentAttackSpeedMod": 0.5
            }
        },
        "223177": {
            "name": "Guardian's Blade",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223177.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "LifeSteal",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "FlatHPPoolMod": 300
            },
            "effect": {
                "Effect1Amount": "10"
            }
        },
        "223181": {
            "name": "Hullbreaker",
            "description": "<mainText><stats><buffedStat>60</buffedStat> Attack Damage<br><buffedStat>500</buffedStat> Health<br><attention>150%</attention> Base Health Regen<br><attention>5%</attention> Move Speed</stats><br><br><li><passive>Solo Party:</passive> While no allied champions are nearby you gain <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> and Attacks deal increased damage to towers.<br><br><rules>Solo Party's resistances decay over 3 seconds when an ally gets too close.</rules><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223181.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Damage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "PercentMovementSpeedMod": 0.05,
                "FlatMovementSpeedMod": 0.05,
                "FlatHPPoolMod": 500
            }
        },
        "223184": {
            "name": "Guardian's Hammer",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>35%</attention> Attack Speed<br><attention>10%</attention> Life Steal</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223184.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.35,
                "PercentLifeStealMod": 0.1
            }
        },
        "223185": {
            "name": "Guardian's Dirk",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>15</attention> Lethality<br><attention>10</attention> Ability Haste</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223185.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Damage",
                "ArmorPenetration",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30
            }
        },
        "223190": {
            "name": "Locket of the Iron Solari",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>30</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Devotion:</active> Grant nearby allies a <shield>Shield</shield>, decaying over time.<br><li><passive>Consecrate:</passive> Grant nearby allied champions  <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor and Magic Resist increase to <passive>Consecrate</passive>.<br><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227019"
            ],
            "image": {
                "full": "223190.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "Active",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            }
        },
        "223193": {
            "name": "Gargoyle Stoneplate",
            "description": "<mainText><stats><nerfedStat>35</nerfedStat> Armor<br><nerfedStat>35</nerfedStat> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Unbreakable:</active> Gain a Shield that decays and grow in size.<br><li><passive>Fortify:</passive> Taking damage from a champion grants a stack of <scaleArmor>bonus Armor</scaleArmor> and <scaleMR>bonus Magic Resist</scaleMR>.<br><br><rules>Max 5 stacks; 1 per champion.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223193.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatArmorMod": 35
            }
        },
        "223222": {
            "name": "Mikael's Blessing",
            "description": "<mainText><stats><buffedStat>400</buffedStat> Health<br><attention>100%</attention> Base Mana Regen<br><buffedStat>20%</buffedStat> Heal and Shield Power</stats><br><br><active>Active -</active> <active>Purify:</active> Restore Health and Remove all crowd control debuffs (except <status>Knockups</status> and <status>Suppression</status>) from an ally champion.<br><li><passive>Harmony:</passive> Gain 25% Base Health Regeneration for every additional <scalemana>25% Base Mana Regeneration</scalemana>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223222.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Mana",
                "ManaRegen",
                "Active",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400
            }
        },
        "223504": {
            "name": "Ardent Censer",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><buffedStat>12%</buffedStat> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><attention>5%</attention> Move Speed</stats><br><li><passive>Sanctify:</passive> Healing or Shielding another ally enhances you both, granting Attack Speed and magic damage <OnHit>On-Hit</OnHit>. <br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223504.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "ManaRegen",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMagicDamageMod": 35
            }
        },
        "223508": {
            "name": "Essence Reaver",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><buffedStat>25</buffedStat> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack deals additional damage and restores Mana.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223508.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ManaRegen",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "FlatCritChanceMod": 0.2
            }
        },
        "223742": {
            "name": "Dead Man's Plate",
            "description": "<mainText><stats><buffedStat>350</buffedStat> Health<br><buffedStat>50</buffedStat> Armor<br><buffedStat>7%</buffedStat> Move Speed</stats><li><passive>Shipwrecker:</passive> While moving, build up  Move Speed. Your next Attack discharges built up Move Speed to deal damage. If dealt by a Melee champion at top speed, the Attack also <status>Slows</status> the target.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223742.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 50
            }
        },
        "223748": {
            "name": "Titanic Hydra",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>500</attention> Health</stats><br><li><passive>Colossus:</passive> Gain bonus <scaleAD>Attack Damage based off of bonus Health</scaleAD>.<li><passive>Cleave:</passive> Attacks apply additional damage <OnHit>On-Hit</OnHit>, creating a shockwave that deals damage to enemies behind the target.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "223748.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatHPPoolMod": 500
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "0.1",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "5"
            }
        },
        "223814": {
            "name": "Edge of Night",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><buffedStat>14</buffedStat> Lethality<br><buffedStat>375</buffedStat> Health</stats><br><li><passive>Annul:</passive> Gain a Spell Shield that blocks the next enemy Ability.<br><br><rules>Item's cooldown is restarted if you take damage before it is completed.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "image": {
                "full": "223814.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 375
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "40"
            }
        },
        "224004": {
            "name": "Spectral Cutlass",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>21</attention> Lethality</stats><br><br><active>Active -</active> <active>Soul Anchor:</active> Mark your current location. After 5 seconds, return to that location (30s ).</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224004.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70
            }
        },
        "224005": {
            "name": "Imperial Mandate",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><buffedStat>30</buffedStat> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Coordinated Fire:</passive> Abilities that <status>Slow</status> or <status>Immobilize</status> a champion deal <magicDamage>bonus magic damage</magicDamage> and marks them. Ally champion damage detonates the mark, dealing additional magic damage and granting you both Move Speed. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224005.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 80
            }
        },
        "224401": {
            "name": "Force of Nature",
            "description": "<mainText><stats><buffedStat>450</buffedStat> Health<br><attention>60</attention> Magic Resist<br><attention>5%</attention> Move Speed</stats><br><li><passive>Absorb:</passive> Taking <magicDamage>magic damage</magicDamage> from enemy Champions grants a stack of <attention>Steadfast</attention>. Enemy <status>Immobilizing</status> effects grant additional stacks.<li><passive>Dissipate:</passive> While at max stacks of <attention>Steadfast</attention>, gain increased Magic Resist and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224401.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatHPPoolMod": 450,
                "FlatSpellBlockMod": 60
            }
        },
        "224403": {
            "name": "The Golden Spatula",
            "description": "<mainText><stats><attention>100</attention> Attack Damage<br><attention>150</attention> Ability Power<br><attention>70%</attention> Attack Speed<br><attention>35%</attention> Critical Strike Chance<br><attention>350</attention> Health<br><attention>40</attention> Armor<br><attention>40</attention> Magic Resist<br><attention>350</attention> Mana<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Move Speed<br><attention>15%</attention> Life Steal<br><attention>200%</attention> Base Health Regen<br><attention>200%</attention> Base Mana Regen</stats><br><li><passive>Doing Something:</passive> You are permanently On Fire!</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224403.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 687,
                "purchasable": true,
                "total": 687,
                "sell": 481
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 100,
                "FlatCritChanceMod": 0.35,
                "PercentMovementSpeedMod": 0.1,
                "FlatHPPoolMod": 350,
                "FlatSpellBlockMod": 40,
                "FlatMPPoolMod": 350,
                "FlatMagicDamageMod": 150,
                "FlatArmorMod": 40,
                "PercentAttackSpeedMod": 0.7,
                "PercentLifeStealMod": 0.15
            }
        },
        "224628": {
            "name": "Horizon Focus",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><buffedStat>150</buffedStat> Health<br><buffedStat>15</buffedStat> Ability Haste</stats><br><li><passive>Hypershot:</passive> Damaging a champion with a non-targeted Ability at over 700 range or <status>Slowing or Immobilizing</status> them <keywordStealth>Reveals</keywordStealth> them and increases their damage taken from you.<br><br><rules>The Ability that triggers <passive>Hypershot</passive> also benefits from the damage increase. Pets and non-immobilizing traps do not trigger this effect. Only the initial placement of zone Abilities will trigger this effect. Distance is measured from the Ability cast position. </rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224628.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 100
            }
        },
        "224629": {
            "name": "Cosmic Drive",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><buffedStat>35</buffedStat> Ability Haste<br><attention>5%</attention> Move Speed</stats><br><li><passive>Spelldance:</passive> Damaging a champion generates a stack of <speed>2.5% Move Speed</speed> every 1.5 seconds for the next 5 seconds up to <speed>10% Move Speed</speed>. At 4 stacks, gain an additional <speed>10% Move Speed</speed> (<speed>20% Move Speed</speed> total). Dealing damage refreshes this effect.<br> <br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224629.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMagicDamageMod": 100
            }
        },
        "224633": {
            "name": "Riftmaker",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste<br><attention>7%</attention> Omnivamp</stats><br><li><passive>Void Corruption:</passive> For each second damaging enemy champions, deal bonus damage. At maximum strength, the bonus damage is dealt as <trueDamage>true damage</trueDamage> instead. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Omnivamp and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227009"
            ],
            "image": {
                "full": "224633.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 70
            }
        },
        "224636": {
            "name": "Night Harvester",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>400</attention> Health<br><attention>25</attention> Ability Haste</stats><br><li><passive>Soulrend:</passive> Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227010"
            ],
            "image": {
                "full": "224636.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 90
            }
        },
        "224637": {
            "name": "Demonic Embrace",
            "description": "<mainText><stats><attention>75</attention> Ability Power<br><attention>350</attention> Health</stats><br><li><passive>Azakana's Gaze:</passive> Dealing Ability damage burns enemies for max Health magic damage every second.<li><passive>Dark Pact:</passive> Gain <scaleHealth>bonus Health</scaleHealth> as <scaleAP>Ability Power</scaleAP>. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224637.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 75
            }
        },
        "224644": {
            "name": "Crown of the Shattered Queen",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Safeguard:</passive> You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227024"
            ],
            "image": {
                "full": "224644.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            }
        },
        "224645": {
            "name": "Shadowflame",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>200</attention> Health</stats><br><li><passive>Cinderbloom:</passive> Damage to champions benefits from additional <keywordStealth>Magic Penetration</keywordStealth> based on their current <scaleHealth>Health</scaleHealth>. If the target was recently affected by Shields, gain the maximum benefit against that target. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "224645.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "MagicPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 100
            }
        },
        "226035": {
            "name": "Silvermere Dawn",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><buffedStat>400</buffedStat> Health<br><attention>40</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Tenacity and Slow Resistance.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226035.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Damage",
                "Active",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 40
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "45"
            }
        },
        "226333": {
            "name": "Death's Dance",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>15</attention> Ability Haste<br><attention>45</attention> Armor</stats><br><li><passive>Ignore Pain:</passive> Damage taken is dealt to you over time instead.<li><passive>Defy:</passive> Champion takedowns cleanse <passive>Ignore Pain's</passive> remaining damage pool and restore Health over time.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "image": {
                "full": "226333.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Armor",
                "Damage",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatArmorMod": 45
            }
        },
        "226609": {
            "name": "Chempunk Chainsword",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><buffedStat>400</buffedStat> Health<br><attention>25</attention> Ability Haste</stats><br><li><passive>Hackshorn:</passive> Dealing physical damage applies 40% <status>Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226609.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatHPPoolMod": 400
            }
        },
        "226616": {
            "name": "Staff of Flowing Water",
            "description": "<mainText><stats><buffedStat>35</buffedStat> Ability Power<br><buffedStat>12%</buffedStat> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><buffedStat>15%</buffedStat> Move Speed</stats><br><li><passive>Rapids:</passive> Healing or Shielding another ally grants you both Ability Power and Ability Haste.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226616.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.15,
                "FlatMagicDamageMod": 35
            }
        },
        "226617": {
            "name": "Moonstone Renewer",
            "description": "<mainText><stats><buffedStat>45</buffedStat> Ability Power<br><attention>200</attention> Health<br><buffedStat>30</buffedStat> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Starlit Grace:</passive> Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing or shielding based on the original amount<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Heal and Shield Power.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227021"
            ],
            "image": {
                "full": "226617.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 45
            }
        },
        "226620": {
            "name": "Echoes of Helia",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>300</attention> Health<br><attention>30</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><li><passive>Soul Siphon:</passive> Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to restore Health and deals magic damage per Shard to the nearest enemy champion.<br><li><passive>Dissonance:</passive> Gain <scaleAP>Ability Power</scaleAP> per <scaleMana> Base Mana Regeneration</scaleMana>. Disables Harmony.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Ability Haste.</attention><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227033"
            ],
            "image": {
                "full": "226620.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 30
            }
        },
        "226630": {
            "name": "Goredrinker",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>400</attention> Health<br><attention>20</attention> Ability Haste<br><attention>8%</attention> Omnivamp</stats><br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.Goredrinker</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227015"
            ],
            "image": {
                "full": "226630.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatHPPoolMod": 400
            }
        },
        "226631": {
            "name": "Stridebreaker",
            "description": "<mainText><stats><nerfedStat>50</nerfedStat> Attack Damage<br><attention>20%</attention> Attack Speed<br><attention>375</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Halting Slash:</active> Deal damage to nearby enemies, <status>Slowing</status> them. Can be cast while moving.<br><li><passive>Heroic Gait:</passive> Dealing physical damage grants Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227016"
            ],
            "image": {
                "full": "226631.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 375,
                "PercentAttackSpeedMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "0",
                "Effect3Amount": "90",
                "Effect4Amount": "0",
                "Effect5Amount": "10"
            }
        },
        "226632": {
            "name": "Divine Sunderer",
            "description": "<mainText><stats><nerfedStat>35</nerfedStat> Attack Damage<br><nerfedStat>200</nerfedStat> Health<br><attention>20</attention> Ability Haste</stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Magic Penetration.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227017"
            ],
            "image": {
                "full": "226632.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatHPPoolMod": 200
            }
        },
        "226653": {
            "name": "Liandry's Anguish",
            "description": "<mainText><stats><nerfedStat>70</nerfedStat> Ability Power<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Agony:</passive> Deal bonus magic damage to Champions based on the target's bonus Health.<li><passive>Torment:</passive> Dealing damage with Abilities causes enemies to burn over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227012"
            ],
            "image": {
                "full": "226653.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 70
            }
        },
        "226655": {
            "name": "Luden's Tempest",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><buffedStat>9</buffedStat> Magic Penetration<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Echo:</passive> Damaging Abilities deal magic damage to the target and 3 nearby enemies and grants you Move Speed. Dealing ability damage to Champions reduces this item's cooldown.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227013"
            ],
            "image": {
                "full": "226655.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            }
        },
        "226656": {
            "name": "Everfrost",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><buffedStat>400</buffedStat> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Glaciate:</active> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Power. <br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227014"
            ],
            "image": {
                "full": "226656.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 70
            }
        },
        "226657": {
            "name": "Rod of Ages",
            "description": "<mainText><stats><buffedStat>70</buffedStat> Ability Power<br><attention>400</attention> Health<br><attention>400</attention> Mana</stats><br><br><buffedStat>After 2 combat rounds</buffedStat>, this item gains 300 Health, 300 Mana, 40 Ability Power. In addition, gain a level and all effects of Eternity are increased by 50%.<br><li><passive>Eternity:</passive> Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second. For every 200 Health or Mana restored this way, gain <speed>35% Decaying Move Speed</speed> for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5 Ability Haste.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227028"
            ],
            "image": {
                "full": "226657.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 400,
                "FlatMagicDamageMod": 70
            }
        },
        "226662": {
            "name": "Iceborn Gauntlet",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>50</attention> Armor<br><nerfedStat>10</nerfedStat> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2.5s. Enemies that move across the field are <status>Slowed</status>. Your primary target is crippled, applying a 100% stronger slow on them and reducing their damage by 10% against you for 2.5s. (1.5s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>50 Health</attention>, <attention>5%</attention> Tenacity, and <attention>5%</attention> Slow Resist.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227005"
            ],
            "image": {
                "full": "226662.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 50
            }
        },
        "226664": {
            "name": "Turbo Chemtank",
            "description": "<mainText><stats><buffedStat>600</buffedStat> Health<br><attention>50</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Supercharged:</active> Grants Move Speed towards enemies or enemy turrets. Once near an enemy (or after 4 seconds) a shockwave is emitted that <status>Slows</status> nearby champions.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226664.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatSpellBlockMod": 50
            }
        },
        "226665": {
            "name": "Jak'Sho, The Protean",
            "description": "<mainText><stats><nerfedStat>300</nerfedStat> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><nerfedStat>10</nerfedStat> Ability Haste</stats><br><li><passive>Voidborn Resilience:</passive> For each second in champion combat gain a stack granting <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>, up to 8 stacks max. At max stacks become empowered, instantly draining enemies around you for magic damage, healing yourself, and increasing your bonus resist until end of combat.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227026"
            ],
            "image": {
                "full": "226665.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            }
        },
        "226667": {
            "name": "Radiant Virtue",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227027"
            ],
            "image": {
                "full": "226667.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            }
        },
        "226671": {
            "name": "Galeforce",
            "description": "<mainText><stats><nerfedStat>60</nerfedStat> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227006"
            ],
            "image": {
                "full": "226671.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.4
            }
        },
        "226672": {
            "name": "Kraken Slayer",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Bring It Down:</passive> Every third Attack deals additional physical damage. Repeated triggers on the same target increase the damage dealt.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226672.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatCritChanceMod": 0.2,
                "PercentAttackSpeedMod": 0.3
            }
        },
        "226673": {
            "name": "Immortal Shieldbow",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>10%</attention> Life Steal</stats><br><li><passive>Lifeline:</passive> When taking damage that would reduce you below 30% Health, gain a Shield. In addition, gain Attack Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226673.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatCritChanceMod": 0.2,
                "PercentLifeStealMod": 0.1
            }
        },
        "226675": {
            "name": "Navori Quickblades",
            "description": "<mainText><stats><nerfedStat>55</nerfedStat> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>15</attention> Ability Haste</stats><br><li><passive>Transcendence:</passive>  Your Attacks reduce your non-Ultimate Ability cooldowns.<li><passive>Impermanence:</passive> Your abilities deal increased damage based on Critical Strike Chance.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227032"
            ],
            "image": {
                "full": "226675.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            }
        },
        "226676": {
            "name": "The Collector",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><buffedStat>18</buffedStat> Lethality</stats><br><li><passive>Death and Taxes:</passive> Dealing damage that would leave an enemy champion below 5% Health executes them.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226676.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2
            }
        },
        "226691": {
            "name": "Duskblade of Draktharr",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><buffedStat>22</buffedStat> Lethality<br><attention>20</attention> Ability Haste</stats><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (10s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227002"
            ],
            "image": {
                "full": "226691.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            }
        },
        "226692": {
            "name": "Eclipse",
            "description": "<mainText><stats><nerfedStat>50</nerfedStat> Attack Damage<br><buffedStat>16</buffedStat> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><li><passive>Ever Rising Moon:</passive> Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals additional damage, grants you Move Speed and a Shield.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "into": [
                "227001"
            ],
            "image": {
                "full": "226692.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            }
        },
        "226693": {
            "name": "Prowler's Claw",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><buffedStat>22</buffedStat> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><li><passive>Sandstrike:</passive> After dashing, blinking, or exiting Stealth, your next Attack on a champion deals an additional physical damage. If dealt by a Melee champion, this Attack also <status>Slows</status> the target.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226693.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "226694": {
            "name": "Serylda's Grudge",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><buffedStat>35%</buffedStat> Armor Penetration<br><nerfedStat>15</nerfedStat> Ability Haste</stats><br><li><passive>Bitter Cold:</passive> Damaging Abilities <status>Slow</status> enemies.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226694.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45
            }
        },
        "226695": {
            "name": "Serpent's Fang",
            "description": "<mainText><stats><buffedStat>65</buffedStat> Attack Damage<br><buffedStat>19</buffedStat> Lethality</stats><br><li><passive>Shield Reaver:</passive> Dealing damage to an enemy champion reduces any shields they gain. When you damage an enemy who is unaffected by Shield Reaver, reduce all shields on them.<br><br>Item performance differs for melee and ranged users.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226695.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65
            }
        },
        "226696": {
            "name": "Axiom Arc",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><buffedStat>22</buffedStat> Lethality<br><attention>25</attention> Ability Haste</stats><br><li><passive>Apophthegm:</passive> <buffedStat>Your Ultimate Abilities deal 20% increased damage</buffedStat>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "226696.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "227001": {
            "name": "Syzygy",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>20</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><li><passive>Ever Rising Moon:</passive> Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals additional damage, grants you Move Speed and a Shield.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226692"
            ],
            "inStore": false,
            "image": {
                "full": "227001.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70
            },
            "depth": 2
        },
        "227002": {
            "name": "Draktharr's Shadowcarver",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (10s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226691"
            ],
            "inStore": false,
            "image": {
                "full": "227002.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 2
        },
        "227005": {
            "name": "Frozen Fist",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>70</ornnBonus> Armor<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2.5s. Enemies that move across the field are <status>Slowed</status>. Your primary target is crippled, applying a 100% stronger slow on them and reducing their damage by 10% against you for 2.5s. (1.5s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>50 Health</attention>, <attention>5%</attention> Tenacity, and <attention>5%</attention> Slow Resist.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226662"
            ],
            "inStore": false,
            "image": {
                "full": "227005.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatArmorMod": 70
            },
            "depth": 2
        },
        "227006": {
            "name": "Typhoon",
            "description": "<mainText><stats><nerfedStat>70</nerfedStat> Attack Damage<br><ornnBonus>40%</ornnBonus> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><ornnBonus>10%</ornnBonus> Move Speed</stats><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226671"
            ],
            "inStore": false,
            "image": {
                "full": "227006.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.1,
                "PercentAttackSpeedMod": 0.4
            },
            "depth": 2
        },
        "227009": {
            "name": "Icathia's Curse",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>450</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste<br><ornnBonus>8%</ornnBonus> Omnivamp</stats><br><li><passive>Void Corruption:</passive> For each second damaging enemy champions, deal bonus damage. At maximum strength, the bonus damage is dealt as <trueDamage>true damage</trueDamage> instead. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Omnivamp and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "224633"
            ],
            "inStore": false,
            "image": {
                "full": "227009.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatMagicDamageMod": 90
            },
            "depth": 2
        },
        "227010": {
            "name": "Vespertide",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>500</ornnBonus> Health<br><ornnBonus>30</ornnBonus> Ability Haste</stats><br><li><passive>Soulrend:</passive> Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "224636"
            ],
            "inStore": false,
            "image": {
                "full": "227010.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 120
            },
            "depth": 2
        },
        "227011": {
            "name": "Upgraded Aeropack",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>10</ornnBonus> Magic Penetration<br><ornnBonus>500</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Supersonic:</active> Dash in target direction, unleashing an arc of magic missiles that deal damage. Then, gain Move Speed towards enemy champions.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223152"
            ],
            "inStore": false,
            "image": {
                "full": "227011.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 120
            },
            "depth": 2
        },
        "227012": {
            "name": "Liandry's Lament",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Agony:</passive> Deal bonus magic damage to Champions based on the target's bonus Health.<li><passive>Torment:</passive> Dealing damage with Abilities causes enemies to burn over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226653"
            ],
            "inStore": false,
            "image": {
                "full": "227012.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227013": {
            "name": "Eye of Luden",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>13</ornnBonus> Magic Penetration<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Echo:</passive> Damaging Abilities deal magic damage to the target and 3 nearby enemies and grants you Move Speed. Dealing ability damage to Champions reduces this item's cooldown.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226655"
            ],
            "inStore": false,
            "image": {
                "full": "227013.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227014": {
            "name": "Eternal Winter",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Glaciate:</active> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Power. <br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226656"
            ],
            "inStore": false,
            "image": {
                "full": "227014.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 90
            },
            "depth": 2
        },
        "227015": {
            "name": "Ceaseless Hunger",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>600</attention> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>12%</ornnBonus> Omnivamp</stats><br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.Goredrinker</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226630"
            ],
            "inStore": false,
            "image": {
                "full": "227015.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatHPPoolMod": 600
            },
            "depth": 2
        },
        "227016": {
            "name": "Dreamshatter",
            "description": "<mainText><stats><nerfedStat>60</nerfedStat> Attack Damage<br><ornnBonus>30%</ornnBonus> Attack Speed<br><ornnBonus>400</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Halting Slash:</active> Deal damage to nearby enemies, <status>Slowing</status> them. Can be cast while moving.<br><li><passive>Heroic Gait:</passive> Dealing physical damage grants Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226631"
            ],
            "inStore": false,
            "image": {
                "full": "227016.png",
                "sprite": "item1.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "FlatHPPoolMod": 400,
                "PercentAttackSpeedMod": 0.3
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "0",
                "Effect3Amount": "90",
                "Effect4Amount": "0",
                "Effect5Amount": "10"
            },
            "depth": 2
        },
        "227017": {
            "name": "Deicide",
            "description": "<mainText><stats><nerfedStat>55</nerfedStat> Attack Damage<br><nerfedStat>350</nerfedStat> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Magic Penetration.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226632"
            ],
            "inStore": false,
            "image": {
                "full": "227017.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatHPPoolMod": 350
            },
            "depth": 2
        },
        "227018": {
            "name": "Infinity Force",
            "description": "<mainText><stats><nerfedStat>45</nerfedStat> Attack Damage<br><ornnBonus>45%</ornnBonus> Attack Speed<br><attention>445</attention> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Threefold Strike:</passive> Attacks grant Move Speed. If the target is a champion, increase your base Attack Damage, stacking.<li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Attack Damage, Ability Haste, and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223078"
            ],
            "inStore": false,
            "image": {
                "full": "227018.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatHPPoolMod": 445,
                "PercentAttackSpeedMod": 0.45
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            },
            "depth": 2
        },
        "227019": {
            "name": "Reliquary of the Golden Dawn",
            "description": "<mainText><stats><buffedStat>600</buffedStat> Health<br><ornnBonus>35</ornnBonus> Ability Haste<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist</stats><br><br><active>Active -</active> <active>Devotion:</active> Grant nearby allies a <shield>Shield</shield>, decaying over time.<br><li><passive>Consecrate:</passive> Grant nearby allied champions  <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor and Magic Resist increase to <passive>Consecrate</passive>.<br><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223190"
            ],
            "inStore": false,
            "image": {
                "full": "227019.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "Active",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227020": {
            "name": "Shurelya's Requiem",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Ability Power<br><ornnBonus>600</ornnBonus> Health<br><buffedStat>45</buffedStat> Ability Haste<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><br><active>Active -</active> <active>Inspire:</active> Grants nearby allies Move Speed.<li><passive>Motivate:</passive> Empowering or Protecting another ally Champion grants both allies Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "222065"
            ],
            "inStore": false,
            "image": {
                "full": "227020.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "FlatMagicDamageMod": 75
            },
            "depth": 2
        },
        "227021": {
            "name": "Starcaster",
            "description": "<mainText><stats><ornnBonus>80</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>35</ornnBonus> Ability Haste<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><li><passive>Starlit Grace:</passive> Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing or shielding based on the original amount<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Heal and Shield Power.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226617"
            ],
            "inStore": false,
            "image": {
                "full": "227021.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80
            },
            "depth": 2
        },
        "227023": {
            "name": "Equinox",
            "description": "<mainText><stats><ornnBonus>500</ornnBonus> Health<br><attention>40</attention> Armor<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist</stats><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223001"
            ],
            "inStore": false,
            "image": {
                "full": "227023.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227024": {
            "name": "Caesura",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Safeguard:</passive> You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "224644"
            ],
            "inStore": false,
            "image": {
                "full": "227024.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 100
            },
            "depth": 2
        },
        "227025": {
            "name": "Leviathan",
            "description": "<mainText><stats><ornnBonus>1050</ornnBonus> Health<br><ornnBonus>300%</ornnBonus> Base Health Regen<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><li><passive>Colossal Consumption:</passive> Charge up a powerful attack against a champion over 3s while within 700 range of them. The charged attack deals 125 + <scalehealth>7%</scalehealth> of your max Health as bonus physical damage, and grants you 12% of that amount as permanent max Health. (20s) cooldown per target.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>1%</attention> Increased Health & <attention>6%</attention> Champion Size.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223084"
            ],
            "inStore": false,
            "image": {
                "full": "227025.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 1050
            },
            "depth": 2
        },
        "227026": {
            "name": "The Unspoken Parasite",
            "description": "<mainText><stats><nerfedStat>450</nerfedStat> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><li><passive>Voidborn Resilience:</passive> For each second in champion combat gain a stack granting <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>, up to 8 stacks max. At max stacks become empowered, instantly draining enemies around you for magic damage, healing yourself, and increasing your bonus resist until end of combat.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226665"
            ],
            "inStore": false,
            "image": {
                "full": "227026.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227027": {
            "name": "Primordial Dawn",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226667"
            ],
            "inStore": false,
            "image": {
                "full": "227027.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "227028": {
            "name": "Infinite Convergence",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>550</ornnBonus> Mana</stats><br><br><buffedStat>After 2 combat rounds</buffedStat>, this item gains 300 Health, 300 Mana, 40 Ability Power. In addition, gain a level and all effects of Eternity are increased by 50%.<br><li><passive>Eternity:</passive> Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second. For every 200 Health or Mana restored this way, gain <speed>35% Decaying Move Speed</speed> for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5 Ability Haste.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226657"
            ],
            "inStore": false,
            "image": {
                "full": "227028.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatMPPoolMod": 550,
                "FlatMagicDamageMod": 90
            },
            "depth": 2
        },
        "227029": {
            "name": "Youmuu's Wake",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Wraith Step:</active> Gain Move Speed and Ghosting.<br><li><passive>Haunt:</passive> Gain up to 100 Spectral Shards while moving. Gain <speed> Move Speed</speed> out of champion combat based on the number of Spectral Shards. While at max Shards, gain <scaleAD> Lethality</scaleAD>. Shards will reset 3 seconds after dealing damage to an enemy champion.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention></attention> Attack Damage. <br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223142"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227029.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0.25",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            },
            "depth": 2
        },
        "227030": {
            "name": "Seething Sorrow",
            "description": "<mainText><stats><ornnBonus>35</ornnBonus> Attack Damage<br><ornnBonus>35</ornnBonus> Ability Power<br><ornnBonus>40%</ornnBonus> Attack Speed</stats><br><li><passive>Wrath:</passive> Attacks apply bonus damage <OnHit>On-Hit</OnHit>. Your Critical Strike Chance is converted into more.<li><passive>Seething Strike:</passive> Basic attacks grant bonus <attackSpeed>Attack Speed</attackSpeed>, stacking up to a cap. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5%</attention> Armor Penetration and <attention>6%</attention> Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223124"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227030.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatMagicDamageMod": 35,
                "PercentAttackSpeedMod": 0.4
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "6",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            },
            "depth": 2
        },
        "227031": {
            "name": "Edge of Finality",
            "description": "<mainText><stats><ornnBonus>105</ornnBonus> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>45%</attention> Critical Strike Damage</stats><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><flavorText>One cut is all it takes.</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "223031"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227031.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 105,
                "FlatCritChanceMod": 0.2
            },
            "depth": 2
        },
        "227032": {
            "name": "Flicker",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Transcendence:</passive>  Your Attacks reduce your non-Ultimate Ability cooldowns.<li><passive>Impermanence:</passive> Your abilities deal increased damage based on Critical Strike Chance.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226675"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227032.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 90,
                "FlatCritChanceMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 2
        },
        "227033": {
            "name": "Cry of the Shrieking City",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Ability Power<br><ornnBonus>500</ornnBonus> Health<br><ornnBonus>45</ornnBonus> Ability Haste<br><ornnBonus>225%</ornnBonus> Base Mana Regen</stats><br><li><passive>Soul Siphon:</passive> Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to restore Health and deals magic damage per Shard to the nearest enemy champion.<br><li><passive>Dissonance:</passive> Gain <scaleAP>Ability Power</scaleAP> per <scaleMana> Base Mana Regeneration</scaleMana>. Disables Harmony.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Ability Haste.</attention><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "226620"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "227033.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatMagicDamageMod": 60
            },
            "depth": 2
        },
        "228001": {
            "name": "Anathema's Chains",
            "description": "<mainText><stats><attention>650</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Vow:</active> Choose a Nemesis (90s ).<br><li><passive>Vendetta:</passive> Take reduced damage against your Nemesis. They have reduced Tenacity while near you.<br><br><rules>Active can be cast at global range.</rules><br><br><flavorText>\"She swore to dedicate her life to his destruction...\"</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "228001.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 650
            }
        },
        "228002": {
            "name": "Wooglet's Witchcap",
            "description": "<mainText><stats><ornnBonus>300</ornnBonus> Ability Power<br><ornnBonus>50</ornnBonus> Armor<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Stasis:</active> You become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time <buffedStat>(20s )</buffedStat>.<br><li><passive>Magical Opus:</passive> Increases your total <scaleAP>Ability Power by 50%</scaleAP>.<br><br><b>Requires Augment: <prismatic>Quest: Wooglet's Witchcap</prismatic></b></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "228002.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 6000,
                "purchasable": true,
                "total": 6000,
                "sell": 4200
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 300,
                "FlatArmorMod": 50
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "20"
            }
        },
        "228003": {
            "name": "Deathblade",
            "description": "<mainText><stats><ornnBonus>150</ornnBonus> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>45%</attention> Critical Strike Damage<br><ornnBonus>20</ornnBonus> Lethality</stats><br><li><passive>Death and Taxes:</passive> Dealing damage that would leave an enemy champion below 7% Health executes them. Champion kills grant an additional 250 gold and heal you for 30% of the targets max health.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228003.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 9000,
                "purchasable": false,
                "total": 9000,
                "sell": 6300
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 150,
                "FlatCritChanceMod": 0.2
            }
        },
        "228004": {
            "name": "Adaptive Helm",
            "description": "<mainText><stats><ornnBonus>800</ornnBonus> Health<br><ornnBonus>50</ornnBonus> Armor<br><ornnBonus>100</ornnBonus> Magic Resist<br><ornnBonus>10</ornnBonus> Ability Haste</stats><br><li><passive>Voidborn Resilience:</passive> For each second in champion combat gain a stack granting 2 <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>, up to 8 stacks max. At max stacks become empowered, instantly draining enemies around you for 0 <magicDamage>magic damage</magicDamage> (healing you for the same amount), and increasing your bonus resists by 20% until end of combat. The drain repeats every 4s as long as you stay in combat.<li><passive>Absorb:</passive> Taking <magicDamage>magic damage</magicDamage> from enemy Champions grants a stack of <attention>Steadfast</attention> (max 8) for 7 seconds. Enemy <status>Immobilizing</status> effects grant an additional 2 stacks.<li><passive>Dissipate:</passive> While at 8 stacks of <attention>Steadfast</attention>, gain <scaleMR>50 Magic Resist</scaleMR> and 14% increased Move Speed.<br><rules>One spell can add a new stack of <attention>Steadfast</attention> every 1 second.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228004.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 6000,
                "purchasable": false,
                "total": 6000,
                "sell": 4200
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatHPPoolMod": 800,
                "FlatSpellBlockMod": 100,
                "FlatArmorMod": 50
            }
        },
        "228005": {
            "name": "Obsidian Cleaver",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>700</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Ability Haste</stats><br><li><passive>Carve:</passive> Dealing physical damage to a champion applies a stack of Armor reduction.<li><passive>Rage:</passive> Dealing physical damage to a champion grants Move Speed per stack of <unique>Carve</unique> on them.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228005.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatHPPoolMod": 700
            },
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0.07",
                "Effect3Amount": "6",
                "Effect4Amount": "6",
                "Effect5Amount": "0.42",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            }
        },
        "228006": {
            "name": "Sanguine Blade",
            "description": "<mainText><stats><ornnBonus>130</ornnBonus> Attack Damage<br><ornnBonus>40%</ornnBonus> Attack Speed<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>30%</ornnBonus> Life Steal</stats><br><li><passive>Cleave:</passive> Attacks and Abilities deal <physicalDamage>{{ Item_Melee_Ranged_Split }} physical damage</physicalDamage> to other enemies within 600 units of the target hit and triggering on-hit effects.<br><li><passive>Mist's Edge:</passive> Attacks apply an additional <nerfedStat>{{ Item_Melee_Ranged_Split_B }} enemy current Health physical damage</nerfedStat> {{ Item_Keyword_OnHit }}.<li><passive>Siphon:</passive> Attacking a champion 3 times deals <magicDamage>0 magic damage</magicDamage> and steals <speed>25% Move Speed</speed> for 2 seconds (30{{ Item_Cooldown }}).<br><rules>Maximum <passive>Mist's Edge</passive> damage dealt to minions and jungle monsters is 60.<br>{{ Item_Melee_Ranged_Rules }}</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228006.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 130,
                "PercentAttackSpeedMod": 0.4,
                "PercentLifeStealMod": 0.3
            }
        },
        "228008": {
            "name": "Runeglaive",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Attack Damage<br><ornnBonus>85</ornnBonus> Ability Power<br><ornnBonus>33%</ornnBonus> Attack Speed<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>600</ornnBonus> Health<br><ornnBonus>50</ornnBonus> Armor<br><ornnBonus>10%</ornnBonus> Move Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Threefold Strike:</passive> Attacks grant <speed>20 Move Speed</speed> for 5 seconds. If the target is a champion or structure, gain <scaleAD>0 Attack Damage</scaleAD> for 5 seconds, stacking up to 3 times (Max increase <scaleAD>0</scaleAD>).<br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with an additional <physicalDamage>0 + 4% of the targets max HP physical damage</physicalDamage>, restores <scaleMana>0 Mana</scaleMana>  and creates a frost field for 2.5s. Enemies that move across the field are <status>Slowed</status> by 30%. Your primary target is crippled, applying a 100% stronger slow on them and reducing their damage by 10% against you for 2.5s. (1s ). If the target is a champion, also heal for <healing>65% of the premitigation damage</healing>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "image": {
                "full": "228008.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 9000,
                "purchasable": false,
                "total": 9000,
                "sell": 6300
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.1,
                "FlatHPPoolMod": 600,
                "FlatMagicDamageMod": 85,
                "FlatArmorMod": 50,
                "PercentAttackSpeedMod": 0.33
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            }
        },
        "228020": {
            "name": "Abyssal Mask",
            "description": "<mainText><stats><buffedStat>350</buffedStat> Health<br><attention>60</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Unmake:</passive> <status>Curse</status> nearby enemy champions, reducing their Magic Resist. For each <status>Cursed</status> enemy, gain Magic Resist.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "228020.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "CooldownReduction",
                "MagicPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatSpellBlockMod": 60
            }
        },
        "2403": {
            "name": "Minion Dematerializer",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Kill target lane minion (10s ).</mainText><br>",
            "colloq": ";",
            "plaintext": "",
            "stacks": 10,
            "consumed": true,
            "inStore": false,
            "hideFromAll": true,
            "image": {
                "full": "2403.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "2419": {
            "name": "Commencing Stopwatch",
            "description": "<mainText><stats></stats><li>Transforms into a <rarityGeneric>Stopwatch</rarityGeneric> after 14 minutes. Takedowns reduce this timer by 2 minutes. That <rarityGeneric>Stopwatch</rarityGeneric> contributes 250 gold to the items it builds into.<br><br><rules>Stopwatch normally contributes 750 gold</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "into": [
                "2420",
                "3157",
                "3026"
            ],
            "image": {
                "full": "2419.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "2420": {
            "name": "Stopwatch",
            "description": "<mainText><stats></stats><active>Active -</active> <active>Stasis:</active> Use one time only to become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time (transforms into a <rarityGeneric>Broken Stopwatch</rarityGeneric>).</mainText><br>",
            "colloq": ";zhg;zonyas",
            "plaintext": "Activate to become invincible but unable to take actions",
            "into": [
                "3026",
                "3157",
                "4003"
            ],
            "image": {
                "full": "2420.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 750,
                "sell": 300
            },
            "tags": [
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5"
            }
        },
        "2421": {
            "name": "Broken Stopwatch",
            "description": "<mainText><stats></stats><br><li><passive>Shattered Time:</passive> Stopwatch is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you <rarityGeneric>Broken Stopwatches.</rarityGeneric></rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Upgrades to stopwatch",
            "hideFromAll": true,
            "into": [
                "3157",
                "3026"
            ],
            "image": {
                "full": "2421.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 750,
                "sell": 300
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "300"
            }
        },
        "2422": {
            "name": "Slightly Magical Footwear",
            "description": "<mainText><stats><attention>25</attention> Move Speed</stats><br><li>Grants an additional <speed>10 Move Speed</speed>. Boots that build from Slightly Magical Footwear retain this bonus Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "into": [
                "3006",
                "3047",
                "3020",
                "3158",
                "3111",
                "3117",
                "3009"
            ],
            "image": {
                "full": "2422.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": false,
                "total": 300,
                "sell": 90
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMovementSpeedMod": 25
            }
        },
        "2423": {
            "name": "Perfectly Timed Stopwatch",
            "description": "<mainText><stats></stats><active>Active -</active> <active>Stasis:</active> Use one time only to become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time (transforms into a <rarityGeneric>Broken Stopwatch</rarityGeneric>).</mainText><br>",
            "colloq": ";zhg;zonyas",
            "plaintext": "Activate to become invincible but unable to take actions",
            "inStore": false,
            "into": [
                "3157",
                "3026"
            ],
            "image": {
                "full": "2423.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": false,
                "total": 750,
                "sell": 300
            },
            "tags": [
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5"
            }
        },
        "2424": {
            "name": "Broken Stopwatch",
            "description": "<mainText><stats></stats><br><li><passive>Shattered Time:</passive> Stopwatch is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you <rarityGeneric>Broken Stopwatches.</rarityGeneric></rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "inStore": false,
            "hideFromAll": true,
            "into": [
                "3157",
                "3026"
            ],
            "image": {
                "full": "2424.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": false,
                "total": 750,
                "sell": 300
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "300"
            }
        },
        "3001": {
            "name": "Evenshroud",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText><br>",
            "colloq": ";",
            "plaintext": "Nearby enemies take more magic damage",
            "from": [
                "3023",
                "1033"
            ],
            "into": [
                "7023"
            ],
            "image": {
                "full": "3001.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "3003": {
            "name": "Archangel's Staff",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>500</attention> Mana<br><attention>200</attention> Health<br><attention>10</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain Ability Power equal to bonus Mana.<li><passive>Mana Charge:</passive> Strike a target with an Ability to consume a charge and gain 3 bonus Mana, doubled if the target is a champion. Grants a maximum of 360 Mana at which point this item transforms into <rarityLegendary>Seraph's Embrace</rarityLegendary>.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Increases Ability Power based on maximum Mana",
            "from": [
                "3070",
                "3067",
                "1058"
            ],
            "image": {
                "full": "3003.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMPPoolMod": 500,
                "FlatMagicDamageMod": 70
            },
            "depth": 3
        },
        "3004": {
            "name": "Manamune",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus <scaleAD>Attack Damage equal to your max Mana</scaleAD>. <li><passive>Mana Charge:</passive> Strike a target with an Ability or Attack to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana at which point this item transforms into <rarityLegendary>Muramana</rarityLegendary>.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Increases Attack Damage based on maximum Mana",
            "from": [
                "3070",
                "3133",
                "1036"
            ],
            "image": {
                "full": "3004.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1050,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatMPPoolMod": 500
            },
            "depth": 3
        },
        "3005": {
            "name": "Ghostcrawlers",
            "description": "<mainText><stats><attention>45</attention> Move Speed</stats><br><br><active>Active -</active> <active>Wall Walk:</active> Gain the ability to walk through walls for 6 seconds. While inside walls, gain 125 move speed. Casting a spell or attacking will end this effect. (60s ).</mainText><br>",
            "colloq": ";wreckoning;Wreckoning",
            "plaintext": "Increases Attack Damage based on maximum Health",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3005.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "depth": 2
        },
        "3006": {
            "name": "Berserker's Greaves",
            "description": "<mainText><stats><attention>35%</attention> Attack Speed<br><attention>45</attention> Move Speed</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and Attack Speed",
            "from": [
                "1001",
                "1042"
            ],
            "image": {
                "full": "3006.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "AttackSpeed",
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45,
                "PercentAttackSpeedMod": 0.35
            },
            "depth": 2
        },
        "3009": {
            "name": "Boots of Swiftness",
            "description": "<mainText><stats><attention>60</attention> Move Speed</stats><br><li>The strength of movement slowing effects is reduced by 25%.</mainText><br>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and reduces the effect of slows",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3009.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 60
            },
            "effect": {
                "Effect1Amount": "0.25"
            },
            "depth": 2
        },
        "3011": {
            "name": "Chemtech Putrifier",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>10%</attention> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><attention>15</attention> Ability Haste</stats><br><li><passive>Puffcap Toxin:</passive> Dealing damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3916",
                "3114"
            ],
            "image": {
                "full": "3011.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2100,
                "sell": 1470
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 35
            },
            "depth": 3
        },
        "3012": {
            "name": "Chalice of Blessing",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>50%</attention> Base Mana Regen</stats><br><li><passive>Harmony:</passive> Gain 25% Base Health Regeneration for every additional <scalemana>25% Base Mana Regeneration</scalemana>.<br><br><flavorText>'These blessed waters still carry their power to the worthy.'</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1004"
            ],
            "into": [
                "3222",
                "3107",
                "6620"
            ],
            "image": {
                "full": "3012.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3020": {
            "name": "Sorcerer's Shoes",
            "description": "<mainText><stats><attention>18</attention> Magic Penetration<br><attention>45</attention> Move Speed</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and magic damage",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3020.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Boots",
                "MagicPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "effect": {
                "Effect1Amount": "18"
            },
            "depth": 2
        },
        "3023": {
            "name": "Lifewell Pendant",
            "description": "<mainText><stats><attention>150</attention> Health<br><attention>25</attention> Armor<br><attention>5</attention> Ability Haste</stats><br><br><flavorText>'Fashionable and functional.'</flavorText></mainText><br>",
            "colloq": ";spooky ghosts",
            "plaintext": "Summon wraiths to slow and reveal enemy champions",
            "from": [
                "1028",
                "1029"
            ],
            "into": [
                "3109",
                "3190",
                "3001",
                "3050"
            ],
            "image": {
                "full": "3023.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 1050,
                "sell": 735
            },
            "tags": [
                "Health",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatArmorMod": 25
            },
            "depth": 2
        },
        "3024": {
            "name": "Glacial Buckler",
            "description": "<mainText><stats><attention>20</attention> Armor<br><attention>250</attention> Mana<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Armor and Cooldown Reduction",
            "from": [
                "1027",
                "1029"
            ],
            "into": [
                "3110",
                "3050"
            ],
            "image": {
                "full": "3024.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "Armor",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 20
            },
            "depth": 2
        },
        "3026": {
            "name": "Guardian Angel",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>40</attention> Armor</stats><br><li><passive>Saving Grace:</passive> Upon taking lethal damage, restores <healing>50% base Health</healing> and <scaleMana>30% max Mana</scaleMana> after 4 seconds of stasis (300s cooldown).</mainText><br>",
            "colloq": ";ga",
            "plaintext": "Periodically revives champion upon death",
            "from": [
                "1038",
                "1031",
                "2420"
            ],
            "image": {
                "full": "3026.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 3000,
                "sell": 1200
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "FlatArmorMod": 40
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "4",
                "Effect3Amount": "300",
                "Effect4Amount": "0.3"
            },
            "depth": 3
        },
        "3031": {
            "name": "Infinity Edge",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>45%</attention> Critical Strike Damage</stats><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.</mainText><br>",
            "colloq": ";ie",
            "plaintext": "Massively enhances critical strikes",
            "from": [
                "1038",
                "1037",
                "1018"
            ],
            "into": [
                "7031"
            ],
            "image": {
                "full": "3031.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 625,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatCritChanceMod": 0.2
            },
            "depth": 2
        },
        "3033": {
            "name": "Mortal Reminder",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>30%</attention> Armor Penetration<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Sepsis:</passive> Dealing physical damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": ";grievous",
            "plaintext": "Overcomes enemies with high Health recovery and Armor",
            "from": [
                "3123",
                "3035",
                "1018"
            ],
            "image": {
                "full": "3033.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 150,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatCritChanceMod": 0.2
            },
            "depth": 3
        },
        "3035": {
            "name": "Last Whisper",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>18%</attention> Armor Penetration</stats></mainText><br>",
            "colloq": ";lw",
            "plaintext": "Overcomes enemies with high Armor",
            "from": [
                "1036",
                "1036"
            ],
            "into": [
                "3033",
                "3036",
                "6694"
            ],
            "image": {
                "full": "3035.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 1450,
                "sell": 1015
            },
            "tags": [
                "ArmorPenetration",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "3036": {
            "name": "Lord Dominik's Regards",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>30%</attention> Armor Penetration</stats><br><li><passive>Giant Slayer:</passive> Deal bonus damage against champions with greater max Health than you.</mainText><br>",
            "colloq": ";lw",
            "plaintext": "Overcomes enemies with high health and armor",
            "from": [
                "3035",
                "1018"
            ],
            "image": {
                "full": "3036.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatCritChanceMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.2"
            },
            "depth": 3
        },
        "3039": {
            "name": "Atma's Reckoning",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Big Hands:</passive> While in combat with enemy champions, turrets, or epic monsters, gains <physicalDamage><healing>0.5% - 0 (based on seconds in-combat) max health</healing> as bonus physical damage</physicalDamage>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3105",
                "1037"
            ],
            "image": {
                "full": "3039.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 925,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Damage",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "3040": {
            "name": "Seraph's Embrace",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>860</attention> Mana<br><attention>200</attention> Health<br><attention>10</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain Ability Power based on Mana.<li><passive>Lifeline:</passive> Upon taking damage that would reduce your Health below 30%, gain a Shield based on your current Mana.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3003,
            "inStore": false,
            "image": {
                "full": "3040.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMPPoolMod": 860,
                "FlatMagicDamageMod": 70
            }
        },
        "3041": {
            "name": "Mejai's Soulstealer",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>100</attention> Health</stats><br><li><passive>Glory:</passive> Gain 4 stacks for a champion kill or 2 stacks for an assist (up to 25 stacks total). Lose 10 stacks on death.<li><passive>Dread:</passive> Grants <scaleAP>5 Ability Power</scaleAP> per stack of <passive>Glory</passive>. Gain <speed>10% Move Speed</speed> if you have at least 10 stacks.<br><br><rules>Obtained <passive>Glory</passive> stacks are preserved between this item and <rarityGeneric>Dark Seal</rarityGeneric>.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Grants Ability Power for kills and assists",
            "from": [
                "1082"
            ],
            "image": {
                "full": "3041.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": true,
                "total": 1600,
                "sell": 1120
            },
            "tags": [
                "Health",
                "SpellDamage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100,
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "3042": {
            "name": "Muramana",
            "description": "<mainText><stats><attention>35</attention> Attack Damage<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus Attack Damage based on Mana. <li><passive>Shock:</passive> Attacks against champions deal additional physical damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3004,
            "inStore": false,
            "image": {
                "full": "3042.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatMPPoolMod": 860
            }
        },
        "3044": {
            "name": "Phage",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>200</attention> Health</stats><br><li><passive>Sturdy:</passive> After you deal physical damage to a champion, restore Health over time.<br><br><rules>Restoration reduced for Ranged users.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Attacks and kills give a small burst of speed",
            "from": [
                "1028",
                "1036"
            ],
            "into": [
                "6630",
                "3053",
                "3181"
            ],
            "image": {
                "full": "3044.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "FlatHPPoolMod": 200
            },
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2",
                "Effect3Amount": "60",
                "Effect4Amount": "0",
                "Effect5Amount": "0",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "8"
            },
            "depth": 2
        },
        "3046": {
            "name": "Phantom Dancer",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>35%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Spectral Waltz:</passive> Attacks grant <status>Ghosting</status> and stacking increased Move Speed. In addition, Attacking 4 times causes Spectral Waltz to also grant Attack Speed.<br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
            "colloq": ";pd",
            "plaintext": "Move faster while attacking enemies and gain a shield when on low health.",
            "from": [
                "3051",
                "3086"
            ],
            "image": {
                "full": "3046.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.35
            },
            "effect": {
                "Effect1Amount": "0.24",
                "Effect2Amount": "10",
                "Effect3Amount": "550",
                "Effect4Amount": "0.1",
                "Effect5Amount": "0.3",
                "Effect6Amount": "2.5",
                "Effect7Amount": "90",
                "Effect8Amount": "240",
                "Effect9Amount": "600",
                "Effect10Amount": "40",
                "Effect11Amount": "5",
                "Effect12Amount": "0.3",
                "Effect13Amount": "0.7",
                "Effect14Amount": "3",
                "Effect15Amount": "300",
                "Effect16Amount": "1",
                "Effect17Amount": "0.4",
                "Effect18Amount": "9"
            },
            "depth": 3
        },
        "3047": {
            "name": "Plated Steelcaps",
            "description": "<mainText><stats><attention>20</attention> Armor<br><attention>45</attention> Move Speed</stats><br><li>Reduces incoming damage from Attacks by 12%.</mainText><br>",
            "colloq": ";",
            "plaintext": "Enhances Move Speed and reduces incoming basic attack damage",
            "from": [
                "1001",
                "1029"
            ],
            "image": {
                "full": "3047.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Armor",
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatArmorMod": 20
            },
            "effect": {
                "Effect1Amount": "0.12"
            },
            "depth": 2
        },
        "3050": {
            "name": "Zeke's Convergence",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>250</attention> Mana<br><attention>45</attention> Armor<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Conduit:</active> Designate an <attention>Accomplice</attention>.<br><li><passive>Convergence:</passive> After you <status>Immobilize</status> an enemy, your <attention>Accomplice's</attention> Attacks and Ability hits apply additional damage to that enemy.<br><br><rules>Champions can only be linked by one Zeke's Convergence at a time.</rules></mainText><br>",
            "colloq": ";haroldandkumar",
            "plaintext": "Grants you and your ally bonuses when you cast your ultimate.",
            "from": [
                "3023",
                "3024"
            ],
            "image": {
                "full": "3050.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 250,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "Armor",
                "Active",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 45
            },
            "depth": 3
        },
        "3051": {
            "name": "Hearthbound Axe",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>15%</attention> Attack Speed</stats><br><li><passive>Nimble:</passive> Attacking a unit grants Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1036",
                "1042",
                "1036"
            ],
            "into": [
                "3078",
                "6631",
                "3091",
                "3046"
            ],
            "image": {
                "full": "3051.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "PercentAttackSpeedMod": 0.15
            },
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2",
                "Effect3Amount": "60"
            },
            "depth": 2
        },
        "3053": {
            "name": "Sterak's Gage",
            "description": "<mainText><stats><attention>450</attention> Health</stats><br><li><passive>The Claws that Catch:</passive> Gain base AD as bonus Attack Damage.<li><passive>Lifeline:</passive> Upon taking damage that would reduce your Health below 30%, gain a Shield, decaying over time, and Tenacity.</mainText><br>",
            "colloq": ";juggernaut;primal",
            "plaintext": "Shields against large bursts of damage",
            "from": [
                "1037",
                "3044",
                "1028"
            ],
            "image": {
                "full": "3053.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 625,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450
            },
            "depth": 3
        },
        "3057": {
            "name": "Sheen",
            "description": "<mainText><stats></stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage.</mainText><br>",
            "colloq": ";",
            "plaintext": "Grants a bonus to next attack after spell cast",
            "into": [
                "3100",
                "3078",
                "3508",
                "6632",
                "6662"
            ],
            "image": {
                "full": "3057.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 700,
                "sell": 490
            },
            "tags": [
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "3065": {
            "name": "Spirit Visage",
            "description": "<mainText><stats><attention>450</attention> Health<br><attention>60</attention> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><li><passive>Boundless Vitality:</passive> Increases all Healing and Shielding effectiveness on you.</mainText><br>",
            "colloq": ";sv",
            "plaintext": "Increases Health and healing effects",
            "from": [
                "3211",
                "3067"
            ],
            "image": {
                "full": "3065.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatSpellBlockMod": 60
            },
            "depth": 3
        },
        "3066": {
            "name": "Winged Moonplate",
            "description": "<mainText><stats><attention>150</attention> Health</stats><br><li><passive>Flight:</passive> Grants <speed>5% Move Speed</speed>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028"
            ],
            "into": [
                "3742",
                "4401",
                "3181"
            ],
            "image": {
                "full": "3066.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Health",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150
            },
            "depth": 2
        },
        "3067": {
            "name": "Kindlegem",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Health and Cooldown Reduction",
            "from": [
                "1028"
            ],
            "into": [
                "3065",
                "3071",
                "3084",
                "3083",
                "2065",
                "6617",
                "8001",
                "4403",
                "6630",
                "3003",
                "3078",
                "3119",
                "6664",
                "6665",
                "3161",
                "8020",
                "4644",
                "6631",
                "6632",
                "6656",
                "6662"
            ],
            "image": {
                "full": "3067.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Health",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3068": {
            "name": "Sunfire Aegis",
            "description": "<mainText><stats><attention>500</attention> Health<br><attention>50</attention> Armor</stats><br><li><passive>Immolate:</passive> Taking or dealing damage causes you to begin dealing <magicDamage> (15 + 1.75% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions) for 3 seconds. Damaging Champions or Epic Monsters with this effect adds a stack, increasing subsequent <passive>Immolate</passive> damage by 10% for 5 seconds (max stacks 6).<br></mainText><br>",
            "colloq": ";",
            "plaintext": "High armor. Constantly deals damage to nearby enemies. Immobilize enemies to release a wave of damaging flame",
            "from": [
                "6660",
                "1031"
            ],
            "image": {
                "full": "3068.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Armor",
                "Aura"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatArmorMod": 50
            },
            "depth": 3
        },
        "3070": {
            "name": "Tear of the Goddess",
            "description": "<mainText><stats><attention>240</attention> Mana</stats><br><li><passive>Focus:</passive> Attacks deal additional physical damage to Minions.<li><passive>Mana Charge:</passive> Strike a target with an Ability to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Increases maximum Mana as Mana is spent",
            "into": [
                "3003",
                "3004",
                "3119"
            ],
            "image": {
                "full": "3070.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 280
            },
            "tags": [
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 240
            }
        },
        "3071": {
            "name": "Black Cleaver",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>400</attention> Health<br><attention>30</attention> Ability Haste</stats><br><li><passive>Carve:</passive> Dealing physical damage to a champion applies a stack of Armor reduction.<li><passive>Rage:</passive> Dealing physical damage to a champion grants Move Speed per stack of <unique>Carve</unique> on them.</mainText><br>",
            "colloq": ";bc",
            "plaintext": "Dealing physical damage to enemy champions reduces their Armor",
            "from": [
                "3133",
                "3067",
                "1036"
            ],
            "image": {
                "full": "3071.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 400
            },
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0.05",
                "Effect3Amount": "6",
                "Effect4Amount": "6",
                "Effect5Amount": "0.3",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "0.01"
            },
            "depth": 3
        },
        "3072": {
            "name": "Bloodthirster",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>18%</attention> Life Steal</stats><br><li><passive>Engorge:</passive> While above 70% Health, gain additional Attack Damage.</mainText><br>",
            "colloq": ";bt",
            "plaintext": "Grants Attack Damage, Life Steal and Life Steal now overheals",
            "from": [
                "1038",
                "1018",
                "1053"
            ],
            "image": {
                "full": "3072.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "LifeSteal"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2,
                "PercentLifeStealMod": 0.18
            },
            "depth": 3
        },
        "3074": {
            "name": "Ravenous Hydra",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>25</attention> Ability Haste<br><attention>10%</attention> Life Steal</stats><br><li><passive>Cleave:</passive> Attacks and Abilities deal physical damage to other nearby enemies.<br><li><passive>Carnivorous:</passive> Gain AD whenever you kill a minion and 2 times that amount when you kill a Champion, Large Monster, or Siege Minion. Lose 60% of your stacks on death.<br><br></mainText><br>",
            "colloq": ";",
            "plaintext": "Melee attacks hit nearby enemies, dealing damage and restoring Health",
            "from": [
                "3077",
                "1053",
                "3133"
            ],
            "image": {
                "full": "3074.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "PercentLifeStealMod": 0.1
            },
            "depth": 3
        },
        "3075": {
            "name": "Thornmail",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>70</attention> Armor</stats><br><li><passive>Thorns:</passive> When struck by an Attack, deal damage to the attacker and apply 40% <status>Grievous Wounds</status> if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3076",
                "1011"
            ],
            "image": {
                "full": "3075.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 70
            },
            "depth": 3
        },
        "3076": {
            "name": "Bramble Vest",
            "description": "<mainText><stats><attention>30</attention> Armor</stats><br><li><passive>Thorns:</passive> When struck by an Attack, deal damage to the attacker and apply 40% Grievous Wounds if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1029",
                "1029"
            ],
            "into": [
                "3075"
            ],
            "image": {
                "full": "3076.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 30
            },
            "depth": 2
        },
        "3077": {
            "name": "Tiamat",
            "description": "<mainText><stats><attention>25</attention> Attack Damage</stats><br><li><passive>Cleave:</passive> Attacks deal physical damage to other nearby enemies. <br><br>Cleave does not trigger on structures.<br><br>Item performance differs for melee and ranged users.<br></mainText><br>",
            "colloq": ";",
            "plaintext": "Melee attacks hit nearby enemies",
            "from": [
                "1037"
            ],
            "into": [
                "3074",
                "3748"
            ],
            "image": {
                "full": "3077.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 325,
                "purchasable": true,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "depth": 2
        },
        "3078": {
            "name": "Trinity Force",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>33%</attention> Attack Speed<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><br><li><passive>Threefold Strike:</passive> Attacks grant Move Speed. If the target is a champion, increase your base Attack Damage, stacking.<li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Attack Damage, Ability Haste, and Move Speed.</mainText><br>",
            "colloq": ";triforce;tons of damage",
            "plaintext": "Tons of Damage",
            "from": [
                "3057",
                "3051",
                "3067"
            ],
            "into": [
                "7018"
            ],
            "image": {
                "full": "3078.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 733,
                "purchasable": true,
                "total": 3333,
                "sell": 2333
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatHPPoolMod": 300,
                "PercentAttackSpeedMod": 0.33
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            },
            "depth": 3
        },
        "3082": {
            "name": "Warden's Mail",
            "description": "<mainText><stats><attention>40</attention> Armor</stats><br><li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1029",
                "1029"
            ],
            "into": [
                "3110",
                "3143"
            ],
            "image": {
                "full": "3082.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Armor"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatArmorMod": 40
            },
            "depth": 2
        },
        "3083": {
            "name": "Warmog's Armor",
            "description": "<mainText><stats><attention>800</attention> Health<br><attention>10</attention> Ability Haste<br><attention>200%</attention> Base Health Regen</stats><br><li><passive>Warmog's Heart:</passive> If you have at least 1100 bonus Health, restore max Health per second if damage hasn't been taken within 6 seconds.</mainText><br>",
            "colloq": ";",
            "plaintext": "Grants massive Health and Health Regen",
            "from": [
                "1011",
                "3067",
                "3801"
            ],
            "image": {
                "full": "3083.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 800
            },
            "depth": 3
        },
        "3084": {
            "name": "Heartsteel",
            "description": "<mainText><stats><attention>800</attention> Health<br><attention>200%</attention> Base Health Regen<br><attention>20</attention> Ability Haste</stats><br><li><passive>Colossal Consumption:</passive> Charge up a powerful attack against a champion over 3s while within 700 range of them. The charged attack deals 125 + <scalehealth>6%</scalehealth> of your max Health as bonus physical damage, and grants you 10% of that amount as permanent max Health. (30s) cooldown per target.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>1%</attention> Increased Health & <attention>6%</attention> Champion Size.</mainText><br>",
            "colloq": ";",
            "plaintext": "Restores Health on kill or assist",
            "from": [
                "1011",
                "3067",
                "3801"
            ],
            "into": [
                "7025"
            ],
            "image": {
                "full": "3084.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 800
            },
            "depth": 3
        },
        "3085": {
            "name": "Runaan's Hurricane",
            "description": "<mainText><stats><attention>40%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Peck:</passive> Attacks apply <magicDamage>magic damage</magicDamage> <OnHit>On-Hit</OnHit>.<li><passive>Wind's Fury:</passive> When Attacking, bolts are fired at up to 2 enemies near the target. Bolts apply On-Hit effects and can Critically Strike.<br><br><rules>Item is for Ranged champions only.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Ranged attacks fire two bolts at nearby enemies",
            "from": [
                "1043",
                "3086"
            ],
            "image": {
                "full": "3085.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.4
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect3Amount": "2",
                "Effect4Amount": "0",
                "Effect5Amount": "40",
                "Effect6Amount": "1"
            },
            "depth": 3
        },
        "3086": {
            "name": "Zeal",
            "description": "<mainText><stats><attention>15%</attention> Attack Speed<br><attention>15%</attention> Critical Strike Chance<br><attention>5%</attention> Move Speed</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Slight bonuses to Critical Strike Chance, Move Speed and Attack Speed",
            "from": [
                "1018",
                "1042"
            ],
            "into": [
                "3085",
                "3094",
                "4403",
                "3046",
                "6671"
            ],
            "image": {
                "full": "3086.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatCritChanceMod": 0.15,
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 2
        },
        "3087": {
            "name": "Statikk Shiv",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Electroshock:</passive> Fires chain lightning that bounces to and damages nearby enemies.</mainText><br>",
            "colloq": ";",
            "plaintext": "Movement builds charges that release chain lightning on basic attack",
            "from": [
                "6670",
                "1018",
                "2015"
            ],
            "image": {
                "full": "3087.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatCritChanceMod": 0.2,
                "PercentAttackSpeedMod": 0.3
            },
            "depth": 3
        },
        "3089": {
            "name": "Rabadon's Deathcap",
            "description": "<mainText><stats><attention>120</attention> Ability Power</stats><br><li><passive>Magical Opus:</passive> Increases your total <scaleAP>Ability Power by 40%</scaleAP>.</mainText><br>",
            "colloq": ";dc;banksys;hat",
            "plaintext": "Massively increases Ability Power",
            "from": [
                "1058",
                "1058"
            ],
            "image": {
                "full": "3089.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1100,
                "purchasable": true,
                "total": 3600,
                "sell": 2520
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 120
            },
            "depth": 2
        },
        "3091": {
            "name": "Wit's End",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>40</attention> Magic Resist</stats><br><li><passive>Fray:</passive> Attacks apply magic damage On-Hit and grant Move Speed.</mainText><br>",
            "colloq": ";",
            "plaintext": "Resist magic damage and claw your way back to life.",
            "from": [
                "3051",
                "1033",
                "1043"
            ],
            "image": {
                "full": "3091.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatSpellBlockMod": 40,
                "PercentAttackSpeedMod": 0.4
            },
            "depth": 3
        },
        "3094": {
            "name": "Rapid Firecannon",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Sharpshooter:</passive> Your Energized Attack applies bonus damage. In addition, Energized attacks gain Attack Range.<br><br><rules>Attack Range cannot increase more than 150 units.</rules></mainText><br>",
            "colloq": ";canon;rapidfire;rfc",
            "plaintext": "Movement builds charges that release a sieging fire attack on release",
            "from": [
                "1036",
                "3086",
                "2015"
            ],
            "image": {
                "full": "3094.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 3
        },
        "3095": {
            "name": "Stormrazor",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Bolt:</passive> Your Energized Attack applies bonus magic damage and grants Move Speed.</mainText><br>",
            "colloq": ";Windblade",
            "plaintext": "Tremendously empower other Energized effects.",
            "from": [
                "6670",
                "1018",
                "2015"
            ],
            "image": {
                "full": "3095.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2,
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 3
        },
        "3100": {
            "name": "Lich Bane",
            "description": "<mainText><stats><attention>85</attention> Ability Power<br><attention>15</attention> Ability Haste<br><attention>8%</attention> Move Speed</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional magic damage.</mainText><br>",
            "colloq": ";",
            "plaintext": "Grants a bonus to next attack after spell cast",
            "from": [
                "3057",
                "3113",
                "3108"
            ],
            "image": {
                "full": "3100.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentMovementSpeedMod": 0.08,
                "FlatMagicDamageMod": 85
            },
            "depth": 3
        },
        "3102": {
            "name": "Banshee's Veil",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>45</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Annul:</passive> Grants a Spell Shield that blocks the next enemy Ability.<br><br><rules>Item cooldown is restarted if you take damage from champions before it is completed.</rules></mainText><br>",
            "colloq": ";bv",
            "plaintext": "Periodically blocks enemy abilities",
            "from": [
                "3108",
                "4632"
            ],
            "image": {
                "full": "3102.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "SpellBlock",
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 45,
                "FlatMagicDamageMod": 80
            },
            "effect": {
                "Effect1Amount": "40",
                "Effect2Amount": "45",
                "Effect3Amount": "10",
                "Effect4Amount": "-0.1",
                "Effect5Amount": "8",
                "Effect6Amount": "2"
            },
            "depth": 3
        },
        "3105": {
            "name": "Aegis of the Legion",
            "description": "<mainText><stats><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Grants Armor and Magic Resistance",
            "from": [
                "1033",
                "1029"
            ],
            "into": [
                "3193",
                "4403",
                "3039",
                "6665",
                "6667"
            ],
            "image": {
                "full": "3105.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 2
        },
        "3107": {
            "name": "Redemption",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>15%</attention> Heal and Shield Power</stats><br><br><active>Active -</active> <active>Intervention:</active> Target an area within. After 2.5 seconds, call down a beam of light to restore Health to allies and damage enemy champions.<br><li><passive>Harmony:</passive> Gain 25% Base Health Regeneration for every additional <scalemana>25% Base Mana Regeneration</scalemana>.<br><br><rules>Item can be activated whilst dead. Damage and healing reduced by 50% if the target has recently been affected by another <active>Intervention</active>. Strength of level-scaling effects are based on the ally's level.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Activate to heal allies and damage enemies in an area",
            "from": [
                "3012",
                "3114"
            ],
            "image": {
                "full": "3107.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250
            },
            "depth": 3
        },
        "3108": {
            "name": "Fiendish Codex",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Ability Power and Cooldown Reduction",
            "from": [
                "1052"
            ],
            "into": [
                "4629",
                "3100",
                "3115",
                "3102",
                "3128",
                "4005",
                "6653",
                "3157",
                "4628",
                "4636"
            ],
            "image": {
                "full": "3108.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": true,
                "total": 900,
                "sell": 630
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 35
            },
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "depth": 2
        },
        "3109": {
            "name": "Knight's Vow",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>25</attention> Armor<br><attention>15</attention> Ability Haste<br><attention>125%</attention> Base Health Regen</stats><br><br><active>Active -</active> <active>Pledge:</active> Designate an ally who is <attention>Worthy</attention>..<br><li><passive>Sacrifice:</passive> While your <attention>Worthy</attention> ally is nearby, redirect damage they take to you and heal based on the damage dealt by your <attention>Worthy</attention> ally to Champions.<br></mainText><br>",
            "colloq": ";",
            "plaintext": "Partner with an ally to protect each other",
            "from": [
                "3023",
                "3801"
            ],
            "image": {
                "full": "3109.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 2200,
                "sell": 1540
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Aura",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatArmorMod": 25
            },
            "depth": 3
        },
        "3110": {
            "name": "Frozen Heart",
            "description": "<mainText><stats><attention>90</attention> Armor<br><attention>400</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Winter's Caress:</passive> Reduces the <attackSpeed>Attack Speed</attackSpeed> of nearby enemies.<li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks.</mainText><br>",
            "colloq": ";fh",
            "plaintext": "Massively increases Armor and slows enemy basic attacks",
            "from": [
                "3082",
                "3024"
            ],
            "image": {
                "full": "3110.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Armor",
                "Mana",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatArmorMod": 90
            },
            "depth": 3
        },
        "3111": {
            "name": "Mercury's Treads",
            "description": "<mainText><stats><attention>25</attention> Magic Resist<br><attention>45</attention> Move Speed<br><attention>30%</attention> Tenacity</stats><br><br><rules>Tenacity reduces the duration of <status>Stun</status>, <status>Slow</status>, <status>Taunt</status>, <status>Fear</status>, <status>Silence</status>, <status>Blind</status>, <status>Polymorph</status> and <status>Immobilizing</status> effects. It has no effect on <status>Airborne</status> or <status>Suppression</status>.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Move Speed and reduces duration of disabling effects",
            "from": [
                "1001",
                "1033"
            ],
            "image": {
                "full": "3111.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Boots",
                "SpellBlock",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatSpellBlockMod": 25
            },
            "depth": 2
        },
        "3112": {
            "name": "Guardian's Orb",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>150</attention> Health</stats><br><li><passive>Recovery:</passive> Restores Mana over time. If you can't gain mana, restores Health instead.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": ";",
            "plaintext": "Good starting item for mages",
            "image": {
                "full": "3112.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 50
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3113": {
            "name": "Aether Wisp",
            "description": "<mainText><stats><attention>30</attention> Ability Power</stats><br><li><passive>Glide:</passive> Gain <speed>5% Move Speed</speed>.</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Ability Power and Move Speed",
            "from": [
                "1052"
            ],
            "into": [
                "4629",
                "3100",
                "6616",
                "3504"
            ],
            "image": {
                "full": "3113.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 415,
                "purchasable": true,
                "total": 850,
                "sell": 595
            },
            "tags": [
                "NonbootsMovement",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "depth": 2
        },
        "3114": {
            "name": "Forbidden Idol",
            "description": "<mainText><stats><attention>50%</attention> Base Mana Regen<br><attention>8%</attention> Heal and Shield Power</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Heal and Shield Power, Mana Regeneration, and Cooldown Reduction",
            "from": [
                "1004"
            ],
            "into": [
                "3222",
                "3107",
                "6616",
                "3011",
                "3504"
            ],
            "image": {
                "full": "3114.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "depth": 2
        },
        "3115": {
            "name": "Nashor's Tooth",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>50%</attention> Attack Speed<br><attention>15</attention> Ability Haste</stats><br><li><passive>Icathian Bite:</passive> Attacks apply magic damage <OnHit>On-Hit</OnHit>.</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Attack Speed, Ability Power, and Cooldown Reduction",
            "from": [
                "1043",
                "1026",
                "3108"
            ],
            "image": {
                "full": "3115.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 100,
                "PercentAttackSpeedMod": 0.5
            },
            "depth": 3
        },
        "3116": {
            "name": "Rylai's Crystal Scepter",
            "description": "<mainText><stats><attention>75</attention> Ability Power<br><attention>400</attention> Health</stats><br><li><passive>Rimefrost:</passive> Damaging Abilities <status>Slow</status> enemies.</mainText><br>",
            "colloq": ";",
            "plaintext": "Abilities slow enemies",
            "from": [
                "1026",
                "1011",
                "1052"
            ],
            "image": {
                "full": "3116.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 415,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Slow"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 75
            },
            "effect": {
                "Effect1Amount": "-0.3",
                "Effect2Amount": "-0.3",
                "Effect3Amount": "-0.3",
                "Effect4Amount": "1",
                "Effect5Amount": "1",
                "Effect6Amount": "1"
            },
            "depth": 3
        },
        "3117": {
            "name": "Mobility Boots",
            "description": "<mainText><stats></stats><attention>25</attention> Move Speed <li>When out of combat for at least 5 seconds, increase this item's effect to <attention>115</attention>.</mainText><br>",
            "colloq": ";",
            "plaintext": "Greatly enhances Move Speed when out of combat",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3117.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Boots"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 115
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "0",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "25"
            },
            "depth": 2
        },
        "3119": {
            "name": "Winter's Approach",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus <scaleHealth>Health equal to Total Mana</scaleHealth>.<li><passive>Mana Charge:</passive> Strike a target with an Ability or Attack to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana at which point this item transforms into <rarityLegendary>Fimbulwinter</rarityLegendary>.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3070",
                "3067",
                "1028"
            ],
            "image": {
                "full": "3119.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1000,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 500
            },
            "depth": 3
        },
        "3121": {
            "name": "Fimbulwinter",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><li><passive>Awe:</passive> Gain bonus Health based on Mana.<li><passive>Everlasting:</passive> <status>Immobilizing</status> or <status>Slowing</status> an enemy champion grants a Shield. The Shield is increased if more than one enemy is nearby.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3119,
            "inStore": false,
            "image": {
                "full": "3121.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 2700,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Mana",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 860
            }
        },
        "3123": {
            "name": "Executioner's Calling",
            "description": "<mainText><stats><attention>15</attention> Attack Damage</stats><br><li><passive>Rend:</passive> Dealing physical damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds. <br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": ";grievous",
            "plaintext": "Overcomes enemies with high health gain",
            "from": [
                "1036"
            ],
            "into": [
                "6609",
                "3033"
            ],
            "image": {
                "full": "3123.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15
            },
            "effect": {
                "Effect1Amount": "3"
            },
            "depth": 2
        },
        "3124": {
            "name": "Guinsoo's Rageblade",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>30</attention> Ability Power<br><attention>25%</attention> Attack Speed</stats><br><li><passive>Wrath:</passive> Attacks apply bonus damage <OnHit>On-Hit</OnHit>. Your Critical Strike Chance is converted into more.<li><passive>Seething Strike:</passive> Basic attacks grant bonus <attackSpeed>Attack Speed</attackSpeed>, stacking up to a cap. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5%</attention> Armor Penetration and <attention>6%</attention> Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1052",
                "6677",
                "1037"
            ],
            "into": [
                "7030"
            ],
            "image": {
                "full": "3124.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 690,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatMagicDamageMod": 30,
                "PercentAttackSpeedMod": 0.25
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "6",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            },
            "depth": 3
        },
        "3128": {
            "name": "Deathfire Grasp",
            "description": "<mainText><stats><attention>120</attention> Ability Power<br><attention>10</attention> Ability Haste</stats><br><br><active>Active -</active> <active>The Silence:</active> Deal magic damage equal to <magicDamage>15% of the Target's Max Health</magicDamage>, and then amplify damage they take by 15% for 4 seconds (90s ).</mainText><br>",
            "colloq": ";dfg",
            "plaintext": "Activate to increase all magic damage dealt to an enemy champion",
            "from": [
                "1058",
                "3108"
            ],
            "image": {
                "full": "3128.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 120
            },
            "depth": 3
        },
        "3131": {
            "name": "Sword of the Divine",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>18</attention> Lethality</stats><br><br><active>Active -</active> <active>Divine Blessing:</active> Grants <attackSpeed>100% Attack Speed</attackSpeed> and 100% Critical Strike Chance for 3 seconds or 3 basic attacks (90s ).</mainText><br>",
            "colloq": ";sotd;lethality",
            "plaintext": "Activate to gain 100% Critical Strike Chance for a short duration",
            "from": [
                "3134",
                "1042",
                "1042"
            ],
            "image": {
                "full": "3131.png",
                "sprite": "item2.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.25
            },
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "3",
                "Effect3Amount": "3",
                "Effect4Amount": "1",
                "Effect5Amount": "90"
            },
            "depth": 3
        },
        "3133": {
            "name": "Caulfield's Warhammer",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>10</attention> Ability Haste</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Attack Damage and Cooldown Reduction",
            "stacks": 0,
            "from": [
                "1036",
                "1036"
            ],
            "into": [
                "6609",
                "3071",
                "3004",
                "3074",
                "6692",
                "6691",
                "4402",
                "3142",
                "3161",
                "3508",
                "6333",
                "6632",
                "6675",
                "6693",
                "6694",
                "6696"
            ],
            "image": {
                "full": "3133.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "depth": 2
        },
        "3134": {
            "name": "Serrated Dirk",
            "description": "<mainText><stats><attention>30</attention> Attack Damage</stats><br><li><passive>Gouge:</passive> Gain <scaleLethality>10 Lethality</scaleLethality>.</mainText><br>",
            "colloq": ";lethality",
            "plaintext": "Increases Attack Damage and Lethality",
            "stacks": 0,
            "from": [
                "1036",
                "1036"
            ],
            "into": [
                "3142",
                "6676",
                "4004",
                "3179",
                "6692",
                "6691",
                "3814",
                "3131",
                "6693",
                "6695",
                "6696"
            ],
            "image": {
                "full": "3134.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30
            },
            "effect": {
                "Effect1Amount": "10"
            },
            "depth": 2
        },
        "3135": {
            "name": "Void Staff",
            "description": "<mainText><stats><attention>65</attention> Ability Power<br><attention>40%</attention> Magic Penetration</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Increases magic damage",
            "from": [
                "4630",
                "1026"
            ],
            "image": {
                "full": "3135.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 65
            },
            "depth": 3
        },
        "3139": {
            "name": "Mercurial Scimitar",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>50</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Move Speed.</mainText><br>",
            "colloq": ";",
            "plaintext": "Activate to remove all crowd control debuffs and grant massive Move Speed",
            "from": [
                "3140",
                "1018",
                "1037"
            ],
            "image": {
                "full": "3139.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "CriticalStrike",
                "Active",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatCritChanceMod": 0.2,
                "FlatSpellBlockMod": 50
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1.5",
                "Effect3Amount": "90"
            },
            "depth": 3
        },
        "3140": {
            "name": "Quicksilver Sash",
            "description": "<mainText><stats><attention>30</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Removes all crowd control debuffs (excluding <status>Airborne</status>).<br></mainText><br>",
            "colloq": ";qss",
            "plaintext": "Activate to remove all crowd control debuffs",
            "from": [
                "1033"
            ],
            "into": [
                "6035",
                "3139"
            ],
            "image": {
                "full": "3140.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 850,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Active",
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30
            },
            "depth": 2
        },
        "3142": {
            "name": "Youmuu's Ghostblade",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Wraith Step:</active> Gain Move Speed and Ghosting.<br><li><passive>Haunt:</passive> Gain up to 100 Spectral Shards while moving. Gain <speed> Move Speed</speed> out of champion combat based on the number of Spectral Shards. While at max Shards, gain <scaleAD> Lethality</scaleAD>. Shards will reset 3 seconds after dealing damage to an enemy champion.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention></attention> Attack Damage. <br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
            "colloq": ";lethality",
            "plaintext": "Activate to greatly increase Move Speed",
            "from": [
                "3134",
                "3133"
            ],
            "into": [
                "7029"
            ],
            "image": {
                "full": "3142.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0.25",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            },
            "depth": 3
        },
        "3143": {
            "name": "Randuin's Omen",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>60</attention> Armor</stats><br><br><active>Active -</active> <active>Humility:</active> <status>Slow</status> nearby enemies.<br><li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks.<li><passive>Critical Resilience:</passive> Critical Strikes deal 25% less damage to you.</mainText><br>",
            "colloq": ";",
            "plaintext": "Greatly increases defenses, activate to slow nearby enemies",
            "from": [
                "3082",
                "1011"
            ],
            "image": {
                "full": "3143.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "Armor",
                "Active",
                "Slow"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 60
            },
            "depth": 3
        },
        "3145": {
            "name": "Hextech Alternator",
            "description": "<mainText><stats><attention>25</attention> Ability Power<br><attention>150</attention> Health</stats><br><li><passive>Revved:</passive> Damaging a champion deals additional damage.</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Ability Power. Deal bonus magic damage on attack periodically.",
            "from": [
                "1052",
                "1028"
            ],
            "into": [
                "4645",
                "3152",
                "3165",
                "4628",
                "4636"
            ],
            "image": {
                "full": "3145.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 215,
                "purchasable": true,
                "total": 1050,
                "sell": 735
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 25
            },
            "depth": 2
        },
        "3146": {
            "name": "Hextech Gunblade",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>40</attention> Attack Damage<br><attention>15%</attention> Omnivamp</stats><br><br><active>Active -</active> <active>Lightning Bolt:</active> Shocks the target enemy champion, dealing 0 magic damage and slowing them by 40% for 2 seconds (30 second cooldown).</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Attack Damage and Ability Power, activate to slow a target",
            "from": [
                "1038",
                "1058"
            ],
            "image": {
                "full": "3146.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 750,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "SpellDamage",
                "Active",
                "SpellVamp"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatMagicDamageMod": 80
            },
            "depth": 2
        },
        "3152": {
            "name": "Hextech Rocketbelt",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>6</attention> Magic Penetration<br><attention>250</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Supersonic:</active> Dash in target direction, unleashing an arc of magic missiles that deal damage. Then, gain Move Speed towards enemy champions.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration.</mainText><br>",
            "colloq": "rocket belt;",
            "plaintext": "Activate to dash forward and unleash a fiery explosion",
            "from": [
                "1026",
                "3145",
                "1052"
            ],
            "into": [
                "7011"
            ],
            "image": {
                "full": "3152.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 865,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "3153": {
            "name": "Blade of The Ruined King",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>8%</attention> Life Steal</stats><br><li><passive>Mist's Edge:</passive> Attacks apply physical damage based off of the target's current Health. <li><passive>Siphon:</passive> Attacking a champion 3 times deals magic damage and steals Move Speed.<br><br>Item performance differs for melee and ranged users.</mainText><br>",
            "colloq": ";brk;bork;bork;bork;botrk",
            "plaintext": "Deals damage based on target's Health, can steal Move Speed",
            "from": [
                "1053",
                "1043",
                "1037"
            ],
            "image": {
                "full": "3153.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 825,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "LifeSteal",
                "Slow",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "PercentAttackSpeedMod": 0.25,
                "PercentLifeStealMod": 0.08
            },
            "depth": 3
        },
        "3155": {
            "name": "Hexdrinker",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>35</attention> Magic Resist</stats><br><li><passive>Lifeline:</passive> Upon taking magic damage that would reduce Health below 30%, gain a magic damage Shield.</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Attack Damage and Magic Resist",
            "stacks": 0,
            "from": [
                "1036",
                "1033"
            ],
            "into": [
                "3156"
            ],
            "image": {
                "full": "3155.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage",
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "FlatSpellBlockMod": 35
            },
            "depth": 2
        },
        "3156": {
            "name": "Maw of Malmortius",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>50</attention> Magic Resist</stats><br><li><passive>Lifeline:</passive> Upon taking magic damage that would reduce Health below 30%, gain a magic damage Shield. When <passive>Lifeline</passive> triggers, gain Omnivamp until the end of combat.  </mainText><br>",
            "colloq": ";",
            "plaintext": "Grants bonus Attack Damage when Health is low",
            "stacks": 0,
            "from": [
                "1037",
                "3155",
                "1036"
            ],
            "image": {
                "full": "3156.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 275,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "SpellBlock",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatSpellBlockMod": 50
            },
            "depth": 3
        },
        "3157": {
            "name": "Zhonya's Hourglass",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>45</attention> Armor<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Stasis:</active> You become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time.</mainText><br>",
            "colloq": ";zhg;zonyas",
            "plaintext": "Activate to become invincible but unable to take actions",
            "from": [
                "3191",
                "3108",
                "2420"
            ],
            "image": {
                "full": "3157.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 80,
                "FlatArmorMod": 45
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            },
            "depth": 3
        },
        "3158": {
            "name": "Ionian Boots of Lucidity",
            "description": "<mainText><stats><attention>20</attention> Ability Haste<br><attention>45</attention> Move Speed</stats><br><li>Gain 12 Summoner Spell Haste.<br><br><flavorText>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.'</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "Increases Move Speed and Cooldown Reduction",
            "from": [
                "1001"
            ],
            "image": {
                "full": "3158.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Boots",
                "CooldownReduction"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "depth": 2
        },
        "3161": {
            "name": "Spear of Shojin",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>500</attention> Health<br><attention>20</attention> Ability Haste</stats><br><li><passive>Dragonforce:</passive> Your Non-Ultimate spells gain (16 (+0.04 per 100 Bonus AD) | 12 (+0.03 per 100 Bonus AD)) Ability Haste, reduced to (8 (+0.02 per 100 Bonus AD) | 6 (+0.015 per 100 Bonus AD))) Ability Haste for Immobilizing spells.<li><passive>Exigency:</passive> Gain up to (0.15 | 0.1) increased move speed, based on your missing health (Maxed when below 33% Health).<br><br>Item performance differs for melee and ranged users.</mainText><br>",
            "colloq": ";",
            "plaintext": "Reduce damage taken from champions by a flat amount. Attack while near multiple enemy champions to increase this amount for a short time.",
            "from": [
                "1037",
                "3133",
                "3067"
            ],
            "image": {
                "full": "3161.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 525,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatHPPoolMod": 500
            },
            "depth": 3
        },
        "3165": {
            "name": "Morellonomicon",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>200</attention> Health<br><attention>10</attention> Magic Penetration</stats><br><li><passive>Affliction:</passive> Dealing magic damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": ";nmst;grievous",
            "plaintext": "Increases magic damage",
            "from": [
                "3916",
                "3145",
                "1052"
            ],
            "image": {
                "full": "3165.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 715,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "MagicPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "3172": {
            "name": "Zephyr",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>10%</attention> Move Speed<br><attention>35%</attention> Tenacity</stats><br><br><br><rules>Tenacity reduces the duration of <status>Stun</status>, <status>Slow</status>, <status>Taunt</status>, <status>Fear</status>, <status>Silence</status>, <status>Blind</status>, <status>Polymorph</status> and <status>Immobilizing</status> effects. It has no effect on <status>Airborne</status> or <status>Suppression</status>.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Mobility and Tenacity",
            "from": [
                "1038",
                "1042",
                "1042"
            ],
            "image": {
                "full": "3172.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "NonbootsMovement",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "PercentMovementSpeedMod": 0.1,
                "PercentAttackSpeedMod": 0.4
            },
            "depth": 2
        },
        "3177": {
            "name": "Guardian's Blade",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>150</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": ";dblade",
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "3177.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "Damage",
                "Lane",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatHPPoolMod": 150
            },
            "effect": {
                "Effect1Amount": "10"
            }
        },
        "3179": {
            "name": "Umbral Glaive",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>13</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><li><passive>Blackout:</passive> When spotted by an enemy Ward, reveal traps and disable Wards around you. Your Attacks do increased damage to Wards.</mainText><br>",
            "colloq": ";lethality",
            "plaintext": "Provides trap and ward detection periodically",
            "from": [
                "1036",
                "3134",
                "1036"
            ],
            "image": {
                "full": "3179.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Damage",
                "Vision",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50
            },
            "effect": {
                "Effect1Amount": "10",
                "Effect2Amount": "8",
                "Effect3Amount": "50"
            },
            "depth": 3
        },
        "3181": {
            "name": "Hullbreaker",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>400</attention> Health<br><attention>150%</attention> Base Health Regen<br><attention>5%</attention> Move Speed</stats><br><br><li><passive>Boarding Party:</passive> While no allied champions are nearby you gain <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> and Attacks deal increased damage to towers. Nearby large minions gain <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> and increased damage to towers. <br><br><rules>Boarding Party's resistances decay over 3 seconds when an ally gets too close.</rules><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037",
                "3044",
                "3066"
            ],
            "image": {
                "full": "3181.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Damage",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "PercentMovementSpeedMod": 0.05,
                "FlatHPPoolMod": 400
            },
            "depth": 3
        },
        "3184": {
            "name": "Guardian's Hammer",
            "description": "<mainText><stats><attention>25</attention> Attack Damage<br><attention>150</attention> Health<br><attention>7%</attention> Life Steal</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
            "colloq": ";dblade",
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "3184.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 950,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Lane"
            ],
            "maps": {
                "11": false,
                "12": true,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "FlatHPPoolMod": 150,
                "PercentLifeStealMod": 0.07
            }
        },
        "3190": {
            "name": "Locket of the Iron Solari",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Devotion:</active> Grant nearby allies a <shield>Shield</shield>, decaying over time.<br><li><passive>Consecrate:</passive> Grant nearby allied champions  <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor and Magic Resist increase to <passive>Consecrate</passive>.<br><br></mainText><br>",
            "colloq": ";",
            "plaintext": "Activate to shield nearby allies from damage",
            "from": [
                "3023",
                "1033"
            ],
            "into": [
                "7019"
            ],
            "image": {
                "full": "3190.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "Active",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "3191": {
            "name": "Seeker's Armguard",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>20</attention> Armor</stats><br><li><passive>Witch's Path:</passive> Killing a unit grants <scaleArmor>0.5 Armor</scaleArmor> (max <scaleArmor>15</scaleArmor>).</mainText><br>",
            "colloq": ";",
            "plaintext": "Increases Armor and Ability Power",
            "from": [
                "1052",
                "1029"
            ],
            "into": [
                "3157"
            ],
            "image": {
                "full": "3191.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 265,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Armor",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 30,
                "FlatArmorMod": 20
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "15"
            },
            "depth": 2
        },
        "3193": {
            "name": "Gargoyle Stoneplate",
            "description": "<mainText><stats><attention>60</attention> Armor<br><attention>60</attention> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Unbreakable:</active> Gain a Shield that decays and grow in size.<br><li><passive>Fortify:</passive> Taking damage from a champion grants a stack of <scaleArmor>bonus Armor</scaleArmor> and <scaleMR>bonus Magic Resist</scaleMR>.<br><br><rules>Max 5 stacks; 1 per champion.</rules></mainText><br>",
            "colloq": ";",
            "plaintext": "Greatly increases defense near multiple enemies.",
            "from": [
                "1029",
                "3105",
                "1033"
            ],
            "image": {
                "full": "3193.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatArmorMod": 60
            },
            "depth": 3
        },
        "3211": {
            "name": "Spectre's Cowl",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>25</attention> Magic Resist</stats><br><li><passive>Incorporeal:</passive> After taking damage from a champion, Regenerate Health.</mainText><br>",
            "colloq": ";hat",
            "plaintext": "Improves defense and grants regeneration upon being damaged",
            "from": [
                "1028",
                "1033"
            ],
            "into": [
                "3065"
            ],
            "image": {
                "full": "3211.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 1250,
                "sell": 875
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellBlock"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatSpellBlockMod": 25
            },
            "depth": 2
        },
        "3222": {
            "name": "Mikael's Blessing",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>15%</attention> Heal and Shield Power</stats><br><br><active>Active -</active> <active>Purify:</active> Restore Health and Remove all crowd control debuffs (except <status>Knockups</status> and <status>Suppression</status>) from an ally champion.<br><li><passive>Harmony:</passive> Gain 25% Base Health Regeneration for every additional <scalemana>25% Base Mana Regeneration</scalemana>.</mainText><br>",
            "colloq": ";",
            "plaintext": "Activate to remove all disabling effects from an allied champion",
            "from": [
                "3012",
                "3114"
            ],
            "image": {
                "full": "3222.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "Mana",
                "ManaRegen",
                "Active",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250
            },
            "depth": 3
        },
        "3330": {
            "name": "Scarecrow Effigy",
            "description": "<mainText><stats></stats><br><active>Active - Trinket:</active> Places an effigy that appears exactly as Fiddlesticks does to enemies. Stores up to a maximum of 2 charges.<br><br>Enemy champions approaching an effigy will activate it, causing the effigy to fake a random action, after which the effigy will fall apart.</mainText><br>",
            "colloq": "yellow; totem; trinket",
            "plaintext": "Periodically place a Stealth Ward",
            "requiredChampion": "FiddleSticks",
            "image": {
                "full": "3330.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "90",
                "Effect2Amount": "240",
                "Effect3Amount": "120",
                "Effect4Amount": "120",
                "Effect5Amount": "2",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120"
            }
        },
        "3340": {
            "name": "Stealth Ward",
            "description": "<mainText><stats></stats><active>Active - Trinket:</active> Places a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 2 Stealth Wards.</mainText><br>",
            "colloq": "yellow; totem; trinket",
            "plaintext": "Periodically place a Stealth Ward",
            "image": {
                "full": "3340.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "90",
                "Effect2Amount": "210",
                "Effect3Amount": "120",
                "Effect4Amount": "120",
                "Effect5Amount": "2",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120"
            }
        },
        "3348": {
            "name": "Arcane Sweeper",
            "description": "<mainText><stats></stats><mainText><active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (30 second cooldown).</mainText></mainText><br>",
            "colloq": ";",
            "plaintext": "Activate to reveal a nearby area of the map",
            "inStore": false,
            "image": {
                "full": "3348.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3349": {
            "name": "Lucent Singularity",
            "description": "<mainText><stats></stats>Lucent Singularity</mainText><br>",
            "colloq": "",
            "plaintext": "Lux creates a light zone that <status>Slows</status> by @Slow@ and reveals the area. After 5 seconds or on <recast>Recasting</recast> this Ability, it detonates, dealing <magicDamage>@TotalDamage@ magic damage</magicDamage> and <status>Slowing</status> for an additional @SlowLingerDuration@ second.",
            "inStore": false,
            "image": {
                "full": "3349.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            }
        },
        "3363": {
            "name": "Farsight Alteration",
            "description": "<mainText><stats></stats><active>Active - Trinket:</active> Places a visible and fragile Ward up to 4000 units away.</mainText><br>",
            "colloq": "blue; totem; trinket",
            "plaintext": "Grants increased range and reveals the targetted area",
            "image": {
                "full": "3363.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "4000",
                "Effect2Amount": "2",
                "Effect3Amount": "5",
                "Effect4Amount": "198",
                "Effect5Amount": "60",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect9Amount": "6.5",
                "Effect10Amount": "198",
                "Effect11Amount": "99",
                "Effect12Amount": "60",
                "Effect13Amount": "180",
                "Effect14Amount": "10",
                "Effect15Amount": "45"
            }
        },
        "3364": {
            "name": "Oracle Lens",
            "description": "<mainText><stats></stats><active>Active - Trinket:</active> Scans around you, warning against hidden enemy units, revealing invisible traps and revealing (and temporarily disabling) enemy Stealth Wards. Has 2 recharges.</mainText><br>",
            "colloq": "red; lens; trinket",
            "plaintext": "Disables nearby invisible wards and traps for a duration",
            "image": {
                "full": "3364.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "10",
                "Effect3Amount": "120",
                "Effect4Amount": "60",
                "Effect5Amount": "0",
                "Effect6Amount": "1",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect9Amount": "60"
            }
        },
        "3400": {
            "name": "Your Cut",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Gain 0 gold.<br><br><rules>Bonus gold given to an ally when Pyke executes an enemy champion using his Ultimate Ability. If no ally was involved in the kill, Pyke gets to keep the Cut!</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "inStore": false,
            "hideFromAll": true,
            "image": {
                "full": "3400.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable",
                "GoldPer"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3430": {
            "name": "Rite Of Ruin",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Wrath and Ruin:</passive> On spell cast, gain 2.5% critical chance for 6 seconds, stacking up to 20%.<li><passive>Salvage the Wreckage:</passive> Your spells have a chance equal to your crit chance to grant you or your targeted ally a shield for 0 for 3s.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "3430.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "CriticalStrike",
                "SpellDamage",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatCritChanceMod": 0.2,
                "FlatMagicDamageMod": 60
            }
        },
        "3504": {
            "name": "Ardent Censer",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>8%</attention> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><attention>5%</attention> Move Speed</stats><br><li><passive>Sanctify:</passive> Healing or Shielding another ally enhances you both, granting Attack Speed and magic damage <OnHit>On-Hit</OnHit>. <br></mainText><br>",
            "colloq": "",
            "plaintext": "Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.",
            "from": [
                "3113",
                "3114"
            ],
            "image": {
                "full": "3504.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 2100,
                "sell": 1470
            },
            "tags": [
                "AttackSpeed",
                "SpellDamage",
                "ManaRegen",
                "OnHit",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMagicDamageMod": 35
            },
            "depth": 3
        },
        "3508": {
            "name": "Essence Reaver",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>20</attention> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack deals additional damage and restores Mana.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3057",
                "3133",
                "1018"
            ],
            "image": {
                "full": "3508.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ManaRegen",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2
            },
            "depth": 3
        },
        "3513": {
            "name": "Eye of the Herald",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Crush the Eye of the Herald, summoning Rift Herald. The Herald will proceed down the nearest lane and deal massive damage to any turrets in the way.<br><br><passive>Glimpse of the Void:</passive> Grants Empowered Recall.<br></mainText><br>",
            "colloq": ";Herald's Eye",
            "plaintext": "Eye of the Herald - a Gift of the Void.",
            "consumed": true,
            "inStore": false,
            "image": {
                "full": "3513.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Trinket",
                "Active"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {

            },
            "effect": {
                "Effect1Amount": "240",
                "Effect2Amount": "1",
                "Effect3Amount": "20",
                "Effect4Amount": "180"
            }
        },
        "3599": {
            "name": "Kalista's Black Spear",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.</mainText><br>",
            "colloq": ";spear",
            "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
            "requiredChampion": "Kalista",
            "image": {
                "full": "3599.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3600": {
            "name": "Kalista's Black Spear",
            "description": "<mainText><stats></stats><active>Active - Consume:</active> Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.<br><br><rules>Required to use <attention>Kalista's</attention> Ultimate Ability.</rules></mainText><br>",
            "colloq": ";spear",
            "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
            "requiredChampion": "Sylas",
            "image": {
                "full": "3600.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": true,
                "total": 0,
                "sell": 0
            },
            "tags": [
                "Consumable"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3742": {
            "name": "Dead Man's Plate",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>45</attention> Armor<br><attention>5%</attention> Move Speed</stats><li><passive>Shipwrecker:</passive> While moving, build up  Move Speed. Your next Attack discharges built up Move Speed to deal damage. If dealt by a Melee champion at top speed, the Attack also <status>Slows</status> the target.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText></mainText><br>",
            "colloq": ";juggernaut;dreadnought",
            "plaintext": "Build momentum as you move around then smash into enemies.",
            "from": [
                "3066",
                "1028",
                "1031"
            ],
            "image": {
                "full": "3742.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Health",
                "Armor",
                "Slow",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatHPPoolMod": 300,
                "FlatArmorMod": 45
            },
            "depth": 3
        },
        "3748": {
            "name": "Titanic Hydra",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>500</attention> Health</stats><br><li><passive>Colossus:</passive> Gain bonus <scaleAD>Attack Damage based off of bonus Health</scaleAD>.<li><passive>Cleave:</passive> Attacks apply additional damage <OnHit>On-Hit</OnHit>, creating a shockwave that deals damage to enemies behind the target.</mainText><br>",
            "colloq": ";juggernaut",
            "plaintext": "Deals area of effect damage based on owner's health",
            "from": [
                "3077",
                "1028",
                "1011"
            ],
            "image": {
                "full": "3748.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatHPPoolMod": 500
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect3Amount": "0",
                "Effect4Amount": "0",
                "Effect5Amount": "0.1",
                "Effect6Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect9Amount": "0",
                "Effect10Amount": "5"
            },
            "depth": 3
        },
        "3801": {
            "name": "Crystalline Bracer",
            "description": "<mainText><stats><attention>200</attention> Health<br><attention>100%</attention> Base Health Regen</stats></mainText><br>",
            "colloq": ";",
            "plaintext": "Grants Health and Health Regen",
            "from": [
                "1028",
                "1006"
            ],
            "into": [
                "3084",
                "3083",
                "3109"
            ],
            "image": {
                "full": "3801.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 100,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200
            },
            "depth": 2
        },
        "3802": {
            "name": "Lost Chapter",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>300</attention> Mana<br><attention>10</attention> Ability Haste</stats><br><li><passive>Enlighten:</passive> Upon levelling up, restores <scaleMana>20% max Mana</scaleMana> over 3 seconds.</mainText><br>",
            "colloq": ";",
            "plaintext": "Restores Mana upon levelling up.",
            "from": [
                "1052",
                "1027"
            ],
            "into": [
                "6655",
                "6653",
                "4644",
                "6656"
            ],
            "image": {
                "full": "3802.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 315,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatMagicDamageMod": 40
            },
            "depth": 2
        },
        "3803": {
            "name": "Catalyst of Aeons",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>300</attention> Mana</stats><br><li><passive>Eternity:</passive> Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1027"
            ],
            "into": [
                "4402",
                "6657"
            ],
            "image": {
                "full": "3803.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMPPoolMod": 300
            },
            "depth": 2
        },
        "3814": {
            "name": "Edge of Night",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>10</attention> Lethality<br><attention>325</attention> Health</stats><br><li><passive>Annul:</passive> Gain a Spell Shield that blocks the next enemy Ability.<br><br><rules>Item's cooldown is restarted if you take damage before it is completed.</rules></mainText><br>",
            "colloq": ";lethality",
            "plaintext": "Periodically blocks enemy abilities",
            "stacks": 0,
            "from": [
                "1036",
                "3134",
                "1028"
            ],
            "image": {
                "full": "3814.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1050,
                "purchasable": true,
                "total": 2900,
                "sell": 2030
            },
            "tags": [
                "Health",
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 325
            },
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect3Amount": "0",
                "Effect4Amount": "40"
            },
            "depth": 3
        },
        "3850": {
            "name": "Spellthief's Edge",
            "description": "<mainText><stats><attention>10</attention> Ability Power<br><attention>25</attention> Health<br><attention>25%</attention> Base Mana Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 36 seconds.<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Frostfang</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by damaging enemy champions",
            "image": {
                "full": "3850.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 25,
                "FlatMagicDamageMod": 10
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "500",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3851": {
            "name": "Frostfang",
            "description": "<mainText><stats><attention>15</attention> Ability Power<br><attention>70</attention> Health<br><attention>50%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Shard of True Ice</rarityLegendary>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3850,
            "inStore": false,
            "image": {
                "full": "3851.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 70,
                "FlatMagicDamageMod": 15
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "1000",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3853": {
            "name": "Shard of True Ice",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3851,
            "inStore": false,
            "image": {
                "full": "3853.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 75,
                "FlatMagicDamageMod": 40
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3854": {
            "name": "Steel Shoulderguards",
            "description": "<mainText><stats><attention>4</attention> Attack Damage<br><attention>50</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below (50% for Melee Users | 30% for Ranged Users) of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Runesteel Spaulders</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by executing minions alongside allies",
            "image": {
                "full": "3854.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 4,
                "FlatHPPoolMod": 50
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.3",
                "Effect4Amount": "500",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3855": {
            "name": "Runesteel Spaulders",
            "description": "<mainText><stats><attention>6</attention> Attack Damage<br><attention>100</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below 50% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Bulwark of the Mountain</rarityLegendary>. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3854,
            "inStore": false,
            "image": {
                "full": "3855.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 6,
                "FlatHPPoolMod": 100
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.5",
                "Effect4Amount": "1000",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3857": {
            "name": "Pauldrons of Whiterock",
            "description": "<mainText><stats><attention>15</attention> Attack Damage<br><attention>250</attention> Health<br><attention>100%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3855,
            "inStore": false,
            "image": {
                "full": "3857.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "FlatHPPoolMod": 250
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3858": {
            "name": "Relic Shield",
            "description": "<mainText><stats><attention>7</attention> Ability Power<br><attention>50</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below (50% for Melee Users | 30% for Ranged Users) of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Targon's Buckler</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by executing minions alongside allies",
            "image": {
                "full": "3858.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 50,
                "FlatMagicDamageMod": 7
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.3",
                "Effect4Amount": "500",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3859": {
            "name": "Targon's Buckler",
            "description": "<mainText><stats><attention>10</attention> Ability Power<br><attention>100</attention> Health<br><attention>75%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below 50% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Bulwark of the Mountain</rarityLegendary>. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3858,
            "inStore": false,
            "image": {
                "full": "3859.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 100,
                "FlatMagicDamageMod": 10
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "0.5",
                "Effect3Amount": "0.5",
                "Effect4Amount": "1000",
                "Effect5Amount": "35",
                "Effect6Amount": "3"
            }
        },
        "3860": {
            "name": "Bulwark of the Mountain",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>250</attention> Health<br><attention>100%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3859,
            "inStore": false,
            "image": {
                "full": "3860.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "HealthRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 20
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3862": {
            "name": "Spectral Sickle",
            "description": "<mainText><stats><attention>6</attention> Attack Damage<br><attention>25</attention> Health<br><attention>25%</attention> Base Mana Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Harrowing Crescent</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Gain gold and upgrade by damaging enemy champions",
            "image": {
                "full": "3862.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "Damage",
                "ManaRegen",
                "Vision",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 6,
                "FlatHPPoolMod": 25
            },
            "effect": {
                "Effect1Amount": "2",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "500",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3863": {
            "name": "Harrowing Crescent",
            "description": "<mainText><stats><attention>10</attention> Attack Damage<br><attention>60</attention> Health<br><attention>50%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 36 seconds.<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Black Mist Scythe</rarityLegendary>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3862,
            "inStore": false,
            "image": {
                "full": "3863.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 10,
                "FlatHPPoolMod": 60
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "20",
                "Effect3Amount": "20",
                "Effect4Amount": "1000",
                "Effect5Amount": "12",
                "Effect6Amount": "3",
                "Effect7Amount": "2000"
            }
        },
        "3864": {
            "name": "Black Mist Scythe",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "specialRecipe": 3863,
            "inStore": false,
            "image": {
                "full": "3864.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": false,
                "total": 400,
                "sell": 160
            },
            "tags": [
                "Health",
                "ManaRegen",
                "GoldPer",
                "Lane"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatHPPoolMod": 75
            },
            "effect": {
                "Effect1Amount": "3"
            }
        },
        "3901": {
            "name": "<rarityLegendary>Fire at Will</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
            "description": "",
            "colloq": "",
            "plaintext": "Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "image": {
                "full": "3901.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3902": {
            "name": "<rarityLegendary>Death's Daughter</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
            "description": "<mainText><stats></stats><mainText>Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing <trueDamage>bonus true damage</trueDamage> and <status>Slowing</status>.</mainText></mainText><br>",
            "colloq": "",
            "plaintext": "<mainText>Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing <trueDamage>bonus true damage</trueDamage> and <status>Slowing</status>.</mainText>",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "image": {
                "full": "3902.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3903": {
            "name": "<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>",
            "description": "<mainText><stats></stats>Allies in the Cannon Barrage gain <speed>bonus Move Speed</speed>.</mainText><br>",
            "colloq": "",
            "plaintext": "Allies in the Cannon Barrage gain <speed>bonus Move Speed</speed>.",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "image": {
                "full": "3903.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "3916": {
            "name": "Oblivion Orb",
            "description": "<mainText><stats><attention>30</attention> Ability Power</stats><br><li><passive>Cursed:</passive> Dealing magic damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "Increases magic damage",
            "stacks": 0,
            "from": [
                "1052"
            ],
            "into": [
                "3011",
                "3165"
            ],
            "image": {
                "full": "3916.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 365,
                "purchasable": true,
                "total": 800,
                "sell": 560
            },
            "tags": [
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "depth": 2
        },
        "4003": {
            "name": "Lifeline",
            "description": "<mainText><stats><attention>20</attention> Attack Damage<br><attention>8</attention> Lethality</stats><br><br><active>Active -</active> <active>Soul Anchor:</active> Mark your current location. After 4 seconds, return to that location (60s ).</mainText><br>",
            "colloq": ";lethality",
            "plaintext": "Marks the ground, and returns you there after a few moments",
            "from": [
                "1036",
                "2420"
            ],
            "into": [
                "4004"
            ],
            "image": {
                "full": "4003.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 1650,
                "sell": 1155
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "depth": 2
        },
        "4004": {
            "name": "Spectral Cutlass",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>21</attention> Lethality</stats><br><br><active>Active -</active> <active>Soul Anchor:</active> Mark your current location. After 4 seconds, return to that location (45s ).</mainText><br>",
            "colloq": ";lethality",
            "plaintext": "Marks the ground, and returns you there after a few moments",
            "from": [
                "4003",
                "3134"
            ],
            "image": {
                "full": "4004.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3150,
                "sell": 2205
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70
            },
            "depth": 3
        },
        "4005": {
            "name": "Imperial Mandate",
            "description": "",
            "colloq": ";",
            "plaintext": "Defer damage until later.",
            "from": [
                "3108",
                "4642"
            ],
            "image": {
                "full": "4005.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 55
            },
            "depth": 3
        },
        "4010": {
            "name": "Bloodletter's Curse",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><li><passive>Vile Decay:</passive> Dealing magic damage reduces the target's magic resist by 5% for 6 seconds, stacking up to up to 30%. Repeat damage from the same spell cast can only stack this once per 2 second(s).</mainText><br>",
            "colloq": ";magic penetration",
            "plaintext": "Grant Spell Shield after damaging an enemy with an ability",
            "image": {
                "full": "4010.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "SpellDamage",
                "CooldownReduction"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 70,
                "FlatArmorMod": 30
            }
        },
        "4011": {
            "name": "Sword of Blossoming Dawn",
            "description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>200</attention> Health<br><attention>15%</attention> Heal and Shield Power<br><attention>15</attention> Ability Haste</stats><br><li><passive>Effervescence:</passive> Gain +1.2% Attack Speed for every 1% Heal and Shield Power you have. <br><li><passive>Peppermint:</passive> <OnHit>On-Hit</OnHit>, heal the lowest health ally champion near you for [15 - 45] (+10% Bonus AD) (+7% AP), prioritizing lower health allies.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4011.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 40
            }
        },
        "4012": {
            "name": "Sin Eater",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>45</attention> Armor<br><attention>45</attention> Magic Resist<br><attention>30%</attention> Tenacity</stats><br><li><passive>The Feast:</passive> Whenever a nearby ally champion becomes affected by an immobilizing crowd control effect, instead you are stunned for that duration. (20s ).</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4012.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatSpellBlockMod": 45,
                "FlatArmorMod": 45
            }
        },
        "4013": {
            "name": "Lightning Braid",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>30%</attention> Tenacity</stats><br><li><passive>Chain Lightning:</passive> You deal 20% reduced ability damage. On a 1 second cadence, enemies you've damaged with abilities chain 66.6% of the ability damage you've dealt them to another nearby enemy, prioritizing champions.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4013.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "SpellDamage",
                "Tenacity"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 70,
                "FlatArmorMod": 30
            }
        },
        "4014": {
            "name": "Frozen Mallet",
            "description": "<mainText><stats><attention>60%</attention> Attack Speed<br><attention>600</attention> Health</stats><br><li><passive>Encroaching Frost:</passive> <OnHit>On-Hit</OnHit>, apply a stacking move speed slow.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4014.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 288,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Slow"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 600,
                "PercentAttackSpeedMod": 0.6
            }
        },
        "4015": {
            "name": "Perplexity",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>8%</attention> Move Speed<br><attention>22%</attention> Armor Penetration<br><attention>30%</attention> Magic Penetration</stats><br><li><passive>Giant Slayer:</passive> Deal up to 22% bonus damage against champions with greater max Health than you.<br><br><rules>Max damage increase reached when Health difference is greater than 2500.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4015.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "PercentMovementSpeedMod": 0.08,
                "FlatMagicDamageMod": 90
            }
        },
        "4016": {
            "name": "Wordless Promise",
            "description": "<mainText><stats><attention>50</attention> Ability Power<br><attention>15%</attention> Heal and Shield Power<br><attention>25</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Promise:</active> Make a <attention>Promise</attention> to an ally (90s ).<br><li><passive>Promise:</passive> Gain 15% of your <attention>Promised</attention> ally's Ability Power, and grant your <attention>Promised</attention> ally 15% of your Ability Haste.<br><br><rules>Champions can only be linked by one Wordless Promise at a time.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4016.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMagicDamageMod": 50
            }
        },
        "4017": {
            "name": "Hellfire Hatchet",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>16</attention> Lethality<br><attention>15%</attention> Omnivamp</stats><br><li><passive>Char:</passive> <OnHit>On-Hit</OnHit>, heal based on the Target's Current Health and apply a <keywordMajor>Burn</keywordMajor> that deals physical damage based on the Target's Missing Health per second for 4 seconds.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "image": {
                "full": "4017.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 3000,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": false,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            }
        },
        "4401": {
            "name": "Force of Nature",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>60</attention> Magic Resist<br><attention>5%</attention> Move Speed</stats><br><li><passive>Absorb:</passive> Taking <magicDamage>magic damage</magicDamage> from enemy Champions grants a stack of <attention>Steadfast</attention>. Enemy <status>Immobilizing</status> effects grant additional stacks.<li><passive>Dissipate:</passive> While at max stacks of <attention>Steadfast</attention>, gain increased Magic Resist and Move Speed.</mainText><br>",
            "colloq": ";fon",
            "plaintext": "Move Speed, Magic Resist, and max Health Regeneration",
            "from": [
                "1057",
                "1028",
                "3066"
            ],
            "image": {
                "full": "4401.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellBlock",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 60
            },
            "depth": 3
        },
        "4402": {
            "name": "Innervating Locket",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>400</attention> Health<br><attention>300</attention> Mana<br><attention>10</attention> Ability Haste</stats><br><li><passive>Eternity:</passive> Restore Mana equal to 15% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second.<li><passive>Innervate:</passive> After using an ability, restore <healing>3% missing Health</healing> and <scaleMana>3% missing Mana</scaleMana> over 3 seconds.<br><br><flavorText>\"Cast down the Noxians\" <br>– Bobdyr, Temple Guardsman</flavorText></mainText><br>",
            "colloq": ";",
            "plaintext": "Cast spells to heal",
            "from": [
                "3803",
                "3133"
            ],
            "image": {
                "full": "4402.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Damage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 300
            },
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "0.03",
                "Effect3Amount": "0.03"
            },
            "depth": 3
        },
        "4403": {
            "name": "The Golden Spatula",
            "description": "<mainText><stats><attention>70</attention> Attack Damage<br><attention>120</attention> Ability Power<br><attention>50%</attention> Attack Speed<br><attention>30%</attention> Critical Strike Chance<br><attention>250</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>250</attention> Mana<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Move Speed<br><attention>10%</attention> Life Steal<br><attention>100%</attention> Base Health Regen<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Doing Something:</passive> You are permanently On Fire!</mainText><br>",
            "colloq": ";",
            "plaintext": "It does EVERYTHING!",
            "from": [
                "3086",
                "1038",
                "1053",
                "3067",
                "1058",
                "3105"
            ],
            "image": {
                "full": "4403.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 687,
                "purchasable": true,
                "total": 7237,
                "sell": 5066
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "maps": {
                "11": false,
                "12": false,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatCritChanceMod": 0.3,
                "PercentMovementSpeedMod": 0.1,
                "FlatHPPoolMod": 250,
                "FlatSpellBlockMod": 30,
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 120,
                "FlatArmorMod": 30,
                "PercentAttackSpeedMod": 0.5,
                "PercentLifeStealMod": 0.1
            },
            "depth": 3
        },
        "4628": {
            "name": "Horizon Focus",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>150</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Hypershot:</passive> Damaging a champion with a non-targeted Ability at over 700 range or <status>Slowing or Immobilizing</status> them <keywordStealth>Reveals</keywordStealth> them and increases their damage taken from you.<br><br><rules>The Ability that triggers <passive>Hypershot</passive> also benefits from the damage increase. Pets and non-immobilizing traps do not trigger this effect. Only the initial placement of zone Abilities will trigger this effect. Distance is measured from the Ability cast position. </rules></mainText><br>",
            "colloq": "",
            "plaintext": "Immobilizing a champion causes lightning to strike them",
            "from": [
                "3145",
                "3108"
            ],
            "image": {
                "full": "4628.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1050,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 100
            },
            "depth": 3
        },
        "4629": {
            "name": "Cosmic Drive",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>30</attention> Ability Haste<br><attention>5%</attention> Move Speed</stats><br><li><passive>Spelldance:</passive> Damaging a champion generates a stack of <speed>2.5% Move Speed</speed> every 1.5 seconds for the next 5 seconds up to <speed>10% Move Speed</speed>. At 4 stacks, gain an additional <speed>10% Move Speed</speed> (<speed>20% Move Speed</speed> total). Dealing damage refreshes this effect.<br> <br></mainText><br>",
            "colloq": "",
            "plaintext": "Massive amounts of Cooldown Reduction",
            "from": [
                "3108",
                "3113",
                "1052"
            ],
            "image": {
                "full": "4629.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 815,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMagicDamageMod": 100
            },
            "depth": 3
        },
        "4630": {
            "name": "Blighting Jewel",
            "description": "<mainText><stats><attention>25</attention> Ability Power<br><attention>13%</attention> Magic Penetration</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1052"
            ],
            "into": [
                "3135"
            ],
            "image": {
                "full": "4630.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 665,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 25
            },
            "depth": 2
        },
        "4632": {
            "name": "Verdant Barrier",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>25</attention> Magic Resist</stats><br><li><passive>Adaptive:</passive> Killing a unit grants <scaleMR>0.3 Magic Resist</scaleMR> (max <scaleMR>9</scaleMR>). <br><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1033",
                "1052"
            ],
            "into": [
                "3102"
            ],
            "image": {
                "full": "4632.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 336,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 115,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "SpellBlock",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "4633": {
            "name": "Riftmaker",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste<br><attention>7%</attention> Omnivamp</stats><br><li><passive>Void Corruption:</passive> For each second damaging enemy champions, deal bonus damage. At maximum strength, the bonus damage is dealt as <trueDamage>true damage</trueDamage> instead. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Omnivamp and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4635",
                "1026"
            ],
            "into": [
                "7009"
            ],
            "image": {
                "full": "4633.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1050,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 70
            },
            "depth": 3
        },
        "4635": {
            "name": "Leeching Leer",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>250</attention> Health<br><attention>5%</attention> Omnivamp</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1052"
            ],
            "into": [
                "4633"
            ],
            "image": {
                "full": "4635.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Health",
                "SpellDamage",
                "SpellVamp"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "4636": {
            "name": "Night Harvester",
            "description": "<mainText><stats><attention>90</attention> Ability Power<br><attention>300</attention> Health<br><attention>25</attention> Ability Haste</stats><br><li><passive>Soulrend:</passive> Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3145",
                "3108",
                "1052"
            ],
            "into": [
                "7010"
            ],
            "image": {
                "full": "4636.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 815,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 90
            },
            "depth": 3
        },
        "4637": {
            "name": "Demonic Embrace",
            "description": "<mainText><stats><attention>75</attention> Ability Power<br><attention>350</attention> Health</stats><br><li><passive>Azakana's Gaze:</passive> Dealing Ability damage burns enemies for max Health magic damage every second.<li><passive>Dark Pact:</passive> Gain <scaleHealth>bonus Health</scaleHealth> as <scaleAP>Ability Power</scaleAP>. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1026",
                "1011",
                "1052"
            ],
            "image": {
                "full": "4637.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 815,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 75
            },
            "depth": 3
        },
        "4638": {
            "name": "Watchful Wardstone",
            "description": "<mainText><stats><attention>150</attention> Health<br><attention>10</attention> Ability Haste<br><attention>50%</attention> Base Mana Regen</stats><br><li><passive>Arcane Cache:</passive> This item can store up to 3 purchased Control Wards.<li><passive>Blessing of Ixtal:</passive> Grants a 8% increase to bonus Health, bonus Attack Damage, Ability Haste, and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "into": [
                "4643"
            ],
            "image": {
                "full": "4638.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1100,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Health",
                "Damage",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 150
            }
        },
        "4641": {
            "name": "Stirring Wardstone",
            "description": "<mainText><stats><attention>80</attention> Health<br><attention>25%</attention> Base Mana Regen</stats><br><li><passive>Arcane Cache:</passive> This item can store up to 2 purchased Control Wards.<br><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "image": {
                "full": "4641.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 350,
                "purchasable": false,
                "total": 350,
                "sell": 140
            },
            "tags": [
                "Health",
                "Damage",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 80
            }
        },
        "4642": {
            "name": "Bandleglass Mirror",
            "description": "<mainText><stats><attention>20</attention> Ability Power<br><attention>10</attention> Ability Haste<br><attention>50%</attention> Base Mana Regen</stats></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1004",
                "1052"
            ],
            "into": [
                "2065",
                "6617",
                "4005",
                "6620"
            ],
            "image": {
                "full": "4642.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 265,
                "purchasable": true,
                "total": 950,
                "sell": 665
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMagicDamageMod": 20
            },
            "depth": 2
        },
        "4643": {
            "name": "Vigilant Wardstone",
            "description": "<mainText><stats><attention>250</attention> Health<br><attention>10</attention> Ability Haste<br><attention>50%</attention> Base Mana Regen</stats><br><li><passive>Arcane Cache:</passive> This item can store up to 3 purchased Control Wards.<li><passive>Behold:</passive> Increase your Stealth Ward and Control Ward placement caps by 1.<li><passive>Chosen of Ixtal:</passive> Grants a 20% increase to bonus Health, bonus Attack Damage, Ability Haste, and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "consumeOnFull": true,
            "from": [
                "4638"
            ],
            "image": {
                "full": "4643.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1200,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "ManaRegen",
                "Vision",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": false,
                "21": false,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250
            },
            "depth": 2
        },
        "4644": {
            "name": "Crown of the Shattered Queen",
            "description": "<mainText><stats><attention>85</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Safeguard:</passive> You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "3802",
                "1052"
            ],
            "into": [
                "7024"
            ],
            "image": {
                "full": "4644.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 85
            },
            "depth": 3
        },
        "4645": {
            "name": "Shadowflame",
            "description": "<mainText><stats><attention>100</attention> Ability Power<br><attention>200</attention> Health</stats><br><li><passive>Cinderbloom:</passive> Damage to champions benefits from additional <keywordStealth>Magic Penetration</keywordStealth> based on their current <scaleHealth>Health</scaleHealth>. If the target was recently affected by Shields, gain the maximum benefit against that target. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3145",
                "1058"
            ],
            "image": {
                "full": "4645.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 384,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellDamage",
                "MagicPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 100
            },
            "depth": 3
        },
        "6029": {
            "name": "Ironspike Whip",
            "description": "<mainText><stats><attention>30</attention> Attack Damage</stats><br><br><active>Active -</active> <active>Crescent:</active> Deal damage to nearby enemies.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037"
            ],
            "into": [
                "6630",
                "6631"
            ],
            "image": {
                "full": "6029.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 0,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 225,
                "purchasable": true,
                "total": 1100,
                "sell": 770
            },
            "tags": [
                "Damage",
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30
            },
            "depth": 2
        },
        "6035": {
            "name": "Silvermere Dawn",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>300</attention> Health<br><attention>40</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs and gain Tenacity and Slow Resistance.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3140",
                "1037",
                "1028"
            ],
            "image": {
                "full": "6035.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 48,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 425,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Damage",
                "Active",
                "Tenacity"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatHPPoolMod": 300,
                "FlatSpellBlockMod": 40
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 3
        },
        "6333": {
            "name": "Death's Dance",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>15</attention> Ability Haste<br><attention>45</attention> Armor</stats><br><li><passive>Ignore Pain:</passive> Damage taken is dealt to you over time instead.<li><passive>Defy:</passive> Champion takedowns cleanse <passive>Ignore Pain's</passive> remaining damage pool and restore Health over time.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "stacks": 0,
            "from": [
                "1037",
                "1031",
                "3133"
            ],
            "image": {
                "full": "6333.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 96,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 525,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Armor",
                "Damage",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatArmorMod": 45
            },
            "depth": 3
        },
        "6609": {
            "name": "Chempunk Chainsword",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>250</attention> Health<br><attention>25</attention> Ability Haste</stats><br><li><passive>Hackshorn:</passive> Dealing physical damage applies 40% <status>Grievous Wounds</status> to enemy champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3123",
                "1028",
                "3133"
            ],
            "image": {
                "full": "6609.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 144,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 500,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatHPPoolMod": 250
            },
            "depth": 3
        },
        "6616": {
            "name": "Staff of Flowing Water",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>8%</attention> Heal and Shield Power<br><attention>75%</attention> Base Mana Regen<br><attention>5%</attention> Move Speed</stats><br><li><passive>Rapids:</passive> Healing or Shielding another ally grants you both Ability Power and Ability Haste.<br></mainText><br>",
            "colloq": "",
            "plaintext": "Your heals and shields reduce crowd control and grant Move Speed",
            "from": [
                "3113",
                "3114"
            ],
            "image": {
                "full": "6616.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 192,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 450,
                "purchasable": true,
                "total": 2100,
                "sell": 1470
            },
            "tags": [
                "SpellDamage",
                "ManaRegen",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMagicDamageMod": 35
            },
            "depth": 3
        },
        "6617": {
            "name": "Moonstone Renewer",
            "description": "<mainText><stats><attention>35</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Starlit Grace:</passive> Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing or shielding based on the original amount<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Heal and Shield Power.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "Your heals and shields cool down faster and have greater effect on low health allies",
            "from": [
                "3067",
                "4642"
            ],
            "into": [
                "7021"
            ],
            "image": {
                "full": "6617.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 240,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 550,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 35
            },
            "depth": 3
        },
        "6620": {
            "name": "Echoes of Helia",
            "description": "<mainText><stats><attention>30</attention> Ability Power<br><attention>200</attention> Health<br><attention>15</attention> Ability Haste<br><attention>125%</attention> Base Mana Regen</stats><br><li><passive>Soul Siphon:</passive> Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to restore Health and deals magic damage per Shard to the nearest enemy champion.<br><li><passive>Dissonance:</passive> Gain <scaleAP>Ability Power</scaleAP> per <scaleMana> Base Mana Regeneration</scaleMana>. Disables Harmony.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Ability Haste.</attention><br></mainText><br>",
            "colloq": "",
            "plaintext": "Damage low-health enemies to trigger a cursed explosion, dealing damage and slowing nearby foes",
            "from": [
                "3012",
                "4642"
            ],
            "into": [
                "7033"
            ],
            "image": {
                "full": "6620.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 288,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 30
            },
            "depth": 3
        },
        "6630": {
            "name": "Goredrinker",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>400</attention> Health<br><attention>20</attention> Ability Haste<br><attention>8%</attention> Omnivamp</stats><br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health and Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6029",
                "3044",
                "3067"
            ],
            "into": [
                "7015"
            ],
            "image": {
                "full": "6630.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 336,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatHPPoolMod": 400
            },
            "depth": 3
        },
        "6631": {
            "name": "Stridebreaker",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>20%</attention> Attack Speed<br><attention>375</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Halting Slash:</active> Deal damage to nearby enemies, <status>Slowing</status> them. Can be cast while moving.<br><li><passive>Heroic Gait:</passive> Dealing physical damage grants Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6029",
                "3051",
                "3067"
            ],
            "into": [
                "7016"
            ],
            "image": {
                "full": "6631.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 384,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "FlatHPPoolMod": 375,
                "PercentAttackSpeedMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "0",
                "Effect3Amount": "90",
                "Effect4Amount": "0",
                "Effect5Amount": "10"
            },
            "depth": 3
        },
        "6632": {
            "name": "Divine Sunderer",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Magic Penetration.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3133",
                "3057",
                "3067"
            ],
            "into": [
                "7017"
            ],
            "image": {
                "full": "6632.png",
                "sprite": "item3.png",
                "group": "item",
                "x": 432,
                "y": 432,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatHPPoolMod": 300
            },
            "depth": 3
        },
        "6653": {
            "name": "Liandry's Anguish",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Agony:</passive> Deal bonus magic damage to Champions based on the target's bonus Health.<li><passive>Torment:</passive> Dealing damage with Abilities causes enemies to burn over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "Charge up in combat to deal high damage over time, especially against durable enemies",
            "from": [
                "3802",
                "3108"
            ],
            "into": [
                "7012"
            ],
            "image": {
                "full": "6653.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1200,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            },
            "depth": 3
        },
        "6655": {
            "name": "Luden's Tempest",
            "description": "<mainText><stats><attention>80</attention> Ability Power<br><attention>6</attention> Magic Penetration<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Echo:</passive> Damaging Abilities deal magic damage to the target and 3 nearby enemies and grants you Move Speed. Dealing ability damage to Champions reduces this item's cooldown.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration. </mainText><br>",
            "colloq": "",
            "plaintext": "High burst damage, good against fragile foes",
            "from": [
                "3802",
                "1026"
            ],
            "into": [
                "7013"
            ],
            "image": {
                "full": "6655.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 1250,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 80
            },
            "depth": 3
        },
        "6656": {
            "name": "Everfrost",
            "description": "<mainText><stats><attention>70</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Glaciate:</active> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Power. <br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "3802",
                "1052"
            ],
            "into": [
                "7014"
            ],
            "image": {
                "full": "6656.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 465,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 250,
                "FlatMPPoolMod": 600,
                "FlatMagicDamageMod": 70
            },
            "depth": 3
        },
        "6657": {
            "name": "Rod of Ages",
            "description": "<mainText><stats><attention>60</attention> Ability Power<br><attention>400</attention> Health<br><attention>400</attention> Mana</stats><br><br>This item gains 20 Health, 20 Mana and 4 Ability Power every 60 seconds up to 10 times, for a maximum of 200 Health, 200 Mana,  and 40 Ability Power. Upon reaching max stacks, gain a level and all effects of Eternity are increased by 50%.<br><li><passive>Eternity:</passive> Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second. For every 200 Health or Mana restored this way, gain <speed>35% Decaying Move Speed</speed> for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5 Ability Haste.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1026",
                "3803",
                "1052"
            ],
            "into": [
                "7028"
            ],
            "image": {
                "full": "6657.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 215,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMPPoolMod": 400,
                "FlatMagicDamageMod": 60
            },
            "depth": 3
        },
        "6660": {
            "name": "Bami's Cinder",
            "description": "<mainText><stats><attention>300</attention> Health</stats><br><li><passive>Immolate :</passive> Taking or dealing damage causes you to begin dealing magic damage per second to nearby enemies (increased against minions and monsters).</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1028",
                "1028"
            ],
            "into": [
                "3068"
            ],
            "image": {
                "full": "6660.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 200,
                "purchasable": true,
                "total": 1000,
                "sell": 700
            },
            "tags": [
                "Health"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300
            },
            "depth": 2
        },
        "6662": {
            "name": "Iceborn Gauntlet",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>50</attention> Armor<br><attention>20</attention> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2.5s. Enemies that move across the field are <status>Slowed</status>. Your primary target is crippled, applying a 100% stronger slow on them and reducing their damage by 10% against you for 2.5s. (1.5s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>50 Health</attention>, <attention>5%</attention> Tenacity, and <attention>5%</attention> Slow Resist.<br></mainText><br>",
            "colloq": "",
            "plaintext": "High Magic Resist.Passively slow nearby enemies. When spells are cast near you, release a wave of energy that damages and slows.",
            "from": [
                "3057",
                "3067",
                "1031"
            ],
            "into": [
                "7005"
            ],
            "image": {
                "full": "6662.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatArmorMod": 50
            },
            "depth": 3
        },
        "6664": {
            "name": "Turbo Chemtank",
            "description": "<mainText><stats><attention>500</attention> Health<br><attention>50</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Supercharged:</active> Grants Move Speed towards enemies or enemy turrets. Once near an enemy (or after 4 seconds) a shockwave is emitted that <status>Slows</status> nearby champions.</mainText><br>",
            "colloq": "",
            "plaintext": "Immobilize enemies to gain a shield. Activate to run faster at opponents.",
            "from": [
                "3067",
                "1057",
                "1028"
            ],
            "image": {
                "full": "6664.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatSpellBlockMod": 50
            },
            "depth": 3
        },
        "6665": {
            "name": "Jak'Sho, The Protean",
            "description": "<mainText><stats><attention>400</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><li><passive>Voidborn Resilience:</passive> For each second in champion combat gain a stack granting <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>, up to 8 stacks max. At max stacks become empowered, instantly draining enemies around you for magic damage, healing yourself, and increasing your bonus resist until end of combat.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3105",
                "3067",
                "1028"
            ],
            "into": [
                "7026"
            ],
            "image": {
                "full": "6665.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "6667": {
            "name": "Radiant Virtue",
            "description": "<mainText><stats><attention>350</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3105",
                "1011"
            ],
            "into": [
                "7027"
            ],
            "image": {
                "full": "6667.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "depth": 3
        },
        "6670": {
            "name": "Noonquiver",
            "description": "<mainText><stats><attention>30</attention> Attack Damage<br><attention>15%</attention> Attack Speed</stats><br><li><passive>Precision:</passive> Attacks deal additional damage to Minions and Monsters.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1036",
                "1042",
                "1036"
            ],
            "into": [
                "6672",
                "3095",
                "3087"
            ],
            "image": {
                "full": "6670.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 300,
                "purchasable": true,
                "total": 1300,
                "sell": 910
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 2
        },
        "6671": {
            "name": "Galeforce",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1038",
                "3086",
                "1036"
            ],
            "into": [
                "7006"
            ],
            "image": {
                "full": "6671.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.15
            },
            "depth": 3
        },
        "6672": {
            "name": "Kraken Slayer",
            "description": "<mainText><stats><attention>40</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Bring It Down:</passive> Every third Attack deals additional physical damage. Repeated triggers on the same target increase the damage dealt.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6670",
                "1018",
                "1043"
            ],
            "image": {
                "full": "6672.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatCritChanceMod": 0.2,
                "PercentAttackSpeedMod": 0.3
            },
            "depth": 3
        },
        "6673": {
            "name": "Immortal Shieldbow",
            "description": "<mainText><stats><attention>50</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>10%</attention> Life Steal</stats><br><li><passive>Lifeline:</passive> When taking damage that would reduce you below 30% Health, gain a Shield. In addition, gain Attack Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1037",
                "1018",
                "1053"
            ],
            "image": {
                "full": "6673.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 625,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "LifeSteal",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatCritChanceMod": 0.2,
                "PercentLifeStealMod": 0.1
            },
            "depth": 3
        },
        "6675": {
            "name": "Navori Quickblades",
            "description": "<mainText><stats><attention>65</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>15</attention> Ability Haste</stats><br><li><passive>Transcendence:</passive>  Your Attacks reduce your non-Ultimate Ability cooldowns.<li><passive>Impermanence:</passive> Your abilities deal increased damage based on Critical Strike Chance.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1038",
                "3133",
                "1018"
            ],
            "into": [
                "7032"
            ],
            "image": {
                "full": "6675.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 400,
                "purchasable": true,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatCritChanceMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 3
        },
        "6676": {
            "name": "The Collector",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>18</attention> Lethality</stats><br><li><passive>Death and Taxes:</passive> Dealing damage that would leave an enemy champion below 5% Health executes them. Champion kills grant an additional 25 gold.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "1037",
                "1018"
            ],
            "image": {
                "full": "6676.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 425,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55,
                "FlatCritChanceMod": 0.2
            },
            "depth": 3
        },
        "6677": {
            "name": "Rageknife",
            "description": "<mainText><stats><attention>25%</attention> Attack Speed</stats><br><li><passive>Wrath:</passive> Attacks apply <magicDamage>20 magic damage</magicDamage> <OnHit>On-Hit</OnHit>.<li><passive>Seething Strike:</passive> Basic attacks grant <attackSpeed>5% Attack Speed</attackSpeed>, stacking up to 3 times.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "1042",
                "1042"
            ],
            "into": [
                "3124"
            ],
            "image": {
                "full": "6677.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 600,
                "purchasable": true,
                "total": 1200,
                "sell": 840
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "PercentAttackSpeedMod": 0.25
            },
            "depth": 2
        },
        "6691": {
            "name": "Duskblade of Draktharr",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (30s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "into": [
                "7002"
            ],
            "image": {
                "full": "6691.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6692": {
            "name": "Eclipse",
            "description": "<mainText><stats><attention>60</attention> Attack Damage<br><attention>12</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><li><passive>Ever Rising Moon:</passive> Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals additional damage, grants you Move Speed and a Shield.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "into": [
                "7001"
            ],
            "image": {
                "full": "6692.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 900,
                "purchasable": true,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "depth": 3
        },
        "6693": {
            "name": "Prowler's Claw",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><li><passive>Sandstrike:</passive> After dashing, blinking, or exiting Stealth, your next Attack on a champion deals an additional physical damage. If dealt by a Melee champion, this Attack also <status>Slows</status> the target.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "into": [
                "7000"
            ],
            "image": {
                "full": "6693.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6694": {
            "name": "Serylda's Grudge",
            "description": "<mainText><stats><attention>45</attention> Attack Damage<br><attention>30%</attention> Armor Penetration<br><attention>20</attention> Ability Haste</stats><br><li><passive>Bitter Cold:</passive> Damaging Abilities <status>Slow</status> enemies.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3133",
                "3035"
            ],
            "image": {
                "full": "6694.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 650,
                "purchasable": true,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 45
            },
            "depth": 3
        },
        "6695": {
            "name": "Serpent's Fang",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>15</attention> Lethality</stats><br><li><passive>Shield Reaver:</passive> Dealing damage to an enemy champion reduces any shields they gain. When you damage an enemy who is unaffected by Shield Reaver, reduce all shields on them.<br><br>Item performance differs for melee and ranged users.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "1037"
            ],
            "image": {
                "full": "6695.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 625,
                "purchasable": true,
                "total": 2600,
                "sell": 1820
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "6696": {
            "name": "Axiom Arc",
            "description": "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>25</attention> Ability Haste</stats><br><li><passive>Flux:</passive> Whenever a Champion dies that you recently damaged, refund some of your Ultimate Ability's total cooldown.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3134",
                "3133"
            ],
            "image": {
                "full": "6696.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatPhysicalDamageMod": 55
            },
            "depth": 3
        },
        "7000": {
            "name": "Sandshrike's Claw",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><li><passive>Sandstrike:</passive> After dashing, blinking, or exiting Stealth, your next Attack on a champion deals an additional physical damage. If dealt by a Melee champion, this Attack also <status>Slows</status> the target.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6693"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7000.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 4
        },
        "7001": {
            "name": "Syzygy",
            "description": "<mainText><stats><ornnBonus>80</ornnBonus> Attack Damage<br><ornnBonus>20</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><li><passive>Ever Rising Moon:</passive> Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals additional damage, grants you Move Speed and a Shield.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6692"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7001.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 80
            },
            "depth": 4
        },
        "7002": {
            "name": "Draktharr's Shadowcarver",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><li><passive>Nightstalker:</passive> Your Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become <keywordStealth>Untargetable</keywordStealth> from non-structures for 1.5 seconds (30s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste and  Move Speed.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6691"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7002.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "Stealth",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "depth": 4
        },
        "7005": {
            "name": "Frozen Fist",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>70</ornnBonus> Armor<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage and creates a frost field for 2.5s. Enemies that move across the field are <status>Slowed</status>. Your primary target is crippled, applying a 100% stronger slow on them and reducing their damage by 10% against you for 2.5s. (1.5s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>50 Health</attention>, <attention>5%</attention> Tenacity, and <attention>5%</attention> Slow Resist.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6662"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7005.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3000,
                "sell": 2100
            },
            "tags": [
                "Health",
                "Armor",
                "CooldownReduction",
                "Slow",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatArmorMod": 70
            },
            "depth": 4
        },
        "7006": {
            "name": "Typhoon",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Attack Damage<br><ornnBonus>30%</ornnBonus> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><ornnBonus>10%</ornnBonus> Move Speed</stats><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination. Deals physical damage, increased against low Health targets.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><rules>Maximum missile damage dealt when enemy Health is below 25%.<br>Cloudburst's dash cannot pass through terrain.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6671"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7006.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "AttackSpeed",
                "Active",
                "NonbootsMovement"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 65,
                "FlatCritChanceMod": 0.2,
                "PercentMovementSpeedMod": 0.1,
                "PercentAttackSpeedMod": 0.3
            },
            "depth": 4
        },
        "7009": {
            "name": "Icathia's Curse",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>450</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste<br><ornnBonus>8%</ornnBonus> Omnivamp</stats><br><li><passive>Void Corruption:</passive> For each second damaging enemy champions, deal bonus damage. At maximum strength, the bonus damage is dealt as <trueDamage>true damage</trueDamage> instead. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Omnivamp and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4633"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7009.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "SpellVamp",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 450,
                "FlatMagicDamageMod": 90
            },
            "depth": 4
        },
        "7010": {
            "name": "Vespertide",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>400</ornnBonus> Health<br><ornnBonus>30</ornnBonus> Ability Haste</stats><br><li><passive>Soulrend:</passive> Damaging a champion with Attacks or Abilities deals additional magic damage and grants you Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4636"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7010.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellDamage",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatMagicDamageMod": 120
            },
            "depth": 4
        },
        "7011": {
            "name": "Upgraded Aeropack",
            "description": "<mainText><stats><ornnBonus>120</ornnBonus> Ability Power<br><ornnBonus>10</ornnBonus> Magic Penetration<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Supersonic:</active> Dash in target direction, unleashing an arc of magic missiles that deal damage. Then, gain Move Speed towards enemy champions.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3152"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7011.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMagicDamageMod": 120
            },
            "depth": 4
        },
        "7012": {
            "name": "Liandry's Lament",
            "description": "<mainText><stats><ornnBonus>110</ornnBonus> Ability Power<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Agony:</passive> Deal bonus magic damage to Champions based on the target's bonus Health.<li><passive>Torment:</passive> Dealing damage with Abilities causes enemies to burn over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6653"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7012.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 110
            },
            "depth": 4
        },
        "7013": {
            "name": "Eye of Luden",
            "description": "<mainText><stats><ornnBonus>100</ornnBonus> Ability Power<br><ornnBonus>10</ornnBonus> Magic Penetration<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Echo:</passive> Damaging Abilities deal magic damage to the target and 3 nearby enemies and grants you Move Speed. Dealing ability damage to Champions reduces this item's cooldown.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Magic Penetration. </mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6655"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7013.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "NonbootsMovement",
                "MagicPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 100
            },
            "depth": 4
        },
        "7014": {
            "name": "Eternal Winter",
            "description": "<mainText><stats><ornnBonus>90</ornnBonus> Ability Power<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Glaciate:</active> Deal damage in a cone, <status>Slowing</status> enemies hit. Enemies at the center of the cone are <status>Rooted</status> instead.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Power. <br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6656"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7014.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 90
            },
            "depth": 4
        },
        "7015": {
            "name": "Ceaseless Hunger",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>12%</ornnBonus> Omnivamp</stats><br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal damage to nearby enemies. Restore Health for each champion hit.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health and Ability Haste.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6630"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7015.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Active",
                "CooldownReduction",
                "SpellVamp",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatHPPoolMod": 550
            },
            "depth": 4
        },
        "7016": {
            "name": "Dreamshatter",
            "description": "<mainText><stats><ornnBonus>70</ornnBonus> Attack Damage<br><ornnBonus>30%</ornnBonus> Attack Speed<br><ornnBonus>475</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Halting Slash:</active> Deal damage to nearby enemies, <status>Slowing</status> them. Can be cast while moving.<br><li><passive>Heroic Gait:</passive> Dealing physical damage grants Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6631"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7016.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatHPPoolMod": 475,
                "PercentAttackSpeedMod": 0.3
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "0",
                "Effect3Amount": "90",
                "Effect4Amount": "0",
                "Effect5Amount": "10"
            },
            "depth": 4
        },
        "7017": {
            "name": "Deicide",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Attack Damage<br><ornnBonus>450</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage <OnHit>On-Hit</OnHit>. If the target is a champion, also heal.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor Penetration and Magic Penetration.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6632"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7017.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3300,
                "sell": 2310
            },
            "tags": [
                "Health",
                "Damage",
                "CooldownReduction",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 60,
                "FlatHPPoolMod": 450
            },
            "depth": 4
        },
        "7018": {
            "name": "Infinity Force",
            "description": "<mainText><stats><ornnBonus>50</ornnBonus> Attack Damage<br><ornnBonus>43%</ornnBonus> Attack Speed<br><ornnBonus>400</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Threefold Strike:</passive> Attacks grant Move Speed. If the target is a champion, increase your base Attack Damage, stacking.<li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with additional damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Attack Damage, Ability Haste, and Move Speed.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3078"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7018.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3333,
                "sell": 2333
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 400,
                "PercentAttackSpeedMod": 0.43
            },
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "1.5",
                "Effect5Amount": "1.5"
            },
            "depth": 4
        },
        "7019": {
            "name": "Reliquary of the Golden Dawn",
            "description": "<mainText><stats><ornnBonus>400</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Devotion:</active> Grant nearby allies a <shield>Shield</shield>, decaying over time.<br><li><passive>Consecrate:</passive> Grant nearby allied champions  <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Armor and Magic Resist increase to <passive>Consecrate</passive>.<br><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3190"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7019.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Aura",
                "Active"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7020": {
            "name": "Shurelya's Requiem",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><br><active>Active -</active> <active>Inspire:</active> Grants nearby allies Move Speed.<li><passive>Motivate:</passive> Empowering or Protecting another ally Champion grants both allies Move Speed.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Ability Haste.<br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "2065"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7020.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 65
            },
            "depth": 4
        },
        "7021": {
            "name": "Starcaster",
            "description": "<mainText><stats><ornnBonus>65</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>25</ornnBonus> Ability Haste<br><ornnBonus>200%</ornnBonus> Base Mana Regen</stats><br><li><passive>Starlit Grace:</passive> Healing or shielding an ally chains to the nearest ally champion (excluding yourself), healing or shielding based on the original amount<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Heal and Shield Power.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6617"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7021.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 144,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 65
            },
            "depth": 4
        },
        "7023": {
            "name": "Equinox",
            "description": "<mainText><stats><ornnBonus>400</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Coruscation:</passive> After <status>Immobilizing</status> champions or being <status>Immobilized</status>, cause that target and all nearby enemy Champions to take increased damage.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3001"
            ],
            "inStore": false,
            "image": {
                "full": "7023.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 400,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7024": {
            "name": "Caesura",
            "description": "<mainText><stats><ornnBonus>105</ornnBonus> Ability Power<br><ornnBonus>350</ornnBonus> Health<br><ornnBonus>800</ornnBonus> Mana<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Safeguard:</passive> You are <keywordMajor>Safeguarded</keywordMajor>, reducing incoming champion damage. <keywordMajor>Safeguard</keywordMajor> persists for 2.5 seconds after taking champion damage. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Move Speed and Ability Power.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "4644"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7024.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "NonbootsMovement",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 350,
                "FlatMPPoolMod": 800,
                "FlatMagicDamageMod": 105
            },
            "depth": 4
        },
        "7025": {
            "name": "Leviathan",
            "description": "<mainText><stats><ornnBonus>1050</ornnBonus> Health<br><ornnBonus>300%</ornnBonus> Base Health Regen<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Colossal Consumption:</passive> Charge up a powerful attack against a champion over 3s while within 700 range of them. The charged attack deals 125 + <scalehealth>6%</scalehealth> of your max Health as bonus physical damage, and grants you 10% of that amount as permanent max Health. (30s) cooldown per target.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>1%</attention> Increased Health & <attention>6%</attention> Champion Size.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3084"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7025.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 1050
            },
            "depth": 4
        },
        "7026": {
            "name": "The Unspoken Parasite",
            "description": "<mainText><stats><ornnBonus>550</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Voidborn Resilience:</passive> For each second in champion combat gain a stack granting <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>, up to 8 stacks max. At max stacks become empowered, instantly draining enemies around you for magic damage, healing yourself, and increasing your bonus resist until end of combat.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention> Armor and Magic Resist</attention>.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6665"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7026.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "CooldownReduction",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7027": {
            "name": "Primordial Dawn",
            "description": "<mainText><stats><ornnBonus>500</ornnBonus> Health<br><ornnBonus>40</ornnBonus> Armor<br><ornnBonus>40</ornnBonus> Magic Resist<br><ornnBonus>15</ornnBonus> Ability Haste</stats><br><li><passive>Guiding Light:</passive> Upon casting your Ultimate you Transcend, increasing your Max Health. While Transcended you and allies heal over time.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items Health.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6667"
            ],
            "inStore": false,
            "image": {
                "full": "7027.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 192,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2700,
                "sell": 1890
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor",
                "Aura",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 500,
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "depth": 4
        },
        "7028": {
            "name": "Infinite Convergence",
            "description": "<mainText><stats><ornnBonus>80</ornnBonus> Ability Power<br><ornnBonus>550</ornnBonus> Health<br><ornnBonus>550</ornnBonus> Mana</stats><br><br>This item gains 20 Health, 20 Mana and 4 Ability Power every 60 seconds up to 10 times, for a maximum of 200 Health, 200 Mana,  and 40 Ability Power. Upon reaching max stacks, gain a level and all effects of Eternity are increased by 50%.<br><li><passive>Eternity:</passive> Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second. For every 200 Health or Mana restored this way, gain <speed>35% Decaying Move Speed</speed> for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5 Ability Haste.</attention></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6657"
            ],
            "inStore": false,
            "image": {
                "full": "7028.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 240,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2800,
                "sell": 1960
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 550,
                "FlatMPPoolMod": 550,
                "FlatMagicDamageMod": 80
            },
            "depth": 4
        },
        "7029": {
            "name": "Youmuu's Wake",
            "description": "<mainText><stats><ornnBonus>75</ornnBonus> Attack Damage<br><ornnBonus>26</ornnBonus> Lethality<br><ornnBonus>20</ornnBonus> Ability Haste</stats><br><br><active>Active -</active> <active>Wraith Step:</active> Gain Move Speed and Ghosting.<br><li><passive>Haunt:</passive> Gain up to 100 Spectral Shards while moving. Gain <speed> Move Speed</speed> out of champion combat based on the number of Spectral Shards. While at max Shards, gain <scaleAD> Lethality</scaleAD>. Shards will reset 3 seconds after dealing damage to an enemy champion.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention></attention> Attack Damage. <br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3142"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7029.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 288,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3100,
                "sell": 2170
            },
            "tags": [
                "Damage",
                "Active",
                "NonbootsMovement",
                "ArmorPenetration",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 75
            },
            "effect": {
                "Effect1Amount": "45",
                "Effect2Amount": "0",
                "Effect3Amount": "0.25",
                "Effect4Amount": "0",
                "Effect5Amount": "6",
                "Effect6Amount": "40"
            },
            "depth": 4
        },
        "7030": {
            "name": "Seething Sorrow",
            "description": "<mainText><stats><ornnBonus>40</ornnBonus> Attack Damage<br><ornnBonus>50</ornnBonus> Ability Power<br><ornnBonus>35%</ornnBonus> Attack Speed</stats><br><li><passive>Wrath:</passive> Attacks apply bonus damage <OnHit>On-Hit</OnHit>. Your Critical Strike Chance is converted into more.<li><passive>Seething Strike:</passive> Basic attacks grant bonus <attackSpeed>Attack Speed</attackSpeed>, stacking up to a cap. While fully stacked, every third Attack applies your <OnHit>On-Hit</OnHit> effects twice.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5%</attention> Armor Penetration and <attention>6%</attention> Magic Penetration.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3124"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7030.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 336,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3200,
                "sell": 2240
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "MagicPenetration",
                "ArmorPenetration"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatMagicDamageMod": 50,
                "PercentAttackSpeedMod": 0.35
            },
            "effect": {
                "Effect1Amount": "0.08",
                "Effect2Amount": "2.5",
                "Effect3Amount": "2.5",
                "Effect4Amount": "3",
                "Effect5Amount": "6",
                "Effect6Amount": "0.1",
                "Effect7Amount": "0.1",
                "Effect8Amount": "15",
                "Effect9Amount": "1",
                "Effect10Amount": "3",
                "Effect11Amount": "0",
                "Effect12Amount": "0",
                "Effect13Amount": "3"
            },
            "depth": 4
        },
        "7031": {
            "name": "Edge of Finality",
            "description": "<mainText><stats><ornnBonus>95</ornnBonus> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>45%</attention> Critical Strike Damage</stats><br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.<br><br><flavorText>One cut is all it takes.</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3031"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7031.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 384,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 95,
                "FlatCritChanceMod": 0.2
            },
            "depth": 3
        },
        "7032": {
            "name": "Flicker",
            "description": "<mainText><stats><ornnBonus>85</ornnBonus> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><ornnBonus>25</ornnBonus> Ability Haste</stats><br><li><passive>Transcendence:</passive>  Your Attacks reduce your non-Ultimate Ability cooldowns.<li><passive>Impermanence:</passive> Your abilities deal increased damage based on Critical Strike Chance.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6675"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7032.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 432,
                "y": 192,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 3400,
                "sell": 2380
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "CooldownReduction",
                "OnHit",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatPhysicalDamageMod": 85,
                "FlatCritChanceMod": 0.2
            },
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "depth": 4
        },
        "7033": {
            "name": "Cry of the Shrieking City",
            "description": "<mainText><stats><ornnBonus>60</ornnBonus> Ability Power<br><ornnBonus>300</ornnBonus> Health<br><ornnBonus>20</ornnBonus> Ability Haste<br><ornnBonus>225%</ornnBonus> Base Mana Regen</stats><br><li><passive>Soul Siphon:</passive> Damaging a champion grants a <passive>Soul Shard</passive>. Healing or Shielding an ally consumes all <passive>Soul Shards</passive> to restore Health and deals magic damage per Shard to the nearest enemy champion.<br><li><passive>Dissonance:</passive> Gain <scaleAP>Ability Power</scaleAP> per <scaleMana> Base Mana Regeneration</scaleMana>. Disables Harmony.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>Ability Haste.</attention><br></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "6620"
            ],
            "inStore": false,
            "requiredAlly": "Ornn",
            "image": {
                "full": "7033.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 0,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 2300,
                "sell": 1610
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "depth": 4
        },
        "7050": {
            "name": "Gangplank Placeholder",
            "description": "",
            "colloq": "",
            "plaintext": "New Gangplank interface coming soon!",
            "stacks": 0,
            "consumed": true,
            "consumeOnFull": true,
            "inStore": false,
            "requiredChampion": "Gangplank",
            "hideFromAll": true,
            "image": {
                "full": "7050.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 48,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 0,
                "purchasable": false,
                "total": 0,
                "sell": 0
            },
            "tags": [

            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": true
            },
            "stats": {

            }
        },
        "8001": {
            "name": "Anathema's Chains",
            "description": "<mainText><stats><attention>650</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Vow:</active> Choose a Nemesis to start building a Vendetta (90s).<br><li><passive>Vendetta:</passive> Take reduced damage from your Nemesis, increasing per Vendetta stack. You gain stacks over time, and reach the maximum number of stacks after 60 seconds.<li><passive>Vengeance:</passive> At maximum stacks, your Nemesis has reduced Tenacity while near you.<br><br><rules>Active can be cast while dead and at global range. Stacks reset upon choosing a new target. Cannot be cast for 15 seconds while in-combat with champions.</rules><br><br><flavorText>\"She swore to dedicate her life to his destruction. The gauntlets heard.\"</flavorText></mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "1011"
            ],
            "image": {
                "full": "8001.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 96,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 800,
                "purchasable": true,
                "total": 2500,
                "sell": 1750
            },
            "tags": [
                "Health",
                "Active",
                "CooldownReduction",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 650
            },
            "depth": 3
        },
        "8020": {
            "name": "Abyssal Mask",
            "description": "<mainText><stats><attention>300</attention> Health<br><attention>60</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Unmake:</passive> <status>Curse</status> nearby enemy champions, reducing their Magic Resist. For each <status>Cursed</status> enemy, gain Magic Resist.</mainText><br>",
            "colloq": "",
            "plaintext": "",
            "from": [
                "3067",
                "1057"
            ],
            "image": {
                "full": "8020.png",
                "sprite": "item4.png",
                "group": "item",
                "x": 144,
                "y": 240,
                "w": 48,
                "h": 48
            },
            "gold": {
                "base": 700,
                "purchasable": true,
                "total": 2400,
                "sell": 1680
            },
            "tags": [
                "Health",
                "SpellBlock",
                "CooldownReduction",
                "MagicPenetration",
                "MagicResist",
                "AbilityHaste"
            ],
            "maps": {
                "11": true,
                "12": true,
                "21": true,
                "22": false,
                "30": false
            },
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatSpellBlockMod": 60
            },
            "depth": 3
        }
    },
    "groups": [
        {
            "id": "HuntersTalismanGroup",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "HuntersMacheteGroup",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "AHCapstone",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "BaseJungleItems",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "BloodstoneItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "Boots",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "BootsOfSpeed",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "BootsWithoutActives",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "BuildsFromStopwatchGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "Consumable",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "ControlWardItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "Default",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "DisabledOnFIRSTBLOODMode",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "DoransItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "Elixir",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "EternityItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "GangplankRUpgrade01",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "GangplankRUpgrade02",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "GangplankRUpgrade03",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "Glory",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "GoldItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "GuardianItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "ImmolateItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "ItemGroupSwapToSummonerDot",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "ItemGroupSwapToSummonerFlash",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "ItemGroupSwapToSummonerHaste",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "ItemGroupSwapToSummonerHeal",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "ItemGroupSwapToSummonerSmite",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "ItemGroupSwapToSummonerTeleport",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "JungleEnchantments",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "JungleItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "LastWhisper",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "LegendaryClearingItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "LifelineItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "MagicalOpusItems_Cherry",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "MarksmanCapstone",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "MythicItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "NewDoransItems",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "NonItem",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "OdysseySustainItems",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "OrnnItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "OrnnItems_Cherry",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "PerksElixir",
            "MaxGroupOwnable": "0"
        },
        {
            "id": "PerksElixirAdvanced",
            "MaxGroupOwnable": "0"
        },
        {
            "id": "Potion",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "Quicksilver",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "SLIMEStarterItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "SRIChampItemDisabledGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SRIChampItemDisabledGroup1",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeEmergencyShieldGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeFlashZoneGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeLaserAffixGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeMissileBarrageGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegePortableBarracksGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeRefundGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeShieldGeneratorGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeSniperCannonGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeTeleportPadGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SiegeTimefieldGroup",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "SightstoneActiveItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "SightstoneDisableGroup",
            "MaxGroupOwnable": "0"
        },
        {
            "id": "StopwatchGroup",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "TearItems",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "TheBlackSpear",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "TotalBiscuit",
            "MaxGroupOwnable": "0"
        },
        {
            "id": "Trinket",
            "MaxGroupOwnable": "-1"
        },
        {
            "id": "222065",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223001",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223031",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223078",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223084",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223124",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223142",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223152",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "223190",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "224633",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "224636",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "224644",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226617",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226620",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226630",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226631",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226632",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226653",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226655",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226656",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226657",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226662",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226665",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226667",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226671",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226675",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226691",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "226692",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3001",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3011",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3026",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3033",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3039",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3046",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3050",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3065",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3068",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3071",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3072",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3075",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3083",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3085",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3087",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3089",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3091",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3094",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3095",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3100",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3102",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3107",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3109",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3110",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3115",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3116",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3119",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3121",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3122",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3131",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3142",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3143",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3146",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3153",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3157",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3161",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3165",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3172",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3179",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3181",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3193",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3222",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3430",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3504",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3508",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3742",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "3814",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4004",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4005",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4010",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4011",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4012",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4013",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4014",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4016",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4017",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4401",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4402",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4403",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4628",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4629",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4637",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4644",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "4645",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6333",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6609",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6616",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6664",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6672",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6673",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6675",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6676",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6693",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6695",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "6696",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "8001",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "8020",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "InfinityCoil",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "Quickblades",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "ViktorHexCore",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "VoidPen",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "WardGreen",
            "MaxGroupOwnable": "1"
        },
        {
            "id": "WardPink",
            "MaxGroupOwnable": "1"
        }
    ],
    "tree": [
        {
            "header": "START",
            "tags": [
                "LANE",
                "JUNGLE"
            ]
        },
        {
            "header": "TOOLS",
            "tags": [
                "GOLDPER",
                "CONSUMABLE",
                "VISION"
            ]
        },
        {
            "header": "DEFENSE",
            "tags": [
                "HEALTH",
                "HEALTHREGEN",
                "ARMOR",
                "SPELLBLOCK"
            ]
        },
        {
            "header": "ATTACK",
            "tags": [
                "LIFESTEAL",
                "CRITICALSTRIKE",
                "ATTACKSPEED",
                "DAMAGE"
            ]
        },
        {
            "header": "MAGIC",
            "tags": [
                "MANA",
                "SPELLDAMAGE",
                "COOLDOWNREDUCTION",
                "MANAREGEN"
            ]
        },
        {
            "header": "MOVEMENT",
            "tags": [
                "BOOTS",
                "NONBOOTSMOVEMENT"
            ]
        },
        {
            "header": "UNCATEGORIZED",
            "tags": [
                "ACTIVE",
                "MAGICPENETRATION",
                "ARMORPENETRATION",
                "AURA",
                "ONHIT",
                "TRINKET",
                "SLOW",
                "STEALTH",
                "SPELLVAMP",
                "TENACITY"
            ]
        }
    ]
};

const runesJson = [{ "id": 8369, "name": "First Strike", "majorChangePatchVersion": "11.23", "tooltip": "Attacks or abilities against an enemy champion within @GraceWindow.2@s of entering champion combat grants @GoldProcBonus@ gold and <b>First Strike</b> for @Duration@ seconds, causing you to deal <truedamage>@DamageAmp*100@%</truedamage> extra <truedamage>damage</truedamage> against champions, and granting <gold>{{ Item_Melee_Ranged_Split }}</gold> of that damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>@Cooldown@</scaleLevel>s<br><hr><br>Damage Dealt: @f1@<br>Gold Gained: @f2@", "shortDesc": "When you initiate champion combat, deal 7% extra damage for 3 seconds and gain gold based on damage dealt.", "longDesc": "Attacks or abilities against an enemy champion within 0.25s of entering champion combat grants 5 gold and <b>First Strike</b> for 3 seconds, causing you to deal <truedamage>7%</truedamage> extra <truedamage> damage</truedamage> against champions, and granting <gold>100% (70% for ranged champions)</gold> of bonus damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>25 - 15</scaleLevel>s", "recommendationDescriptor": "True Damage, Income", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png", "endOfGameStatDescs": ["Damage Dealt: @eogvar1@", "Gold Gained: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 8446, "name": "Demolish", "majorChangePatchVersion": "", "tooltip": "Charge up a powerful attack against a tower over 3s, while within 600 range of it. The charged attack deals <scaleAD>@f6@</scaleAD> bonus physical damage. <br><hr><br>Cooldown remaining: @f2@<br>Total bonus damage: <scaleAD>@f1@</scaleAD><br>Current Damage: 100 + 35% of your max health", "shortDesc": "Charge up a powerful attack against a tower while near it.", "longDesc": "Charge up a powerful attack against a tower over 3s, while within 600 range of it. The charged attack deals 100 (+35% of your max health) bonus physical damage. <br><br>Cooldown: 45s", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Demolish/Demolish.png", "endOfGameStatDescs": ["Total Bonus Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kUtility": 10 } }, { "id": 8126, "name": "Cheap Shot", "majorChangePatchVersion": "9.9", "tooltip": "Damaging champions with <b>impaired movement or actions</b> deals 10 - 45 bonus true damage (based on level).<br><br>Cooldown: 4s<br><rules>Activates on damage occurring after the impairment.</rules><br><hr><br>Current Damage: @f2@<br>Total bonus damage dealt: @f1@", "shortDesc": "Deal bonus true damage to enemy champions with <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairAct'>impaired movement or actions</lol-uikit-tooltipped-keyword>. ", "longDesc": "Damaging champions with <b>impaired movement or actions</b> deals 10 - 45 bonus true damage (based on level).<br><br>Cooldown: 4s<br><rules>Activates on damage occurring after the impairment.</rules>", "recommendationDescriptor": "Earned by winning ranked games in Season 2020 - Split 1.", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/CheapShot/CheapShot.png", "endOfGameStatDescs": ["Total damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 5, "kDamagePerSecond": 5 } }, { "id": 8321, "name": "Future's Market", "majorChangePatchVersion": "", "tooltip": "You can enter debt to buy items. The amount you can borrow increases over time. If you enter debt, you will be charged a lending fee of <attention>50</attention> gold.<br><br>Debt limit: <attention>Available at 2 minutes</attention><br>Future Purchases: <attention>@f3@</attention>", "shortDesc": "You can enter debt to buy items.", "longDesc": "You can enter debt to buy items. The amount you can borrow increases over time. If you enter debt, you will be charged a lending fee of <attention>50</attention> gold.<br>Debt limit: 100 + 8/min<br>(Debt doesn't become available until 2 minutes)", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png", "endOfGameStatDescs": ["Future Purchases: @eogvar1@"], "recommendationDescriptorAttributes": { "kGold": 15 } }, { "id": 8415, "name": "The Arcane Colossus", "majorChangePatchVersion": "", "tooltip": "<pathResolve>Resolve</pathResolve> + <pathSorcery>Sorcery</pathSorcery> <br>+0-0 Health based on level<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathResolve>Resolve</pathResolve> + <pathSorcery>Sorcery</pathSorcery> Set Bonus</pathBonus>", "longDesc": "+0-0 Health based on level<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8410, "name": "Approach Velocity", "majorChangePatchVersion": "", "tooltip": "Gain <speed>7.5% Move Speed</speed> towards nearby enemy champions that are movement impaired. This bonus is increased to <speed>15% Move Speed</speed> for any enemy champion that you impair. <br><br>Activation Range for CC from allies: 1000<br><hr><br>Time Spent Hasted: @f1@s", "shortDesc": "Bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> towards nearby enemy champions that are <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>movement impaired</lol-uikit-tooltipped-keyword>, increased for enemy champions that you impair.", "longDesc": "Gain <speed>7.5% Move Speed</speed> towards nearby enemy champions that are movement impaired. This bonus is increased to <speed>15% Move Speed</speed> for any enemy champion that you impair. <br><br>Activation Range for CC from allies: 1000", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png", "endOfGameStatDescs": ["Time Spent Hasted: @eogvar1@"], "recommendationDescriptorAttributes": { "kMoveSpeed": 10 } }, { "id": 8232, "name": "Waterwalking", "majorChangePatchVersion": "", "tooltip": "Gain <speed>10 Move Speed</speed> and an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.", "shortDesc": "Gain <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> and AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> in the river.", "longDesc": "Gain <speed>10 Move Speed</speed> and an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.<br><br><hr><br><i>May you be as swift as the rushing river and agile as a startled Rift Scuttler.</i><br>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png", "endOfGameStatDescs": ["Total time active: @eogvar1@:@eogvar2@"], "recommendationDescriptorAttributes": { "kBurstDamage": 2, "kDamagePerSecond": 2, "kMoveSpeed": 6 } }, { "id": 8299, "name": "Last Stand", "majorChangePatchVersion": "", "tooltip": "Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.<br><br><rules>Minimum bonus is 5%.<br>Maximum bonus is granted while below 30% health.</rules><br><hr><br>Total bonus damage: <scaleAD>@f1@</scaleAD>", "shortDesc": "Deal more damage to champions while you are low on health.", "longDesc": "Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/LastStand/LastStand.png", "endOfGameStatDescs": ["Total Bonus Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 1, "kDamagePerSecond": 9 } }, { "id": 8112, "name": "Electrocute", "majorChangePatchVersion": "", "tooltip": "Hitting a champion with 3 <b>separate</b> attacks or abilities within 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br>Cooldown: 25 - 20s<br><hr><br>Current damage: @f2@ (<scaleAP>+@f3@</scaleAP>) (<scaleAD>+@f4@</scaleAD>)<br>Total Damage Dealt: <scaleAD>@f1@</scaleAD>", "shortDesc": "Hitting a champion with 3 <b>separate</b> attacks or abilities in 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.", "longDesc": "Hitting a champion with 3 <b>separate</b> attacks or abilities within 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Damage: 30 - 220 (+0.1 bonus AD, +0.05 AP) damage.<br><br>Cooldown: 25 - 20s<br><br><hr><i>'We called them the Thunderlords, for to speak of their lightning was to invite disaster.'</i>", "recommendationDescriptor": "Combo Damage", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/Electrocute/Electrocute.png", "endOfGameStatDescs": ["Total Damage Dealt: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8234, "name": "Celerity", "majorChangePatchVersion": "9.9", "tooltip": "All movement bonuses are 7% more effective on you and gain <speed>1% Move Speed</speed>.<br><br>Currently Granted: <speed>@f1@ Move Speed</speed><br>Extra Distance Traveled: @f2@", "shortDesc": "All <speed>Move Speed</speed> bonuses are 7% more effective on you and gain <speed>1% Move Speed</speed>.", "longDesc": "All movement bonuses are 7% more effective on you and gain <speed>1% Move Speed</speed>.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png", "endOfGameStatDescs": ["Extra Distance Travelled: @eogvar1@"], "recommendationDescriptorAttributes": { "kMoveSpeed": 10 } }, { "id": 8453, "name": "Revitalize", "majorChangePatchVersion": "", "tooltip": "Gain 5% Heal and Shield Power.<br><br>Heals and shields you cast or receive are 10% stronger on targets below 40% health.<br><hr><br><scaleAD>Bonus healing</scaleAD>: @f1@<br><scaleAD>Bonus shielding</scaleAD>: @f2@<br><scaleAD>Total Heal and Shield power</scaleAD>: @f4@%", "shortDesc": "Gain 5% Heal and Shield Power.<br><br>Heals and shields you cast or receive are 10% stronger on targets below 40% health.", "longDesc": "Gain 5% Heal and Shield Power.<br><br>Heals and shields you cast or receive are 10% stronger on targets below 40% health.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Revitalize/Revitalize.png", "endOfGameStatDescs": ["Bonus Healing: @eogvar1@", "Bonus Shielding: @eogvar2@"], "recommendationDescriptorAttributes": { "kHealing": 10 } }, { "id": 8360, "name": "Unsealed Spellbook", "majorChangePatchVersion": "8.9", "tooltip": "Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 25s (initial swap cooldown is at 5 mins). <br><br>Your first swap becomes available at 6 mins. <br><rules><br>Summoner Spells can only be swapped while out of combat. <br>After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again.<br>Smite damage increases after two Summoner Spell swaps. </rules><hr><br>Unique Summoner Spells Used: @f4@/@f8@<br>Current Swap Cooldown: @f3@ seconds", "shortDesc": "Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.", "longDesc": "Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 25s (initial swap cooldown is at 5 mins). <br><br>Your first swap becomes available at 6 mins. <br><rules><br>Summoner Spells can only be swapped while out of combat. <br>After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again.<br>Smite damage increases after two Summoner Spell swaps. </rules>", "recommendationDescriptor": "Cast more Summoners", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png", "endOfGameStatDescs": ["Summoner Spells swapped: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8004, "name": "The Brazen Perfect", "majorChangePatchVersion": "", "tooltip": "<pathPrecision>Precision</pathPrecision> + <pathSorcery>Sorcery</pathSorcery><br>+0% Attack Speed<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathPrecision>Precision</pathPrecision> + <pathSorcery>Sorcery</pathSorcery> Set Bonus</pathBonus>", "longDesc": "+0% Attack Speed<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8128, "name": "Dark Harvest", "majorChangePatchVersion": "8.23", "tooltip": "Damaging a champion below 50% health deals <scaleAD>@f8@ physical damage</scaleAD> and harvests their soul, permanently increasing Dark Harvest's damage by <font color='#fc314e'>@f12@</font>.<br><br>Cooldown: 45s (resets to 1.5s on takedown)<br><hr><br>Souls harvested: <font color='#fc314e'>@f5@</font><br>Current damage: <scaleLevel>@f7@</scaleLevel> <font color='#fc314e'>(+@f6@)</font> <scaleAD>(+@f10@)</scaleAD> <scaleAP>(+@f11@)</scaleAP> <br>Total damage dealt: @f9@", "shortDesc": "Damaging a low health champion inflicts <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword> and harvests a soul from the victim.", "longDesc": "Damaging a Champion below 50% health deals <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword> and harvests their soul, permanently increasing Dark Harvest's damage by 5.<br><br>Dark Harvest damage: 20-80 (based on level) (+5 damage per soul) (+0.1 bonus AD) (+0.05 AP)<br>Cooldown: 45s (resets to 1.5s on takedown)", "recommendationDescriptor": "Execute Enemies", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png", "endOfGameStatDescs": ["Total Damage Dealt: @eogvar1@", "Total Souls Harvested: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 8220, "name": "The Calamity", "majorChangePatchVersion": "", "tooltip": "<pathSorcery>Sorcery</pathSorcery> + <pathDomination>Domination</pathDomination><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathSorcery>Sorcery</pathSorcery> + <pathDomination>Domination</pathDomination> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8016, "name": "The Merciless Elite", "majorChangePatchVersion": "", "tooltip": "<pathPrecision>Precision</pathPrecision> + <pathDomination>Domination</pathDomination><br>+0% Attack Speed<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathPrecision>Precision</pathPrecision> + <pathDomination>Domination</pathDomination> Set Bonus</pathBonus>", "longDesc": "+0% Attack Speed<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8473, "name": "Bone Plating", "majorChangePatchVersion": "9.9", "tooltip": "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal <scaleLevel>@f2@</scaleLevel> less damage.<br><br>Duration: 1.5s<br>Cooldown: 55s<br><hr><br>Total Damage Reduced: <scaleLevel>@f1@</scaleLevel>", "shortDesc": "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 less damage.<br><br><br>Duration: 1.5s<br>Cooldown: 55s", "longDesc": "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 less damage.<br><br><br>Duration: 1.5s<br>Cooldown: 55s", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/BonePlating/BonePlating.png", "endOfGameStatDescs": ["Total Damage Blocked: @eogvar1@"], "recommendationDescriptorAttributes": { "kDurability": 10 } }, { "id": 8339, "name": "Celestial Body", "majorChangePatchVersion": "", "tooltip": "+100 Health permanently<br>-10% damage to champions and monsters until 10 min", "shortDesc": "+100 Health permanently<br>-10% damage to champions and monsters until 10 min", "longDesc": "+100 Health permanently<br>-10% damage to champions and monsters until 10 min<br><br><hr><br><i>'The greatest legends live on in the stars.' <br>—Daphna the Dreamer</i>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/CelestialBody/CelestialBody.png", "endOfGameStatDescs": ["--"], "recommendationDescriptorAttributes": {} }, { "id": 8214, "name": "Summon Aery", "majorChangePatchVersion": "", "tooltip": "Damaging enemy champions with basic attacks or abilities sends Aery to them, dealing <font color='#FFFFFF'>@f5@</font> (+<scaleAP>@f6@</scaleAP>) (+<scaleAD>@f7@</scaleAD>).<br><br>Empower or protecting allies with abilities sends Aery to them, shielding them for <font color='#FFFFFF'>@f8@</font> (+<scaleAP>@f9@</scaleAP>) (+<scaleAD>@f10@</scaleAD>).<br><br>Aery cannot be sent out again until she returns to you.<br><br><hr><br>Aery has attacked enemies <font color='#FFFFFF'>@f1@</font> times for a total of <font color='#FFFFFF'>@f3@</font> damage.<br>Aery has helped allies <font color='#FFFFFF'>@f2@</font> times, shielding a total of <font color='#FFFFFF'>@f4@</font> damage.", "shortDesc": "Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.", "longDesc": "Damaging enemy champions with basic attacks or abilities sends Aery to them, dealing 10 - 50 based on level (+<scaleAP>0.05 AP</scaleAP>) (+<scaleAD>0.1 bonus AD</scaleAD>).<br><br>Empower or protecting allies with abilities sends Aery to them, shielding them for 30 - 100 based on level (+<scaleAP>0.05 AP</scaleAP>) (+<scaleAD>0.1 bonus AD</scaleAD>).<br><br>Aery cannot be sent out again until she returns to you.", "recommendationDescriptor": "Poke Damage", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/SummonAery/SummonAery.png", "endOfGameStatDescs": ["Damage Dealt: @eogvar1@", "Damage Shielded: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 8237, "name": "Scorch", "majorChangePatchVersion": "9.9", "tooltip": "Your next damaging ability hit sets champions on fire dealing 20 - 40 bonus magic damage based on level after 1s.<br><br>Cooldown: 10s<br><hr><br>Current Damage: @f2@<br>Total Damage Dealt: @f1@", "shortDesc": "Your first damaging ability hit every 10s burns champions.", "longDesc": "Your next damaging ability hit sets champions on fire dealing 20 - 40 bonus magic damage based on level after 1s.<br><br>Cooldown: 10s", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Scorch/Scorch.png", "endOfGameStatDescs": ["Total Bonus Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 7, "kDamagePerSecond": 3 } }, { "id": 8139, "name": "Taste of Blood", "majorChangePatchVersion": "", "tooltip": "Heal when you damage an enemy champion.<br><br>Healing: <font color='#ffffff'>@f2@</font> (+<scaleAD>@f3@</scaleAD>) (+<scaleAP>@f4@</scaleAP>)<br><br>Cooldown: 20s<br><hr><br>Total Healing: @f1@", "shortDesc": "Heal when you damage an enemy champion.", "longDesc": "Heal when you damage an enemy champion.<br><br>Healing: 16-40 (+0.1 bonus AD, +0.05 AP) health (based on level)<br><br>Cooldown: 20s", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png", "endOfGameStatDescs": ["Total Healing: @eogvar1@"], "recommendationDescriptorAttributes": { "kHealing": 10 } }, { "id": 8008, "name": "Lethal Tempo", "majorChangePatchVersion": "", "tooltip": "Gain %i:scaleAS% (%i:meleeActive% @ASMelee@ || %i:rangedActive% @ASRanged@) Attack Speed for 6 seconds when you attack an enemy champion. This effect stacks up to 6 times.<br><br>While this effect is fully stacked, your Attack Speed can exceed 2.5 and you also gain 50 Attack Range.<br><hr><br>Capstone Uptime: @f1@s", "shortDesc": "Gain Attack Speed when attacking an enemy champion, stacking up to 6 times. At max stacks, gain Attack Range and remove your Attack Speed limit.", "longDesc": "Gain [54% - 81%] (Melee) or [21% - 48%] (Ranged) Attack Speed for 6 seconds when you attack an enemy champion. This effect stacks up to 6 times.<br><br>While this effect fully stacked, your Attack Speed can exceed 2.5 and you gain 50 Attack Range.", "recommendationDescriptor": "Ramping Attack Speed", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png", "endOfGameStatDescs": ["Max Attack Speed Uptime: @eogvar1@:@eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 9105, "name": "Legend: Tenacity", "majorChangePatchVersion": "", "tooltip": "Gain 5% tenacity plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.<br><hr><br>Total tenacity granted: <scaleAD>@f1*100@%</scaleAD> (<statGood>@f3@ of 10</statGood>)<br>Progress Towards Next Stack: @f2@%", "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Tenacity</b>. ", "longDesc": "Gain 5% tenacity plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png", "endOfGameStatDescs": ["Time Completed: @eogvar1@:@eogvar2@"], "recommendationDescriptorAttributes": { "kDurability": 4, "kUtility": 6 } }, { "id": 8010, "name": "Conqueror", "majorChangePatchVersion": "9.4", "tooltip": "Basic attacks or spells that deal damage to an enemy champion grant 2 stacks of Conqueror for 5s, gaining <scaleLevel>@f5.1@</scaleLevel> <scaleAD>Attack Damage</scaleAD> per stack. Stacks up to 12 times. Ranged champions gain only 1 stack per basic attack.<br><br>When fully stacked, heal for 8% of the damage you deal to champions (5% for ranged champions).<br><br>Total Healing: @f1@", "shortDesc": "Gain stacks of adaptive force when attacking enemy champions. After reaching 12 stacks, heal for a portion of damage you deal to champions.", "longDesc": "Basic attacks or spells that deal damage to an enemy champion grant 2 stacks of Conqueror for 5s, gaining 1.8-4 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive Force</font></lol-uikit-tooltipped-keyword> per stack. Stacks up to 12 times. Ranged champions gain only 1 stack per basic attack.<br><br>When fully stacked, heal for 8% of the damage you deal to champions (5% for ranged champions).", "recommendationDescriptor": "Bonus Damage, Sustain", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/Conqueror/Conqueror.png", "endOfGameStatDescs": ["Total healing: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8106, "name": "Ultimate Hunter", "majorChangePatchVersion": "9.9", "tooltip": "Your ultimate gains <attention>6</attention> Ability Haste, plus an additional <attention>5</attention> Ability Haste per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><hr><br><u>No Claimable Bounties</u>", "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent cooldown reduction on your Ultimate. ", "longDesc": "Your ultimate gains <attention>6</attention> Ability Haste, plus an additional <attention>5</attention> Ability Haste per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png", "endOfGameStatDescs": ["Total Stacks: @eogvar1@"], "recommendationDescriptorAttributes": { "kCooldown": 10 } }, { "id": 8017, "name": "Cut Down", "majorChangePatchVersion": "", "tooltip": "Deal 5% to 15% more damage to champions, based on how much more max health they have than you.<br><br><rules>Bonus damage scales up linearly against enemies with 10% to 100% more max health than you.</rules><br><hr><br>Total bonus damage: <scaleAD>@f1@</scaleAD>", "shortDesc": "Deal more damage to champions with more max health than you.", "longDesc": "Deal 5% to 15% more damage to champions, based on how much more max health they have than you.<br><br><rules>Bonus damage scales up linearly against enemies with 10% to 100% more max health than you.</rules>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/CutDown/CutDown.png", "endOfGameStatDescs": ["Total Bonus Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 1, "kDamagePerSecond": 9 } }, { "id": 8224, "name": "Nullifying Orb", "majorChangePatchVersion": "", "tooltip": "When you take magic damage that would reduce your Health below 30%, gain a shield that absorbs @NullifyingShieldSize@ magic damage for 4s.<br><br>Cooldown: 60s<br><hr><br>Total Magic Damage Blocked: @f1@", "shortDesc": "Gain a magic damage shield when taken to low health by magic damage.", "longDesc": "When you take magic damage that would reduce your health below 30%, first gain a shield that absorbs 35 to 110 (+14% bonus attack damage) + (9% ability power) magic damage based on level for 4s.<br><br>Cooldown: 60s", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png", "endOfGameStatDescs": ["Total shield granted: @eogvar1@"], "recommendationDescriptorAttributes": { "kDurability": 10 } }, { "id": 8210, "name": "Transcendence", "majorChangePatchVersion": "", "tooltip": "Gain bonuses upon reaching the following levels:<br>Level 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.<br><br><hr><br>Bonus Ability Haste: +@f4*100@<br>Seconds Refunded: @f3@", "shortDesc": "Gain bonuses upon reaching the following levels:<br>Level 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.", "longDesc": "Gain bonuses upon reaching the following levels:<br>Level 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.<br>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Transcendence/Transcendence.png", "endOfGameStatDescs": ["Seconds refunded: @eogvar1@"], "recommendationDescriptorAttributes": { "kCooldown": 10 } }, { "id": 8005, "name": "Press the Attack", "majorChangePatchVersion": "", "tooltip": "Hitting an enemy champion with 3 consecutive basic attacks deals <scaleLevel>@f4@</scaleLevel> bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword> (based on level) and makes them vulnerable, increasing the damage they take by <scaleLevel>@f7@%</scaleLevel> from all sources for 6s.<br><hr><br>Bonus Damage Dealt: <scaleAD>@f2@</scaleAD><br>Total Exposure Damage: <scaleAD>@f3@</scaleAD>", "shortDesc": "Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for 6s.", "longDesc": "Hitting an enemy champion with 3 consecutive basic attacks deals 40 - 180 bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword> (based on level) and makes them vulnerable, increasing the damage they take by 8% from all sources for 6s.", "recommendationDescriptor": "Single Target Damage", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png", "endOfGameStatDescs": ["Total Damage: @eogvar1@", "Bonus Damage: @eogvar2@", "Expose Damage: @eogvar3@"], "recommendationDescriptorAttributes": {} }, { "id": 8435, "name": "Mirror Shell", "majorChangePatchVersion": "", "tooltip": "Gain +6 Magic Resist. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Magic Resist by 5% for 3s.", "shortDesc": "Gain +6 Magic Resist. <br>Heals, including consumables, increase your Magic Resist by 5% temporarily.<br>", "longDesc": "Gain +6 Magic Resist. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Magic Resist by 5% for 3s.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png", "endOfGameStatDescs": ["Bonus Magic Resist: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8115, "name": "The Aether Blade", "majorChangePatchVersion": "", "tooltip": "<pathDomination>Domination</pathDomination> + <pathSorcery>Sorcery</pathSorcery><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathDomination>Domination</pathDomination> + <pathSorcery>Sorcery</pathSorcery> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8359, "name": "Kleptomancy", "majorChangePatchVersion": "8.23", "tooltip": "After using an ability, each of your next 2 attacks can grant 5 gold... or something nicer.<br><br>Only attacks against champions grant you a reward.<br><hr><br>Gold Gained: @f1@<br>Items Looted: @f3@", "shortDesc": "Loot gold and items from enemy champions by casting spells and auto attacking them.", "longDesc": "After using an ability, each of your next 2 attacks can grant 5 gold... or something nicer.<br><br>Only attacks against champions grant you a reward.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/Kleptomancy/Kleptomancy.png", "endOfGameStatDescs": ["Gold Granted: @eogvar1@", "Items Looted: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 8352, "name": "Time Warp Tonic", "majorChangePatchVersion": "8.22", "tooltip": "Consuming a potion or biscuit grants 30% of its health or mana restoration immediately. In addition, gain <speed>2% Move Speed</speed> while under their effects.<br><br><br><hr><br>Time Spent hasted: @f1@s<br>Total health instantly restored: @f2@<br>Total mana instantly restored: @f3@", "shortDesc": "Potions and biscuits grant some restoration immediately. Gain <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>  while under their effects.", "longDesc": "Consuming a potion or biscuit grants 30% of its health or mana restoration immediately. In addition, gain <speed>2% Move Speed</speed> while under their effects.<br><br>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png", "endOfGameStatDescs": ["Time Spent Hasted: @eogvar1@", "Total Immediate Health Restored: @eogvar2@", "Total Immediate Mana Restored: @eogvar3@"], "recommendationDescriptorAttributes": { "kHealing": 5, "kMoveSpeed": 5 } }, { "id": 5003, "name": "Magic Resist", "majorChangePatchVersion": "", "tooltip": "+8 Magic Resist", "shortDesc": "+8 Magic Resist", "longDesc": "+8 Magic Resist", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/StatMods/StatModsMagicResIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8135, "name": "Treasure Hunter", "majorChangePatchVersion": "", "tooltip": "Gain an additional <gold>50 gold</gold> the next time you collect a <i>Bounty Hunter</i> stack. Increase the gold gained by <gold>20 gold</gold> for each <i>Bounty Hunter</i> stack, up to <gold>130 gold</gold>.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br>Current Bounty Available: <gold>@f15@ gold</gold><br>Bonus Gold Collected: <gold>@f3@ gold</gold><br><hr><br><u>No Claimable Bounties</u>", "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant additional gold the first time they are collected. ", "longDesc": "Gain an additional <gold>50 gold</gold> the next time you collect a <i>Bounty Hunter</i> stack. Increase the gold gained by <gold>20 gold</gold> for each <i>Bounty Hunter</i> stack, up to <gold>130 gold</gold>.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png", "endOfGameStatDescs": ["Gold Collected: @eogvar1@", "Total Stacks: @eogvar2@"], "recommendationDescriptorAttributes": { "kGold": 15 } }, { "id": 8120, "name": "Ghost Poro", "majorChangePatchVersion": "9.9", "tooltip": "When your wards expire, they leave behind a Ghost Poro, which grants vision for 90s. Nearby enemy champions scare the Ghost Poro away.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Ghost Poro spawned and when your Ghost Poro spots an enemy champion up to 10 stacks. <br><br>After gaining 10 stacks, additionally gain 10 adaptive force.<br><hr><br>Stats Gained: <scaleAD>+@f2@ Attack Damage</scaleAD><br>Poros Spawned: @f3@<br>Enemies Spotted: @f5@", "shortDesc": "When your wards expire, they leave behind a Ghost Poro. The Ghost Poro grants vision until discovered. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each Ghost Poro and when your Ghost Poro spots an enemy champion, plus bonus upon completion.", "longDesc": "When your wards expire, they leave behind a Ghost Poro, which grants vision for 90s. Nearby enemy champions scare the Ghost Poro away.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Ghost Poro spawned and when your Ghost Poro spots an enemy champion up to 10 stacks. <br><br>After gaining 10 stacks, additionally gain 10 adaptive force.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/GhostPoro/GhostPoro.png", "endOfGameStatDescs": ["Ghost Poros Spawned: @eogvar3@", "Enemies Spotted: @eogvar1@"], "recommendationDescriptorAttributes": { "kUtility": 10 } }, { "id": 8134, "name": "Ingenious Hunter", "majorChangePatchVersion": "", "tooltip": "Gain <attention>20</attention> <b>Item Haste</b> plus an additional <attention>6</attention> <b>Item Haste</b> per <i>Bounty Hunter</i> stack (includes Trinkets).<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br><rules>Item Haste affects all items with cooldowns. </rules><br><br>Total item activations (including Trinkets): @f3@<br><hr><br><u>No Claimable Bounties</u>", "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent Item <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Haste</lol-uikit-tooltipped-keyword> (includes Trinkets).", "longDesc": "Gain <attention>20</attention> <b>Item Haste</b> plus an additional <attention>6</attention> <b>Item Haste</b> per <i>Bounty Hunter</i> stack (includes Trinkets).<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br><rules>Item Haste affects all items with cooldowns. </rules>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png", "endOfGameStatDescs": ["Total Stacks: @eogvar2@", "Total Item Activations (Including Trinkets): @eogvar1@"], "recommendationDescriptorAttributes": { "kCooldown": 8, "kUtility": 2 } }, { "id": 8351, "name": "Glacial Augment", "majorChangePatchVersion": "", "tooltip": "Immobilizing an enemy champion will cause 3 glacial rays to emanate from them towards you and other nearby champions, creating frozen zones for 3 (+ 100% of the immobilizing effect's duration) seconds that slow enemies and reduce their damage by 15% against your allies (not including yourself). <br><br>Cooldown: 25s<br>Slow Amount: @f3@% = 20% <healing>+@f4@% (%i:scaleHealShield%)</healing> <scaleAP>+@f5@% (%i:scaleAP%)</scaleAP> <scaleAD>+@f6@% (%i:scaleAD%)</scaleAD> <br>Duration Enemy Champs Slowed: @f1@s<br>Damage Reduced: @f2@", "shortDesc": "Immobilizing an enemy champion will cause 3 glacial rays that slow nearby enemies and reduce their damage to your allies.", "longDesc": "Immobilizing an enemy champion will cause 3 glacial rays to emanate from them towards you and other nearby champions, creating frozen zones for 3 (+ 100% of the immobilizing effect's duration) seconds that slow enemies for 20% (+9% per 10% Heal and Shield Power) (+6% per 100 Ability Power) (+7% per 100 bonus Attack Damage) and reduce their damage by 15% against your allies (not including yourself). <br><br>Cooldown: 25s", "recommendationDescriptor": "Slow Enemies", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png", "endOfGameStatDescs": ["Duration Enemy Champs Slowed: @eogvar1@s", "Damage Reduced: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 8242, "name": "Unflinching", "majorChangePatchVersion": "", "tooltip": "Gain 5% Tenacity and 5% Slow Resist. These values increase by up to an additional 20% Tenacity and 20% Slow Resist based on missing health. Maximum value achieved at 30% health. <br>Current Bonus Tenacity: @f1@%<br>Current Bonus Slow Resist: @f2@%<br><br>Total combat time with increased resistances: @f6@ seconds.", "shortDesc": "Gain a small amount of tenacity that increases with missing health. ", "longDesc": "Gain 5% Tenacity and 5% Slow Resist. These values increase by up to an additional 20% Tenacity and 20% Slow Resist based on missing health. Maximum value achieved at 30% health. ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Unflinching/Unflinching.png", "endOfGameStatDescs": ["Seconds in combat at max tenacity granted: @eogvar1@"], "recommendationDescriptorAttributes": { "kDurability": 4, "kUtility": 6 } }, { "id": 8401, "name": "Shield Bash", "majorChangePatchVersion": "8.23", "tooltip": "While shielded, gain <scaleLevel>@f6@</scaleLevel> bonus Armor and Magic Resist.<br><br>Whenever you gain a new shield, your next basic attack against a champion deals <scaleLevel>@f4@</scaleLevel> <scaleHealth>(+@f2@)</scaleHealth> <scaleMana>(+8.5% New Shield Amount)</scaleMana> bonus magic damage.<br><br>You have up to 2s after the shield expires to use this effect.<br><hr><br>Total Damage Dealt: @f1@", "shortDesc": "Whenever you gain a shield, your next basic attack against a champion deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> damage.", "longDesc": "While shielded, gain <scaleLevel>1 - 10</scaleLevel> Armor and Magic Resist based on Level.<br><br>Whenever you gain a new shield,  your next basic attack against a champion deals <scaleLevel>5 - 30</scaleLevel> <scaleHealth>(+1.5% Bonus Health)</scaleHealth> <scaleMana>(+8.5% New Shield Amount)</scaleMana> bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> damage.<br><br>You have up to 2s after the shield expires to use this effect.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png", "endOfGameStatDescs": ["Total Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 5, "kDurability": 5 } }, { "id": 9111, "name": "Triumph", "majorChangePatchVersion": "", "tooltip": "Takedowns restore 5% of your missing health, 2.5% of your max health, and grant an additional 20 gold. <br><hr><br>Total health restored: <scaleAD>@f1@</scaleAD><br>Total bonus gold granted: <scaleAD>@f2@</scaleAD>", "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> restore 5% of your missing health and grant an additional 20 gold. ", "longDesc": "Takedowns restore 5% of your missing health, 2.5% of your max health, and grant an additional 20 gold. <br><br><hr><br><i>'The most dangerous game brings the greatest glory.' <br>—Noxian Reckoner</i>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/Triumph.png", "endOfGameStatDescs": ["Total Health Restored: @eogvar1@", "Total bonus gold granted: @eogvar2@"], "recommendationDescriptorAttributes": { "kDurability": 2, "kHealing": 8 } }, { "id": 8105, "name": "Relentless Hunter", "majorChangePatchVersion": "9.9", "tooltip": "Gain <speed>5 Move Speed</speed> out of combat plus <speed>8</speed> per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br>Current Relentless Hunter increase: <speed>@f3.2@% Move Speed</speed><br><hr><br><u>No Claimable Bounties</u>", "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent <b>out of combat <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword></b>. ", "longDesc": "Gain <speed>5 Move Speed</speed> out of combat plus <speed>8</speed> per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png", "endOfGameStatDescs": ["Total Stacks: @eogvar2@", "<speed>@eogvar1@% Move Speed</speed> increase"], "recommendationDescriptorAttributes": { "kMoveSpeed": 10 } }, { "id": 8454, "name": "The Leviathan", "majorChangePatchVersion": "", "tooltip": "<pathResolve>Resolve</pathResolve> + <pathDomination>Domination</pathDomination> <br>+0-0 Health based on level<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathResolve>Resolve</pathResolve> + <pathDomination>Domination</pathDomination> Set Bonus</pathBonus>", "longDesc": "+0-0 Health based on level<br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8275, "name": "Nimbus Cloak", "majorChangePatchVersion": "8.11", "tooltip": "After casting a Summoner Spell, gain a <speed>Move Speed</speed> increase that lasts for 2s and allows you to pass through units.<br><hr><br>Increase: <speed>5% - 25% Move Speed</speed> based on the Summoner Spell's cooldown. (Higher cooldown Summoner Spells grant more <speed>Move Speed</speed>). <br><hr><br>Times activated: @f1@", "shortDesc": "After casting a Summoner Spell, gain a short <speed>Move Speed</speed> increase that allows you to pass through units.", "longDesc": "After casting a Summoner Spell, gain a <speed>Move Speed</speed> increase that lasts for 2s and allows you to pass through units.<br><br>Increase: <speed>5% - 25% Move Speed</speed> based on the Summoner Spell's cooldown. (Higher cooldown Summoner Spells grant more <speed>Move Speed</speed>). ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/NimbusCloak/6361.png", "endOfGameStatDescs": ["Times activated: @eogvar1@"], "recommendationDescriptorAttributes": { "kMoveSpeed": 10 } }, { "id": 8207, "name": "The Cryptic", "majorChangePatchVersion": "", "tooltip": "<pathSorcery>Sorcery</pathSorcery> + <pathInspiration>Inspiration</pathInspiration><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathSorcery>Sorcery</pathSorcery> + <pathInspiration>Inspiration</pathInspiration> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8439, "name": "Aftershock", "majorChangePatchVersion": "9.9", "tooltip": "After immobilizing an enemy champion, increase your Armor and Magic Resist for 2.5s. Then explode, dealing magic damage to nearby enemies.<br><br>Damage: <scaleLevel>@f4@</scaleLevel> <scaleHealth>(+@f5@)</scaleHealth> <br>Armor buff: @f8@<scaleArmor> (+@f2@)</scaleArmor><br>Magic Resist buff: @f8@<scaleMR> (+@f3@)</scaleMR><br>Cooldown: 20s<br><hr><br>Total damage dealt: <scaleAD>@f1@</scaleAD><br>Total damage mitigated: <scaleHealth>@f9@</scaleHealth>", "shortDesc": "After <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Immobilize'>immobilizing</lol-uikit-tooltipped-keyword> an enemy champion gain defenses and later deal a burst of magic damage around you.", "longDesc": "After immobilizing an enemy champion, increase your Armor and Magic Resist by 35 + 80% of your Bonus Resists for 2.5s. Then explode, dealing magic damage to nearby enemies.<br><br>Damage: 25 - 120 (+8% of your bonus health)<br>Cooldown: 20s<br><br>Resistance bonus from Aftershock capped at: 80-150 (based on level)<br>", "recommendationDescriptor": "Burst Defenses", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png", "endOfGameStatDescs": ["Total Damage Dealt: @eogvar1@", "Total Damage Mitigated: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 8109, "name": "The Wicked Maestro ", "majorChangePatchVersion": "", "tooltip": "<pathDomination>Domination</pathDomination> + <pathInspiration>Inspiration</pathInspiration><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathDomination>Domination</pathDomination> + <pathInspiration>Inspiration</pathInspiration> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 5002, "name": "Armor", "majorChangePatchVersion": "", "tooltip": "+6 Armor", "shortDesc": "+6 Armor", "longDesc": "+6 Armor", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/StatMods/StatModsArmorIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8414, "name": "The Behemoth", "majorChangePatchVersion": "", "tooltip": "<pathResolve>Resolve</pathResolve> + <pathPrecision>Precision</pathPrecision> <br>+0-0 Health based on level<br>+0% Attack Speed", "shortDesc": "<pathBonus><pathResolve>Resolve</pathResolve> + <pathPrecision>Precision</pathPrecision> Set Bonus</pathBonus>", "longDesc": "+0-0 Health based on level<br>+0% Attack Speed", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 5008, "name": "Adaptive Force", "majorChangePatchVersion": "", "tooltip": "<scaleAD>+@f2@ Attack Damage</scaleAD>", "shortDesc": "+9 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive Force</font></lol-uikit-tooltipped-keyword>", "longDesc": "+9 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive Force</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/StatMods/StatModsAdaptiveForceIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8320, "name": "The Timeless", "majorChangePatchVersion": "", "tooltip": "<pathInspiration>Inspiration</pathInspiration> + <pathResolve>Resolve</pathResolve><br>+0-0 Health based on level", "shortDesc": "<pathBonus><pathInspiration>Inspiration</pathInspiration> + <pathResolve>Resolve</pathResolve> Set Bonus</pathBonus>", "longDesc": "+0-0 Health based on level", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8319, "name": "The Stargazer", "majorChangePatchVersion": "", "tooltip": "<pathInspiration>Inspiration</pathInspiration> + <pathSorcery>Sorcery</pathSorcery><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathInspiration>Inspiration</pathInspiration> + <pathSorcery>Sorcery</pathSorcery> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 5001, "name": "Health Scaling", "majorChangePatchVersion": "", "tooltip": "+@f1@ Health (based on level)", "shortDesc": "+15-140 Health (based on level)", "longDesc": "+15-140 Health (based on level)", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/StatMods/StatModsHealthScalingIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8430, "name": "Iron Skin", "majorChangePatchVersion": "", "tooltip": "Gain +5 Armor. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Armor by 5% for 3s.", "shortDesc": "Gain +5 Armor. <br>Heals, including consumables, increase your Armor by 5% temporarily.", "longDesc": "Gain +5 Armor. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Armor by 5% for 3s.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/IronSkin/IronSkin.png", "endOfGameStatDescs": ["Percent of game active: @eogvar1@%"], "recommendationDescriptorAttributes": {} }, { "id": 8014, "name": "Coup de Grace", "majorChangePatchVersion": "", "tooltip": "Deal 8% more damage to champions who have less than 40% health.<br><hr><br>Total bonus damage dealt: <scaleAD>@f1@</scaleAD>", "shortDesc": "Deal more damage to low health enemy champions.", "longDesc": "Deal 8% more damage to champions who have less than 40% health.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png", "endOfGameStatDescs": ["Total Bonus Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 8, "kDamagePerSecond": 2 } }, { "id": 5007, "name": "Ability Haste", "majorChangePatchVersion": "", "tooltip": "+@f1@ Ability Haste", "shortDesc": "+8 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> ", "longDesc": "+8 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/StatMods/StatModsCDRScalingIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8021, "name": "Fleet Footwork", "majorChangePatchVersion": "", "tooltip": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized.<br><br>Energized attacks heal you for <font color='#ffffff'>@f2@</font> <scaleAD>(+@f3@)</scaleAD> <scaleAP>(+@f4@)</scaleAP> and grant <speed>@f5*100@% Move Speed</speed> for 1 second.<br><rules><br>Healing from minions is 10% effective for Ranged Champions, and 20% effective for Melee Champions.<br></rules><hr><br>Total Healing: @f1@", "shortDesc": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>.", "longDesc": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized<br><br>Energized attacks heal you for 10 - 130 (+0.1 Bonus AD, +0.05 AP) and grant <speed>20% Move Speed</speed> for 1s.<br><br>Healing from minions is 10% effective for Ranged Champions, and 20% effective for Melee Champions.", "recommendationDescriptor": "Movement, Health Recovery", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png", "endOfGameStatDescs": ["Total Healing: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8226, "name": "Manaflow Band", "majorChangePatchVersion": "8.7", "tooltip": "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.<br><br>Cooldown: 15 seconds<br><hr><br>Total bonus mana: @f1@<br>Total mana restored: @f2@", "shortDesc": "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.", "longDesc": "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.<br><br>Cooldown: 15 seconds", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png", "endOfGameStatDescs": ["Total bonus mana: @eogvar1@", "Total mana restored: @eogvar2@"], "recommendationDescriptorAttributes": { "kMana": 15 } }, { "id": 8451, "name": "Overgrowth", "majorChangePatchVersion": "8.23", "tooltip": "Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.<br><br>When you've absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health.<br><hr><br>Total Max Health Earned: <scaleHealth>@f1@</scaleHealth><br>Enemies Absorbed: <passiveText>@f2@</passiveText>", "shortDesc": "Gain permanent max health when minions or monsters die near you.", "longDesc": "Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.<br><br>When you've absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png", "endOfGameStatDescs": ["Total Bonus Max Health: @eogvar1@"], "recommendationDescriptorAttributes": { "kDurability": 10 } }, { "id": 8313, "name": "Triple Tonic", "majorChangePatchVersion": "", "tooltip": "Upon reaching level 3, gain an Elixir of Avarice.<br>Upon reaching level 6, gain an Elixir of Force.<br>Upon reaching level 9, gain an Elixir of Skill. <br><br>Items Gained: @f1@", "shortDesc": "Upon reaching level 3, gain an Elixir of Avarice.<br>Upon reaching level 6, gain an Elixir of Force.<br>Upon reaching level 9, gain an Elixir of Skill. ", "longDesc": "Upon reaching level 3, gain an Elixir of Avarice.<br>Upon reaching level 6, gain an Elixir of Force.<br>Upon reaching level 9, gain an Elixir of Skill. ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/PerfectTiming/AlchemistCabinet.png", "endOfGameStatDescs": ["Items Gained: @eogvar1@"], "recommendationDescriptorAttributes": { "kUtility": 10 } }, { "id": 9103, "name": "Legend: Bloodline", "majorChangePatchVersion": "", "tooltip": "Gain <scaleAD>0.35% Life Steal</scaleAD> for every <i>Legend</i> stack (<statGood>max 15 stacks</statGood>). At maximum <i>Legend</i> stacks, gain <scaleHealth>85 max health</scaleHealth>.<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.<br><hr><br>Total Life Steal Granted: <scaleAD>@f1*100@%</scaleAD> (<statGood>@f3@ of 15</statGood>)<br>Progress Towards Next Stack: @f2@%<br>", "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent<b> Life Steal</b>, up to a cap. Once the cap is reached, increase your max health. Weaker earlier but stronger later game than other Legend Runes.", "longDesc": "Gain <scaleAD>0.35% Life Steal</scaleAD> for every <i>Legend</i> stack (<statGood>max 15 stacks</statGood>). At maximum <i>Legend</i> stacks, gain <scaleHealth>85 max health</scaleHealth>.<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png", "endOfGameStatDescs": ["Time Completed: @eogvar1@:@eogvar2@"], "recommendationDescriptorAttributes": { "kHealing": 10 } }, { "id": 8114, "name": "The Immortal Butcher", "majorChangePatchVersion": "", "tooltip": "<pathDomination>Domination</pathDomination> + <pathResolve>Resolve</pathResolve><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD><br>+0-0 Health based on level", "shortDesc": "<pathBonus><pathDomination>Domination</pathDomination> + <pathResolve>Resolve</pathResolve> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>+0-0 Health based on level", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8230, "name": "Phase Rush", "majorChangePatchVersion": "", "tooltip": "Hitting an enemy champion with 3 attacks or <b>separate</b> abilities within 4s grants <speed>15 - 40% Move Speed</speed> based on level and 75% Slow Resistance. <hr>This is increased to <speed>25 - 50% Move Speed</speed> for Melee champions.<hr>Duration: 3s<br>Cooldown: @f4@s<br>Haste Bonus: @f2@%", "shortDesc": "Hitting an enemy champion with 3 <b>separate</b> attacks or abilities grants a burst of <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>. ", "longDesc": "Hitting an enemy champion with 3 attacks or <b>separate</b> abilities within 4s grants <speed>15 - 40% Move Speed</speed> based on level and 75% Slow Resistance. <hr>This is increased to <speed>25 - 50% Move Speed</speed> for Melee champions.<hr>Duration: 3s<br>Cooldown: 30s - 10s", "recommendationDescriptor": "Rush of Movement", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png", "endOfGameStatDescs": ["Total activations: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8318, "name": "The Ruthless Visionary", "majorChangePatchVersion": "", "tooltip": "<pathInspiration>Inspiration</pathInspiration> + <pathDomination>Domination</pathDomination><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "<pathBonus><pathInspiration>Inspiration</pathInspiration> + <pathDomination>Domination</pathDomination> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8316, "name": "Minion Dematerializer", "majorChangePatchVersion": "9.6", "tooltip": "Start the game with 3 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 180s of the game.<br><br>Absorbing a minion increases your damage by +6% against that type of minion permanently, and an extra +3% for each additional minion of that type absorbed.<br><br><hr><br>Melee Bonus Damage: +@f1@%<br>Caster Bonus Damage: +@f2@%<br>Siege Bonus Damage: +@f3@%", "shortDesc": "Start the game with 3 Minion Dematerializers. Killing minions with the item gives permanent bonus damage vs. that minion type.", "longDesc": "Start the game with 3 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 180s of the game.<br><br>Absorbing a minion increases your damage by +6% against that type of minion permanently, and an extra +3% for each additional minion of that type absorbed.<br>", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png", "endOfGameStatDescs": ["Bonus Minion Damage Dealt: @eogvar1@"], "recommendationDescriptorAttributes": { "kUtility": 10 } }, { "id": 8463, "name": "Font of Life", "majorChangePatchVersion": "", "tooltip": "Impairing the movement of an enemy champion marks them for 4s.<br><br>Ally champions who attack marked enemies heal for 5 + 0.9% of your max health over 2s. ", "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>Impairing</lol-uikit-tooltipped-keyword> the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked. ", "longDesc": "Impairing the movement of an enemy champion marks them for 4s.<br><br>Ally champions who attack marked enemies heal for 5 + 0.9% of your max health over 2s. ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png", "endOfGameStatDescs": ["Total Ally Healing: @eogvar1@"], "recommendationDescriptorAttributes": { "kHealing": 5, "kUtility": 5 } }, { "id": 7000, "name": "Template", "majorChangePatchVersion": "", "tooltip": "", "shortDesc": "", "longDesc": "", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Template/7000.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8304, "name": "Magical Footwear", "majorChangePatchVersion": "9.9", "tooltip": "You get free Slightly Magical Footwear at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.<br><br>Slightly Magical Footwear grants you an additional <speed>10 Move Speed</speed>.<br><hr><br><scaleAD>Boots arrival time:</scaleAD> @f1@:@f2@@f3@", "shortDesc": "You get free boots at 12 min but you cannot buy boots before then. Each <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedown</lol-uikit-tooltipped-keyword> you get makes your boots come 45s sooner.", "longDesc": "You get free Slightly Magical Footwear at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.<br><br>Slightly Magical Footwear grants you an additional <speed>10 Move Speed</speed>.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png", "endOfGameStatDescs": ["Boots Arrival Time: @eogvar1@:@eogvar2@@eogvar3@"], "recommendationDescriptorAttributes": { "kGold": 10, "kMoveSpeed": 3 } }, { "id": 8236, "name": "Gathering Storm", "majorChangePatchVersion": "", "tooltip": "Every 10 min gain AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>.<br><br><i>10 min</i>: + 8 AP or 5 AD <br><i>20 min</i>: + 24 AP or 14 AD<br><i>30 min</i>: + 48 AP or 29 AD<br><i>40 min</i>: + 80 AP or 48 AD<br><i>50 min</i>: + 120 AP or 72 AD<br><i>60 min</i>: + 168 AP or 101 AD<br>etc...<br><hr><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "Gain increasing amounts of AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> over the course of the game.", "longDesc": "Every 10 min gain AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>.<br><br><i>10 min</i>: + 8 AP or 5 AD <br><i>20 min</i>: + 24 AP or 14 AD<br><i>30 min</i>: + 48 AP or 29 AD<br><i>40 min</i>: + 80 AP or 48 AD<br><i>50 min</i>: + 120 AP or 72 AD<br><i>60 min</i>: + 168 AP or 101 AD<br>etc...", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png", "endOfGameStatDescs": ["Total Bonus AD/AP: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 5, "kDamagePerSecond": 5 } }, { "id": 8009, "name": "Presence of Mind", "majorChangePatchVersion": "8.7", "tooltip": "Damaging an enemy champion increases your mana regeneration by @RegenAmount@ (80% for ranged) mana per second for 4 seconds. All energy users gain 1.5 energy per second, instead.<br><br>Takedowns restore 15% of your maximum mana or energy. <br><hr><br>Resource Restored: @f1@<br>", "shortDesc": "Increase your mana or energy regeneration when damaging an enemy champion. Takedowns restore mana or energy.", "longDesc": "Damaging an enemy champion increases your mana regeneration by 1.5-11 (80% for ranged) mana per second for 4 seconds. All energy users gain 1.5 energy per second, instead.<br><br>Takedowns restore 15% of your maximum mana or energy. ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png", "endOfGameStatDescs": ["Resource Restored: @eogvar1@"], "recommendationDescriptorAttributes": { "kMana": 15 } }, { "id": 8006, "name": "The Eternal Champion", "majorChangePatchVersion": "", "tooltip": "<pathPrecision>Precision</pathPrecision> + <pathResolve>Resolve</pathResolve><br>+0% Attack Speed<br>+0-0 Health based on level", "shortDesc": "<pathBonus><pathPrecision>Precision</pathPrecision> + <pathResolve>Resolve</pathResolve> Set Bonus</pathBonus>", "longDesc": "+0% Attack Speed<br>+0-0 Health based on level", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 9104, "name": "Legend: Alacrity", "majorChangePatchVersion": "", "tooltip": "Gain 3% attack speed plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.<br><hr><br>Total Attack Speed added: <scaleAD>@f1*100@%</scaleAD> (<statGood>@f3@ of 10</statGood>)<br>Progress Towards Next Stack: @f2@%", "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Attack Speed</b>. ", "longDesc": "Gain 3% attack speed plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png", "endOfGameStatDescs": ["Time Completed: @eogvar1@:@eogvar2@"], "recommendationDescriptorAttributes": { "kDamagePerSecond": 10 } }, { "id": 8416, "name": "The Enlightened Titan", "majorChangePatchVersion": "", "tooltip": "<pathResolve>Resolve</pathResolve> + <pathInspiration>Inspiration</pathInspiration><br>+0-0 Health based on level", "shortDesc": "<pathBonus><pathResolve>Resolve</pathResolve> + <pathInspiration>Inspiration</pathInspiration> Set Bonus</pathBonus>", "longDesc": "+0-0 Health based on level", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 5005, "name": "Attack Speed", "majorChangePatchVersion": "", "tooltip": "+10% Attack Speed", "shortDesc": "+10% Attack Speed", "longDesc": "+10% Attack Speed", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/StatMods/StatModsAttackSpeedIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8306, "name": "Hextech Flashtraption", "majorChangePatchVersion": "", "tooltip": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel for 2s to blink to a new location.<br><br>Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat.", "shortDesc": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel, then blink to a new location.", "longDesc": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel for 2s to blink to a new location.<br><br>Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png", "endOfGameStatDescs": ["Times Hexflashed: @eogvar1@"], "recommendationDescriptorAttributes": { "kUtility": 10 } }, { "id": 8465, "name": "Guardian", "majorChangePatchVersion": "", "tooltip": "<i>Guard</i> allies within 350 units of you, and allies you target with spells for 2.5s. While <i>Guarding</i>, if you or the ally take more than a small amount of damage over the duration of the <i>Guard</i>, both of you gain a shield for 1.5s.<br><hr><br>Cooldown: <scaleLevel>@f5@</scaleLevel> seconds<br>Current shield strength: <scaleLevel>@f2@</scaleLevel> <scaleAP>(+@f3@)</scaleAP> <scaleHealth>(+@f4@)</scaleHealth>.", "shortDesc": "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage based on level, you're both granted a shield.", "longDesc": "<i>Guard</i> allies within 350 units of you, and allies you target with spells for 2.5s. While <i>Guarding</i>, if you or the ally take more than a small amount of damage over the duration of the <i>Guard</i>, both of you gain a shield for 1.5s.<br><br>Cooldown: <scaleLevel>90 - 40</scaleLevel> seconds<br>Shield: <scaleLevel>45 - 120</scaleLevel> + <scaleAP>12.5%</scaleAP> of your ability power + <scalehealth>8%</scalehealth> of your bonus health<br>Proc Threshold: <scaleLevel>90 - 250</scaleLevel> postmitigation damage", "recommendationDescriptor": "Shield Allies", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Guardian/Guardian.png", "endOfGameStatDescs": ["Total Shield Strength: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8138, "name": "Eyeball Collection", "majorChangePatchVersion": "", "tooltip": "Collect eyeballs for champion takedowns. Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power, per eyeball collected. <br><br>Upon completing your collection at 10 eyeballs, additionally gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage, or 10 Ability Power.<br><br>Collect 1 eyeball per champion takedown.<br><hr><br>Stats Gained: <scaleAD>+@f2@ Attack Damage</scaleAD><br>Eyeballs Collected: @f3@/10", "shortDesc": "Collect eyeballs for champion <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword>. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each eyeball plus bonus upon collection completion.", "longDesc": "Collect eyeballs for champion takedowns. Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power, per eyeball collected. <br><br>Upon completing your collection at 10 eyeballs, additionally gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage, or 10 Ability Power.<br><br>Collect 1 eyeball per champion takedown.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png", "endOfGameStatDescs": ["Total Bonus AD/AP: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 5, "kDamagePerSecond": 5 } }, { "id": 8127, "name": "The Twisted Surgeon", "majorChangePatchVersion": "", "tooltip": "<pathDomination>Domination</pathDomination> + <pathPrecision>Precision</pathPrecision><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD><br>+0% Attack Speed", "shortDesc": "<pathBonus><pathDomination>Domination</pathDomination> + <pathPrecision>Precision</pathPrecision> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>+0% Attack Speed", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8143, "name": "Sudden Impact", "majorChangePatchVersion": "", "tooltip": "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 9 Lethality and 7 Magic Penetration for 5s.<br><br>Cooldown: 4s<br><hr><br>Bonus champion damage: @f1@", "shortDesc": "Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.", "longDesc": "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 9 Lethality and 7 Magic Penetration for 5s.<br><br>Cooldown: 4s", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png", "endOfGameStatDescs": ["Bonus Damage: @eogvar1@"], "recommendationDescriptorAttributes": { "kBurstDamage": 8, "kDamagePerSecond": 2 } }, { "id": 8345, "name": "Biscuit Delivery", "majorChangePatchVersion": "", "tooltip": "Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 2 mins, until 6 min.<br><br>Biscuits restore 8% of your missing health and mana. Consuming or selling a Biscuit permanently increases your mana cap by 40. <br><br><i>Manaless:</i> Champions without mana restore 12% missing health instead.<br><hr><br>Biscuits Gained: @f1@/@f2@", "shortDesc": "Gain a free Biscuit every 2 min, until 6 min. Consuming or selling a Biscuit permanently increases your max mana and restores health and mana.", "longDesc": "Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 2 mins, until 6 min.<br><br>Biscuits restore 8% of your missing health and mana. Consuming or selling a Biscuit permanently increases your mana cap by 40. <br><br><i>Manaless:</i> Champions without mana restore 12% missing health instead.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png", "endOfGameStatDescs": ["Biscuits Received: @eogvar1@"], "recommendationDescriptorAttributes": { "kHealing": 5, "kMana": 10 } }, { "id": 8444, "name": "Second Wind", "majorChangePatchVersion": "", "tooltip": "After taking damage from an enemy champion, heal for 4% of your missing health +3 over 10s.<br><hr><br><scaleAD>Total healing: @f1@</scaleAD>", "shortDesc": "After taking damage from an enemy champion heal back some missing health over time. ", "longDesc": "After taking damage from an enemy champion, heal for 4% of your missing health +3 over 10s.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/SecondWind/SecondWind.png", "endOfGameStatDescs": ["Total Healing: @eogvar1@"], "recommendationDescriptorAttributes": { "kHealing": 10 } }, { "id": 8205, "name": "The Incontestable Spellslinger", "majorChangePatchVersion": "", "tooltip": "<pathSorcery>Sorcery</pathSorcery> + <pathPrecision>Precision</pathPrecision><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD><br>+0% Attack Speed", "shortDesc": "<pathBonus><pathSorcery>Sorcery</pathSorcery> + <pathPrecision>Precision</pathPrecision> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>+0% Attack Speed", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8437, "name": "Grasp of the Undying", "majorChangePatchVersion": "", "tooltip": "Every 4s in combat, your next basic attack on a champion will:<li>Deal bonus magic damage equal to 3.5% of your max health</li><li>Heals you for 3 + 1.2% of your max health</li><li>Permanently increase your health by 7</li><br><rules><i>Ranged Champions:</i> Damage, healing, and permanent health gained reduced by 40%.</rules><br><br>Damage to Champions: <scaleHealth>@f1@</scaleHealth><br>Total Healing: <scaleHealth>@f2@</scaleHealth><br>Times Used: @f3@", "shortDesc": "Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.", "longDesc": "Every 4s in combat, your next basic attack on a champion will:<li>Deal bonus magic damage equal to 3.5% of your max health</li><li>Heals you for 3 + 1.2% of your max health</li><li>Permanently increase your health by 7</li><br><rules><i>Ranged Champions:</i> Damage, healing, and permanent health gained reduced by 40%.</rules><br>", "recommendationDescriptor": "Drain Opponents", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png", "endOfGameStatDescs": ["Total damage: @eogvar1@", "Total Healing: @eogvar2@"], "recommendationDescriptorAttributes": {} }, { "id": 9923, "name": "Hail of Blades", "majorChangePatchVersion": "8.11", "tooltip": "Gain @f3@% Attack Speed when you attack an enemy champion for up to 3 attacks. <br><br>Cooldown: 12s.<br><hr><br>Hail of Blades attacks: @f1@<br>Percentage of Hail attacks landed: @f2@%<br><br><rules>Basic Attack resets increase the attack limit by 1.<br>Allows you to temporarily exceed the attack speed limit.</rules>", "shortDesc": "Gain a large amount of Attack Speed for the first 3 attacks made against enemy champions.", "longDesc": "Gain 110% Attack Speed when you attack an enemy champion for up to 3 attacks.<br><br>No more than 3s can elapse between attacks or this effect will end.<br><br>Cooldown: 12s.<br><br><rules>Attack resets increase the attack limit by 1.<br>Allows you to temporarily exceed the attack speed limit.</rules>", "recommendationDescriptor": "Flurry of Attacks", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png", "endOfGameStatDescs": ["Attacks made with extra attack speed: @eogvar1@", "Percentage of Hail attacks landed: @eogvar2@%"], "recommendationDescriptorAttributes": {} }, { "id": 8429, "name": "Conditioning", "majorChangePatchVersion": "9.9", "tooltip": "After 12 min gain +8 Armor and +8 Magic Resist and increase your bonus Armor and Magic Resist by 3%.<br><br>Armor Gained: @f3@ <scaleArmor>(+@f4@)</scaleArmor><br>Resist Gained: @f5@ <scaleMR>(+@f6@)</scaleMR>", "shortDesc": "After 12 min gain +8 Armor and +8 Magic Resist and increase your bonus Armor and Magic Resist by 3%.", "longDesc": "After 12 min gain +8 Armor and +8 Magic Resist and increase your bonus Armor and Magic Resist by 3%.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Conditioning/Conditioning.png", "endOfGameStatDescs": ["Percent of game active: @eogvar1@%", "Total Bonus Armor: @eogvar2@", "Total Bonus Magic Resist: @eogvar3@"], "recommendationDescriptorAttributes": { "kDurability": 10 } }, { "id": 8124, "name": "Predator", "majorChangePatchVersion": "", "tooltip": "Enchants your boots with the active effect <font color='#c60300'>Predator</font>.<br><br>Gain increased <speed>Move Speed</speed>, ramping up to <speed>@MaxMSLevelCalc@ Move Speed</speed> over 1.5 seconds, while chasing enemy champions. Damaging attacks or abilities to champions end this effect, dealing <scaleLevel>@f3@</scaleLevel> <scaleAP>(+@f5@)</scaleAP> <scaleAD>(+@f4@)</scaleAD> bonus damage. <br><br>Cooldown: <scaleLevel>@f7@</scaleLevel>s<br><hr><br>Damage Dealt To Champions: @f1@", "shortDesc": "Add an active effect to your boots that grants a large boost of <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> and causes your next attack or ability to deal bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.", "longDesc": "Enchants your boots with the active effect '<font color='#c60300'>Predator</font>.'<br><br>Gain increased Move Speed, ramping up to 25-50% Move Speed over 1 second, while chasing enemy champions. After ramping up, damaging attacks or abilities to champions end this effect, dealing 20-180 (+<scaleAD>0.25</scaleAD> bonus AD)(+<scaleAP>0.15</scaleAP> AP) bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Cooldown: 120s-60s.", "recommendationDescriptor": "Out of Combat Movement", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/Predator/Predator.png", "endOfGameStatDescs": ["Total Damage to Champions: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8233, "name": "Absolute Focus", "majorChangePatchVersion": "", "tooltip": "While above 70% health, gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level). <br><br>Grants 1.8 Attack Damage or 3 Ability Power at level 1. <br><hr><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>", "shortDesc": "While above 70% health, gain extra <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.", "longDesc": "While above 70% health, gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level). <br><br>Grants 1.8 Attack Damage or 3 Ability Power at level 1. ", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png", "endOfGameStatDescs": ["Total time active: @eogvar1@:@eogvar2@"], "recommendationDescriptorAttributes": { "kBurstDamage": 5, "kDamagePerSecond": 5 } }, { "id": 8007, "name": "The Savant", "majorChangePatchVersion": "", "tooltip": "<pathPrecision>Precision</pathPrecision> + <pathInspiration>Inspiration</pathInspiration><br>+0% Attack Speed", "shortDesc": "<pathBonus><pathPrecision>Precision</pathPrecision> + <pathInspiration>Inspiration</pathInspiration> Set Bonus</pathBonus>", "longDesc": "+0% Attack Speed", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8136, "name": "Zombie Ward", "majorChangePatchVersion": "8.14", "tooltip": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemy Wards cause friendly Zombie Wards to sprout from their corpses.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Zombie Ward spawned, up to 10. <br><br>After spawning 10 Zombie Wards, additionally gain 10 adaptive force.<br><br>Zombie Wards are visible, last for 120s and do not count towards your ward limit.<br><hr><br>Stats Gained: <scaleAD>+@f2@ Attack Damage</scaleAD><br>Zombie Wards raised: @f1@", "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemy Wards cause friendly Zombie Wards to sprout from their corpses. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each Zombie Ward spawned plus bonus upon completion.", "longDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemy Wards cause friendly Zombie Wards to sprout from their corpses.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Zombie Ward spawned, up to 10. <br><br>After spawning 10 Zombie Wards, additionally gain 10 adaptive force.<br><br>Zombie Wards are visible, last for 120s and do not count towards your ward limit.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Domination/ZombieWard/ZombieWard.png", "endOfGameStatDescs": ["Wards spawned: @eogvar1@", "Adaptive Force Gained: @eogvar2@"], "recommendationDescriptorAttributes": { "kUtility": 10 } }, { "id": 8208, "name": "The Ancient One", "majorChangePatchVersion": "", "tooltip": "<pathSorcery>Sorcery</pathSorcery> + <pathResolve>Resolve</pathResolve><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD><br>+0-0 Health based on level", "shortDesc": "<pathBonus><pathSorcery>Sorcery</pathSorcery> + <pathResolve>Resolve</pathResolve> Set Bonus</pathBonus>", "longDesc": "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>+0-0 Health based on level", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8347, "name": "Cosmic Insight", "majorChangePatchVersion": "", "tooltip": "+<attention>18</attention> Summoner Spell Haste<br>+<attention>10</attention> Item Haste", "shortDesc": "+<attention>18</attention> Summoner Spell Haste<br>+<attention>10</attention> Item Haste", "longDesc": "+<attention>18</attention> Summoner Spell Haste<br>+<attention>10</attention> Item Haste", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png", "endOfGameStatDescs": ["--"], "recommendationDescriptorAttributes": { "kCooldown": 10 } }, { "id": 8472, "name": "Chrysalis", "majorChangePatchVersion": "8.6", "tooltip": "Start the game with 40 bonus health. When you get 4 takedowns, convert that health for an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage or 10 Ability Power.<br><hr><br>Takedowns: @f1@/@f2@<br>Health Given: @f3@<br>Bonus <scaleAD>Attack Damage</scaleAD> Given: @f4@", "shortDesc": "Start the game with 40 bonus health. When you get 4 takedowns, convert that health for an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage or 10 Ability Power.", "longDesc": "Start the game with 40 bonus health. When you get 4 takedowns, convert that health for an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage or 10 Ability Power.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Chrysalis/Chrysalis.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 8229, "name": "Arcane Comet", "majorChangePatchVersion": "", "tooltip": "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.<br><rules><br>Cooldown Reduction:<br>Single Target: 20%.<br>Area of Effect: 10%.<br>Damage over Time: 5%.<br></rules><br>Damage: <font color='#FFFFFF'>@f5@</font> (+<scaleAP>@f6@</scaleAP>) (+<scaleAD>@f7@</scaleAD>)<br>Cooldown: @f2@s<br><hr><br>You have hit with @f3@% of comets fired, for a total of @f1@ damage to champions.", "shortDesc": "Damaging a champion with an ability hurls a damaging comet at their location.", "longDesc": "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.<br><br><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>Adaptive Damage</font></lol-uikit-tooltipped-keyword>: 30 - 130 based on level (<scaleAP>+0.05 AP</scaleAP> and <scaleAD>+0.1 bonus AD</scaleAD>)<br>Cooldown: 20 - 8s<br><rules><br>Cooldown Reduction:<br>Single Target: 20%.<br>Area of Effect: 10%.<br>Damage over Time: 5%.<br></rules>", "recommendationDescriptor": "Ability Damage", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png", "endOfGameStatDescs": ["Total Damage Dealt: @eogvar1@"], "recommendationDescriptorAttributes": {} }, { "id": 8344, "name": "The Elegant Duelist ", "majorChangePatchVersion": "", "tooltip": "<pathInspiration>Inspiration</pathInspiration> + <pathPrecision>Precision</pathPrecision><br>+0% Attack Speed", "shortDesc": "<pathBonus><pathInspiration>Inspiration</pathInspiration> + <pathPrecision>Precision</pathPrecision> Set Bonus</pathBonus>", "longDesc": "+0% Attack Speed", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png", "endOfGameStatDescs": [], "recommendationDescriptorAttributes": {} }, { "id": 9101, "name": "Overheal", "majorChangePatchVersion": "", "tooltip": "Excess healing on you becomes a shield for up to <scaleLevel>@OverhealShieldCap@</scaleLevel> Health.<br><br>Shield is built up from <scaleLevel>@f6@%</scaleLevel> of excess healing from yourself or any ally.<br><hr><br><b>Total damage blocked: <scaleAD>@f1@</scaleAD></b>", "shortDesc": "Excess healing on you becomes a shield.", "longDesc": "Excess healing on you becomes a shield for 11% of your max Health.<br><br>Shield is built up from 20 to 100% of excess healing from yourself or any ally.", "recommendationDescriptor": "", "iconPath": "/lol-game-data/assets/v1/perk-images/Styles/Precision/Overheal.png", "endOfGameStatDescs": ["Total Shielding: @eogvar2@"], "recommendationDescriptorAttributes": { "kDurability": 7, "kHealing": 3 } }];

const summonerSpells = [{ "id": 1, "name": "Cleanse", "description": "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.", "summonerLevel": 9, "cooldown": 210, "gameModes": ["URF", "CLASSIC", "ARSR", "ARAM", "ULTBOOK", "WIPMODEWIP", "TUTORIAL", "DOOMBOTSTEEMO", "PRACTICETOOL", "FIRSTBLOOD", "NEXUSBLITZ", "PROJECT", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_boost.png" }, { "id": 3, "name": "Exhaust", "description": "Exhausts target enemy champion, reducing their Move Speed by 30%, and their damage dealt by 35% for 3 seconds.", "summonerLevel": 4, "cooldown": 210, "gameModes": ["URF", "CLASSIC", "ARSR", "ARAM", "ULTBOOK", "WIPMODEWIP", "TUTORIAL", "DOOMBOTSTEEMO", "PRACTICETOOL", "NEXUSBLITZ", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_exhaust.png" }, { "id": 4, "name": "Flash", "description": "Teleports your champion a short distance toward your cursor's location.", "summonerLevel": 7, "cooldown": 300, "gameModes": ["PRACTICETOOL", "CLASSIC", "ARSR", "ARAM", "NEXUSBLITZ", "ULTBOOK", "TUTORIAL", "FIRSTBLOOD", "ASSASSINATE", "DOOMBOTSTEEMO", "URF", "STARGUARDIAN", "PROJECT", "WIPMODEWIP", "SNOWURF", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_flash.png" }, { "id": 5, "name": "", "description": "", "summonerLevel": 4, "cooldown": 180, "gameModes": [], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_Backtrack.png" }, { "id": 6, "name": "Ghost", "description": "Your champion can move through units and gains 24 - 48% Move Speed (depending on champion level) for 15 seconds.", "summonerLevel": 1, "cooldown": 210, "gameModes": ["URF", "CLASSIC", "ARSR", "ARAM", "ASSASSINATE", "TUTORIAL_MODULE_2", "TUTORIAL_MODULE_1", "ULTBOOK", "WIPMODEWIP", "TUTORIAL", "DOOMBOTSTEEMO", "PRACTICETOOL", "FIRSTBLOOD", "NEXUSBLITZ", "STARGUARDIAN", "PROJECT", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_haste.png" }, { "id": 7, "name": "Heal", "description": "Restores 80-318 Health and grants 30% Move Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.", "summonerLevel": 1, "cooldown": 240, "gameModes": ["URF", "CLASSIC", "ARSR", "ARAM", "ASSASSINATE", "TUTORIAL_MODULE_2", "TUTORIAL_MODULE_1", "ULTBOOK", "WIPMODEWIP", "TUTORIAL", "DOOMBOTSTEEMO", "PRACTICETOOL", "NEXUSBLITZ", "STARGUARDIAN", "PROJECT", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_heal.png" }, { "id": 11, "name": "Smite", "description": "Deals 600-1200 true damage to target monster.", "summonerLevel": 3, "cooldown": 15, "gameModes": ["URF", "CLASSIC", "ARSR", "ONEFORALL", "PRACTICETOOL", "NEXUSBLITZ", "TUTORIAL", "DOOMBOTSTEEMO"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_smite.png" }, { "id": 12, "name": "Teleport", "description": "After channeling for 4 seconds, teleports your champion to target allied structure. Upgrades to Unleashed Teleport at 10 minutes, which teleports your champion to target allied structure, minion, or ward.", "summonerLevel": 7, "cooldown": 360, "gameModes": ["ONEFORALL", "PRACTICETOOL", "CLASSIC", "TUTORIAL", "ULTBOOK", "ARSR", "ASSASSINATE", "DOOMBOTSTEEMO"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_teleport.png" }, { "id": 13, "name": "Clarity", "description": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.", "summonerLevel": 6, "cooldown": 240, "gameModes": ["ARAM", "FIRSTBLOOD"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/SummonerMana.png" }, { "id": 14, "name": "Ignite", "description": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.", "summonerLevel": 9, "cooldown": 180, "gameModes": ["URF", "CLASSIC", "ARSR", "ARAM", "ASSASSINATE", "ULTBOOK", "WIPMODEWIP", "TUTORIAL", "DOOMBOTSTEEMO", "PRACTICETOOL", "FIRSTBLOOD", "NEXUSBLITZ", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/SummonerIgnite.png" }, { "id": 21, "name": "Barrier", "description": "Shields your champion from 105-411 damage (depending on champion level) for 2 seconds.", "summonerLevel": 4, "cooldown": 180, "gameModes": ["URF", "CLASSIC", "ARSR", "ARAM", "ASSASSINATE", "ULTBOOK", "WIPMODEWIP", "TUTORIAL", "DOOMBOTSTEEMO", "PRACTICETOOL", "FIRSTBLOOD", "NEXUSBLITZ", "STARGUARDIAN", "PROJECT", "ONEFORALL"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/SummonerBarrier.png" }, { "id": 30, "name": "To the King!", "description": "Quickly travel to the Poro King's side.", "summonerLevel": 1, "cooldown": 10, "gameModes": ["KINGPORO"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Benevolence_Of_King_Poro_Icon.png" }, { "id": 31, "name": "Poro Toss", "description": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.", "summonerLevel": 1, "cooldown": 20, "gameModes": ["KINGPORO"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Trailblazer_Poro_Icon.png" }, { "id": 32, "name": "Mark", "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.", "summonerLevel": 6, "cooldown": 80, "gameModes": ["ARAM", "FIRSTBLOOD"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_Mark.png" }, { "id": 39, "name": "Mark", "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.", "summonerLevel": 6, "cooldown": 80, "gameModes": ["SNOWURF"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_Mark.png" }, { "id": 54, "name": "Placeholder", "description": "This slot will be replaced by another champion's ultimate selected at the start of the game. There will be 30 seconds to select an ultimate. Be prepared!", "summonerLevel": 1, "cooldown": 0, "gameModes": ["ULTBOOK"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_Empty.png" }, { "id": 55, "name": "Placeholder and Attack-Smite", "description": "This slot will be replaced by another champion's ultimate and you will gain Attack-Smite. There will be 30 seconds to select an ultimate. Be prepared!", "summonerLevel": 1, "cooldown": 0, "gameModes": ["ULTBOOK"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_EmptySmite.png" }, { "id": 2201, "name": "Flee", "description": "Gain a short burst of Move Speed, increased while running away from enemy champions.", "summonerLevel": 1, "cooldown": 45, "gameModes": ["CHERRY"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Icon_SummonerSpell_Flee.2v2_Mode_Fighters.png" }, { "id": 2202, "name": "Flash", "description": "Teleports your champion a short distance toward your cursor's location.", "summonerLevel": 1, "cooldown": 0, "gameModes": ["CHERRY"], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_flash.png" }, { "id": 2203, "name": "Flash", "description": "Teleports your champion a short distance toward your cursor's location.", "summonerLevel": 1, "cooldown": 3, "gameModes": [], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_flash.png" }, { "id": 4294967295, "name": "Primal Smite", "description": "", "summonerLevel": 3, "cooldown": 15, "gameModes": [], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/1103_Smite.png" }, { "id": 4294967295, "name": "Primal Smite", "description": "", "summonerLevel": 3, "cooldown": 15, "gameModes": [], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/1101_Smite.png" }, { "id": 4294967295, "name": "Primal Smite", "description": "", "summonerLevel": 3, "cooldown": 15, "gameModes": [], "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/1102_Smite.png" }];

function collapseBlob(e) {
    e.stopPropagation();
    let info = document.getElementById('info-blob');
    info.classList.add('collapsed');
}

function expandBlob(e) {
    if (e.classList.contains('collapsed')) {
        e.classList.toggle('collapsed');
    }
}

function profPicError(e) {
    e.src = 'img/profileicon/0.png';
}

function toggleItems() {
    var timelineElement = document.getElementById('timeline-row');
    if (timelineElement.style.display === 'block') {
        timelineElement.style.display = 'none';
    } else {
        timelineElement.style.display = 'block';
    }
}

function combineAllRunes(allRunes) {
    const grandchildMap = {};
    allRunes.forEach(child => {
        if (child[4] > child[5]) {
            let temp = child[4];
            child[4] = child[5];
            child[5] = temp;
        }
        const grandchildKey = `${child[0]}_${child[1]}_${child[2]}_${child[3]}_${child[4]}_${child[5]}`;
        if (!grandchildMap[grandchildKey]) {
            let wins = 0;
            let losses = 0;
            child[11] ? wins++ : losses++;
            grandchildMap[grandchildKey] = { grandchild: child, wins: wins, losses: losses };
        } else {
            child[11] ? grandchildMap[grandchildKey].wins++ : grandchildMap[grandchildKey].losses++;
        }
    });
    return grandchildMap;
}

function groupByTimestamp(arr) {
    const result = [];
    let currentGroup = [];

    arr.forEach((obj, index) => {
        if (index === 0) {
            // If it's the first object, add it to the current group
            currentGroup.push(obj);
        } else {
            const prevTimestamp = arr[index - 1].timestamp;
            const currentTimestamp = obj.timestamp;

            if (currentTimestamp - prevTimestamp <= 3000) {
                // If within 3000 milliseconds, add to the current group
                currentGroup.push(obj);
            } else {
                // If not within 3000 milliseconds, start a new group
                result.push([...currentGroup]);
                currentGroup = [obj];
            }
        }
    });

    // Add the last group
    if (currentGroup.length > 0) {
        result.push([...currentGroup]);
    }

    return result;
}

function convertTimestampToMinutesAndSeconds(timestamp) {
    const date = new Date(timestamp);

    // Extract minutes and seconds
    const minutes = date.getUTCMinutes();
    const seconds = date.getSeconds();

    // Format the result
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return formattedTime;
}

function convertSkillSlot(skillSlot) {
    switch (skillSlot) {
        case 1:
            return 'Q';
        case 2:
            return 'W';
        case 3:
            return 'E';
        case 4:
            return 'R';
    }
}

// function fetchSummonerData() {
//     const matchId = 'NA1_4838882227';
//     const url = `http://localhost:3000/match/${encodeURIComponent(matchId)}`;
//     const puuid = 'Tdocf9jtTuJeSnsfIVFcDCj7R-zTu3CyHGu58bgp9pfyCnD45VDaKfO2RuCP8IqyTmvzPualmD11QA'

//     // Make a GET request using the Fetch API
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             let summonerData = data.info.participants.find(x => x.riotIdGameName == 'Nathaniel');

//             /* Lane / Matchup */
//             let laneHtml = '<div class="flex-row">';
//             laneHtml += '<img src=img/lanes/' + summonerData.individualPosition.toLowerCase() + '.png /> VS ';
//             let matchup = data.info.participants.find(x => x.riotIdGameName != 'Nathaniel' && x.individualPosition == summonerData.individualPosition).championName;
//             matchup = matchup.charAt(0).toUpperCase() + matchup.slice(1);
//             laneHtml += '<img src="img/champion/' + matchup + '.png" /></div>';
//             document.getElementById('lane').innerHTML = laneHtml;

//             let summonerHtml = '<div>';
//             console.log({ SummonerData: summonerData });
//             /* Items */
//             for (let i = 0; i < 6; i++) {
//                 if (summonerData['item' + i]) {
//                     summonerHtml += '<div class="item-img"><img src="img/item/' + summonerData['item' + i] + '.png"/>';
//                     let itemInfo = itemsJson.data[summonerData['item' + i]];
//                     summonerHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + '</div></div></div>'
//                 }
//             }
//             summonerHtml += '</div>';
//             document.getElementById('items').innerHTML = summonerHtml;
//             /* Runes */
//             // let runes = [
//             //     // summonerData.perks.styles[0].style,
//             //     summonerData.perks.styles[0].selections[0].perk,
//             //     summonerData.perks.styles[0].selections[1].perk,
//             //     summonerData.perks.styles[0].selections[2].perk,
//             //     summonerData.perks.styles[0].selections[3].perk,
//             //     // summonerData.perks.styles[1].style,
//             //     summonerData.perks.styles[1].selections[0].perk,
//             //     summonerData.perks.styles[1].selections[1].perk,
//             //     summonerData.perks.statPerks.offense,
//             //     summonerData.perks.statPerks.flex,
//             //     summonerData.perks.statPerks.defense
//             // ];
//             console.log({ activeRunes: runes });
//             const runeElement = document.getElementById('rune-page');
//             let runesHtml = '<div class="flex-row">';

//             runesHtml += '<div class="rune main-rune"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[0]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[0]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[0]).longDesc + '</div></div>';

//             runesHtml += '<div class="flex-column">'
//             runesHtml += '<div class="flex-row">'
//             runesHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[1]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[1]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[1]).longDesc + '</div></div>';
//             runesHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[2]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[2]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[2]).longDesc + '</div></div>';
//             runesHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[3]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[3]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[3]).longDesc + '</div></div>';
//             runesHtml += '</div>'

//             runesHtml += '<div class="flex-row">'
//             runesHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[4]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[4]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[4]).longDesc + '</div></div>';
//             runesHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[5]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[5]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[5]).longDesc + '</div></div>';
//             runesHtml += '</div>'
//             runesHtml += '</div>'

//             runesHtml += '<div class="flex-column">'
//             runesHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[6]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[6]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[6]).longDesc + '</div></div>';
//             runesHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[7]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[7]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[7]).longDesc + '</div></div>';
//             runesHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == summoner.runes[8]).iconPath.slice(1) + '"/>';
//             runesHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == summoner.runes[8]).name + '</span><hr/>' + runesJson.find(r => r.id == summoner.runes[8]).longDesc + '</div></div>';
//             runesHtml += '</div>'
//             runesHtml += '</div>';
//             runeElement.innerHTML += runesHtml;
//         })
//         .catch(error => {
//             console.error('Error fetching summoner data:', error);
//             // Handle errors
//         });

//     const timeLineUrl = `http://localhost:3000/matchTimeline/${encodeURIComponent(matchId)}`;
//     fetch(timeLineUrl)
//         .then(response => response.json())
//         .then(data => {
//             let participantId = data.info.participants.find(x => x.puuid == puuid).participantId;
//             let events = [];
//             data.info.frames.forEach(frame => {
//                 frame.events.forEach(event => {
//                     if (event.participantId == participantId) {
//                         events.push(event);
//                     }
//                 })
//             })
//             console.log('Nathaniel Timeline:' + JSON.stringify(events));

//             let itemEvents = events.filter(x => x.type.includes('ITEM_PURCHASED') || x.type.includes('ITEM_SOLD'));
//             /* Items */
//             let timelineHtml = '<div class="timeline-item flex-row">';
//             itemEvents.forEach((e, index) => {
//                 if (itemEvents[index - 1] && (e.timestamp - itemEvents[index - 1].timestamp > 3000)) {
//                     timelineHtml += convertTimestampToMinutesAndSeconds(itemEvents[index - 1].timestamp) + '<br />';
//                 }
//                 timelineHtml += '<img src="img/item/' + e.itemId + '.png"/>';
//             })
//             timelineHtml += '</div>';
//             document.getElementById('timeline').innerHTML = timelineHtml;

//             /* Skills */
//             let skillEvents = events.filter(x => x.type == 'SKILL_LEVEL_UP');
//             let skillsHtml = '<div class="timeline-skills">';
//             skillEvents.forEach((levelUp, index) => {
//                 if (index > 0) {
//                     skillsHtml += '&#8594;';
//                 }
//                 skillsHtml += convertSkillSlot(levelUp.skillSlot);
//             })
//             skillsHtml += '</div>';
//             document.getElementById('timeline-levels').innerHTML = skillsHtml;

//             /* Skill Order */

//             let Q = 0;
//             let W = 0;
//             let E = 0;
//             let skillOrder = [];
//             skillEvents.forEach(event => {
//                 switch (event.skillSlot) {
//                     case 1:
//                         Q++;
//                         if (Q == 5 && !skillOrder.includes('Q')) {
//                             skillOrder.push('<div class="img-container"><span class="skill">Q</span><img src="img/spell/Q.png"/></div>');
//                         }
//                         break;
//                     case 2:
//                         W++;
//                         if (W == 5 && !skillOrder.includes('W')) {
//                             skillOrder.push('<div class="img-container"><span class="skill">W</span><img src="img/spell/W.png"/></div>');
//                         }
//                         break;
//                     case 3:
//                         E++;
//                         if (E == 5 && !skillOrder.includes('E')) {
//                             skillOrder.push('<div class="img-container"><span class="skill">E</span><img src="img/spell/E.png"/></div>');
//                         }
//                         break;
//                 }
//             });

//             if (skillOrder.length < 3) {
//                 if (!skillOrder.includes('Q.png')) {
//                     skillOrder.push('<div class="img-container"><span class="skill">Q</span><img src="img/spell/Q.png"/></div>');
//                 }
//                 else if (!skillOrder.includes('W.png')) {
//                     skillOrder.push('<div class="img-container"><span class="skill">W</span><img src="img/spell/W.png"/></div>');
//                 } else {
//                     skillOrder.push('<div class="img-container"><span class="skill">E</span><img src="img/spell/E.png"/></div>');
//                 }
//             }
//             let skillOrderHtml = skillOrder[0] + '&#8594;' + skillOrder[1] + '&#8594;' + skillOrder[2];
//             document.getElementById('skill-order').innerHTML = skillOrderHtml;

//         })
//         .catch(error => {
//             console.error('Error fetching summoner data:', error);
//             // Handle errors
//         });
// }

function toggleBlizzard() {
    const blizzard = document.getElementById('blizzard');
    blizzard.classList.toggle('hidden');
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        toggleBlizzard();
    }
});

function dropdownCard(clickedCard) {

    const dropdownContent = clickedCard.nextElementSibling;

    clickedCard.classList.toggle('summoner-card-active');

    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'flex';
    } else {
        dropdownContent.style.display = 'none';
    }
    dropdownContent.classList.toggle('dropdown-info-active');
    dropdownContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/* Summoners */

function createPlayerList(summoners) {

    summoners = summoners.filter(x => x.wins > 3);
    summoners = summoners.sort((a, b) => b.leaguePoints - a.leaguePoints);

    let summonerListHtml = '';
    let testItems = ['6657', '3020', '3157'];
    let testSkillOrder = ['E', 'Q', 'W'];
    let runes = [
        8112,
        8126,
        8138,
        8105,
        8014,
        8009,
        5005,
        5008,
        5002
    ]

    summoners.forEach(summoner => {
        summonerListHtml += '<div class="flex-row summoner-card" onclick="dropdownCard(this)">';

        summonerListHtml += '<div class="flex-row">';

        /* Dropdown Arrow */
        summonerListHtml += '<svg class="side-arrow" fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"/></svg>';

        /* Profile Image */
        summonerListHtml += '<img onerror=profPicError(this) class="med-img" src="img/profileicon/' + summoner.profileIconId + '.png"/>';

        /* MatchId */
        // summonerListHtml += '<p class="bottom-right-text">' + summoner.matchId + '</p>';

        /* Summoner Name */
        summonerListHtml += '<div class="flex-column"><div class="summoner-name">' + summoner.summonerName + '<span class="riot-tag">#' + summoner.riotTag + '</span></div>';
        summonerListHtml += '<div class="summoner-region"><span class="wins">' + summoner.wins + '</span> - <span class="losses">' + summoner.losses + '</span><br/>' + summoner.region + '</div></div></div>';

        /* Rank */
        summonerListHtml += '<div class="tier"><img class="large-img" src="img/tier/' + summoner.tier + '.png"/>' + summoner.leaguePoints + ' LP</div>';

        /* Summoner Spells */
        summonerListHtml += '<div class="flex-column summoner-spells">';
        let summoner1 = summonerSpells.find(x => x.id == summoner.summoner1Id);
        let summoner2 = summonerSpells.find(x => x.id == summoner.summoner2Id);
        if (summoner1 && summoner2) {
            summonerListHtml += '<div class="summoner-spell"><img src="' + summoner1.iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + summoner1.name + '</span><hr/>' + summoner1.description + '</div></div>';
            summonerListHtml += '<div class="summoner-spell"><img src="' + summoner2.iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + summoner2.name + '</span><hr/>' + summoner2.description + '</div></div>';
        }
        summonerListHtml += '</div>'

        /* Role */
        summonerListHtml += '<img class="med-img" src="img/lanes/' + summoner.role.toLowerCase() + '.png"/>';

        /* Runes */
        let combinedRunes = combineAllRunes(summoner.allRunes);
        let games = 0;
        let mostUsedRunes = null;
        for (const runeSet in combinedRunes) {
            if (combinedRunes[runeSet].wins + combinedRunes[runeSet].losses > games) {
                games = combinedRunes[runeSet].wins + combinedRunes[runeSet].losses;
                mostUsedRunes = combinedRunes[runeSet];
            }
        }
        summonerListHtml += '<div class="flex-column most-used-runes">';
        try {
            summonerListHtml += '<div class="dropdown-title">Most Used Runes</div>';

            summonerListHtml += '<div class="flex-row runes">';

            summonerListHtml += '<div class="rune main-rune"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[0]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[0]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[0]).longDesc + '</div></div>';

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[1]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[1]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[1]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[2]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[2]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[2]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[3]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[3]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[3]).longDesc + '</div></div>';
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[4]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[4]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[4]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[5]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[5]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[5]).longDesc + '</div></div>';
            summonerListHtml += '</div>'
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[6]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[6]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[6]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[7]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[7]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[7]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == mostUsedRunes.grandchild[8]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == mostUsedRunes.grandchild[8]).name + '</span><hr/>' + runesJson.find(r => r.id == mostUsedRunes.grandchild[8]).longDesc + '</div></div>';
            summonerListHtml += '</div></div>';
        } catch (error) {
            console.log({ Runesv1Error: error });
            summonerListHtml += '<div>No rune data</div></div>';
        }
        summonerListHtml += '</div>';


        /* Items */
        summonerListHtml += '<div class="flex-row items">';
        summoner.items.forEach(item => {
            if (item && item != 0 && item != 2421 && item != 2055) {
                let itemInfo = itemsJson.data[item];
                // if (!itemInfo.into) {
                summonerListHtml += '<div class="item-img"><img src="img/item/' + item + '.png"/>';
                summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + '</div>'
                summonerListHtml += '</div>';
                // }
            }
        })
        summonerListHtml += '</div>';
        summonerListHtml += '</div>';


        /* Drop down section */
        summonerListHtml += '<div class="dropdown-info flex-column">';
        // console.log({ allRunes: combinedRunes });
        /* All Runes */
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">All Runes</div>';
        // combinedRunes = combinedRunes.sort((a, b) => (b.wins / b.losses) - (a.wins / b.losses));
        for (const runeSet in combinedRunes) {
            /* Runes */
            let classes = combinedRunes[runeSet].wins > combinedRunes[runeSet].losses ? "flex-row runes winner" : "flex-row runes loser";
            summonerListHtml += '<div class="' + classes + '">';
            summonerListHtml += '<div class="summoner-region runes-winrate"><span class="wins">' + combinedRunes[runeSet].wins + '</span> - <span class="losses">' + combinedRunes[runeSet].losses + '</span></div>';
            summonerListHtml += '<div class="rune main-rune"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[0]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[0]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[0]).longDesc + '</div></div>';

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[1]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[1]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[1]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[2]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[2]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[2]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[3]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[3]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[3]).longDesc + '</div></div>';
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-row">'
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[4]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[4]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[4]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[5]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[5]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[5]).longDesc + '</div></div>';
            summonerListHtml += '</div>'
            summonerListHtml += '</div>'

            summonerListHtml += '<div class="flex-column">'
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[6]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[6]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[6]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[7]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[7]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[7]).longDesc + '</div></div>';
            summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[8]).iconPath.slice(1) + '"/>';
            summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[8]).name + '</span><hr/>' + runesJson.find(r => r.id == combinedRunes[runeSet].grandchild[8]).longDesc + '</div></div>';
            summonerListHtml += '</div>';
            summonerListHtml += '</div>';
        }
        summonerListHtml += '</div>';

        /* Skills */
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">Skill Order</div>';
        summoner.skillEvents.forEach((levelUp, index) => {
            if (index > 0) {
                summonerListHtml += '&#8594;';
            }
            summonerListHtml += '<span class="skill-letter' + convertSkillSlot(levelUp.skillSlot) + '">' + convertSkillSlot(levelUp.skillSlot) + '</span>';
        })
        summonerListHtml += '</div>';

        /* Items Timeline */
        let sortedItemEvents = groupByTimestamp(summoner.itemEvents);
        summonerListHtml += '<div class="timeline-item flex-row">';
        summonerListHtml += '<div class="dropdown-title">Example Item Timeline</div>';
        sortedItemEvents.forEach((e, index, array) => {
            summonerListHtml += '<div class="item-timeline-item">';
            e.forEach(item => {
                let itemInfo = itemsJson.data[item.itemId];
                if (itemInfo) {
                    summonerListHtml += '<div class="item-img"><img class="item-img" src="img/item/' + item.itemId + '.png"/>';
                    summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + '</div></div>';
                }
            })
            summonerListHtml += '<div class="item-timeline-time">' + convertTimestampToMinutesAndSeconds(e[0].timestamp) + '</div>';
            summonerListHtml += '</div>';
            if (index !== array.length - 1) {
                summonerListHtml += '<div>&#8594;</div>';
            }
        })
        summonerListHtml += '</div>';

        /* Drop down end */
        summonerListHtml += '</div>';

    })
    document.getElementById('players-list').innerHTML = summonerListHtml;
}

function fetchSummoners() {

    let spinner = `<svg width="64" height="64" fill="cyan" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_zWVm{animation:spinner_5QiW 1.2s linear infinite,spinner_PnZo 1.2s linear infinite}.spinner_gfyD{animation:spinner_5QiW 1.2s linear infinite,spinner_4j7o 1.2s linear infinite;animation-delay:.1s}.spinner_T5JJ{animation:spinner_5QiW 1.2s linear infinite,spinner_fLK4 1.2s linear infinite;animation-delay:.1s}.spinner_E3Wz{animation:spinner_5QiW 1.2s linear infinite,spinner_tDji 1.2s linear infinite;animation-delay:.2s}.spinner_g2vs{animation:spinner_5QiW 1.2s linear infinite,spinner_CMiT 1.2s linear infinite;animation-delay:.2s}.spinner_ctYB{animation:spinner_5QiW 1.2s linear infinite,spinner_cHKR 1.2s linear infinite;animation-delay:.2s}.spinner_BDNj{animation:spinner_5QiW 1.2s linear infinite,spinner_Re6e 1.2s linear infinite;animation-delay:.3s}.spinner_rCw3{animation:spinner_5QiW 1.2s linear infinite,spinner_EJmJ 1.2s linear infinite;animation-delay:.3s}.spinner_Rszm{animation:spinner_5QiW 1.2s linear infinite,spinner_YJOP 1.2s linear infinite;animation-delay:.4s}@keyframes spinner_5QiW{0%,50%{width:7.33px;height:7.33px}25%{width:1.33px;height:1.33px}}@keyframes spinner_PnZo{0%,50%{x:1px;y:1px}25%{x:4px;y:4px}}@keyframes spinner_4j7o{0%,50%{x:8.33px;y:1px}25%{x:11.33px;y:4px}}@keyframes spinner_fLK4{0%,50%{x:1px;y:8.33px}25%{x:4px;y:11.33px}}@keyframes spinner_tDji{0%,50%{x:15.66px;y:1px}25%{x:18.66px;y:4px}}@keyframes spinner_CMiT{0%,50%{x:8.33px;y:8.33px}25%{x:11.33px;y:11.33px}}@keyframes spinner_cHKR{0%,50%{x:1px;y:15.66px}25%{x:4px;y:18.66px}}@keyframes spinner_Re6e{0%,50%{x:15.66px;y:8.33px}25%{x:18.66px;y:11.33px}}@keyframes spinner_EJmJ{0%,50%{x:8.33px;y:15.66px}25%{x:11.33px;y:18.66px}}@keyframes spinner_YJOP{0%,50%{x:15.66px;y:15.66px}25%{x:18.66px;y:18.66px}}</style><rect class="spinner_zWVm" x="1" y="1" width="7.33" height="7.33"/><rect class="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33"/><rect class="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33"/><rect class="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33"/><rect class="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33"/><rect class="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33"/><rect class="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33"/><rect class="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33"/><rect class="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33"/></svg>`;
    document.getElementById('players-list').innerHTML = '<div class="loader">' + spinner + '</div>';


    // const apiUrl = `http://localhost:3000/summoners`;
    const apiUrl = 'https://getsummoners.azurewebsites.net/api/HttpTrigger1?code=pwBP6CP0m7dXL-Jr5z355I0O9XN3mHvsTy3MJUiMwXvwAzFu8PeHcw==';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            createPlayerList(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}

fetchSummoners();

// let summoners = [{
//     riotName: "Nathaniel",
//     riotTag: "NA1",
//     region: "NA",
//     rank: "Master",
//     lp: "93",
//     profileIconId: "577",
//     wins: "139",
//     losses: "128"
// },
// {
//     riotName: "Nathaniel",
//     riotTag: "NA1",
//     region: "NA",
//     rank: "Master",
//     lp: "93",
//     profileIconId: "577",
//     wins: "139",
//     losses: "128"
// }];

// let summonerListHtml = '';
// let testItems = ['6657', '3020', '3157'];
// let testSkillOrder = ['E', 'Q', 'W'];
// let runes = [
//     8112,
//     8126,
//     8138,
//     8105,
//     8014,
//     8009,
//     5005,
//     5008,
//     5002
// ]

// summoners.forEach(summoner => {
//     summonerListHtml += '<div class="flex-row summoner-card">';
//     summonerListHtml += '<div class="flex-row"><img class="med-img" src="img/profileIcon/' + summoner.profileIconId + '.png"/>';
//     summonerListHtml += '<div class="summoner-name">&nbsp;&nbsp;' + summoner.riotName + '<span class="riot-tag">#' + summoner.riotTag + '</span></div></div>';

//     summonerListHtml += '<div>' + summoner.rank + ' ' + summoner.lp + '</div>';
//     summonerListHtml += '<img class="med-img" src="img/lanes/middle.png"/>';

//     summonerListHtml += '<div class="flex-row">';
//     testItems.forEach(item => {
//         summonerListHtml += '<div class="item-img"><img src="img/item/' + item + '.png"/>';
//         let itemInfo = itemsJson.data[item];
//         summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + itemInfo.name + '</span><hr/>' + itemInfo.description + '</div></div>'
//     })
//     summonerListHtml += '</div>';

//     summonerListHtml += '<div class="flex-row">';
//     testSkillOrder.forEach((skill, id) => {
//         summonerListHtml += '<div class="img-container"><span class="skill">' + skill + '</span><img src="img/spell/' + skill + '.png"/>' + (id == 2 ? '' : '<span class="full-height">&#8594;</span>') + '</div>';
//     })
//     summonerListHtml += '</div>';

//     /* Runes */
//     summonerListHtml += '<div class="flex-row">';

//     summonerListHtml += '<div class="rune main-rune"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[0]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[0]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[0]).longDesc + '</div></div>';

//     summonerListHtml += '<div class="flex-column">'
//     summonerListHtml += '<div class="flex-row">'
//     summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[1]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[1]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[1]).longDesc + '</div></div>';
//     summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[2]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[2]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[2]).longDesc + '</div></div>';
//     summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[3]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[3]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[3]).longDesc + '</div></div>';
//     summonerListHtml += '</div>'

//     summonerListHtml += '<div class="flex-row">'
//     summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[4]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[4]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[4]).longDesc + '</div></div>';
//     summonerListHtml += '<div class="rune"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[5]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[5]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[5]).longDesc + '</div></div>';
//     summonerListHtml += '</div>'
//     summonerListHtml += '</div>'

//     summonerListHtml += '<div class="flex-column">'
//     summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[6]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[6]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[6]).longDesc + '</div></div>';
//     summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[7]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[7]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[7]).longDesc + '</div></div>';
//     summonerListHtml += '<div class="rune stat-mod"><img class="rune-img" src="' + runesJson.find(r => r.id == runes[8]).iconPath.slice(1) + '"/>';
//     summonerListHtml += '<div class="tooltiptext"><span class="rune-title">' + runesJson.find(r => r.id == runes[8]).name + '</span><hr/>' + runesJson.find(r => r.id == runes[8]).longDesc + '</div></div>';
//     summonerListHtml += '</div>';
//     summonerListHtml += '</div></div><hr/>';
// })

// document.getElementById('players-list').innerHTML = summonerListHtml;



// /* Runes - All */

// console.log({ runeJson: runesJson });
// const runeElement = document.getElementById('rune-page');
// runesJson.forEach(type => {
//     runeElement.innerHTML += '<div>' + type.name + '</div>';
//     type.slots.forEach(row => {
//         let rowHtml = '<div>';
//         row.runes.forEach((rune, id) => {
//             let active = Math.random() <= .25 ? 'active' : '';
//             rowHtml += '<div class="rune"><img class="rune-img ' + active + '" src="img/' + rune.icon + '"/>';
//             rowHtml += '<div class="tooltiptext"><span class="rune-title">' + rune.name + '</span><hr/>' + rune.longDesc + '</div></div>'
//         })
//         rowHtml += '</div>';
//         runeElement.innerHTML += rowHtml;
//     })
// })