import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            Volunteering is an important and honorable way to help others. It
            can be a great way to make a difference in the world.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Getting Helpless Childs Education
              </a>
              <p className="text-sm text-gray-400">July 5, 2023 / 0 Comments</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Inspiring Volunteers
              </a>
              <p className="text-sm text-gray-400">July 5, 2023 / 0 Comments</p>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Our Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Testimonial
              </a>
            </li>
          </ul>
        </div>

       
     
      </div>

      
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
        
          <span className="text-gray-300 font-semibold">
            Volunteer - Management
          </span>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
