export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-purple-50 to-white">
      {/* <section className="relative bg-gradient-to-b from-purple-50 to-white">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-400/20 blur-3xl"></div></section> */}
      <span className="text-gray-800 font-medium mb-3">
        Solusi Digital UMKM
      </span>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
        <span className="text-indigo-600"> Website Profesional </span> <br />untuk Bisnis Anda
      </h1>

      <p className="text-gray-700 max-w-xl mb-6">
        Tingkatkan kepercayaan pelanggan dan penjualan dengan website modern,
        cepat, dan mobile-friendly.
      </p>

      <a
        href="#contact"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition"
      >
        Konsultasi Gratis
      </a>
    </section>
  )
}