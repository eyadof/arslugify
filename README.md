#arSlugify
arslugify is a package for creating clean and slugified urls that contains Arabic letters with the help of xregex package for node.js 

##install
`npm install arsslugify`

##usage 
```
var ars = require('arslugify'),
	str ='  quite نص معقد بالعربي  !!   * مع علامات ترقيم ,. '

slugifiedStr = ars(str);
// slugifiedStr: quite-نص-معقد-بالعربي-مع-علامات-ترقيم
```
