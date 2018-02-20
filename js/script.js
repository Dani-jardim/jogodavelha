var vez = 'x';


function atualizarPlacar (){
	if(vez == 'o'){
		$ ('.placar img').attr ('src', 'o.png');
	} else {
		$('.placar img').attr('src', 'x.png');

	}
}

$ (function (){

	atualizarPlacar();

	$('.area').bind('click', function(){
		if ($(this).find ('img').length == 0 ) {


			if(vez = 'x') {
				$(this).html ('<img scr="o.png" border="0" height="20"/>');
				
			} else {
				$(this).html ('<img scr="x.png" border="0" height="20"/>');
			}
		}
		console.log('thisfsfa')
	});
});

