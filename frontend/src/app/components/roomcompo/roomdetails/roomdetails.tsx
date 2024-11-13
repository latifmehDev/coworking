'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams, useParams } from 'next/navigation';
//import { useRouter } from 'next/router';
//import Carousel from 'react-responsive-carousel/lib/ts/components/Carousel';
import './roomdetails.css';
import { RatingStar } from '@/app/assets/icons/star';

interface BadgeProps {
  label: string;
};

const Badge: React.FC<BadgeProps> = ({ label }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {label}
  </span>
);

const images = [
  { image: "/Raum.jpeg" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://picsum.photos/seed/random103/500/500" }
];

const RoomDetails: React.FC = () => {
  // useRouter(), wenn Sie ihn benötigen, für andere Router-Funktionen
  const [pathName] = usePathname();
  const { id } = useParams<{ id: string }>(); // Korrektur hier, um die ID direkt zu extrahieren

  const [roomDetails, setRoomDetails] = useState<Room | null>(null);

  useEffect(() => {
    if (id) { // Verwenden Sie die extrahierte ID direkt
      fetchRoomDetails(id);
    }
  }, [id]); // Abhängigkeit auf [id] aktualisiert

  const fetchRoomDetails = async (roomId: string) => {
    try {
      const response = await fetch(`http://localhost:7071/api/rooms/${roomId}`);
      const jsonResponse = await response.json();

      console.log(jsonResponse);

      if (jsonResponse) {
        setRoomDetails(jsonResponse);
      } else {
        console.error('Fehlerhafte Antwort vom Server', jsonResponse);
      }
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  };

  if (!roomDetails) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 main-content lg:w-3/4 xl:w-2/3">
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold pl-4">{roomDetails.name}</h1>
            <div className="flex items-center md:flex-1 justify-end">
              <RatingStar />
              <span className="text-2xl text-green-500 pr-4">{roomDetails.rating}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1" />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Angaben zum Arbeitsplatz */}
        <div className="md:w-1/2 order-2 md:order-1 md:pr-10 p-4">
          <div className="main-bg-color p-4 my-4 rounded-2xl">
            <div className="text-gray-700">
              <div className="custom-flex-row pt-1 pb-1">
                <div className="flex-1 font-bold">
                  <p>Standort</p>
                </div>
                <div className="flex-1">
                  <p>{roomDetails.location}</p>
                </div>
              </div>
              <div className='custom-flex-row pt-1 pb-1'>
                <div className="flex-1 font-bold">
                  <p>Fläche</p>
                </div>
                <div className="flex-1">
                  <p>{roomDetails.capacity}</p>
                </div>
              </div>
              <div className='custom-flex-row pt-1 pb-1'>
                <div className="flex-1 font-bold">
                  <p>Zugang</p>
                </div>
                <div className="flex-1">
                  <p>08 - 17 Uhr</p>
                </div>
              </div>
              <div className='custom-flex-row pt-1 pb-1'>
                <div className="flex-1 font-bold">
                  <p>Internet</p>
                </div>
                <div className="flex-1">
                  <p>{roomDetails.internet}</p>
                </div>
              </div>
              <div className='custom-flex-row pt-1 pb-1'>
                <div className="flex-1 font-bold">
                  <p>Kapazität</p>
                </div>
                <div className="flex-1">
                  <p>{roomDetails.capacity}</p>
                </div>
              </div>
              <div className='custom-flex-row pt-1 pb-1'>
                <div className="flex-1 font-bold">
                  <p>Drucker</p>
                </div>
                <div className="flex-1">
                  <p>{roomDetails.printer}</p>
                </div>
              </div>
              <div className='flex flex-row pt-2'>
                <div className="flex-1 font-bold">
                  <p>Whiteboard</p>
                </div>
                <div className="flex-1">
                  <p>{roomDetails.whiteboard}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-bg-color rounded-2xl m-0">
            <div className='flex flex-row'>
              <div className="flex-1 flex flex-col justify-center ml-4">
                <h2 className="text-xl font-semibold">Preis</h2>
                <p className="text-green-800">CHF 44 / h</p>
              </div>
              <div className="flex-1">
                <button className="w-full button-color text-white py-5 rounded-2xl hover:bg-teal-500">
                  Jetzt buchen
                </button>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="my-4">
              <h2 className="text-xl font-semibold">Bewertungen</h2>
            </div>
            {
              roomDetails?.reviews?.length > 0 ? (
                roomDetails.reviews.map((review, index) => (
                  <div key={index} className="my-4 border-b-2 border-b-teal-400">
                    <p className="my-2">{review.reviewerName}</p>
                      
                      <div className='flex flex-row'>
                        <div className="flex-1">
                          <p>
                          {review.rateDate ? review.rateDate : 'undefined'} 
                          </p>
                        </div>
                         <div style={{ display: 'flex', alignItems: 'center' }}>
                           {Array.from({ length: review.rating }, (_, index) => <RatingStar key={index} />)}
                        </div>
                      </div>
                    <p className='my-2'>{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>Keine Bewertungen vorhanden.</p>
              )
            }
          </div>
        </div>
        {/* Bilder */}
        <div className="md:w-1/2 p-4 order-1 md:order-2">
          <img src="/raum.jpeg" alt="Großraumbüro" className="w-full rounded-lg" />
          <div className="grid grid-cols-3 gap-4 my-4 rounded-lg">
            <img src="/raum.jpeg" alt="Office View 1" className="w-full rounded-lg" />
            <img src="/raum.jpeg" alt="Office View 2" className="w-full rounded-lg" />
            <img src="/raum.jpeg" alt="Office View 3" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;