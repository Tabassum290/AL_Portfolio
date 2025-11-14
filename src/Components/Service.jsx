import React from "react";
const Service = () => {
  const cards = [
    {
      id: 1,
      title: "New Movie Released!",
      desc: "Click the button to watch on Jetflix app.",
      img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      id: 2,
      title: "Action Movie Premiere",
      desc: "Experience the thrill on Jetflix.",
      img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      id: 3,
      title: "Comedy Special",
      desc: "Laugh out loud with the new comedy.",
      img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      id: 4,
      title: "Documentary Release",
      desc: "Learn new things with this documentary.",
      img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
  ];

  return (
   <div id='service'>
    <h1 className="text-center font-bold text-3xl underline uppercase text-purple-700">Our Service </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row"
        >
          <figure className="md:w-1/3">
            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
          </figure>
          <div className="card-body md:w-2/3">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.desc}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Service;
