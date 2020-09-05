



window.addEventListener('load', function () {

    // handlelogic();

    firstAjaxDemo();

});


let handleLogic = function () {
    const pbc = document.querySelector("#postContainer");
    console.log(pbc);

    let postList = [{ id: 1, post: 'hello Aditya', team: 'Debuggers' },
    { id: 2, post: 'hello Aditi', team: 'Technocrats' },
    { id: 3, post: 'hello Sayali', team: 'Technocrats' },
    { id: 4, post: 'hello Rupali', team: 'Enigma' },
    { id: 5, post: 'hello akash', team: 'Athene' },
    { id: 6, post: 'hello Raj', team: 'xyz' }];



    for (let i = 0; i < postList.length; i++) {

        let newEle = pbc.children[0].cloneNode(true);
        newEle.style.display = "flex";
        newEle.children[0].innerHTML = postList[i].post + " from team " + postList[i].team;
        pbc.insertBefore(newEle, pbc.firstChild);

    }
}

let firstAjaxDemo = function () {
    const pbc = document.querySelector("#postContainer");
    let xhr = new XMLHttpRequest();
    let url = "https://reqres.in/api/users?page=2";
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let rt = xhr.responseText;
            let mj = JSON.parse(rt);
            console.log(mj);
            for (let i = 0; i < mj.data.length; i++) {

                let newEle = pbc.children[0].cloneNode(true);
                newEle.style.display = "flex";
                newEle.children[0].innerHTML = "<img src=" + mj.data[i].avatar + ">" + " Email :- " + mj.data[i].email + "<br>  Name:-" + mj.data[i].first_name + " " + mj.data[i].last_name;
                pbc.insertBefore(newEle, pbc.firstChild);
                console.log(newEle.children[0].innerHTML);

            }


        }
    }
    xhr.send();

} 