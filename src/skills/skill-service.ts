const iconPath = './icons';

export interface Skill {
    icon?: string,
    name?: string,
    background?: string,
    text?: string,
}

export async function getSkills(): Promise<Skill[]> {
    const response = await fetch('./data/skills.json');

    const data = await response.json() as Skill[];
    if (!response.ok) {
        throw `Error getting skills`;
    }

    data.filter((s) => s.icon)
        .map((s) => s.icon = `${iconPath}/${s.icon}`);

    return data ;
}