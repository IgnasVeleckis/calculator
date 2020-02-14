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
    let taskString = document.querySelector("#main").value;
    let taskStringToArray = taskString.split("");
    let length = taskStringToArray.length;
    let badArr = ["/", "*", "-", "+", "."];
    if (badArr.includes(taskStringToArray[length - 1])) {
        document.querySelector("#main").classList.add("warn");
        removeWarnStyle();
    } else {
        if (eval(taskString) == undefined) {
            console.log("nothing to calculate");
        } else {
            let round = rounding();
            let zeroArr = [1];
            for (let i = 0; i < round; i++) {
                zeroArr.push(0);
            }
            let zeroToString = zeroArr.join("");
            let roundedByChoosen =
                Math.round((eval(taskString) + Number.EPSILON) * zeroToString) /
                zeroToString;
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

function removeWarnStyle() {
    setTimeout(function() {
        let span = document.querySelector("#main");
        span.classList.remove("warn");
    }, 2000);
}