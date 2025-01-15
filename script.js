const menuData = {
    starters: [
        {
            name: 'Carpaccio de Filé Mignon',
            description: 'Finas fatias de filé mignon, rúcula, parmesão e azeite trufado',
            price: 'R$ 45,00'
        },
        {
            name: 'Bruschetta de Tomates Heirloom',
            description: 'Pão artesanal grelhado, tomates heirloom, manjericão fresco e azeite balsâmico',
            price: 'R$ 32,00'
        }
    ],
    mains: [
        {
            name: 'Filé Mignon ao Molho de Vinho Tinto',
            description: 'Filé mignon grelhado, servido com purê de batatas trufado e legumes grelhados',
            price: 'R$ 98,00'
        },
        {
            name: 'Risoto de Camarão com Açafrão',
            description: 'Arroz arbóreo cremoso, camarões frescos e açafrão da Índia',
            price: 'R$ 85,00'
        }
    ],
    desserts: [
        {
            name: 'Cheesecake de Frutas Vermelhas',
            description: 'Cheesecake cremoso com calda de frutas vermelhas frescas',
            price: 'R$ 28,00'
        },
        {
            name: 'Petit Gâteau com Sorvete de Baunilha',
            description: 'Bolo de chocolate derretido, acompanhado de sorvete artesanal',
            price: 'R$ 34,00'
        }
    ],
    drinks: [
        {
            name: 'Vinho Tinto Malbec',
            description: 'Mendoza, Argentina - Safra 2019',
            price: 'R$ 120,00 (taça) / R$ 280,00 (garrafa)'
        },
        {
            name: 'Caipirinha de Frutas Vermelhas',
            description: 'Cachaça artesanal, frutas vermelhas frescas e gelo',
            price: 'R$ 38,00'
        },
        {
            name: 'Caipirinha de Limão',
            description: 'Cachaça artesanal, limões frescos e gelo',
            price: 'R$ 38,00'
        },
        {
            name: 'Caipirinha de Cajú',
            description: 'Cachaça artesanal, cajús frescos e gelo',
            price: 'R$ 38,00'
        }
    ]
};

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
displayMenuSection('starters');