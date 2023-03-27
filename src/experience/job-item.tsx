import { useInView } from 'framer-motion';
import { ReactElement, useRef } from 'react';
import { Job } from './job-service';

export interface JobProps {
    job: Job;
}

export function JobItem({ job }: JobProps): ReactElement {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div 
            className="card w-full lg:mx-2 my-5 lg:p-4 md:p-2 bg-base-100 shadow-xl slide-in" 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(300px)",
                opacity: isInView ? 1 : 0,
                transitionDuration: ".3s"
            }}
        >
            <div className="card-body text-left">
                <h3 className="card-title text-3xl">
                    {job.title}
                </h3>
                <h4 className="card-title text-2xl">
                    {job.company}
                </h4>
                <div className="px-4">
                    <ul className="list-disc">
                        {job?.items.map(i => 
                            <li className="my-3 text-base hover:scale-105">{i}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}