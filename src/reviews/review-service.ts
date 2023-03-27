export interface Review {
    name: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    comment: string;
}

export async function getReviews(): Promise<Review[]> {
    const response = await fetch('./data/reviews.json');

    const data = await response.json() as Review[];
    if (!response.ok) {
        throw `Error getting reviews`;
    }

    return data;
}