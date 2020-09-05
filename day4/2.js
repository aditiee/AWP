let callAJAX = () => {

    let city = "pune";
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=24060611d6b664b49a70569445952941&units=metric";

    $.ajax(url).done((data) => {
        console.log(data);
        //myDom(data);
        //myDom1(data);
        $("#parent :nth-child(1)").clone(true).html(data.name + " " + data.main.temp_max).insertBefore($("#parent :nth-child(1)"));
    });
};


let myDom = (data) => {
    //let par = $("#parent");
    //console.log(par);
    let par = document.querySelector("#parent");
    let newEle = par.children[0].cloneNode(true);
    newEle.style.display = "block";
    newEle.children[0].innerHTML = data.name;
    par.appendChild(newEle);
}
let myDom1 = (data) => {
    $("#parent :nth-child(1)").clone(true).html(data.name + " " + data.main.temp_max).insertBefore($("#parent :nth-child(1)"));
}