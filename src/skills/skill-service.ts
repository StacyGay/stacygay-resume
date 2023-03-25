const iconPath = './src/assets';

export interface Skill {
    icon: string,
    name: string,
    background?: string,
}

export async function getSkills(): Promise<Skill[]> {
    let response = await fetch('./src/assets/data/skills.json');

    const data = await response.json() as Skill[];
    if (!response.ok) {
        throw `Error getting skills`;
    }

    data.map((s) => s.icon = `${iconPath}/${s.icon}`);

    return data ;
}