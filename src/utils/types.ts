export interface IProject {
    name: string,
    stack: string,
    description: string,
    images?: string[],
    extraClasses?:string
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