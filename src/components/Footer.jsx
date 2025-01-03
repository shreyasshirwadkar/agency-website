import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.png"

const FooterComponent = () => {
  return (
    <footer className="bg-light-black border-t border-slate-700 border-w text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="flex justify-start">
          <a href="services-section">
            <img
              src={logo}
              alt="Logo"
              className="w-14"
            />
          </a>
        </div>

        {/* Links Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg text-slate-300 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" hover:text-slate-300 text-slate-400">Services</a></li>
              <li><a href="#" className=" hover:text-slate-300 text-slate-400">Stats</a></li>
              <li><a href="#" className=" hover:text-slate-300 text-slate-400">Reviews</a></li>
              <li><a href="#" className=" hover:text-slate-300 text-slate-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-slate-300 mb-4">Credits</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/shreyas-shirwadkar/" className="text-slate-400 hover:text-slate-300">Shreyas Shirwadkar</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-600"></div>

        {/* Credits Section */}
        <div className="flex justify-between items-center text-slate-400">
          <div>
            <span>© 2025 Adlabs™</span>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-6">
            <a href="#" className="text-xl hover:text-teal-400">
              <BsFacebook />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <BsInstagram />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <BsTwitter />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <BsGithub />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
