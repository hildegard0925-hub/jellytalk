const hotelMissions = [
  {
    id: 'checkin',

    text: '예약 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
예약자 이름을 물어보고 체크인을 진행하세요.
`,
  },

  {
    id: 'non-smoking',

    text: '금연실 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
흡연실과 금연실 여부를 안내하세요.
`,
  },

  {
    id: 'late-checkout',

    text: '늦은 체크아웃 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
체크아웃 시간을 안내하세요.
`,
  },

  {
    id: 'wifi-password',

    text: '와이파이 비밀번호 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
호텔 이용 안내를 해주세요.
`,
  },

  {
    id: 'room-problem',

    text: '객실 문제 설명하고 방 교체 요청하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
객실 문제를 확인하고 방 교체 가능 여부를 안내하세요.
`,
  },
]

export default hotelMissions