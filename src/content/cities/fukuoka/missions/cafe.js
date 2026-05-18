const cafeMissions = [
  {
    id: 'coffee-order',

    text: '커피 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 카페에 들어왔습니다.

먼저 인사를 하고,
주문을 물어보세요.

사용자가 커피를 주문하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'size-question',

    text: '음료 사이즈 선택하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 음료를 주문했습니다.

반드시 음료 사이즈를 물어보세요.

예:
「サイズはいかがしますか？」

사용자가 일본어로 답하도록 짧게 대화를 이어가세요.
`,
  },

  {
    id: 'takeout-question',

    text: '포장 여부 답하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 주문을 마쳤습니다.

반드시 매장에서 먹을지 포장할지 물어보세요.

짧고 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'dessert-recommend',

    text: '디저트 추천 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 메뉴를 고민하고 있습니다.

인기 있는 디저트를 먼저 추천하세요.

맛이나 특징도 짧게 설명하세요.
`,
  },

  {
    id: 'wifi-question',

    text: '와이파이 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 카페 안을 둘러보고 있습니다.

와이파이 관련 안내문이 있는 것처럼 자연스럽게 대화를 시작하세요.

사용자가 와이파이에 대해 질문하도록 유도하세요.
`,
  },

  {
    id: 'window-seat',

    text: '창가 자리 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
카페 자리가 거의 꽉 찬 상황입니다.

사용자를 자리로 안내하려고 하세요.

창가 자리 여부를 사용자가 물어볼 수 있도록 자연스럽게 반응하세요.
`,
  },

  {
    id: 'custom-order',

    text: '음료 커스텀 주문하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 음료를 주문하려고 합니다.

얼음 양, 시럽, 우유 변경 등이 가능하다고 짧게 안내하세요.

사용자가 원하는 방식으로 주문하도록 대화를 이어가세요.
`,
  },

  {
    id: 'quiet-seat',

    text: '조용한 자리 요청하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
카페 안이 조금 시끄러운 상황입니다.

사용자를 자리로 안내하려고 하세요.

사용자가 조용한 자리를 요청할 수 있도록 자연스럽게 반응하세요.
`,
  },

  {
    id: 'spilled-drink',

    text: '음료를 쏟은 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 음료를 쏟았습니다.

괜찮은지 먼저 물어보세요.

무슨 상황인지 설명하도록 사용자를 자연스럽게 유도하세요.
`,
  },

  {
    id: 'staff-smalltalk',

    text: '직원 스몰토크 이어가기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자에게 먼저 가벼운 말을 걸어보세요.

예:
- 어디서 왔는지
- 일본 여행 중인지
- 어떤 음료를 좋아하는지

짧고 자연스럽게 스몰토크를 이어가세요.
`,
  },
]

export default cafeMissions