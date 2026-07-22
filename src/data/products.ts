/**
 * Sample Products Data for CommerceQA
 * 25+ realistic products across 7 categories
 */

import { Product } from '../types'

export const PRODUCTS: Product[] = [
  // Electronics (5)
  {
    id: '1',
    title: 'Wireless Noise-Canceling Headphones',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.',
    category: 'Electronics',
    price: 299,
    discount: 15,
    stock: 45,
    rating: 4.5,
    reviews: 328,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    specifications: {
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 hours',
      'Noise Cancellation': 'Active',
      'Weight': '250g'
    }
  },
  {
    id: '2',
    title: '4K Ultra HD Webcam',
    description: 'Professional 4K webcam with auto-focus, wide-angle lens, and built-in microphone for video conferencing.',
    category: 'Electronics',
    price: 149,
    discount: 10,
    stock: 60,
    rating: 4.3,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    specifications: {
      'Resolution': '4K (3840x2160)',
      'Frame Rate': '30 fps',
      'Field of View': '90°',
      'Connection': 'USB 3.0'
    }
  },
  {
    id: '3',
    title: 'Portable SSD 1TB',
    description: 'Ultra-fast portable SSD with 1TB storage, USB-C connectivity, and water-resistant design.',
    category: 'Electronics',
    price: 129,
    discount: 12,
    stock: 80,
    rating: 4.6,
    reviews: 542,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80',
    specifications: {
      'Storage': '1TB',
      'Read Speed': 'Up to 1050MB/s',
      'Interface': 'USB 3.1 Type-C',
      'Weight': '160g'
    }
  },
  {
    id: '4',
    title: 'Mechanical Gaming Keyboard RGB',
    description: 'Professional gaming keyboard with customizable RGB lighting, mechanical switches, and programmable macro keys.',
    category: 'Electronics',
    price: 159,
    discount: 20,
    stock: 35,
    rating: 4.4,
    reviews: 487,
    image: 'https://images.unsplash.com/photo-1587829191301-8b3f3840eca3?w=500&q=80',
    specifications: {
      'Switch Type': 'Mechanical (Blue)',
      'Backlight': 'RGB',
      'Connection': 'USB',
      'Layout': 'Full-Size'
    }
  },
  {
    id: '5',
    title: 'Wireless Mouse Pro',
    description: 'Ergonomic wireless mouse with precision tracking, 6 programmable buttons, and silent clicks.',
    category: 'Electronics',
    price: 69,
    discount: 25,
    stock: 120,
    rating: 4.2,
    reviews: 623,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80',
    specifications: {
      'DPI': 'Up to 16000',
      'Battery Life': '18 months',
      'Buttons': '6',
      'Connection': 'Wireless 2.4GHz'
    }
  },

  // Fashion (5)
  {
    id: '6',
    title: 'Premium Cotton T-Shirt',
    description: 'Comfortable 100% organic cotton t-shirt with modern design, available in multiple colors.',
    category: 'Fashion',
    price: 39,
    discount: 30,
    stock: 200,
    rating: 4.1,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    specifications: {
      'Material': '100% Organic Cotton',
      'Weight': '180gsm',
      'Care': 'Machine wash cold',
      'Fit': 'Regular'
    }
  },
  {
    id: '7',
    title: 'Slim Fit Denim Jeans',
    description: 'Stylish slim-fit denim jeans with comfortable stretch fabric and classic blue wash.',
    category: 'Fashion',
    price: 79,
    discount: 25,
    stock: 150,
    rating: 4.3,
    reviews: 356,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&q=80',
    specifications: {
      'Material': '98% Cotton, 2% Elastane',
      'Fit': 'Slim',
      'Wash': 'Medium Blue',
      'Rise': 'Mid-Rise'
    }
  },
  {
    id: '8',
    title: 'Casual Blazer',
    description: 'Lightweight blazer perfect for business casual and everyday wear, available in navy and grey.',
    category: 'Fashion',
    price: 129,
    discount: 35,
    stock: 80,
    rating: 4.4,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1539533057440-7e67e129b0b0?w=500&q=80',
    specifications: {
      'Material': '65% Polyester, 35% Cotton',
      'Fit': 'Tailored',
      'Lining': 'Fully Lined',
      'Pockets': '2 Chest, 2 Waist'
    }
  },
  {
    id: '9',
    title: 'Winter Wool Sweater',
    description: 'Cozy wool sweater with soft texture, perfect for cold weather, available in multiple colors.',
    category: 'Fashion',
    price: 89,
    discount: 15,
    stock: 95,
    rating: 4.5,
    reviews: 321,
    image: 'https://images.unsplash.com/photo-1576566588100-ce7b0db1d54d?w=500&q=80',
    specifications: {
      'Material': '100% Wool',
      'Weight': 'Medium',
      'Neckline': 'Crew Neck',
      'Care': 'Dry Clean'
    }
  },
  {
    id: '10',
    title: 'Casual Linen Shirt',
    description: 'Breathable linen shirt perfect for summer, with short sleeves and comfortable fit.',
    category: 'Fashion',
    price: 69,
    discount: 20,
    stock: 110,
    rating: 4.2,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1596399579883-e8900c1b5f60?w=500&q=80',
    specifications: {
      'Material': '100% Linen',
      'Sleeve': 'Short',
      'Fit': 'Regular',
      'Collar': 'Button-Down'
    }
  },

  // Books (4)
  {
    id: '11',
    title: 'The Art of Clean Code',
    description: 'A comprehensive guide to writing clean, maintainable code with practical examples and best practices.',
    category: 'Books',
    price: 45,
    discount: 10,
    stock: 150,
    rating: 4.7,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&q=80',
    specifications: {
      'Author': 'Robert C. Martin',
      'Pages': '464',
      'ISBN': '978-0132350884',
      'Language': 'English'
    }
  },
  {
    id: '12',
    title: 'JavaScript: The Good Parts',
    description: 'Essential guide to JavaScript programming, covering the best practices and powerful features.',
    category: 'Books',
    price: 35,
    discount: 15,
    stock: 200,
    rating: 4.4,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e01c4c9?w=500&q=80',
    specifications: {
      'Author': 'Douglas Crockford',
      'Pages': '176',
      'ISBN': '978-0596517748',
      'Language': 'English'
    }
  },
  {
    id: '13',
    title: 'React Patterns & Best Practices',
    description: 'Master React with advanced patterns, hooks, and performance optimization techniques.',
    category: 'Books',
    price: 52,
    discount: 8,
    stock: 120,
    rating: 4.6,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1497206365907-4d71bcdd2085?w=500&q=80',
    specifications: {
      'Author': 'Michael Jackson',
      'Pages': '328',
      'ISBN': '978-1492040896',
      'Language': 'English'
    }
  },
  {
    id: '14',
    title: 'The Pragmatic Programmer',
    description: 'Your Journey to Mastery - Essential reading for software developers seeking excellence.',
    category: 'Books',
    price: 58,
    discount: 12,
    stock: 175,
    rating: 4.5,
    reviews: 834,
    image: 'https://images.unsplash.com/photo-1543002588-d83cea6ef579?w=500&q=80',
    specifications: {
      'Author': 'David Thomas, Andrew Hunt',
      'Pages': '352',
      'ISBN': '978-0201616224',
      'Language': 'English'
    }
  },

  // Shoes (5)
  {
    id: '15',
    title: 'Running Shoes Pro',
    description: 'High-performance running shoes with advanced cushioning technology and breathable mesh.',
    category: 'Shoes',
    price: 119,
    discount: 30,
    stock: 200,
    rating: 4.6,
    reviews: 745,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    specifications: {
      'Material': 'Mesh + Synthetic',
      'Cushioning': 'React Foam',
      'Weight': '280g per shoe',
      'Size Range': 'US 6-15'
    }
  },
  {
    id: '16',
    title: 'Classic Leather Sneakers',
    description: 'Timeless white leather sneakers perfect for everyday wear and casual styling.',
    category: 'Shoes',
    price: 89,
    discount: 20,
    stock: 180,
    rating: 4.4,
    reviews: 598,
    image: 'https://images.unsplash.com/photo-1549298881-e38b614bbf46?w=500&q=80',
    specifications: {
      'Material': 'Premium Leather',
      'Sole': 'Rubber',
      'Lining': 'Textile',
      'Size Range': 'US 5-14'
    }
  },
  {
    id: '17',
    title: 'Comfortable Slip-On Loafers',
    description: 'Elegant slip-on loafers made from genuine suede, ideal for office and casual occasions.',
    category: 'Shoes',
    price: 99,
    discount: 25,
    stock: 130,
    rating: 4.3,
    reviews: 421,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',
    specifications: {
      'Material': 'Genuine Suede',
      'Sole': 'Leather',
      'Style': 'Slip-On',
      'Size Range': 'US 6-14'
    }
  },
  {
    id: '18',
    title: 'Athletic Cross-Training Shoes',
    description: 'Versatile cross-training shoes designed for gym workouts and multi-sport activities.',
    category: 'Shoes',
    price: 129,
    discount: 22,
    stock: 95,
    rating: 4.5,
    reviews: 367,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    specifications: {
      'Material': 'Mesh + Synthetic',
      'Support': 'High Arch Support',
      'Weight': '350g per shoe',
      'Size Range': 'US 7-15'
    }
  },
  {
    id: '19',
    title: 'Casual Canvas Shoes',
    description: 'Lightweight canvas shoes perfect for warm weather and casual outings.',
    category: 'Shoes',
    price: 59,
    discount: 35,
    stock: 250,
    rating: 4.2,
    reviews: 521,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&q=80',
    specifications: {
      'Material': '100% Canvas',
      'Sole': 'Rubber',
      'Weight': '220g per shoe',
      'Size Range': 'US 5-14'
    }
  },

  // Beauty (4)
  {
    id: '20',
    title: 'Advanced Skincare Serum',
    description: 'Professional-grade vitamin C serum with hyaluronic acid for brightening and hydration.',
    category: 'Beauty',
    price: 48,
    discount: 20,
    stock: 300,
    rating: 4.5,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',
    specifications: {
      'Volume': '30ml',
      'Type': 'Serum',
      'Skin Type': 'All Skin Types',
      'Key Ingredient': 'Vitamin C, Hyaluronic Acid'
    }
  },
  {
    id: '21',
    title: 'Moisturizing Face Cream',
    description: 'Rich and nourishing face cream with natural ingredients, suitable for all seasons.',
    category: 'Beauty',
    price: 42,
    discount: 15,
    stock: 280,
    rating: 4.3,
    reviews: 756,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',
    specifications: {
      'Volume': '50ml',
      'Type': 'Cream',
      'Skin Type': 'Dry to Normal',
      'Texture': 'Lightweight'
    }
  },
  {
    id: '22',
    title: 'Professional Hair Growth Shampoo',
    description: 'Strengthening shampoo formulated to reduce hair fall and promote healthy growth.',
    category: 'Beauty',
    price: 18,
    discount: 25,
    stock: 400,
    rating: 4.2,
    reviews: 1024,
    image: 'https://images.unsplash.com/photo-1583391733981-72233de1923e?w=500&q=80',
    specifications: {
      'Volume': '250ml',
      'Type': 'Shampoo',
      'Hair Type': 'All Hair Types',
      'Key Ingredient': 'Biotin, Keratin'
    }
  },
  {
    id: '23',
    title: 'Luxe Lipstick Palette',
    description: 'Set of 12 premium lipsticks with long-lasting color and comfortable wear.',
    category: 'Beauty',
    price: 65,
    discount: 30,
    stock: 180,
    rating: 4.6,
    reviews: 623,
    image: 'https://images.unsplash.com/photo-1596150915169-48330244bee0?w=500&q=80',
    specifications: {
      'Quantity': '12 Shades',
      'Finish': 'Matte & Satin',
      'Longevity': '12+ hours',
      'Cruelty-Free': 'Yes'
    }
  },

  // Accessories (4)
  {
    id: '24',
    title: 'Premium Leather Wallet',
    description: 'Handcrafted leather wallet with RFID protection, multiple card slots, and coin pouch.',
    category: 'Accessories',
    price: 79,
    discount: 18,
    stock: 150,
    rating: 4.4,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1520253455382-a36e2e7b9377?w=500&q=80',
    specifications: {
      'Material': 'Premium Leather',
      'RFID Protection': 'Yes',
      'Card Slots': '8',
      'Dimensions': '10 x 8 x 2 cm'
    }
  },
  {
    id: '25',
    title: 'Smart Watch Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.',
    category: 'Accessories',
    price: 199,
    discount: 28,
    stock: 85,
    rating: 4.5,
    reviews: 628,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    specifications: {
      'Display': 'AMOLED 1.4"',
      'Battery Life': '7 days',
      'Water Resistance': '50m',
      'Compatibility': 'iOS & Android'
    }
  },
  {
    id: '26',
    title: 'Stainless Steel Watch',
    description: 'Elegant stainless steel watch with minimalist design, suitable for all occasions.',
    category: 'Accessories',
    price: 149,
    discount: 22,
    stock: 120,
    rating: 4.4,
    reviews: 534,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=80',
    specifications: {
      'Case Material': 'Stainless Steel',
      'Movement': 'Quartz',
      'Water Resistance': '30m',
      'Band': 'Adjustable Metal'
    }
  },
  {
    id: '27',
    title: 'Sunglasses UV Protection',
    description: 'Stylish sunglasses with 100% UV protection and anti-glare lenses.',
    category: 'Accessories',
    price: 129,
    discount: 35,
    stock: 200,
    rating: 4.3,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    specifications: {
      'UV Protection': '100% UVA/UVB',
      'Lens Type': 'Polarized',
      'Frame Material': 'Acetate',
      'Style': 'Oversized'
    }
  },

  // Home Appliances (3)
  {
    id: '28',
    title: 'Smart Coffee Maker',
    description: 'Wi-Fi enabled coffee maker with programmable brew times and app control.',
    category: 'Home Appliances',
    price: 189,
    discount: 25,
    stock: 60,
    rating: 4.6,
    reviews: 389,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&q=80',
    specifications: {
      'Capacity': '1.8L',
      'Programmable': 'Yes',
      'App Control': 'iOS & Android',
      'Power': '1000W'
    }
  },
  {
    id: '29',
    title: 'Ultra-Quiet Air Purifier',
    description: 'HEPA filter air purifier with whisper-quiet operation and smart sensor technology.',
    category: 'Home Appliances',
    price: 279,
    discount: 18,
    stock: 45,
    rating: 4.5,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80',
    specifications: {
      'HEPA Filter': 'Yes',
      'Coverage Area': '350 sq ft',
      'Noise Level': '22-56 dB',
      'Smart Sensor': 'Yes'
    }
  },
  {
    id: '30',
    title: 'Cordless Stick Vacuum',
    description: 'Lightweight cordless vacuum cleaner with powerful suction and 40-minute runtime.',
    category: 'Home Appliances',
    price: 399,
    discount: 15,
    stock: 35,
    rating: 4.4,
    reviews: 721,
    image: 'https://images.unsplash.com/photo-1584589180974-6b6b5b12e844?w=500&q=80',
    specifications: {
      'Runtime': '40 minutes',
      'Suction Power': '20kPa',
      'Battery': 'Lithium-ion',
      'Weight': '2.3 kg'
    }
  }
]
