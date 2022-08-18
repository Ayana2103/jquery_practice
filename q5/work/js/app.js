$(function () {
  //要素のクリックでイベント発生
  $('ul.dropdwn li').hover(function(){
    //display:noneになっていた要素がスライドダウンで表示される
    $('.dropdwn_menu:not(:animated)', this).slideDown();
  //カーソル外れた時の処理
  },function(){
      //スライドアップでdisplay:noneが適用され隠れる
      $('.dropdwn_menu', this).slideUp();
  });
});






/*鈴木メモ
・“〇〇:not(:animated)”　→アニメーションの途中にアニメーションを実行しないでという意味
  これがないと、例えばhoverではマウスを置いた回数分アニメーションが実行されてしまう。
・.on()や.bind()ではhoverイベントは使えない
*/