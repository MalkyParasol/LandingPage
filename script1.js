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

  // Animate the container
  const container = document.getElementById("rotating-headers");
  container.classList.remove("slide-in");
  void container.offsetWidth; // Force reflow
  container.classList.add("slide-in");

  staticHeader.style.visibility = "hidden";
}

// Show rotating + static header
function showWithStatic(index) {
  headers[index].style.display = "block";
  staticHeader.style.visibility = "visible"; // Hide static header
  const container = document.getElementById("static-header");
  container.classList.remove("slide-in");
  void container.offsetWidth; // Force reflow
  container.classList.add("slide-in");
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

// var btn = document.querySelectorAll('btn');
// btn.onclick = () =>{
//   window.location.href = "";
// }