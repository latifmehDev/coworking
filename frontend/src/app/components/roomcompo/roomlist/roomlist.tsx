'use client';

import React, { useState, useEffect } from 'react';
import RoomCard from '../roomcard/roomcard';
import './roomlist.css';
import SearchBar from '../../searchBar/searchBar';
import Pagination from '../../navigation/pagination/pagination';

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0); // Gesamtanzahl der Elemente
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Zustand für den Suchbegriff

  // Optional: Zustand für die Gesamtanzahl der Elemente, falls von der API zurückgegeben
  // const [totalItems, setTotalItems] = useState<number>(0);

  // Akzeptiert Suchbegriffe
const fetchRooms = async (page: number, search: string) => {
  setIsLoading(true);
  try {
    const response = await fetch(`http://localhost:7071/api/rooms?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`);
    if (response.ok) {
      const jsonResponse = await response.json();
      setRooms(jsonResponse.data);
      setTotalItems(jsonResponse.totalItems); // Aktualisieren der Gesamtanzahl der Elemente
    } else {
      console.error('Fehlerhafte Antwort vom Server', await response.text());
    }
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    fetchRooms(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const handleSearch = (search: string) => {
    setSearchTerm(search); // Speichern des Suchbegriffs für zukünftigen Gebrauch
    setCurrentPage(1); // Zurücksetzen der aktuellen Seite auf 1
    fetchRooms(1, search); // Direktes Übergeben des Suchbegriffs
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <div className="container mx-auto">
        {isLoading ? (
          <div>Lade...</div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
        <div className = 'justify-center'>
          <Pagination
            totalCount={totalItems}
            pageSize={limit}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default RoomList;
