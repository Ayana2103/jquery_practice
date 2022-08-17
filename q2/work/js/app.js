$(function () {
  //OPENボタンをクリックでイベント発生
  $('.modal_open_button').on('click',function () {
    //グレーの背景をフェードインで表示
    $('.modal_bg').fadeIn(),
    //display:noneになっていたモーダルを表示
    $('.modal_win').show();
  });
  //クローズボタンを押すとイベント発生
  $('.modal_close_button').on('click',function () {
    //背景色とモーダルをフェードアウト
    $('.modal_bg, .modal_win').fadeOut();
  });
});