import "./Chart.css";
import ChartBar from "./ChartBar";

const Char = (props) => {

  const valuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaxValue = Math.max(...valuesArray);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          max={totalMaxValue}
        />
      ))}
    </div>
  );
};

export default Char;
