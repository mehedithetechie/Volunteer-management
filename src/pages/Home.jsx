import axios from "axios";
import { useEffect, useState } from "react";
import AscendingOrder from "../components/AscendingOrder";
import Contact from "../components/Contract";
import Featured from "../components/Featured";
import OurVolunteers from "../components/OurVolunteers";


const Home = () => {
  const [ascending, setAscending] = useState([])
  useEffect(() => {
    axios.get('https://volunteer-management-server-gules.vercel.app/need-volunteer-posts?sort=ascending')
      .then(res => setAscending(res.data))
  }, [])
  return (
    <div className="mt-20">
      <h2 className="text-center font-semibold md:text-4xl text-lg uppercase  mt-6 mb-8">upcoming deadlines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-11/12 md:w-10/12 lg:w-8/12 mx-auto mb-20">
        {
          ascending.map(card => <AscendingOrder key={card._id} card={card}></AscendingOrder>)
        }
      </div>

      <section>
        <Featured />
      </section>
      <section>
        <OurVolunteers />
      </section>
      <section>
        <Contact />
      </section>

    </div>
  );
};

export default Home;