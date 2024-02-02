function minAndPositive() {
    if (numbers.length < 0) {
        getElmById("respone04").innerHTML = "Hãy nhập giá trị vào.";
        return;
    }

    let min = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] < min) {
            min = numbers[i];
        }
    }

    getElmById("respone04").innerHTML = `Số dương nhỏ nhất trong dãy số: ${min}`;
}


getElmById("btn04").onclick = minAndPositive;