const airportMissions = [
  {
    id: 'boarding-gate',

    text: '탑승구 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
도움이 필요한지 물어보세요.
`,
  },

  {
    id: 'checkin-counter',

    text: '체크인 카운터 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
항공사를 확인하고 체크인 카운터를 안내하세요.
`,
  },

  {
    id: 'carry-on-question',

    text: '기내 반입 가능 여부 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
기내 반입 규정을 설명하세요.
`,
  },

  {
    id: 'departure-time',

    text: '출발 시간 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
항공편 정보를 확인하고 출발 시간을 안내하세요.
`,
  },

  {
    id: 'lost-item',

    text: '잃어버린 물건 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
잃어버린 물건과 위치를 질문하세요.
`,
  },

  {
    id: 'baggage-problem',

    text: '수하물 문제 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
수하물 문제를 확인하고 추가 질문하세요.
`,
  },

  {
    id: 'security-question',

    text: '보안 검색 질문에 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
보안 검색 관련 질문을 빠르게 진행하세요.
`,
  },

  {
    id: 'boarding-announcement',

    text: '빠른 탑승 안내 듣고 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
탑승 안내를 빠르게 진행하세요.
`,
  },
]

export default airportMissions