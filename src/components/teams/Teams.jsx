import React from "react";
import TeamCard from "../common/TeamCard";

function Teams() {
  const teamsData = [
    {
      id: 1,
      image: "assets/teams/1.png",
      name: "Julian Jameson",
      designation: "Profession",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      id: 2,
      image: "assets/teams/2.png",
      name: "Julian Jameson",
      designation: "Profession",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      id: 3,
      image: "assets/teams/3.png",
      name: "Julian Jameson",
      designation: "Profession",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      id: 4,
      image: "assets/teams/4.png",
      name: "Julian Jameson",
      designation: "Profession",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
  ];
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <div className="py-32">
        <h4 className="pt-8 text-xl font-bold text-primary">Team</h4>
        <h2 className="pt-6 text-7xl font-bold">Our Team</h2>
        <p className="py-8 text-lg text-gray-400 font-light w-7/12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap pb-20">
        <TeamCard data={teamsData} />
      </div>
    </div>
  );
}

export default Teams;
