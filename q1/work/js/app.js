$(function () {
  //buttonのid（q1）のcss文字色を変更
  $("#q1").css("color", "#808080");
});


$(function () {
  //q2ボタンをクリックした際にイベント発生
  $("#q2").on("click", function(){
    //9行で発生したイベント内容、選択したボタン要素のcss背景色を変更
    $(this).css("background-color", "#ffc0cb");
  });
});


$(function () {
  //q3ボタンをクリックした際にイベント発生
  $("#q3").on("click", function(){
    //18行で発生したイベント内容,選択した要素を3秒かけてフェードアウト
    $(this).fadeOut(3000);
  });
});


$(function () {
  //q4ボタンをクリックした際にイベント発生
  $("#q4").on("click", function(){
    //27行で発生したイベント内容,選択した要素のサイズ変更
    $(this).height(80).width(300);
  });
});


$(function () {
  //q5ボタンをクリックした際にイベント発生
  $("#q5").on("click", function(){
    //選択した要素内の先頭にpを追加
    $(this).prepend('<p>DOMの中の前</p>');
    //選択した要素内の最後にpを追加
    $(this).append('<p>DOMの中の後</p>');
    //選択した要素の前にpを追加
    $(this).before('<p>DOMの前</p>');
    //選択した要素の後にpを追加
    $(this).after('<p>DOMの後</p>');
  });
});


$(function () {
  //q6ボタンをクリックした際にイベント発生
  $("#q6").on("click", function(){
    $(this).animate({
    //52行目で選択した要素のmargin-topとleftを2秒かけて移動
    'margin-top':'100px', 'margin-left':'100px'},2000);
  });
});


$(function () {
  //q7ボタンをクリックした際にイベント発生
  $("#q7").on("click", function(){
    //選択した要素をコンソールに表示
    console.log(this);
  });
});


$(function () {
  //onメソッド
  $("#q8").on({
    //q8ボタンにカーソルをあてるとイベント発生
    mouseover: function() {
      //イベントの内容
      $(this).height(80).width(300);
    },
    //q8ボタンからカーソルを離すとイベント発生
    mouseleave: function() {
      //イベントの内容
      $(this).height(25).width(200);
    }
  });
});


$(function () {
  //q9リストのボタンをクリックした際にイベント発生
  $("#q9 li").on("click", function(){
    //クリックしたliのインデックス番号を取得
    const index=$('#q9 li').index(this) ;
    //アラートでインデックス番号を表示
    alert(index);
  });
});


$(function () {
  //q10リストのボタンをクリックした際にイベント発生
  $("#q10 li").on("click", function(){
    //クリックしたliのインデックス番号を取得
    const index=$('#q10 li').index(this);
    //クリックしたq10と同じq11のインデックス番号の要素にlarge-textクラスを追加
    $("#q11 li").eq(index).addClass("large-text");
  });
});