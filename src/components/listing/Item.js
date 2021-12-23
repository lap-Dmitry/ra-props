import PropTypes from "prop-types";

export default function Item({ item }) {
    const {
        url,
        price,
        currency_code,
        quantity,
        title,
        MainImage
    } = item;

    function formatTitle(title) {
        return title.length > 50 ? `${title.slice(0, 50)}...` : title;
    }

    function formatPrice(currency, price) {
        switch(currency) {
            case 'USD':
                return `$${price}`;
            case 'EUR':
                return `€${price}`;
            default:
                return `${price} GBP`;
        }
    }

    function quantityClass(quantity) {
        return quantity <= 10 ? ' level-low' : quantity <= 20 ? ' level-medium' : ' level-high';
    }

    return (        
  <div className="item">
    <div className="item-image">
      <a href={url}>
        <img src={MainImage['url_570xN']} alt="" />
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{formatTitle(title)}</p>
      <p className="item-price">{formatPrice(currency_code, price)}</p>
      <p className={`item-quantity ${quantityClass(quantity)}`}>{quantity} left</p>
    </div>
  </div>  
    );
}

Item.propTypes = {
    listing_id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    MainImage: PropTypes.object,
};
