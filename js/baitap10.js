function compare() {
    let soLuongSoDuong = 0;
    let soLuongSoAm = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            soLuongSoDuong++;
        } else {
            soLuongSoAm ++;
        }
    }

    if(soLuongSoDuong > soLuongSoAm) {
        getElmById("respone10").innerHTML = `Dãy số có số dương nhiều hơn`;
    } else if(soLuongSoDuong < soLuongSoAm){
        getElmById("respone10").innerHTML = `Dãy số có số âm nhiều hơn`;
    } else {
        getElmById("respone10").innerHTML = `Dãy số có số âm bằng số dương`;
    }

}

getElmById("btn10").onclick = compare;