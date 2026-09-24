// ============================================================
// 아이돌 댄스 챌린지 월드컵 후보 데이터 (v1)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명 / 솔로 아티스트명)
//   group     : 세대 · 데뷔년월 (표시용) — 솔로는 "SOLO"로 표시
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 Shorts/영상 주소의 v= (또는 /shorts/) 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 전부 유튜브 숏츠(댄스 챌린지 영상) 링크 기준으로 채웠습니다. 그룹/멤버 소속은
// oEmbed·해시태그·공식 채널 확인을 거쳐 실제 곡 소유 아티스트 기준으로 정리했고,
// 사용자가 준 원래 추측과 다르게 확인된 경우는 주석에 표시했습니다.
// 일부는 그룹 활동이 아니라 멤버 솔로(또는 유닛) 곡이라 group을 "SOLO"로 표시하고
// 소속 그룹을 주석에 남겼습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 32곡 ----
  { id: "f01", name: "로제 (ROSÉ)", group: "SOLO", song: "APT. (Feat. Bruno Mars)", gender: "female", youtubeId: "m7AD2GKqI10", start: 0 }, // BLACKPINK 로제 솔로
  { id: "f02", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "Magnetic", gender: "female", youtubeId: "r7LNOSw2-OU", start: 0 },
  { id: "f03", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "Hype Boy", gender: "female", youtubeId: "KrtYasOGibU", start: 0 },
  { id: "f04", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Supernova", gender: "female", youtubeId: "_DsBg8L6axc", start: 0 },
  { id: "f05", name: "(G)I-DLE", group: "4세대 · 2018.05 데뷔", song: "퀸카 (Queencard)", gender: "female", youtubeId: "SJtQjTQXUOg", start: 0 },
  { id: "f06", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "It's Me", gender: "female", youtubeId: "2kMgI3dxaaA", start: 0 },
  { id: "f07", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "Cherish (My Love)", gender: "female", youtubeId: "8neMX_8ugEc", start: 0 },
  { id: "f08", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "Super Shy", gender: "female", youtubeId: "FAg1xtscjmg", start: 0 },
  { id: "f09", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Whiplash", gender: "female", youtubeId: "6apGURstM58", start: 0 }, // 동명의 BOYNEXTDOOR 곡과 다른, aespa의 곡
  { id: "f10", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "I AM", gender: "female", youtubeId: "7AWo_sw96j8", start: 0 },
  { id: "f11", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "EASY", gender: "female", youtubeId: "3oq9u-jF2g8", start: 0 },
  { id: "f12", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "CRAZY", gender: "female", youtubeId: "NjsCvjSfKZ0", start: 0 },
  { id: "f13", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "ANTIFRAGILE", gender: "female", youtubeId: "1GwOy9mvB4w", start: 0 },
  { id: "f14", name: "(G)I-DLE", group: "4세대 · 2018.05 데뷔", song: "나는 아픈 건 딱 질색이니까 (Fate)", gender: "female", youtubeId: "mBZDwLoMz9I", start: 0 },
  { id: "f15", name: "지수 (JISOO)", group: "SOLO", song: "꽃 (FLOWER)", gender: "female", youtubeId: "klbdGv5Bz3U", start: 0 }, // BLACKPINK 지수 솔로
  { id: "f16", name: "나연 (NAYEON)", group: "SOLO", song: "POP!", gender: "female", youtubeId: "0xA5a2nN0as", start: 0 }, // TWICE 나연 솔로
  { id: "f17", name: "나연 (NAYEON)", group: "SOLO", song: "ABCD", gender: "female", youtubeId: "wdRs-NMiC2M", start: 0 }, // TWICE 나연 솔로
  { id: "f18", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "What Is Love?", gender: "female", youtubeId: "b4ZS8PFL0hc", start: 0 },
  { id: "f19", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "Look at Me", gender: "female", youtubeId: "YdQhrArmgew", start: 0 },
  { id: "f20", name: "ITZY (있지)", group: "4세대 · 2019.02 데뷔", song: "that's a no no", gender: "female", youtubeId: "vJrNoF6N4mU", start: 0 },
  { id: "f21", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Sticky", gender: "female", youtubeId: "ggtEzUVZ8PI", start: 0 },
  { id: "f23", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "ASAP", gender: "female", youtubeId: "ZA5lGSp8Y2Q", start: 0 },
  { id: "f24", name: "FIFTY FIFTY", group: "4세대 · 2022.11 데뷔", song: "Cupid", gender: "female", youtubeId: "GKSGVP3wEKY", start: 0 },
  { id: "f25", name: "전소미 (Somi)", group: "SOLO", song: "Fast Forward", gender: "female", youtubeId: "Avsh0eMeOGo", start: 0 }, // 전 I.O.I 전소미 솔로
  { id: "f26", name: "BABYMONSTER", group: "5세대 · 2023.11 데뷔", song: "SHEESH", gender: "female", youtubeId: "Ac8UUgAcMaY", start: 0 },
  { id: "f27", name: "이채연 (Lee Chaeyeon)", group: "SOLO", song: "KNOCK", gender: "female", youtubeId: "zlFHrDteY2o", start: 0 }, // 전 IZ*ONE 이채연 솔로
  { id: "f28", name: "리센느 (RESCENE)", group: "5세대 · 2024.03 데뷔", song: "LOVE ATTACK", gender: "female", youtubeId: "gkc_z7HdjTg", start: 0 },
  { id: "f29", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", song: "Dumb Dumb", gender: "female", youtubeId: "-rPhOc1xGrw", start: 0 },
  { id: "f30", name: "Kep1er", group: "4세대 · 2022.01 데뷔", song: "WA DA DA", gender: "female", youtubeId: "SxSylL4auAs", start: 0 },
  { id: "f31", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "Teddy Bear", gender: "female", youtubeId: "dkKLewCCpuc", start: 0 },
  { id: "f33", name: "최예나 (YENA)", group: "SOLO", song: "Catch Catch", gender: "female", youtubeId: "hyjqzvG2WEg", start: 0 }, // 전 IZ*ONE 최예나 솔로
  { id: "f34", name: "VIVIZ", group: "4세대 · 2022.02 데뷔", song: "MANIAC", gender: "female", youtubeId: "yQwIi6Hj1TM", start: 0 }, // VIVIZ(비비지) 자체 곡. Stray Kids의 동명곡과는 다른 곡 — 여돌 항목으로 정정

  // ---- 남돌 (male) — 32곡 ----
  { id: "m01", name: "카이 (Kai)", group: "SOLO", song: "Rover", gender: "male", youtubeId: "6BhCTJXMdy8", start: 0 }, // EXO 카이 솔로 (CORTIS 아님)
  { id: "m02", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", song: "손오공 (Son Oh Gong)", gender: "male", youtubeId: "_2Htu6xNQ6c", start: 0 },
  { id: "m03", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", song: "음악의 신 (God of Music)", gender: "male", youtubeId: "3Mh6sEJWg2k", start: 0 },
  { id: "m04", name: "부석순 (BSS)", group: "유닛 · 2023.02 결성 (SEVENTEEN)", song: "파이팅 해야지 (Feat. 이영지)", gender: "male", youtubeId: "g2L30gN16Fs", start: 0 },
  { id: "m05", name: "NCT U", group: "3세대 · 2016.04 데뷔", song: "Baggy Jeans", gender: "male", youtubeId: "mys1LIf-xkQ", start: 0 },
  { id: "m06", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Get A Guitar", gender: "male", youtubeId: "rakEJQlO3fU", start: 0 },
  { id: "m07", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "첫 만남은 계획대로 되지 않아 (Plot Twist)", gender: "male", youtubeId: "0C4huSGeOck", start: 0 },
  { id: "m08", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "Bite Me", gender: "male", youtubeId: "_NZcUs_cRGs", start: 0 },
  { id: "m09", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "Brought The Heat Back", gender: "male", youtubeId: "sRZG0W8UnWQ", start: 0 },
  { id: "m10", name: "태양 (Taeyang)", group: "SOLO", song: "VIBE (Feat. Jimin of BTS)", gender: "male", youtubeId: "LxeKQNdwK9s", start: 0 }, // BIGBANG 태양 솔로 (SEVENTEEN 아님)
  { id: "m11", name: "태민 (Taemin)", group: "SOLO", song: "Guilty", gender: "male", youtubeId: "5Cy4FDpqsBE", start: 0 }, // SHINee 태민 솔로
  { id: "m12", name: "TXT", group: "4세대 · 2019.03 데뷔", song: "Sugar Rush Ride", gender: "male", youtubeId: "kFw1qAC-dY4", start: 0 },
  { id: "m13", name: "TXT", group: "4세대 · 2019.03 데뷔", song: "Deja Vu", gender: "male", youtubeId: "8L76BR0xlys", start: 0 },
  { id: "m14", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "Bouncy (K-Hot Chili Peppers)", gender: "male", youtubeId: "eOjLYbKVS7s", start: 0 },
  { id: "m15", name: "BOYNEXTDOOR", group: "5세대 · 2023.06 데뷔", song: "Earth, Wind & Fire", gender: "male", youtubeId: "87lj-n5Xeio", start: 0 },
  { id: "m16", name: "연준 (Yeonjun)", group: "SOLO", song: "GGUM (꿈)", gender: "male", youtubeId: "sjpEnOXKZ7E", start: 0 }, // TXT 연준 솔로 믹스테잎 (범규 출연) — 사용자 지정 링크로 교체 (기존: ZEROBASEONE GOOD SO BAD)
  { id: "m17", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "S-Class", gender: "male", youtubeId: "zVneES4ipy4", start: 0 }, // 사용자 지정 링크로 교체
  { id: "m18", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "OVERDRIVE", gender: "male", youtubeId: "3Jt4beqPp60", start: 0 },
  { id: "m19", name: "BOYNEXTDOOR", group: "5세대 · 2023.06 데뷔", song: "One and Only", gender: "male", youtubeId: "m_ouWOeBuco", start: 0 },
  { id: "m20", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "BAD", gender: "male", youtubeId: "z0s8bjdJbKI", start: 0 },
  { id: "m21", name: "CORTIS", group: "5세대 · 2025.08 데뷔", song: "RED RED", gender: "male", youtubeId: "cz9qwOmRYA4", start: 0 },
  { id: "m22", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "Sweet Venom", gender: "male", youtubeId: "JMJr5N6sYsE", start: 0 },
  { id: "m23", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "락 (樂)", gender: "male", youtubeId: "SFZnNSzlXrs", start: 0 },
  { id: "m24", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "소리꾼 (Thunderous)", gender: "male", youtubeId: "OO9nW8_rbHk", start: 0 },
  { id: "m25", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Love 119", gender: "male", youtubeId: "RT_yJh4jHz0", start: 0 },
  { id: "m26", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Boom Boom Bass", gender: "male", youtubeId: "sSAm9vK4S0c", start: 0 },
  { id: "m27", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Talk Saxy", gender: "male", youtubeId: "Esg_1R02J8o", start: 0 },
  { id: "m28", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "In Bloom", gender: "male", youtubeId: "BG7fdZcPfc4", start: 0 },
  { id: "m29", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "Crazy Form (미친 폼)", gender: "male", youtubeId: "7BEfavg99Sc", start: 0 },
  { id: "m30", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "Steady", gender: "male", youtubeId: "ZYSnVmXC5-k", start: 0 },
  { id: "m31", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "WORK", gender: "male", youtubeId: "QscxS8FqHP4", start: 0 },
  { id: "m32", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "XO (Only If You Say Yes)", gender: "male", youtubeId: "N8BkhJ8-KyI", start: 0 },
];
