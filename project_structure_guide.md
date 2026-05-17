# JellyTalk 프로젝트 구조 가이드

이 문서는 JellyTalk 프로젝트의 폴더 및 파일 역할을 정리한 기준 문서이다.

목적:

- 파일 역할 혼동 방지
- 기능 추가 시 위치 기준 통일
- 구조 꼬임 방지
- 도시/미션 확장 대비

---

# 전체 구조

```text
src/
 ├ assets/
 │
 ├ content/
 │   └ cities/
 │       └ fukuoka/
 │           ├ day1/
 │           ├ day2/
 │           ├ day3/
 │           ├ meta.js
 │           └ dayData.js
 │
 ├ store/
 │   ├ adventureStore.js
 │   ├ attendanceStore.js
 │   └ settingsStore.js
 │
 ├ utils/
 │   ├ expUtils.js
 │   ├ missionUtils.js
 │   ├ storage.js
 │   └ timeUtils.js
 │
 ├ pages/
 │   ├ HomePage.jsx
 │   ├ AdventurePage.jsx
 │   ├ AttendancePage.jsx
 │   └ SettingsPage.jsx
 │
 ├ components/
 │   ├ MissionPopup.jsx
 │   ├ ExpBar.jsx
 │   ├ LevelBadge.jsx
 │   └ TimerModal.jsx
 │
 ├ App.jsx
 ├ App.css
 └ main.jsx

 assets/

정적 리소스 저장 폴더.

예:

지도 이미지
UI 아이콘
픽셀 버튼
폰트
배경 이미지
규칙
로직 금지
JS 파일 금지
오직 리소스만 저장

예:

assets/
 ├ fonts/
 ├ maps/
 ├ ui/
 └ icons/
content/

게임 콘텐츠 데이터 저장 폴더.

핵심 원칙:

게임 데이터와 UI를 분리한다.

여기에는:

도시 데이터
장소 데이터
미션 데이터
랜덤 이벤트 데이터

만 저장.

content/cities/

도시별 콘텐츠 저장.

예:

cities/
 ├ fukuoka/
 ├ osaka/
 └ tokyo/

도시 추가 시 구조 재사용.

fukuoka/day1/

DAY별 콘텐츠 저장 폴더.

예:

day1/
 ├ missionPools.js
 └ places.js
missionPools.js

랜덤 미션 후보 목록 저장.

역할:

장소별 미션 리스트 정의
난이도 정의
EXP 정의

예:

{
  hotel: [
    {
      id: "hotel-checkin-1",
      title: "체크인 하기",
      exp: 20
    }
  ]
}
places.js

맵 버튼 위치 데이터 저장.

역할:

장소 이름
좌표
연결 미션
버튼 위치

예:

{
  id: "hotel",
  label: "호텔",
  x: "62%",
  y: "48%"
}
meta.js

도시 메타 정보 저장.

예:

{
  cityName: "후쿠오카",
  totalDays: 3
}

역할:

도시 제목
설명
대표 이미지
DAY 개수
dayData.js

DAY 데이터 연결용 파일.

역할:

현재 DAY 데이터를 통합 export

예:

{
  day1,
  day2,
  day3
}

목적:

HomePage에서 데이터 접근 단순화
store/

전역 상태 관리 폴더.

핵심:

현재 플레이 상태 저장

여기에는:

EXP
레벨
출석
진행 중 미션
설정 상태

등 저장.

adventureStore.js

게임 진행 핵심 상태 저장.

가장 중요한 파일.

관리 데이터:

totalExp
level
activeMission
completedMissions
claimableMission
streak

예:

activeMission: {
  missionId: "hotel-1",
  startedAt: 1710000000
}
절대 넣지 말 것
UI 스타일
버튼 색상
JSX
attendanceStore.js

출석 관련 상태 저장.

예:

오늘 출석 여부
연속 출석
마지막 출석 날짜
settingsStore.js

설정 상태 저장.

예:

알림 여부
사운드 여부
진동 여부
utils/

공통 로직 함수 모음.

핵심 원칙:

반복 로직을 분리한다.
expUtils.js

EXP 계산 함수 저장.

예:

calculateLevel()
calculateExpProgress()

역할:

레벨 계산
게이지 계산
필요 EXP 계산
missionUtils.js

미션 관련 로직 저장.

예:

startMission()
completeMission()
canClaimMission()

역할:

미션 상태 변경
완료 가능 여부 계산
랜덤 미션 생성
storage.js

localStorage 관리 파일.

예:

saveGame()
loadGame()
resetSave()

핵심:

저장 관련 코드를 한 곳에 모은다.
timeUtils.js

시간 계산 함수 저장.

예:

isMissionExpired()
formatRemainingTime()

역할:

타이머 계산
남은 시간 계산
날짜 비교
pages/

실제 화면 단위 컴포넌트.

규칙:

페이지 = 화면 단위
HomePage.jsx

메인 맵 화면.

역할:

맵 표시
장소 버튼 표시
미션 팝업 열기

핵심:

게임 허브 화면
AdventurePage.jsx

플레이 진행 상태 화면.

표시:

레벨
EXP 게이지
완료 미션
진행 중 미션

핵심:

RPG 상태창
AttendancePage.jsx

출석 화면.

표시:

출석 달력
연속 출석
출석 EXP
SettingsPage.jsx

설정 화면.

표시:

알림 설정
저장 백업
저장 복원
components/

재사용 UI 컴포넌트.

규칙:

여러 페이지에서 재사용 가능한 UI만 저장
MissionPopup.jsx

미션 카드 팝업 UI.

표시:

미션 제목
목표
EXP
시작 버튼
ExpBar.jsx

EXP 게이지 UI.

표시:

LV 3
██████░░░░
70 / 100
LevelBadge.jsx

레벨 표시 UI.

예:

LV 5
TimerModal.jsx

미션 진행 타이머 UI.

표시:

남은 시간
진행 상태
미션 중지 버튼
App.jsx

앱 전체 구조 관리.

역할:

페이지 전환
레이아웃 연결
전역 구조 관리
App.css

전역 스타일 파일.

역할:

공통 색상
폰트
애니메이션
레이아웃
main.jsx

앱 시작 진입 파일.

역할:

React mount
App 연결
구조 설계 핵심 원칙
1. 콘텐츠와 상태를 분리한다
content = 게임 데이터
store = 플레이 상태

절대 섞지 않는다.

2. UI와 로직을 분리한다
components = UI
utils = 계산 로직
3. 도시 확장 가능 구조 유지

새 도시 추가 시:

cities/
 ├ fukuoka/
 ├ osaka/
 └ tokyo/

형태 유지.

4. 상태 저장은 store 중심

진행 데이터는:

local state
props

에 흩뿌리지 않는다.

가능하면 store 중심 유지.

현재 MVP 핵심 우선순위
adventureStore
activeMission 상태
타이머
미션 완료 처리
EXP 지급
모험 페이지
출석 연동
도시 확장
현재 구조 핵심 방향
맵 = 콘텐츠
모험 = 게임 진행 상태

JellyTalk의 핵심은:

여행 회화를 게임처럼 지속하게 만드는 것

이다.

[플레이어 카드]
 ├ 레벨
 ├ EXP 게이지
 └ 총 EXP

[진행 중 미션]
 ├ 남은 시간
 └ EXP 받기

[연속 학습]
 └ 스트릭 표시

[여행 진행도]
 └ DAY 진행률

[최근 완료 미션]
 └ 최근 플레이 기록