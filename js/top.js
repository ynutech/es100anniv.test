/* ヘッダーまでスクロールして上部固定 */
$(function(){
	var _window = $(window),
		_header = $('#header'),
		heroBottom;
	
	_window.on('scroll',function(){		
		heroBottom = $('#main').height();
		if(_window.scrollTop() > heroBottom){
			_header.addClass('fixed');   
		}
		else{
			_header.removeClass('fixed');   
		}
	});
	
	_window.trigger('scroll');
});