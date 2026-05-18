const restaurantMissions = [
  {
    id: 'menu-recommend',

    text: '추천 메뉴 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
가장 인기 있는 메뉴를 추천하세요.
`,
  },

  {
    id: 'drink-order',

    text: '음료 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
음료 주문을 받아주세요.
`,
  },

  {
    id: 'payment',

    text: '계산 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
추가 주문이 필요한지 물어보세요.
`,
  },

  {
    id: 'allergy-question',

    text: '알레르기 재료 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
음식 재료를 설명하세요.
`,
  },

  {
    id: 'seat-request',

    text: '창가 자리 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
현재 자리 상황을 설명하세요.
`,
  },

  {
    id: 'joke-reaction',

    text: '직원의 농담에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가벼운 농담을 하며 반응하세요.
`,
  },

  {
    id: 'chef-recommendation',

    text: '직원 추천 메뉴 듣고 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
오늘 가장 추천하는 메뉴를 소개하세요.
`,
  },

  {
    id: 'spicy-level',

    text: '맵기 조절 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
맵기 조절 가능 여부를 안내하세요.
`,
  },

  {
    id: 'extra-topping',

    text: '토핑 추가 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
추가 가능한 토핑을 설명하세요.
`,
  },

  {
    id: 'wait-time',

    text: '대기 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
몇 명인지 물어보고 대기 시간을 안내하세요.
`,
  },

  {
    id: 'reservation-check',

    text: '예약 여부 확인하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
예약 여부를 확인하세요.
`,
  },

  {
    id: 'wrong-order',

    text: '잘못 나온 음식 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
문제가 있는 메뉴를 확인하고 상황을 해결하세요.
`,
  },
]

export default restaurantMissions