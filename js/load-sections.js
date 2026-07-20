async function loadSection(id, file) {
    const res = await fetch(`sections/${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () => {

    await loadSection("hero-container", "hero.html");
    await loadSection("keunggulan-container", "keunggulan.html");
    await loadSection("kategori-container", "kategori.html");
    await loadSection("katalog-container", "katalog.html");
    await loadSection("testimoni-container", "testimoni.html");
    await loadSection("kontak-container", "kontak.html");

    // SEMUA SECTION SUDAH MASUK
    initProducts();
    initExplore();
});