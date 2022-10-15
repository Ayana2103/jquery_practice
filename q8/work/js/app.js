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

const displayResult =function(data){
  //データの数を取得
  const len = data.items.lenth;
  let html;
  //データの数だけ下記htmlを作成・表示
  for(let i=0; i<len; i++){
    //htmlを追加する際に表示するもの（タイトル、著作者、出版社、リンク）
    html =
    <ul>
      <li>${data.items[i].title}</li>
      <li>${data.items[i].author}</li>
      <li>${data.items[i].publisher}</li>
      <li>${data.items[i].link}</li>
    </ul>
  }
  //listの中を空にしてから、上記で作成したhtmlをlistに追加
  $('.list').empty().append(html);
};
const displayError = function(){
  //該当する結果がなかった時の処置
  if(searchWord.length === 0){
    $('.lists').before('<p class="message">検索結果が見つかりませんでした。</p><p class="message">別のキーワードで検索して下さい。</p>');
  };
};

});




/* リセット　最後　未
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