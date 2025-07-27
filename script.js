const input = document.querySelector("input"),
  emailIcon = document.querySelector(".email-icon");

input.addEventListener("keyup", () => {
  let pattern = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/;
  if (input.value === "") {
    emailIcon.classList.replace("fa-check", "fa-envelope");
    return emailIcon.style.color="#b4b4b4";
  }
  if (input.value.match(pattern)) {
    emailIcon.classList.replace("fa-envelope", "fa-check");
    return (emailIcon.style.color = "#4bb543");
  }
  emailIcon.classList.replace("fa-check", "fa-envelope");
  emailIcon.style.color = "#de0611";
});
