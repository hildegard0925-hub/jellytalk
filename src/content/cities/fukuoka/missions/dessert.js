const dessertMissions = [
  {
    id: 'dessert-order',

    text: '디저트 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
주문을 도와줄지 물어보세요.
`,
  },

  {
    id: 'popular-dessert',

    text: '인기 메뉴 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
가장 인기 있는 디저트를 추천하세요.
`,
  },

  {
    id: 'seasonal-menu',

    text: '시즌 한정 메뉴 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
시즌 한정 메뉴를 소개하세요.
`,
  },

  {
    id: 'sweetness-question',

    text: '많이 달지 않은 메뉴 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
디저트 맛과 특징을 설명하세요.
`,
  },

  {
    id: 'takeout-dessert',

    text: '포장 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
매장 이용인지 포장인지 물어보세요.
`,
  },

  {
    id: 'gift-dessert',

    text: '선물용 추천받기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
선물용 디저트를 추천하세요.
`,
  },

  {
    id: 'limited-dessert',

    text: '한정 디저트 설명 듣기',

    difficulty: 'special',

    exp: 35,

    prompt: `
오늘 한정 디저트를 소개하세요.
`,
  },

  {
    id: 'photo-conversation',

    text: '사진 찍다가 직원과 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가볍게 말을 걸고 디저트 이야기를 시작하세요.
`,
  },
]

export default dessertMissions