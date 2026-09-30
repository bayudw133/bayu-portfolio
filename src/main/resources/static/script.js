function showProject(projectId) {

    const project = document.getElementById(projectId);

    if (project.style.display === "block") {
        project.style.display = "none";
    } else {

        document.querySelectorAll(".project-detail").forEach(function(detail) {
            detail.style.display = "none";
        });

        project.style.display = "block";

        project.scrollIntoView({
            behavior: "smooth"
        });
    }
}