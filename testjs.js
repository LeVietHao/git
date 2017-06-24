function Person()
{
	this.name = "leviethao";
	this.sayName = function () {
		console.log(this.name);	
	};
}

var person = new Person();
