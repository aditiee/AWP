function helloWorld() {
    console.log("This is a function");
}

let func1 = function () {
    console.log('IN func');
}

function add(a, b) {
    let x = parseInt(a);
    let y = parseInt(b);
    console.log(x + y);
}

let funcArrow = () => {
    console.log("In hello function", new Date());
}


//helloWorld();
//func1();
//add(3, 4);
//funcArrow();


// setInterval(() => {
//     console.log("In hello function", new Date());
// }, 2000);

