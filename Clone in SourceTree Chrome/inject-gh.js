$(".url-box").each(function(i,o){
	var urlBox = $(o);
	var nativeClones = $(".native-clones", o);
	if(nativeClones[0] == undefined){
		urlBox.prepend('<ul class="native-clones"></ul>')
	}
	nativeClones = $(".native-clones", o);
	var publicUrl = $(".public_clone_url a" ,o).attr('href');
	var privateUrl = $(".private_clone_url a" ,o).attr('href');
	var cloneUrl = privateUrl != undefined ? privateUrl : publicUrl;
	
	var stLink = 'sourcetree://cloneRepo/' + encodeURI(cloneUrl);
	var stLinkElement = $('<a class="minibutton btn-clone-in-sourcetree "><span><span class="icon"></span>Clone in SourceTree</span></a></li>');
	stLinkElement.attr("href", stLink);
	
	
	nativeClones.append($("<li>").append(stLinkElement));
	
});

