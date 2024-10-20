import { useState } from 'react';

interface ProductImagesProps {
    images: string[];
    title: string;
}

export const ProductImages = ({ images, title }: ProductImagesProps) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
                <img
                    src={mainImage}
                    alt={title}
                    className="w-full h-96 object-cover rounded-lg"
                />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${title} ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg cursor-pointer"
                        onClick={() => setMainImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};