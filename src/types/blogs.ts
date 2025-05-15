export type Blog = {
    views: number;
    readTimeInMinutes: number;
    title: string;
    slug: string;
    brief: string;
    coverImage: {
        url: string;
    }
    publishedAt: string;
}