class Calc {
    add(a, b) {
        let x = parseInt(a);
        let y = parseInt(b);
        return x + y;
    }
    add(a, b, c) {
        let x = parseInt(a);
        let y = parseInt(b);
        let z = parseInt(c);

        return x + y + z;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            console.log('Not defined');
        } else {
            return a / b;
        }
    }
}

let o = new Calc;
console.log(o.add(2, 3));
console.log(o.add(2, 3, 4));

// //o.add(2, 3);
// o.sub(4, 2);
// o.mul(3, 5);
// o.divide(3, 0);
// //o.divide(8, 2);