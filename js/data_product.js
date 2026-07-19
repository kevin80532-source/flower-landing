  (function () {
    // Data produk (hanya foto + kategori + link WA)
    const products = [
      {
        id: 1,
        img: "./images/flower-1.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Crimson%20Elegance%20Bouquet",
      },
      {
        id: 2,
        img: "./images/flower-2.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Serene%20Pastel%20Tulip",
      },
      {
        id: 3,
        img: "./images/flower-4.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Pure%20Ivory%20Lily",
      },
      {
        id: 4,
        img: "./images/flower-3.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Premium",
      },
      {
        id: 5,
        img: "./images/board-flower-1.jpeg",
        category: "papan",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Elegan",
      },
      {
        id: 6,
        img: "./images/board-flower-4.jpeg",
        category: "papan",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Elegan",
      },
      {
        id: 7,
        img: "./images/flower-5.jpeg",
        category: "vas",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Vas%20Minimalis",
      },
      {
        id: 8,
        img: "./images/flower-9.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Premium",
      },
      {
        id: 9,
        img: "./images/flower-6.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Premium",
      },
      {
        id: 10,
        img: "./images/flower-7.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Premium",
      },
      {
        id: 11,
        img: "./images/flower-8.jpeg",
        category: "bungket",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Bunga%20Papan%20Premium",
      },
      {
        id: 12,
        img: "./images/custom-flower.jpeg",
        category: "custom",
        waLink:
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20custom%20buket%20spesial",
      },
    ];

    const grid = document.getElementById("product-grid");
    const filterBtns = document.querySelectorAll(".filter-btn");
    let currentCategory = "all";

    // mapping kategori ke label indo
    const categoryLabel = {
      bungket: "Bungket Bunga",
      papan: "Bunga Papan",
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
                Order via WA
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

    function handleFilterClick(e) {
      const btn = e.currentTarget;
      const cat = btn.getAttribute("data-category");

      // Jika kategori sama dengan yang sedang aktif (all atau sudah active), toggle ke 'all'
      if (currentCategory === cat) {
        // klik dua kali -> non-active -> tampilkan semua
        currentCategory = "all";
        setActiveCategory("all");
        renderProducts("all");
      } else {
        currentCategory = cat;
        setActiveCategory(cat);
        renderProducts(cat);
      }
    }

    // inisialisasi
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", handleFilterClick);
    });

    // set default all active
    setActiveCategory("all");
    renderProducts("all");
  })();