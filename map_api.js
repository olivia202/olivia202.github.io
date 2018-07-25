window.onload = function(){
  var lat = 40.74917;
  var long = -73.98529;
  document.getElementById("button").onclick = function search() {
    var zip = document.getElementById("query").value;
    console.log(zip);
    $(function() {
      console.log("updated");
    $.getJSON('convertcsv.json', function(data) {
      for(var i = 0; i < data.length; i++){
        console.log(data[i]);
      }
       // $.each(data.Zipcode, function(i, f) {
       //   console.log(f);
       //   if(f == zip) {
       //     console.log("changing lat and long");
       //     lat = f.Lat;
       //     long = f.Long;
       //   }
       // });
     });
    });
  var xmlhttp = new XMLHttpRequest();
  var apiUrl = "https://places.cit.api.here.com/places/v1/autosuggest?at=" + lat + "," + long + "&q=foodbank&app_id=d10dkRdcadmBk7TSpF1k&app_code=nK5kHnrxo8qbBABzR_tmOw";
  console.log(apiUrl);
  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  function listPlaces(data){
    var apiUrl2= data["results"][0]["href"];
    getJSON(apiUrl2,
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {

        listPlaces2(data);
      }
    });
    function listPlaces2(data){
      console.log(data["view"]);
    }
  }

  getJSON(apiUrl,
  function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {

      listPlaces(data);
    }
  });
  }
}
