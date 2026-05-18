const drugstoreMissions = [
  {
    id: 'headache-medicine',

    text: '두통약 추천받기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 약 코너에서 고민하고 있습니다.

어떤 증상인지 먼저 물어보세요.

두통약을 자연스럽게 추천하세요.
`,
  },

  {
    id: 'mask-location',

    text: '마스크 위치 물어보기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 가게 안을 둘러보고 있습니다.

무엇을 찾고 있는지 먼저 물어보세요.

사용자가 마스크 위치를 질문하도록 자연스럽게 유도하세요.
`,
  },

  {
    id: 'vitamin-question',

    text: '비타민 추천받기',

    difficulty: 'easy',

    exp: 5,

    prompt: `
사용자가 피곤해 보이는 상황입니다.

피로 회복용 제품을 짧게 추천하세요.

사용자가 비타민 관련 질문을 하도록 자연스럽게 진행하세요.
`,
  },

  {
    id: 'cold-medicine',

    text: '감기약 문의하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 몸 상태가 좋지 않아 보입니다.

어떤 증상이 있는지 먼저 물어보세요.

증상에 맞는 약을 자연스럽게 추천하세요.
`,
  },

  {
    id: 'stomachache',

    text: '배 아픈 증상 설명하기',

    difficulty: 'normal',

    exp: 10,

    prompt: `
사용자가 배를 만지며 약 코너를 보고 있습니다.

어디가 아픈지 먼저 물어보세요.

증상과 통증 정도를 자연스럽게 질문하세요.

복용 방법도 짧게 설명해주세요.
`,
  },

  {
    id: 'skin-problem',

    text: '피부 트러블용 제품 물어보기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 피부 관련 제품 코너를 오래 보고 있습니다.

어떤 피부 고민이 있는지 먼저 물어보세요.

추천 제품 특징도 자연스럽게 설명하세요.
`,
  },

  {
    id: 'medicine-howto',

    text: '복용 방법 설명 듣기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
사용자가 약을 고른 상황입니다.

복용 방법을 자연스럽게 설명하세요.

하루 몇 번 먹는지,
식전인지 식후인지 짧게 안내하세요.

사용자가 질문할 수 있도록 대화를 이어가세요.
`,
  },

  {
    id: 'allergy-question',

    text: '알레르기 여부 설명하기',

    difficulty: 'hard',

    exp: 20,

    prompt: `
약 추천 전 알레르기 여부를 먼저 확인하세요.

사용자가 자신의 알레르기를 설명하도록 자연스럽게 질문하세요.
`,
  },

  {
    id: 'symptom-explanation',

    text: '몸 상태 자세히 설명하기',

    difficulty: 'special',

    exp: 35,

    prompt: `
  사용자가 약 코너에서 오래 고민하고 있습니다.

  먼저 어떤 증상이 있는지 물어보세요.

  증상, 통증 위치, 지속 시간 등을 차례로 질문하세요.

  실제 일본 약사처럼 자연스럽게 대화를 이어가세요.
  `,
  },

  {
    id: 'staff-fast-speaking',

    text: '빠른 설명 다시 물어보기',

    difficulty: 'special',

    exp: 35,

    prompt: `
약 설명을 한 번 빠르게 진행하세요.

사용자가 다시 설명을 요청할 수 있도록 자연스럽게 반응하세요.
`,
  },
]

export default drugstoreMissions