describe('Object Types', function() {

	describe('typeof operator', function(){
		// define your answers to make tests pass

		it('defines primitive types precisely', function(){
			expect(typeof 2016).toEqual("number");
			expect(typeof '2016').toEqual("string");
			expect(typeof ('2016' + 1)).toEqual("string");
			expect(typeof ('2016' - 1)).toEqual("number");
			expect(typeof ('2016' == 2016)).toEqual("boolean");
			expect(typeof ('2016' === 2016)).toEqual("boolean");

			expect(typeof true).toEqual("boolean");
			expect(typeof (true + true)).toEqual("number");

			var activity = 'training';
			expect(typeof activity).toEqual("string");
			expect(typeof activity.length).toEqual("number");
			expect(typeof activity.split).toEqual("function");
			expect(typeof activity.split()).toEqual("object");
		});

		it('defines complex types not that precisely', function(){
			expect(typeof Math).toEqual("object");
			expect(typeof Math.sqrt).toEqual("function");
			expect(typeof Math.PI).toEqual("number");

			var list = [1, 2, 3, 4, 5];
			expect(typeof list).toEqual("object");
			expect(typeof list.length).toEqual("number");
			expect(typeof list[0]).toEqual("number");

			var person = {
				first: "John",
				last: "Lennon"
			}
			expect(typeof person).toEqual("object");
			expect(typeof person.first).toEqual("string");
			expect(typeof person['last']).toEqual("string");
			expect(typeof person['last'].length).toEqual("number");
		});

		it('defines instances and constructors rather poorly', function(){
			function Person(first, last){
				this.first = first;
				this.last = last;
			}
			Person.prototype.age = 40;

			var john = new Person("John", "Lennon");
			expect(typeof john).toEqual("object");
			expect(typeof (john + '')).toEqual("string");
			expect(typeof Person).toEqual("function");
			expect(typeof john.age).toEqual("number");
			expect(typeof Person.prototype).toEqual("object");
			expect(typeof Person.prototype.age).toEqual("number");
			expect(typeof john.constructor).toEqual("function");
		});
	});

});
