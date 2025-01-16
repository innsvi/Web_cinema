document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо дані з Local Storage
    const cartData = JSON.parse(localStorage.getItem('cart'));

    if (!cartData) {
        alert('Корзина порожня.');
        window.location.href = 'index.html';
        return;
    }

    // Відображаємо назву фільму та сеанс
    document.getElementById('cart-movie-title').innerText = cartData.movie;
    document.getElementById('cart-session').innerText = `Сеанс: ${cartData.session}`;

    // Відображаємо вибрані місця
    const cartItems = document.getElementById('cart-items');
    cartData.seats.forEach(seat => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${seat.row}</td>
            <td>${seat.seat}</td>
            <td>100</td>
        `;
        cartItems.appendChild(row);
    });

    // Відображаємо загальну вартість
    document.getElementById('cart-total').innerText = cartData.total;

    // Обробник кнопки "Оплатити"
    const payButton = document.querySelector('.pay-button');
    payButton.addEventListener('click', () => {
        alert('Оплата успішна! Дякуємо за замовлення.');
        localStorage.removeItem('cart'); // Очищаємо корзину після оплати
        window.location.href = 'index.html'; // Повертаємо на головну сторінку
    });
});
