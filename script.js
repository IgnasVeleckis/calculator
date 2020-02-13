let arr = [];

function newVal(btnVal) {
    let length = arr.length;

    if (typeof(btnVal) == 'number') {
        document.querySelector('#main').value = document.querySelector('#main').value + btnVal
        arr.push(typeof(btnVal))
        correctSubEq();
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
            /* document.querySelector('#subMain').value = eval(a)
            console.log(eval(a)) */
            return eval(a)
        }
    }
}



function radioCheck(valueChecked) {
    let radioButton = document.getElementById(`${valueChecked.id}`)
    radioButton.checked = true;
    let afterDot = document.getElementById(`${valueChecked.id}`).value.split('').length - 2;
    return afterDot;

}


function correctSubEq(mantissa) {
    let a = radioCheck(mantissa); // returns how many numbers after dot
    let b = subEq() // returns not rounded eq
    let array;

    if (b != undefined) {
        b = b.toFixed(a)
        array = b.split('');
    }



    if (array != null && array[array.length - 1] == 0 && array[array.length - 2] == 0) {
        for (let i = 0; i < a + 1; i++) {
            array.pop()
        }
        b = array.join('');
        document.querySelector('#subMain').value = b
    } else if (array != null && array[array.length - 1] == 0) {
        array.pop()
        b = array.join('');
        document.querySelector('#subMain').value = b
    }



}


function clearInput() {
    document.querySelector('#main').value = null
    document.querySelector('#subMain').value = null

}