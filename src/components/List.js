import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
    let content = (<div></div>);
    if(props.waitSearch !==''){
        content = (<p>{props.waitSearch} ...</p>)
    }
    else if (props.dataSearch) {
        content = props.dataSearch.map((item) => (
            <li key={`item-${item.id}`} item={item.id}>{item.full_name} <a href={item.html_url}>Link view</a></li>
        ));
    } else {
        content = (<p>Dont have anything</p>);
    }

    return (
        <ul>
            {content}
        </ul>
    );
}

List.propTypes = {
    dataSearch: PropTypes.array,
};

export default List;
