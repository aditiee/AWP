window.addEventListener('load', function () {

    // handlelogic();

    //firstAjaxDemo();

});


let handleLogic = function () {
    const pbc = document.querySelector("#postContainer");
    console.log(pbc);

    let postList = [{
            id: 1,
            post: 'hello Aditya',
            team: 'Debuggers'
        },
        {
            id: 2,
            post: 'hello Shantanu',
            team: 'Technocrats'
        },
        {
            id: 3,
            post: 'hello Shraddha',
            team: 'Technocrats'
        },
        {
            id: 4,
            post: 'hello Vipul',
            team: 'Enigma'
        },
        {
            id: 5,
            post: 'hello Ayushi',
            team: 'Athene'
        },
        {
            id: 6,
            post: 'hello Tushar',
            team: 'xyz'
        }
    ];



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
    let url = "http://localhost:5600/";
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let rt = xhr.responseText;
            console.log(rt);
            let mj = JSON.parse(rt);
            console.log(mj);
            for (let i = 0; i < mj.length; i++) {

                let newEle = pbc.children[0].cloneNode(true);
                newEle.style.display = "flex";
                newEle.children[0].innerHTML = mj[i].city + " " + mj[i].temp;
                pbc.insertBefore(newEle, pbc.firstChild);
                //console.log(newEle.children[0].innerHTML);

            }


        }
    }
    xhr.send();

}