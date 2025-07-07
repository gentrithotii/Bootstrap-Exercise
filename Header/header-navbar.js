fetch("Header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-navbar").innerHTML = data;
  });
