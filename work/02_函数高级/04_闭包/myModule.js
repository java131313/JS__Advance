function myModule() {
  var msg = 'myModule message';
  function showMsg() {
    console.log(msg);
  }
  function showOtherMsg() {
    console.log('other message');
  }
  // 暴露行为
  return {
    showMsg: showMsg,
    showOtherMsg: showOtherMsg
  }
}