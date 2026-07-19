// ===========================
// MENU TOGGLE
// ===========================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ===========================
// SECTION KEUNGGULAN ANIMATION
// ===========================

// Pastikan DOM sudah dimuat
document.addEventListener("DOMContentLoaded", function () {
  // 1. Animasi untuk Feature Cards
  const cards = document.querySelectorAll(".feature-card");

  if (cards.length > 0) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    cards.forEach((card) => cardObserver.observe(card));
  }

  // 2. Animasi untuk Heading
  const headingContainer = document.querySelector(".heading");

  if (headingContainer) {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    headingObserver.observe(headingContainer);
  }

  // ===========================
  // HERO SECTION ANIMATION
  // ===========================

  // 3. Animasi untuk Hero Section
  const heroSection = document.querySelector(".hero-section");

  if (heroSection) {
    // Trigger initial animation when page loads
    setTimeout(() => {
      heroSection.classList.add("active");
      heroSection.classList.remove("hide");
    }, 100);

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section sedang diakses - tambahkan class active
            heroSection.classList.remove("hide");
            heroSection.classList.add("active");
          } else {
            // Section ditinggalkan - tambahkan class hide
            heroSection.classList.remove("active");
            heroSection.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    heroObserver.observe(heroSection);
  }

  // ===========================
  // KATEGORI SECTION ANIMATION
  // ===========================

  // 4. Animasi untuk Kategori Section
  const kategoriSection = document.querySelector(".kategori-section");

  if (kategoriSection) {
    const kategoriObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section sedang diakses - tambahkan class active
            kategoriSection.classList.remove("hide");
            kategoriSection.classList.add("active");
          } else {
            // Section ditinggalkan - tambahkan class hide
            kategoriSection.classList.remove("active");
            kategoriSection.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    kategoriObserver.observe(kategoriSection);
  }

  // Animasi untuk elemen Kontak (mengikuti pola yang sama dengan cards)
  const contactElements = document.querySelectorAll(".contact-trigger");

  if (contactElements.length > 0) {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    contactElements.forEach((el) => contactObserver.observe(el));
  }

  // ============================================
  // ANIMASI UNTUK ELEMEN KATALOG
  // ============================================

  // 1. Animasi untuk section header (judul, garis, dll)
  const headerElements = document.querySelectorAll(
    "#katalog .text-center .flex, #katalog .text-center h2, #katalog .text-center .h\\[1px\\]",
  );

  if (headerElements.length > 0) {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    headerElements.forEach((el) => headerObserver.observe(el));
  }

  // 2. Animasi untuk tombol filter kategori
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (filterButtons.length > 0) {
    const filterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    filterButtons.forEach((el) => filterObserver.observe(el));
  }

  // 3. Animasi untuk teks footer dan link WhatsApp
  const footerElements = document.querySelectorAll(
    "#katalog .text-center.mt-16 .text-stone-400, #katalog .text-center.mt-16 div a",
  );

  if (footerElements.length > 0) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    footerElements.forEach((el) => footerObserver.observe(el));
  }

  // 4. Animasi untuk section wrapper (opsional - efek fade untuk seluruh section)
  const sectionWrapper = document.querySelector("#katalog .max-w-7xl");

  if (sectionWrapper) {
    const wrapperObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    wrapperObserver.observe(sectionWrapper);
  }
});
