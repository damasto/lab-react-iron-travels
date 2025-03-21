import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    return (
        <>
            {travelPlansData.map((item) => {
                return (
                  <div className="offer" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.destination}
                      className="offer-img"
                    />
                    <div className="text-container">
                      <h3>
                        {item.destination} ({item.days} Days)
                      </h3>
                      <p>{item.description}</p>
                      <p>
                        <b>Price</b>: {item.totalCost}
                      </p>
                    </div>
                  </div>
                );
            })}
        </>
    )
}