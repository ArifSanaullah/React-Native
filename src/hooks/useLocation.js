import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, cb) => {
  const [locationError, setLocationError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatchingLocation = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        cb
      );
      setSubscriber(sub);
    } catch (err) {
      setLocationError(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatchingLocation();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [locationError];
};

export default useLocation;
