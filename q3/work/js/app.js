$(function () {
  //三本線のボタンをクリックでイベント発生
  $('.drawer_button').on('click',function () {
    //指定した要素に対してclass属性のdisplay:noneを付与・解除を繰り返す
    $(this).toggleClass('active');
    //指定したドロワー要素に対してclass属性のdisplay:noneを付与・解除を繰り返す
    $('.drawer_nav_wrapper, .drawer_nav').toggleClass('open');
    //指定した背景要素に対してclass属性の表示・非表示をフェードイン・アウトで繰り返す
    $('.drawer_bg').fadeToggle('left');
  });

  //グレー背景クリックでイベント発生
  $('.drawer_bg').on('click', function(){
    //指定した要素の背景色を非表示にする
    $(this).hide();
    //下記要素のactiveクラスを削除
    $('.drawer_button').removeClass('active');
    //下記要素のopenクラスを削除
    $('.drawer_nav_wrapper, .drawer_nav').removeClass('open');
  });
});