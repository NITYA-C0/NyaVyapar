import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      company: "Green Leaf Bistro",
      content:
        "The quality of produce is exceptional, and direct farmer relationships have reduced our costs by 30%.",
      rating: 5,
      avatar: "/images/restaurant-owner.jpg",
    },
    {
      name: "Rajesh Patel",
      role: "Organic Farmer",
      company: "Patel Farms",
      content:
        "Direct access to businesses means better prices and no middlemen. I can focus on growing quality food.",
      rating: 5,
      avatar: "/images/farmer-portrait.jpg",
    },
    {
      name: "Michael Chen",
      role: "Procurement Manager",
      company: "Fresh Market",
      content:
        "The transparency and traceability is unmatched. We know exactly where our products come from.",
      rating: 5,
      avatar: "/images/business-owner.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-purple-100 text-purple-800 mb-4 px-4 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from businesses and farmers who've transformed their operations with our platform
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-base italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
