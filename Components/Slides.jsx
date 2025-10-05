export default function Slides(props)
{
    return(
    <div className="parent-container">
        <div className="container">

            <h1>{props.title}</h1>

            <div className="img-center">
                {Array.isArray(props.img) ? (
                    props.img.map((src, i) => (
                        <img key={i} className="img-props" src={src}/>
                    ))
                ): (
                    <img className="img-props" src={props.img}/>
                )}
            </div>

            <p className="main-text">{props.main}</p>

        </div>
    </div>)
}