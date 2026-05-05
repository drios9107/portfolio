export interface IProject {
    name: string,
    stack: string,
    description: string,
    images?: string[],
    useFitContainImage?: boolean
}

export interface IExperience {
    company: string,
    role: string,
    period: string,
    highlights: string[],
}

export interface IProfile {
    name: string,
    title: string,
    location: string,
    email: string,
    phone: string,
    linkedin: string,
    photoUrl: string,
    years: string,
    summary: string,
}