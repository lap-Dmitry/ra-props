import Item  from "./Item";
import PropTypes from 'prop-types';

export default function Listing({ items }) {
    const filtered = items.filter((item) => item.state !== 'removed');

    return (
        <div className="item-list">
            {filtered.map((item) => <Item item={item} key={item.listing_id}/>)}
        </div>
    );
}

Listing.defaultProps = {
    items: [],
};

Listing.propTypes = {
    items: PropTypes.array
};
