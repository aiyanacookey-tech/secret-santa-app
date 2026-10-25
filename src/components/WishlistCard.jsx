function WishlistCard({ name, price }) {
    return (
        <div className="wishlist-card">
            <h3>{name}</h3>
            <p>Price: ${price}</p>
        </div>
    )
}

export default WishlistCard;