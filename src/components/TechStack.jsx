import React from "react";

function TechStack({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-1 mt-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="px-2 py-1 bg-gray-700 text-white rounded-full flex items-center gap-1"
        >
          {item.icon && React.createElement(item.icon)}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;