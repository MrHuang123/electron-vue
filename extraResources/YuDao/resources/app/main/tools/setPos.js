module.exports = $ => {
  const [w, h] = $.winHome.getSize();
  const [l, t] = $.winHome.getPosition();
  const left = w > $.calSize(810) ? w - 300 : l + w + 20;
  const top = t - parseInt(($.winManual.getSize()[1] - h) / 2);
  $.winManual.setPosition(left, top);
  $.winManual.show();
}