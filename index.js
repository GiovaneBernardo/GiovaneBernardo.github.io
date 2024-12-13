document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-text-container");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      //project.classList.toggle("expanded");
      project.parentElement
        .querySelector(".project-details")
        .classList.toggle("expanded");
    });
  });

  const closeButtons = document.querySelectorAll(".project-modal-close-button");

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.parentElement.classList.toggle("expanded");
    });
  });
});


