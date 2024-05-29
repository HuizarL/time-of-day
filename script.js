window.onload = function () {
  const date = new Date();
  const hour = date.getHours();
  const content = document.getElementById("content");
  const timeImage = document.getElementById("timeImage");
  const meddage = document.getElementById("message");
  const copyrightYearSpan = document.getElementById("copyright-year");

  // Set the dynamic copyright year
  const currentYear = new Date().getFullYear();
  const dynamicCopyright =
    currentYear === 2022
      ? `&copy; ${currentYear}`
      : `&copy; 2022-${currentYear}`;
  copyrightYearSpan.innerHTML = dynamicCopyright;

  if (hour >= 5 && hour < 12) {
    //Morning
    document.body.className = "morning";
    timeImage.src = "images/morning.jpg";
    message.textContent = "Good Morning!";
  } else if (hour >= 12 && hour < 18) {
    //Afternoon
    document.body.className = "afternoon";
    timeImage.src = "images/afternoon.jpg";
    message.textContent = "Good Afternoon!";
  } else if (hour >= 18 && hour < 23) {
    //Evening
    document.body.className = "evening";
    timeImage.src = "images/evening.jpg";
    message.textContent = "Good Evening!";
  } else {
    //Night
    document.body.className = "night";
    timeImage.src = "images/night.jpg";
    message.textContent = "Good Night!";
  }
};
