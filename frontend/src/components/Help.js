import React from 'react';
import OrgList from './OrgList';
import Helpers from './Helpers';

const Help = () => {
    return (
    <div>
        <div className="cont">
            <h1>Provide Help</h1>
            <OrgList />
        </div>
        <br /><br /><br /><br />
        <div className="cont">
            <h1>Need Help</h1>
            <Helpers />
        </div>
    </div>
    );
};

export default Help;