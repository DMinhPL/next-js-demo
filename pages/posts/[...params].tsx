import { useRouter } from "next/dist/client/router";
import React from 'react';

const ParamsPage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Params detail</h1>
            <br />
            <p>Query: {JSON.stringify(router.query) }</p>
        </div>
    );
};

export default ParamsPage;