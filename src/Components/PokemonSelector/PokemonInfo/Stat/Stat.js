import "./Stat.css";

const Stat = ({ name, value }) => {
  return (
    <div className="stat">
      <div className="stat_name">{name}&nbsp;</div>
      <div className="stat_value">{value}</div>
    </div>
  );
};

export default Stat;
