import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services , setServires] = useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServires(data))
    },[])
  return (
    <div className="mt-12">
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-orange-600">Service</h1>
        <h1 className="text-5xl font-extrabold mt-4">Our Service Area</h1>
        <p className="text-[#737373] mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look e ven slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Service
