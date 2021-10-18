import { useRouter } from "next/dist/client/router";
import React from 'react';

const PostDetail = () => {
    const router = useRouter();
    return (
        <div>
            <h1>post detail</h1>
            <br />
            <p>Query: {JSON.stringify(router.query) }</p>
        </div>
    );
};

export default PostDetail;