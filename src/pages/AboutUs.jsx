import { Users, Play, Heart, Target, Eye, Lightbulb, Handshake } from "lucide-react"
import { Link } from "react-router-dom"

// Reusable Values Card
function ValueCard({ icon, title, text }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border-l-4 border-orange-500">
      <div className="mb-2 font-semibold text-orange-700 bg-orange-50 border border-orange-400 inline-block px-2 py-1 rounded">
        {icon} {title}
      </div>
      <p className="text-sm text-gray-700 font-medium">{text}</p>
    </div>
  )
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      {/* Header */}
      <section className="container mx-auto px-4 py-16 text-center" id="about">
        <div className="mb-8">
          <span className="text-6xl mb-4 block" role="img" aria-label="lotus">🪷</span>
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16" id="our-story">
        <div className="mb-16 bg-white/80 backdrop-blur shadow-lg rounded-lg">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl" role="img" aria-label="crop">🌾</span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">Our Story</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">From Rural Struggle to Rural Startup</h3>
              <p>
                NayaVayapar was born from the soil of Bihar — co-founded by <strong>Neha Singh</strong> and <strong>Roshan Singh</strong>, a son of the land and a firm believer in grassroots entrepreneurship.
              </p>
              <p>
                What started as a response to the struggles of local farmers has become a mission-driven movement to rewrite rural India's future.
              </p>
              <p>
                We saw a system where farmers toiled endlessly but rarely received fair returns. So we decided to change that — not with charity, but with <strong>trust and technology</strong>. Today, NayaVayapar is helping farmers turn tradition into transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container mx-auto px-4 py-16" id="mission-vision-values">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">

          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500 rounded-full shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl" role="img" aria-label="target">🎯</span>
              <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mb-4">
              <p className="text-gray-800 mb-4 font-medium">To empower farmers with:</p>
              <ul className="space-y-3 text-gray-700">
                {["Direct access to markets", "Transparent, fair pricing", "A community-driven supply chain"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-800 font-medium italic text-sm">
                All while delivering authentic Makhana from Bihar's ponds to the world's plates.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500 rounded-full shadow-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl" role="img" aria-label="eye">👁️</span>
              <h2 className="text-2xl font-bold text-purple-900">Our Vision</h2>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-800 leading-relaxed font-medium">
                To become India’s{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-lg">
                  #1 rural agritech brand
                </span>{" "}
                by putting farmers at the center of every solution — and building the{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-lg">
                  first Unicorn from the fields of Bihar
                </span>.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                <div className="bg-white rounded-full px-4 py-2">
                  <span className="text-purple-600 font-bold text-sm">🦄 Unicorn Dreams</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-amber-100 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500 rounded-full shadow-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl" role="img" aria-label="bulb">💡</span>
              <h2 className="text-2xl font-bold text-orange-900">Our Values</h2>
            </div>
            <div className="space-y-4">
              <ValueCard icon="🌾" title="Farmer First" text="Always putting farmers at the heart of everything." />
              <ValueCard icon="🤝" title="No Middlemen" text="Only direct, honest, transparent deals." />
              <ValueCard icon="✨" title="Trust & Transparency" text="Every step of the way, complete openness." />
              <ValueCard icon="🇮🇳" title="Made in Bharat" text="Rooted locally, growing globally with pride." />
            </div>
          </div>

        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="container mx-auto px-4 py-16" id="behind">
        <div className="mb-16 bg-gradient-to-r from-green-100 to-emerald-100 shadow-lg rounded-lg">
          <div className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl" role="img" aria-label="clapper">🎬</span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">Behind the Scenes</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
              <p className="text-xl font-semibold text-green-700">NayaVayapar is more than a company.</p>
              <p>It’s a <strong>rural revolution</strong> — growing in ponds, fields, and haats — led by young warriors who dream of a better Bharat.</p>
              <p className="text-xl font-semibold text-green-700">We’re not just selling Makhana. We’re building a movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16" id="join">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl rounded-lg">
          <div className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Handshake className="h-8 w-8" />
              <span className="text-3xl" role="img" aria-label="handshake">🤝</span>
              <h2 className="text-3xl md:text-4xl font-bold">Join the Movement</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Link to="/team">
                <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded w-full sm:w-auto flex items-center justify-center gap-2">
                  <Users className="h-5 w-5" /> 👥 Meet the Team
                </button>
              </Link>
              <Link to="/journey">
                <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded w-full sm:w-auto flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" /> 📽️ Watch Our Journey
                </button>
              </Link>
              <Link to="/support">
                <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded w-full sm:w-auto flex items-center justify-center gap-2">
                  <Heart className="h-5 w-5" /> ❤️ Support Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16" />
    </div>
  )
}
