import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from 'react';

const NewsDetail = () => {
    const router = useRouter();
    return (
        <div>
            <h2>News Detail {router.query.newsId}</h2>
            <br />
            <Link href='/news'>
                Back 
            </Link>
        </div>
    );
};

export default NewsDetail;