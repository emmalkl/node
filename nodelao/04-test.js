aa();//456
console.log(aa);//如果下面没有function，就输出undefine
var aa=function(){
    console.log(123)
}
aa();//123
function aa(){//预编译
    console.log(456);
}
aa();//123

//作用域，预编译，局部变量和全局变量
//先执行function aa（）{}， 再第一个aa（），然后var ，最后后面两个aa（）