import React from "react"
import PropTypes from "prop-types";

class SearchFilter extends React.Component {
    render() {
        const { onFilterChange } = this.props;
        return <div>
            <input onChange={onFilterChange} />
        </div>
    }
}

SearchFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired
}

export default SearchFilter