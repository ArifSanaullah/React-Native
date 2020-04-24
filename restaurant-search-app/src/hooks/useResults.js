import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      setLoading(true);
      const resp = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(resp.data.businesses);
      setLoading(false);
    } catch (errorMessage) {
      setErrorMessage(errorMessage.message);
      setLoading(false);
    }
  };

  // bad practice
  // never call a function in the component itself. this will cause an infinite loop or rendering
  // searchApi("pasta") ==> BAD PRACTICE, use useEffect hook instead.

  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, loading, errorMessage];
};
