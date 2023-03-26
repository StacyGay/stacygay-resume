import { ReactElement, useEffect, useState } from "react";
import { ReviewItem } from "./review-item";
import { getReviews, Review } from "./review-service";

export function ReviewList(): ReactElement {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        getReviews()
            .then(r => setReviews(r))
            .catch(e => console.log(`Error getting reviews ${e}`));
    }, []);

    return (
        <div>
            {reviews.map((r, i) => <ReviewItem review={r} key={i}></ReviewItem>)}
        </div>
    )
}