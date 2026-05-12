import Image from "next/image";
import React from "react";
import { Calendar } from "@gravity-ui/icons";
import { MapPin } from "@gravity-ui/icons";
import Link from "next/link";
import { Button } from "@heroui/react";

const TravelCard = ({ destination }) => {
  return (
    <div className="space-y-4 w-full">
      <div>
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          width={200}
          height={200}
          className="w-full h-50"
        ></Image>
      </div>
      <div>
        <span className="flex items-center gap-2">
          <MapPin></MapPin>
          {destination.country}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{destination.destinationName}</h2>
        <div className="flex items-end gap-2">
          {" "}
          <h2 className="text-2xl font-bold">${destination.price}</h2>
          <span className="text-gray-400">/Person</span>
        </div>
      </div>
      <div>
        <span className="flex items-center gap-2">
          <Calendar></Calendar> {destination.duration}
        </span>
      </div>

      <Link href={`destinations/${destination._id}`}>
        <Button>View Details</Button>
      </Link>
    </div>
  );
};

export default TravelCard;
