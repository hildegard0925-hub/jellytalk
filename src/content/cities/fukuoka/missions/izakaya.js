const izakayaMissions = [
  {
    id: 'beer-order',

    text: '맥주 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 자리에 앉았습니다.

먼저 음료 주문을 받아주세요.

사용자가 맥주를 주문하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'water-request',

    text: '물 요청하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
주문 후 음식이 나오기를 기다리는 상황입니다.

사용자가 필요한 것이 있는지 먼저 물어보세요.

자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'smoking-seat',

    text: '흡연석 여부 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자를 자리로 안내하려고 합니다.

흡연석과 금연석 여부를 먼저 설명하세요.

사용자가 원하는 자리를 말하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'recommend-menu',

    text: '추천 안주 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 메뉴를 고민하고 있습니다.

추천 안주를 먼저 소개하세요.

짧게 특징이나 인기 이유도 설명해주세요.
`,
  },

  {
    id: 'additional-order',

    text: '추가 주문하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자의 테이블을 다시 확인하러 오세요.

추가 주문이 필요한지 먼저 물어보세요.

자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'cheers-reaction',

    text: '건배에 반응하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
이자카야 분위기를 밝고 자연스럽게 만들어주세요.

건배 분위기를 먼저 만들어보세요.

사용자가 반응하도록 대화를 이어가세요.
`,
  },

  {
    id: 'counter-seat',

    text: '카운터 자리 요청하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
가게 안이 조금 혼잡한 상황입니다.

현재 자리 상황을 설명하세요.

사용자가 카운터 자리를 요청할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'split-payment',

    text: '더치페이 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
계산 상황입니다.

결제 방식을 먼저 확인하세요.

사용자가 나눠서 계산 가능한지 질문하도록 자연스럽게 유도하세요.
`,
  },

  {
    id: 'drunk-customer',

    text: '옆자리 손님 대화에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
옆자리 일본 손님 역할도 함께 해주세요.

사용자에게 먼저 친근하게 말을 걸어보세요.

자연스럽고 편한 분위기로 대화를 이어가세요.
`,
  },

  {
    id: 'staff-smalltalk',

    text: '직원 스몰토크 이어가기',

    difficulty: 'special',

    exp: 35,

    prompt: `
직원이 먼저 가볍게 말을 걸어보세요.

예:
- 일본 여행 중인지
- 음식은 어땠는지
- 어디서 왔는지

짧고 자연스럽게 대화를 이어가세요.
`,
  },
]

export default izakayaMissions