# Portfolio Moga Taufiq - Setup Instructions

## 📁 Struktur Folder Final

```bash
moga-taufiq-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── public/
│   └── (gambar dan asset statis)
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── README.md
```

## 🚀 Cara Setup

### 1. Inisialisasi Proyek Astro

```bash
# Buat proyek baru
npm create astro@latest moga-taufiq-portfolio

# Pilih template "Just the basics"
# Pilih TypeScript: No (opsional)
# Pilih strict TypeScript: No
# Install dependencies: Yes
# Initialize git repository: Yes

cd moga-taufiq-portfolio
```

### 2. Install Dependencies

```bash
# Install Tailwind CSS integration
npx astro add tailwind

# Atau install manual
npm install @astrojs/tailwind tailwindcss
```

### 3. Copy File-file

-   Salin semua file component yang sudah dibuat ke folder yang sesuai
-   Replace file `astro.config.mjs`, `package.json`, dan `tailwind.config.mjs`
-   Pastikan struktur folder sesuai dengan yang diinginkan

### 4. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:4321`

## 🛠️ Commands yang Tersedia

```bash
# Development
npm run dev          # Start development server
npm run start        # Alias untuk dev

# Production
npm run build        # Build untuk production
npm run preview      # Preview build production

# Utility
npm run astro        # Run Astro CLI commands
```

## 📝 Customization Tips

### 1. Mengganti Gambar

-   Letakkan gambar di folder `public/`
-   Update path gambar di komponen terkait
-   Contoh: `public/profile.jpg` → `src="/profile.jpg"`

### 2. Menambah Proyek Baru

Edit file `src/components/Projects.astro`:

```javascript
const projects = [
    // Tambah objek proyek baru di sini
    {
        title: "Nama Proyek",
        description: "Deskripsi proyek...",
        image: "/path/to/image.jpg",
        technologies: [
            { name: "Tech1", color: "blue" },
            { name: "Tech2", color: "green" },
        ],
    },
];
```

### 3. Update Informasi Kontak

Edit file `src/components/Contact.astro` dan `src/components/Footer.astro`

### 4. Styling Kustom

-   Global styles: tambahkan di `src/layouts/Layout.astro` dalam tag `<style is:global>`
-   Component styles: tambahkan di masing-masing file component
-   Tailwind classes: sudah dikonfigurasi dan siap pakai

## 🎨 Fitur yang Sudah Diimplementasi

-   ✅ Responsive design (mobile-first)
-   ✅ Dark theme dengan warna konsisten
-   ✅ Smooth scroll navigation
-   ✅ Mobile menu toggle
-   ✅ Hover effects dan transitions
-   ✅ Component-based architecture
-   ✅ SEO-friendly structure
-   ✅ Fast loading dengan Astro

## 🔧 Troubleshooting

### Jika Tailwind tidak bekerja:

```bash
# Re-install Tailwind integration
npx astro add tailwind --force
```

### Jika ada error TypeScript:

-   Pastikan menggunakan file `.astro` bukan `.ts`
-   Check import paths sudah benar

### Jika mobile menu tidak berfungsi:

-   Pastikan JavaScript di `Header.astro` ter-load dengan benar
-   Check console browser untuk error

## 📚 Resources

-   [Astro Documentation](https://docs.astro.build)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Astro + Tailwind Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

---

**Happy coding! 🚀**
