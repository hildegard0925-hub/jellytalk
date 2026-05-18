const breakfastMissions = [
  {
    id: 'queue-question',

    text: '대기 시간 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
가게 앞에 줄이 길게 서 있습니다.

먼저 몇 명인지 물어보세요.

대기 시간을 짧게 안내하세요.
`,
  },

  {
    id: 'menu-order',

    text: '아침 메뉴 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 자리에 앉았습니다.

메뉴 주문을 먼저 받아주세요.

사용자가 일본식 아침 메뉴를 주문하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'recommended-breakfast',

    text: '추천 메뉴 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 메뉴를 고민하고 있습니다.

가장 인기 있는 아침 메뉴를 추천하세요.

간단한 설명도 함께 해주세요.
`,
  },

  {
    id: 'seat-sharing',

    text: '합석 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
가게 안 자리가 부족한 상황입니다.

합석 가능 여부를 먼저 설명하세요.

사용자가 반응하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'set-menu-question',

    text: '세트 구성 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
아침 세트 메뉴를 설명해주세요.

포함된 음식들을 하나씩 짧게 설명하세요.

사용자가 추가 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'waiting-list',

    text: '대기 명단 작성 질문 이해하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
대기 손님이 많은 상황입니다.

대기 명단 작성 방법을 설명하세요.

사용자가 이해했는지 짧게 확인하세요.
`,
  },

  {
    id: 'busy-staff',

    text: '바쁜 직원과 빠르게 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가게가 매우 바쁜 상황입니다.

짧고 빠르게 주문을 받으세요.

실제 일본 아침식당처럼 자연스럽게 진행하세요.
`,
  },

  {
    id: 'local-customer-talk',

    text: '옆 손님의 말에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
옆자리 일본 손님 역할도 함께 해주세요.

사용자에게 먼저 가볍게 말을 걸어보세요.

짧고 자연스럽게 대화를 이어가세요.
`,
  },
]

export default breakfastMissions