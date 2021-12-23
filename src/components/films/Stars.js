import { Star } from "./Star";
import shortid from "shortid";
import React from "react";
import PropTypes from 'prop-types';

export function Stars(props) {
    const { count } = props;
    if (count < 1 || count > 5 || !Number.isInteger(count))
    {
        return null;
    }

    let startList = [];
    for (let i = 0; i < count; i++)
    {
        startList.push({
            key: shortid.generate()
        });
    }
    return (
        <ul className='card-body-stars u-clearfix'>
            <li>
                {startList.map((el) => <Star key={el.key}/>)}
            </li>
        </ul>
    );
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}
