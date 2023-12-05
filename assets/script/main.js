let btn = document.querySelector(".btn");
let year_text = document.querySelector(".year-text span");
let month_text = document.querySelector(".month-text span"); // Fix the selector here
let day_text = document.querySelector(".day-text span");

btn.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  let d1 = document.querySelector(".input-day input").value;
  let m1 = document.querySelector(".input-month input").value;
  let y1 = document.querySelector(".input-year input").value;
  if (d1 != "" && m1 != "" && y1 != "") {
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDayInMonth(y1, m1) + d2 - d1;
    }

    year_text.innerHTML = y3;
    month_text.innerHTML = m3;
    day_text.innerHTML = d3;
  }
  if (d1 == "") {
    let d = document.querySelector(".input-day input");
    d.style.border = "1px solid hsl(0, 100%, 67%)";
    d.addEventListener("focus", () => {
      d.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  }
  if (m1 == "") {
    let m = document.querySelector(".input-month input");
    m.style.border = "1px solid hsl(0, 100%, 67%)";
    m.addEventListener("focus", () => {
      m.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  }
  if (y1.length < 4) {
    let y = document.querySelector(".input-year input");
    y.style.border = "1px solid hsl(0, 100%, 67%)";
    y.addEventListener("focus", () => {
      y.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  }
}

function getDayInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
