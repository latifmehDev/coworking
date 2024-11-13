import React from 'react';
import Carousel from '../../carousel/carousel';
import './roomcard.css';
import Link from 'next/link';

interface RoomProps {
  room: Room;
}

interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {label}
  </span>
);

const images = [
  { image: "/Raum.jpeg" },
  { image: "/Raum.jpeg" },
  { image: "/Raum.jpeg" }
];

const RoomCard: React.FC<RoomProps> = ({ room }) => {
  return (
    /* Passen Sie die Klasse in Ihrer Komponente an, wenn Sie Inline-Styling verwenden */
    <Link href={`/pages/details/${room.id}`} legacyBehavior>
      <div className="card">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg m-2 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <Carousel data={images} />
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{room.name}</h5>
            <p className="text-base font-normal text-gray-700 dark:text-gray-400 mb-3">
              {room.location}
            </p>
            <Badge label={room.isNew ? 'Neu' : 'Gewerblicher Vermieter'} />
            <Badge label={`⭐ ${room.rating}`} />
            <Badge label={`CHF ${room.price} / h`} />
            {/* Weitere Elemente... */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;