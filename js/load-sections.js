async function loadSection(id, file) {
    try {
        const res = await fetch(`sections/${file}`);

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const html = await res.text();
        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error(`Gagal memuat ${file}:`, err);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadSection("hero-container", "hero.html");
    loadSection("keunggulan-container", "keunggulan.html");
    loadSection("kategori-container", "kategori.html");
    loadSection("katalog-container", "katalog.html");
    loadSection("testimoni-container", "testimoni.html");
    loadSection("kontak-container", "kontak.html");
});