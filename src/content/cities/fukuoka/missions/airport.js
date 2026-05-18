const airportMissions = [
  {
    id: 'boarding-gate',

    text: '탑승구 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 공항에서 길을 찾고 있습니다.

먼저 도움이 필요한지 물어보세요.

사용자가 탑승구를 질문하도록 자연스럽게 대화를 이어가세요.
`,
  },

  {
    id: 'checkin-counter',

    text: '체크인 카운터 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 공항 로비를 두리번거리고 있습니다.

어느 항공사인지 먼저 물어보세요.

체크인 카운터를 안내하는 흐름으로 대화를 진행하세요.
`,
  },

  {
    id: 'carry-on-question',

    text: '기내 반입 가능 여부 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 짐을 들고 고민하고 있습니다.

기내 반입 규정에 대해 간단히 설명하세요.

사용자가 질문하도록 자연스럽게 유도하세요.
`,
  },

  {
    id: 'departure-time',

    text: '출발 시간 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 비행기 시간을 헷갈려 하고 있습니다.

현재 항공편 정보를 먼저 물어보세요.

출발 시간을 다시 안내해주세요.
`,
  },

  {
    id: 'lost-item',

    text: '잃어버린 물건 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 당황한 상태로 도움을 요청했습니다.

무엇을 잃어버렸는지 먼저 물어보세요.

언제 어디서 잃어버렸는지도 짧게 질문하세요.
`,
  },

  {
    id: 'baggage-problem',

    text: '수하물 문제 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자의 수하물에 문제가 생긴 상황입니다.

무슨 문제가 있는지 먼저 설명해달라고 하세요.

추가 질문도 한 번 해주세요.
`,
  },

  {
    id: 'security-question',

    text: '보안 검색 질문에 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
공항 보안 검색 상황입니다.

사용자에게 짧고 빠르게 질문하세요.

예:
- 가방 안 물건
- 액체 여부
- 노트북 여부

실제 공항처럼 자연스럽게 진행하세요.
`,
  },

  {
    id: 'boarding-announcement',

    text: '빠른 탑승 안내 듣고 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
탑승 시간이 가까워진 상황입니다.

급한 분위기로 탑승 관련 안내를 해주세요.

사용자가 현재 상황을 다시 확인하도록 자연스럽게 유도하세요.
`,
  },
]

export default airportMissions