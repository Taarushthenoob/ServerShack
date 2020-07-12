import React from 'react';
import OrgList from './OrgList';
import Helpers from './Helpers';
import './Help.css';

const Help = () => {
    return (
    <div>
        <div className="cont">
            <h1>Want to Provide Your Invaluable Help?</h1>
            <OrgList />
        </div>
        <br /><br />
        <div class="ui horizontal divider">
            Or
        </div>
        <br /><br />
        <div className="cont">
            <h1>Do you Need Help?</h1>
            <Helpers />
        </div>
    </div>
    );
};

export default Help;