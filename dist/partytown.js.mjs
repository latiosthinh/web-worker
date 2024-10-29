const worker = new Worker("partytown/loader.js");
document.querySelectorAll("[type='text/partytown']").forEach((script) => {
  worker.postMessage([script.src, script.id]), worker.addEventListener("message", (e) => {
    var t, r;
    if (!((r = (t = e.data) == null ? void 0 : t[0]) != null && r.includes(script.id))) return;
    const initExecuteFn = script.innerHTML;
    script.innerHTML = e.data[1] + initExecuteFn, script.setAttribute("type", "text/javascript"), eval(script.innerHTML), pubsub.emit(e.data[0]);
  });
});
