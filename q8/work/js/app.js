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


/*　リセット　最後　未
$('.reset-btn').on('click', function(){
  $('.lists').empty();
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