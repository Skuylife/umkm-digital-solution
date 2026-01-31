export default function Services() {
  return (
    <section id="services" className="py-20 text-center px-6 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl font-extrabold mb-12 text-gray-800">
        Layanan Kami
      </h2>
      <div className="w-100 h-1 bg-indigo-600 mx-auto mb-12"></div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Website UMKM",
            desc: "Website profesional untuk meningkatkan kepercayaan pelanggan."
          },
          {
            title: "Landing Page",
            desc: "Halaman promosi fokus konversi dan cepat diakses."
          },
          {
            title: "Dashboard Admin",
            desc: "Sistem internal untuk mengelola data bisnis."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-3 text-indigo-700">
              {item.title}
            </h3>
            <p className="text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}