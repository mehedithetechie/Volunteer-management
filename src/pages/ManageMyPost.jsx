import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { MdCancel, MdDeleteSweep } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';


const ManageMyPost = () => {
  const { user } = useAuth()
  const [myPosts, setPosts] = useState([])
  const [requested, setRequseted] = useState([])


  useEffect(() => {
    axios.get(`https://volunteer-management-server-gules.vercel.app/need-volunteer-my-post?email=${user.email}`, {
      withCredentials: true
    })
      .then(res => setPosts(res.data))

    axios.get(`https://volunteer-management-server-gules.vercel.app/be-a-volunteer?email=${user.email}`, {
      withCredentials: true
    })
      .then(res => setRequseted(res.data))
  }, [user.email])

  const handleRequestDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "Cancel The Request",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel Request"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://volunteer-management-server-gules.vercel.app/be-a-volunteer/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingRequest = requested.filter(request => request._id !== id)
              setRequseted(remainingRequest)
            }
          })
      }
    });
  }

  const handleNeedVolPostsDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete Request",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingPosts = myPosts.filter(posts => posts._id !== id)
              setPosts(remainingPosts)
            }
          })
      }
    });
  }
  return (
    <div>
      <Helmet>
        <title>Manage My Profile</title>
      </Helmet>
      <header className='mb-28'>
        <NavBar />
      </header>
      <main className='min-h-screen'>
        <div>
          <h2 className='xl:text-3xl text-lg lg:text-xl font-bold bg-blue-500 text-white xl:px-10 px-4 py-2 xl:w-6/12 w-11/12 mx-auto text-center  mt-6 md:mb-10 mb-2 '>My Volunteer Needed Post</h2>
          <div className="overflow-x-auto xl:w-6/12 w-11/12 mx-auto">
            <table className="table">


              <tbody>

                {
                  myPosts.length > 0 ? myPosts.map(post => <tr className='flex justify-between items-center' key={post._id}>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={post.thumbnail}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{post.PostTitle}</div>
                          <div className="text-sm opacity-50">{post.Location}</div>
                        </div>
                      </div>
                    </td>
                    <td className='md::block hidden'>
                      <p>volunteersNeeded: <span className='font-bold text-blue-500'>{post.volunteersNeeded}</span></p>
                    </td>
                    <td className=' hidden md::block'>
                      <div className='flex items-center'>
                        {post.Category}

                        <span className="badge badge-ghost badge-sm">{post.deadline}</span>
                      </div>
                    </td>


                    <th>
                      <div className='flex items-center '>
                        <Link to={`/update-need-volunteers-posts/${post._id}`} className="tooltip-left tooltip" data-tip="update"><button className='bg-blue-500 px-4 py-1 text-white mr-4'>Update</button></Link>
                        <button onClick={() => handleNeedVolPostsDelete(post._id)} className=" tooltip tooltip-left text-3xl " data-tip="Delete Post"><MdDeleteSweep /></button>
                      </div>
                    </th>
                  </tr>) : <div className="text-center py-8">
                    <p className="text-2xl font-bold text-gray-600">You have no volunteer Need Posts</p>
                  </div>
                }

              </tbody>

            </table>
          </div>
        </div>

        <div className='mt-16  lg:mt-32 mb-20'>
          <h2 className='xl:text-3xl text-lg lg:text-xl font-bold bg-blue-500 text-white xl:px-10 px-4 py-2 xl:w-6/12 w-11/12 mx-auto text-center  mt-6 md:mb-10 mb-2 '>My Volunteer Request Post</h2>
          <div className="overflow-x-auto xl:w-6/12 w-11/12 mx-auto">
            <table className="table">


              <tbody>
                {/* row 1 */}

                {

                  requested.length > 0 ? requested.map(requestVol => <tr className='flex justify-between items-center' key={requestVol._id}>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={requestVol.thumbnail}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{requestVol.PostTitle}</div>
                          <div className="text-sm opacity-50">{requestVol.Location}</div>
                        </div>
                      </div>
                    </td>

                    <td className='flex flex-col items-center '>
                      <div className='hidden md:block'>
                        {requestVol.Category}

                        <span className="badge badge-ghost badge-sm">{requestVol.deadline}</span>
                      </div>
                    </td>


                    <th >
                      <button onClick={() => handleRequestDelete(requestVol._id)} className="btn btn-ghost tooltip tooltip-left text-3xl " data-tip="Cancel Request"><MdCancel /></button>
                    </th>
                  </tr>) : <div className="text-center py-8">
                    <p className="text-lg text-gray-600">You have no volunteer requests.</p>
                    <p className="text-gray-500">Add a new request from the “Be a Volunteer” page</p>
                  </div>
                }

              </tbody>

            </table>
          </div>
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ManageMyPost;