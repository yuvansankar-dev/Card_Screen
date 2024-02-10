import "./Card.css";
const Card = ({ plan }) => {
  return (
    <>
      <div className='card text-center mb-3 borderContainer'>
        <div className='card-body'>
          <h6 className='type-title'>{plan.type}</h6>
          <h1 className='card-title'>{"$" + `${plan.cost}/month`}</h1>
          <hr></hr>
          <ul className='listPart'>
            {plan.applicableFeatures.map((features) => {
              return (
                <li
                  key={features}
                  // style={{ width: "100%", marginBottom: "6px" }}
                >
                  <i className='fa-solid fa-check feature icon'></i>
                  {features}
                </li>
              );
            })}
            {plan.nonApplicableFeatures.map((features) => {
              return (
                <li key={features} className='disableText'>
                  <i className='fa-solid fa-xmark feature icon'></i>
                  {features}
                </li>
              );
            })}
          </ul>
          <button className='btn btn-primary button' type='button'>
            Button
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
