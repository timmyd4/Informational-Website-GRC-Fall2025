import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer-page.jsx";
import data from "../data.js";
import Slides from "./Slides.jsx";
export default function App()
{
    const mappedElements = data.map((x) => {
        return <Slides
            title={x.title}
            img={x.img}
            main={x.main}
        />
    });

    return(<div>
        <Header/>
        <Main/>
        <br></br>
        <div className="ensured-container">
            {mappedElements}
        </div>
        <br></br> 
        <Footer/>
        </div>);
}