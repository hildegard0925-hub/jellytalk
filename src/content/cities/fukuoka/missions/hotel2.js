const hotel2Missions = [
  {
    id: 'checkout-request',

    text: '체크아웃 진행하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 체크아웃을 하러 프런트에 왔습니다.

객실 번호를 먼저 물어보세요.

체크아웃 절차를 짧고 자연스럽게 진행하세요.
`,
  },

  {
    id: 'luggage-storage',

    text: '짐 맡길 수 있는지 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 체크아웃 후에도 짐을 들고 있습니다.

짐 보관 서비스가 있다고 짧게 안내하세요.

사용자가 짐 보관 여부를 질문하도록 자연스럽게 반응하세요.
`,
  },

  {
    id: 'tax-question',

    text: '추가 요금 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
체크아웃 정산 중입니다.

추가 요금이나 숙박 내역을 짧게 설명하세요.

사용자가 비용에 대해 질문하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'airport-direction',

    text: '공항 가는 방법 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 공항으로 이동하려고 합니다.

교통편에 대해 먼저 도움이 필요한지 물어보세요.

사용자가 공항 가는 방법을 질문하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'forgot-item-room',

    text: '방에 물건 두고 왔다고 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 당황한 상태로 프런트에 왔습니다.

무엇을 객실에 두고 왔는지 먼저 물어보세요.

객실 번호와 물건 위치도 짧게 질문하세요.
`,
  },

  {
    id: 'late-transport',

    text: '교통 문제로 늦는 상황 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 일정 문제로 도움을 요청했습니다.

무슨 상황인지 먼저 설명해달라고 하세요.

교통 문제와 시간을 자연스럽게 확인하세요.
`,
  },

  {
    id: 'payment-problem',

    text: '결제 문제 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
결제 과정에서 문제가 발생했습니다.

카드 오류인지 결제 실패인지 먼저 확인하세요.

사용자와 함께 해결 방법을 자연스럽게 이야기하세요.
`,
  },

  {
    id: 'staff-farewell',

    text: '직원과 마지막 인사 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 마지막으로 호텔을 떠나려고 합니다.

짧고 따뜻하게 여행은 어땠는지 물어보세요.

자연스럽게 마지막 인사를 이어가세요.
`,
  },
]

export default hotel2Missions