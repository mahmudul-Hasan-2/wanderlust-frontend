import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import { Calendar, MapPin } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:9000/destinations/${id}`);
  const destination = await res.json();
  console.log(destination);

  return (
    <div className="w-full space-y-5">
      <div className="flex items-center justify-end gap-4">
        <DeleteModal destination={destination}></DeleteModal>
        <EditModal destination={destination}></EditModal>
      </div>

      <div>
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          width={400}
          height={300}
          className="w-full h-[500px] rounded-xl object-cover bg-gray-200"
        />
      </div>
      <div>
        <span className="flex items-center gap-2">
          <MapPin></MapPin>
          {destination.country}
        </span>
      </div>
      <div>
        <span>$ {destination.price}</span>
      </div>
      <div>
        <Chip color="success">{destination.category}</Chip>
      </div>
      <div></div>
      <div className="flex items-center ">
        <h2 className="text-2xl font-bold">{destination.destinationName}</h2>
      </div>
      <div>
        <span className="flex items-center gap-2">
          <Calendar></Calendar> {destination.duration}
        </span>
      </div>
      <div>
        <span>{destination.departureDate}</span>
      </div>
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">Overview</h2>
        <p>{destination.description}</p>
      </div>
    </div>
  );
};

export default DestinationDetails;
