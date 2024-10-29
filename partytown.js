!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).mitt=n()}(this,function(){return function(e){return{all:e=e||new Map,on:function(n,t){var f=e.get(n);f?f.push(t):e.set(n,[t])},off:function(n,t){var f=e.get(n);f&&(t?f.splice(f.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var f=e.get(n);f&&f.slice().map(function(e){e(t)}),(f=e.get("*"))&&f.slice().map(function(e){e(n,t)})}}}});
window.pubsub = new mitt();

document.addEventListener("DOMContentLoaded", () => {
    const worker = new Worker("partytown/loader.js")

    // setTimeout(() => {
        document.querySelectorAll("[type='text/partytown']").forEach(script => {
            worker.postMessage([script.src, script.id])
            worker.addEventListener("message", e => {
                if (!e.data?.[0]?.includes(script.id)) return;
                const initExecuteFn = script.innerHTML
                script.innerHTML = e.data[1] + initExecuteFn
                script.setAttribute('type', "text/javascript")
                eval(script.innerHTML)
                pubsub.emit(e.data[0])
            })
        })
    // }, 1000);
})
