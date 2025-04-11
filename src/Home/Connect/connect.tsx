import './Connect.css';

const Connect = () => {
  return (
    <section className="connect-section">
      <div className="connect-left">
        <h4>Connect</h4>
      </div>
      <div className="connect-right">
        <input
          type="email"
          placeholder="Your Email Address"
          className="connect-input"
        />
        <button className="connect-button">Connect</button>
      </div>
    </section>
  );
};

export default Connect;
