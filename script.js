fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        highlightActiveLink(); 
    });

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

function highlightActiveLink() {
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "/") {
        currentPage = "index.html"; // Ajusta según tu página de inicio
    }

    const navLinks = document.querySelectorAll("#navbar .nav-link"); // Asegurar que se buscan dentro del navbar

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}