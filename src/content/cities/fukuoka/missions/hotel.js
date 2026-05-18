const hotelMissions = [
  {
    id: 'checkin',

    text: '예약 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 호텔 프런트에 도착했습니다.

먼저 예약자 이름을 물어보세요.

체크인 절차를 짧고 자연스럽게 진행하세요.
`,
  },

  {
    id: 'non-smoking',

    text: '금연실 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자의 객실 정보를 확인하는 상황입니다.

흡연실과 금연실 여부를 짧게 안내하세요.

사용자가 금연실을 요청할 수 있도록 자연스럽게 반응하세요.
`,
  },

  {
    id: 'late-checkout',

    text: '늦은 체크아웃 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 체크아웃 시간을 고민하고 있습니다.

기본 체크아웃 시간을 먼저 안내하세요.

사용자가 늦은 체크아웃 가능 여부를 질문하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'wifi-password',

    text: '와이파이 비밀번호 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
체크인이 거의 끝난 상황입니다.

호텔 이용 안내를 짧게 설명하세요.

사용자가 와이파이 비밀번호를 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'room-problem',

    text: '객실 문제 설명하고 방 교체 요청하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 객실 문제 때문에 프런트로 내려왔습니다.

어떤 문제가 있었는지 먼저 물어보세요.

상황을 확인한 뒤 방 교체 가능 여부를 자연스럽게 안내하세요.
`,
  },
]

export default hotelMissions