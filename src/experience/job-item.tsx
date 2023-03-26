import { ReactElement } from 'react';
import { Job } from './job-service';

export interface JobProps {
    job: Job;
}

export function JobItem({ job }: JobProps): ReactElement {
    console.log(job);
    return (
        <div className="card w-full mx-2 my-5 p-4 bg-base-100 shadow-xl">
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
        </div>
    );
}