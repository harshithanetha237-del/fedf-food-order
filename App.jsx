import React, { useState } from "react";
import "./App.css";

function App() {
  const foodItems = [
    {
      id: 1,
      name: "Pizza",
      price: 250,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },
    {
      id: 2,
      name: "Burger",
      price: 150,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 3,
      name: "Pasta",
      price: 200,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
    },
    {
      id: 4,
      name: "Chicken Biryani",
      price: 299,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
    },
    {
      id: 5,
      name: "French Fries",
      price: 100,
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
    },
    {
      id: 6,
      name: "Ice Cream",
      price: 80,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    },
    {
      id: 7,
      name: "Cup Cake",
      price: 120,
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500",
    },
    {
      id: 8,
      name: "Donut",
      price: 90,
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
    },
    {
      id: 9,
      name: "Chocolate Brownie",
      price: 160,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    },
    {
      id: 10,
      name: "Oreo Shake",
      price: 140,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500",
    },
  ];

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handlePay = () => {
    if (
      customer.name === "" ||
      customer.phone === "" ||
      customer.address === ""
    ) {
      alert("Please enter customer details");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is Empty");
      return;
    }

    alert(
      `Order Placed Successfully!\n\nCustomer: ${customer.name}\nTotal Amount: ₹${total}`
    );

    setCart([]);

    setCustomer({
      name: "",
      phone: "",
      address: "",
    });
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const filteredFoods = foodItems.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">
        🍽 Food Ordering Website
      </h1>

      <input
        type="text"
        placeholder="Search Food..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-box"
      />

      <div className="food-list">
        {filteredFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <img
              src={food.image}
              alt={food.name}
              className="food-image"
            />

            <h3>{food.name}</h3>

            <p>₹{food.price}</p>

            <button
              onClick={() =>
                addToCart(food)
              }
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="customer-box">
        <h2>Customer Details</h2>

        <input
          type="text"
          placeholder="Customer Name"
          value={customer.name}
          onChange={(e) =>
            setCustomer({
              ...customer,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={customer.phone}
          onChange={(e) =>
            setCustomer({
              ...customer,
              phone: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Address"
          value={customer.address}
          onChange={(e) =>
            setCustomer({
              ...customer,
              address: e.target.value,
            })
          }
        />
      </div>

      <div className="cart">
        <h2>🛒 Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No Items Added</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                className="cart-item"
                key={index}
              >
                <span>
                  {item.name} - ₹{item.price}
                </span>

                <button
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <h3>Total Amount: ₹{total}</h3>

            <button
              className="pay-btn"
              onClick={handlePay}
            >
              Pay Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;