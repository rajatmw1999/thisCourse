
$(".ques1").on('click', function() {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else{
		$(".ques1").removeClass('active');
		$(this).addClass('active');
	}
	
});

$(".ques2").on('click', function() {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else{
		$(".ques2").removeClass('active');
		$(this).addClass('active');
	}
	
});

$(".ques3").on('click', function() {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else{
		$(".ques3").removeClass('active');
		$(this).addClass('active');
	}
	
});

