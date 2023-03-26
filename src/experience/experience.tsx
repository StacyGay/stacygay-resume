import { ReactElement, useEffect, useState } from "react";
import { JobItem } from "./job-item";
import { getJobs, Job } from "./job-service";

export function Experience(): ReactElement {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        getJobs()
            .then(j => setJobs(j))
            .catch(e => console.log(`Error getting jobs ${e}`));
    }, []);

    return (
        <div>
            {jobs.map((j, i) => <JobItem job={j} key={i}></JobItem>)}
        </div>
    );
}
