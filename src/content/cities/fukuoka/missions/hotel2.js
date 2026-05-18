const hotel2Missions = [
  {
    id: 'checkout-request',

    text: '체크아웃 진행하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
객실 번호를 물어보고 체크아웃을 진행하세요.
`,
  },

  {
    id: 'luggage-storage',

    text: '짐 맡길 수 있는지 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
짐 보관 서비스를 안내하세요.
`,
  },

  {
    id: 'tax-question',

    text: '추가 요금 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
추가 요금과 숙박 내역을 설명하세요.
`,
  },

  {
    id: 'airport-direction',

    text: '공항 가는 방법 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
공항 이동 방법을 안내하세요.
`,
  },

  {
    id: 'forgot-item-room',

    text: '방에 물건 두고 왔다고 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
객실 번호와 두고 온 물건을 질문하세요.
`,
  },

  {
    id: 'late-transport',

    text: '교통 문제로 늦는 상황 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
교통 문제와 시간을 확인하세요.
`,
  },

  {
    id: 'payment-problem',

    text: '결제 문제 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
결제 문제를 확인하고 해결 방법을 안내하세요.
`,
  },

  {
    id: 'staff-farewell',

    text: '직원과 마지막 인사 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
여행이 어땠는지 물어보고 마지막 인사를 하세요.
`,
  },
]

export default hotel2Missions