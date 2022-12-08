import {useRef, useEffect} from 'react';
import { City, ClassNameType, OfferObjectType } from '../../types/types';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: OfferObjectType[];
  selectedPoint: OfferObjectType | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(props: MapProps & ClassNameType) {
  const {city, offers, selectedPoint, className} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.name === selectedPoint.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}
