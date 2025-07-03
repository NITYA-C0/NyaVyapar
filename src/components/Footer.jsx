import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const quickLinks = ["About Us", "How It Works", "Products", "Contact"];
  const products = ["Fresh Fruits", "Vegetables", "Grains", "Dairy"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Nya Vayapar</span>
                <div className="text-xs text-green-400">Farm to Business</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting farms to businesses with transparency, quality, and trust.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-400">Products</h4>
            <ul className="space-y-2 text-gray-400">
              {products.map((product) => (
                <li key={product}>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-400">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>+1 (555) 123-4567</div>
              <div>hello@nyavayapar.com</div>
              <div>
                123 Agriculture Street
                <br />
                Farm City, FC 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Nya Vayapar. All rights reserved.</p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="hover:text-green-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
