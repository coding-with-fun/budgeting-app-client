import React, { useEffect, useState } from "react";

const EnvelopeDetails = () => {
    const [detailsChanged, setDetailsChanged] = useState(false);

    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        if (detailsChanged)
            window.addEventListener("beforeunload", unloadCallback);

        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, [detailsChanged]);

    return <div>EnvelopeDetails</div>;
};

export default EnvelopeDetails;
