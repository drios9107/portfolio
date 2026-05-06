import { IExperience, IProfile, IProject, ISkills } from "./types";

const profile: IProfile = {
    name: 'David Rios Peña',
    title: 'Senior Fullstack Engineer',
    location: 'Las Tunas, Cuba',
    email: 'drios9107@gmail.com',
    phone: '+53 54056199',
    linkedin: 'https://linkedin.com/in/david-rios-9492001b2',
    photoUrl: '/avatar.jpg',
    years: `${new Date().getFullYear() - 2015}+ years`,
    summary:
        'Senior Fullstack Developer focused on scalable web products across banking, analytics and public sectors. Experienced in React, Next.js and Node.js, building performant, user-focused applications and integrating complex backend systems. Comfortable working in distributed Agile teams and delivering features from concept to production.',
}

const skills: ISkills = {
    frontend: [
        { name: 'React', main: true },
        { name: 'Next.js', main: true },
        { name: 'Vue.js' },
        { name: 'Quasar' }
    ],
    backend: [
        { name: 'Node.js' },
        { name: 'NestJS' },
        { name: 'Firebase' },
        { name: 'Laravel' }
    ],
    database: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'MongoDB' }
    ],
    api: [
        { name: 'GraphQL' },
        { name: 'REST' }
    ],
}

const experience: IExperience[] = [
    {
        company: 'Wimix Solutions',
        role: 'Fullstack Developer',
        period: 'Aug 2025 - Feb 2026',
        highlights: [
            'Built banking dashboards using Vue.js and Quasar for financial operations.',
            'Developed backend services and APIs with Node.js and NestJS, supporting scalable and maintainable architectures.',
            'Integrated frontend applications with REST APIs and real-time data flows.',
            'Delivered production-ready features in Agile, cross-functional teams.',
        ],
    },
    {
        company: 'Alphalabs',
        role: 'Fullstack Developer',
        period: 'Oct 2022 - May 2025',
        highlights: [
            'Developed SSR analytics dashboards with Next.js.',
            'Implemented backend services with Node.js and Firebase.',
            'Contributed to React Native cross-platform products.',
            'Integrated an AI assistant for decision support'
        ],
    },
    {
        company: 'InformageStudios',
        role: 'Fullstack Developer',
        period: 'Nov 2021 - Dec 2022',
        highlights: [
            'Delivered fullstack features across multiple client industries.',
            'Built performant apps with Vue.js, Laravel, React, and Next.js.',
            'Collaborated with stakeholders on production-ready deliveries.',
        ],
    },
    {
        company: 'Desoft',
        role: 'Fullstack Developer',
        period: 'Feb 2019 - Oct 2021',
        highlights: [
            'Developed and maintained 8+ enterprise applications using Odoo and React for government and private sector clients.',
            'Built custom modules and user interfaces to extend platform functionality and improve usability.',
            'Participated in the full software development lifecycle, including requirements analysis, development, testing, and deployment.',
        ],
    },
    {
        company: 'Private Client',
        role: 'Fullstack Developer',
        period: 'Sep 2015 - Dec 2018',
        highlights: [
            'Developed enterprise web applications using ASP.NET MVC and SQL Server',
            'Built and maintained fullstack systems, gaining strong experience in backend architecture and database design',
        ],
    },
]

const projects: IProject[] = [
    {
        name: 'Expenses Tracker',
        stack: 'React + Node.js',
        description:
            'Fullstack expense tracking app with role-based access, debt reminders, and multi-currency support.',
        images: [
            '/projects/expenses-tracker/1.png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Banking Operations Dashboard (Wimcorp)',
        stack: 'Vue + Quasar + NestJS',
        description:
            'Internal dashboard for financial operations monitoring and workflow management.',
        images: [
            '/projects/banking-dashboard-wimcorp/1.png',
            '/projects/banking-dashboard-wimcorp/3.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Booking and Analytics Platform (Sinergia / Aqva)',
        stack: 'Next.js + Firebase',
        description:
            'Server-side rendered analytics dashboards with real-time data synchronization and optimized performance.',
        images: [
            '/projects/sinergia-analytics-platform/sinergia1.png',
            '/projects/sinergia-analytics-platform/sinergia2.png',
            '/projects/sinergia-analytics-platform/sinergia3.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Asset Booking Mobile App (Sinergia App)',
        stack: 'React Native + Firebase',
        description:
            'Cross-platform mobile app enabling field teams to book and manage assets in real time.',
        images: [
            '/projects/sinergia-mobile-app/sinergia_app1.png',
            '/projects/sinergia-mobile-app/sinergia_app2.png',
            '/projects/sinergia-mobile-app/sinergia_app3.png',
        ],
        extraClasses: 'fit-contain'
    },
    {
        name: 'Pharmaceutical Web App (Galenicum)',
        stack: 'JavaScript + PostgreSQL',
        description:
            'Enhanced web application for pharmaceutical workflows, improving usability and data handling.',
        images: [
            '/projects/galenicum-web-app/1.png',
            '/projects/galenicum-web-app/2.png',
            '/projects/galenicum-web-app/3.png',
            '/projects/galenicum-web-app/4.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Event Platform (Iberdrola 2022)',
        stack: 'Vue.js + Laravel',
        description:
            'Fullstack features for an enterprise energy platform focused on performance and scalability.',
        images: ['/projects/iberdrola-platform/iberdrola.png'],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Company Dashboard (Inuba)',
        stack: 'React + Next.js',
        description:
            'High-performance dashboard with SEO optimization and fast load times.',
        images: [
            '/projects/inuba-dashboard/1.png',
            '/projects/inuba-dashboard/2.png',
            '/projects/inuba-dashboard/3.png',
            '/projects/inuba-dashboard/4.png',
            '/projects/inuba-dashboard/5.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Enterprise Web Platform (Cobramus)',
        stack: 'React + Next.js + Laravel',
        description:
            'Fullstack platform improvements focused on performance, maintainability, and user experience.',
        images: [
            '/projects/cobramus-platform/1.png',
            '/projects/cobramus-platform/2.png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Forts Analytics Platform (Forts)',
        stack: 'Next.js + Firebase + AI Integration',
        description:
            'Data-driven platform for analyzing datasets, featuring interactive dashboards and an AI assistant to support user decision-making.',
    },
    {
        name: 'Influencer Analytics Platform (Influencer Advisor)',
        stack: 'Vue.js + Laravel',
        description:
            'Analytics platform with data visualization and performance tracking for influencer campaigns.',
    },
    {
        name: 'Enterprise ERP Systems',
        stack: 'Odoo + React',
        description:
            'Developed and maintained multiple enterprise applications with custom modules and integrations.',
    },
    {
        name: 'Private Client',
        stack: 'ASP.NET MVC + SQL Server',
        description:
            'Built enterprise-grade applications for institutional clients, focusing on reliability and data integrity.',
    },
];


export { experience, profile, skills, projects }