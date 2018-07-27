

  function search() {
    var links = document.getElementsByClassName("recipe_name");


    for(var i = 0; i < links.length; i++){
      console.log("setting links to visible");
      links[i].style.visibility = "visible";
    }

  var xmlhttp = new XMLHttpRequest();
  var query = document.getElementById('query').value;
  var apiUrl = "http://food2fork.com/api/search?key=" + "95bc46aeb7666db1f346821da94e3414"+ "&q=" + query;
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


function listRecipes(data){
  console.log(data);
  // var rec = "";
  // for(var i = 0; i < data.recipes.length; i++){
  //   rec += data.recipes[i].title + "\n";
  // }
  // document.getElementById("recipeName").innerHTML= rec;
  document.getElementById("recipeName").innerHTML = data.recipes[0].title;
  document.getElementById("link").href = data.recipes[0].source_url;
  document.getElementById("image").src = data.recipes[0].image_url;

  document.getElementById("recipeName2").innerHTML = data.recipes[1].title;
  document.getElementById("link2").href = data.recipes[1].source_url;
  document.getElementById("image2").src = data.recipes[1].image_url;

  document.getElementById("recipeName3").innerHTML = data.recipes[2].title;
  document.getElementById("link3").href = data.recipes[2].source_url;
  document.getElementById("image3").src = data.recipes[2].image_url;

  document.getElementById("recipeName4").innerHTML = data.recipes[3].title;
  document.getElementById("link4").href = data.recipes[3].source_url;
  document.getElementById("image4").src = data.recipes[3].image_url;

  document.getElementById("recipeName5").innerHTML = data.recipes[4].title;
  document.getElementById("link5").href = data.recipes[4].source_url;
  document.getElementById("image5").src = data.recipes[4].image_url;

  document.getElementById("recipeName6").innerHTML = data.recipes[5].title;
  document.getElementById("link6").href = data.recipes[5].source_url;
  document.getElementById("image6").src = data.recipes[5].image_url;

  document.getElementById("recipeName7").innerHTML = data.recipes[6].title;
  document.getElementById("link7").href = data.recipes[6].source_url;
  document.getElementById("image7").src = data.recipes[6].image_url;

  document.getElementById("recipeName8").innerHTML = data.recipes[7].title;
  document.getElementById("link8").href = data.recipes[7].source_url;
  document.getElementById("image8").src = data.recipes[7].image_url;

  document.getElementById("recipeName9").innerHTML = data.recipes[8].title;
  document.getElementById("link9").href = data.recipes[8].source_url;
  document.getElementById("image9").src = data.recipes[8].image_url;

  document.getElementById("recipeName10").innerHTML = data.recipes[9].title;
  document.getElementById("link10").href = data.recipes[9].source_url;
  document.getElementById("image10").src = data.recipes[9].image_url;

  var links = document.getElementsByClassName("recipe_link"), i;
  for (var i = 0; i < links.length; i ++) {
    links[i].style.visibility = 'visible';
}
}


getJSON(apiUrl,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    // alert('Your query count: ' + data.count);
    listRecipes(data);
  }
});



function myFunction(arr) {
  var out = "";
  var i;
  for (i=0; i<arr.length; i++){
    out += "<a href='" + arr[i].url + "'>" + arr[i].display + "</a> <br>";
  }
  document.getElementById("response").innerHTML= out;
  document.getElementsByClassName("recipe_link").style.visibility = "visible";
}
}
