import { IoMdMap } from 'react-icons/io';

const Card = ({ name, date, img, location, cost, duration, text }) => {
  return (
    <section className="flex flex-col w-full h-full gap-2 p-4 transition duration-300 transform border rounded-lg shadow-lg cursor-pointer border-slate-100 hover:shadow-2xl hover:scale-105 ">
      <div className="relative ">
        <img
          className="object-cover w-full h-80 "
          src={img}
          alt="tour"
        />
        <p className="absolute bottom-0 right-0 p-2 text-white bg-orange-600 rounded-tl-xl ">
          {date}
        </p>
      </div>
      <div className="flex flex-col justify-end h-full gap-2 text-sm">
        <h2>{name}</h2>
        <p className="text-sm">{text}</p>
        <div className="flex justify-between p-2 bg-white rounded-lg shadow-lg">
          <p className="flex items-center gap-2">
            <IoMdMap />
            {location}
          </p>
          <p>From ${cost}</p>
          <p>{duration} Days</p>
        </div>
      </div>
    </section>
  );
};
export default Card;
