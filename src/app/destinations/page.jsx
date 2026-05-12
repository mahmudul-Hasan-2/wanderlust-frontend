import TravelCard from "@/components/TravelCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:9000/destinations");
  const destination = await res.json();
  return (
    <div className="space-y-10 w-full">
      <div>
        <Link href={"/add-destination"}>
          <Button>Add New Destination</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {destination.map((destination) => (
          <TravelCard
            key={destination._id}
            destination={destination}
          ></TravelCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
