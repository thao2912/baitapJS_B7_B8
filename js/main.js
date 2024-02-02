function getElmById(id) {
    return document.getElementById(id);
}

let numbers = [];

getElmById("btnAdd").onclick = function () {
    let number = getElmById("txtNum").value;
    numbers = numbers.concat(number);

    getElmById("respone").innerHTML = numbers.toString();
}