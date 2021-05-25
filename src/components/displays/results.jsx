import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
    <div aria-label="results">
        <p>Api results</p>
        <p>{JSON.stringify(results)}</p>
    </div>
);

Results.propTypes = {
	results: PropTypes.any.isRequired
};

export default Results;