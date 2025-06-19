import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const {_id,title,img,price} = service
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={img} alt="missing" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-orange-600 font-semibold text-2xl">
          Price: ${price}
        </p>
        <div>
          <Link className="btn" to={`/checkout/${service._id}`}>Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard
