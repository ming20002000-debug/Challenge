/**
 * ============================================================================
 *  아이돌 챌린지 월드컵 - 메인 로직 (app.js)
 *  이 파일은 웬만하면 건드릴 필요 없습니다. 항목 수정은 data.js에서 하세요.
 * ============================================================================
 */

(function () {
  "use strict";

  const STORAGE_KEY = "idolChallengeWorldcup.v1";
  const SIZES = [8, 32, 64, 128];

  const DATA = (typeof CHALLENGE_DATA !== "undefined" ? CHALLENGE_DATA : []).filter(
    (d) => d && d.id && d.youtubeId && (d.gender === "F" || d.gender === "M")
  );
  const DATA_BY_ID = Object.fromEntries(DATA.map((d) => [d.id, d]));

  // ---------------------------------------------------------------------
  // 유틸
  // ---------------------------------------------------------------------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* 저장 실패해도 진행에는 문제 없도록 무시 */
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function clearState() {
    localStorage.removeItem(STORAGE_KEY);
  }

  // ---------------------------------------------------------------------
  // 대진 생성 로직
  // ---------------------------------------------------------------------

  // 매 라운드: 남은 인원을 성별로 나눠서 최대한 이성 매칭, 부족분은 동성 매칭
  function pairRound(idList) {
    const females = shuffle(idList.filter((id) => DATA_BY_ID[id].gender === "F"));
    const males = shuffle(idList.filter((id) => DATA_BY_ID[id].gender === "M"));

    const matches = [];
    while (females.length > 0 && males.length > 0) {
      matches.push({ aId: females.pop(), bId: males.pop(), winnerId: null });
    }
    // 성비가 안 맞아 남는 인원은 동성끼리 매칭
    const leftover = shuffle([...females, ...males]);
    while (leftover.length >= 2) {
      matches.push({ aId: leftover.pop(), bId: leftover.pop(), winnerId: null });
    }
    return shuffle(matches);
  }

  function pickParticipants(size) {
    const females = shuffle(DATA.filter((d) => d.gender === "F"));
    const males = shuffle(DATA.filter((d) => d.gender === "M"));
    const half = size / 2;

    let chosenF = females.slice(0, Math.min(half, females.length));
    let chosenM = males.slice(0, Math.min(half, males.length));

    let chosen = [...chosenF, ...chosenM];
    if (chosen.length < size) {
      const usedIds = new Set(chosen.map((d) => d.id));
      const rest = shuffle(DATA.filter((d) => !usedIds.has(d.id)));
      chosen = chosen.concat(rest.slice(0, size - chosen.length));
    }
    return shuffle(chosen).map((d) => d.id);
  }

  function availableSizes() {
    return SIZES.map((size) => ({
      size,
      enabled: DATA.length >= size,
      females: DATA.filter((d) => d.gender === "F").length,
      males: DATA.filter((d) => d.gender === "M").length,
    }));
  }

  // ---------------------------------------------------------------------
  // 상태
  // ---------------------------------------------------------------------
  let state = null; // { bracketSize, rounds: [{matches:[...]}], currentRoundIndex, currentMatchIndex, championId }

  function startTournament(size) {
    const ids = pickParticipants(size);
    state = {
      bracketSize: size,
      rounds: [{ matches: pairRound(ids) }],
      currentRoundIndex: 0,
      currentMatchIndex: 0,
      championId: null,
    };
    saveState();
    renderApp();
  }

  function currentRound() {
    return state.rounds[state.currentRoundIndex];
  }

  function currentMatch() {
    return currentRound().matches[state.currentMatchIndex];
  }

  function pickWinner(winnerId) {
    const match = currentMatch();
    match.winnerId = winnerId;

    const round = currentRound();
    const isRoundDone = round.matches.every((m) => m.winnerId);

    if (isRoundDone) {
      if (round.matches.length === 1) {
        state.championId = round.matches[0].winnerId;
        saveState();
        renderApp();
        return;
      }
      const winners = round.matches.map((m) => m.winnerId);
      state.rounds.push({ matches: pairRound(winners) });
      state.currentRoundIndex += 1;
      state.currentMatchIndex = 0;
    } else {
      state.currentMatchIndex += 1;
    }
    saveState();
    renderApp();
  }

  function resetAll() {
    clearState();
    state = null;
    renderApp();
  }

  function roundLabel(count) {
    return count === 2 ? "결승" : count + "강";
  }

  // ---------------------------------------------------------------------
  // 렌더링
  // ---------------------------------------------------------------------
  const root = document.getElementById("app-root");

  function renderApp() {
    if (!state) {
      renderStart();
    } else if (state.championId) {
      renderResult();
    } else {
      renderMatch();
    }
  }

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function renderStart() {
    const saved = loadState();
    const sizes = availableSizes();
    let selected = null;

    const wrap = el(`
      <div>
        <div class="hero">
          <h1>원조 아이돌<br/><span class="accent">챌린지 월드컵</span></h1>
          <p>모든 대결은 여돌 vs 남돌. 진짜로 유행을 처음 만든 원조 챌린지는 누구?</p>
        </div>
        ${
          saved && !saved.championId
            ? `<div class="panel" style="text-align:center;margin-bottom:20px;">
                <p style="margin:0 0 12px;color:var(--text-dim);font-size:13px;">
                  이전에 진행하던 대진이 있어요 (${roundLabel(saved.rounds[saved.currentRoundIndex].matches.length * 2)})
                </p>
                <button class="btn primary" id="resume-btn">이어하기</button>
              </div>`
            : ""
        }
        <div class="panel">
          <div class="size-grid" id="size-grid"></div>
          <div class="start-cta">
            <button class="btn primary" id="start-btn" disabled>대진 시작하기</button>
          </div>
          <p class="pool-note">현재 데이터베이스: 여돌 ${sizes[0].females}명 · 남돌 ${sizes[0].males}명 (총 ${DATA.length}명)</p>
        </div>
      </div>
    `);

    const grid = wrap.querySelector("#size-grid");
    sizes.forEach((s) => {
      const card = el(`
        <div class="size-card ${s.enabled ? "" : "disabled"}" data-size="${s.size}">
          <div class="num">${s.size}강</div>
          <div class="label">${s.enabled ? "선택 가능" : "데이터 부족"}</div>
          <div class="avail">필요 ${s.size}명 / 보유 ${DATA.length}명</div>
        </div>
      `);
      if (s.enabled) {
        card.addEventListener("click", () => {
          selected = s.size;
          grid.querySelectorAll(".size-card").forEach((c) => c.classList.remove("selected"));
          card.classList.add("selected");
          wrap.querySelector("#start-btn").disabled = false;
        });
      }
      grid.appendChild(card);
    });

    wrap.querySelector("#start-btn").addEventListener("click", () => {
      if (selected) startTournament(selected);
    });

    const resumeBtn = wrap.querySelector("#resume-btn");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        state = saved;
        renderApp();
      });
    }

    root.replaceChildren(wrap);
    renderHeader(false);
  }

  function youtubeThumb(youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  function contestantCard(id, onPick) {
    const d = DATA_BY_ID[id];
    const card = el(`
      <div class="contestant gender-${d.gender}">
        <div class="media-wrap" data-role="media">
          <img src="${youtubeThumb(d.youtubeId)}" alt="${d.challengeName}" loading="lazy" />
          <div class="play-badge" data-role="play"></div>
        </div>
        <div class="contestant-info">
          <span class="gender-tag ${d.gender}">${d.gender === "F" ? "여돌" : "남돌"}</span>
          <p class="challenge-name">${d.challengeName}</p>
          <p class="idol-name">${d.idolName} · ${d.group}</p>
        </div>
        <button class="btn primary pick-btn" data-role="pick">이 챌린지 선택</button>
      </div>
    `);

    const media = card.querySelector('[data-role="media"]');
    let playing = false;
    media.addEventListener("click", (e) => {
      e.stopPropagation();
      if (playing) return;
      playing = true;
      const start = Number(d.startSeconds) || 0;
      media.innerHTML = `<iframe src="https://www.youtube.com/embed/${d.youtubeId}?autoplay=1&start=${start}&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    });

    card.querySelector('[data-role="pick"]').addEventListener("click", (e) => {
      e.stopPropagation();
      onPick(id);
    });
    card.addEventListener("click", () => onPick(id));

    return card;
  }

  function renderMatch() {
    const round = currentRound();
    const match = currentMatch();
    const label = roundLabel(round.matches.length * 2);
    const total = round.matches.length;
    const progress = Math.round((state.currentMatchIndex / total) * 100);

    const wrap = el(`
      <div>
        <div class="match-progress">
          <span class="round-title">${label}</span>
          <span>${state.currentMatchIndex + 1} / ${total}</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="vs-stage" id="vs-stage">
          <div class="vs-mark">VS</div>
        </div>
      </div>
    `);

    const stage = wrap.querySelector("#vs-stage");
    const cardA = contestantCard(match.aId, pickWinner);
    const cardB = contestantCard(match.bId, pickWinner);
    const vsMark = stage.querySelector(".vs-mark");
    stage.insertBefore(cardA, vsMark);
    stage.appendChild(cardB);

    root.replaceChildren(wrap);
    renderHeader(true);
  }

  function renderResult() {
    const champ = DATA_BY_ID[state.championId];
    const wrap = el(`
      <div class="result-wrap">
        <div class="crown">🏆</div>
        <h2>${state.bracketSize}강 최종 우승</h2>
        <div class="champion-card">
          ${contestantCard(state.championId, () => {}).outerHTML}
        </div>
        <div style="margin-top:24px;display:flex;gap:10px;justify-content:center;">
          <button class="btn primary" id="restart-btn">다시 하기</button>
          <button class="btn" id="bracket-btn">대진표 전체보기</button>
        </div>
      </div>
    `);
    // 우승 카드 클릭 시 아무 동작 안 하도록 재바인딩 (contestantCard의 outerHTML 재사용이라 이벤트가 안 붙어있음 -> 다시 렌더)
    const container = wrap.querySelector(".champion-card");
    container.replaceChildren(contestantCardStatic(state.championId));

    wrap.querySelector("#restart-btn").addEventListener("click", resetAll);
    wrap.querySelector("#bracket-btn").addEventListener("click", openBracketOverlay);

    root.replaceChildren(wrap);
    renderHeader(true);
  }

  // 결과 화면 전용: 클릭해도 선택 로직이 발동하지 않는 카드 (영상 미리보기만 가능)
  function contestantCardStatic(id) {
    const d = DATA_BY_ID[id];
    const card = el(`
      <div class="contestant gender-${d.gender}" style="cursor:default;">
        <div class="media-wrap" data-role="media">
          <img src="${youtubeThumb(d.youtubeId)}" alt="${d.challengeName}" loading="lazy" />
          <div class="play-badge" data-role="play"></div>
        </div>
        <div class="contestant-info">
          <span class="gender-tag ${d.gender}">${d.gender === "F" ? "여돌" : "남돌"}</span>
          <p class="challenge-name">${d.challengeName}</p>
          <p class="idol-name">${d.idolName} · ${d.group}</p>
        </div>
      </div>
    `);
    const media = card.querySelector('[data-role="media"]');
    media.addEventListener("click", () => {
      const start = Number(d.startSeconds) || 0;
      media.innerHTML = `<iframe src="https://www.youtube.com/embed/${d.youtubeId}?autoplay=1&start=${start}&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    });
    return card;
  }

  // ---------------------------------------------------------------------
  // 헤더 & 대진표 오버레이
  // ---------------------------------------------------------------------
  function renderHeader(inTournament) {
    const header = document.getElementById("site-header-actions");
    if (!header) return;
    header.innerHTML = "";
    if (inTournament) {
      const bracketBtn = el(`<button class="btn small">대진표</button>`);
      bracketBtn.addEventListener("click", openBracketOverlay);
      const resetBtn = el(`<button class="btn small ghost">처음부터</button>`);
      resetBtn.addEventListener("click", () => {
        if (confirm("진행 중인 대진을 초기화하고 처음 화면으로 돌아갈까요?")) resetAll();
      });
      header.appendChild(bracketBtn);
      header.appendChild(resetBtn);
    }
  }

  function openBracketOverlay() {
    if (!state) return;
    const overlay = el(`
      <div class="overlay">
        <div class="panel">
          <div class="overlay-head">
            <h3>대진표 전체 보기</h3>
            <button class="btn small ghost" data-role="close">닫기</button>
          </div>
          <div class="bracket-view" id="bracket-view"></div>
        </div>
      </div>
    `);
    const view = overlay.querySelector("#bracket-view");
    state.rounds.forEach((round, idx) => {
      const col = el(`<div class="bracket-col"><h4>${roundLabel(round.matches.length * 2)}</h4></div>`);
      round.matches.forEach((m) => {
        const a = DATA_BY_ID[m.aId];
        const b = DATA_BY_ID[m.bId];
        const matchEl = el(`
          <div class="bracket-match">
            <div class="bracket-side ${m.winnerId === m.aId ? "winner" : ""}">
              <span>${a.idolName}</span><span class="g">${a.gender}</span>
            </div>
            <div class="bracket-side ${m.winnerId === m.bId ? "winner" : ""}">
              <span>${b.idolName}</span><span class="g">${b.gender}</span>
            </div>
          </div>
        `);
        col.appendChild(matchEl);
      });
      view.appendChild(col);
    });

    if (!state.championId) {
      const nextCol = el(`<div class="bracket-col"><h4>다음 라운드</h4><div class="bracket-match"><div class="bracket-side pending">대결 완료 후 자동 생성</div></div></div>`);
      view.appendChild(nextCol);
    }

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.dataset.role === "close") overlay.remove();
    });

    document.body.appendChild(overlay);
  }

  // ---------------------------------------------------------------------
  // 초기화
  // ---------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    renderApp();
  });
})();
