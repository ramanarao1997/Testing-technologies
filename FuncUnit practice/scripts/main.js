document.addEventListener("DOMContentLoaded", function () {

    var count = 0;

    document.getElementById("btn").addEventListener("click", function () {

        let buttonEle = document.getElementById("btn");
        buttonEle.style.background = "#00FF00";
        buttonEle.innerHTML = "Changed by funcUnit to Green";

        let main = document.getElementById('outputDiv');
        let newEle = document.createElement('h3');
        newEle.classList.add("outputH3")
        newEle.innerHTML = "Added by click"

        main.appendChild(newEle);
    });

    var tempText = document.getElementById("tempText");

    tempText.addEventListener("click", function () {
        if (count === 0) {
            tempText.value = "Changed using find()";
            count = 1;
        } else {
            tempText.value = "Changed using F method";
            count = 0;
        }
    });
});