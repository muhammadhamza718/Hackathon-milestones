window.onload = () => {
  const skillsSection = document.getElementById('skills-section') as HTMLElement;
  if (skillsSection) {
      skillsSection.style.display = 'none';
  }
};

const toggleButton = document.getElementById('toggle-skills') as HTMLElement;
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const skillsSection = document.getElementById('skills-section') as HTMLElement;
        if (skillsSection) {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
                toggleButton.textContent = "Hide skills";
            } else {
                skillsSection.style.display = 'none';
                toggleButton.textContent = "Show skills";
            }
        }
    });
}