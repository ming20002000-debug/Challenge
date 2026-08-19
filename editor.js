/**
 * ============================================================================
 *  데이터 편집기 로직 (editor.js)
 * ============================================================================
 */
(function () {
  "use strict";

  let entries = (typeof CHALLENGE_DATA !== "undefined" ? CHALLENGE_DATA : []).map((d) => ({ ...d }));

  const rowsEl = document.getElementById("rows");
  const countBadge = document.getElementById("count-badge");

  function updateCount() {
    const f = entries.filter((e) => e.gender === "F").length;
    const m = entries.filter((e) => e.gender === "M").length;
    countBadge.textContent = `총 ${entries.length}개 (여돌 ${f} · 남돌 ${m})`;
  }

  function fieldRow(label, inputHtml) {
    return `<div class="field"><label>${label}</label>${inputHtml}</div>`;
  }

  function renderRows() {
    rowsEl.innerHTML = "";
    entries.forEach((entry, idx) => {
      const row = document.createElement("div");
      row.className = "editor-row";
      row.innerHTML = `
        <img class="editor-thumb" src="https://img.youtube.com/vi/${entry.youtubeId || ""}/mqdefault.jpg" alt="" />
        ${fieldRow("챌린지 이름", `<input data-k="challengeName" value="${escapeAttr(entry.challengeName)}" />`)}
        ${fieldRow("아이돌 이름", `<input data-k="idolName" value="${escapeAttr(entry.idolName)}" />`)}
        ${fieldRow("그룹", `<input data-k="group" value="${escapeAttr(entry.group)}" />`)}
        ${fieldRow(
          "성별",
          `<select data-k="gender">
             <option value="F" ${entry.gender === "F" ? "selected" : ""}>여돌</option>
             <option value="M" ${entry.gender === "M" ? "selected" : ""}>남돌</option>
           </select>`
        )}
        ${fieldRow("유튜브 ID", `<input data-k="youtubeId" value="${escapeAttr(entry.youtubeId)}" />`)}
        ${fieldRow("시작(초)", `<input data-k="startSeconds" type="number" min="0" value="${entry.startSeconds || 0}" />`)}
        <button class="btn small ghost" data-role="delete">삭제</button>
      `;

      row.querySelectorAll("[data-k]").forEach((input) => {
        input.addEventListener("input", () => {
          const key = input.dataset.k;
          entries[idx][key] = key === "startSeconds" ? Number(input.value) || 0 : input.value;
          if (key === "youtubeId") {
            row.querySelector(".editor-thumb").src = `https://img.youtube.com/vi/${input.value}/mqdefault.jpg`;
          }
        });
      });

      row.querySelector('[data-role="delete"]').addEventListener("click", () => {
        if (confirm(`"${entry.challengeName || "이 항목"}"을(를) 삭제할까요?`)) {
          entries.splice(idx, 1);
          renderRows();
          updateCount();
        }
      });

      rowsEl.appendChild(row);
    });
  }

  function escapeAttr(v) {
    return String(v == null ? "" : v).replace(/"/g, "&quot;");
  }

  function nextId(gender) {
    const prefix = gender === "F" ? "f" : "m";
    let n = 1;
    const used = new Set(entries.map((e) => e.id));
    while (used.has(prefix + String(n).padStart(2, "0"))) n++;
    return prefix + String(n).padStart(2, "0");
  }

  document.getElementById("add-btn").addEventListener("click", () => {
    const gender = "F";
    entries.push({
      id: nextId(gender),
      challengeName: "새 챌린지",
      idolName: "",
      group: "",
      gender,
      youtubeId: "",
      startSeconds: 0,
      source: "",
    });
    renderRows();
    updateCount();
    rowsEl.lastElementChild.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.getElementById("download-btn").addEventListener("click", () => {
    const text = buildDataJs(entries);
    const blob = new Blob([text], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    a.click();
    URL.revokeObjectURL(url);
  });

  function jsStringLiteral(v) {
    return JSON.stringify(String(v == null ? "" : v));
  }

  function buildDataJs(list) {
    const items = list
      .map((e) => {
        return `  {
    id: ${jsStringLiteral(e.id)},
    challengeName: ${jsStringLiteral(e.challengeName)},
    idolName: ${jsStringLiteral(e.idolName)},
    group: ${jsStringLiteral(e.group)},
    gender: ${jsStringLiteral(e.gender)},
    youtubeId: ${jsStringLiteral(e.youtubeId)},
    startSeconds: ${Number(e.startSeconds) || 0},
    source: ${jsStringLiteral(e.source)}
  }`;
      })
      .join(",\n");

    return `/**
 * ============================================================================
 *  아이돌 챌린지 월드컵 - 데이터 파일 (data.js)
 *  editor.html에서 자동 생성된 파일입니다.
 * ============================================================================
 */

const CHALLENGE_DATA = [
${items}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CHALLENGE_DATA;
}
`;
  }

  renderRows();
  updateCount();
})();
