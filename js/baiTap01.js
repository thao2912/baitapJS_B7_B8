function sum() {
    if(numbers.length < 0) {
        getElmById("responeSum").innerHTML = "Hãy nhập giá trị vào.";
        return;
    }

    let sum = 0;
    for(let i=0; i < numbers.length; i ++) {
        sum = sum + Number(numbers[i]);
    }

    getElmById("responeSum").innerHTML = `Tổng các số nguyên: ${sum}`;
}


getElmById("btnSum").onclick = sum;