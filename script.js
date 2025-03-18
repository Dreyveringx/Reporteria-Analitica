fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cardContainer');
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.backgroundImage = `url(${item.imagen})`;

            card.addEventListener("click", () => {
                window.open(item.url, "_blank");
            });

            const span = document.createElement('span');
            span.textContent = item.nombre;

            card.appendChild(span);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error cargando el JSON:', error));

document.getElementById("addCard").addEventListener("click", function() {
    window.location.href = "./opcion2.html";
});
