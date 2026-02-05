// src/data/hotels.ts

export interface Room {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    amenities: string[];
  }
  
  export interface Hotel {
    id: string;
    name: string;
    location: string;
    description: string;
    image: string;
    stars: number;
    tags: string[];
    rooms: Room[];
  }
  
  export const HOTELS: Hotel[] = [
    {
      id: "grand-millennium",
      name: "Grand Millennium Kuala Lumpur",
      location: "Kuala Lumpur, Malaysia",
      description: "Luxury in the heart of KL with stunning KLCC views",
      image: "/assets/gallery/image1.jpg",
      stars: 5,
      tags: ["Free WiFi", "Swimming Pool"],
      rooms: [
        {
          id: "deluxe-room",
          name: "Deluxe King Room",
          price: "$200",
          description: "A spacious room with a king-size bed and city views.",
          image: "/assets/gallery/image1.jpg",
          amenities: ["King Bed", "Minibar", "AC"]
        },
        {
          id: "executive-suite",
          name: "Executive Suite",
          price: "$450",
          description: "Premium suite with separate living area.",
          image: "/assets/gallery/image2.jpg",
          amenities: ["Bathtub", "Kitchenette", "Free Breakfast"]
        }
      ]
    },
  
    {
      id: "hilton-kl",
      name: "Hilton Kuala Lumpur",
      location: "Kuala Lumpur, Malaysia",
      description: "Modern luxury hotel near KL Sentral.",
      image: "/assets/gallery/image2.jpg",
      stars: 5,
      tags: ["Spa", "Gym"],
      rooms: [
        {
          id: "hilton-deluxe",
          name: "Deluxe Room",
          price: "$180",
          description: "Comfortable deluxe room with modern design.",
          image: "/assets/gallery/image2.jpg",
          amenities: ["WiFi", "TV", "AC"]
        }
      ]
    },
  
    {
      id: "marina-bay",
      name: "Marina Bay Sands",
      location: "Singapore",
      description: "Iconic hotel with rooftop infinity pool.",
      image: "/assets/gallery/image3.jpg",
      stars: 5,
      tags: ["Infinity Pool", "Sky View"],
      rooms: [
        {
          id: "sky-room",
          name: "Sky View Room",
          price: "$500",
          description: "Amazing skyline view room.",
          image: "/assets/gallery/image3.jpg",
          amenities: ["Pool Access", "King Bed"]
        }
      ]
    },
  
    {
      id: "dubai-burj",
      name: "Burj Al Arab",
      location: "Dubai, UAE",
      description: "World famous 7 star luxury hotel.",
      image: "/assets/gallery/image4.jpg",
      stars: 5,
      tags: ["Luxury", "Private Beach"],
      rooms: [
        {
          id: "royal-suite",
          name: "Royal Suite",
          price: "$1200",
          description: "Ultra luxury royal suite.",
          image: "/assets/gallery/image4.jpg",
          amenities: ["Butler", "Private Pool"]
        }
      ]
    },
  
    {
      id: "cox-resort",
      name: "Cox Beach Resort",
      location: "Cox's Bazar, Bangladesh",
      description: "Beachfront resort with sea view.",
      image: "/assets/gallery/image5.jpg",
      stars: 4,
      tags: ["Sea View", "Breakfast"],
      rooms: [
        {
          id: "sea-deluxe",
          name: "Sea View Deluxe",
          price: "$120",
          description: "Enjoy beach view from balcony.",
          image: "/assets/gallery/image5.jpg",
          amenities: ["Balcony", "AC"]
        }
      ]
    },
  
    {
      id: "sajek-resort",
      name: "Sajek Valley Resort",
      location: "Sajek, Bangladesh",
      description: "Cloud view hill resort.",
      image: "/assets/gallery/image6.jpg",
      stars: 4,
      tags: ["Hill View", "Nature"],
      rooms: [
        {
          id: "hill-cottage",
          name: "Hill Cottage",
          price: "$90",
          description: "Cozy cottage in the hills.",
          image: "/assets/gallery/image6.jpg",
          amenities: ["Mountain View"]
        }
      ]
    },
  
    {
      id: "bangkok-palace",
      name: "Bangkok Palace Hotel",
      location: "Bangkok, Thailand",
      description: "Affordable luxury in Bangkok.",
      image: "/assets/gallery/image7.jpg",
      stars: 4,
      tags: ["City Center"],
      rooms: [
        {
          id: "standard",
          name: "Standard Room",
          price: "$80",
          description: "Budget friendly room.",
          image: "/assets/gallery/image7.jpg",
          amenities: ["WiFi"]
        }
      ]
    },
  
    {
      id: "tokyo-inn",
      name: "Tokyo Grand Inn",
      location: "Tokyo, Japan",
      description: "Minimal modern hotel in Tokyo.",
      image: "/assets/gallery/image8.jpg",
      stars: 4,
      tags: ["Metro Nearby"],
      rooms: [
        {
          id: "japan-room",
          name: "Japanese Style Room",
          price: "$150",
          description: "Tatami style room.",
          image: "/assets/gallery/image8.jpg",
          amenities: ["Tatami", "Tea"]
        }
      ]
    },
  
    {
      id: "paris-luxe",
      name: "Paris Luxury Stay",
      location: "Paris, France",
      description: "Romantic stay in Paris.",
      image: "/assets/gallery/image9.jpg",
      stars: 5,
      tags: ["Eiffel View"],
      rooms: [
        {
          id: "romantic-suite",
          name: "Romantic Suite",
          price: "$400",
          description: "Perfect for couples.",
          image: "/assets/gallery/image9.jpg",
          amenities: ["Balcony"]
        }
      ]
    },
  
    {
      id: "newyork-central",
      name: "NY Central Hotel",
      location: "New York, USA",
      description: "Stay in the heart of Manhattan.",
      image: "/assets/gallery/image1.jpg",
      stars: 5,
      tags: ["City View"],
      rooms: [
        {
          id: "central-room",
          name: "Central Room",
          price: "$300",
          description: "Modern NYC room.",
          image: "/assets/gallery/image1.jpg",
          amenities: ["WiFi", "Gym"]
        }
      ]
    }
  ];
  