const cafeMissions = [
  {
    id: 'coffee-order',

    text: '커피 주문하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '일본 카페에서 커피를 주문해보세요.',
  },

  {
    id: 'size-question',

    text: '음료 사이즈 선택하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '카페 직원이 음료 사이즈를 물어보고 있습니다. 일본어로 대답해보세요.',
  },

  {
    id: 'takeout-question',

    text: '포장 여부 답하기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '직원이 매장에서 먹을지 포장할지 물어보고 있습니다. 일본어로 답해보세요.',
  },

  {
    id: 'dessert-recommend',

    text: '디저트 추천 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '카페 직원에게 인기 있는 디저트를 추천받아보세요.',
  },

  {
    id: 'wifi-question',

    text: '와이파이 가능한지 물어보기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '카페에서 와이파이를 사용할 수 있는지 일본어로 물어보세요.',
  },

  {
    id: 'window-seat',

    text: '창가 자리 요청하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '카페 직원에게 창가 자리가 있는지 물어보고 요청해보세요.',
  },

  {
    id: 'custom-order',

    text: '음료 커스텀 주문하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '얼음 양이나 시럽 변경 등 원하는 방식으로 음료를 커스텀 주문해보세요.',
  },

  {
    id: 'quiet-seat',

    text: '조용한 자리 요청하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '공부하거나 쉬고 싶어서 조용한 자리가 있는지 직원에게 물어보세요.',
  },

  {
    id: 'spilled-drink',

    text: '음료를 쏟은 상황 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '카페에서 음료를 실수로 쏟았습니다. 직원에게 상황을 설명하고 도움을 요청해보세요.',
  },

  {
    id: 'staff-smalltalk',

    text: '직원 스몰토크 이어가기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '카페 직원이 먼저 말을 걸어왔습니다. 자연스럽게 일본어 대화를 이어가보세요.',
  },
]

export default cafeMissions