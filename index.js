function loveCalcy() {
    var firstPerson = document.getElementById("firstPerson").value;
    var secondPerson = document.getElementById("secondPerson").value;

    var size1 = firstPerson.length;
    var size2 = secondPerson.length;

    var percentage = 100 / size1;
    var result = 0;

    if (size1 <= size2) {
        for (var i = 0; i < size1; i++) {
            if (secondPerson.includes(firstPerson[i]))
                result += percentage;
        }
    } else {
        for (var i = 0; i < size2; i++) {
            if (firstPerson.includes(secondPerson[i]))
                result += percentage;
        }
    }
    document.getElementById('love-percentage').innerHTML = Math.ceil(result);
}
