const restaurantMissions = [
  {
    id: 'menu-recommend',

    text: '추천 메뉴 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 메뉴를 보고 고민하고 있습니다.

가장 인기 있는 메뉴를 먼저 추천하세요.

맛이나 특징도 짧게 설명해주세요.
`,
  },

  {
    id: 'drink-order',

    text: '음료 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 자리에 앉았습니다.

먼저 음료 주문을 받아주세요.

사용자가 자연스럽게 음료를 주문하도록 대화를 이어가세요.
`,
  },

  {
    id: 'payment',

    text: '계산 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자의 식사가 끝난 상황입니다.

추가 주문이 필요한지 먼저 물어보세요.

사용자가 계산을 요청하도록 자연스럽게 반응하세요.
`,
  },

  {
    id: 'allergy-question',

    text: '알레르기 재료 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 메뉴를 자세히 보고 있습니다.

음식 재료를 짧게 설명하세요.

사용자가 알레르기 관련 질문을 할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'seat-request',

    text: '창가 자리 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
식당 자리를 안내하려고 합니다.

현재 자리 상황을 설명하세요.

사용자가 원하는 자리를 말할 수 있도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'joke-reaction',

    text: '직원의 농담에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
밝고 편한 분위기로 응대하세요.

주문 중 가벼운 농담이나 웃긴 반응을 한 번 해보세요.

사용자가 자연스럽게 반응하도록 대화를 이어가세요.
`,
  },

  {
    id: 'chef-recommendation',

    text: '직원 추천 메뉴 듣고 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
오늘 가장 추천하는 메뉴를 설명해주세요.

왜 인기 있는지도 자연스럽게 이야기하세요.

사용자가 질문하거나 반응할 수 있도록 대화를 이어가세요.
`,
  },

  {
    id: 'spicy-level',

    text: '맵기 조절 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 메뉴를 고르고 있습니다.

맵기 조절이 가능하다고 짧게 안내하세요.

사용자가 원하는 맵기를 말할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'extra-topping',

    text: '토핑 추가 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
주문을 받는 상황입니다.

추가 가능한 토핑을 짧게 설명하세요.

사용자가 원하는 토핑을 요청하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'wait-time',

    text: '대기 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
가게 앞에 손님이 많이 기다리고 있습니다.

먼저 몇 명인지 물어보세요.

대기 시간을 자연스럽게 안내하세요.
`,
  },

  {
    id: 'reservation-check',

    text: '예약 여부 확인하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
가게 안이 거의 만석입니다.

예약 여부를 먼저 확인하세요.

사용자가 예약 없이 가능한지 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'wrong-order',

    text: '잘못 나온 음식 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자에게 주문한 음식과 다른 메뉴를 제공하세요.

무슨 문제가 있는지 먼저 물어보세요.

상황을 자연스럽게 해결하는 대화를 이어가세요.
`,
  },
]

export default restaurantMissions