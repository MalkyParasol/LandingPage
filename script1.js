var headers = [
    document.getElementById("header1"),
    document.getElementById("header2"),
    document.getElementById("header3"),
  ];
let staticHeader = document.getElementById("static-header");


  var currentIndex = 0;


  function showOnlyRotatingHeader(index) {
    headers.forEach((h, i) => {
      h.style.display = i === index ? "block" : "none";
    });
    staticHeader.style.visibility = "hidden"; // Hide static header
    
  }
  
  // Show rotating + static header
  function showWithStatic(index) {
    headers[index].style.display = "block";
    staticHeader.style.visibility = "visible"; // Hide static header
  }

  function startCycle() {

    showOnlyRotatingHeader(currentIndex);
    
  
    // After 3 minutes, show static header with current rotating one
    setTimeout(() => {
      showWithStatic(currentIndex);
    }, 3000); // 3 minutes
    
  
    // After 6 minutes, move to next rotating header
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % headers.length;
      startCycle(); // Recurse for next header
    }, 6000); // 6 minutes
  }

  startCycle();

  var btn = document.querySelectorAll('btn');
  btn.onclick = () =>{
    window.location.href = "";
  }