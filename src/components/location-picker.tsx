'use client';

import { useState, useMemo, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { GoogleMap, Autocomplete, useLoadScript } from '@react-google-maps/api';
import { Label } from '@radix-ui/react-label';

interface LocationPickerProps {
  setLink?: (link: string) => void;
  setFieldValue?: (name: string, value: string) => void;
}

export const LocationPicker: React.FC<LocationPickerProps> = ({
  setLink,
  setFieldValue,
}) => {
  const [location, setLocation] = useState('');
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  const libraries = useMemo<'places'[]>(() => ['places'], []);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDYADJ_F4v9gfakzSyvks2Ez8jGff7Lnlo',
    libraries,
  });

  const mapOptions = {
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
  };

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
    setMap(map);
  };

  const onPlaceChanged = () => {
    if (selectedPlace) {
      const place = selectedPlace;
      if (place.formatted_address) {
        setLocation(place.formatted_address);
      }
      if (place.geometry?.location && map) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-md border bg-muted">
        Loading map...
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="location">Location</Label>
      <>
        <Autocomplete
          onLoad={(autocomplete) => {
            autocomplete.addListener('place_changed', () => {
              const place = autocomplete.getPlace();
              setSelectedPlace(place);
              if (place.formatted_address) {
                setLocation(place.formatted_address);
              }
            });
          }}
          onPlaceChanged={onPlaceChanged}
          className="z-10"
        >
          <Input
            id="location"
            placeholder="Search for location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Autocomplete>
        <div className="mt-2 h-[400px] w-full rounded-md border">
          <GoogleMap
            options={mapOptions}
            zoom={14}
            center={{ lat: 40.7128, lng: -74.006 }}
            mapContainerClassName="w-full h-full rounded-md"
            onLoad={onLoad}
            onClick={(e) => {
              if (e.latLng) {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode(
                  {
                    location: {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    },
                  },
                  (results, status) => {
                    if (status === 'OK' && results?.[0]) {
                      setLocation(results[0].formatted_address);

                      setFieldValue &&
                        setFieldValue('location', results[0].formatted_address);

                      if (results?.[0]?.geometry?.location) {
                        const lat = results?.[0]?.geometry.location.lat();
                        const lng = results?.[0]?.geometry.location.lng();
                        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
                        setLink && setLink(googleMapsLink);
                        setFieldValue && setFieldValue('link', googleMapsLink);
                      }
                      setSelectedPlace(results[0]);
                      if (map && e.latLng) {
                        map.panTo(e.latLng);
                      }
                    }
                  },
                );
              }
            }}
          />
        </div>
      </>
    </div>
  );
};
