const hotel2Missions = [
  {
    id: 'checkout-request',

    text: '체크아웃 진행하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '호텔 프런트에서 체크아웃을 진행해보세요.',
  },

  {
    id: 'luggage-storage',

    text: '짐 맡길 수 있는지 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '체크아웃 후에도 짐을 맡길 수 있는지 호텔 직원에게 물어보세요.',
  },

  {
    id: 'tax-question',

    text: '추가 요금 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '추가 요금이 있는지 호텔 직원에게 일본어로 확인해보세요.',
  },

  {
    id: 'airport-direction',

    text: '공항 가는 방법 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '호텔 직원에게 공항까지 가는 방법을 일본어로 물어보세요.',
  },

  {
    id: 'forgot-item-room',

    text: '방에 물건 두고 왔다고 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '객실에 물건을 두고 온 것 같다고 호텔 직원에게 설명해보세요.',
  },

  {
    id: 'late-transport',

    text: '교통 문제로 늦는 상황 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '교통 문제 때문에 일정이 늦어졌다고 호텔 직원에게 설명해보세요.',
  },

  {
    id: 'payment-problem',

    text: '결제 문제 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '결제에 문제가 생겼습니다. 호텔 직원과 일본어로 상황을 해결해보세요.',
  },

  {
    id: 'staff-farewell',

    text: '직원과 마지막 인사 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '체크아웃하면서 호텔 직원과 마지막 인사를 자연스럽게 나눠보세요.',
  },
]

export default hotel2Missions