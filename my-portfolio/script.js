document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const overlay = document.getElementById("overlay");
    const expandedImage = document.getElementById("expanded-image");

    galleryImages.forEach(function(image) {
        image.addEventListener("click", function() {
            // Display overlay
            overlay.style.display = "block";
            // Display clicked image in the overlay
            expandedImage.src = this.src;
        });
    });

    // Close overlay when clicking outside the image
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });
});
