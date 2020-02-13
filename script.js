let arr = [];

function newVal(btnVal) {
    let length = arr.length;
    if (typeof btnVal == "number") {
        document.querySelector("#main").value =
            document.querySelector("#main").value + btnVal;
        arr.push(typeof btnVal);
        subEq();
    }
    if (typeof btnVal == "string" && arr[length - 1] != "string" && length != 0) {
        document.querySelector("#main").value =
            document.querySelector("#main").value + btnVal;
        arr.push(typeof btnVal);
    }
}

function eq() {
    let a = document.querySelector("#main").value;
    let arr = a.split("");
    let length = arr.length;
    let badArr = ["/", "*", "-", "+", "."];
    if (badArr.includes(arr[length - 1])) {
        console.log("bad-format");
    } else {
        if (eval(a) == undefined) {
            console.log("nothing to calculate");
        } else {
            document.querySelector("#main").value =
                Math.round((eval(a) + Number.EPSILON) * 1000) / 1000;
        }
    }
}

function subEq() {
    let a = document.querySelector("#main").value;
    let arr = a.split("");
    let length = arr.length;
    let badArr = ["/", "*", "-", "+", "."];
    if (badArr.includes(arr[length - 1])) {
        console.log("bad-format");
    } else {
        if (eval(a) == undefined) {
            console.log("nothing to calculate");
        } else {
            let round = rounding(); // return value from select. this value = how much numbers after .

            let ccc = Math.round((eval(a) + Number.EPSILON) * 1000) / 1000; // zenklai po kabl
            document.querySelector("#subMain").value = ccc;
        }
    }
}

function clearInput() {
    document.querySelector("#main").value = null;
    document.querySelector("#subMain").value = null;
}

function rounding() {
    let wantedRound = document.querySelector("#round").value;
    console.log(wantedRound);
    return wantedRound;
}