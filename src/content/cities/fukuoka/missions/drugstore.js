const drugstoreMissions = [
  {
    id: 'headache-medicine',

    text: '두통약 추천받기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
어떤 증상인지 물어보고 두통약을 추천하세요.
`,
  },

  {
    id: 'mask-location',

    text: '마스크 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
무엇을 찾고 있는지 물어보세요.
`,
  },

  {
    id: 'vitamin-question',

    text: '비타민 추천받기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
피로 회복용 제품을 추천하세요.
`,
  },

  {
    id: 'cold-medicine',

    text: '감기약 문의하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
증상을 물어보고 감기약을 추천하세요.
`,
  },

  {
    id: 'stomachache',

    text: '배 아픈 증상 설명하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
어디가 아픈지 물어보고 증상과 통증 정도를 질문하세요.
`,
  },

  {
    id: 'skin-problem',

    text: '피부 트러블용 제품 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
피부 고민을 물어보고 제품을 추천하세요.
`,
  },

  {
    id: 'medicine-howto',

    text: '복용 방법 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
복용 방법과 복용 횟수를 설명하세요.
`,
  },

  {
    id: 'allergy-question',

    text: '알레르기 여부 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
알레르기 여부를 확인하세요.
`,
  },

  {
    id: 'symptom-explanation',

    text: '몸 상태 자세히 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
증상과 통증 위치, 지속 시간을 질문하세요.
`,
  },

  {
    id: 'staff-fast-speaking',

    text: '빠른 설명 다시 물어보기',

    difficulty: 'special',

    exp: 35,

    prompt: `
약 설명을 빠르게 진행하세요.
`,
  },
]

export default drugstoreMissions