$(function(){
	$('.select-box').on('change', function() {
    const selected = $(this).val();
    $('.food-list li').each(function(){
      if ($(this).data('category-type') === selected) {
        $(this).show();
			} else if(selected === 'all'){
				$(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});


/* 8行目効かなかったもの
$('.select-box')[0].reset();
*/