import { useState, useCallback, useRef, /*useEffect*/ } from "react";
import Swal from "sweetalert2";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });
        // console.log(response)
        const responseData = await response.json();
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );
        // console.log(responseData);
        if (!responseData.success) {
          //console.log(responseData)
          throw new Error(responseData.error);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        //console.log(err)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          didClose: () => {
            setError(null);
          },
          didDestroy: () => {
            setError(null);
          },
        });
        //// console.log(err)
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  // useEffect(() => {
  //   return () => {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
  //   };
  // }, []);

  return { isLoading, error, sendRequest, clearError };
};
