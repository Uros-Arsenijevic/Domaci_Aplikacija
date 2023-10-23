let addCityBtn = document.querySelector(".addCity");

let allCitys = []
addCityBtn.addEventListener("click", () => {
    let nameCityAndTemperature = prompt("Unesite ime grada i temperaturu");
    
    nameCityAndTemperature = nameCityAndTemperature.split(" ");

    let obj = {
        nameCity: nameCityAndTemperature[0],
        Temperature: nameCityAndTemperature[1],
    };

    allCitys.push(obj);
});

let warmCitiesBtn = document.querySelector(".warmCitiesBtn");

warmCitiesBtn.addEventListener("click", () => {
    allCitys.forEach(singleElements => {
        if(+singleElements.Temperature >= 15){
            warmCitiesBtn.nextElementSibling.innerHTML += ` ${singleElements.nameCity} ${singleElements.Temperature}`;
        };
    });
});

let coldCitiesBtn = document.querySelector(".coldCitiesBtn");

coldCitiesBtn.addEventListener("click", () => {
    allCitys.forEach(singleElements => {
        if(+singleElements.Temperature < 15){
            coldCitiesBtn.nextElementSibling.innerHTML += ` ${singleElements.nameCity} ${singleElements.Temperature}`;
        };
    });
});



