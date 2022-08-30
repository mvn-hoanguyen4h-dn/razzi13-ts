function FooterTop() {
  return (
    <div className="footer-top">
      <h4 className="newsletter-title">subscribe to our newsletter</h4>
      <p>Receive an exclusive 10% discount code when you signup.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter Email *" />
        <input type="submit" value="Subscribe" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default FooterTop;
