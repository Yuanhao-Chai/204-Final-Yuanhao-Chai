//function delete all child in .content
function deleteAllChild() {
  var Content = document.querySelector(".content");
  while (Content.firstChild) {
    Content.removeChild(Content.firstChild);
  }
}

const contentView = document.querySelector(".bigger-img");
const bigImg = document.querySelector(".bigimg");

function showFullImg(srcName) {
  contentView.style.display = "flex";
  //print the src of the image
  console.log(srcName);
  bigImg.src = srcName;
}

var close = document.getElementById("close");
//give it an onclick function
close.onclick = function () {
  contentView.style.display = "none";
};
