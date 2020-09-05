let getWeather = () => {
    // CITY NAME IS HARD CODED
  
    let cityName = document.querySelector("#textid").value || "pune";
  
    /*let url =
      "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=pune";*/
  
    let url =
      "https://api.openweathermap.org/data/2.5/weather?appid=bc46f37637c6422c667181a1b42a9a7f&units=metric&q=" +

      cityName;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
  
    xhr.onload = () => {
      const refjson = JSON.parse(xhr.responseText);
      console.log(refjson);
      domOperationHere(refjson);
    };
  
    xhr.send();
  };
  
  let domOperationHere = (refjson) => {
    console.log(refjson.main);
    const name = refjson.name;
    const maxTemp = refjson.main.temp_max;
    const humidity = refjson.main.humidity;
    const pressure = refjson.main.pressure;
    const wind = refjson.wind.speed;
    const clouds = refjson.clouds.all;
   
  
  
  
    const parent = document.querySelector("#parent");
  
    const newElement = parent.children[0]
    newElement.style.display = "flex";
    newElement.innerHTML =
     `
     <div class="container">
     <div class="card-mid row d-flex justify-content-center align-items-center">
     <h3 style="margin-bottom:10px;"><i class="fa fa-cloud">Weather</h3>
     </div>
     <div class="row d-flex justify-content-center  flex-direction-column ">
    
     <div class="col-md-12  mb-4   d-flex justify-content-center align-items-center temp" 
          style="box-shadow:0 0 10px 0;
                  padding:10px 100px;
                  margin-left: 50px;">


     <span><i class="fa fa-map-marker" style="font-size:30px;" aria-hidden="true"></i>  ${ name + " "} 
     <p style="font-size="50px;" >
      <b>${+  maxTemp }&deg;</b>C</p></span>

       </div> 
     </div> 
     <div class="card-mid row">
     <div class="col-3  mr-2 ml-2" style="box-shadow:0 0 10px 0;" >
       <span> <i class="fa fa-tint"></i>Humidity
       <p>${refjson.main.humidity}%</p></span>
     </div>
     <div class="col-3  mr-2" style="box-shadow:0 0 10px 0; ">
     <span>Clouds<i class="fa fa-cloud" aria-hidden="true"></i>
     <p>${refjson.clouds.all}%</p></span>
   </div>
   <div class="col-5" style="box-shadow:0 0 10px 0; ">
   <span>Wind</span>
   <p>${refjson.wind.speed} km/hr</p>
 </div>
 </div>
 <div class="card-mid row">
 <div class="col-md-12  text-center mt-2" style="box-shadow:0 0 10px 0; ">
       <span>Pressure </span>
       <p>${refjson.main.pressure} hPa</p>
     </div>
 

     </div> 
     </div>`
  
    parent.insertBefore(newElement, parent.firstChild);
  
    document.querySelector("#textid").value =" ";
  };