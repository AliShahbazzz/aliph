import React from "react";
import { products } from "../../assets";
import { Link } from "react-router-dom";

export const Category: React.FC<{ name: string }> = ({ name }) => {
  const categoryProducts = products?.filter((p) => p.category === name);

  return (
    <div>
      <h2>{name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {categoryProducts.map((product) => (
          <div key={product.id} className="border p-2">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
