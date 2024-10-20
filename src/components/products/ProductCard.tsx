import { Product } from '../../types/product';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
    isWishlisted: boolean;
    onToggleWishlist: (id: number) => void;
}

export const ProductCard = ({ product, isWishlisted, onToggleWishlist }: ProductCardProps) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link to={`/product/${product.id}`}>
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
            />
        </Link>
        <div className="p-4">
            <div className="flex justify-between items-center">
                <Link to={`/product/${product.id}`}>
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                </Link>
                <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                >
                    <HeartIcon
                        className={`h-6 w-6  size-6 ${isWishlisted
                            ? 'text-red-500 fill-red-500'
                            : 'text-gray-400'
                            }`}
                    />
                </button>
            </div>
            <p className="text-sm text-gray-600 mt-1">Category: {product.category}</p>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-lg font-bold text-gray-900">Price: ${product.price}</p>
                    {product.discountPercentage > 0 && (
                        <p className="text-sm text-green-600"> -{product.discountPercentage}%</p>
                    )}
                </div>
                <div className="flex items-center">
                    Rating: {" "}
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                Stock: <span className={`font-medium ${product.stock <= 5 ? 'text-red-500' : 'text-green-500'}`}>
                    {product.stock}
                </span>
            </p>
        </div>
    </div>
);