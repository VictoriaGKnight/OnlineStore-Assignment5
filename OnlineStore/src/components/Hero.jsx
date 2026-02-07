import './Hero.css'

function Hero(props) {
    return (
        <section className="hero">
            <img src={props.image} className="hero-image"/>

            <div className="hero-content">
                <h2 className="hero-title">{props.title}</h2>
                <p className="hero-subtitle">{props.subtitle}</p>
                <button className="hero-button">{props.ctaText}</button>
            </div>
        </section>
    );
}

export default Hero;