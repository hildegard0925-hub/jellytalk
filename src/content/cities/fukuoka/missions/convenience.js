const convenienceMissions = [
  {
    id: 'bag-question',

    text: '봉투 필요한지 답하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
봉투 필요 여부를 물어보세요.
`,
  },

  {
    id: 'heat-food',

    text: '도시락 데워달라고 요청하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
전자레인지 사용 여부를 물어보세요.
`,
  },

  {
    id: 'recommend-snack',

    text: '추천 간식 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
인기 있는 일본 간식을 추천하세요.
`,
  },

  {
    id: 'atm-location',

    text: 'ATM 위치 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
무엇을 찾고 있는지 물어보세요.
`,
  },

  {
    id: 'point-card',

    text: '포인트 카드 있는지 질문 이해하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
포인트 카드 여부를 물어보세요.
`,
  },

  {
    id: 'separate-payment',

    text: '결제를 나눠서 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
결제 방식을 확인하세요.
`,
  },

  {
    id: 'forgot-item',

    text: '물건 두고 온 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
두고 간 물건과 방문 시간을 질문하세요.
`,
  },

  {
    id: 'limited-product',

    text: '한정 상품 재고 물어보기',

    difficulty: 'special',

    exp: 35,

    prompt: `
찾는 상품과 재고 상황을 확인하세요.
`,
  },
]

export default convenienceMissions