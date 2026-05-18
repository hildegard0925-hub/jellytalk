const stationMissions = [
  {
    id: 'platform-check',

    text: '플랫폼 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 역 안에서 길을 찾고 있습니다.

어디로 가는지 먼저 물어보세요.

플랫폼 위치를 자연스럽게 안내하세요.
`,
  },

  {
    id: 'ticket-price',

    text: '표 가격 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 노선도를 보고 고민하고 있습니다.

목적지를 먼저 물어보세요.

표 가격을 짧게 안내하세요.
`,
  },

  {
    id: 'transfer-question',

    text: '환승 여부 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 목적지까지 가는 방법을 고민하고 있습니다.

행선지를 먼저 물어보세요.

환승 여부를 자연스럽게 설명하세요.
`,
  },

  {
    id: 'last-train',

    text: '막차 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
밤 늦은 역 상황입니다.

어디까지 가는지 먼저 물어보세요.

막차 시간을 자연스럽게 안내하세요.
`,
  },

  {
    id: 'wrong-platform',

    text: '잘못 탄 열차 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
사용자가 당황한 상태로 역무원에게 왔습니다.

무슨 문제가 있었는지 먼저 물어보세요.

현재 위치와 이동 방향을 자연스럽게 설명하세요.
`,
  },

  {
    id: 'ic-card-charge',

    text: '교통카드 충전하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 충전 기계 앞에서 고민하고 있습니다.

무엇을 도와줄지 먼저 물어보세요.

교통카드 충전 방법을 짧게 설명하세요.
`,
  },

  {
    id: 'express-train',

    text: '급행 열차인지 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
열차가 곧 들어오는 상황입니다.

현재 열차 정보를 짧게 안내하세요.

사용자가 급행 여부를 질문할 수 있도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'exit-number',

    text: '출구 번호 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 역 출구 지도를 보고 있습니다.

어디로 가는지 먼저 물어보세요.

가장 가까운 출구 번호를 자연스럽게 안내하세요.
`,
  },

  {
    id: 'lost-ticket',

    text: '표를 잃어버린 상황 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 당황한 상태로 역무원에게 왔습니다.

표에 무슨 문제가 있는지 먼저 물어보세요.

상황 해결 방법을 자연스럽게 설명하세요.
`,
  },

  {
    id: 'station-announcement',

    text: '역 안내 방송 듣고 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
역 안내 방송 상황을 만들어주세요.

한 번 빠르게 방송처럼 말하세요.

사용자가 다시 확인할 수 있도록 역무원처럼 자연스럽게 대응하세요.
`,
  },
]

export default stationMissions