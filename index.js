function loveCalcy() {
    var firstPerson = document.getElementById("firstPerson").value;
    var secondPerson = document.getElementById("secondPerson").value;
    var result = 0;

    if(firstPerson=="" || secondPerson=="")
        alert("Please! Enter Name");


    if (firstPerson.length <= secondPerson.length) {
        for (var i = 0; i < firstPerson.length; i++) {
            if (secondPerson.includes(firstPerson[i]))
                result += (100 / firstPerson.length);
        }
    } else {
        for (var i = 0; i < secondPerson.length; i++) {
            if (firstPerson.includes(secondPerson[i]))
            result += (100 / secondPerson.length);
        }
    }
    document.getElementById('love-percentage').innerHTML = Math.ceil(result);
}
