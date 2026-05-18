const shoppingMissions = [
  {
    id: 'price-check',

    text: '가격 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
어떤 상품인지 물어보세요.
`,
  },

  {
    id: 'discount-check',

    text: '할인 상품인지 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
세일 상품과 할인 정보를 안내하세요.
`,
  },

  {
    id: 'basket-question',

    text: '장바구니 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
무엇을 찾고 있는지 물어보세요.
`,
  },

  {
    id: 'tax-free',

    text: '면세 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
면세 안내를 해주세요.
`,
  },

  {
    id: 'stock-check',

    text: '재고 남아있는지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
찾는 상품과 재고 상황을 확인하세요.
`,
  },

  {
    id: 'popular-item',

    text: '인기 상품 추천받기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
인기 상품을 추천하세요.
`,
  },

  {
    id: 'payment-method',

    text: '결제 수단 가능한지 확인하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용 가능한 결제 수단을 안내하세요.
`,
  },

  {
    id: 'different-size',

    text: '다른 사이즈 있는지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
현재 사이즈와 다른 사이즈 여부를 설명하세요.
`,
  },

  {
    id: 'lost-product',

    text: '찾던 상품이 안 보인다고 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
찾는 상품 위치와 재고 상황을 설명하세요.
`,
  },

  {
    id: 'staff-recommendation',

    text: '직원 추천 상품 듣고 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
추천 상품을 소개하세요.
`,
  },
]

export default shoppingMissions