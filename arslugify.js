var XRegExp = require('xregexp').XRegExp;

function dasherize(value){
	dashedString = value.replace(/\s/g,'-');
	return dashedString;
}

function slugify(value){
	cleanReg = XRegExp('\\p{S}|\\p{P}','g');
	cleanedString = XRegExp.replace(value,cleanReg,'');
	cleanedString = cleanedString.trim();
	cleanedString = cleanedString.toLowerCase();
	cleanedString = cleanedString.replace(/\s{2,}/g,' ')
	slugifiedString = dasherize(cleanedString);

	return slugifiedString; 
}

module.exports = slugify;