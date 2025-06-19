
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;

  const handleBookService = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const notes = form.notes.value;
    const booking = {
      displayName: name,
      email,
      date,
      phone,
      notes,
      service: _id,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings",{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed>0) {
            Swal.fire({
              title: "booking",
              text: "Boking successfully",
              icon: "success",
            });
          }
        })
      }
    })
  }
     
   
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Book now: <span className="text-[#FF3811]">{title}</span>
      </h1>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Preferred Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-1 text-gray-600">Additional Notes</label>
          <textarea
            className="textarea textarea-bordered w-full"
            name="notes"
            rows="4"
            placeholder="Any special instructions?"
          ></textarea>
        </div>

        <div className="mt-6">
          <input
            className="btn btn-block bg-[#FF3811] hover:bg-[#e52d04] text-white"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
}

export default CheckOut
