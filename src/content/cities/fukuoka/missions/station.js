const stationMissions = [
  {
    id: 'platform-check',

    text: '플랫폼 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
행선지를 물어보고 플랫폼을 안내하세요.
`,
  },

  {
    id: 'ticket-price',

    text: '표 가격 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
목적지를 물어보고 표 가격을 안내하세요.
`,
  },

  {
    id: 'transfer-question',

    text: '환승 여부 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
행선지를 물어보고 환승 여부를 설명하세요.
`,
  },

  {
    id: 'last-train',

    text: '막차 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
행선지를 물어보고 막차 시간을 안내하세요.
`,
  },

  {
    id: 'wrong-platform',

    text: '잘못 탄 열차 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
현재 위치와 이동 방향을 설명하세요.
`,
  },

  {
    id: 'ic-card-charge',

    text: '교통카드 충전하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
교통카드 충전 방법을 설명하세요.
`,
  },

  {
    id: 'express-train',

    text: '급행 열차인지 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
현재 열차 정보를 안내하세요.
`,
  },

  {
    id: 'exit-number',

    text: '출구 번호 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
목적지와 출구 번호를 안내하세요.
`,
  },

  {
    id: 'lost-ticket',

    text: '표를 잃어버린 상황 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
표 문제를 확인하고 해결 방법을 설명하세요.
`,
  },

  {
    id: 'station-announcement',

    text: '역 안내 방송 듣고 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
역 안내 방송을 빠르게 진행하세요.
`,
  },
]

export default stationMissions