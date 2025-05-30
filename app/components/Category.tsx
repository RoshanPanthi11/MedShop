'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  category: string;
  image: string;
}

const CategoriesRow = () => {
  const [categories, setCategories] = useState<
    { name: string; image: string }[]
  >([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/Product.json');
      const data: Product[] = await res.json();

      const categoryMap = new Map<string, string>();

      data.forEach((product) => {
        if (!categoryMap.has(product.category)) {
          categoryMap.set(product.category, product.image);
        }
      });

      const uniqueCategories = Array.from(categoryMap, ([name, image]) => ({
        name,
        image,
      }));

      setCategories(uniqueCategories.slice(0, 4)); // Show only 4 categories
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-14 bg-gradient-to-br from-gray-200 via-white to-gray-400 rounded-xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-cyan-700 mb-10 tracking-wide">
          Explore Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${encodeURIComponent(category.name)}`}
              passHref
              legacyBehavior
            >
              <a
                className="bg-white hover:bg-cyan-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-center group border border-cyan-100"
                aria-label={`Explore category ${category.name}`}
                rel="noopener noreferrer"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={category.image}
                    alt={category.name || 'Category Image'}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors relative inline-block
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300
                  group-hover:after:w-full"
                >
                  {category.name}
                </h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesRow;
