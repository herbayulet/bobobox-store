import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-xl font-bold text-gray-800">
                        Product Store
                    </Link>
                    <Link to="/wishlist" className="text-xl font-bold text-gray-800">
                        Wishlist
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;