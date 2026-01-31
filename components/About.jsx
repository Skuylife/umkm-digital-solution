export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Kenapa Pilih Kami?
      </h2>

      <p className="max-w-3xl mx-auto text-white leading-relaxed">
        Kami membantu pelaku UMKM membangun website profesional yang
        bukan hanya terlihat menarik, tetapi juga dirancang untuk
        meningkatkan kepercayaan pelanggan dan mendukung pertumbuhan bisnis.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            Desain Profesional
          </h3>
          <p className="text-gray-600">
            Tampilan modern dan responsif yang membuat bisnis Anda
            terlihat lebih kredibel.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            Cepat & Aman
          </h3>
          <p className="text-gray-600">
            Website dioptimalkan agar cepat diakses dan aman untuk
            jangka panjang.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            Mudah Dikelola
          </h3>
          <p className="text-gray-600">
            Sistem yang mudah digunakan, cocok untuk pemilik bisnis
            tanpa latar belakang teknis.
          </p>
        </div>
      </div>
    </section>
  )
}