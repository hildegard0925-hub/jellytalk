const breakfastMissions = [
  {
    id: 'queue-question',

    text: '대기 시간 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
몇 명인지 물어보고 대기 시간을 안내하세요.
`,
  },

  {
    id: 'menu-order',

    text: '아침 메뉴 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
메뉴 주문을 받아주세요.
`,
  },

  {
    id: 'recommended-breakfast',

    text: '추천 메뉴 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
가장 인기 있는 아침 메뉴를 추천하세요.
`,
  },

  {
    id: 'seat-sharing',

    text: '합석 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
합석 가능 여부를 설명하세요.
`,
  },

  {
    id: 'set-menu-question',

    text: '세트 구성 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
세트 메뉴 구성을 설명하세요.
`,
  },

  {
    id: 'waiting-list',

    text: '대기 명단 작성 질문 이해하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
대기 명단 작성 방법을 설명하세요.
`,
  },

  {
    id: 'busy-staff',

    text: '바쁜 직원과 빠르게 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
빠르게 주문을 받아주세요.
`,
  },

  {
    id: 'local-customer-talk',

    text: '옆 손님의 말에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가볍게 말을 걸고 스몰토크를 시작하세요.
`,
  },
]

export default breakfastMissions