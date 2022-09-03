$(function(){
  //アカウント作成ボタンを押すとイベント発生
  $('.btn__submit').on('click', function(){
    //下記カッコ内文字をコンソールに表示
    console.log('名字');
    //名字のテキストボックス内に入力された値をコンソールに表示
    console.log($('#family__name').val());
    //下記カッコ内文字をコンソールに表示
    console.log('名前');
    //名字のテキストボックス内に入力された値をコンソールに表示
    console.log($('#given__name').val());


    //下記カッコ内文字をコンソールに表示
    console.log('生年月日');
    //選択されたセレクトボックスの属性値と年月日をそれぞれ表示
    console.log($('.year').val() + "年" + $('.month').val() + "月" + $('.day').val() + "日");


    //下記カッコ内文字をコンソールに表示
    console.log('性別');
    //選択されたラジオボタンの属性値を表示
    console.log($('[name="gender"]').val());


    //下記カッコ内文字をコンソールに表示
    console.log('職業');
    //選択されたセレクトボックスの属性値を表示
    console.log($('.occupation').val());


    //下記カッコ内文字をコンソールに表示
    console.log('アカウント名');
    //入力された値をコンソールに表示
    console.log($('#account__name').val());


    //下記カッコ内文字をコンソールに表示
    console.log('パスワード');
    //入力された値をコンソールに表示
    console.log($('#password').val());

    //下記カッコ内文字をコンソールに表示
    console.log('確認用パスワード');
    //入力された値をコンソールに表示
    console.log($('#duplication__password').val());


    //下記カッコ内文字をコンソールに表示
    console.log('住所');
    //入力された値をコンソールに表示
    console.log($('#address').val());


    //下記カッコ内文字をコンソールに表示
    console.log('電話番号');
    //入力された値をコンソールに表示
    console.log($('#tel').val());


    //下記カッコ内文字をコンソールに表示
    console.log('購買購読');
    //選択されたチェックボックスの属性値を表示
    $('.subscription__checkbox:checked').each(function(){
      console.log($(this).val());
    });
  });
});






/*鈴木メモ
・クラス名は（'.class'）id名は（’#id’）で指定する
・val()はセレクタに合致した最初の要素のみを取得するため
　チェックボックスが複数の場合はeachやmapでループさせる必要がある。
*/