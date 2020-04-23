var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://corona.lmao.ninja/v2/countries/NG?yesterday=true",
  true
);

request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    document.getElementById("total").textContent = data.cases;
    document.getElementById("discharged").textContent = data.recovered;
    document.getElementById("deaths").textContent = data.deaths;
    document.getElementById("new").textContent = data.todayCases;

    document.getElementById("date").textContent = new Date(
      data.updated
    ).toDateString();
  }
};

request.send();
