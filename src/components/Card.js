
const Card = ({ restaurant }) => {
  const { name, image, cuisines, rating, deliveryTime } = restaurant;
  return (
    <div className="card-container">
      <div className="card">
        <img
          className='card-image'
          src={image}
          alt={name}
        />
        <h2>{name}</h2>
        <h3>Rating: {rating}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
}
export default Card;