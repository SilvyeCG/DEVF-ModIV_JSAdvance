const os = require('os'); //import things in node
console.log('system version:', os.version());
console.log('System version name: ', os.platform());
console.log('System version number:' + os.release());
console.log('architecture: ',os.arch()); 
console.log('Number of logical processors:' + os.cpus().length);
console.log('Info about the CPUs: ', os.cpus());
console.log(' free memory libre in bytes', os.freemem()); 
console.log('folder of actual user: ', os.homedir()); 
console.log('my ip address or my hostname (local): ', os.hostname());
console.log('data info', os.userInfo())