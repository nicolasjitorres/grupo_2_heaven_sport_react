import { useEffect, useState } from "react";

function UseDataFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(datos => setData(datos));
    }, [url])

    return data;
}

export default UseDataFetch;