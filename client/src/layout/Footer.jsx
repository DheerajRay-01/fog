const footerLinks = {
  Links: ["Home", "Shop", "About", "Contact"],
  Help: ["Payment Options", "Returns", "Privacy Policies"],
};

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-10 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">
        {/* Brand & Address */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
          <address className="not-italic text-gray-500 text-sm leading-6">
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-6">Links</h3>
          <ul className="space-y-3">
            {footerLinks.Links.map((link) => (
              <li key={link} className="text-gray-800 hover:text-yellow-600 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-6">Help</h3>
          <ul className="space-y-3">
            {footerLinks.Help.map((help) => (
              <li key={help} className="text-gray-800 hover:text-yellow-600 cursor-pointer">
                {help}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-6">Newsletter</h3>
          <form className="flex items-center border-b border-gray-400 pb-2 ">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="ml-3 font-semibold text-gray-800 hover:text-yellow-600"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <p className="text-center py-4 text-gray-600 text-sm">
          2023 Funiro. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
