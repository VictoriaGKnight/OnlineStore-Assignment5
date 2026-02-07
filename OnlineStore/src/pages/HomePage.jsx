import Hero from "../components/Hero";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home">
      <Hero 
        title="Welcome to My Craft Store!"
        subtitle="Find amazing hand-made products perfect for everyone!"
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/FF758F/ffffff?text=Welcome"
      />

      <section className="home-intro">
        <h2 className="home-title">Why Shop With Us?</h2>
        <p className="home-subtitle">
            Handmade favorites, fast shipping, and friendly customer support.
        </p>

        <div className="features">
            <div className="feature-card">
                <h3>High Quality Products</h3>
                <p>Carefully curated selection of the best items.</p>
            </div>

            <div className="feature-card">
                <h3>Fast Shipping</h3>
                <p>Always recieve your orders quickly and safely.</p>
            </div>

            <div className="feature-card">
                <h3>Great Support</h3>
                <p>Our team is always here to answer any questions.</p>
            </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;