const airportMissions = [
  {
    id: 'boarding-gate',

    text: '탑승구 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '후쿠오카 공항에서 탑승구를 찾지 못해 직원에게 일본어로 물어보세요.',
  },

  {
    id: 'checkin-counter',

    text: '체크인 카운터 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '공항에서 체크인 카운터 위치를 직원에게 물어보세요.',
  },

  {
    id: 'carry-on-question',

    text: '기내 반입 가능 여부 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '기내에 들고 탈 수 있는 짐인지 공항 직원에게 확인해보세요.',
  },

  {
    id: 'departure-time',

    text: '출발 시간 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '비행기 출발 시간이 맞는지 공항 직원에게 다시 확인해보세요.',
  },

  {
    id: 'lost-item',

    text: '잃어버린 물건 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '공항에서 물건을 잃어버렸습니다. 어떤 물건인지 일본어로 설명해보세요.',
  },

  {
    id: 'baggage-problem',

    text: '수하물 문제 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '수하물에 문제가 생겼습니다. 공항 직원에게 상황을 설명해보세요.',
  },

  {
    id: 'security-question',

    text: '보안 검색 질문에 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '공항 보안 검색 중 직원이 여러 질문을 하고 있습니다. 자연스럽게 일본어로 대응해보세요.',
  },

  {
    id: 'boarding-announcement',

    text: '빠른 탑승 안내 듣고 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '공항 방송이 빠르게 나오고 있습니다. 탑승 시간을 놓치지 않도록 직원에게 상황을 다시 확인해보세요.',
  },
]

export default airportMissions