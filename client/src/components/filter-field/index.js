import React from 'react'

const FilterField = (props) => {
    return (
        <div className="form-group col-3">
            <label>Filter blogs by author:</label>
            <input type="text" className="form-control" value={props.author} onChange={props.filterByAuthor} />
        </div>
    )
}

export default FilterField