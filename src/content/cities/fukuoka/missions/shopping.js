const shoppingMissions = [
  {
    id: 'price-check',

    text: '가격 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '상품 가격이 얼마인지 일본어로 물어보세요.',
  },

  {
    id: 'discount-check',

    text: '할인 상품인지 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '현재 할인 중인 상품인지 직원에게 물어보세요.',
  },

  {
    id: 'basket-question',

    text: '장바구니 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '장바구니가 어디 있는지 일본어로 물어보세요.',
  },

  {
    id: 'tax-free',

    text: '면세 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '면세가 가능한 상품인지 일본어로 물어보세요.',
  },

  {
    id: 'stock-check',

    text: '재고 남아있는지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '원하는 상품 재고가 남아있는지 직원에게 물어보세요.',
  },

  {
    id: 'popular-item',

    text: '인기 상품 추천받기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '일본에서 인기 있는 상품을 추천받아보세요.',
  },

  {
    id: 'payment-method',

    text: '결제 수단 가능한지 확인하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '사용 가능한 결제 수단을 일본어로 확인해보세요.',
  },

  {
    id: 'different-size',

    text: '다른 사이즈 있는지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '다른 사이즈 재고가 있는지 일본어로 물어보세요.',
  },

  {
    id: 'lost-product',

    text: '찾던 상품이 안 보인다고 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '찾고 있는 상품이 보이지 않습니다. 직원에게 일본어로 도움을 요청해보세요.',
  },

  {
    id: 'staff-recommendation',

    text: '직원 추천 상품 듣고 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '직원이 추천 상품을 설명하고 있습니다. 자연스럽게 일본어로 대화해보세요.',
  },
]

export default shoppingMissions