// for(var i=1;i<=3;i++){
//     setTimeout(function(){
//         console.log(i);//444
        
//     },0);
// }

for(var i=1;i<=3;i++){
    setTimeout(function(i){
        console.log(i);//444       
    },0);//undefine undefine undefine
}
//如果当前线程不退出，不能从消息循环中取回事件，除非有特殊触发事件发生
console.log('end');//end先输出
//处理异步：当前进程空闲；满足触发条件（时间条件、磁盘I/O、网络I/O、自定义事件）

//<form action="" method="post"></form> 
