import { ReactElement, useEffect, useState } from "react";
import { ReviewItem } from "./review-item";
import { getReviews, Review } from "./review-service";

const colors = ["bg-orange-900", "bg-blue-900", "bg-indigo-900", "bg-green-900", "bg-rose-900"]

export function ReviewList(): ReactElement {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        getReviews()
            .then(r => setReviews(r))
            .catch(e => console.log(`Error getting reviews ${e}`));
    }, []);

    return (
        <div className="flex flex-wrap">
            {reviews.map((r, i) => <ReviewItem review={r} bg={colors[i%colors.length]} key={i}></ReviewItem>)}
        </div>
    )
}