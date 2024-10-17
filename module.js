// Globals:  no window


// __dirname:  path to curent directory
// __filename: file name
// require: function to use modules (commonJS)
// process: info about new where the program is being executed 

//Module: encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-util');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('boz');
sayHi(names.ahm);
sayHi(names.nab);