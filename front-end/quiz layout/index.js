var selected=false;
$(".card").on('click', function() {
	
	if (selected===false){
		$(this).css({backgroundColor: "#1fab89"});
		selected=true;
	}
	else {
		$(this).css({backgroundColor: "white"});
		selected=false;
	} 
});

