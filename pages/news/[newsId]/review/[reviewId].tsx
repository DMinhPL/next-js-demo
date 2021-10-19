import { useRouter } from "next/dist/client/router";
import React from 'react';

const ReviewDetail = () => {
    const router = useRouter();
    const { newsId, reviewId } = router.query;
    return (
        <div>
            <h2> Review { reviewId} for news {newsId} </h2>
        </div>
    );
};

export default ReviewDetail;