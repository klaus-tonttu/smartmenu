$(function(){
//$('#maker-karuizawadanro').live('pagecreate',function(){
	$('#maker-karuizawadanro, #maker-karuizawadanro .mycontent').on('swipeleft', function(){
		$.mobile.changePage('#maker-karuizawadanro-2', {transition:'slide'});
	});
//});
//$('#maker-karuizawadanro-2').live('pagecreate',function(){
	$('#maker-karuizawadanro-2, #maker-karuizawadanro-2 .mycontent').on('swiperight', function(){
		$.mobile.changePage('#maker-karuizawadanro', {transition:'slide',reverse:true});
	});
//});

//$('#maker-metos').live('pagecreate',function(){
	$('#maker-metos, #maker-metos .mycontent').live('swipeleft', function(){
		$.mobile.changePage('#maker-metos-2', {transition:'slide'});
	});
//});
//$('#maker-metos-2').live('pagecreate',function(){
	$('#maker-metos-2, #maker-metos-2 .mycontent').live('swiperight', function(){
		$.mobile.changePage('#maker-metos', {transition:'slide',reverse:true});
	});
//});

/*
$(document).on('vclick', 'a', function(){
	e.preventDefault();
	$.mobile.ChangePage($(this).jqmData('href')) || $(this).attr('href'), {
		transition: $(this).jqmData('transition');
	});
});
*/
//fastClick('.mycontent');

});
