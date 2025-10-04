import ServicesList from "./ServicesList/ServicesList";
import ContactForm from "./ContactForm";
import "./PricingSection.css";

const PricingSection = () => (
  <section className="pricing-section-layout">
    <div className="services-column">
      <ServicesList />
    </div>
    <div className="form-column">
      <ContactForm />
    </div>
  </section>
);

export default PricingSection;
