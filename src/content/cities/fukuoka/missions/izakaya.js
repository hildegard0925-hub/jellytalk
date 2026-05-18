const izakayaMissions = [
  {
    id: 'beer-order',

    text: '맥주 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
음료 주문을 받아주세요.
`,
  },

  {
    id: 'water-request',

    text: '물 요청하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
필요한 것이 있는지 물어보세요.
`,
  },

  {
    id: 'smoking-seat',

    text: '흡연석 여부 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
흡연석과 금연석 여부를 안내하세요.
`,
  },

  {
    id: 'recommend-menu',

    text: '추천 안주 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
추천 안주를 소개하세요.
`,
  },

  {
    id: 'additional-order',

    text: '추가 주문하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
추가 주문이 필요한지 물어보세요.
`,
  },

  {
    id: 'cheers-reaction',

    text: '건배에 반응하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
건배 분위기를 먼저 만들어보세요.
`,
  },

  {
    id: 'counter-seat',

    text: '카운터 자리 요청하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
현재 자리 상황을 설명하세요.
`,
  },

  {
    id: 'split-payment',

    text: '더치페이 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
결제 방식을 확인하세요.
`,
  },

  {
    id: 'drunk-customer',

    text: '옆자리 손님 대화에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
친근하게 말을 걸고 대화를 시작하세요.
`,
  },

  {
    id: 'staff-smalltalk',

    text: '직원 스몰토크 이어가기',

    difficulty: 'special',

    exp: 35,

    prompt: `
가볍게 말을 걸고 스몰토크를 시작하세요.
`,
  },
]

export default izakayaMissions