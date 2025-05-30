'use client';

import { FaStar } from 'react-icons/fa';

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Suman Acharya',
    image: '/images/user1.jpg',
    review:
      'The BP monitor I purchased from Medishop is incredibly accurate and reliable. Their customer service was also excellent!',
    rating: 5,
  },
  {
    name: 'Sita Maharjan',
    image: '/images/user2.jpg',
    review:
      'Great quality products and fast delivery. I use their nebulizer for my father, and it works perfectly.',
    rating: 4,
  },
  {
    name: 'Rajendra Shrestha',
    image: '/images/user3.jpg',
    review:
      'Highly recommended! The surgical instruments were well-packaged and exactly as described. Will order again.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f3f6fb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700">{t.name}</p>
                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
