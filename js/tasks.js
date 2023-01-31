'use strict';


function sayHello(name) {
    return `Привет, ${name}!)`;
}

sayHello('Anna');

function sayHello(name) {
    return `Hi, ${name}!)`;
}

console.log(sayHello('Anna'));


function returnNeighboringNumbers(num) {
    return [num-1, num, num+1];
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num, times) {
    if ((typeof(times) == 'number') && (times > 0)) {

        let str = '';
        for (let i = 1; i <= times; i++) {
            if (i === times) {
                str += `${num * i}`;
            } else {
                str += `${num * i}---`;
            }
        }

        return str;

    } else {

        return num;

    }

}

console.log(getMathResult(5, 5));

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}


const options = {
    name: 'test', 
    width: 1024,
    height: 1024,
    colours: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name);
