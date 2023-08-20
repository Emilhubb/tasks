const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((header) => {
    header.addEventListener("click", (e) => {
        e.target.classList.toggle("active");
        const accordionContent = e.target.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});
