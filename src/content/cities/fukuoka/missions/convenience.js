const convenienceMissions = [
  {
    id: 'bag-question',

    text: '봉투 필요한지 답하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 계산대로 왔습니다.

반드시 봉투가 필요한지 먼저 물어보세요.

짧고 실제 편의점처럼 빠르게 대화하세요.
`,
  },

  {
    id: 'heat-food',

    text: '도시락 데워달라고 요청하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 도시락을 계산대로 가져왔습니다.

전자레인지 사용 여부를 먼저 물어보세요.

사용자가 데우기를 요청하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'recommend-snack',

    text: '추천 간식 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 간식 코너를 둘러보고 있습니다.

인기 있는 일본 간식을 먼저 추천하세요.

짧게 맛이나 특징도 설명하세요.
`,
  },

  {
    id: 'atm-location',

    text: 'ATM 위치 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 편의점 안을 두리번거리고 있습니다.

무엇을 찾고 있는지 먼저 물어보세요.

사용자가 ATM 위치를 질문하도록 자연스럽게 유도하세요.
`,
  },

  {
    id: 'point-card',

    text: '포인트 카드 있는지 질문 이해하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
계산 중입니다.

반드시 포인트 카드가 있는지 빠르게 물어보세요.

사용자가 자연스럽게 반응하도록 짧게 대화를 이어가세요.
`,
  },

  {
    id: 'separate-payment',

    text: '결제를 나눠서 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 여러 물건을 계산하려고 합니다.

결제 방식을 먼저 확인하세요.

사용자가 결제를 나눌 수 있는지 질문하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'forgot-item',

    text: '물건 두고 온 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 다시 편의점으로 돌아왔습니다.

무엇을 두고 갔는지 먼저 물어보세요.

언제 방문했는지도 짧게 질문하세요.
`,
  },

  {
    id: 'limited-product',

    text: '한정 상품 재고 물어보기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 특정 상품을 찾고 있습니다.

어떤 상품인지 먼저 물어보세요.

재고 상황을 자연스럽게 설명하세요.
`,
  },
]

export default convenienceMissions