function evenLasted() {
    if (numbers.length < 0) {
        getElmById("respone04").innerHTML = "Hãy nhập giá trị vào.";
        return;
    }

    let number = 0;
    for (let i = numbers.length; i >= 0 ; i--) {
        if (numbers[i] % 2 == 0) {
            number = numbers[i];
        }
    }

    getElmById("respone05").innerHTML = `Số dương nhỏ nhất trong dãy số: ${number}`;
}


getElmById("btn05").onclick = evenLasted;