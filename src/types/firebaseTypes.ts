export type WorkItem = {
    id: string;
    date: string;
    role: string;
    company: string;
    rank: number;
};

export type ServiceItem = {
    id: string;
    title: string;
    desc: string;
    rank: number;
}

export type ProjectItem = {
    id: string;
    title: string;
    desc: string;
    image1: string;
    image2: string;
    links: {
        liveUrl?: string;
        githubUrl: string;
    }
    skills: {
        text: string;
        icon: string;
    }[]
    type: string;
}

export type TestimonialItem = {
    id: string;
    name: string;
    position: string;
    content: string;
    avatarText?: string;
    featured?: boolean;
    badge?: string;
}