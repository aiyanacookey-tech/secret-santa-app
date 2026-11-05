function WishlistCard({ name, price, url }) {
    return (
        <div className="wishlist-card">
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    View Product
                </a>
            )}
        </div>
    )
}

export default WishlistCard;