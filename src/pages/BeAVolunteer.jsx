import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";


const BeAVolunteer = () => {
  const detailsPageData = useLoaderData()
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth()

  const { _id, thumbnail, PostTitle, description, Category, Location, OrganizerName, organizerEmail, volunteersNeeded, deadline } = detailsPageData
  const [noNeedVolunteer, setVolunteer] = useState(volunteersNeeded)

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const initialData = Object.fromEntries(formData.entries())
    const { volunteersNeeded, ...data } = initialData
    data.volunteersNeeded = parseInt(volunteersNeeded)





    axios.post('https://volunteer-management-server-gules.vercel.app/be-a-volunteer', data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Submit",
            text: "Successfully Submited",
            icon: "success"
          });
        }
      })

    axios.patch(`https://volunteer-management-server-gules.vercel.app/volunteers-needed/${_id}`)


  }



  return (
    <div>
      <Helmet>
        <title>Be a Volunteer</title>
      </Helmet>
      <header className="mb-16">
        <NavBar />
      </header>
      <main className="min-h-screen">
        <div className=" flex justify-center items-center">

          <div className="card bg-base-100  shrink-0 md:p-10 p-0 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mt-4 md:mt-0">Be a Volunteer</h2>
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
                    readOnly
                  />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Post Title</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={PostTitle}
                    name="PostTitle"
                    placeholder="PostTitle"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                    required
                    readOnly
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
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Category</span>
                  </label>
                  <select defaultValue={Category} name="Category" className="select md:w-[215px] w-72 border-2 border-[#F3F3F3] rounded-2xl">
                    <option>{Category}</option>
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
                    placeholder="Location"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                    required
                    defaultValue={Location}
                    readOnly
                  />


                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">No. of volunteers needed</span>
                  </label>
                  <input
                    type="number"
                    name="volunteersNeeded"
                    defaultValue={noNeedVolunteer}
                    placeholder="No. of volunteers needed"
                    className="input border-2 border-[#F3F3F3] rounded-2xl  [&::-webkit-inner-spin-button]:appearance-none  w-72 md:w-full"
                    required
                    readOnly
                  />


                </div>

              </div>
              <div className="mx-2">
                <label className="label">
                  <span className="label-text ">Deadline</span>
                </label>
                <input
                  name="deadline"
                  type="text"
                  defaultValue={deadline} readOnly
                  className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"


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
                    defaultValue={OrganizerName} readOnly
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
                    defaultValue={organizerEmail} readOnly
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"

                  />


                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">volunteer Name</span>
                  </label>
                  <input
                    name="volunteerName"
                    type="text"
                    defaultValue={user?.displayName} readOnly
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"


                  />


                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">volunteer Email</span>
                  </label>
                  <input
                    type="email"
                    name="volunteerEmail"
                    defaultValue={user?.email} readOnly
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"

                  />


                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Suggestion </span>
                  </label>
                  <input
                    type="text"
                    name="Suggestion"
                    placeholder="Suggestion"
                    className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                    required
                  />


                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Status</span>
                  </label>
                  <select defaultValue={'requested'} name="status" className="select md:w-[215px] w-72 border-2 border-[#F3F3F3] rounded-2xl">
                    <option>requested</option>
                  </select>


                </div>

              </div>


              <div className="form-control mt-2">
                <button
                  className={`btn rounded-lg text-white ${noNeedVolunteer === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                    }`}
                  disabled={noNeedVolunteer === 0}
                >
                  Request
                </button>
                {noNeedVolunteer === 0 && (
                  <p className="text-red-500 font-bold text-lg text-center mt-2">
                    No more volunteers are needed at this time.
                  </p>
                )}
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

export default BeAVolunteer;