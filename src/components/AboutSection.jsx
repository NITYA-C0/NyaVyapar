
import { motion } from "framer-motion"
import { Target, Shield, Heart } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function AboutSection() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Direct Connection",
      description: "Connect directly with verified farmers and eliminate middlemen for better prices.",
      color: "blue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every product is quality-checked and comes with our freshness guarantee.",
      color: "green",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fair Partnership",
      description: "Building sustainable relationships that benefit both farmers and businesses.",
      color: "purple",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-100 text-green-800 mb-4 px-4 py-2 rounded-full text-sm font-semibold">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Revolutionizing Farm-to-Business
            <br />
            <span className="text-green-600">Commerce</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We connect farmers directly with businesses, ensuring fresh produce, fair prices, and sustainable partnerships.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl p-6">
                <div
                  className={`w-16 h-16 bg-${item.color}-100 rounded-xl flex items-center justify-center text-${item.color}-600 mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
//   </motion.div>