// Product Data
const products = [
    { id: 1, name: "Traditional MackerelFish Jadi", category: "jadi", img: "https://www.image2url.com/r2/default/images/1778419839360-a8a8579e-2553-4b65-a49c-44f69d65dea5.png", link: "https://www.daraz.lk/products/i1761890476.html", desc: "100+ Year Traditional Flavor. Salted Fish.", rating: 4.8 },
    { id: 2, name: "Premium Skipjack Tuna Jadi 450g", category: "jadi", img: "https://www.image2url.com/r2/default/images/1778419936693-6e01b8e2-0e27-443d-9f9e-a3afd21bb132.png", link: "https://www.daraz.lk/products/i1761535912.html", desc: "Traditional Sri Lankan Salted Fish. Premium quality.", rating: 4.9 },
    { id: 3, name: "Traditional Southern Sarnella Jadi", category: "jadi", img: "https://www.image2url.com/r2/default/images/1778420004097-085b0334-5ff8-4ade-a518-eb6244a2d7bd.png", link: "https://www.daraz.lk/products/i1758620158.html", desc: "100% Homemade & Forgotten Southern Heritage Superfood.", rating: 4.7 },
    { id: 4, name: "Premium Deep Sea Kingfish Dry Fish 100g", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778420251521-b2684ddd-dd98-4f7f-836b-4b3c57191cfc.png", link: "https://www.daraz.lk/products/i1754646075.html", desc: "Fresh Fisherman Catch | Natural Sun Dried | High Protein.", rating: 4.9 },
    { id: 5, name: "Premium Yellowfin Tuna Dry Fish 100g", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778420323374-9ed7ccb1-671a-4bba-b2c3-45b45001a2ec.png", link: "https://www.daraz.lk/products/i1754411888.html", desc: "Deep Sea Fisherman Catch. High Protein Seafood.", rating: 5.0 },
    { id: 6, name: "Premium Deep Sea Mahi Mahi Dry Fish 100g", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778420414280-69a1a237-d5c5-4fdd-9bf7-64c4fdc5619b.png", link: "https://www.daraz.lk/products/i1754411888.html", desc: "Boat Caught Fisherman Karawala. Perfect for Curry & Fry.", rating: 4.8 },
    { id: 7, name: "Umbalakada Maldive Fish Chips 50g", category: "maldive", img: "https://www.image2url.com/r2/default/images/1778420528263-2bf65576-a12d-4842-b778-c1e42a6bbf80.png", link: "https://www.daraz.lk/products/i1754628677.html", desc: "Authentic Sri Lankan Dried Tuna Chips. High Protein Keto Friendly.", rating: 4.6 },
    { id: 8, name: "DRYBEA Maldive Fish Chips 100g", category: "maldive", img: "https://www.image2url.com/r2/default/images/1778420592463-b214d261-5230-41cf-bb47-20aeed100318.png", link: "https://www.daraz.lk/products/i1754610948.html", desc: "Premium Umbalakada Fish Flakes. Sri Lankan Pol Sambol Ingredient.", rating: 4.9 },
    { id: 9, name: "DRYBEA Maldive Fish Chips 1KG", category: "maldive", img: "https://www.image2url.com/r2/default/images/1778420696611-2ec951b4-fd2a-42ff-8053-c6508c604f7e.png", link: "https://www.daraz.lk/products/i1754413519.html", desc: "Bulk Pack Premium Dry Fish Flakes.", rating: 5.0 },
    { id: 10, name: "Deep Sea Boated Trevally Dry Fish 100g", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778420767446-4031038a-c6dd-4074-ab17-f497f3317ff9.png", link: "https://www.daraz.lk/products/i752642275.html", desc: "Paraw Karawala. No Sand, Hygienically Packed.", rating: 4.7 },
    { id: 11, name: "Ultra Premium Sailfish Maldivefish Chips", category: "maldive", img: "https://www.image2url.com/r2/default/images/1778422752705-1974ba0b-a6ac-4386-aa7c-c04ddeda79be.jpg", link: "https://www.daraz.lk/products/i751643116.html", desc: "Available in multiple weights. Ultra premium grade.", rating: 4.9 },
    { id: 12, name: "Authentic Sri Lankan Malay Pickle", category: "condiments", img: "https://www.image2url.com/r2/default/images/1778422986509-784316eb-89b4-4897-aa10-69cd8b8d0720.jpeg", link: "https://www.daraz.lk/products/i749668920.html", desc: "Premium Recipe Traditional Malay Pickle.", rating: 4.8 },
    { id: 13, name: "Shrimp with Premium Chili Paste", category: "condiments", img: "https://www.image2url.com/r2/default/images/1778423048684-2001a204-cffe-4ceb-a4be-aec923d4ce72.png", link: "https://www.daraz.lk/products/i749670887.html", desc: "Authentic Sri Lankan Seafood Condiment.", rating: 4.9 },
    { id: 14, name: "Seeni Sambol with Dried Squid", category: "condiments", img: "https://www.image2url.com/r2/default/images/1778423117325-b9c881ac-cd88-4b34-9cf1-8f8119c0bf12.jpg", link: "https://www.daraz.lk/products/i749667950.html", desc: "Traditional Sweet Onion Relish with Maldivefish. PREMIUM PRODUCT.", rating: 4.8 },
    { id: 15, name: "DRYBEA Premium Maldive Fish Sambol", category: "condiments", img: "https://www.image2url.com/r2/default/images/1778423469987-cdc55595-248c-4902-a1c9-9727bd388ecb.png", link: "https://www.daraz.lk/products/i747829224.html", desc: "Authentic Sri Lankan Ocean Flavor.", rating: 5.0 },
    { id: 16, name: "Maldivian Gold Tuna Fish Chips 1kg", category: "maldive", img: "https://www.image2url.com/r2/default/images/1778422807889-06a22794-74c2-4d23-b276-b8de5292fc75.jpg", link: "https://www.daraz.lk/products/i740296371.html", desc: "Premium Export Product.", rating: 4.9 },
    { id: 17, name: "No.1 Premium Maldive Fish Chips", category: "maldive", img: "https://www.image2url.com/r2/default/images/1778424092030-75506a61-2f23-49f6-b97f-094a6d0e463d.jpg", link: "https://www.daraz.lk/products/i167823050.html", desc: "Top Grade Balayaa Chips.", rating: 4.8 },
    { id: 18, name: "Sri Lankan Tuna Ambulthiyal", category: "condiments", img: "https://www.image2url.com/r2/default/images/1778424262444-7b9c8610-6c16-43df-ab1e-fbbbfa08dbee.png", link: "https://www.daraz.lk/products/i277658264.html", desc: "Ready to Eat Sour Fish Curry. Traditional Coastal Recipe.", rating: 4.7 },
    { id: 19, name: "Yellowfin Tuna Dryfish Vacuum Pack", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778424432838-8795aa39-155b-4372-889f-361d2d0d461f.jpg", link: "https://www.daraz.lk/products/i277672016.html", desc: "Karawala kelawalla. Hygienic vacuum pack.", rating: 4.9 },
    { id: 20, name: "Premium Dry King Fish Chunks", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778424646274-e5726056-91c2-47dc-8ab0-919803b6c71d.jpg", link: "https://www.daraz.lk/products/i277658232.html", desc: "Low Sodium, Gluten-Free, Single Pack.", rating: 4.8 },
    { id: 21, name: "Dried Mahi Mahi Fish Vacuum Pack", category: "dryfish", img: "https://www.image2url.com/r2/default/images/1778424715547-085d3c3b-9603-4de7-b714-ae9c1f4022b8.jpg", link: "https://www.daraz.lk/products/i277644577.html", desc: "Wanna boat karawala. Premium quality.", rating: 4.9 }
];

// Translations
const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navProducts: "Products", navRecipes: "Recipes", navGallery: "Video Gallery", navShop: "Daraz Shop", navBlog: "Blog", navContact: "Contact",
        heroTitle: "Welcome to DRYBEA MARKET",
        heroSub: "Your trusted destination for premium seafood, dried fish, gourmet seafood products, and healthy daily essentials. We bring the freshness of the ocean with quality, hygiene, and modern convenience for every family.",
        heroSlogan: "Easy Shopping for Healthy Life",
        btnShopNow: "Shop Now on Daraz.lk",
        featuredProducts: "Featured Premium Products",
        viewAll: "View All Products",
        aboutStoryTitle: "The Story of DRYBEA MARKET",
        aboutStory1: "Rooted in Sri Lankan traditional seafood heritage, DRYBEA MARKET was established to bring the authentic, forgotten flavors of the Southern coast to the modern world.",
        aboutStory2: "Our commitment to quality and hygiene is unparalleled. We source directly from deep-sea fishermen and employ natural sun-drying techniques.",
        aboutPoint1: "Sustainable Seafood Sourcing", aboutPoint2: "100% Homemade & Authentic Recipes", aboutPoint3: "Export Quality Hygiene Standards",
        darazTitle: "Official Daraz Store",
        gallerySub: "Watch our latest product showcases and traditional preparation methods."
    },
    si: {
        navHome: "මුල් පිටුව", navAbout: "අප ගැන", navProducts: "නිෂ්පාදන", navRecipes: "වට්ටෝරු", navGallery: "වීඩියෝ", navShop: "Daraz සාප්පුව", navBlog: "බ්ලොග්", navContact: "සම්බන්ධ වන්න",
        heroTitle: "DRYBEA MARKET වෙත සාදරයෙන් පිළිගනිමු",
        heroSub: "උසස් තත්ත්වයේ මුහුදු ආහාර, කරවල, රසවත් seafood නිෂ්පාදන සහ සෞඛ්‍ය සම්පන්න දෛනික ආහාර සඳහා ඔබගේ විශ්වාසවන්ත වෙළඳපොළ.",
        heroSlogan: "පහසු මිලදී ගැනීමක් — සෞඛ්‍යවත් ජීවිතයක් සඳහා",
        btnShopNow: "Daraz.lk වෙතින් මිලදී ගන්න",
        featuredProducts: "විශේෂිත නිෂ්පාදන",
        viewAll: "සියලුම නිෂ්පාදන බලන්න",
        aboutStoryTitle: "DRYBEA MARKET කතාව",
        aboutStory1: "ශ්‍රී ලාංකික සාම්ප්‍රදායික මුහුදු ආහාර උරුමයන් මත පදනම්ව, දකුණු වෙරළේ අමතක වූ අව්‍යාජ රසයන් නවීන ලෝකයට ගෙන ඒම සඳහා පිහිටුවා ඇත.",
        aboutStory2: "අපගේ ගුණාත්මකභාවය සහ සනීපාරක්ෂාව අසමසමයි. අපි ගැඹුරු මුහුදු ධීවරයින්ගෙන් සෘජුවම ලබාගෙන ස්වාභාවික හිරු එළියෙන් වියළීමේ ක්‍රම භාවිතා කරමු.",
        aboutPoint1: "තිරසාර මුහුදු ආහාර ලබා ගැනීම", aboutPoint2: "100% ගෙදර හැදූ අව්‍යාජ වට්ටෝරු", aboutPoint3: "අපනයන තත්ත්වයේ සනීපාරක්ෂක ප්‍රමිතීන්",
        darazTitle: "නිල Daraz වෙළඳසැල",
        gallerySub: "අපගේ නවතම නිෂ්පාදන සහ සම්ප්‍රදායික සැකසුම් ක්‍රම නරඹන්න."
    },
    ta: {
        navHome: "முகப்பு", navAbout: "எங்களை பற்றி", navProducts: "தயாரிப்புகள்", navRecipes: "சமையல் குறிப்புகள்", navGallery: "வீடியோக்கள்", navShop: "Daraz கடை", navBlog: "வலைப்பதிவு", navContact: "தொடர்புக்கு",
        heroTitle: "DRYBEA MARKET-க்கு வரவேற்கிறோம்",
        heroSub: "உயர்தர கடல் உணவுகள், உலர் மீன்கள், சிறப்பு seafood தயாரிப்புகள் மற்றும் ஆரோக்கியமான தினசரி உணவுகளுக்கான உங்கள் நம்பிக்கையான சந்தை.",
        heroSlogan: "ஆரோக்கியமான வாழ்க்கைக்கு எளிய வாங்குதல்",
        btnShopNow: "Daraz.lk இல் வாங்கவும்",
        featuredProducts: "சிறப்பு தயாரிப்புகள்",
        viewAll: "அனைத்து தயாரிப்புகளையும் காண்க",
        aboutStoryTitle: "DRYBEA MARKET கதை",
        aboutStory1: "இலங்கை பாரம்பரிய கடல் உணவு பாரம்பரியத்தில் வேரூன்றிய DRYBEA MARKET தெற்கின் உண்மையான சுவைகளை நவீன உலகிற்கு கொண்டு வருவதற்காக நிறுவப்பட்டது.",
        aboutStory2: "தரம் மற்றும் சுகாதாரத்திற்கான எங்கள் அர்ப்பணிப்பு இணையற்றது. ஆழ்கடல் மீனவர்களிடமிருந்து நேரடியாக பெறுகிறோம்.",
        aboutPoint1: "நிலையான கடல் உணவு ஆதாரம்", aboutPoint2: "100% வீட்டில் செய்யப்பட்ட உண்மையான சமையல்", aboutPoint3: "ஏற்றுமதி தர சுகாதார தரநிலைகள்",
        darazTitle: "அதிகாரப்பூர்வ Daraz கடை",
        gallerySub: "எங்கள் சமீபத்திய தயாரிப்புகள் மற்றும் பாரம்பரிய தயாரிப்பு முறைகளைப் பாருங்கள்."
    }
};

// Helper: Generate product HTML
function generateProductHTML(product) {
    const stars = Array(5).fill(0).map((_, i) =>
        `<i class="${i < Math.floor(product.rating) ? 'fas' : (i < product.rating ? 'fas fa-star-half-alt' : 'far')} fa-star"></i>`
    ).join('');
    return `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <div class="product-category">${product.category.toUpperCase()}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="rating">${stars} ${product.rating}/5.0</div>
                <a href="${product.link}" target="_blank" class="daraz-btn"><i class="fas fa-shopping-cart"></i> Buy on Daraz.lk</a>
            </div>
        </div>
    `;
}

// Render products with filter and search
function renderProducts(filter = 'all', searchQuery = '') {
    const grid = document.getElementById('main-product-grid');
    if (!grid) return;
    let filtered = [...products];
    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
    }
    grid.innerHTML = filtered.map(generateProductHTML).join('');
}

function filterProducts() {
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    const query = document.getElementById('searchInput')?.value || '';
    renderProducts(activeFilter, query);
}

// Language switcher
function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((lang === 'en' && btn.textContent === 'EN') ||
            (lang === 'si' && btn.textContent === 'සිං') ||
            (lang === 'ta' && btn.textContent === 'தமிழ்')) {
            btn.classList.add('active');
        }
    });
}

