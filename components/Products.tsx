import React from "react";

// Define the type for a product
type Product = {
  name: string;
  category: string;
  active: boolean;
  description: string;
};

// Define a list of products
const shopProductList: Product[] = [
  { name: "Laptop", category: "Electronics", active: false, description: "A high-end laptop" },
  { name: "Shoes", category: "Fashion", active: true, description: "Comfortable running shoes" },
  { name: "Coffee Maker", category: "Appliances", active: false, description: "Brews excellent coffee" },
  { name: "Laptop", category: "Electronics", active: false, description: "A high-end laptop" },
  { name: "Shoes", category: "Fashion", active: true, description: "Comfortable running shoes" },
  { name: "Coffee Maker", category: "Appliances", active: false, description: "Brews excellent coffee" },
  { name: "Laptop", category: "Electronics", active: false, description: "A high-end laptop" },
  { name: "Shoes", category: "Fashion", active: true, description: "Comfortable running shoes" },
  { name: "Coffee Maker", category: "Appliances", active: false, description: "Brews excellent coffee" },
];

const Products = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="xl:w-[70%] md:w-[90%] border p-2 rounded-xl bg-slate-100">
        <form action="" className="flex gap-4 justify-center items-center">
            <input type="text"  className="w-[80%] p-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search by category"/>
            <button className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-blue-600 transition">
              View shop
            </button>
        </form>
      </div>
      <div className="flex items-center justify-center p-5 xl:w-[70%] md:w-[90%]">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Product name</th>
              <th className="border border-gray-300 px-4 py-2">Product category</th>
              <th className="border border-gray-300 px-4 py-2">Active</th>
              <th className="border border-gray-300 px-4 py-2">Product description</th>
              <th className="border border-gray-300 px-4 py-2">Edit</th>
              <th className="border border-gray-300 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {shopProductList.map((product, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.active ? (
                    <span className="text-green-500">Active</span>
                  ) : (
                    <span className="text-red-500">Inactive</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 hover:underline">Edit</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
