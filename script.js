let nftimagediv = document.getElementById("nft-image");
let viewImage = document.getElementById("view-image");
nftimagediv.addEventListener("mouseover", function () {
  viewImage.style.display = "block";
});

nftimagediv.addEventListener("mouseleave", function () {
  viewImage.style.display = "none";
});
