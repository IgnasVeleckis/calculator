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
    console.log(radioButton)
    console.log(afterDot)
    return afterDot;

}

function correctSubEq() {
    let a = radioCheck(tenth);
    let b = subEq()
    console.log(a)
    console.log(b)

    b = b.toFixed(a)
    console.log(b)
    document.querySelector('#subMain').value = b

}






function clearInput() {
    document.querySelector('#main').value = null
    document.querySelector('#subMain').value = null

}