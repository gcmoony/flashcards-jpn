const data = [
  {
    setName: "hiragana",
    characterSet: [
      {
        charName: "vowels",
        data: [
          { "id": 1, "character_en": "a", "character_jp": "あ" },
          { "id": 2, "character_en": "i", "character_jp": "い" },
          { "id": 3, "character_en": "u", "character_jp": "う" },
          { "id": 4, "character_en": "e", "character_jp": "え" },
          { "id": 5, "character_en": "o", "character_jp": "お" }
        ]
      }
      ,
      {
        charName: "k",
        data: [
          { "id": 6, "character_en": "ka", "character_jp": "か" },
          { "id": 8, "character_en": "ki", "character_jp": "き" },
          { "id": 10, "character_en": "ku", "character_jp": "く" },
          { "id": 12, "character_en": "ke", "character_jp": "け" },
          { "id": 14, "character_en": "ko", "character_jp": "こ" },

          { "id": 7, "character_en": "ga", "character_jp": "が" },
          { "id": 9, "character_en": "gi", "character_jp": "ぎ" },
          { "id": 11, "character_en": "gu", "character_jp": "ぐ" },
          { "id": 13, "character_en": "ge", "character_jp": "げ" },
          { "id": 15, "character_en": "go", "character_jp": "ご" }
        ]
      },
      {
        charName: "s",
        data: [
          { "id": 16, "character_en": "sa", "character_jp": "さ" },
          { "id": 18, "character_en": "shi", "character_jp": "し" },
          { "id": 20, "character_en": "su", "character_jp": "す" },
          { "id": 22, "character_en": "se", "character_jp": "せ" },
          { "id": 24, "character_en": "so", "character_jp": "そ" },

          { "id": 17, "character_en": "za", "character_jp": "ざ" },

          { "id": 19, "character_en": "ji", "character_jp": "じ" },

          { "id": 21, "character_en": "zu", "character_jp": "ず" },

          { "id": 23, "character_en": "ze", "character_jp": "ぜ" },

          { "id": 25, "character_en": "zo", "character_jp": "ぞ" }
        ]
      },
      {
        charName: "t",
        data: [
          { "id": 26, "character_en": "ta", "character_jp": "た" },
          { "id": 28, "character_en": "chi", "character_jp": "ち" },
          { "id": 30, "character_en": "tsu", "character_jp": "つ" },
          { "id": 32, "character_en": "te", "character_jp": "て" },
          { "id": 34, "character_en": "to", "character_jp": "と" },

          { "id": 27, "character_en": "da", "character_jp": "だ" },
          { "id": 29, "character_en": "ji", "character_jp": "ぢ" },
          { "id": 31, "character_en": "zu", "character_jp": "づ" },
          { "id": 33, "character_en": "de", "character_jp": "で" },
          { "id": 35, "character_en": "do", "character_jp": "ど" }
        ]
      },
      {
        charName: "n",
        data: [
          { "id": 36, "character_en": "na", "character_jp": "な" },
          { "id": 37, "character_en": "ni", "character_jp": "に" },
          { "id": 38, "character_en": "nu", "character_jp": "ぬ" },
          { "id": 39, "character_en": "ne", "character_jp": "ね" },
          { "id": 40, "character_en": "no", "character_jp": "の" }
        ]
      },
      {
        charName: "h",
        data: [
          { "id": 61, "character_en": "ha", "character_jp": "は" },
          { "id": 64, "character_en": "hi", "character_jp": "ひ" },
          { "id": 67, "character_en": "fu", "character_jp": "ふ" },
          { "id": 70, "character_en": "he", "character_jp": "へ" },
          { "id": 73, "character_en": "ho", "character_jp": "ほ" },
          { "id": 63, "character_en": "pa", "character_jp": "ぱ" },
          { "id": 66, "character_en": "pi", "character_jp": "ぴ" },
          { "id": 69, "character_en": "pu", "character_jp": "ぷ" },
          { "id": 72, "character_en": "pe", "character_jp": "ぺ" },
          { "id": 75, "character_en": "po", "character_jp": "ぽ" },

          { "id": 62, "character_en": "ba", "character_jp": "ば" },
          { "id": 65, "character_en": "bi", "character_jp": "び" },
          { "id": 68, "character_en": "bu", "character_jp": "ぶ" },
          { "id": 71, "character_en": "be", "character_jp": "べ" },
          { "id": 74, "character_en": "bo", "character_jp": "ぼ" },
        ]
      },
      {
        charName: "m",
        data: [
          { "id": 76, "character_en": "ma", "character_jp": "ま" },
          { "id": 77, "character_en": "mi", "character_jp": "み" },
          { "id": 78, "character_en": "mu", "character_jp": "む" },
          { "id": 79, "character_en": "me", "character_jp": "め" },
          { "id": 80, "character_en": "mo", "character_jp": "も" }
        ]
      },
      {
        charName: "y",
        data: [
          { "id": 81, "character_en": "ya", "character_jp": "や" },
          { "id": 82, "character_en": "yu", "character_jp": "ゆ" },
          { "id": 83, "character_en": "yo", "character_jp": "よ" }
        ]
      },
      {
        charName: "r",
        data: [
          { "id": 84, "character_en": "ra", "character_jp": "ら" },
          { "id": 85, "character_en": "ri", "character_jp": "り" },
          { "id": 86, "character_en": "ru", "character_jp": "る" },
          { "id": 87, "character_en": "re", "character_jp": "れ" },
          { "id": 88, "character_en": "ro", "character_jp": "ろ" }
        ]
      },
      {
        charName: "w",
        data: [
          { "id": 89, "character_en": "wa", "character_jp": "わ" },
          { "id": 90, "character_en": "wo", "character_jp": "を" }
        ]
      },
      {
        charName: "no vowel n",
        data: [
          { "id": 91, "character_en": "n", "character_jp": "ん" }
        ]
      }
    ],
  },
  {
    setName: "katakana",
    characterSet: [
      {
        charName: "vowels",
        data: [
          { "id": 0, "character_en": "a", "character_jp": "ア" },
          { "id": 1, "character_en": "i", "character_jp": "イ" },
          { "id": 2, "character_en": "u", "character_jp": "ウ" },
          { "id": 3, "character_en": "e", "character_jp": "エ" },
          { "id": 4, "character_en": "o", "character_jp": "オ" }
        ]
      },
      {
        charName: "k",
        data: [
          { "id": 5, "character_en": "ka", "character_jp": "カ" },
          { "id": 7, "character_en": "ki", "character_jp": "キ" },
          { "id": 9, "character_en": "ku", "character_jp": "ク" },
          { "id": 11, "character_en": "ke", "character_jp": "ケ" },
          { "id": 13, "character_en": "ko", "character_jp": "コ" },

          { "id": 6, "character_en": "ga", "character_jp": "ガ" },

          { "id": 8, "character_en": "gi", "character_jp": "ギ" },
          { "id": 10, "character_en": "gu", "character_jp": "グ" },
          { "id": 12, "character_en": "ge", "character_jp": "ゲ" },
          { "id": 14, "character_en": "go", "character_jp": "ゴ" }
        ]
      },
      {
        charName: "s",
        data: [
          { "id": 15, "character_en": "sa", "character_jp": "サ" },
          { "id": 17, "character_en": "shi", "character_jp": "シ" },
          { "id": 19, "character_en": "su", "character_jp": "ス" },
          { "id": 21, "character_en": "se", "character_jp": "セ" },
          { "id": 23, "character_en": "so", "character_jp": "ソ" },

          { "id": 16, "character_en": "za", "character_jp": "ザ" },
          { "id": 18, "character_en": "ji", "character_jp": "ジ" },
          { "id": 20, "character_en": "zu", "character_jp": "ズ" },
          { "id": 22, "character_en": "ze", "character_jp": "ゼ" },
          { "id": 24, "character_en": "zo", "character_jp": "ゾ" }
        ]
      },
      {
        charName: "t",
        data: [
          { "id": 25, "character_en": "ta", "character_jp": "タ" },
          { "id": 27, "character_en": "chi", "character_jp": "チ" },
          { "id": 29, "character_en": "tsu", "character_jp": "ツ" },
          { "id": 31, "character_en": "te", "character_jp": "テ" },
          { "id": 33, "character_en": "to", "character_jp": "ト" },

          { "id": 26, "character_en": "da", "character_jp": "ダ" },
          { "id": 28, "character_en": "ji", "character_jp": "ヂ" },
          { "id": 30, "character_en": "zu", "character_jp": "ヅ" },
          { "id": 32, "character_en": "de", "character_jp": "デ" },
          { "id": 34, "character_en": "do", "character_jp": "ド" }
        ]
      },
      {
        charName: "n",
        data: [
          { "id": 35, "character_en": "na", "character_jp": "ナ" },
          { "id": 36, "character_en": "ni", "character_jp": "ニ" },
          { "id": 37, "character_en": "nu", "character_jp": "ヌ" },
          { "id": 38, "character_en": "ne", "character_jp": "ネ" },
          { "id": 39, "character_en": "no", "character_jp": "ノ" }
        ]
      },
      {
        charName: "h",
        data: [
          { "id": 40, "character_en": "ha", "character_jp": "ハ" },
          { "id": 43, "character_en": "hi", "character_jp": "ヒ" },
          { "id": 46, "character_en": "fu", "character_jp": "フ" },
          { "id": 49, "character_en": "he", "character_jp": "ヘ" },
          { "id": 52, "character_en": "ho", "character_jp": "ホ" },
          { "id": 42, "character_en": "pa", "character_jp": "パ" },
          { "id": 45, "character_en": "pi", "character_jp": "ピ" },
          { "id": 48, "character_en": "pu", "character_jp": "プ" },
          { "id": 51, "character_en": "pe", "character_jp": "ペ" },
          { "id": 54, "character_en": "po", "character_jp": "ポ" },

          { "id": 41, "character_en": "ba", "character_jp": "バ" },
          { "id": 44, "character_en": "bi", "character_jp": "ビ" },
          { "id": 47, "character_en": "bu", "character_jp": "ブ" },
          { "id": 50, "character_en": "be", "character_jp": "ベ" },
          { "id": 53, "character_en": "bo", "character_jp": "ボ" },
        ]
      },
      {
        charName: "m",
        data: [
          { "id": 55, "character_en": "ma", "character_jp": "マ" },
          { "id": 56, "character_en": "mi", "character_jp": "ミ" },
          { "id": 57, "character_en": "mu", "character_jp": "ム" },
          { "id": 58, "character_en": "me", "character_jp": "メ" },
          { "id": 59, "character_en": "mo", "character_jp": "モ" }
        ]
      },
      {
        charName: "y",
        data: [
          { "id": 60, "character_en": "ya", "character_jp": "ヤ" },
          { "id": 61, "character_en": "yu", "character_jp": "ユ" },
          { "id": 62, "character_en": "yo", "character_jp": "ヨ" }
        ]
      },
      {
        charName: "r",
        data: [
          { "id": 63, "character_en": "ra", "character_jp": "ラ" },
          { "id": 64, "character_en": "ri", "character_jp": "リ" },
          { "id": 65, "character_en": "ru", "character_jp": "ル" },
          { "id": 66, "character_en": "re", "character_jp": "レ" },
          { "id": 67, "character_en": "ro", "character_jp": "ロ" }
        ]
      },
      {
        charName: "w",
        data: [
          { "id": 68, "character_en": "wa", "character_jp": "ワ" },
          { "id": 69, "character_en": "wo", "character_jp": "ヲ" }
        ]
      },
      {
        charName: "no vowel n",
        data: [
          { "id": 70, "character_en": "n", "character_jp": "ン" }
        ]
      }
    ]
  }
]

export default data;