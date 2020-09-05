const pbc = document.querySelector("#postContainer");
console.log(pbc);

let f1 = function () {
    for (let i = 0; i < 10; i++) {
        let newEle = pbc.children[0].cloneNode(true);
        newEle.style.display = "flex";
        newEle.children[0].innerHTML = "Adti Gudadhe " + i;
        pbc.appendChild(newEle);
    }
}

window.addEventListener('load', f1);

