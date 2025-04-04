import "./css/SlideShow.css";


const SlideShow = () => {

    const importAll = (resource) => {
        return resource.keys().map(resource);

    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/)
    );

    const showNextImage= () => {
        if(imageIndex == images.length - 1) {
            setImageIndex(0);
        }
        else {
        setImageIndex(imageIndex+1);
        }
    };

    const showPreviousImage = () => {
        setImageIndex(imageIndex == 0? images.length-1:imageIndex-1);
    };

    return (
        <section id="slideshow">
            <img src={images[1]}/>
            <p>
                <button onClick={showPreviousImage}>Previous</button>
                <button onClick={showNextImage}>Next</button>
            </p>
        </section>
    );
};

export default SlideShow;