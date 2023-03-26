import { ReactElement } from "react";
import { Review } from "./review-service";

export interface ReviewItemProps {
    review: Review;
}

export function ReviewItem({ review }: ReviewItemProps): ReactElement {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">
                    {review.name}
                </h3>
                <h4 className="card-title">
                    {review.title}
                </h4>
                <p className="text-left">
                    {review.comment}
                </p>
            </div>
        </div>
    )
}