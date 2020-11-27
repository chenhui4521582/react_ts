let baseSize = 100
let baseWidth = 720;
function setRem () {
  let scale = document.documentElement.clientWidth / baseWidth
  scale = scale > 1 ? 1 : scale
  document.documentElement.style.fontSize = baseSize * scale + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}
