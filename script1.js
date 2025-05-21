document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");

  // Create rotating headers container
  let rotatingHeaders = document.createElement("div");
  rotatingHeaders.id = "rotating-headers";
  header.appendChild(rotatingHeaders);

  // Create individual rotating header elements
  let header1 = document.createElement("h2");
  header1.id = "header1";
  header1.className = "unbold";
  header1.innerHTML = "אם רק יכולתי לשכפל את עצמי ולעבוד פעמיים...";
  rotatingHeaders.appendChild(header1);

  let header2 = document.createElement("h2");
  header2.id = "header2";
  header2.className = "unbold";
  header2.innerHTML = "אם רק יכולתי לתלות לקוחות מבסוטים במודעות..";
  rotatingHeaders.appendChild(header2);

  let header3 = document.createElement("h2");
  header3.id = "header3";
  header3.className = "unbold";
  header3.innerHTML = "אם רק שיחת המכירה היתה אחרי שלקוחות מנסים את המוצר...";
  rotatingHeaders.appendChild(header3);

  // Create static header
  let staticHeader = document.createElement("div");
  staticHeader.id = "static-header";
  staticHeader.className = "header-container";
  header.appendChild(staticHeader);

  let staticText = document.createElement("h1");
  staticText.innerHTML = "אפשר!";
  staticHeader.appendChild(staticText);

  // ----------------- Rotation Logic -----------------

  let headers = document.querySelectorAll("#rotating-headers h2");
  let currentIndex = 0;
  let fromLeft = true;

  function showOnlyRotatingHeader(index) {
    headers.forEach((h, i) => {
      h.style.display = i === index ? "block" : "none";
    });

    const container = document.getElementById("rotating-headers");
    container.classList.remove("slide-in", "slide-in-right");
    void container.offsetWidth; // trigger reflow

    if (fromLeft) {
      container.classList.add("slide-in");
    } else {
      container.classList.add("slide-in-right");
    }

    staticHeader.style.visibility = "hidden";
  }

  function showWithStatic(index) {
    headers[index].style.display = "block";
    staticHeader.style.visibility = "visible";
    const container = document.getElementById("static-header");
    container.classList.remove("slide-in-from-top");
    void container.offsetWidth; // trigger reflow
    container.classList.add("slide-in-from-top");
  }

  function startCycle() {
    showOnlyRotatingHeader(currentIndex);

    // Show static header after 3s
    setTimeout(() => {
      showWithStatic(currentIndex);
    }, 3000);

    // Move to next header after 6s
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % headers.length;
      fromLeft = !fromLeft;
      startCycle();
    }, 6000);
  }

  startCycle();

  // ----------------- Circle Buttons Logic -----------------

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

  // ----------------- Icon Animation on Scroll -----------------

  const advantages = document.getElementById("advantages");
  const icons = advantages.querySelectorAll("div");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        icons.forEach(icon => icon.classList.add("fade-in"));
      } else {
        icons.forEach(icon => icon.classList.remove("fade-in"));
      }
    });
  }, { threshold: 0.1 });

  observer.observe(advantages);
});