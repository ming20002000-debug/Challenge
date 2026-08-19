/**
 * ============================================================================
 *  아이돌 챌린지 월드컵 - 데이터 파일 (data.js)
 * ============================================================================
 *  이 파일 하나만 수정하면 대회 항목을 자유롭게 추가·수정·삭제할 수 있습니다.
 *  코드(app.js)는 절대 건드릴 필요 없습니다.
 *
 *  각 항목(객체)의 필드 설명
 *  ----------------------------------------------------------------------
 *  id            : 고유 번호. 다른 항목과 겹치지 않게만 하면 숫자/문자 상관없음.
 *  challengeName : 챌린지(원조 안무/유행)의 이름. 카드에 크게 표시됩니다.
 *  idolName      : 원조로 인정되는 아이돌(또는 팀) 이름.
 *  group         : 소속 그룹명. 솔로거나 그룹 자체가 이름이면 idolName과 같아도 됩니다.
 *  gender        : "F" = 여돌, "M" = 남돌. 대진 매칭에 사용되는 핵심 값입니다.
 *  youtubeId     : 유튜브 영상 주소에서 v= 뒤에 오는 11자리 코드.
 *                  예) https://www.youtube.com/watch?v=abcdefgh123  ->  "abcdefgh123"
 *  startSeconds  : (선택) 영상 재생을 몇 초부터 시작할지. 챌린지 부분부터 보여주고
 *                  싶을 때 초 단위로 입력하세요. 모르면 0으로 두면 처음부터 재생됩니다.
 *  source        : (선택) 참고한 기사/자료 링크. 검증용이니 없어도 동작에는 문제 없음.
 *
 *  새 항목을 추가하려면 아래 배열 맨 끝에 { ... } 형태로 하나 더 추가하고
 *  콤마(,)를 잘 챙겨주세요. 편집기(editor.html)를 이용하면 이 파일을 몰라도
 *  화면에서 편하게 추가/수정 후 새 data.js를 내려받을 수 있습니다.
 * ============================================================================
 */

