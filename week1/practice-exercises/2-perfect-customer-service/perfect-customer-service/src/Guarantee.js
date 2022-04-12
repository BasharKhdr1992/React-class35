import './Guarantee.css';

const Guarantee = ({ img, title, description }) => {
  return (
    <div id="service">
      <img src={process.env.PUBLIC_URL + img} title={title} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
