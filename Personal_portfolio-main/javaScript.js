document.addEventListener('DOMContentLoaded', () => {
    const project = document.getElementById('projects');

    if (project) {
        project.addEventListener("click", projectSec);
    }

    function projectSec() {
        console.log(1);
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }
});
