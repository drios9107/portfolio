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
    github: 'https://github.com/drios9107',
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
            'Developed and maintained analytics platforms using Next.js and Firebase, including Forts, a data-driven platform for dataset uploads, interactive dashboards, and AI-assisted decision support.',
            'Built reusable user interfaces with React and Material UI, ensuring consistent user experiences across applications.',
            'Used Sentry for error monitoring, debugging, and issue tracking across applications.',
            'Contributed to a cross-platform mobile application using React Native, enabling real-time asset booking for field teams.',
            'Designed and implemented backend services and Firebase Cloud Functions with Node.js to support real-time data synchronization.',
            'Collaborated with product and design teams to deliver scalable, user-focused solutions.'
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
            'Fullstack expense tracking application featuring role-based access control, debt reminders, and multi-currency support. Designed to help users organize expenses, manage financial records, and keep track of outstanding debts.',
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
            'Internal banking operations platform featuring multiple modules for different business departments. Developed interfaces and backend functionality to support banking operations, administrative workflows, financial processes, and day-to-day business management.',
        images: [
            '/projects/banking-dashboard-wimcorp/1.png',
            '/projects/banking-dashboard-wimcorp/3.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Aqva - Investment Platform',
        stack: 'Next.js + Node.js + Firebase',
        description:
            'Developed a web-based investment platform that allows users to manage investments and create personalized financial plans. Built interactive interfaces and data-driven features with Next.js, implementing server-side rendering (SSR) and real-time data synchronization. Also developed backend services and Firebase Cloud Functions using Node.js to support server-side processes, business logic, and communication with the application.',
        images: [
            '/projects/aqva-analytics-platform/aqva1.png',
            '/projects/aqva-analytics-platform/aqva2.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Sinergia - Asset Management Dashboard',
        stack: 'Next.js + Node.js + Firebase',
        description:
            'Developed a web-based asset management dashboard that allows the company to manage and provide asset booking services. Built the frontend with Next.js and backend services using Node.js and Firebase, enabling teams to manage assets, monitor bookings and availability, and synchronize information with the mobile application in real time.',
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
            'Developed a mobile application that allows users to request reservations for different company assets. Built with React Native and Firebase, providing mobile access to the asset booking service and synchronization with the company platform.',
        images: [
            '/projects/sinergia-mobile-app/sinergia_app1.png',
            '/projects/sinergia-mobile-app/sinergia_app2.png',
            '/projects/sinergia-mobile-app/sinergia_app3.png',
        ],
        extraClasses: 'fit-contain'
    },
    {
        name: 'Forts Analytics Platform (Forts)',
        stack: 'Next.js + Firebase + AI Integration',
        description:
            'Developed a data-driven platform that allows users to upload dynamic datasets and generate statistics and visualizations. Implemented interactive dashboards to explore data and an AI assistant to help users analyze information and support decision-making.',
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
        name: 'Pharmaceutical Web App (Galenicum)',
        stack: 'PHP + JavaScript + JVectorMap + MySQL',
        description:
            'Developed new features and database queries for a custom CMS used by a pharmaceutical company. Worked on frontend functionality, data management, and interactive geographical visualizations using JVectorMap.',
        images: [
            '/projects/galenicum-web-app/1.png',
            '/projects/galenicum-web-app/2.png',
            '/projects/galenicum-web-app/3.png',
            '/projects/galenicum-web-app/4.png',
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Event Management Platform (Iberdrola)',
        stack: 'PHP + Laravel + Vue.js + MySQL',
        description:
            'Developed features for a web application designed to manage an event\'s resources, guests, and tasks. Worked across the Laravel backend and Vue.js frontend to support event organization and administrative workflows.',
        images: [
            '/projects/iberdrola-platform/iberdrola(1).png',
            '/projects/iberdrola-platform/iberdrola(2).png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'INuba Clinic - Health & Biometrics Platform',
        stack: 'React + Next.js + Chart.js',
        description:
            'Developed a significant part of the frontend for a comprehensive health and biometrics platform designed for clinical patient assessment, including athlete health monitoring. Built reusable components for patient profiles, anamnesis forms, 3D avatars, and interactive dashboards featuring body composition, thermography, and health indicators. Implemented custom Chart.js plugins and API integrations to support specialized data visualization.',
        images: [
            '/projects/inuba-dashboard/1.png',
            '/projects/inuba-dashboard/2.png',
            '/projects/inuba-dashboard/3.png',
            '/projects/inuba-dashboard/4.png',
            '/projects/inuba-dashboard/5.png',
        ],
        extraClasses: 'fit-cover'
    },
    // {
    //     name: 'INuba Partners Dashboard',
    //     stack: 'Next.js + Firebase + Storybook',
    //     description:
    //         'Developed a web-based dashboard for managing the company\'s telephone booths and client information. Built with Next.js and Firebase, using Storybook to develop and organize reusable UI components.',
    //     images: [],
    //     extraClasses: 'fit-cover'
    // },
    {
        name: 'Enterprise Web Platform (Cobramus)',
        stack: 'Laravel + Next.js + MySQL + Stripe + Vozitel API',
        description:
            'Debt recovery platform connecting creditors and debtors through a legal intermediary service. Developed frontend interfaces, dashboards, and forms, implemented tax identification validation for Spanish individuals and companies, integrated Stripe payments across frontend and backend, and built a Vozitel integration to synchronize recovery cases, debtor and creditor details, outstanding amounts, payments, and case statuses.',
        images: [
            '/projects/cobramus-platform/1.png',
            '/projects/cobramus-platform/2.png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Influencer Analytics Platform (Influencer Advisor)',
        stack: 'PHP + Laravel + Vue.js + MySQL',
        description:
            'Developed features for a web application that enables companies to rate and classify influencers based on different popularity metrics and performance parameters. Worked on the Laravel backend and Vue.js frontend to support influencer evaluation and classification.',
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
        name: 'Replus - Window Builder Web App',
        stack: 'PHP + ImageMagick + JavaScript + jsPDF + ChartJs',
        description:
            'Developed features for a web application that generates and displays different image permutations of Replus windows. Implemented image processing functionality and statistical comparisons using charts to illustrate the benefits of purchasing Replus windows, with support for generating PDF documents.',
        images: [
            '/projects/replus/replus (0).png',
            '/projects/replus/replus (1).png',
            '/projects/replus/replus (2).png',
            '/projects/replus/replus (3).png',
            '/projects/replus/replus (4).png',
        ],
        extraClasses: 'fit-cover'
    },
    // {
    //     name: 'AteneoBox - Student Grading System',
    //     stack: 'PHP + MySQL',
    //     description:
    //         'Developed new features and database queries for a student grading system. Implemented data retrieval and processing functionality to generate different lists and reports based on students\' grades and academic records.',
    //     images: [],
    //     extraClasses: 'fit-cover'
    // },
    {
        name: 'Atlanta - Food E-commerce Platform',
        stack: 'PHP + JavaScript + MySQL',
        description:
            'Developed shopping cart functionality for a web-based food sales platform, including frontend interactions, backend features, and database operations to support the online purchasing process. Also created transactional email templates for purchase confirmations, including order and payment receipt details.',
        images: [
            '/projects/atlanta/atlanta 1.png',
            '/projects/atlanta/atlanta 2.png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Enterprise Solutions - Odoo',
        stack: 'Python + Odoo + PostgreSQL',
        description:
            'Developed and customized 8+ enterprise applications for public and private sector organizations, including solutions for employee task management, performance evaluation, business planning, production control, product distribution, and IT security management. Worked with custom Odoo modules and integrations using technologies such as Microsoft SQL Server, MySQL, Grafana, Nmap, and OCS Inventory.',
        images: [
            '/projects/odoo-projects/odoo-logo.png'
        ],
        extraClasses: 'fit-cover'
    },
    {
        name: 'Private Client',
        stack: 'ASP.NET MVC + SQL Server',
        description:
            'Developed custom web applications using ASP.NET MVC and SQL Server, implementing application features, business logic, and database functionality to support the client\'s operational needs.',
        images: [],
        extraClasses: 'fit-cover'
    }
]


export { experience, profile, skills, projects }