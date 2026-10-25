import './App.css';
import WishlistCard from './components/WishlistCard';

function App() {
  return (
    <div>
      <header><nav>Secret Santa</nav></header>
      <h1>Secret Santa 2026 🎄</h1>
      <p>Welcome to our family gift exchange!</p>
      <button>View My Wishlist</button>

      <section className="wishlist-section">
        <h2>My Wishlist</h2>
        <p>Here are the gifts I'd love for Christmas!</p>

        <div className="wishlist-grid">
          <WishlistCard name="Coffee Mug" price={12}/>
          <WishlistCard name="Winter Scarf" price={35}/>
          <WishlistCard name="Bluetooth Speaker" price={50}/>
        </div>
      </section>
    </div>
  );
}

export default App;