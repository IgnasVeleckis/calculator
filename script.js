let arr = [];

function newVal(btnVal) {
    let length = arr.length;

    if (typeof(btnVal) == 'number') {
        document.querySelector('#main').value = document.querySelector('#main').value + btnVal
        arr.push(typeof(btnVal))
        subEq();
    }
    if (typeof(btnVal) == 'string' && arr[length - 1] != 'string' && length != 0) {
        document.querySelector('#main').value = document.querySelector('#main').value + btnVal
        arr.push(typeof(btnVal))
    }
}


function eq() {
    let a = document.querySelector('#main').value;
    let arr = a.split('')
    let length = arr.length
    let badArr = ['/', '*', '-', '+', '.']
    if (badArr.includes(arr[length - 1])) {
        console.log('bad-format')
    } else {
        if (eval(a) == undefined) {
            console.log('nothing to calculate')
        } else {
            document.querySelector('#main').value = eval(a)

        }
    }
}

function subEq() {
    let a = document.querySelector('#main').value;
    let arr = a.split('')
    let length = arr.length
    let badArr = ['/', '*', '-', '+', '.']
    if (badArr.includes(arr[length - 1])) {
        console.log('bad-format')
    } else {
        if (eval(a) == undefined) {
            console.log('nothing to calculate')
        } else {
            document.querySelector('#subMain').value = eval(a)

        }
    }
}

function clearInput() {
    document.querySelector('#main').value = null
    document.querySelector('#subMain').value = null

}