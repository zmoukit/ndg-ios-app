import { useState, useEffect } from "react";
import axios from "axios";
import { DATA } from "../constants";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `http://ndg.local/api/v1/${endpoint}`,
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJOREciLCJpYXQiOjE2OTgyNDU4MzgsImV4cCI6MTY5ODI4MTgzOCwibmJmIjoxNjk4MjQ1ODM4LCJqdGkiOiJ0MVlsS2ZGU05VSzQ1M3lPIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIiwibmFtZSI6Ilpha2FyaWEgTW91a2l0In0.ngqrlBxwRl6bY-dAHPQc6XXj4UElLClaSDnLDp6oFqA",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      /*const response = await axios.request(options);
      setData(response.data);*/

      setData(DATA);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
