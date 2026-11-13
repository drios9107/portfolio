import { IExperience, IProfile, IProject, ISkills } from "./types";


const profile: IProfile = {
    name: 'David Rios Peña',
    title: 'Senior Fullstack Engineer',
    tagline: 'Building reliable, scalable applications and meaningful digital experiences.',
    location: 'Brazil',
    email: 'drios9107@gmail.com',
    phone: '+55 95 984257295',
    whatsapp: '+55 95 984257295',
    linkedin: 'https://linkedin.com/in/david-rios-9492001b2',
    photoUrl: '/avatar.jpg',
    cvUrl: '/cv.pdf',
    years: `${new Date().getFullYear() - 2015}+ years`,
    summary:
        'I build web and mobile applications across banking, analytics, and industrial sectors. Experienced in modern frontend and backend technologies, developing responsive interfaces, integrating APIs and backend systems, maintaining legacy codebases, and building interactive dashboards and data visualizations. I value code quality, autonomy, and collaboration, taking ownership of features from development to production.',
}


const skills: ISkills = {
    frontend: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', main: true },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', main: true },
        { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
        { name: 'Quasar', icon: 'https://cdn.simpleicons.org/quasar/1976D2' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/react.svg' }
    ],
    backend: [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
        { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
        { name: 'Odoo', icon: 'https://cdn.simpleicons.org/odoo/714B67' },
    ],
    database: [
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    ],
    api: [
        { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
        { name: 'REST', icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
    ],
}

const experience: IExperience[] = [
    {
        company: 'Wimix Solutions',
        role: 'Fullstack Developer',
        period: 'Aug 2025 - Feb 2026',
        logo: '/jobs/wimix.png',
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
        logo: '/jobs/alphalabs.png',
        highlights: [
            'Developed SSR analytics dashboards with Next.js.',
            'Implemented backend services with Node.js and Firebase.',
            'Contributed to React Native cross-platform products.',
            'Integrated an AI assistant for decision support.'
        ],
    },
    {
        company: 'InformageStudios',
        role: 'Fullstack Developer',
        period: 'Nov 2021 - Dec 2022',
        logo: '/jobs/informage.jpg',
        highlights: [
            'Delivered fullstack features across 12+ client projects in sectors including analytics, healthcare, pharmaceuticals, and energy.',
            'Built and enhanced web applications using Vue.js, Laravel, React, and Next.js.',
            'Developed interactive dashboards and complex data visualizations, including custom Chart.js plugins.',
            'Integrated third-party services, including Stripe payment processing on the backend and Vozitel for debt case synchronization.',
            'Collaborated directly with stakeholders to refine requirements and deliver production-ready solutions.',
        ],
    },
    {
        company: 'Desoft',
        role: 'Fullstack Developer',
        period: 'Feb 2019 - Oct 2021',
        logo: '/jobs/desoft.png',
        highlights: [
            'Developed and maintained 8+ enterprise applications using Odoo and React for institutional clients.',
            'Built custom modules and user interfaces to extend platform functionality and improve usability.',
            'Maintained and extended legacy code across multiple client-specific applications.',
            'Participated in the full software development lifecycle, including requirements analysis, development, testing, and deployment.',
        ],
    },
    {
        company: 'Private Client',
        role: 'Fullstack Developer',
        period: 'Sep 2015 - Dec 2018',
        highlights: [
            'Developed enterprise web applications using ASP.NET MVC and SQL Server.',
            'Built and maintained fullstack systems, gaining strong experience in backend architecture and database design.',
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
            '/projects/expenses-tracker/1.png',
            '/projects/expenses-tracker/2.png',
            '/projects/expenses-tracker/3.png'
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
        stack: 'JavaScript + MySQL',
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
        images: [
            '/projects/iberdrola-platform/iberdrola(1).png',
            '/projects/iberdrola-platform/iberdrola(2).png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Company Dashboard (Inuba)',
        stack: 'React + Next.js + Chart.js',
        description:
            'Healthcare and biometrics platform featuring interactive dashboards, patient management, health indicators, and thermography visualizations. Developed a significant part of the frontend, including reusable components and custom Chart.js plugins for specialized data visualizations.',
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
        stack: 'Laravel + Next.js + MySQL + Stripe + Vozitel API',
        description:
            'Debt recovery platform connecting creditors and debtors. Developed frontend interfaces, dashboards, forms, and backend features, integrated Stripe payment processing on the backend, and built a Vozitel integration to synchronize debt recovery cases, debtor and creditor details, outstanding amounts, payments, and case statuses.',
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
        images: [
            '/projects/forts-analytics-platform/Screenshot_0.png',
            '/projects/forts-analytics-platform/Screenshot_1.png',
            '/projects/forts-analytics-platform/Screenshot_3.png',
            '/projects/forts-analytics-platform/Screenshot_4.png',
            '/projects/forts-analytics-platform/Screenshot_5.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Influencer Analytics Platform (Influencer Advisor)',
        stack: 'Vue.js + Laravel',
        description:
            'Analytics platform with data visualization and performance tracking for influencer campaigns.',
        images: [
            '/projects/influencer-analytics-platform/Screenshot_2.png',
            '/projects/influencer-analytics-platform/Screenshot_3.png',
            '/projects/influencer-analytics-platform/Screenshot_4.png',
            '/projects/influencer-analytics-platform/Screenshot_5.png',
            '/projects/influencer-analytics-platform/Screenshot_6.png',
            '/projects/influencer-analytics-platform/Screenshot_7.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Enterprise ERP Systems',
        stack: 'Odoo',
        description:
            'Developed and maintained multiple enterprise applications with custom modules and integrations.',
        images: [
            '/projects/odoo-projects/odoo-logo.png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Private Client',
        stack: 'ASP.NET MVC + SQL Server',
        description:
            'Built enterprise-grade applications for institutional clients, focusing on reliability and data integrity.',
    },
];


export { experience, profile, skills, projects }