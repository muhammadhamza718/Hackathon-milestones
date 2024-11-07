window.onload = function () {
    var skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.style.display = 'none';
    }
};
// const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
// const skillsDiv = document.getElementById("skills-section") as HTMLDivElement;
// toggleButton.addEventListener("click", () => {
//   if (skillsDiv.style.display === "none") {
//     skillsDiv.style.display = "block";
//     toggleButton.textContent = "Hide skills-section";
//   } else {
//     skillsDiv.style.display = "none";
//     toggleButton.textContent = "Show skills-section";
//   }
// });
var toggleButton = document.getElementById('toggle-skills');
if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        var skillsSection = document.getElementById('skills-section');
        if (skillsSection) {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
                toggleButton.textContent = "Hide skills";
            }
            else {
                skillsSection.style.display = 'none';
                toggleButton.textContent = "Show skills";
            }
        }
    });
}
