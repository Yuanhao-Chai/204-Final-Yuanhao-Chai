var g = "naruto";
var searchUrl = "https://api.jikan.moe/v4/anime" + "?q=" + g + "&limit=10";

var infoarray2 = [];
const search = document.querySelector(".search");
search.addEventListener("click", async () => {
  deleteAllChild();
  mode = "b";
  const input = document.querySelector(".input");
  const g = input.value;
  console.log(g);
  const searchUrl = "https://api.jikan.moe/v4/anime" + "?q=" + g + "&limit=10";
  const searchResult = await getSearchResult(searchUrl);
  //console.log(searchResult);
  const searchList = searchResult.data;
  infoarray2 = searchList;
  //console.log(searchList);
  var Content = document.querySelector(".content");
  for (let i = 0; i < searchList.length; i++) {
    //console.log(list[i].url);
    let img = document.createElement("img");
    let text = document.createElement("p");
    img.src = searchList[i].images.jpg.large_image_url;
    text.innerText = searchList[i].title;
    const srcName = searchList[i].images.jpg.large_image_url;
    img.classList.add("img");
    //onclick event for img
    img.onclick = function () {
      showFullImg(srcName);
    };
    Content.appendChild(img);
    Content.appendChild(text);
  }
});

const getSearchResult = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//searchList[i].popularity

const popularity = document.querySelector(".popularity");
popularity.addEventListener("click", async () => {
  console.log(infoarray2);
  const arrayNow = infoarray2.sort(function (a, b) {
    return b.popularity - a.popularity;
  });
  deleteAllChild();
  var Content = document.querySelector(".content");
  for (let i = 0; i < arrayNow.length; i++) {
    //console.log(list[i].url);
    let img = document.createElement("img");
    let text = document.createElement("p");
    img.src = arrayNow[i].images.jpg.large_image_url;
    text.innerText = arrayNow[i].title;
    const srcName = arrayNow[i].images.jpg.large_image_url;
    img.classList.add("img");
    //onclick event for img
    img.onclick = function () {
      showFullImg(srcName);
    };
    Content.appendChild(img);
    Content.appendChild(text);
  }
});
