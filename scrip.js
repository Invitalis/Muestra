// Función para el contador regresivo
function updateCountdown() {
    const weddingDate = new Date('2025-02-16T17:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
}

// Actualizar el contador cada minuto
updateCountdown();
setInterval(updateCountdown, 60000);

// Función para agregar al calendario
function addToCalendar() {
    const event = {
        title: 'Boda Noa & Emi',
        location: 'Jardín las Orquídeas, 6 avenida, Guatemala',
        description: 'Celebración de nuestra boda. Código de vestimenta: Formal',
        start: '2025-02-16T17:00:00',
        end: '2025-02-16T22:00:00'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}`;

    window.open(googleCalendarUrl, '_blank');
}

// Función para abrir el mapa
function openMap() {
    const address = encodeURIComponent('Jardín las Orquídeas, 6 avenida, Guatemala');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(googleMapsUrl, '_blank');
}

// Función para confirmar asistencia
function confirmAssistance() {
    const phoneNumber = '50234231245';
    const message = encodeURIComponent('¡Hola! Quiero confirmar mi asistencia a su boda.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}