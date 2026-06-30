import React from "react";
import logo1 from "../assets/letslearnlogo.webp";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Footer Content */}
        <div className="flex justify-between items-start gap-20">
          {/* Left */}
          <div className="w-[300px]">
            <img src={logo1} alt="Logo" className="w-60 mb-6" />

            <p className="text-gray-300 text-lg leading-8 mb-8">
              Welcome! Explore our IT courses and find the perfect path for your
              career.
            </p>

            <div  className="flex items-center gap-3 mt-8">
              <a
                href="https://www.facebook.com/letslearn.asia"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="http://x.com/Letslearnasia"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:scale-110 duration-300"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://www.youtube.com/@letslearnasia"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center hover:scale-110 duration-300"
              >
                <FaYoutube size={18}/>
              </a>

              <a
                href="https://www.instagram.com/letslearn.asia/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#E4405F] flex items-center justify-center hover:scale-110 duration-300"
              >
                <FaInstagram size={18}/>
              </a>

              <a
                href="https://www.tiktok.com/@letslearn.asia"
                target="_blank"
                className="w-12 h-12 rounded-full bg-black border border-gray-500 flex items-center justify-center hover:scale-110 duration-300"
              >
                <FaTiktok size={18}/>
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B9779841117580&text&type=phone_number&app_absent=0"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 duration-300"
              >
                <FaWhatsapp size={18}/>
              </a>
            </div>
          </div>

          <div className="w-[200px]">
            <h2 className="text-2xl font-bold mb-6">Quick Link</h2>

            <ul className="space-y-3 text-gray-300">
              <li>Courses</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Certificate Verification</li>
              <li>Internship & Job Placement</li>
            </ul>
          </div>

          <div className="w-[300px]">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-gray-300" />
                <p className="text-gray-300">01-5923180, 9841117580</p>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-gray-300" />
                <p className="text-gray-300">info@letslearn.asia</p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-gray-300" />
                <p className="text-gray-300">
                  SRD Complex, New Plaza Road,
                  <br />
                  Kathmandu 44600
                </p>
              </div>
            </div>
          </div>

          <div className="w-[400px]">
            <h2 className="text-2xl font-bold mb-6">Subscribe Newsletter</h2>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full h-14 rounded-lg px-5 text-black bg-white border-2 outline-none"
            />

            <button className="w-full h-14 mt-4 bg-blue-700 hover:bg-sky-800 border-2 text-xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-12 pt-8">
          <p className="text-lg">Copyright © 2026 LetsLearn Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
