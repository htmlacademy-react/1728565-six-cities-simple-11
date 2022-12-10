export type ClassNameType = {className: string};

export type PlaceCardObjectType = {
  id: number;
  placeMark?: string;
  photo: string;
  price: string;
  rating: string;
  info: string;
  placeType: string;
  placeLink: string;
};


export type OfferObjectType = {
  id: string;
  city: string;
  location: Coordinates;
  placeMark?: string;
  photoGallery: string[];
  name: string;
  ratingStars: string;
  ratingNum: string;
  type: string;
  rooms: string;
  capacity: string;
  price: string;
  features: string[];
  owner: {
    photo: string;
    name: string;
    status?: string;
  };
  info: string[];
  reviews: ReviewObjectType[];
};

export type Coordinates = {
  lat: number;
  lng: number;
}

export type ReviewObjectType = {
  author: string;
  ratingStars: string;
  text: string;
  dateText: string;
  dateTime: string;
};

export interface Point extends Coordinates {
  title: string;
}

export type Points = Point [];
