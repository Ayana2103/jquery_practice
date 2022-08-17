$(function () {
  $("#q1").css("color", "#808080");
  //buttonのid（q1）のcss文字色を変更
});


$(function () {
  $("#q2").on("click", function(){
  //q2ボタンをクリックした際にイベント発生
    $(this).css("background-color", "#ffc0cb");
    //8行で発生したイベント内容、選択したボタン要素のcss背景色を変更
  });
});


$(function () {
  $("#q3").on("click", function(){
  //q3ボタンをクリックした際にイベント発生
    $(this).fadeOut(3000);
    //17行で発生したイベント内容,選択した要素を3秒かけてフェードアウト
  });
});


$(function () {
  $("#q4").on("click", function(){
  //q4ボタンをクリックした際にイベント発生
    $(this).height(80).width(300);
    //26行で発生したイベント内容,選択した要素のサイズ変更
  });
});


$(function () {
  $("#q5").on("click", function(){
  //q5ボタンをクリックした際にイベント発生
    $(this).prepend('<p>DOMの中の前</p>');//選択した要素内の先頭にpを追加
    $(this).append('<p>DOMの中の後</p>');//選択した要素内の最後にpを追加
    $(this).before('<p>DOMの前</p>');//選択した要素の前にpを追加
    $(this).after('<p>DOMの後</p>');//選択した要素の後にpを追加
  });
});


$(function () {
  $("#q6").on("click", function(){
  //q6ボタンをクリックした際にイベント発生
    $(this).animate({
      'margin-top':'100px', 'margin-left':'100px'},2000);
    //46行目で選択した要素のmargin-topとleftを2秒かけて移動
  });
});


$(function () {
  $("#q7").on("click", function(){
  //q7ボタンをクリックした際にイベント発生
    console.log(this);//選択した要素をコンソールに表示
  });
});


$(function () {
  $("#q8").on({//onメソッド
    mouseover: function() {//q8ボタンにカーソルをあてるとイベント発生
      $(this).height(80).width(300);//イベントの内容
    },
    mouseleave: function() {//q8ボタンからカーソルを離すとイベント発生
      $(this).height(25).width(200);//イベントの内容
    }
  });
});


$(function () {
  $("#q9 li").on("click", function(){
  //q9リストのボタンをクリックした際にイベント発生
    const index=$('li').index(this) ;//クリックしたliのインデックス番号を取得
    alert(index);//アラートでインデックス番号を表示
  });
});


$(function () {
  $("#q10 li").on("click", function(){
  //q10リストのボタンをクリックした際にイベント発生
    const index=$('li').index(this);//クリックしたliのインデックス番号を取得
    $("#q11 li").eq(index).addClass("largeletter")
    $("#largeletter").css("fontSize","2em");
  });
});