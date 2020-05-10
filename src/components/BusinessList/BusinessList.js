import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    //In this part I have added this.props.businesses before &&. I did it to do not get an error
                    this.props.businesses && this.props.businesses.map(business => {
                        return <Business key={business.id} business={business} />;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;