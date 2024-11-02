function submitOrder() {
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-product').innerText = product;
    document.getElementById('popup-quantity').innerText = quantity;

    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showMore() {
    const hiddenRows = document.querySelectorAll('.hidden');
    hiddenRows.forEach(row => {
        row.classList.remove('hidden');
    });
    document.getElementById('showMore').style.display = 'none';
    document.getElementById('hideMore').style.display = 'block'; 
}

function hideMore() {
    const allRows = document.querySelectorAll('#shoeTable tbody tr');
    allRows.forEach(row => {
        if (row.classList.contains('hidden')) {
            return; 
        }
        row.classList.add('hidden');
    });
    document.getElementById('hideMore').style.display = 'none'; 
    document.getElementById('showMore').style.display = 'block'; 
}