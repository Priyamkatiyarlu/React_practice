import './Items.css';
function Item(props){
    const name=props.name;
    return(<p className="first">{name}</p>);
}
export default Item;