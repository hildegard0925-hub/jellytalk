const shoppingMissions = [
  {
    id: 'price-check',

    text: '가격 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 상품을 들고 고민하고 있습니다.

어떤 상품인지 먼저 물어보세요.

사용자가 가격을 질문하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'discount-check',

    text: '할인 상품인지 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 가격표를 자세히 보고 있습니다.

세일 상품이나 할인 코너를 짧게 설명하세요.

사용자가 할인 여부를 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'basket-question',

    text: '장바구니 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 물건을 손에 들고 둘러보고 있습니다.

무엇을 찾고 있는지 먼저 물어보세요.

사용자가 장바구니 위치를 질문하도록 자연스럽게 유도하세요.
`,
  },

  {
    id: 'tax-free',

    text: '면세 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 여러 상품을 고른 상황입니다.

면세 안내를 짧게 설명하세요.

사용자가 면세 가능 여부를 질문하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'stock-check',

    text: '재고 남아있는지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 특정 상품을 찾고 있습니다.

어떤 상품인지 먼저 물어보세요.

재고 상황을 자연스럽게 설명하세요.
`,
  },

  {
    id: 'popular-item',

    text: '인기 상품 추천받기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 기념품 코너를 둘러보고 있습니다.

일본에서 인기 있는 상품을 먼저 추천하세요.

짧게 특징도 설명해주세요.
`,
  },

  {
    id: 'payment-method',

    text: '결제 수단 가능한지 확인하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
계산 전 상황입니다.

사용 가능한 결제 수단을 짧게 안내하세요.

사용자가 카드나 QR 결제 가능 여부를 질문하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'different-size',

    text: '다른 사이즈 있는지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 옷이나 상품 크기를 확인하고 있습니다.

현재 사이즈를 설명하세요.

사용자가 다른 사이즈를 질문할 수 있도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'lost-product',

    text: '찾던 상품이 안 보인다고 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 원하는 상품을 찾지 못하고 있습니다.

무엇을 찾고 있는지 먼저 물어보세요.

상품 위치나 재고 상황을 자연스럽게 설명하세요.
`,
  },

  {
    id: 'staff-recommendation',

    text: '직원 추천 상품 듣고 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
직원으로서 추천 상품을 먼저 소개하세요.

왜 인기 있는지도 짧게 설명해주세요.

사용자가 질문하거나 반응할 수 있도록 자연스럽게 대화를 이어가세요.
`,
  },
]

export default shoppingMissions