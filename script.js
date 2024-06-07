document.addEventListener("DOMContentLoaded", function() {
    // Menampilkan pesan selamat datang saat halaman dimuat
    alert("Welcome to My Personal Page!");

    // Event listener untuk tombol "Click Me!"
    const specialButton = document.getElementById("specialButton");
    specialButton.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Thank you for visiting my page!");
    });

    // Event listener untuk tombol "Show About Me"
    const aboutMeButton = document.getElementById("aboutMeButton");
    const aboutMeSection = document.getElementById("aboutMe");

    aboutMeButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (aboutMeSection.classList.contains("hidden")) {
            aboutMeSection.classList.remove("hidden");
            aboutMeButton.textContent = "Hide About Me";
        } else {
            aboutMeSection.classList.add("hidden");
            aboutMeButton.textContent = "Show About Me";
        }
    });

    // Event listener untuk link navigasi
    document.getElementById("homeLink").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Welcome to the Home page!");
    });

    document.getElementById("aboutLink").addEventListener("click", function(event) {
        event.preventDefault();
        alert("This is the About page.");
    });

    document.getElementById("servicesLink").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Here are our services.");
    });

    document.getElementById("contactLink").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Contact us at contact@example.com.");
    });

    // Menambahkan highlight pada bagian ketika tombol diklik
    const kolomElements = document.querySelectorAll(".kolom");

    kolomElements.forEach(kolom => {
        kolom.addEventListener("click", function() {
            kolom.classList.toggle("highlight");
        });
    });
});
