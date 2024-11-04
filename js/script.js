// For clickable stars in the review page
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    let selectedRating = 0; // To track the selected rating

    stars.forEach((star, index) => {
        star.addEventListener("click", function() {
            const currentRating = index + 1; 

            if (currentRating === selectedRating) {
                resetStars(); 
                selectedRating = 0; 
            } else {
                highlightStars(currentRating);
                selectedRating = currentRating;
            }
        });
    });

    // Function to highlight stars up to a certain index
    function highlightStars(rating) {
        resetStars(); 
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("selected");
            }
        });
    }

    // Function to reset (clear) all highlighted stars
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove("selected"); 
        });
    }
});

// Filtering reviews by star rating (for the show-review page)
document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.getElementById('filter-btn');
    const filterDropdown = document.getElementById('filter-reviews');
    const reviews = document.querySelectorAll('.review-item');

    filterBtn.addEventListener('click', function() {
        const selectedRating = filterDropdown.value;

        reviews.forEach(function(review) {
            const reviewRating = review.getAttribute('data-rating');

            if (selectedRating === "" || reviewRating === selectedRating) {
                review.style.display = "block"; 
            } else {
                review.style.display = "none"; 
            }
        });
    });
});
