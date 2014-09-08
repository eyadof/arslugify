var ars = require('../arslugify');

describe('arSlugify',function(){
	describe('only Arabic letters text',function(){
		string = ars('نص عربي كثير الفائدة');
		it('should return a string without whitespaces',function(next){
			if(string.indexOf(' ') != -1)
				next(new Error('whitespaces in the string'));
			else
				next()
		})

		it('should return a string with -',function(next){
			if(string.indexOf('-') == -1)
				next(new Error('no - in the string!'))
			else
				next()
		})
	})

	describe('Arabic and English text',function(){
		str2 = ars('نص عربي مع English')
		it('should keep arabic letters',function(next){
			if(str2.indexOf('ن') == -1){
				next( new Error('Arabic letter not found!'))
			}
			else
				next()
		})

		it('should keep english letters',function(next){
			if(str2.indexOf('n') == -1){
				next(new Error('English letter not found!'))
			}
			else
				next()
		})

		it('should convert english letters to lower case',function(next){
			if(str2.indexOf('E') != -1){
				next(new Error('there is a letter in upper case'))
			}
			else
				next()
		})
	})

	describe('Other chars',function(){
		str3 = ars('<>?/!@#$%^&*()_+=-;,.');
		it('should remove any other chars',function(next){
			if(str3.length > 0){
				next(new Error('there is some strange chars !'))
			}
			next()
		})
	})
})
