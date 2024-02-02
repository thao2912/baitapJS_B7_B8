function count() {
    if (numbers.length < 0) {
        getElmById("respone02").innerHTML = "Hãy nhập giá trị vào.";
        return;
    }

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    getElmById("respone02").innerHTML = `Trong dãy số có ${count} số dương`;
}


getElmById("btn02").onclick = count;