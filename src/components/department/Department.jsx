import React from "react";
import AppointmentCard from "../common/AppointmentCard";

function Department() {
  const appointmentCardData = [
    {
      sale: true,
      id: 1,
      ratings: 4.9,
      image: "assets/appointments/1.png",
      title: "Painless procedure",
      type: "Quick examination",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      noOfSales: 15,
      mrp: 16.48,
      price: 6.48,
      toKnowMoreLink: "#!",
    },
    {
      sale: true,
      id: 2,
      ratings: 4.9,
      image: "assets/appointments/2.png",
      title: "Cancer Care",
      type: "Online Appointment",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      noOfSales: 15,
      mrp: 16.48,
      price: 6.48,
      toKnowMoreLink: "#!",
    },
    {
      sale: true,
      id: 3,
      ratings: 4.9,
      image: "assets/appointments/3.png",
      title: "Best dental surgeons",
      type: "Emergency Case",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      noOfSales: 15,
      mrp: 16.48,
      price: 6.48,
      toKnowMoreLink: "#!",
    },
  ];
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <h4 className="pt-8 text-xl font-bold text-primary">Pratice Advice</h4>
      <h2 className="pt-6 text-7xl font-bold">Our Department</h2>
      <p className="py-8 text-lg text-gray-400 font-light w-8/12">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-wrap justify-between pb-10">
        {appointmentCardData.map((appointmentCard) => (
          <AppointmentCard data={appointmentCard} />
        ))}
      </div>
    </div>
  );
}

export default Department;
