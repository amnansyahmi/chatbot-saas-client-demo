import "./style.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">KadKahwin.my</div>
        <nav>
          <a href="#templates">Templates</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="badge">Digital Wedding Invitation Service</p>
          <h1>Create beautiful e-invitation cards in minutes.</h1>
          <p>
            Share your wedding details, RSVP form, location map, countdown,
            photo gallery and guest list — all in one elegant link.
          </p>

          <div className="actions">
            <button>Choose Template</button>
            <button className="secondary">View Demo</button>
          </div>
        </div>

        <div className="previewCard">
          <p className="small">Wedding Invitation</p>
          <h2>Amir & Sofia</h2>
          <p>Saturday, 21 December 2026</p>
          <p>Dewan Citra, Shah Alam</p>
          <button>Open Invitation</button>
        </div>
      </section>

      <section id="templates" className="section">
        <h2>Popular Templates</h2>
        <div className="grid">
          <div className="card">Classic Malay</div>
          <div className="card">Modern Minimal</div>
          <div className="card">Luxury Gold</div>
        </div>
      </section>

      <section id="pricing" className="section">
        <h2>Pricing</h2>
        <div className="grid">
          <div className="priceCard">
            <h3>Basic</h3>
            <p>RM39</p>
            <span>Invitation page + RSVP</span>
          </div>
          <div className="priceCard featured">
            <h3>Premium</h3>
            <p>RM79</p>
            <span>RSVP, map, gallery, music and guest list</span>
          </div>
          <div className="priceCard">
            <h3>Custom</h3>
            <p>RM149</p>
            <span>Fully customized design</span>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <h2>FAQ</h2>
        <details>
          <summary>Can I change my wedding details later?</summary>
          <p>Yes, you can update the date, venue, time and RSVP details anytime.</p>
        </details>

        <details>
          <summary>Can guests RSVP online?</summary>
          <p>Yes, guests can RSVP directly through your invitation link.</p>
        </details>
      </section>
    </div>
  );
}

export default App;
