const tempuraMissions = [
  {
    id: 'tempura-order',

    text: '덴푸라 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
주문을 받아주세요.
`,
  },

  {
    id: 'sauce-question',

    text: '추천 소스 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
추천 소스와 먹는 방법을 설명하세요.
`,
  },

  {
    id: 'rice-size',

    text: '밥 양 조절 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
밥 양 조절 가능 여부를 안내하세요.
`,
  },

  {
    id: 'recommended-set',

    text: '추천 세트 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
추천 세트를 소개하세요.
`,
  },

  {
    id: 'ingredient-question',

    text: '튀김 재료 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
튀김 재료를 설명하세요.
`,
  },

  {
    id: 'crispy-preference',

    text: '바삭한 메뉴 추천받기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
더 바삭한 메뉴를 추천하세요.
`,
  },

  {
    id: 'wait-time',

    text: '조리 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
조리 시간을 안내하세요.
`,
  },

  {
    id: 'special-course',

    text: '코스 메뉴 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
코스 메뉴를 설명하세요.
`,
  },

  {
    id: 'chef-conversation',

    text: '요리사 질문에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가볍게 말을 걸고 대화를 시작하세요.
`,
  },

  {
    id: 'seasonal-menu',

    text: '계절 한정 메뉴 설명 듣기',

    difficulty: 'special',

    exp: 35,

    prompt: `
계절 한정 메뉴를 소개하세요.
`,
  },
]

export default tempuraMissions