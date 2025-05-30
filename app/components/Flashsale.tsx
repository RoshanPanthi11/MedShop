'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: Rating;
  subcategory: string;
  originalPrice?: string;
  discountPercent?: number;
}

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState<number>(7200);
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/Product.json');
      const data: Product[] = await res.json();

      const discounted = data.slice(0, 4).map((product) => ({
        ...product,
        originalPrice: (product.price * 1.2).toFixed(2),
        discountPercent: 20,
      }));

      setDiscountedProducts(discounted);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f3f6fb]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Flash Sales
          </h2>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg text-sm md:text-base whitespace-nowrap">
            Ends in {formatTime(timeLeft)}
          </span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discountedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="relative w-full h-52 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 640px) 100vw, 300px"
                  priority
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {product.discountPercent}% OFF
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                {product.title}
              </h3>

              <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                {product.description}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="line-through text-gray-400 text-sm">
                  Rs. {product.originalPrice}
                </span>
                <span className="text-green-800 font-bold text-lg">
                  Rs. {product.price}
                </span>
              </div>

              <div className="mt-3 flex items-center text-yellow-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.945 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
                </svg>
                <span className="text-gray-700 font-medium">
                  {product.rating.rate.toFixed(1)} ({product.rating.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
