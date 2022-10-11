$(function () {
  //検索ボタンを押してイベント実行
  $('.search-btn').on('click', function (){
    //元々の要素を空にする
    $('.lists').empty();
    //検索ワードを取得
    const searchWord =$('#search-input').val();
    //検索ワードが空の場合の処理
    if(!searchWord){
      //下記要素前に下記のｐタグを追加する
      $('.lists').before('<p class="message">正常に通信出来ませんでした。</p><p class="message">インターネットの接続の確認をしてください。</p>');
    }



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
  const result = response['@graph'];
  displayResult(result)
//通信に失敗した時の処理。errにサーバーから送られてきたエラー内容を受け取っている
}).fail(function (err) {
  displayError(err)
});
});

const displayResult = any;
const displayError = any;

});




/* 該当なし→HTML挿入
if(        === 0){
  $('.lists').before('<p class="message">検索結果が見つかりませんでした。</p><p class="message">別のキーワードで検索して下さい。</p>');
});


リセット　最後　未
$('.reset-btn').on('click', function(){
  $('.lists').empty();
  $('.search-input').val('');
  $('.massage').remove();
});
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