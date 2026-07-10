(function () {
  "use strict";

  var finePointer = window.matchMedia && window.matchMedia("(pointer: fine)");
  if (!finePointer || !finePointer.matches || !document.body) return;

  var cursor = document.createElement("span");
  cursor.className = "site-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML =
    '<svg class="site-cursor__arrow" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" transform="rotate(15 12 12)"/>' +
    '</svg>' +
    '<span class="site-cursor__ibeam" aria-hidden="true"></span>';

  document.body.appendChild(cursor);
  document.documentElement.classList.add("site-cursor-active");

  var x = -40;
  var y = -40;
  var frame = 0;

  function isTextTarget(target) {
    if (!target || !target.closest) return false;
    if (target.closest("textarea, [contenteditable]:not([contenteditable='false'])")) return true;

    var input = target.closest("input");
    if (!input) return false;

    return ["button", "submit", "reset", "checkbox", "radio", "range", "color", "file", "image"].indexOf(input.type) === -1;
  }

  function render() {
    frame = 0;
    cursor.style.transform = "translate3d(" + x + "px," + y + "px,0)";
  }

  function move(event) {
    if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") return;

    x = event.clientX;
    y = event.clientY;

    var overFrame = event.target && event.target.closest && event.target.closest("iframe");
    cursor.classList.toggle("is-text", isTextTarget(event.target));
    cursor.classList.toggle("is-visible", !overFrame);

    if (!frame) frame = requestAnimationFrame(render);
  }

  function hide() {
    cursor.classList.remove("is-visible");
  }

  document.addEventListener("pointermove", move, { passive: true, capture: true });
  /* pointerleave on document misses many ways of exiting the window
     (fast exits, devtools, OS edges) and the arrow stays frozen at the last
     position — pointerout with no relatedTarget means the pointer really
     left the page, and it bubbles, so window catches every exit */
  window.addEventListener("pointerout", function (event) {
    if (!event.relatedTarget) hide();
  }, { passive: true, capture: true });
  document.documentElement.addEventListener("pointerleave", hide, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) hide();
  });
  window.addEventListener("blur", hide);
}());
