const dessertMissions = [
  {
    id: 'dessert-order',

    text: '디저트 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 디저트 진열대를 보고 있습니다.

먼저 주문을 도와줄지 물어보세요.

사용자가 디저트를 주문하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'popular-dessert',

    text: '인기 메뉴 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 메뉴를 고민하고 있습니다.

가장 인기 있는 디저트를 먼저 추천하세요.

짧게 특징도 설명해주세요.
`,
  },

  {
    id: 'seasonal-menu',

    text: '시즌 한정 메뉴 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
계절 한정 디저트가 진열되어 있습니다.

한정 메뉴를 먼저 소개하세요.

사용자가 관심을 보이도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'sweetness-question',

    text: '많이 달지 않은 메뉴 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 디저트를 고르며 고민하고 있습니다.

맛이나 특징을 짧게 설명하세요.

사용자가 덜 단 메뉴를 질문하도록 자연스럽게 유도하세요.
`,
  },

  {
    id: 'takeout-dessert',

    text: '포장 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 디저트를 주문했습니다.

매장에서 먹을지 포장할지 먼저 물어보세요.

포장 관련 안내도 짧게 해주세요.
`,
  },

  {
    id: 'gift-dessert',

    text: '선물용 추천받기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 선물용 디저트를 찾고 있습니다.

인기 있는 선물용 상품을 추천하세요.

포장 여부도 함께 설명해주세요.
`,
  },

  {
    id: 'limited-dessert',

    text: '한정 디저트 설명 듣기',

    difficulty: 'special',

    exp: 35,

    prompt: `
오늘 한정 디저트를 소개해주세요.

재료나 특징을 자연스럽게 설명하세요.

사용자가 질문하거나 반응할 수 있도록 대화를 이어가세요.
`,
  },

  {
    id: 'photo-conversation',

    text: '사진 찍다가 직원과 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 디저트 사진을 찍고 있습니다.

먼저 가볍게 말을 걸어보세요.

추천 메뉴나 인기 디저트 이야기를 자연스럽게 이어가세요.
`,
  },
]

export default dessertMissions