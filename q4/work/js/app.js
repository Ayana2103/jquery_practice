$(function () {
  //要素のクリックでイベント発生
  $('.nav li').on('click', function(){
    //クリックした要素のインデックス番号を取得
    const index=$('.nav li').index(this);
    //イベント発生時に対象要素にis-hiddenクラスを追加（display:noneを実行）し非表示にする
    $('.description li').addClass('is-hidden');
    //イベント発生時に5行目のインデックス番号と同じインデックス番号のis-hiddenを削除しdisplay:noneを解除する
    $('.description li').eq(index).removeClass('is-hidden');
  });
});



/* 鈴木メモ
・class追加の場合追加するクラス名に".(ピリオド)"は要らない
・メモは該当行の上に書く
*/