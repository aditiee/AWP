let callAjax = () => {
    let x = new XMLHttpRequest();
    x.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors")
    x.onload = () => {
        let mj = JSON.parse(x.responseText);
        domJson(mj);
    }
    x.send();
}


let callXML = () => {
    let x = new XMLHttpRequest();

    x.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    x.setRequestHeader("accept", "application/xml");
    x.onload = () => {

        let xmldoc = x.responseXML;
        domXML(xmldoc);
    }
    x.send();
}

let domXML = (xmldoc) => {
    const authL = xmldoc.querySelectorAll("Author");
    console.log(xmldoc);
    console.log(authL);
    for (let i = 0; i < (authL.length) / 10; i++) {

        const par = document.querySelector("#pare");
        const ne = par.children[0].cloneNode(true);
        ne.style.display = "block";
        ne.innerHTML = authL[i].children[3].innerHTML;

        par.appendChild(ne);
    }
}

let domJson = (r) => {
    let par = document.querySelector("#pare");
    console.log(par);
    for (let i = 0; i < (r.length) / 10; i++) {
        let item = r[i];
        let ne = par.children[0].cloneNode(true);
        ne.style.display = "block";
        par.insertBefore(ne, par.firstChild);
        ne.innerHTML = item.FirstName;


    }
}