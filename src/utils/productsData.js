// Product data for the Amazon clone
export const productsData = [
  {
    id: 1,
    title: "Apple AirPods Pro",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 12847,
    image: "https://m.media-amazon.com/images/I/81KkrQWEHIL._AC_SL1500_.jpg",
    category: "Electronics",
    description: "Active Noise Cancelling with Transparency Mode",
    isAmazonChoice: true,
    inStock: true,
    freeShipping: true,
  },
  {
    id: 2,
    title: "Echo Dot (5th Gen)",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviewCount: 8523,
    image: "https://m.media-amazon.com/images/I/61u48FEs3xL._AC_SL1000_.jpg",
    category: "Smart Home",
    description: "Smart speaker with bigger vibrant sound",
    isAmazonChoice: false,
    inStock: true,
    freeShipping: true,
  },
  {
    id: 3,
    title: "Kindle Paperwhite",
    price: 139.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 25691,
    image: "https://m.media-amazon.com/images/I/61nBzv5XjBL._AC_SL1000_.jpg",
    category: "Electronics",
    description: "Waterproof with 6.8 display and adjustable warm light",
    isAmazonChoice: true,
    inStock: true,
    freeShipping: true,
  },
];

// Helper function to get discount percentage
export const getDiscountPercentage = (originalPrice, currentPrice) => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};
