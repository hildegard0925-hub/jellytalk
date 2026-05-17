const restaurantMissions = [
  {
    id: 'menu-recommend',

    text: '추천 메뉴 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '일본 식당 직원에게 추천 메뉴를 물어보세요.',
  },

  {
    id: 'drink-order',

    text: '음료 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '식당에서 마실 음료를 일본어로 주문해보세요.',
  },

  {
    id: 'payment',

    text: '계산 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '식사를 마친 후 직원에게 계산을 요청해보세요.',
  },

  {
    id: 'allergy-question',

    text: '알레르기 재료 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '알레르기가 있는 재료가 들어있는지 일본어로 물어보세요.',
  },

  {
    id: 'seat-request',

    text: '창가 자리 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '식당 직원에게 창가 자리를 요청해보세요.',
  },

  {
    id: 'joke-reaction',

    text: '직원의 농담에 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '직원이 가볍게 농담을 했습니다. 자연스럽게 일본어로 반응해보세요.',
  },

  {
    id: 'chef-recommendation',

    text: '직원 추천 메뉴 듣고 반응하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '직원이 강력 추천 메뉴를 설명하고 있습니다. 일본어로 자연스럽게 대화해보세요.',
  },

  {
    id: 'spicy-level',

    text: '맵기 조절 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '음식 맵기를 조절할 수 있는지 일본어로 요청해보세요.',
  },

  {
    id: 'extra-topping',

    text: '토핑 추가 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '추가 토핑을 넣을 수 있는지 일본어로 요청해보세요.',
  },

  {
    id: 'wait-time',

    text: '대기 시간 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '식당 대기 시간이 얼마나 걸리는지 직원에게 물어보세요.',
  },

  {
    id: 'reservation-check',

    text: '예약 여부 확인하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '예약 없이 입장 가능한지 일본어로 확인해보세요.',
  },

  {
    id: 'wrong-order',

    text: '잘못 나온 음식 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '주문한 음식과 다른 메뉴가 나왔습니다. 일본어로 상황을 설명해보세요.',
  },
]

export default restaurantMissions