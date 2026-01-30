export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Owner UMKM Kuliner",
      message:
        "Website saya jadi lebih profesional dan mudah diakses pelanggan. Proses pengerjaan cepat dan komunikatif.",
    },
    {
      name: "Siti Rahma",
      role: "Online Shop Fashion",
      message:
        "Desainnya modern dan mobile-friendly. Sejak pakai website, kepercayaan pelanggan meningkat.",
    },
    {
      name: "Budi Santoso",
      role: "Jasa Service Elektronik",
      message:
        "Sangat membantu bisnis saya tampil lebih rapi secara online. Responsif dan sesuai kebutuhan.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Apa Kata Klien
        </h2>
        <p className="text-gray-600 mb-12">
          Beberapa feedback dari klien yang telah bekerja sama
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-left"
            >
              <p className="text-gray-700 mb-6 italic">
                "{item.message}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}