import { TiSocialFacebook, TiSocialGooglePlus } from "react-icons/ti";
import team1 from "../assets/team-1.jpg"
import team2 from "../assets/team-2.jpg"
import team3 from "../assets/team-3.jpg"
import team4 from "../assets/team-4.jpg"
import { FaTwitter } from "react-icons/fa6";

const OurVolunteers = () => {
  return (
    <section className="my-20 md:w-10/12 w-11/12 lg:w-8/12 mx-auto">
      <div>
        <h2 className="text-3xl font-bold  mb-10">
          Our group of <span className="text-blue-600">volunteers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         
          <div className="border rounded-lg p-4 text-center shadow-md ">
            <img
              src={team1}
              alt="Jonathan Doe"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Jonathan Doe</h3>
            <p className="text-sm">
              <strong></strong> +49 123 456 789
            </p>
            <p className="text-sm">
              <strong></strong> johndoe@email.com
            </p>
            <div className="flex justify-center mt-2 space-x-3 text-gray-500">
              <a href="#" className="hover:text-blue-500">
                <TiSocialFacebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <TiSocialGooglePlus />
              </a>
             
            </div>
          </div>

         
          <div className="border rounded-lg p-4 text-center shadow-md ">
            <img
              src={team2}
              alt="George Bell"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">George Bell</h3>
            <p className="text-sm">
              <strong></strong> +49 123 456 789
            </p>
            <p className="text-sm">
              <strong></strong> johndoe@email.com
            </p>
            <div className="flex justify-center mt-2 space-x-3 text-gray-500">
              <a href="#" className="hover:text-blue-500">
                <TiSocialFacebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <TiSocialGooglePlus />
              </a>
            
            </div>
          </div>

         
          <div className="border rounded-lg p-4 text-center shadow-md ">
            <img
              src={team3}
              alt="Laura Fenty"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Laura Fenty</h3>
            <p className="text-sm">
              <strong></strong> +49 123 456 789
            </p>
            <p className="text-sm">
              <strong></strong> johndoe@email.com
            </p>
            <div className="flex justify-center mt-2 space-x-3 text-gray-500">
              <a href="#" className="hover:text-blue-500">
                <TiSocialFacebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <TiSocialGooglePlus />
              </a>

            </div>
          </div>

         
          <div className="border rounded-lg p-4 text-center shadow-md ">
            <img
              src={team4}
              alt="Cameron Poll"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Cameron Poll</h3>
            <p className="text-sm">
              <strong></strong> +49 123 456 789
            </p>
            <p className="text-sm">
              <strong></strong> johndoe@email.com
            </p>
            <div className="flex justify-center mt-2 space-x-3 text-gray-500">
              <a href="#" className="hover:text-blue-500">
                <TiSocialFacebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <TiSocialGooglePlus />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVolunteers;
