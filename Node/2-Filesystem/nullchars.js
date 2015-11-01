var string = 'MyString\u0000\u0000\u0000';

var finalstr = string.replace('\0', '');// 10
finalstr = finalstr.replace(/\0/g, ''); // 8
console.log(finalstr);