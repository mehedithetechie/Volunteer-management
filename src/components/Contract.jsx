import { FcManager } from "react-icons/fc";
import { MdMarkEmailRead, MdSubject } from "react-icons/md";

const Contact = () => {
  return (
    <section className="  my-16">
      <div className=" md:w-8/12 w-11/12 lg:w-6/12 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact <span className="text-blue-500">us</span>
        </h2>
        <p className="text-center  mb-10">
          We would love to hear from you! If you have a question or would like
          to donate to our organization, please email us at
          <span className="text-blue-500"> contact@donate.org</span>. We would
          be grateful for your help! Don’t hesitate to call us for any kind of
          questions...
        </p>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
         
          <div className="flex items-center border rounded-lg p-3 ">
            <span className=" mr-3"><FcManager /></span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full outline-none bg-transparent"
            />
          </div>

          
          <div className="flex items-center border rounded-lg p-3 ">
            <span className="  mr-3"><MdMarkEmailRead /></span>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>

         
          <div className="flex items-center border rounded-lg p-3 ">
            <span className="  mr-3"><MdSubject /></span>
            <input
              type="text"
              placeholder="Subject"
              className="w-full outline-none bg-transparent"
            />
          </div>

        
          <div className="col-span-1 md:col-span-3">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg p-3  outline-none bg-transparent"
            ></textarea>
          </div>

         
          <div className="col-span-1 md:col-span-3 flex justify-end">
            <button
              type="submit"
              className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
