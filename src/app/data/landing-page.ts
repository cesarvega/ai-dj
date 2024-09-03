import { Product } from "@app/data-models";

export const product: Product = {
    id: "123",
    name: "Elevate Tech Essential Sounds - Construction Pack",
    description: "Elevate your music production with over 80 premium samples designed to fuel your creativity in Tech House, Minimal, and Deep House genres.",
    price: {
      current: 10,
      original: 45,
      currency: 'USD'
    },
    features: [
      { title: "Punchy Kicks", description: "Drive your tracks with impactful low-end energy." },
      { title: "Snappy Snares & Claps", description: "Add crisp, defining elements to your rhythm sections." },
      { title: "Groovy Basslines", description: "Fill the dancefloor with deep, resonating bass." },
      { title: "Lush Pads & FX", description: "Create atmospheric textures and transitions that captivate." },
      { title: "Top Loops", description: "Ready-to-go loops that fit seamlessly into your mix." }
    ],
    benefits: [
      { title: "Industry-Standard Quality", description: "These samples are crafted to help you create professional-level tracks that stand out in the competitive electronic music scene." },
      { title: "Versatile & Inspiring", description: "Whether you're working on a new project or stuck in a creative rut, this pack is designed to inspire and push your boundaries." },
      { title: "Unbeatable Value", description: "Originally priced at $45, you can now get this entire pack for just $10—a 75% discount!" }
    ],
    cta: {
      message: "Act Now—This Offer Won’t Last Long!",
      button_label: "Shop Now",
      link: "https://example.com/shop-now"
    },
    imageUrl: "https://example.com/image.jpg",
    category: "soundpack",
    tags: ["tech house", "minimal", "deep house", "samples"],
    colors: [
      { name: "Deep Purple", hex: "#4A148C", rgb: "rgb(74, 20, 140)" },
      { name: "Vivid Pink", hex: "#E91E63", rgb: "rgb(233, 30, 99)" },
      { name: "Bright Pink", hex: "#F50057", rgb: "rgb(245, 0, 87)" },
      { name: "Dark Violet", hex: "#8E24AA", rgb: "rgb(142, 36, 170)" },
      { name: "Black", hex: "#000000", rgb: "rgb(0, 0, 0)" },
      { name: "White", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)" }
    ]
  };
  