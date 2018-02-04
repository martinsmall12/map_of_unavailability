import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ApplicationList extends Component {

    render() {
        if (this.props.applications){
            return <ul className="list-group">
                    {this.props.applications.map((application, index) => (
                        <li key={index} className="list-group-item">
                            {application.label}
                        </li>
                    ))}
                 </ul>
        }else {
            return <p>Nenalezeny žádné aplikace</p>;
        }
    }
}

ApplicationList.propTypes = {
    applications: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        applications: state.applications,
    };
};

export default connect(mapStateToProps)(ApplicationList);
