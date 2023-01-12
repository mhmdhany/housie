import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";
import House from "./House";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  // Check Loading
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  // Check if no items found
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl mt-48 text-gray-400">
        Sorry, nothing found
      </div>
    );
  }
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {/* Navigating to House Details */}
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
