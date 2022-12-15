const apiurl = "https://api.waifu.im/";
// tags are maid, waifu, marin-kitagawa, mori-calliope, raiden-shogun, oppai, selfies, uniform
const tags = [
  "maid",
  "waifu",
  "marin-kitagawa",
  "mori-calliope",
  "raiden-shogun",
  "oppai",
  "selfies",
  "uniform",
];
const a = "true";
var b = "uniform";

var mode = "a";

var controlUrl =
  "https://api.waifu.im/search/?" +
  "many=" +
  a +
  "&included_tags=" +
  b +
  "&is_nsfw=true";

//select class "select-tags"
const select = document.querySelector(".select-tags");

//load the tags into the select
tags.forEach((tag) => {
  const option = document.createElement("option");
  option.value = tag;
  option.innerText = tag;
  select.appendChild(option);
});

//function to get random image with tag
// const getImg = async (tag) => {
//   const res = await fetch(`${apiurl}search?included_tags = ${tag}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

const getImg = async () => {
  const res = await fetch(`${controlUrl}`);
  const data = await res.json();
  //console.log(data);
  return data;
};

//get the class "btn"
const btn = document.querySelector(".btn");
var left = document.getElementById("left");
var right = document.getElementById("right");
var infoarray = [];
//when btn is clicked, get the value of the select and get the image
btn.addEventListener("click", async () => {
  deleteAllChild();
  mode = "a";
  const tag = select.value;
  //get the text from the select
  const tagText = select.options[select.selectedIndex].text;
  b = tagText;
  //console.log(b);
  controlUrl =
    "https://api.waifu.im/search/?" +
    "many=" +
    a +
    "&included_tags=" +
    b +
    "&is_nsfw=false";
  const img = await getImg();
  const url = img.images[0].url;
  const list = img.images;
  infoarray = list;
  //console.log(list);
  var Content = document.querySelector(".content");
  for (let i = 0; i < list.length; i++) {
    //console.log(list[i].url);
    let img = document.createElement("img");
    img.src = list[i].url;
    const srcName = list[i].url;
    img.classList.add("img");
    //onclick event for img
    img.onclick = function () {
      showFullImg(srcName);
    };
    Content.appendChild(img);
  }
  //document.querySelector(".img").src = url;
  const color = img.images[0].dominant_color;
  document.body.style.backgroundColor = color;
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", async () => {
  //console.log(infoarray);
  //sort the infoarray by favourites
  // const arrayNow = [];
  // for (let i = 0; i < infoarray.length; i++) {
  //   var max = 0;
  //   var index = 0;
  //   for (let j = 0; j < infoarray.length; j++) {
  //     if (infoarray[j].favourites > max) {
  //       max = infoarray[j].favourites;
  //       //console.log(max);
  //       index = j;
  //     }
  //   }
  //   arrayNow[i] = infoarray[index];
  //   infoarray[index].favourites = 0;
  // }
  //sort the infoarray by favourites
  const arrayNow = infoarray.sort(function (a, b) {
    return b.favourites - a.favourites;
  });
  deleteAllChild();
  var Content = document.querySelector(".content");
  for (let i = 0; i < arrayNow.length; i++) {
    //console.log(list[i].url);
    let img = document.createElement("img");
    img.src = arrayNow[i].url;
    const srcName = arrayNow[i].url;
    img.classList.add("img");
    //onclick event for img
    img.onclick = function () {
      showFullImg(srcName);
    };
    Content.appendChild(img);
  }
  //console.log(arrayNow);
});

var right = document.getElementById("right");
//give it an onclick function
right.onclick = function () {
  //check the mode
  if (mode == "a") {
    //get the src of the fullImg
    var src = bigImg.src;
    //check which if the src string contains any of the images src string
    for (var i = 0; i < infoarray.length; i++) {
      if (src.includes(infoarray[i].url)) {
        //if it does, check if it's the last image
        if (i == infoarray.length - 1) {
          //if it is, show the first image
          bigImg.src = infoarray[0].url;
        } else {
          //else show the next image
          bigImg.src = infoarray[i + 1].url;
        }
      }
    }
  } else {
    //get the src of the fullImg
    var src = bigImg.src;
    //check which if the src string contains any of the images src string
    for (var i = 0; i < infoarray2.length; i++) {
      if (src.includes(infoarray2[i].images.jpg.large_image_url)) {
        //if it does, check if it's the last image
        if (i == infoarray2.length - 1) {
          //if it is, show the first image
          bigImg.src = infoarray2[0].images.jpg.large_image_url;
        } else {
          //else show the next image
          bigImg.src = infoarray2[i + 1].images.jpg.large_image_url;
        }
      }
    }
  }
};

var left = document.getElementById("left");
//give it an onclick function
left.onclick = function () {
  //get the src of the fullImg
  var infoarrayx = [];
  if (mode == "a") {
    var src = bigImg.src;
    //check which if the src string contains any of the images src string
    for (var i = 0; i < infoarray.length; i++) {
      if (src.includes(infoarray[i].url)) {
        //if it does, check if it's the first image
        if (i == 0) {
          //if it is, show the last image
          bigImg.src = infoarray[infoarray.length - 1].url;
        } else {
          //else show the previous image
          bigImg.src = infoarray[i - 1].url;
        }
      }
    }
  } else {
    var src = bigImg.src;
    //check which if the src string contains any of the images src string
    for (var i = 0; i < infoarray2.length; i++) {
      if (src.includes(infoarray2[i].images.jpg.large_image_url)) {
        //if it does, check if it's the first image
        if (i == 0) {
          //if it is, show the last image
          bigImg.src =
            infoarray2[infoarray2.length - 1].images.jpg.large_image_url;
        } else {
          //else show the previous image
          bigImg.src = infoarray2[i - 1].images.jpg.large_image_url;
        }
      }
    }
  }
};
