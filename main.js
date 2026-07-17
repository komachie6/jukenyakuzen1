/* main.js — 『受験薬膳』LP
   構成: FVロード / スクロールリビール(スタッガー付き) / モーション停止
   ※モーション停止の仕組み(initMotionStop)は削除禁止 */

document.addEventListener("DOMContentLoaded", () => {
  initStagger();
  initReveal();
  initMotionStop();
});

/* ---- FVロードシーケンス(loadが詰まった時の保険つき) ---- */
(function initLoaded() {
  const done = () => document.body.classList.add("is-loaded");
  window.addEventListener("load", done);
  setTimeout(done, 3000); // 保険: フォント等で詰まっても必ず開演
})();

/* ---- チップ・リスト項目に自動でスタッガー遅延を付与 ---- */
function initStagger() {
  const groups = [
    ".soft-list", ".dekiru-list", ".check-list",
    ".shuzai-list", ".yousu-chips", ".henka-chips", ".step-list",
  ];
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((group) => {
      const items = group.querySelectorAll(".js-reveal");
      items.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i * 0.08, 0.7)}s`;
      });
    });
  });
}

/* ---- スクロールリビール(.js-reveal に .is-inview を付与) ---- */
function initReveal() {
  const targets = document.querySelectorAll(".js-reveal, .ribbon-head");
  if (!targets.length) return;
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-inview"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-inview");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---- モーション停止(SKILL.mdのポリシー実装。削除禁止) ----
   reduced-motion環境にのみボタンが表示され(CSS側)、押した場合だけ全停止 */
function initMotionStop() {
  const btn = document.querySelector(".motion-stop");
  if (!btn) return;
  // アイコン化(テキストに被らない小型ボタン)。アクセシブルネームはaria-labelで担保
  const setLabel = (off) => {
    btn.textContent = off ? "▶" : "⏸";
    btn.setAttribute("aria-label", off ? "アニメーションを再生する" : "アニメーションを停止する");
    btn.setAttribute("title", off ? "アニメーションを再生する" : "アニメーションを停止する");
  };
  setLabel(document.documentElement.classList.contains("is-motion-off"));
  btn.addEventListener("click", () => {
    setLabel(document.documentElement.classList.toggle("is-motion-off"));
  });
}
