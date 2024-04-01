$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let phoneNumber = "5518991099697"; // Número de telefone do WhatsApp

    let url = `https://wa.me/5518998000585?text=Olá+meu+nome+é+${name}+e+${message}`;
    window.open(url, "_blank");
  });


  let count1 = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage1();
}, 3000);

function nextImage1() {
  count1++;
  if (count1 > 4) {
    count1 = 1;
  }

  document.getElementById("radio" + count1).checked = true;
}

let count2 = 1;
document.getElementById("radio5").checked = true;

setInterval(function () {
  nextImage2();
}, 3000);

function nextImage2() {
  count2++;
  if (count2 > 8) {
    count2 = 1;
  }

  document.getElementById("radio" + (count2 + 4)).checked = true;
}












