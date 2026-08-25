const db = require("./db");
const products = [
  {
    name: "Wireless Noise Cancelling Headphones",
    price: 149.99,
  },
  {
    name: "Smart Watch Series X",
    price: 299.99,
  },
  {
    name: "Premium Running Shoes",
    price: 89.99,
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 59.99,
  },
  {
    name: "4K Action Camera",
    price: 199.99,
  },
];

const insertProduct = db.prepare(`
  INSERT INTO products (name, price)
  VALUES (?, ?)
`);

products.forEach((product) => {
  insertProduct.run(
    product.name,
    product.price
  );
});

const videos = [
  {
    productId: 1,
    title: "Wireless Headphones - Product Overview",
    videoUrl: "https://example.com/videos/headphones-overview.mp4",
  },
  {
    productId: 1,
    title: "Wireless Headphones - Sound Test",
    videoUrl: "https://example.com/videos/headphones-sound-test.mp4",
  },
  {
    productId: 2,
    title: "Smart Watch - Features Overview",
    videoUrl: "https://example.com/videos/smartwatch-features.mp4",
  },
  {
    productId: 2,
    title: "Smart Watch - Fitness Tracking Demo",
    videoUrl: "https://example.com/videos/smartwatch-fitness.mp4",
  },
  {
    productId: 3,
    title: "Running Shoes - Product Demo",
    videoUrl: "https://example.com/videos/running-shoes-demo.mp4",
  },
  {
    productId: 4,
    title: "Bluetooth Speaker - Sound Test",
    videoUrl: "https://example.com/videos/speaker-demo.mp4",
  },
  {
    productId: 5,
    title: "4K Action Camera - Adventure Demo",
    videoUrl: "https://example.com/videos/action-camera-demo.mp4",
  },
];

const insertVideo = db.prepare(`
  INSERT INTO videos (
    product_id,
    title,
    video_url
  )
  VALUES (?, ?, ?)
`);

videos.forEach((video) => {
  insertVideo.run(
    video.productId,
    video.title,
    video.videoUrl
  );
});

const eventTypes = [
  "view",
  "click",
  "add_to_cart",
];

const insertEvent = db.prepare(`
  INSERT INTO engagement_events (
    video_id,
    event_type
  )
  VALUES (?, ?)
`);

function getRandomEventType() {
  const random = Math.random();

  if (random < 0.7) {
    return "view";
  }

  if (random < 0.9) {
    return "click";
  }

  return "add_to_cart";
}

for (let videoId = 1; videoId <= 7; videoId++) {
  const numberOfEvents =
    Math.floor(Math.random() * 100) + 50;

  for (let i = 0; i < numberOfEvents; i++) {
    const eventType = getRandomEventType();

    insertEvent.run(
      videoId,
      eventType
    );
  }
}

console.log("Seed data inserted successfully!");