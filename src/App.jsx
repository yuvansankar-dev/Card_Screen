import "./App.css";
import Card from "./card/Card";
import planInfo from "./Data/cardData";

function App() {
  return (
    <>
      <div className='main-container'>
        {planInfo.map((plan, inx) => (
          <Card key={inx} plan={plan} />
        ))}
      </div>
    </>
  );
}

export default App;
