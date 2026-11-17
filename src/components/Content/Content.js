import "./Content.css";
import iamgeBoxSat from "./images/Mask group.jpg";
import mapPin from "./images/icons/map pin.png"
import document from "./images/icons/document.png"
import handshake from "./images/icons/handshake.png"
import price from "./images/icons/price.png"
import service from "./images/icons/service.png"
import CardList from "../Cards/CardList/CardList";
import ReviewList from "../Reviews/ReviewList/ReviewList";
import Help from "../Help/Help";
import Footer from "../Footer/Footer";


function Content() {
  return (
    <>
      <div className="box_house">
        <div className="first_box">
          <div className="text_box">
            <h1>Find Your Dream Home</h1>
            <p>
              Explore our curated selection of exquisite properties meticulously
              tailored to your unique dream home vision
            </p>
            <button>Sign Up</button>
          </div>
          {/* <div className="image_box">
            <img src="" />
        </div> */}
        </div>
        <div className="two_box">
          <div className="input_box">
            <input
              type="text"
              className="input_location"
              placeholder="Location"
            />
            <input type="text" placeholder="Type" />
            <input type="text" placeholder="Price Range" />
          </div>
          <button>Sign Up</button>
        </div>
      </div>

      <div className="box_statistics">
        <div className="box_stat_img">
          <img src={iamgeBoxSat} />
        </div>
        <div className="box_stat_text">
          <h1>We Help You To Find Your Dream Home</h1>

          <p>
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality
          </p>

          <div className="statistics">
            <div>
              <h1>8K+</h1>
              <p>Houses Available</p>
            </div>
            <div>
              <h1>6K+</h1>
              <p>Houses Sold</p>
            </div>
            <div>
              <h1>2K+</h1>
              <p>Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
      <div className="choose_box">
        <div className="choose_top">
          <h2>Why Choose Us</h2>
          <p>Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
        </div>
        <div className="choose_bottom">
          <div className="choose_card">
            <div className="choose_logo">
              <div>
                <img src={mapPin}/>
              </div>
            </div>
            <div className="choose_desc">
              <h2>Expert Guidance</h2>
              <p>Expert GuidanceBenefit from our team's seasoned expertise for a smooth buying experience</p>
            </div>
          </div>
                    <div className="choose_card">
            <div className="choose_logo">
              <div>
                <img src={service}/>
              </div>
            </div>
            <div className="choose_desc">
              <h2>Personalized Servic</h2>
              <p>Our services adapt to your unique needs, making your journey stress-free</p>
            </div>
          </div>
                    <div className="choose_card">
            <div className="choose_logo">
              <div>
                <img src={document}/>
              </div>
            </div>
            <div className="choose_desc">
              <h2>Transparent Process</h2>
              <p>Stay informed with our clear and honest approach to buying your home</p>
            </div>
          </div>
                    <div className="choose_card">
            <div className="choose_logo">
              <div>
                <img src={handshake}/>
              </div>
            </div>
            <div className="choose_desc">
              <h2>Exceptional Support</h2>
              <p>Providing peace of mind with our responsive and attentive customer service</p>
            </div>
          </div>
          
        </div>
      </div>

      <CardList/>
      <ReviewList/>
      <Help/>
      <Footer/>
    </>
  );
}

export default Content;
