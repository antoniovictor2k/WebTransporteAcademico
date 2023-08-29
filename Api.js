const apiRest = 'https://back-end-transporte-academico.vercel.app/receberlocalizacao/64d6e99b9685703099a16352';

//  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var requestURL = apiRest;
 
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var superHeroes = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
  console.log(superHeroes);
};