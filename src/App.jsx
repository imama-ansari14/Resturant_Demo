import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Star,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Plus,
  Minus,
  Trash2,
  ChevronDown,
  ArrowRight,
  Award,
  Users,
  Utensils,
} from "lucide-react";

const IceSpiceRestaurant = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); 
  const [orderPlaced, setOrderPlaced] = useState(false); 
  const heroImages = [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&q=80",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Truffle Mushroom Bruschetta",
      category: "starters",
      price: 12.99,
      description:
        "Crispy artisan bread topped with sautéed wild mushrooms, fresh herbs, and premium truffle oil",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Spicy Tuna Tartare",
      category: "starters",
      price: 16.99,
      description:
        "Fresh sashimi-grade tuna with avocado, crispy wontons, sesame, and spicy mayo",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Lobster Bisque",
      category: "starters",
      price: 14.99,
      description:
        "Creamy lobster soup with cognac, fresh herbs, and crusty bread",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Grilled Wagyu Steak",
      category: "mains",
      price: 45.99,
      description:
        "Premium Japanese A5 Wagyu with roasted vegetables, truffle mashed potatoes, and red wine reduction",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Lobster Risotto",
      category: "mains",
      price: 38.99,
      description:
        "Creamy arborio rice with fresh Maine lobster, saffron, and parmesan",
      image:
        "https://images.unsplash.com/photo-1767415742886-2cc678bc4ba5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Pan-Seared Salmon",
      category: "mains",
      price: 32.99,
      description:
        "Wild-caught Atlantic salmon with lemon butter sauce, asparagus, and herb rice",
      image:
        "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 7,
      name: "Lamb Chops",
      category: "mains",
      price: 42.99,
      description:
        "Herb-crusted New Zealand lamb with mint jelly, roasted potatoes, and seasonal vegetables",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 8,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: 9.99,
      description:
        "Warm Belgian chocolate cake with molten center, vanilla bean ice cream, and fresh berries",
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 9,
      name: "Crème Brûlée",
      category: "desserts",
      price: 8.99,
      description:
        "Classic French vanilla custard with caramelized sugar crust and fresh mint",
      image:
        "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 10,
      name: "Tiramisu",
      category: "desserts",
      price: 10.99,
      description:
        "Traditional Italian dessert with espresso-soaked ladyfingers, mascarpone, and cocoa",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 11,
      name: "Signature Mojito",
      category: "drinks",
      price: 11.99,
      description: "Fresh mint, lime, premium rum, and sparkling water",
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 12,
      name: "Iced Matcha Latte",
      category: "drinks",
      price: 6.99,
      description: "Premium Japanese matcha with oat milk and honey",
      image:
        "https://images.unsplash.com/photo-1749280447307-31a68eb38673?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      name: "Espresso Martini",
      category: "drinks",
      price: 13.99,
      description: "Vodka, coffee liqueur, fresh espresso, and vanilla",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 14,
      name: "Karahi Paneer",
      category: "mains",
      price: 18.99,
      description:
        "Cottage cheese cooked in spicy tomato gravy with bell peppers and aromatic spices",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 15,
      name: "Chicken Biryani",
      category: "mains",
      price: 16.99,
      description:
        "Fragrant basmati rice layered with tender chicken, aromatic spices, and saffron",
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 16,
      name: "Nihari",
      category: "mains",
      price: 19.99,
      description:
        "Slow-cooked beef stew with bone marrow in rich, spicy gravy with ginger and garnishes",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 17,
      name: "Haleem",
      category: "mains",
      price: 14.99,
      description:
        "Traditional Pakistani dish of meat, lentils, and wheat slow-cooked to perfection",
      image:
        "https://images.unsplash.com/photo-1512010151537-2cf5c638ad51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 18,
      name: "Seekh Kabab",
      category: "starters",
      price: 12.99,
      description:
        "Spiced minced meat skewers grilled to perfection with herbs and traditional spices",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 19,
      name: "Chapli Kabab",
      category: "starters",
      price: 13.99,
      description:
        "Peshawar-style flat minced meat patties with tomatoes, onions, and green chilies",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 20,
      name: "Chicken Tikka",
      category: "starters",
      price: 14.99,
      description:
        "Marinated chicken pieces grilled in tandoor with yogurt and aromatic spices",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 21,
      name: "Gulab Jamun",
      category: "desserts",
      price: 6.99,
      description:
        "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup",
      image:
        "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    },
  ];

  const reviews = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      text: "Absolutely stunning experience! The Wagyu steak was cooked to perfection. The ambiance is elegant and the service impeccable.",
      avatar: "https://i.pravatar.cc/150?img=5",
      date: "Jan 15, 2026",
    },
    {
      name: "James Chen",
      rating: 4,
      text: "Great atmosphere and delicious food. The lobster risotto is a must-try. Will definitely return with friends!",
      avatar: "https://i.pravatar.cc/150?img=12",
      date: "Jan 10, 2026",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "Every dish was a masterpiece. The presentation and flavors are outstanding. Best fine dining in the city!",
      avatar: "https://i.pravatar.cc/150?img=9",
      date: "Jan 8, 2026",
    },
    {
      name: "Michael Thompson",
      rating: 4,
      text: "Exceptional service and innovative menu. The chocolate lava cake is divine. Highly recommend for special occasions.",
      avatar: "https://i.pravatar.cc/150?img=13",
      date: "Jan 5, 2026",
    },
  ];

  const categories = [
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "starters", name: "Starters", icon: "🥗" },
    { id: "mains", name: "Main Course", icon: "🥩" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "drinks", name: "Drinks", icon: "🍹" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-zinc-950/95 backdrop-blur-xl shadow-2xl border-b border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-rose-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                  <span className="text-2xl">❄️</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 bg-clip-text text-transparent">
                  Ice & Spice
                </span>
                <div className="flex items-center space-x-1 text-xs text-zinc-400">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>4.1 Rating</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#menu"
                className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#home"
                className="block text-zinc-300 hover:text-white transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#menu"
                className="block text-zinc-300 hover:text-white transition-colors font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                className="block text-zinc-300 hover:text-white transition-colors font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block text-zinc-300 hover:text-white transition-colors font-medium"
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 bg-zinc-800 rounded-lg"
              >
                <span>Cart</span>
                <span className="bg-rose-500 px-2 py-1 rounded-full text-xs">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === heroImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-zinc-900/50 backdrop-blur-md rounded-full border border-zinc-700">
            <span className="text-sm text-zinc-300">
              ✨ Premium Fine Dining Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Where{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 bg-clip-text text-transparent">
              Ice
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Spice
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience culinary excellence where cooling elegance meets fiery
            passion. Every dish tells a story.
          </p>

          <div className="flex items-center justify-center space-x-2 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-7 h-7 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star
              className="w-7 h-7 text-yellow-400"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <span className="ml-3 text-2xl font-bold text-white">4.1</span>
            <span className="text-zinc-400">/ 5.0</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 border border-zinc-700 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-zinc-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                12+
              </div>
              <div className="text-zinc-400">Awards Won</div>
            </div>
            <div className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-zinc-400">Happy Customers</div>
            </div>
            <div className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-rose-400" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-zinc-400">Signature Dishes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-zinc-800 rounded-full">
              <span className="text-sm text-blue-400 font-semibold">
                CULINARY EXCELLENCE
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Signature Menu
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Crafted with passion, served with excellence. Each dish is a
              masterpiece.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        ${item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-zinc-800 rounded-full">
              <span className="text-sm text-rose-400 font-semibold">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-10 h-10 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star
                className="w-10 h-10 text-yellow-400"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            </div>
            <p className="text-zinc-400 text-xl">
              Rated 4.1 out of 5 stars by 1,247+ customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500 rounded-t-2xl"></div>

                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500/50 group-hover:border-blue-500 transition-colors"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-white mb-1">
                      {review.name}
                    </h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-zinc-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed text-base italic">
                  "{review.text}"
                </p>

                <div className="absolute bottom-4 right-4 text-6xl text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-zinc-800 rounded-full">
              <span className="text-sm text-cyan-400 font-semibold">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Visit Us Today
            </h2>
            <p className="text-zinc-400 text-xl">
              We're here to serve you excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-white">
                      Address
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      123 Gourmet Avenue
                      <br />
                      Culinary District, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-br from-rose-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-white">
                      Phone
                    </h3>
                    <p className="text-zinc-400 text-lg">+1 (555) 123-4567</p>
                    <p className="text-zinc-500 text-sm mt-1">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-white">
                      Opening Hours
                    </h3>
                    <div className="text-zinc-400 text-lg space-y-1">
                      <p>Monday - Friday: 11:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 10:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 lg:h-auto rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">❄️</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-rose-400 bg-clip-text text-transparent">
                    Ice & Spice
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-zinc-500">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>4.1 Premium Dining</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 mb-4 max-w-md">
                Experience the perfect fusion of cooling elegance and fiery
                passion. Serving authentic Pakistani cuisine with love since
                2020.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">123 Gourmet Avenue, NY 10001</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Mon-Sun: 10 AM - 12 AM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-zinc-500 text-sm">
              &copy; 2026 Ice & Spice Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsCheckoutOpen(false)}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-zinc-950 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800 shadow-2xl">
              {!orderPlaced ? (
                <>
                  {/* Checkout Header */}
                  <div className="flex justify-between items-center p-6 border-b border-zinc-800">
                    <h2 className="text-3xl font-bold">Checkout</h2>
                    <button
                      onClick={() => setIsCheckoutOpen(false)}
                      className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Order Summary */}
                  <div className="p-6 border-b border-zinc-800">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center bg-zinc-900 p-3 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-semibold text-sm">
                                {item.name}
                              </p>
                              <p className="text-xs text-zinc-400">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <p className="font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between text-zinc-400">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-zinc-400">
                        <span>Tax (10%)</span>
                        <span>${(totalPrice * 0.1).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-zinc-400">
                        <span>Delivery Fee</span>
                        <span>$5.00</span>
                      </div>
                      <div className="border-t border-zinc-700 pt-2 flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-cyan-400">
                          ${(totalPrice * 1.1 + 5).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Details Form */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Delivery Details</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Delivery Address
                        </label>
                        <textarea
                          placeholder="Street address, city, zip code"
                          rows="3"
                          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                          required
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Special Instructions (Optional)
                        </label>
                        <textarea
                          placeholder="Any special requests?"
                          rows="2"
                          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        ></textarea>
                      </div>

                      {/* Payment Method */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Payment Method
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3 p-3 bg-zinc-900 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
                            <input
                              type="radio"
                              name="payment"
                              value="cod"
                              className="w-4 h-4"
                              defaultChecked
                            />
                            <span>💵 Cash on Delivery</span>
                          </label>
                          <label className="flex items-center space-x-3 p-3 bg-zinc-900 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
                            <input
                              type="radio"
                              name="payment"
                              value="card"
                              className="w-4 h-4"
                            />
                            <span>💳 Credit/Debit Card</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setOrderPlaced(true);
                          setCart([]);
                        }}
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                      >
                        Place Order - ${(totalPrice * 1.1 + 5).toFixed(2)}
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                /* Order Success */
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl">✅</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Order Placed Successfully!
                  </h2>
                  <p className="text-zinc-400 mb-6">
                    Your order has been received and is being prepared. We'll
                    deliver it within 30-45 minutes.
                  </p>
                  <p className="text-sm text-zinc-500 mb-8">
                    Order ID: #ICE{Math.floor(Math.random() * 10000)}
                  </p>
                  <button
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setOrderPlaced(false);
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold transition-all transform hover:scale-105"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-950 shadow-2xl border-l border-zinc-800">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950">
                <div>
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <p className="text-sm text-zinc-400">{totalItems} items</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center text-zinc-400 py-20">
                    <ShoppingCart className="w-20 h-20 mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-medium">Your cart is empty</p>
                    <p className="text-sm text-zinc-500 mt-2">
                      Add some delicious items to get started!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-all"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold mb-1 truncate">
                              {item.name}
                            </h3>
                            <p className="text-cyan-400 font-semibold text-lg">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors flex-shrink-0"
                          >
                            <Trash2 className="w-5 h-5 text-rose-400" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3 bg-zinc-800 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-zinc-700 rounded transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-10 text-center font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-zinc-700 rounded transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-bold text-xl">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-zinc-800 p-6 bg-zinc-900 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Tax (10%)</span>
                      <span>${(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-zinc-700 pt-2 flex justify-between items-center text-2xl font-bold">
                      <span>Total</span>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        ${(totalPrice * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {/* <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                  </button> */}
                  <button
                    onClick={() => {
                      setIsCheckoutOpen(true);
                      setIsCartOpen(false);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IceSpiceRestaurant;
