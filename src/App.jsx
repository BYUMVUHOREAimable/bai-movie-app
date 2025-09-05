import { useEffect, useState } from "react";

// ✅ Reusable Card component
const Card = ({ title }) => {
    const [count, setCount] = useState(0); // Track number of likes

    // Log whenever likes change (for debugging)
    useEffect(() => {
        console.log(`${title} likes: ${count}`);
    }, [count, title]);

    // ✅ Handle Like
    const handleLike = () => {
        setCount((prev) => prev + 1);
    };

    // ✅ Handle Unlike
    const handleUnlike = () => {
        setCount((prev) => Math.max(prev - 1, 0)); // Prevent negative numbers
    };

    return (
        <div className="card">
            {/* Movie title & like count */}
            <h2>
                {title} <br /> {count > 0 && <span>{count} 👍</span>}
            </h2>

            {/* Like & Unlike buttons */}
            <div className="likeAndUnlikeButton">
                <button className="handleLike" onClick={handleLike}>
                    👍 Like
                </button>
                <button className="handleUnlike" onClick={handleUnlike}>
                    👎 Unlike
                </button>
            </div>
        </div>
    );
};

// ✅ Main App
const App = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            {/* ✅ Project Description */}
            <header className="app-header">
                <h1>🎬 Movie Like/Unlike App</h1>
                <p>
                    This project allows users to like or unlike their favorite movies. Each
                    movie card tracks its own like count, which can be increased or
                    decreased as many times as you want.
                </p>
            </header>

            {/* ✅ Cards */}
            <div className="card-container">
                <Card title="Star Wars" />
                <Card title="Avatar" />
                <Card title="The Lion King" />
            </div>

            {/* ✅ Footer with copyright */}
            <footer className="app-footer">
                <p>© BAI {currentYear} — All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
