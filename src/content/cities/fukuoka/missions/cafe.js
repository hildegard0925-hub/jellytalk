const cafeMissions = [
  {
    id: 'coffee-order',

    text: '커피 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
주문을 먼저 물어보세요.
`,
  },

  {
    id: 'size-question',

    text: '음료 사이즈 선택하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
음료 사이즈를 물어보세요.
`,
  },

  {
    id: 'takeout-question',

    text: '포장 여부 답하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
매장 이용인지 포장인지 물어보세요.
`,
  },

  {
    id: 'dessert-recommend',

    text: '디저트 추천 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
인기 있는 디저트를 추천하세요.
`,
  },

  {
    id: 'wifi-question',

    text: '와이파이 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
와이파이 관련 안내를 해주세요.
`,
  },

  {
    id: 'window-seat',

    text: '창가 자리 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
자리를 안내하고 좌석 상황을 설명하세요.
`,
  },

  {
    id: 'custom-order',

    text: '음료 커스텀 주문하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
음료 커스텀 옵션을 안내하세요.
`,
  },

  {
    id: 'quiet-seat',

    text: '조용한 자리 요청하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
좌석 상황을 설명하고 자리를 안내하세요.
`,
  },

  {
    id: 'spilled-drink',

    text: '음료를 쏟은 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
괜찮은지 물어보고 상황을 확인하세요.
`,
  },

  {
    id: 'staff-smalltalk',

    text: '직원 스몰토크 이어가기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가볍게 말을 걸고 스몰토크를 시작하세요.
`,
  },
]

export default cafeMissions