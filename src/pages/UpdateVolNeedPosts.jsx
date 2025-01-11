import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const UpdateVolNeedPosts = () => {
  const { user } = useAuth()
  const [startDate, setStartDate] = useState(new Date());
  const needPost = useLoaderData()
  const { _id, thumbnail, PostTitle, description, Category, Location, OrganizerName, organizerEmail, volunteersNeeded, deadline } = needPost


  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const initialData = Object.fromEntries(formData.entries())
    const { volunteersNeeded, ...data } = initialData
    data.volunteersNeeded = parseInt(volunteersNeeded)
    const deadline = startDate.toISOString().split('T')[0]
    data.deadline = deadline



    axios.put(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts/${_id}`, data)
      .then(res => {

        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Need Vol Post Update",
            text: "Successfully Updated",
            icon: "success"
          });
        }
      })
  }
  return (
    <div >
      <Helmet>
        <title>Update My Post</title>
      </Helmet>
      <header className="mb-16">
        <NavBar />
      </header>



      <main>
        <div className=" flex justify-center items-center">

          <div className="card bg-base-100  shrink-0 md:p-10 p-0 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mt-4 md:mt-0">volunteer need Post Update</h2>
            <form onSubmit={handleSubmit} className="card-body  space-y-2">

              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Thumbnail</span>
                  </label>
                  <input
                    type="text"
                    name="thumbnail"
                    defaultValue={thumbnail}
                    placeholder="thumbnail"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full "
                    required
                  />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Post Title</span>
                  </label>
                  <input
                    type="text"
                    name="PostTitle"
                    defaultValue={PostTitle}
                    placeholder="PostTitle"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="description"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Category</span>
                  </label>
                  <select defaultValue={Category} name="Category" className="select md:w-[215px] w-72 border-2 border-[#F3F3F3] rounded-2xl">
                    <option disabled >Category </option>
                    <option value={'healthcare'}>healthcare</option>
                    <option value={'education'}>education</option>
                    <option value={'social service'}>social service</option>
                    <option value={'animal welfare'}>animal welfare</option>
                  </select>


                </div>

              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Location</span>
                  </label>
                  <input
                    type="text"
                    name="Location"
                    defaultValue={Location}
                    placeholder="Location"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                    required
                  />


                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">No. of volunteers needed</span>
                  </label>
                  <input
                    type="number"
                    name="volunteersNeeded"
                    defaultValue={volunteersNeeded}
                    placeholder="No. of volunteers needed"
                    className="input border-2 border-[#F3F3F3] rounded-2xl  [&::-webkit-inner-spin-button]:appearance-none  w-72 md:w-full"
                    required
                  />


                </div>

              </div>
              <div className="mx-2">
                <label className="label">
                  <span className="label-text ">Deadline</span>
                </label>
                <DatePicker className=" border-blue-600 border-2 px-4 rounded-xl py-3 w-full md:w-[430px]" selected={deadline}
                  dateFormat="yyyy/MM/dd"
                  onChange={(date) => setStartDate(date)}


                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Organizer Name</span>
                  </label>
                  <input
                    name="OrganizerName"
                    type="text"
                    defaultValue={user?.displayName} readOnly
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"

                  />


                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Organizer Email</span>
                  </label>
                  <input
                    type="email"
                    name="organizerEmail"
                    defaultValue={user?.email} readOnly
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"

                  />


                </div>
              </div>



              <div className="form-control mt-2">
                <button className="btn bg-blue-500 rounded-lg text-white">Update Posts</button>
              </div>
            </form>

          </div>
        </div>

      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UpdateVolNeedPosts;