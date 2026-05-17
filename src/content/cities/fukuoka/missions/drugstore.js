const drugstoreMissions = [
  {
    id: 'headache-medicine',

    text: '두통약 추천받기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '드럭스토어 직원에게 두통약을 추천받아보세요.',
  },

  {
    id: 'mask-location',

    text: '마스크 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '마스크가 어디에 있는지 일본어로 물어보세요.',
  },

  {
    id: 'vitamin-question',

    text: '비타민 추천받기',

    difficulty: 'easy',

    exp: 5,

    prompt:
      '피로 회복에 좋은 비타민을 추천받아보세요.',
  },

  {
    id: 'cold-medicine',

    text: '감기약 문의하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '감기 증상을 설명하고 적절한 약을 추천받아보세요.',
  },

  {
    id: 'stomachache',

    text: '배 아픈 증상 설명하기',

    difficulty: 'normal',

    exp: 10,

    prompt:
      '배가 아픈 증상을 일본어로 설명하고 약을 추천받아보세요.',
  },

  {
    id: 'skin-problem',

    text: '피부 트러블용 제품 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '피부 트러블에 사용할 수 있는 제품을 직원에게 물어보세요.',
  },

  {
    id: 'medicine-howto',

    text: '복용 방법 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '약 복용 방법 설명을 듣고 일본어로 질문하거나 반응해보세요.',
  },

  {
    id: 'allergy-question',

    text: '알레르기 여부 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt:
      '자신의 알레르기 여부를 일본어로 설명해보세요.',
  },

  {
    id: 'symptom-explanation',

    text: '몸 상태 자세히 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '몸 상태와 증상을 일본어로 자세히 설명하고 직원과 자연스럽게 대화해보세요.',
  },

  {
    id: 'staff-fast-speaking',

    text: '빠른 설명 다시 물어보기',

    difficulty: 'special',

    exp: 35,

    prompt:
      '직원의 설명이 너무 빨랐습니다. 다시 천천히 설명해달라고 일본어로 요청해보세요.',
  },
]

export default drugstoreMissions