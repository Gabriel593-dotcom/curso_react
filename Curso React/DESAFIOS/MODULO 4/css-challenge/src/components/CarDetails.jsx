import carDetailsStyle from "./CarDetails.module.css";
import { useState } from "react";

const CarDetails = () => {
  const LIST_CARS = [
    { id: 1, brand: "GM", model: "Chrevrolet Corvette", combustion: true },
    { id: 1, brand: "Ford", model: "Ford GT", combustion: true },
    { id: 1, brand: "Tesla", model: "Cybertruck", combustion: false },
  ];

  const [cars] = useState(LIST_CARS);

  return (
    <div className={carDetailsStyle.component}>
      {cars.map((car) => (
        <div className={carDetailsStyle.car}>
          <h2 className={carDetailsStyle.model_brand}>
            {car.model} - {car.brand}
          </h2>
          <div
            className={`${carDetailsStyle.type} 
              ${
                car.combustion
                  ? carDetailsStyle.combustion
                  : carDetailsStyle.eletric
              }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
