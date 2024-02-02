function soNT() {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number <= 2 || number % 2 == 0) {
            break;
        }

        for (let j = 3; i < (number - 1); i += 2) {
            if (number % i == 0) {
                break;
            }

            getElmById("respone08").innerHTML = `Số NT ${number}`;

            return;
        }
    }

}

getElmById("btn08").onclick = soNT;