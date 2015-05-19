var redbooth = require('./redbooth.js');

console.log(JSON.stringify(redbooth.parse(
  '![hola k ase](http://redboot.omc) ola k ase :trollface:\n  ***\no k **ase**'
), null, 2));
