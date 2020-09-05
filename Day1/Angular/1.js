let register = () => {
    let i = document.querySelector("#student-id").value;
    let n = document.querySelector("#user-name").value;
    let c = document.querySelector("#user-city").value;


    console.log("hello");
    let url = `http://localhost:3000/adduser?sid=${i}&name=${n}&city=${c}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        const res = xhr.responseText;
        console.log(res);

        document.querySelector("#student-id").value = "";
        document.querySelector("#user-name").value = "";
        document.querySelector("#user-city").value = "";
    }
    xhr.send();


}

let register1 = async () => {
    let i = document.querySelector("#student-id").value;
    let n = document.querySelector("#user-name").value;
    let c = document.querySelector("#user-city").value;


    let url = `http://localhost:3000/adduser?sid=${i}&name=${n}&city=${c}`;
    await fetch(url);
    //const json = await res.json();

    document.querySelector("#student-id").value = "";
    document.querySelector("#user-name").value = "";
    document.querySelector("#user-city").value = "";

}

let registerPost = async () => {
    let sid = document.querySelector("#student-id").value;
    let name = document.querySelector("#user-name").value;
    let city = document.querySelector("#user-city").value;

    let input = {
        sid,
        name,
        city
    };

    let inputString = JSON.stringify(input);

    let url = `http://localhost:3000/adduser`;
    await fetch(url, {
        method: "POST",
        body: inputString,
        headers: {
            'Content-Type': 'application/json'
        }
    });


    document.querySelector("#student-id").value = "";
    document.querySelector("#user-name").value = "";
    document.querySelector("#user-city").value = "";

}