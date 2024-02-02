function min() {
    if (numbers.length < 0) {
        getElmById("respone03").innerHTML = "Hãy nhập giá trị vào.";
        return;
    }

    let min = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    getElmById("respone03").innerHTML = `Số min trong dãy số: ${min}`;
}


getElmById("btn03").onclick = count;