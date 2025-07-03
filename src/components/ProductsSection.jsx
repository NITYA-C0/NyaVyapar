"use client";

import { motion } from "framer-motion";
import { Apple, Carrot, Wheat, Milk, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ProductsSection() {
  const products = [
    {
      category: "Fruits",
      icon: <Apple className="w-8 h-8" />,
      items: ["Apples", "Bananas", "Oranges", "Berries"],
      color: "red",
      image: "/images/fresh-fruits.jpg",
    },
    {
      category: "Vegetables",
      icon: <Carrot className="w-8 h-8" />,
      items: ["Carrots", "Tomatoes", "Onions", "Greens"],
      color: "green",
      image: "/images/vegetables.jpg",
    },
    {
      category: "Grains",
      icon: <Wheat className="w-8 h-8" />,
      items: ["Rice", "Wheat", "Barley", "Oats"],
      color: "yellow",
      image: "/images/grains.jpg",
    },
    {
      category: "Dairy",
      icon: <Milk className="w-8 h-8" />,
      items: ["Milk", "Cheese", "Butter", "Yogurt"],
      color: "blue",
      image: "/images/dairy.jpg",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-orange-100 text-orange-800 mb-4 px-4 py-2 rounded-full text-sm font-semibold">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Fresh From Farm</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of fresh, quality produce sourced directly from trusted farmers
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-xl"
            >
              {/* Product Image and Icon */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-${product.color}-600 bg-${product.color}-100`}
                  >
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Title & Items */}
              <div className="p-5">
                <h3 className="text-xl text-gray-900 font-semibold mb-4">{product.category}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
