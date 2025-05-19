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

const messages = [
  "צילום לקוחות ממליצים והקרנה ביום פתוח – הקפיץ את אחוזי הרישום",
  "סרטוני התרמה שהראו את פעילות העמותה והמחישו את הצורך הגדול - הביאו להתגדלת התרומות באופן משמעותי",
  "צילום הדרכה לכנס דיגיטלי – המפגש הבלתי אמצעי איתה הביא לה הרבה לקוחות שלא הכירו אותה",
  "יצירת הדרכה לצביעת קיר – הגדלת החשיפה למקצועיות שלה במאות אחוזים, היא יצאה אוטוריטה בתחום",
  "צילום הרצאות ממרצות מובילות, והנגשתם לכ-30 קבוצות הנטוורקינג בכל הארץ",
  "סרטון רבנים מדברים על הארגון ופעילותו שיצר הרבה מאוד הדים ותעודה לפעילות",
  "צילום ותיעוד כנס – החומרים שימשו תקופה ארוכה לשיווק מוצרים וגיוס משווקות חדשות",
  "תיעוד הסדנה בזמן אמת ויצירת טריילר שיווקי מלא בחוויה שסייע לסגירת עסקאות במהירות",
  "תיעוד פעילויות לגופים מממנים, שהתקבלו בהתפעלות ותודה, והביאו שיתופי פעולה חדשים"
];
const buttons = document.querySelectorAll(".circle-button");
  const messageEl = document.getElementById("message");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      messageEl.textContent = messages[index];
    });
  });
  
/*אנימציה איקונים*/
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.id === "advantages") {
      if (entry.isIntersecting) {
        // כשה-dive נכנס לתצוגה, מוסיפים את האנימציה
        entry.target.classList.add("fade-in");
      } else {
        // כשה-dive יוצא מהתצוגה, מסירים את האנימציה כדי להסתיר
        entry.target.classList.remove("fade-in");
      }
    } else {
      // לכל האייקונים (שלא #advantages)
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // לא רוצים להסתכל עליהם יותר
      }
    }
  });
}, {
  threshold: 0.1
});

// מניח ש advantages מוגדר, לדוגמה:
const advantages = document.getElementById("advantages");
const iconsText = document.querySelectorAll("#advantages > div");

// מציבים את הצופה על ה־advantages הגדול
observer.observe(advantages);

// מציבים את הצופה על כל האייקונים
iconsText.forEach(icon => {
  observer.observe(icon);
});
