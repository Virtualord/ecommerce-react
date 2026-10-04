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
  {
    id: 13,
    name: "Studio Microphone",
    price: 5499,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=500&fit=crop",
    description:
      "Cardioid condenser microphone with shock mount and pop filter. Broadcast-clear voice for podcasts and streaming.",
  },
  {
    id: 14,
    name: "Noise Cancelling Earbuds",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description:
      "True wireless earbuds with active noise cancellation, transparency mode, and a 28-hour charging case.",
  },
  {
    id: 15,
    name: "Gaming Keyboard",
    price: 3799,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    description:
      "Tenkeyless mechanical keyboard with hot-swappable switches and per-key RGB lighting.",
  },
  {
    id: 16,
    name: "Ultrawide Monitor",
    price: 28999,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    description:
      "34-inch curved ultrawide display with QHD resolution, 144Hz refresh rate, and USB-C power delivery.",
  },
  {
    id: 17,
    name: "Portable SSD 1TB",
    price: 7499,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description:
      "Pocket-sized 1TB solid state drive with 1050MB/s transfer speeds and hardware encryption.",
  },
  {
    id: 18,
    name: "Laptop Backpack",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&h=500&fit=crop",
    description:
      "Water-resistant 26L commuter backpack with padded laptop sleeve and hidden anti-theft pockets.",
  },
  {
    id: 19,
    name: "Desk Lamp LED",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Dimmable LED desk lamp with adjustable colour temperature, touch controls, and USB charging port.",
  },
  {
    id: 20,
    name: "Smart LED Bulbs",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop",
    description:
      "Pack of four Wi-Fi smart bulbs with 16 million colours, schedules, and voice assistant support.",
  },
  {
    id: 21,
    name: "Bluetooth Keyboard",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    description:
      "Slim multi-device wireless keyboard that pairs with three devices and switches with one keystroke.",
  },
  {
    id: 22,
    name: "Fitness Tracker Band",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&h=500&fit=crop",
    description:
      "Slim activity band tracking steps, heart rate, and sleep. Two weeks of battery on a single charge.",
  },
  {
    id: 23,
    name: "Tablet 11 inch",
    price: 32999,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
    description:
      "11-inch tablet with a 120Hz laminated display, stylus support, and all-day battery life.",
  },
  {
    id: 24,
    name: "Wireless Headset",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "On-ear wireless headset with plush earcups, 40-hour battery, and a foldable travel design.",
  },
  {
    id: 25,
    name: "Portable Power Bank",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    description:
      "20,000mAh power bank with 65W USB-C output, enough to charge a laptop twice over.",
  },
  {
    id: 26,
    name: "Mechanical Numpad",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop",
    description:
      "Detachable mechanical number pad with hot-swappable switches for spreadsheets and data entry.",
  },
  {
    id: 27,
    name: "Studio Microphone Pro",
    price: 8499,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&h=500&fit=crop",
    description:
      "Large-diaphragm condenser microphone with zero-latency monitoring for vocals, instruments, and voice-over.",
  },
  {
    id: 28,
    name: "HDMI Cable 4K",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop",
    description:
      "Braided 8K-rated HDMI cable with gold-plated connectors and a moulded strain relief built to last.",
  },
  {
    id: 29,
    name: "Noise Isolating Earbuds",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    description:
      "In-ear monitors with silicone tips and passive isolation, tuned for commuting and focused work.",
  },
  {
    id: 30,
    name: "Gaming Monitor 27",
    price: 22499,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    description:
      "27-inch 1440p gaming monitor with 180Hz refresh rate, 1ms response, and adaptive sync.",
  },
  {
    id: 31,
    name: "Wireless Charging Pad",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "15W fast wireless charging pad with a non-slip fabric surface and an indicator that dims at night.",
  },
  {
    id: 32,
    name: "USB-C Docking Station",
    price: 6499,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",

    description:
      "12-in-1 docking station with dual HDMI, gigabit ethernet, and 100W pass-through charging.",
  },
  {
    id: 33,
    name: "Webcam Pro 4K",
    price: 8999,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "4K streaming webcam with auto-framing, a dual-mic array, and a privacy shutter you can actually slide shut.",
  },
  {
    id: 34,
    name: "Retro Game Console",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=500&fit=crop",
    description:
      "Handheld retro console with a 3.5-inch screen, 200+ built-in classics, and a rechargeable battery.",
  },
  {
    id: 35,
    name: "Laptop Sleeve 14",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    description:
      "Water-resistant felt laptop sleeve with a magnetic closure and a soft microfibre lining.",
  },
  {
    id: 36,
    name: "Smart Doorbell",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    description:
      "1080p smart doorbell with two-way audio, motion alerts, and a subscription-free local recording option.",
  },
  {
    id: 37,
    name: "LED Monitor Light Bar",
    price: 3199,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop",
    description:
      "Screen-mounted light bar with asymmetric optics that light your desk without glaring on the display.",
  },
  {
    id: 38,
    name: "Portable SSD 2TB",
    price: 12499,
    image:
      "https://images.unsplash.com/photo-1555617766-c94804975da3?w=500&h=500&fit=crop",
    description:
      "Two terabytes of pocket storage with a shockproof shell, ideal for backing up a camera roll.",
  },
  {
    id: 39,
    name: "Wireless Trackpad",
    price: 4299,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
    description:
      "Multi-touch wireless trackpad with haptic feedback, gesture support, and USB-C fast charging.",
  },
  {
    id: 40,
    name: "Smart Home Hub",
    price: 7999,
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&h=500&fit=crop",
    description:
      "Central smart home hub that pairs your lights, sensors, and locks over Matter and Thread.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}