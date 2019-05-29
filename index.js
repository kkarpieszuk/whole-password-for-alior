let pass = window.prompt('Hasło (nie zostanie nigdzie zapisane ani wysłane na zewnętrzne serwery)');
const myRe = /\d+$/;
if ( pass.length > 0 ) {
	let fields = document.querySelectorAll("#masked-password input:not(.disabled)");
	Array.prototype.forEach.call(fields, function(field, i){
		let index = parseInt( myRe.exec( field.getAttribute('id') )[0] ) - 1;
		let letter = pass.charAt( index );
		field.value = letter;
	});
}
