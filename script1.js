var headers = [
  document.getElementById("header1"),
  document.getElementById("header2"),
  document.getElementById("header3"),
];
let staticHeader = document.getElementById("static-header");




let currentIndex = 0;
let fromLeft = true; // start from left


function showOnlyRotatingHeader(index) {
  headers.forEach((h, i) => {
    h.style.display = i === index ? "block" : "none";
  });

  const container = document.getElementById("rotating-headers");
  container.classList.remove("slide-in", "slide-in-right");
  void container.offsetWidth;

  if (fromLeft) {
    container.classList.add("slide-in");
  } else {
    container.classList.add("slide-in-right");
  }

  staticHeader.style.visibility = "hidden";
}

// Show rotating + static header
function showWithStatic(index) {
  headers[index].style.display = "block";
  staticHeader.style.visibility = "visible"; // Hide static header
  const container = document.getElementById("static-header");
  container.classList.remove("slide-in-from-top");
  void container.offsetWidth; // Force reflow
  container.classList.add("slide-in-from-top");
}

function startCycle() {
  showOnlyRotatingHeader(currentIndex);

  // After 3 seconds, show static header
  setTimeout(() => {
    showWithStatic(currentIndex);
  }, 3000);

  // After 6 seconds, go to next header and flip direction
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % headers.length;
    fromLeft = !fromLeft; // alternate direction
    startCycle();
  }, 6000);
}
startCycle();

// var btn = document.querySelectorAll('btn');
// btn.onclick = () =>{
//   window.location.href = "";
// }