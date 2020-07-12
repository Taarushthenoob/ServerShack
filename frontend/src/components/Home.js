import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div className="backgimg">
      <div className=" grad">
        <div className="pad ">
          <Link to="/videoandimages" className="f2">
            For Your Jam
          </Link>
          <p className="f1">
            This service provides fitness and meditation videos under our platform in the form of Jams. Jams are basically blogs from a signed in user. We provide you with a platform where experienced individuals blog and you get to see their blogs aka Jams. You can find the Jams you like to
            follow and the Blogger that suits you the most in your own personalised feed.
            Happy Excercising!!
          </p>
        </div>
        <div className="pad ">
          <Link to="/blogs" className="f2">
            Your own personalized feed
          </Link>
          <p className="f1">
            Here, you get to see people in different walks of life come together
            and provide valuable tips and information on Physical fitness,
            Healthy mind, and diet. You can also donate to Non-profit health
            organisations directlt through UPI if you want to contribute to the
            Universal Health goal. You can filter your feed and choose what you
            want to see. Enjoy!!
          </p>
        </div>
        <div className="pad ">
          <Link to="/help" className="f2">
            Want Help Section
          </Link>
          <p className="f1">
            Here, you can either provide your invaluable help by volunteering,
            joining or donating to a Health based Non-profit, or you could ask
            for help from Qualified individuals and organisations registered
            with us. Don't hesitate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
