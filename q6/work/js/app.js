$(function(){
	const lists=$('.food-list li');
	$('.select-box').on('change',function(){
		const selected=$(this).attr('value');
		lists.each(function(e){
			if($(this).hasClass(selected)){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
		return false;
	});
});