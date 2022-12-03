export type ClassNameType = {className: string};

export type CityTabObjectType = {cityName: string; href: string};

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


export type PlaceOfferObjectType = {
  id: string;
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


export type ReviewObjectType = {
  author: string;
  ratingStars: string;
  text: string;
  dateText: string;
  dateTime: string;
};

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
