import { useNavigate } from "react-router-dom";
import { 
  FaRobot, 
  FaVideo, 
  FaFileAlt, 
  FaBullseye, 
  FaPalette, 
  FaCloud,
  FaSave,
  FaFolder,
  FaBuilding
} from "react-icons/fa";
import "./Styles/Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  const pricingTiers = [
    {
      name: "Starter",
      price: "$5",
      credits: "55,000",
      features: [
        "AI-powered screenplay writing",
        "Basic story structure tools",
        "Export to PDF",
        "Cloud storage"
      ]
    },
    {
      name: "Professional",
      price: "$10",
      credits: "110,000",
      features: [
        "Everything in Starter",
        "Advanced AI story analysis",
        "3D scene visualization",
        "Character development tools",
        "Collaboration features"
      ],
      popular: true
    },
    {
      name: "Studio",
      price: "$50",
      credits: "580,000",
      features: [
        "Everything in Professional",
        "Advanced 3D studio tools",
        "Shot planning & storyboarding",
        "Team collaboration",
        "Priority AI processing",
        "Custom templates"
      ]
    },
    {
      name: "Enterprise",
      price: "$100",
      credits: "1,700,000",
      features: [
        "Everything in Studio",
        "Unlimited projects",
        "Advanced analytics",
        "Custom AI training",
        "Dedicated support",
        "API access"
      ]
    }
  ];

  return (
    <div className="landing-page" style={{ width: '100%' }}>
      {/* Header */}
      <header className="landing-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Inksfire</h1>
            </div>
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
            </nav>
            <button 
              className="cta-button primary"
              onClick={() => navigate("/home")}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Write & Visualize Your Screenplay with 
              <span className="highlight"> AI Power</span>
            </h1>
            <p className="hero-subtitle">
              Transform your storytelling with intelligent writing assistance and immersive 3D scene planning. 
              From script to screen, we've got you covered.
            </p>
            <div className="hero-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => navigate("/home")}
              >
                Start Writing Now
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="feature-preview">
              <div className="preview-card writing">
                <h3>AI Writing Assistant</h3>
                <p>Get intelligent suggestions for dialogue, action, and story structure</p>
              </div>
              <div className="preview-card visualization">
                <h3>3D Scene Planning</h3>
                <p>Visualize your scenes in immersive 3D environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Powerful Features for Modern Screenwriters</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaRobot /></div>
              <h3>AI Writing Assistant</h3>
              <p>Get intelligent suggestions for dialogue, character development, and story structure. Our AI understands screenplay format and helps maintain consistency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaVideo /></div>
              <h3>3D Scene Visualization</h3>
              <p>Plan your scenes in immersive 3D environments. Visualize camera angles, blocking, and set design before you shoot.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaFileAlt /></div>
              <h3>Professional Formatting</h3>
              <p>Industry-standard screenplay formatting with automatic scene numbering, character tracking, and export options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Story Structure Tools</h3>
              <p>Interactive story notes, character arcs, and plot development tools to keep your narrative on track.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaPalette /></div>
              <h3>Shot Planning</h3>
              <p>Create detailed shot lists with 3D previews. Plan camera movements, lighting, and composition.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaCloud /></div>
              <h3>Cloud Collaboration</h3>
              <p>Work with your team in real-time. Share scripts, get feedback, and manage revisions seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Flexible pricing with credits that power your AI features and 3D visualizations
          </p>
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
                {tier.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3>{tier.name}</h3>
                  <div className="price">
                    <span className="price-amount">{tier.price}</span>
                    <span className="price-period">/month</span>
                  </div>
                  <div className="credits">{tier.credits} credits</div>
                </div>
                <ul className="features-list">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`cta-button ${tier.popular ? 'primary' : 'secondary'} full-width`}>
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
          <div className="pricing-note">
            <p>All plans include unlimited projects and cloud storage. Credits are used for AI features and 3D rendering.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Write Your Script</h3>
              <p>Use our AI-powered editor with intelligent suggestions and professional formatting</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Plan Your Scenes</h3>
              <p>Visualize scenes in 3D, plan camera angles, and create detailed shot lists</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Collaborate & Refine</h3>
              <p>Share with your team, get feedback, and iterate until your script is perfect</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Export & Produce</h3>
              <p>Export industry-standard scripts and production documents ready for filming</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Screenwriting?</h2>
            <p>Join thousands of writers who are already using AI to create better stories faster.</p>
            <button 
              className="cta-button primary large"
              onClick={() => navigate("/home")}
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Inksfire</h3>
              <p>The future of screenplay writing and visualization.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Inksfire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}