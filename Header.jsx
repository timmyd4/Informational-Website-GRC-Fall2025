import switches from "./src/assets/Switches.png";
export default function App()
{
    return(<div>
        <div className="img-div">
            <img className="switches-img" src={switches} alt="image of mechanical keyboard switches"/>
        </div>
        <h1>Mechanical Keyboards </h1>
    </div>);
}