for(var i=1;i<=3;i++){
    setTimeout(function(){
        console.log(i);//444
        
    },0);
}
//如果当前线程不退出，不能从消息循环中取回事件，除非有特殊触发事件发生