var headers = [
    document.getElementById("header1"),
    document.getElementById("header2"),
    document.getElementById("header3"),
  ];

  var btn = document.querySelectorAll('btn');
  btn.onclick = () =>{
    window.location()
  }
  var currentIndex = 0;

  function rotateHeaders() {
    console.log(headers);
    headers[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % headers.length;
    headers[currentIndex].style.display = "block";
  }

  setInterval(rotateHeaders, 3000); // שינוי הכותרת כל 3 שניות