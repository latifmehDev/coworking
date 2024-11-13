// Diese Informationen werden von der roomcard.tsx konsumiert.
// 

interface Room {
  id: number;
  name: string;
  location: string;
  price: number;
  rating?: number;
  imageURLs?: ImageURL[];
  isFavorite?: boolean;
  isNew?: boolean;
  capacity?: number;
  printer?: boolean;
  whiteboard?: boolean;
  internet?: string;
  availableFrom?: Date;
  availableTo?: Date;
  reviews?: Review[];
}