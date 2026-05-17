const hotelMissions = [
  {
    id: 'checkin',

    text: '예약 확인하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '일본 호텔 프런트에서 예약자 이름을 말하고 체크인을 진행해보세요.',
  },

  {
    id: 'non-smoking',

    text: '금연실 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '호텔 직원에게 금연실로 가능한지 일본어로 물어보세요.',
  },

  {
    id: 'late-checkout',

    text: '늦은 체크아웃 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '호텔 직원에게 늦은 체크아웃이 가능한지 정중하게 물어보세요.',
  },

  {
    id: 'wifi-password',

    text: '와이파이 비밀번호 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '호텔 와이파이 비밀번호를 일본어로 물어보세요.',
  },

  {
    id: 'room-problem',

    text: '객실 문제 설명하고 방 교체 요청하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '객실에 문제가 생겼습니다. 상황을 설명하고 방 교체가 가능한지 일본어로 요청해보세요.',
  },
]

export default hotelMissions