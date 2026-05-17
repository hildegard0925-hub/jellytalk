const stationMissions = [
  {
    id: 'platform-check',

    text: '플랫폼 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '역 직원에게 열차 플랫폼이 어디인지 일본어로 물어보세요.',
  },

  {
    id: 'ticket-price',

    text: '표 가격 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '목적지까지 표 가격이 얼마인지 역무원에게 물어보세요.',
  },

  {
    id: 'transfer-question',

    text: '환승 여부 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '목적지까지 가는데 환승이 필요한지 일본어로 물어보세요.',
  },

  {
    id: 'last-train',

    text: '막차 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '막차 시간이 언제인지 역 직원에게 물어보세요.',
  },

  {
    id: 'wrong-platform',

    text: '잘못 탄 열차 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '열차를 잘못 탄 것 같습니다. 역 직원에게 상황을 설명하고 도움을 요청해보세요.',
  },

  {
    id: 'ic-card-charge',

    text: '교통카드 충전하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '교통카드 충전 방법을 일본어로 물어보세요.',
  },

  {
    id: 'express-train',

    text: '급행 열차인지 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '지금 들어오는 열차가 급행인지 일본어로 확인해보세요.',
  },

  {
    id: 'exit-number',

    text: '출구 번호 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '가고 싶은 장소에 가까운 출구 번호를 역 직원에게 물어보세요.',
  },

  {
    id: 'lost-ticket',

    text: '표를 잃어버린 상황 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '표를 잃어버렸다고 역 직원에게 일본어로 설명해보세요.',
  },

  {
    id: 'station-announcement',

    text: '역 안내 방송 듣고 대응하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '역 안내 방송이 빠르게 나오고 있습니다. 직원에게 상황을 다시 확인해보세요.',
  },
]

export default stationMissions