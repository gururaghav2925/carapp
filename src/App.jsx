import React, { useState } from "react";
import "./css/App.css";

const carsData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 2500000,
    image: "/src/img/toyota-camry.jpeg",
    specs: "2.5L engine, 203 hp, Automatic, 34 MPG",
  },
  {
    id: 2,
    make: "Lamborghini",
    model: "Aventador",
    year: 2018,
    price: 12000000,
    image: "/src/img/Lamborghini_Aventador.jpeg",
    specs: "6.5L V12 engine, 730 hp, AWD, 15 MPG",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 3500000,
    image: "/src/img/ford_mustang.jpeg",
    specs: "5.0L V8, 450 hp, Manual, 20 MPG",
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 4500000,
    image: "/src/img/tesla-model 3.jpeg",
    specs: "Electric, Dual Motor, 353-mile range, AWD",
  },
  {
    id: 5,
    make: "Pagani",
    model: "Huayra Roadster BC",
    year: 2022,
    price: 35000000,
    image: "/src/img/pagani-huayra-bc-roadster.jpeg",
    specs: "6.0L Twin-turbo V12, 800 hp, RWD, 12 MPG",
  },
  {
    id: 6,
    make: "Ferrari",
    model: "296",
    year: 2021,
    price: 14000000,
    image: "/src/img/ferrari 296 .jpeg",
    specs: "3.0L Twin-turbo V6, 818 hp, AWD, 22 MPG",
  },
  {
    id: 7,
    make: "Tesla",
    model: "Cybertruck",
    year: 2025,
    price: 9000000,
    image: "/src/img/tesla-cybertruck.jpeg",
    specs: "Electric, Dual Motor, 500-mile range, AWD",
  },
];

export default function CarDealershipApp() {
  const [filter, setFilter] = useState("All");
  const [openDetailsId, setOpenDetailsId] = useState(null);

  const filteredCars =
    filter === "All" ? carsData : carsData.filter((car) => car.make === filter);

  const uniqueMakes = ["All", ...new Set(carsData.map((car) => car.make))];

  const toggleDetails = (id) => {
    setOpenDetailsId(openDetailsId === id ? null : id);
  };
  const purchaseCar = (id) => {
    const car = carsData.find((car) => car.id === id);
    if (car) {
      alert(`You have purchased the ${car.make} ${car.model} for Rs ${car.price.toLocaleString()}`);
    }
  }

  return (
    <div className="app-container">
      <h1>Madesh Car Dealership</h1>

      <div className="filter-section">
        <label className="mr-2">Filter by Make:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {uniqueMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div className="car-list">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="car-image"
            />
            <h2>
              {car.year} {car.make} {car.model}
            </h2>
            <p>Price: Rs {car.price.toLocaleString()}</p>
            <button onClick={() => toggleDetails(car.id)}>
              {openDetailsId === car.id ? "Hide Details" : "View Details"}
            </button><br/>
            <button onClick={()=> purchaseCar(car.id)} className="purchase-button">
              {openDetailsId === car.id ? "Purchase" : "Buy Now"}
            </button>

            {openDetailsId === car.id && (
              <div className="car-details">
                <h4>Specifications:</h4>
                <p>{car.specs}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
