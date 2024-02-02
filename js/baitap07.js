function change() {
    let index01 = getElmById("txtNum1").value;
    let index02 = getElmById("txtNum2").value;


    if (index01 == "" || index02 == "") {
        getElmById("respone06").innerHTML = "Hãy nhập giá trị vào.";
        return;
    }

    if(numbers.length < index01 ||  numbers.length < index02) {
        getElmById("respone06").innerHTML = "Giá trị nhập không đúng.";
        return;
    }

    let valueIndex1 = numbers[index01];
    let valueIndex2 = numbers[index02];

    numbers[index01] = valueIndex2;
    numbers[index02] = valueIndex1;

    getElmById("respone06").innerHTML = `Đã đổi vị trí của số`;
}


getElmById("btn06").onclick = change;