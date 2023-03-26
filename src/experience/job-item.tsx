import { motion, useAnimation } from 'framer-motion';
import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Job } from './job-service';

export interface JobProps {
    job: Job;
}

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0, x: 200 },
};

export function JobItem({ job }: JobProps): ReactElement {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div 
            className="card w-full mx-2 my-5 p-4 bg-base-100 shadow-xl slide-in"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}>
            <div className="card-body text-left">
                <h3 className="card-title">
                    {job.title}
                </h3>
                <h4 className="card-title">
                    {job.company}
                </h4>
                <ul className="list-disc">
                    {job?.items.map(i => <li>{i}</li>)}
                </ul>
            </div>
        </motion.div>
    );
}