export default function Pricing() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Paket Harga
        </h2>
        <p className="text-gray-600 mb-12">
          Pilih paket sesuai kebutuhan bisnis Anda
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* BASIC */}
          <div className="border rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Basic</h3>
            <p className="text-gray-500 mb-4">Cocok untuk UMKM baru</p>
            <p className="text-3xl font-bold mb-6 text-gray-700">
              Rp500rb
            </p>
            <p className="text-sm text-gray-500 mt-2">  ✔ Gratis revisi 2x</p>
            <ul className="text-gray-600 space-y-3 mb-8 text-left">
              <li>✔ Landing page 1 halaman</li>
              <li>✔ Responsive mobile</li>
              <li>✔ Tombol WhatsApp</li>
              <li>✔ Revisi 1x</li>
            </ul>
            <a
              href="https://wa.me/6282286191121"
              className="block bg-gray-900 text-white py-3 rounded-lg"
            >
              Pilih Paket
            </a>
          </div>

          {/* POPULAR */}
          <div className="border-2 border-indigo-600 rounded-xl p-8 shadow-lg">
            <span className="text-sm text-indigo-600 font-semibold">
              Paling Populer
            </span>
            <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-700">Professional</h3>
            <p className="text-gray-500 mb-4">Untuk bisnis berkembang</p>
            <p className="text-3xl font-bold mb-6 text-gray-700">
              Rp1.500.000
            </p>
            <p className="text-sm text-gray-500 mt-2">✔ Gratis revisi 2x</p>
            <ul className="text-gray-600 space-y-3 mb-8 text-left">
              <li>✔ Website hingga 5 halaman</li>
              <li>✔ Desain modern</li>
              <li>✔ SEO basic</li>
              <li>✔ Form kontak</li>
              <li>✔ Revisi 3x</li>
            </ul>
            <a
              href="https://wa.me/6282286191121"
              className="block bg-indigo-600 text-white py-3 rounded-lg"
            >
              Pilih Paket
            </a>
          </div>

          {/* PREMIUM */}
          <div className="border rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Premium</h3>
            <p className="text-gray-500 mb-4">Solusi lengkap digital</p>
            <p className="text-3xl font-bold mb-6 text-gray-700">
              Custom
            </p>
            <p className="text-sm text-gray-500 mt-2">  ✔ Gratis revisi 2x</p>
            <ul className="text-gray-800 space-y-3 mb-8 text-left">
              <li>✔ Website + dashboard admin</li>
              <li>✔ Integrasi API</li>
              <li>✔ Optimasi performa</li>
              <li>✔ Support 1 bulan</li>
            </ul>
            <a
              href="https://wa.me/6282286191121"
              className="block bg-gray-900 text-white py-3 rounded-lg"
            >
              Konsultasi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}