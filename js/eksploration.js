function initProducts () {
  // ===== W A L I N K S =====
  const waLinks = {
    bungket: "https://wa.me/6285940310541?text=Halo%20Admin%20Cahaya%20Florist%2C%0ASaya%20tertarik%20dengan%20kategori%20Bungket%20Bunga.%0AMohon%20informasi%20mengenai%20pilihan%20produk%2C%20harga%2C%20dan%20cara%20pemesanannya%0ATerima%20kasih.",
    papan: "https://wa.me/6285940310541?text=Halo%20Admin%20Cahaya%20Florist%2C%0ASaya%20tertarik%20dengan%20kategori%20Karangan%20Bunga.%0AMohon%20informasi%20mengenai%20pilihan%20produk%2C%20harga%2C%20dan%20cara%20pemesanannya.%0ATerima%20kasih.",
    vas: "https://wa.me/6285940310541?text=Halo%20Admin%20Cahaya%20Florist%2C%0ASaya%20tertarik%20dengan%20kategori%20Vas%20Bunga%20Meja.%0AMohon%20informasi%20mengenai%20pilihan%20produk%2C%20harga%2C%20dan%20cara%20pemesanannya.%0ATerima%20kasih.",
    custom: "https://wa.me/6285940310541?text=Halo%20Admin%20Cahaya%20Florist%2C%0ASaya%20memiliki%20kebutuhan%20untuk%20membuat%20Rangkaian%20Bunga%20Custom.%0AApakah%20saya%20dapat%20berkonsultasi%20mengenai%20desain%2C%20harga%2C%20dan%20proses%20pemesanannya%3F%0ATerima%20kasih.",
  };

  // ===== P R O D U C T S =====
  const products = [
    {
      id: 1,
      img: "./images/flower-1.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 2,
      img: "./images/flower-2.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 3,
      img: "./images/flower-4.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 4,
      img: "./images/flower-3.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 5,
      img: "./images/board-flower-1.jpeg",
      category: "papan",
      waLink: waLinks.papan,
    },
    {
      id: 6,
      img: "./images/board-flower-4.jpeg",
      category: "papan",
      waLink: waLinks.papan,
    },
    {
      id: 7,
      img: "./images/flower-5.jpeg",
      category: "vas",
      waLink: waLinks.vas,
    },
    {
      id: 8,
      img: "./images/flower-9.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 9,
      img: "./images/flower-6.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 10,
      img: "./images/flower-7.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 11,
      img: "./images/flower-8.jpeg",
      category: "bungket",
      waLink: waLinks.bungket,
    },
    {
      id: 12,
      img: "./images/custom-flower.jpeg",
      category: "custom",
      waLink: waLinks.custom,
    },
    {
      id: 13,
      img: "./images/board-flower-7.jpeg",
      category: "papan",
      waLink: waLinks.papan,
    },
    {
      id: 14,
      img: "./images/board-flower-3.jpeg",
      category: "papan",
      waLink: waLinks.papan,
    },
    {
      id: 15,
      img: "./images/board-flower-5.jpeg",
      category: "papan",
      waLink: waLinks.papan,
    },
    {
      id: 16,
      img: "./images/board-flower-6.jpeg",
      category: "papan",
      waLink: waLinks.papan,
    },
  ];

  const grid = document.getElementById("product-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  let currentCategory = "all";

  // mapping kategori ke label indo
  const categoryLabel = {
    bungket: "Bungket Bunga",
    papan: "Karangan Bunga",
    vas: "Vas Bunga Meja",
    custom: "Custom Flower",
  };

  function renderProducts(category) {
    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `
              <div class="col-span-full text-center py-12 text-stone-400 text-sm tracking-wider">
                Tidak ada produk untuk kategori ini
              </div>
            `;
      return;
    }

    let html = "";
    filtered.forEach((p) => {
      const label = categoryLabel[p.category] || p.category;
      html += `
              <div class="product-card" data-category="${p.category}">
                <div class="img-wrap">
                  <img src="${p.img}" alt="${label}" loading="lazy" />
                  <span class="category-tag">${label}</span>
                  <a href="${p.waLink}" target="_blank" class="wa-btn">
                    <i class="fab fa-whatsapp text-sm"></i> Order
                  </a>
                </div>
              </div>
            `;
    });
    grid.innerHTML = html;
  }

  function setActiveCategory(cat) {
    filterBtns.forEach((btn) => {
      const btnCat = btn.getAttribute("data-category");
      if (btnCat === cat) {
        btn.setAttribute("data-active", "true");
      } else {
        btn.setAttribute("data-active", "false");
      }
    });
  }

  // ===== F U N C T I O N   T O   H A N D L E   E X P L O R E =====
  function handleExploreClick(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const category = link.getAttribute("data-category");

    // Set filter ke kategori yang dipilih
    currentCategory = category;
    setActiveCategory(category);
    renderProducts(category);

    // Scroll ke section katalog dengan smooth
    const katalogSection = document.getElementById("katalog");
    if (katalogSection) {
      const offset = 80; // offset untuk fixed header jika ada
      const elementPosition = katalogSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  function handleFilterClick(e) {
    const btn = e.currentTarget;
    const cat = btn.getAttribute("data-category");

    if (currentCategory === cat) {
      currentCategory = "all";
      setActiveCategory("all");
      renderProducts("all");
    } else {
      currentCategory = cat;
      setActiveCategory(cat);
      renderProducts(cat);
    }
  }

  // ===== I N I T I A L I Z A T I O N =====

  // Event listener untuk tombol Eksplorasi di section kategori
  const exploreLinks = document.querySelectorAll(".explore-link");
  exploreLinks.forEach((link) => {
    link.addEventListener("click", handleExploreClick);
  });

  // Event listener untuk filter button
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", handleFilterClick);
  });

  // Set default all active
  setActiveCategory("all");
  renderProducts("all");
};
