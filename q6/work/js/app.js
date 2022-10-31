$(function(){
  //セレクトボックスの変更でイベント発生
	$('.select-box').on('change', function() {
    //selectedの変数に選択したタブのvalueの値を拾い代入
    const selected = $(this).val();
    //変数の値が'all'だった場合
    if(selected === 'all'){
      //リストの全てを表示する
      $('.food-list li').show()
    };
    //リスト内を下記のif処理でループさせる
    $('.food-list li').each(function(){
      //リスト内のデータと変数の値が一致した時の処理
      if ($(this).data('category-type') === selected) {
        //そのリストを表示する
        $(this).show();
        //上記以外の場合
      } else {
        //表示を隠す
        $(this).hide();
      }
    });

  });
});


/*鈴木メモ
・reset()はformのinputのname属性に対して有効なため、今回の実装ではエラーになる。
*/

/* 前回の実装　→　eachにallの実装を含まないよう訂正が必要
$(function(){
  //セレクトボックスの変更でイベント発生
	$('.select-box').on('change', function() {
    //selectedの変数に選択したタブのvalueの値を拾い代入
    const selected = $(this).val();
    //リスト内を下記のif処理でループさせる
    $('.food-list li').each(function(){
      //リスト内のデータと変数の値が一致した時の処理
      if ($(this).data('category-type') === selected) {
        //そのリストを表示する
        $(this).show();
        //変数の値が'all'だった場合の処理
			} else if(selected === 'all'){
        //リストの全てを表示する
				$(this).show();
        //上記以外の処理
      } else {
        //表示を隠す
        $(this).hide();
      }
    });
  });
});
*/