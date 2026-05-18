const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 490,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.Z4lnS-Qs_fNvYrXBIMlOagHaHa%3Fpid%3DApi&f=1&ipt=8c3a8493c55e294e63bf40eaba24b3e2b66f9b759943552e71b6a0bd3acdc00d&ipo=images",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 4299,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.C8Kxd30NmpwZiK0NIouTzwHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=f818416d03ebef47f035ac51a58483ae0cc096b48dd130444e080b0c8ff16283&ipo=images",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 399,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.vGIP-6cC8sgscib9c9sZHgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=0b8d2da1858ccfcd26c77bc51c719b590d334492abead825b37c1e5dd1496bfd&ipo=images",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 7099,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.N4XOTNzyK3A32KCVU4j1MgHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=5db0855a13158c04e41b1455f9742ea1cee96200d9c9e8a1e2cd6236f466fc51&ipo=images",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
    {
    id: 8,
    name: "Game Boy",
    price: 9999,
    image:
      "https://images.unsplash.com/photo-1609603078728-a6bad03e0d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    description:
      "Experience pure retro magic with the classic Nintendo Game Boy, the ultimate 8-bit portable console for gaming history's greatest titles.",
  },
    {
    id: 9,
    name: "BlueTooth Speaker",
    price: 7099,
    image:
      "https://images.unsplash.com/photo-1572183717150-0ca8073a2457?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience massive, room-filling sound on the go with this sleek and ultra-portable Bluetooth speaker.",
  },
    {
    id: 10,
    name: "Type-C cable",
    price: 899,
    image:
      "https://plus.unsplash.com/premium_photo-1759495106759-c709f52a5f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
    description:
      "Keep all your modern devices fully charged and flawlessly connected with this premium, tangle-free USB-C cable.",
  },
    {
    id: 11,
    name: "Game Controller",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Take your gameplay to the next level with this sleek, highly responsive, and totally immersive wireless game controller.",
  },
  {
    id: 12,
    name: "Webcam HD",
    price: 999,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.vOHE8knTTzR3Vmt54UFZdwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=1ed3b7f01b0f629d6ec8ac3ef7917813ca0b7c5386ce9bd98065752080733860&ipo=images",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}