// Chatbot
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const quickReplies = document.getElementById('quickReplies');
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${sender}`;
    msgDiv.textContent = text;
    chatMessages.insertBefore(msgDiv, quickReplies);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
    const text = input.toLowerCase();
    if (text.includes('product') || text.includes('buy') || text.includes('show')) {
        return "You can view all our premium seafood in the 'Products' section or buy directly from our Daraz shop: https://www.daraz.lk/shop/drybea-market-";
    } else if (text.includes('order') || text.includes('delivery')) {
        return "We deliver island-wide via Daraz.lk! For bulk orders, please contact us on WhatsApp: +94711171172";
    } else if (text.includes('hello') || text.includes('hi')) {
        return "Hello! How can I assist you with DRYBEA MARKET products today?";
    } else {
        return "Thank you for reaching out! For specific inquiries, please contact our hotline at +94 76 243 2963 or message us on WhatsApp.";
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    const quickReplies = document.getElementById('quickReplies');
    if (quickReplies) quickReplies.style.display = 'none';
    setTimeout(() => {
        addMessage(getBotResponse(text), 'bot');
    }, 600);
}

function sendQuickReply(text) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value = text;
    sendMessage();
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    // Render all products
    renderProducts();

    // Render featured (first 4)
    const featuredGrid = document.getElementById('featured-products');
    if (featuredGrid) featuredGrid.innerHTML = products.slice(0, 4).map(generateProductHTML).join('');

    // Render Daraz bestsellers (random 4)
    const darazGrid = document.getElementById('daraz-bestsellers-grid');
    if (darazGrid) {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        darazGrid.innerHTML = shuffled.slice(0, 4).map(generateProductHTML).join('');
    }

    // Navigation and mobile menu
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const mobileMenu = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                e.preventDefault();
                document.querySelectorAll('.navbar .nav-link').forEach(n => n.classList.remove('active'));
                if (link.closest('.navbar')) link.classList.add('active');
                sections.forEach(s => s.classList.remove('active'));
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.classList.add('active');
                if (mobileMenu) mobileMenu.classList.remove('show');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => mobileMenu.classList.toggle('show'));
    }

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.getAttribute('data-filter'), document.getElementById('searchInput')?.value || '');
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterProducts);
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = btn.textContent.trim() === 'EN' ? 'en' : (btn.textContent.trim() === 'සිං' ? 'si' : 'ta');
            setLanguage(lang);
        });
    });

    // Chat widget
    const openChatBtn = document.getElementById('openChatBtn');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatBox = document.getElementById('chatBox');
    if (openChatBtn && closeChatBtn && chatBox) {
        openChatBtn.addEventListener('click', () => chatBox.classList.toggle('show'));
        closeChatBtn.addEventListener('click', () => chatBox.classList.remove('show'));
    }

    const sendBtn = document.querySelector('#chatBox button');
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    const chatInputField = document.getElementById('chatInput');
    if (chatInputField) {
        chatInputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Newsletter subscribe
    const subscribeBtn = document.querySelector('.footer-grid .btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => alert('Subscribed!'));
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Quick reply buttons (delegation)
    const quickRepliesContainer = document.getElementById('quickReplies');
    if (quickRepliesContainer) {
        quickRepliesContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                sendQuickReply(e.target.textContent);
            }
        });
    }
});