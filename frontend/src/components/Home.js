import React from 'react';
import { Link } from 'react-router-dom';



const Home= () => {
    return (
        <div>
            <image className="ui fluid image" src="./work.jpg" ></image>
            <div>
                <Link to='/' className="ui header">For Your Jam</Link>
            </div>
        </div>
    )
}

export default Home;