import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { useDebounce } from '../utils/useDebounce';
import { useWishlist } from '../utils/useWishlist';
import { api } from '../services/service';
import { Loading } from '../components/common/Loading';
import { ProductCard } from '../components/products/ProductCard';

interface FlexibleProductListProps {
    products: Product[];
    loading: boolean;
    search: string;
    setSearch: (value: string) => void;
}

const FlexibleProductList: React.FC<FlexibleProductListProps> = ({
    products,
    loading,
    search,
    setSearch,
}) => {
    const debouncedSearch = useDebounce(search, 300);
    const { wishlist, toggleWishlist } = useWishlist();

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    if (loading) return <Loading />;

    return (
        <div className="container mx-auto px-4">
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 pl-10 border rounded-lg"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-2">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <ProductCard
                            product={product}
                            isWishlisted={wishlist.includes(product.id)}
                            onToggleWishlist={toggleWishlist}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ProductListPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await api.getProducts();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <FlexibleProductList
            products={products}
            loading={loading}
            search={search}
            setSearch={setSearch}
        />
    );
};

export default ProductListPage;