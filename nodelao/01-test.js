/*function Demo(){
    var x=789;
    this.a=123;
    this.bb=function(){
        console.log(456);
    }
    this.cc=function(){
        console.log(x);
    }
}

//原型链对应的方法
Demo.prototype.call=function(){
    console.log('i an calling');
    
}

var demo=new Demo();
exports.mm=demo;*/


exports.mm={
    'a':1,
    'bb':function(){
        console.log(456);
    }
}

/*var demo=new Demo();
console.log(demo);//Demo { a: 123, bb: [Function], cc: [Function] }
*/

// demo.bb();
// demo.cc();
// demo.call();
// Demo.prototype==demo.__proto__