module.exports = function(input, args){
	let obj = {};
	for(let key of args){
		if(input[key]) obj[key] = input[key];
	}
	return obj;
}