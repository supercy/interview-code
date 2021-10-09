let arr = [1, 2, 3];
arr.reduce((pre, cur) => {
    return pre.then(() => {
        return new Promise(r => {
            setTimeout(() => {
                r(console.log(cur))
            }, 1000);
        })
    })
}, Promise.resolve())

//
for(let i = 0; i<10; i++){
	setTimeout(function(){
		console.log(i)
	},1000*i)	
}