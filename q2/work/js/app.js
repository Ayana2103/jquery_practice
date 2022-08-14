$(function () {
  $('.modal_open_button').on('click',function () {
  //OPENボタンをクリックでイベント発生
    $('.modal_bg').fadeIn(),//グレーの背景をフェードインで表示
    $('.modal_win').show();//display:noneになっていたモーダルを表示
  });
  $('.modal_close_button').on('click',function () {
  //クローズボタンを押すとイベント発生
    $('.modal_bg, .modal_win').fadeOut();//背景色とモーダルをフェードアウト
  });
});