import "./Squad.css";

const Squad = ({ data }) => {
  const getColor = () => {
    switch (data?.types[0].name.toLowerCase()) {
      case "normal":
        return "#a8a77a";
      case "fire":
        return "#ee8130";
      case "water":
        return "#6390f0";
      case "electric":
        return "#f7d02c";
      case "grass":
        return "#7ac74c";
      case "ice":
        return "#96d9d6";
      case "fighting":
        return "#c22e28";
      case "poison":
        return "#a33ea1";
      case "ground":
        return "#e2bf65";
      case "flying":
        return "#a98ff3";
      case "psychic":
        return "#f95587";
      case "bug":
        return "#a6b91a";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6f35fc";
      case "dark":
        return "#705746";
      case "steel":
        return "#b7b7ce";
      case "fairy":
        return "#d685ad";
      default:
        return "#c1c8ca";
    }
  };

  return (
    <div className="squad-container" style={{ backgroundColor: getColor() }}>
      {data === null ? (
        "empty"
      ) : (
        <>
          {/* <img src={data?.image} alt="Avatar" style={{ width: "100%" }} />
          <h2>{data.name.toUpperCase()}</h2>
          {data?.abilities.map((ability) => (
            <div key={`squad-${ability.name}`} className="label-container">
              <label>{ability.name}</label>
            </div>
          ))} */}
           <div className="squad-container-info">
            <div className="squad-container-info-image">
              <img src={data?.image} alt="Avatar"/>
            </div>
            <div className="squad-heading">
              <h2>{data.name.toUpperCase()}</h2>
            </div>
              {data?.abilities.slice(0,2).map((ability) => (
                <div className="label-container">
                  <label>{ability.name}</label>
                </div>
              ))}
            </div>
        </>
      )}
    </div>
  );
};

export default Squad;
