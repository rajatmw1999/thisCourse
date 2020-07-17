(function(){

	var script = document.getElementById('bs-live-reload');
	var sseport = script.getAttribute('data-sseport');
	var lastchange = script.getAttribute('data-lastchange');

	var pageIsVisible = true;
	var needsReload = false;

	if('EventSource' in window){
		var es = new EventSource("http://" + location.hostname + ":" + sseport + "/");
		es.onmessage = function(msg){
			
			var obj = JSON.parse(msg.data);

			if(obj.type == 'full'){

				if(pageIsVisible){
					window.location.reload();
				}
				else{
					needsReload = true;
				}

				return;
			}

			if(obj.type == 'css'){

				$('link').each(function(){

					var elem = $(this);

					var parser = document.createElement('a');
					parser.href = elem.attr('href');

					for(var i = 0; i < obj.targets.length; i++){
						var target = '/' + obj.targets[i];

						if(decodeURI(parser.pathname) == target){

							if(pageIsVisible){
								elem.attr('href', target + '?r' + Math.random());
							}
							else{
								needsReload = true;
							}
						}
						
					}
					
				});

			}

		}
	}
	else {
		setInterval(checkForChanges, 2000);
	}


	function checkForChanges(){

		var req = new XMLHttpRequest();

		req.addEventListener("load", function(){

			if(lastchange != this.responseText){
				window.location.reload();
			}

		});

		req.open('GET', '/bs-lastchange', true);
		req.send();

	}

	document.addEventListener("visibilitychange", function(){

		if(document.hidden){
			pageIsVisible = false;
		}
		else{
			pageIsVisible = true;

			if(needsReload){
				window.location.reload();
			}
		}
	});
	
})();
