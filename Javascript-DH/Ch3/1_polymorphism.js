// for objects no need of function

var obj = {
  hello : function(){
    return this.username;
  },
}


function hello(){
  return this.username;
}


var obj1 = {
  hello : hello,
  username : "david"
};

var obj2 = {
  hello : obj.hello,
  username : "rahul"
};


//obj();
console.log(obj1.hello());
//obj2.hello();