const CHALLENGE_DATA = [
  // ------------------------- 남돌 (Male idols) -------------------------
  {
    id: "m01",
    challengeName: "아무노래 챌린지",
    idolName: "지코",
    group: "지코 (전 블락비)",
    gender: "M",
    youtubeId: "UdyjeUwPz_E",
    startSeconds: 0,
    source: "https://namu.wiki/w/%EC%95%84%EB%AC%B4%EB%85%B8%EB%9E%98"
  },
  {
    id: "m02",
    challengeName: "Left and Right 챌린지",
    idolName: "정국",
    group: "방탄소년단",
    gender: "M",
    youtubeId: "SxB8Gi87c7w",
    startSeconds: 0,
    source: "https://www.allkpop.com/article/2022/09/charlie-puth-and-bts-jungkooks-left-and-right-mv-hits-200-million-views-on-youtube"
  },
  {
    id: "m03",
    challengeName: "Kick It 챌린지",
    idolName: "NCT 127",
    group: "NCT 127",
    gender: "M",
    youtubeId: "2OvyA2__Eas",
    startSeconds: 0,
    source: "https://www.kpopmap.com/nct-127-invites-you-to-participate-in-kickitchallenge-with-them/"
  },
  {
    id: "m04",
    challengeName: "손오공 챌린지",
    idolName: "세븐틴",
    group: "세븐틴",
    gender: "M",
    youtubeId: "-GQg25oP0S4",
    startSeconds: 0,
    source: "https://www.wikitree.co.kr/articles/850839"
  },
  {
    id: "m05",
    challengeName: "특(S-Class) 챌린지",
    idolName: "스트레이 키즈",
    group: "Stray Kids",
    gender: "M",
    youtubeId: "MmFuxhOVz_I",
    startSeconds: 0,
    source: "https://x.com/Stray_Kids/status/1664516889564049408"
  },
  {
    id: "m06",
    challengeName: "사랑을 했다 챌린지",
    idolName: "아이콘",
    group: "iKON",
    gender: "M",
    youtubeId: "vecSVX1QYbQ",
    startSeconds: 0,
    source: "https://www.tiktok.com/discover/%EC%82%AC%EB%9E%91%EC%9D%84-%ED%96%88%EB%8B%A4-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EC%95%84%EC%9D%B4%EC%BD%98"
  },
  {
    id: "m07",
    challengeName: "다이너마이트 챌린지",
    idolName: "방탄소년단",
    group: "방탄소년단",
    gender: "M",
    youtubeId: "gdZLi9oWNZg",
    startSeconds: 0,
    source: "https://www.koreaboo.com/news/bts-starts-dynamite-tiktok-challenge-asks-fans-join-in-party/"
  },
  {
    id: "m08",
    challengeName: "맛(Hot Sauce) 챌린지",
    idolName: "NCT DREAM",
    group: "NCT DREAM",
    gender: "M",
    youtubeId: "PkKnp4SdE-w",
    startSeconds: 0,
    source: "https://filmot.com/video/qc0mfbKXp9E/"
  },
  {
    id: "m09",
    challengeName: "BAD 챌린지",
    idolName: "에이티즈",
    group: "ATEEZ",
    gender: "M",
    youtubeId: "-q_S27LbNKU",
    startSeconds: 0,
    source: "https://www.youtube.com/watch?v=WumtpeTUsu8"
  },
  {
    id: "m10",
    challengeName: "Love Language 안무 챌린지",
    idolName: "투모로우바이투게더",
    group: "TXT",
    gender: "M",
    youtubeId: "8aRTMQvbODs",
    startSeconds: 0,
    source: "https://x.com/TXT_bighit/status/1927303817747403120"
  },
  {
    id: "m11",
    challengeName: "닥터! 닥터! 챌린지",
    idolName: "제로베이스원",
    group: "ZEROBASEONE",
    gender: "M",
    youtubeId: "9BXF8gSpEwY",
    startSeconds: 0,
    source: "https://www.raonnews.com/news/article.html?no=44255"
  },
  {
    id: "m12",
    challengeName: "Nectar 안무 챌린지",
    idolName: "더보이즈",
    group: "THE BOYZ",
    gender: "M",
    youtubeId: "X1fx08M_SSY",
    startSeconds: 0,
    source: "https://www.heraldpop.com/article/3357669"
  },
  {
    id: "m13",
    challengeName: "VAGABOND 챌린지",
    idolName: "트렌드지",
    group: "TRENDZ",
    gender: "M",
    youtubeId: "TXGuS2gxA1A",
    startSeconds: 0,
    source: "https://news.nate.com/view/20221208n08568"
  },
  {
    id: "m14",
    challengeName: "한탕(One Shot) 챌린지",
    idolName: "펜타곤",
    group: "PENTAGON",
    gender: "M",
    youtubeId: "tc7IGPzG2Xg",
    startSeconds: 0,
    source: "https://theqoo.net/index.php?mid=ktalk&document_srl=2337660125"
  },
  {
    id: "m15",
    challengeName: "그루비(Groovy) 챌린지",
    idolName: "크래비티",
    group: "CRAVITY",
    gender: "M",
    youtubeId: "SPhna363o2M",
    startSeconds: 0,
    source: "http://www.osen.co.kr/article/G1112064528"
  },
  {
    id: "m16",
    challengeName: "판타지아(FANTASIA) 챌린지",
    idolName: "몬스타엑스",
    group: "MONSTA X",
    gender: "M",
    youtubeId: "AlxVkWRal2s",
    startSeconds: 0,
    source: "https://news.nate.com/view/20200605n10190?mid=n1101"
  },

  // ------------------------- 여돌 (Female idols) -------------------------
  {
    id: "f01",
    challengeName: "마리아 챌린지",
    idolName: "화사",
    group: "화사 (마마무)",
    gender: "F",
    youtubeId: "tDukIfFzX18",
    startSeconds: 0,
    source: "https://v.daum.net/v/jpBX0RXEHm?f=p"
  },
  {
    id: "f02",
    challengeName: "퀸카(Queencard) 챌린지",
    idolName: "전소연",
    group: "(여자)아이들",
    gender: "F",
    youtubeId: "AKg_9dn_VmA",
    startSeconds: 0,
    source: "https://namu.wiki/w/%ED%80%B8%EC%B9%B4%20(Queencard)"
  },
  {
    id: "f03",
    challengeName: "하입보이(Hype Boy) 챌린지",
    idolName: "뉴진스",
    group: "NewJeans",
    gender: "F",
    youtubeId: "FhjaCdgtN2A",
    startSeconds: 0,
    source: "https://www.nocutnews.co.kr/news/6406559"
  },
  {
    id: "f04",
    challengeName: "보라빛 밤 챌린지",
    idolName: "선미",
    group: "선미",
    gender: "F",
    youtubeId: "Is7glC9Jp7Q",
    startSeconds: 0,
    source: "https://www.hankookilbo.com/News/Read/A202006241311000051"
  },
  {
    id: "f05",
    challengeName: "The Feels 챌린지",
    idolName: "트와이스",
    group: "TWICE",
    gender: "F",
    youtubeId: "f5_wn8mexmM",
    startSeconds: 0,
    source: "https://www.tiktok.com/discover/Feels-%EC%B1%8C%EB%A6%B0%EC%A7%80"
  },
  {
    id: "f06",
    challengeName: "해야(HEYA) 챌린지",
    idolName: "장원영",
    group: "IVE",
    gender: "F",
    youtubeId: "QwP9-ZCuEXI",
    startSeconds: 0,
    source: "https://www.tiktok.com/tag/%EC%9E%A5%EC%9B%90%EC%98%81%EC%B1%8C%EB%A6%B0%EC%A7%80"
  },
  {
    id: "f07",
    challengeName: "뿜뿜(BBoom BBoom) 챌린지",
    idolName: "모모랜드",
    group: "MOMOLAND",
    gender: "F",
    youtubeId: "JQGRg8XBnB4",
    startSeconds: 0,
    source: "https://www.mksports.co.kr/news/entertain/9741990"
  },
  {
    id: "f08",
    challengeName: "춤(CHOOM) 챌린지",
    idolName: "베이비몬스터",
    group: "BABYMONSTER",
    gender: "F",
    youtubeId: "H3OknbTnIDk",
    startSeconds: 0,
    source: "https://www.spotvnews.co.kr/news/articleView.html?idxno=817812"
  },
  {
    id: "f09",
    challengeName: "마그네틱(Magnetic) 챌린지",
    idolName: "아일릿",
    group: "ILLIT",
    gender: "F",
    youtubeId: "Vk5-c_v4gMU",
    startSeconds: 0,
    source: "https://www.mhnse.com/news/articleView.html?idxno=338328"
  },
  {
    id: "f10",
    challengeName: "덤더럼(Dumhdurum) 챌린지",
    idolName: "에이핑크",
    group: "Apink",
    gender: "F",
    youtubeId: "ho3060cUdF0",
    startSeconds: 0,
    source: "https://weverse.io/apink/media/0-105457539?hl=ko"
  },
  {
    id: "f11",
    challengeName: "슈퍼 그럼요(Super Yuppers!) 챌린지",
    idolName: "우주소녀 쪼꼬미",
    group: "WJSN Chocome",
    gender: "F",
    youtubeId: "i_RDuVQnYjo",
    startSeconds: 0,
    source: "https://www.starnewskorea.com/music/2022/02/02/2022012811341087756"
  },
  {
    id: "f12",
    challengeName: "LIGHTS ON 챌린지",
    idolName: "위클리",
    group: "Weeekly",
    gender: "F",
    youtubeId: "chyiT611zHM",
    startSeconds: 0,
    source: "https://www.heraldpop.com/article/3450054"
  },
  {
    id: "f13",
    challengeName: "MANIAC 챌린지",
    idolName: "비비지",
    group: "VIVIZ",
    gender: "F",
    youtubeId: "BtXGQGNCtyo",
    startSeconds: 0,
    source: "https://news.nate.com/view/20231214n33702"
  },
  {
    id: "f14",
    challengeName: "Cupid 챌린지",
    idolName: "피프티피프티",
    group: "FIFTY FIFTY",
    gender: "F",
    youtubeId: "dsL8VvJnrFo",
    startSeconds: 0,
    source: "https://www.tiktok.com/discover/cupid-fifty-fifty-dance"
  },
  {
    id: "f15",
    challengeName: "ASAP 챌린지",
    idolName: "스테이씨",
    group: "STAYC",
    gender: "F",
    youtubeId: "NsY-9MCOIAQ",
    startSeconds: 0,
    source: "https://v.daum.net/v/cRPMtKY7qI"
  },
  {
    id: "f16",
    challengeName: "톰보이(TOMBOY) 챌린지",
    idolName: "(여자)아이들",
    group: "(여자)아이들",
    gender: "F",
    youtubeId: "Jh4QFaPmdss",
    startSeconds: 0,
    source: "https://namu.wiki/w/TOMBOY(i-dle)"
  }
];

// 브라우저와 Node.js(편집기 내보내기 등) 양쪽에서 다 쓸 수 있도록 내보내기 처리
if (typeof module !== "undefined" && module.exports) {
  module.exports = CHALLENGE_DATA;
}
