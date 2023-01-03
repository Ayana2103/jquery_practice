$(function () {
  //pageCountに1を代入
  let pageCount = 1;
  //keepWordを空にする
  let keepWord = "";

  //検索ボタンを押してイベント実行
  $('.search-btn').on('click', function (){
    //検索ワードを取得
    const searchWord =$('#search-input').val();
    //sarchWordがkeepWordと一致する場合
    if( searchWord == keepWord ){
    //pageCountに＋1
    pageCount++;
    } else {
    //一致しない場合listの要素中身を空にする
    $('.lists').empty();
    //keepWordにsearchWordの値を代入
    inputWord = searchWord;
    pageCount = 1;
    };


  //変数settingsに設定情報などを格納
  const settings = {
    //実⾏するURL(エンドポイント)
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    //サーバーに送るメソッド
    "method": "GET",
  }
  //Ajaxの実⾏
  $.ajax(settings).done(function (response) {
    //通信成功した時の処理。引数responseが通信した結果を受け取っている
    //resultにrespons['@graph']を格納
    const result = response['@graph'];
    //関数displayResultに引数resultを渡して実行
    displayResult(result)
  //通信に失敗した時の処理。errにサーバーから送られてきたエラー内容を受け取っている
  }).fail(function (err) {
    //関数displayErrorに引数errを渡して実行
    displayError(err)
    console.log("err: " + err.status);//確認用
  });
});


  //関数displayResultに仮引数resultを渡す
  function displayResult(result) {
    //message要素を削除
    $('.message').remove();
    //result[0]['items']がundefinedでない場合
    if(result[0].items !== undefined ){
      //ajaxから取得したアイテムの数分ループする
      $.each(result[0].items,function(i){
        //listsクラスの子要素の先頭にタイトル、作者、出版社、書籍情報詳細に飛ぶリンク要素を追加
        $('.lists').prepend('<li class="lists-item"><div class="list-inner"><p>タイトル：' + result[0].items[i].title + '</p><p>作者：' + result[0].items[i]['dc:creator'] + '</p><p>出版社：' + result[0].items[i]['dc:publisher'] + '</p><a href = "' + result[0].items[i]['@id'] + '"target="_blank">書籍情報</a></div></li>')
      });


    } else {
      //undifinedの場合、listsクラスを持つ要素の前に下記テキストを追加
      $('.lists').before('<div class="message">検索結果が見つかりませんでした<br>別のキーワードで検索してください</div>');
    };
  };


  //関数名displayErrorに仮引数errを渡す
  function displayError(err){
    //lists要素の中を空にする
    $('.lists').empty();
    //message要素を削除
    $('.message').remove();

    //err.statusが0の場合
    if(err.status === 0) {
      //lists要素の前に下記divを追加
      $('.lists').before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>')

    //err.statusが400の場合
    } else if (err.status === 400) {
      // lists要素の前に下記divを追加
      $('.lists').before('<div class="message">検索ワードが入力されていません。</div>')

    //それ以外の場合
    } else {
       //lists要素の前に下記divを追加
      $('.lists').before('<div class="message">通信エラーが発生しています。</div>')
      $('.lists').before('<div class="message">予期せぬエラーが発生しました。</div>')
    };
  };
});


//リセットボタンを押して下記内容の実行
$('.reset-btn').on('click', function(){
  //ページカウントを１にする
  pageCount = 1;
  //list要素の中を空にする
  $('.lists').empty();
  //入力フォームの中を空にする
  $('#search-input').val('');
  //massage要素を削除
  $('.massage').remove();
  //keepWordを空にする
  keepWord = "";

});



/*メモ

※「三項演算子」の場合
searchWord == keepWord ?
pageCount++ :
($('.lists').empty(),inputWord = searchWord,pageCount = 1);

result[0].items !== undefined ?
$.each(result[0].items,function(i){
$('.lists').prepend('<li class="lists-item"><div class="list-inner"><p>タイトル：' + result[0].items[i].title + '</p><p>作者：' + result[0].items[i]['dc:creator'] + '</p><p>出版社：' + result[0].items[i]['dc:publisher'] + '</p><a href = "' + result[0].items[i]['@id'] + '"target="_blank">書籍情報</a></div></li>')
}):
$('.lists').before('<div class="message">検索結果が見つかりませんでした<br>別のキーワードで検索してください</div>');
};

※クローム拡張子CORS Unblock
一時的にリクエストの許可がされていないエラーの解除ができる。
インストール後、アイコンがオレンジで機能中。

※あとで見返す
//err.statusが404の場合
if(err.status === 404) {
//listsクラスを持つ要素の前に下記divを追加する
$('.lists').before('<div class="message">正常に通信できませんでした<br>インターネットの接続を確認してください</div>')

//err.statusが500の場合
} else if (err.status == 500) {
// lists要素の前に下記divを追加
$('.lists').before('<div class="message">通信先のページで内部エラーが発生しています</div>')

※覚書メモ　後で消す
$('.lists').prepend('<li class="lists-item"><div class="list-inner"><p>タイトル：' + result[0].items[i].title + '</p><p>作者：' + result[0].items[i]['dc:creator'] + '</p><p>出版社：' + result[0].items[i]['dc:publisher'] + '</p><a href = "' + result[0].items[i]['@id'] + '"target="_blank">書籍情報</a></div></li>')


*/

// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });