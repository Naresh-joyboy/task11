
var res = fetch("https://restcountries.com/v2/all");
res
  .then((data) => data.json())
  .then((data1) => {
    var row = document.createElement("div");
    row.classList.add("row");
console.log(data1)
    for (var i = 0; i < data1.length; i++) {
      // console.log(data1[i].name);
      var div = document.createElement("div");
      div.classList.add("col", "md-4");
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
          <h5 class="card-title"><center>${data1[i].name}</h5>
          <img src="${data1[i].flag}" class="card-img" alt="">
          <div class="card-body">
            <h5 class="card-titl"><center>capital: ${data1[i].capital}</h5>
            <h5 class="card-tit"><center>region: ${data1[i].region}</h5>
            <h5 class="card-ti"><center>countrycode: ${data1[i].countrycode}</h5>
            <button class="button" style="margin-left:20% "onclick="weather1(${i})">click for weather</button>
          </div>
        </div>
      `;
      row.append(div);
    }

    document.body.append(row);
  });

function weather1(i){
  var res = fetch("https://restcountries.com/v2/all");
res
  .then((data) => data.json())
  .then((data1) => {
    

  if(data1[i].capital&&data1[i].region){
      var weather=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data1[i].capital},${data1[i].region}india&appid=3a9945b5c2ec70452807dc97dc49251c`);
      weather.then((data2) => data2.json())
        .then((data11) => {      alert(data11.weather[0].main);
  })
}
  
  });
}
