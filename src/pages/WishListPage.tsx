import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { api } from '@/services/service';
import { Loading } from '@/components/common/Loading';
import { ProductCard } from '@/components/products/ProductCard';
import { useWishlist } from '@/utils/useWishlist';

export const WishlistPage = () => {
    const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { wishlist, toggleWishlist } = useWishlist();

    useEffect(() => {
        const fetchWishlistProducts = async () => {
            setLoading(true);
            try {
                const allProducts = await api.getProducts();
                const filteredProducts = allProducts.products.filter(product => wishlist.includes(product.id));
                setWishlistProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching wishlist products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlistProducts();
    }, [wishlist]);

    if (loading) return <Loading />;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
            {wishlistProducts.length === 0 ? (
                <p className="text-xl text-gray-600 text-center">Your wishlist is empty. Add some products!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlistProducts.map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                product={product}
                                isWishlisted={true}
                                onToggleWishlist={toggleWishlist}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;