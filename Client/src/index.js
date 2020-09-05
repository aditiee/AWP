let Signin = async () => {
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
    const  mobile = document.querySelector("#mobile").value;
    
    if (firstname === "") {
        document.querySelector("#firstname").style.borderColor = "red";
        return;
      }
  
    const input = {
        firstname,
        lastname,
        password,
        confirmpassword,
        email,
        mobile,
    };
    const url = "http://localhost:3000/adduser";
  
    // http understands text
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value ="";
    document.querySelector("#email").value ="";
    document.querySelector("#password").value ="";
    document.querySelector("#confirmpassword").value ="";
    document.querySelector("#mobile").value ="";
   
  };