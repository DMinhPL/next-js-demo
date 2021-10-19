import Link from "next/link";
import React from 'react';

const News = () => {
    return (
        <div>
            <h2>News page</h2>
            <p>News List</p>
            <ul>
                <li>
                    <Link href='/news/1'>
                        News 1
                    </Link>
                    <Link href='/news/1/review/2'>
                        Review 1
                    </Link>
                </li>
                <li>
                    <Link href='/news/2'>
                        News 2
                    </Link>
                </li>
                <li>
                    <Link href='/news/3'>
                        News 3
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default News;