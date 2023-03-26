export interface Job {
    title: string;
    company: string;
    items: string[];
}

export async function getJobs(): Promise<Job[]> {
    const response = await fetch('./src/assets/data/experience.json');

    const data = await response.json() as Job[];
    if (!response.ok) {
        throw `Error getting jobs`;
    }

    return data;
}