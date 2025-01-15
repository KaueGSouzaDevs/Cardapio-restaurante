import { menuData } from "./menuData.js";

function displayMenuSection(section) {
    const menuContainer = document.getElementById('menuItems');
    const items = menuData[section];
    
    menuContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="d-flex justify-content-between align-items-baseline">
                <h3 class="h5 mb-1">${item.name}</h3>
                <span class="text-warning">${item.price}</span>
            </div>
            <p class="description mb-0">${item.description}</p>
        </div>
    `).join('');
}

// Event listeners for menu navigation
document.querySelectorAll('[data-section]').forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        document.querySelectorAll('[data-section]').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Display the selected menu section
        displayMenuSection(e.target.dataset.section);
    });
});

// Display starters section by default
displayMenuSection('entrada');