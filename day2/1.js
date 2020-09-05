let callAjax = function () {
    let x = new XMLHttpRequest();
    x.open("GET", "https://reqres.in/api/users?page=2");
    x.onload = () => {
        console.log(x.readyState);
        console.log(x.responseText);
        const mj = JSON.parse(x.responseText);
        domLogic(mj);


    }
    x.send();
}

let domLogic = (refmj) => {
    let par = document.getElementById("txt");

    for (let i = 0; i < refmj.data.length; i++) {
        let newELE = par.children[0].cloneNode(true);
        newELE.innerHTML = refmj.data[i].first_name + "<br>";
        newELE.style.display = "block"
        par.appendChild(newELE);

    }

}