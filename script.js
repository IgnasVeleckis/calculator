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

function subEq(eqCheck) {
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
            let round = rounding();
            let zero = 0;
            let zeroArr = [1];
            for (let i = 0; i < round; i++) {
                zeroArr.push(zero);
            }
            let zeroToString = zeroArr.join("");
            let roundedByChoosen =
                Math.round((eval(a) + Number.EPSILON) * zeroToString) / zeroToString;
            if (eqCheck == 9) {
                document.querySelector("#main").value = roundedByChoosen;
            }
            document.querySelector("#subMain").value = roundedByChoosen;
        }
    }
}

function clearInput() {
    document.querySelector("#main").value = null;
    document.querySelector("#subMain").value = null;
}

function rounding() {
    let wantedRound = document.querySelector("#round").value;
    return wantedRound;
}