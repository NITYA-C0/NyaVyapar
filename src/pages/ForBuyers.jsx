import { Check, Phone, Mail, CalendarDays, Download, Quote } from "lucide-react";

export default function BuyersPage() {
  const products = [
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "6-Suta Premium Makhana",
      name: "6-Suta Premium Makhana",
      description: "Large Makhana, crisp texture, Sorted manually",
      moq: "50 Kg",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "Standard Makhana",
      name: "Standard Makhana",
      description: "Mid-size, Roasted",
      moq: "100 Kg",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "Masala Makhana",
      name: "Masala Makhana",
      description: "Ready-to-eat healthy snack",
      moq: "200 Packets",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "Dry Fruit Makhana Mix",
      name: "Dry Fruit Makhana Mix",
      description: "Value-added combo",
      moq: "50 Kg",
    },
  ];

  const whatYouGetItems = [
    {
      title: "Direct-from-farm pricing",
      description: "No middlemen, ensuring fair prices and maximum value.",
    },
    {
      title: "Custom packaging options",
      description: "Flexible solutions for both retail and bulk orders.",
    },
    {
      title: "Lab-tested quality",
      description: "Certified by trusted labs for purity and safety.",
    },
    {
      title: "Location-based sourcing",
      description: "Authentic Makhana from Mithila, Supaul, Darbhanga.",
    },
    {
      title: "Logistics support",
      description: "Efficient PAN-India delivery and export readiness.",
    },
  ];

  const ProductCard = ({ imageSrc, imageAlt, name, description, moq }) => (
    <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-40 w-full mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-lg w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-green-700 font-medium">MOQ: {moq}</p>
    </div>
  );

  return (
    <main className="w-full bg-gradient-to-br from-amber-50 to-white">
      {/* New For Buyers Header Section */}
      <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
            For Buyers</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From the ponds of Bihar to your godown - a direct supply chain.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-20 py-12 md:py-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-10 bg-white rounded-3xl shadow-xl border border-gray-100">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-green-800 leading-tight">
            From the ponds of Bihar to your godown –
            <br className="hidden md:block" /> with purity, consistency & trust.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            NayaVayapar works with 500+ verified farmers to deliver authentic Makhana at scale, on time, and with full
            traceability.
          </p>
        </section>

        {/* What You Get Section */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouGetItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="p-3 rounded-full bg-green-100 text-green-700 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Catalog Highlights */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Product Catalog Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* Who Buys From Us? */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Who Buys From Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Retailers & Supermarkets</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Food Processing Units</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Exporters (USA, UK, Japan)</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>D2C Brands & Online Startups</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Festive Gift Packers & Ayurveda Stores</span>
            </li>
          </ul>
        </section>

        {/* Let's Work Together */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Let's Work Together</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Proforma invoice on request</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Product samples (Paid/Free based on MOQ)</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>Packaging design & white-labelling options</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700">
              <Check className="h-6 w-6 text-green-600 shrink-0" />
              <span>B2B WhatsApp Support Line</span>
            </li>
          </ul>
        </section>

        {/* Bulk Order Helpline */}
        <section className="space-y-6 text-center bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-4xl font-bold text-gray-800">Bulk Order Helpline</h2>
          <div className="flex flex-col items-center justify-center gap-4 text-xl">
            <p className="font-semibold text-gray-700">Roshan Kumar (Senior Sales Manager)</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <p className="flex items-center gap-3 text-gray-700">
                <Phone className="h-6 w-6 text-green-600" />
                <a href="tel:8116393432" className="hover:underline font-medium">
                  8116393432
                </a>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Mail className="h-6 w-6 text-green-600" />
                <a href="mailto:support@nayavayapar.in" className="hover:underline font-medium">
                  support@nayavayapar.in
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white text-lg py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
            <Quote className="h-6 w-6" />
            Request a Quote
          </button>
          <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-green-700 border border-green-700 hover:border-green-800 text-lg py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
            <Download className="h-6 w-6" />
            Download Catalog PDF
          </button>
          <button className="flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white text-lg py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
            <CalendarDays className="h-6 w-6" />
            Schedule a Call
          </button>
        </section>

        {/* Banner */}
        <section className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/placeholder.svg?height=500&width=1500"
            alt="Lush green makhana farm with farmers working"
            className="w-full h-full object-cover brightness-[0.4] saturate-150"
          />
          <div className="bg-gray-400 absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="text-white text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl drop-shadow-lg">
              Join hands with the roots of Bharat. Source from the soil, not from the stockroom.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}