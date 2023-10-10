import './Date.css';

function Day(props){
    const dat=props.dat;
    const month=props.month;
    const year=props.year;
    return(
        <div className="date">
            <div className="innerComp">{month}</div>
            <div className="innerComp">{dat}</div>
            <div className="innerComp">{year}</div>
        </div>
    );
}
export default Day;