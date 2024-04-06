import { useEffect, useState } from "react";

function useDataFetch(url) {
    let [data, setData] = useState([]);

    const actualizarData = 0;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(datos => setData(datos));
    }, [url]);

    return { data, actualizarData };
}

export default useDataFetch;