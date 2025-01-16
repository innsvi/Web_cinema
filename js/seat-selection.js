document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat.available');
    const orderButton = document.querySelector('.submit-order');

    // Отримуємо інформацію про фільм та сеанс
    const movieTitle = document.querySelector('.movie-title').innerText;
    const selectedSession = document.querySelector('.session.active').innerText;

    // Логіка вибору місць
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
    });

    // Логіка кнопки "Замовити"
    orderButton.addEventListener('click', () => {
        const selectedSeats = [...document.querySelectorAll('.seat.selected')];
        const seatDetails = selectedSeats.map(seat => {
            const row = seat.closest('.seat-row').dataset.row; // Отримуємо data-row
            const seatIndex = [...seat.parentElement.children].indexOf(seat) + 1; // Номер місця
            return { row, seat: seatIndex };
        });

        // Зберігаємо дані у Local Storage
        const ticketData = {
            movie: movieTitle,
            session: selectedSession,
            seats: seatDetails,
            total: seatDetails.length * 100 // 100 грн за квиток
        };

        localStorage.setItem('cart', JSON.stringify(ticketData));

        // Перехід на сторінку корзини
        window.location.href = 'cart.html';
    });
});
