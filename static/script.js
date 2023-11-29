document.addEventListener('DOMContentLoaded', function() {
    const productTable = document.getElementById('product-table');

    productTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
            if (confirmation) {
                const row = event.target.closest('tr');
                row.remove();
            }
        }
    });
});
