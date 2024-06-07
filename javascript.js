document.querySelectorAll('.toggle-ingredients').forEach(button => {
    button.addEventListener('click', function() {
        const recipeDetails = this.nextElementSibling;
        if (recipeDetails.style.display === 'none' || recipeDetails.style.display === '') {
            recipeDetails.style.display = 'block';
        } else {
            recipeDetails.style.display = 'none';
        }
    });
});
