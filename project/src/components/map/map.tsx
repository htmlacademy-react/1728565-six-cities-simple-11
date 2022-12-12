import { useRef, useEffect } from 'react';
import { ClassNameType } from '../../types/types';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { OffersType } from '../../types/offers';
import { City } from '../../types/city';

type MapProps = {
  city: City;
  offers: OffersType | null;
  selectedPoints: OffersType | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map(props: MapProps & ClassNameType) {
  const { city, offers, selectedPoints, className } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  map?.setView([city.location.latitude, city.location.longitude], 12);

  useEffect(() => {
    if (map && offers) {
      map.eachLayer((layer) => {
        if (layer instanceof Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            (selectedPoints !== null && selectedPoints.find((selectedPoint) => selectedPoint.id === offer.id ))
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoints]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}
