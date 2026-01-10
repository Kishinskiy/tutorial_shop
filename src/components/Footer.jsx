import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Customer Support
          </h3>
          <ul>
            <li>
              <Link className="text-white hover:text-red-400" to="#">FAQs</Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-400" to="#">Shipping & Returns</Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-400" to="#">Order Tracking</Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-400" to="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul>
            <li>
              <Link className="text-white hover:text-red-400" to="#">Facebook</Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-400" to="#">Instagram</Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-400" to="#">Twitter</Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-400" to="#">LinkedIn</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 pt-4">
        <p>&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
