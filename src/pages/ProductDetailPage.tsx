import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import { api } from '../services/service';
import { Loading } from '../components/common/Loading';
import { ProductImages } from '../components/products/ProductImage';

export const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            try {
                const data = await api.getProduct(id);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <Loading />;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductImages images={product.images} title={product.title} />

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                    <p className="mt-2 text-gray-600">{product.description}</p>

                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                            {product.discountPercentage > 0 && (
                                <span className="text-lg text-green-600">-{product.discountPercentage}% OFF</span>
                            )}
                        </div>

                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-600">{product.rating} Rating</span>
                        </div>

                        <div className="space-y-2">
                            <p className="text-gray-600">Category: <span className="font-medium">{product.category}</span></p>
                            <p className="text-gray-600">Brand: <span className="font-medium">{product.brand}</span></p>
                            <p className="text-gray-600">SKU: <span className="font-medium">{product.id}</span></p>
                            <p className="text-gray-600">
                                Stock: <span className={`font-medium ${product.stock <= 5 ? 'text-red-500' : 'text-green-500'}`}>
                                    {product.stock}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};