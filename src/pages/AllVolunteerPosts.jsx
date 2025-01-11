import NavBar from "../components/NavBar";
import VolunteerCard from "../components/VolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";


const AllVolunteerPosts = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')


  useEffect(() => {
    axios.get(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts?search=${search}`)
      .then(res => setData(res.data))
  }, [search])

  useEffect(() => {

    if (sort === 'volunteer') {
      axios.get(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts?volunteer=sortbyvolunteer`)
        .then(res => setData(res.data))
    }

    if (sort === 'DeadLine') {
      axios.get(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts?deadline=sortbydeadline`)
        .then(res => setData(res.data))
    }

    if (sort === 'sort') {
      axios.get(`https://volunteer-management-server-gules.vercel.app/need-volunteer-posts`)
        .then(res => setData(res.data))
    }
  }, [sort])


  return (
    <div>
      <Helmet>
        <title>Need VolunteerPost</title>
      </Helmet>
      <header className="mb-28">
        <NavBar />
      </header>
      <section className="flex justify-center gap-2 md:my-4 mt-10 px-4">
        <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered rounded-none w-full max-w-xs" />
        <select defaultValue="sort" onChange={(e) => setSort(e.target.value)} className="select select-bordered rounded-none w-28 bg-blue-500 text-white">
          <option value="sort">sort by</option>
          <option value="volunteer">volunteer needed</option>
          <option value="DeadLine">DeadLine</option>
        </select>
      </section>
      <main className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 w-11/12 mx-auto mt-10 mb-16 min-h-[calc(100vh-550px)]">
        {
          data.map(post => <VolunteerCard key={post._id} post={post}></VolunteerCard>)
        }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AllVolunteerPosts;