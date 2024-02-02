function compare() {
    let soNguyen = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            soNguyen++;
        } 
    }

    getElmById("respone09").innerHTML = `Dãy số có ${soNguyen} số nguyên`;

}

getElmById("btn09").onclick = compare;