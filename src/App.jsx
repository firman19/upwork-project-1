import logo from "./logo.svg";
import "./App.css";

function App() {
  return <>
    <div className="pageWrapper">

      <header className="header">
        Choose the form of payment
        <a href="#" className="close"></a>
      </header>
      <div className="content">

        <div className="card-user">
          <div className="card-user-thumbnail text-title" style={{lineHeight:1,fontSize:"20px"}}>
            J
          </div>
          <div className="card-user-info">
            <div className="card-user-name text-title">John</div>
            <div className="card-user-phone text-inactive">(88) 99602-2404</div>
          </div>
          <a href="#" className="card-user-logout">Log out</a>
        </div>

        <div className="menu-title text-title">
          Selected service
        </div>
        <div className="card-service">
          <div className="card-service-thumbnail">
            <img src="/img.png" alt="" width={"100%"} height={'auto'}/>
          </div>
          <div className="card-service-info">
            <div className="text-primary" style={{marginBottom:".5rem"}}>Japanese lessons</div>
            <div className="icon icon-calendar text-inactive">Nov 7, 2020 · 11:30</div>
            <div className="icon icon-location text-inactive">Client`s place</div>
            <div className="text-primary">Rp 350.000</div>
          </div>
        </div>

        {/* location */}
        <div className="form-group">
          <label htmlFor="location">Enter your location</label>
          <input type="text" name="location" id="location" placeholder="Enter address" />
        </div>

        {/* Notes*/}
        <div className="form-group btm">
          <label htmlFor="note">Note (optional)</label>
          <input type="text" name="note" id="note" placeholder="Enter text here" />
        </div>

        <div className="menu-title text-title lg">
          Choose a way to pay
        </div>
        {/* payment method */}
        <div className="payment-container">
          <div className="payment-item active text-primary">
            Cash
          </div>
          <div className="payment-item text-primary">
            Credit Card
          </div>
          <div className="payment-item text-primary">
            eWallet/
            Virtual bank
          </div>
        </div>

        <div className="form-group row agreement-wrapper">
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement" className="checkbox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="#" className="external-link">do eiusmod</a>
          </label>
        </div>
      </div>
      <footer className="footer">
        <a href="#">Previous</a>
        <button className="btn btn-primary">Next</button>
      </footer>
    </div>
  </>;
}

export default App;
