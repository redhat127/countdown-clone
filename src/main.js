import "./input.css";

const date = new Date();
date.setMonth(date.getMonth() + 2);

const months = document.querySelector("#months > h2");
const days = document.querySelector("#days > h2");
const hours = document.querySelector("#hours > h2");
const minutes = document.querySelector("#minutes > h2");
const seconds = document.querySelector("#seconds > h2");

const id = setInterval(() => {
  updateCountdown();
}, 1000);

function updateCountdown() {
  const now = Date.now();

  const timeDifference = date.getTime() - now;

  if (timeDifference <= 0) {
    clearInterval(id);
    const h1 = document.querySelector("h1");
    h1.classList.add("text-red-500");
    h1.textContent = "the countdown expired.";
    return;
  }

  months.textContent = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  days.textContent = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  hours.textContent = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.textContent = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  seconds.textContent = Math.floor((timeDifference % (1000 * 60)) / 1000);
}
