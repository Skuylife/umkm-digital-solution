export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Siap Membawa Bisnis Anda ke Level Selanjutnya?
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-indigo-100">
        Konsultasi gratis untuk menentukan solusi website terbaik
        sesuai kebutuhan bisnis Anda.
      </p>

      <a
        href="https://wa.me/6282286191121?text=Halo%2C%20saya%20tertarik%20membuat%20website%20untuk%20bisnis%20saya.%0AMohon%20info%20paket%20dan%20estimasi%20biayanya.%20Terima%20kasih."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
      >
        Konsultasi via WhatsApp
      </a>
    </section>
  )
}