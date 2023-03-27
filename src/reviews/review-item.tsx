import { useInView } from "framer-motion";
import { ReactElement, useRef } from "react";
import { Review } from "./review-service";

export interface ReviewItemProps {
    review: Review;
    bg: string;
}

export function ReviewItem({ review, bg }: ReviewItemProps): ReactElement {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div 
            className={`card md:w-full lg:w-[48%] mx-2 my-3 text-primary-content ${bg}`}
            ref={ref}
            style={{
                transform: isInView ? "none" : "scale(0)",
                opacity: isInView ? 1 : 0,
                //transitionDuration: ".3s",
                transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}
        >
            <div className="card-body">
                <h3 className="card-title text-base">
                    {review.name}
                </h3>
                <h4 className="card-title text-base">
                    {review.title}
                </h4>
                <p className="text-left text-sm">
                    {review.comment}
                </p>
            </div>
        </div>
    )
}