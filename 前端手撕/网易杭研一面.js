// 作用域
// var  a= '222';
// function dd() {
//   console.log(a); // 1
//   var a = "cc";
//   console.log(a); //2
// }
// dd();
// console.log(a); // 3

// undefined cc 222

// 闭包
function fun(first,second) {
  console.log(second)
  return {
    fun:function(third){
      return fun(third,first);
    }
  };
}
const a = fun(0);  //undefined
a.fun(1);  //0
a.fun(2);  //0
a.fun(3);  //0
const b = fun(0).fun(1).fun(2).fun(3);//undefined 0 1 2
const c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined 0 1 1

// 打印出上面三行的四个值


{/* <body>
    <section class="container">
        <div class="left">
            <div class="menu"></div>
        </div>
        <div class="right">
            <div class="box1"></div>
            <div class="box2"></div>
        </div>
    </section>
</body> */}
// 遍历打印出所有的dom节点
const findNode = function(tree){
    while(tree.childrenNode){
        console.log(tree.childrenNode);
        tree = findNode(tree.childreNode);
        return tree
    }
}