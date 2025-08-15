import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod("POST");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();

            setData(result);
            setLoading(false);
        }

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];

                const response = await fetch(...fetchOptions);
                const json = await response.json();
                setCallFetch(json);
            }
        }

        httpRequest();

    }, [config, method, url]);

    return { data, httpConfig, loading };
}

