
(function (window) {
  var msg = 'myModule message';
  function showMsg() {
    console.log(msg);
  }
  function showOtherMsg() {
    console.log('other message');
  }
  // 暴露行为
  window.myModule = {
    showMsg: showMsg,
    showOtherMsg: showOtherMsg
  }
})(window)