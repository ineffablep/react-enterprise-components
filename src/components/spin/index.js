import React from 'react';

const Spin = ({ className }) => <div className="w3-display-container" style={{zIndex:1}} >
    <div className="w3-padding w3-display-middle">
        <i className={"fa fa-spin fa-spinner fa-3x " + className} />
    </div>
</div>;

export default Spin;
