import { useRouter } from "next/dist/client/router";
import React from 'react';

const ProductDetail = () => {
    const router = useRouter();
    return (
        <div>
            <h2>Product detail</h2>
            <br />
            <p> <strong>{ router.query.productId}</strong> </p>
        </div>
    );
};

export default ProductDetail;