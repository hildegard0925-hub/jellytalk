const tempuraMissions = [
  {
    id: 'tempura-order',

    text: '덴푸라 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 메뉴를 보고 있습니다.

주문을 먼저 받아주세요.

사용자가 덴푸라 메뉴를 자연스럽게 주문하도록 대화를 이어가세요.
`,
  },

  {
    id: 'sauce-question',

    text: '추천 소스 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
덴푸라 메뉴를 설명하는 상황입니다.

추천 소스나 먹는 방법을 짧게 설명하세요.

사용자가 추가 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'rice-size',

    text: '밥 양 조절 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
주문을 받는 상황입니다.

밥 양 조절이 가능하다고 짧게 안내하세요.

사용자가 원하는 양을 말할 수 있도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'recommended-set',

    text: '추천 세트 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 세트 메뉴를 고민하고 있습니다.

가장 인기 있는 덴푸라 세트를 추천하세요.

구성도 짧게 설명해주세요.
`,
  },

  {
    id: 'ingredient-question',

    text: '튀김 재료 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
덴푸라 메뉴 재료를 설명해주세요.

어떤 재료가 들어가는지 짧게 이야기하세요.

사용자가 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'crispy-preference',

    text: '바삭한 메뉴 추천받기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 식감을 고민하고 있습니다.

더 바삭한 메뉴를 먼저 추천하세요.

차이점도 짧게 설명해주세요.
`,
  },

  {
    id: 'wait-time',

    text: '조리 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
가게가 조금 바쁜 상황입니다.

조리 시간이 걸린다고 먼저 안내하세요.

사용자가 기다리는 시간을 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'special-course',

    text: '코스 메뉴 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
덴푸라 코스 메뉴를 설명해주세요.

나오는 순서와 특징을 짧게 이야기하세요.

사용자가 반응하거나 질문할 수 있도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'chef-conversation',

    text: '요리사 질문에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
덴푸라 요리사 역할도 함께 해주세요.

사용자에게 먼저 가볍게 말을 걸어보세요.

음식 맛이나 일본 여행 이야기를 자연스럽게 이어가세요.
`,
  },

  {
    id: 'seasonal-menu',

    text: '계절 한정 메뉴 설명 듣기',

    difficulty: 'special',

    exp: 35,

    prompt: `
계절 한정 덴푸라 메뉴를 먼저 소개하세요.

재료와 특징을 자연스럽게 설명해주세요.

사용자가 질문하거나 반응할 수 있도록 대화를 이어가세요.
`,
  },
]

export default tempuraMissions