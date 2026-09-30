
// 要素取得
const zoom     = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg  = document.getElementById("zoomimg");
const closeBtn = document.querySelector(".close-btn");

// 開く
zoom.forEach(function (el) {
  el.addEventListener("click", function kakudai(e) {
    e.preventDefault();
    const src = el.getAttribute("data-full") || el.getAttribute("src");
    if (!src) return;
    zoomimg.setAttribute("src", src);

    // 表示
    zoomback.style.display = "flex";

    // ← 追加：モーダル中フラグ
    document.body.classList.add("modal-open");
  });
});

// 画像クリックでは閉じない
zoomimg.addEventListener("click", function (e) {
  e.stopPropagation();
});

// 背景クリックで閉じる
zoomback.addEventListener("click", modosu);

// 閉じる処理
function modosu() {
  zoomback.style.display = "none";
  zoomimg.removeAttribute("src");

  // ← 追加：フラグ解除
  document.body.classList.remove("modal-open");
}

// ×ボタン
if (closeBtn) {
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modosu();
  });
}

// Escキーで閉じる
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && zoomback.style.display === "flex") {
    modosu();
  }
});
