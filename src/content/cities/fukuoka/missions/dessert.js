const dessertMissions = [
  {
    id: 'dessert-order',

    text: '디저트 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '일본 디저트 가게에서 먹고 싶은 디저트를 주문해보세요.',
  },

  {
    id: 'popular-dessert',

    text: '인기 메뉴 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '디저트 가게 직원에게 가장 인기 있는 메뉴를 물어보세요.',
  },

  {
    id: 'seasonal-menu',

    text: '시즌 한정 메뉴 확인하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '계절 한정 디저트가 있는지 일본어로 물어보세요.',
  },

  {
    id: 'sweetness-question',

    text: '많이 달지 않은 메뉴 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '너무 달지 않은 디저트를 추천해달라고 직원에게 물어보세요.',
  },

  {
    id: 'takeout-dessert',

    text: '포장 가능한지 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '디저트를 포장할 수 있는지 직원에게 일본어로 물어보세요.',
  },

  {
    id: 'gift-dessert',

    text: '선물용 추천받기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '선물하기 좋은 일본 디저트를 추천받아보세요.',
  },

  {
    id: 'limited-dessert',

    text: '한정 디저트 설명 듣기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '직원이 한정 디저트에 대해 설명하고 있습니다. 일본어로 자연스럽게 대화를 이어가보세요.',
  },

  {
    id: 'photo-conversation',

    text: '사진 찍다가 직원과 대화하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '디저트 사진을 찍고 있는데 직원이 말을 걸어왔습니다. 자연스럽게 일본어로 대화해보세요.',
  },
]

export default dessertMissions