import { useState, useEffect } from 'react';
import WishlistCard from './components/WishlistCard';
import './App.css';

function App() {
  const [gifts, setGifts] = useState(() => {
    const savedGifts = localStorage.getItem('secretSantaGifts');
  
    if (savedGifts) {
      try {
        return JSON.parse(savedGifts);
      } catch {
        return [];
      }
    }
    return [
    { name: 'Coffee Mug', price: 12 },
    { name: 'Winter Scarf', price: 18 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('secretSantaGifts', JSON.stringify(gifts));
  }, [gifts]);

  const [giftName, setGiftName] = useState('');
  const [giftPrice, setGiftPrice] = useState('');
  const [giftUrl, setGiftUrl] = useState('');

  function addGift(event) {
    event.preventDefault();

    const price = Number(giftPrice);

    if (!giftName.trim() || !Number.isFinite(price) || price <= 0) {
      alert('Please enter a gift name and a valid price.');
      return;
    }

    const newGift = {
      name: giftName.trim(),
      price: price
    };

    function deleteGift(indexToDelete) {
      setGifts(previousGifts => 
        previousGifts.filter((gift, index) => index != indexToDelete)
      )
    }
    setGifts([...gifts, newGift]);

    setGiftName('');
    setGiftPrice('');
  }

  return (
    <div>
      <header>
        <nav>Secret Santa</nav>
      </header>

      <h1>Secret Santa 2026 🎄</h1>
      <p>Welcome to our family gift exchange!</p>

      <section className="wishlist-section">
        <h2>My Wishlist 🎁</h2>

        <form onSubmit={addGift}>
          <input
            type="text"
            placeholder="Gift name"
            value={giftName}
            onChange={(event) => setGiftName(event.target.value)}
          />

          <input
            type="number"
            placeholder="Price (£)"
            min="0.01"
            step="0.01"
            value={giftPrice}
            onChange={(event) => setGiftPrice(event.target.value)}
          />

          <input
            type="text"
            placeholder="Product link (https://...)"
            value={giftUrl}
            onChange={(event) => setGiftUrl(event.target.value)}
          />

          <button type="submit">Add Gift</button>
        </form>

        <div className="wishlist-grid">
          {gifts.map((gift, index) => (
            <WishlistCard
              key={index}
              name={gift.name}
              price={gift.price}
              url={giftUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;