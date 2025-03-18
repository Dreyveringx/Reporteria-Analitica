document.addEventListener("DOMContentLoaded", async () => {
    const categoriesContainer = document.getElementById("categoriesContainer");

    try {
        const response = await fetch("data2.json");
        const categories = await response.json();

        categories.forEach(category => {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("category");

            const categoryTitle = document.createElement("h2");
            categoryTitle.classList.add("category-title");
            categoryTitle.textContent = category.category;
            categoryDiv.appendChild(categoryTitle);

            const cardContainer = document.createElement("div");
            cardContainer.classList.add("category-container");

            category.items.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.backgroundImage = `url('${item.image}')`;

                
                card.addEventListener("click", () => {
                    window.open(item.url, "_blank"); 
                    
                });

                const span = document.createElement("span");
                span.textContent = item.name;

                card.appendChild(span);
                cardContainer.appendChild(card);
            });

            categoryDiv.appendChild(cardContainer);
            categoriesContainer.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
});

document.getElementById("addCard").addEventListener("click", function() {
    window.location.href = "./index.html";
});
