import * as rType from './resume.model';
// tslint:disable-next-line
const moment = require('moment');
/* tslint:disable: max-line-length */
export const Resume: rType.Resume = {
    summary: `Accomplished data engineer, primarily focused in database development, programming middleware, designing, developing, deploying and maintaining solutions on cloud platforms. Implement custom ETL and platform ETL solutions and cloud migration solutions.
Technical knowledge in developing and maintaining applications on AWS.
Interested in further developing technical skills in Data Engineering Domains including analytics as well as Full Stack Development.`,
    experience: [
        {
            company: 'Devetry',
            position: 'Software Engineer',
            startDate: moment('2018-09-1', 'YYYY-MM-DD'),
            endDate: 'Current',
            location: {
                city: 'Denver',
                state: 'Colorado',
                country: 'USA',
            },
            accomplishments: [
                'Built Flight-Booking application for large company retreat and events planning agency.',
                'Built IoT meter electricity usage dashboard for Government Agency.',
            ],
            technologies: [
                { name: 'Vue', faIcon: 'vuejs', faIconGroup: 'fab' },
                { name: 'Angular', faIcon: 'angular', faIconGroup: 'fab' },
                { name: 'Javascript', faIcon: 'js', faIconGroup: 'fab' },
                { name: 'TypeScript' },
                { name: 'NPM', faIcon: 'npm', faIconGroup: 'fab' },
                { name: 'Version Control', faIcon: 'code-branch', faIconGroup: 'fas' },
                { name: 'HTML', faIcon: 'html5', faIconGroup: 'fab' },
                { name: 'SASS', faIcon: 'sass', faIconGroup: 'fab' },
                { name: 'Data Modeling', faIcon: 'database', faIconGroup: 'fas' },
            ],
        },
        {
            company: 'Datalere',
            position: 'Data Engineer',
            startDate: moment('2017-12-01', 'YYYY-MM-DD'),
            endDate: moment('2018-08-31', 'YYYY-MM-DD'),
            location: {
                city: 'Denver',
                state: 'Colorado',
                country: 'USA',
            },
            accomplishments: [
                'Built distributed Web Scraper in Python, gathering over 10B data points. Data points cleansed and assigned levels of validation for use in report. Data Cleansed and stored to SQL Server via Python middleware applications.',
                'Designed and implemented Postgres functions as intermediary layer between scaled out applications and data layer to manage concurrent processes on distributed application.',
                'Designed and implemented large on-prem to AWS data migration from data layer to visualization layer. Utilized Python Lambda functions to manage jobs of kicking off Python ETL, and having python manage SQL.',
                'Built and partially designed database backend to support enterprise class application.',
            ],
            technologies: [
                { name: 'AWS Core Services', faIcon: 'aws', faIconGroup: 'fab' },
                { name: 'CloudFormation' },
                { name: 'Database Migration Services' },
                { name: 'Lambda' },
                { name: 'Python', faIcon: 'python', faIconGroup: 'fab' },
                { name: 'Postgres' },
                { name: 'SQL Server' },
                { name: 'RDS' },
                { name: 'SQL' },
            ],
        },
        {
            company: 'EY',
            position: 'Tax Technology and Data Analytics Staff',
            startDate: moment('2016-01-01', 'YYYY-MM-DD'),
            endDate: moment('2017-12-31', 'YYYY-MM-DD'),
            location: {
                city: 'Denver',
                state: 'Colorado',
                country: 'USA',
            },
            accomplishments: [
                'Developed ETL solutions to reduce Sales and Use Tax Compliance Center manual processing of tax documents saving 2000 hours per year, down to a fourth of time previously spent. Facilitated high-level discussions to find additional hour-saving processes.',
                'Developed Gross Receipts Modeling Estimates tool used to aggregate, analyze and visualize fifteen years of Indirect Tax data for defense in potential litigation. Analysis saved client time aggregating data allowing for substantially more time to prepare for potential litigation.',
                'Created visualizations in Power BI after data scraping in Vertex and targeted client websites for relevant geocoding and locality tax rates information. Used to convince targeted client of our understanding of their indirect tax footprint and need for automation. ',
            ],
            technologies: [
                { name: 'SQL Server' },
                { name: 'VBA' },
                { name: 'MS Excel', faIcon: 'file-excel', faIconGroup: 'fas' },
                { name: 'MS Access' },
                { name: 'Power BI' },
                { name: 'python', faIcon: 'python', faIconGroup: 'fab' },
            ],
        },
    ],
    education: [
        {
            university: 'University of Idaho',
            degree: 'Masters of Accountancy',
            startDate: moment('2015-01-01', 'YYYY-MM-DD'),
            endDate: moment('2015-12-21', 'YYYY-MM-DD'),
            location: {
                city: 'Moscow',
                state: 'Idaho',
                country: 'USA',
            },
            description: 'Emphasis in NoSQL Systems and Advanced Querying',
        },
        {
            university: 'Brigham Young Univiersity - Idaho',
            degree: 'Bachelors of Science of Accounting',
            startDate: moment('2012-01-01', 'YYYY-MM-DD'),
            endDate: moment('2014-12-21', 'YYYY-MM-DD'),
            location: {
                city: 'Rexburg',
                state: 'Idaho',
                country: 'USA',
            },
            description: 'Emphasis in Database Development and Programming',
        },
    ],
    skills: [
        { name: 'Tax Analysis', category: 'Business & Accounting' },
        { name: 'Tax Code', category: 'Business & Accounting' },
        { name: 'Accounting Information Systems', category: 'Business & Accounting' },
        { name: 'Research and Development Credit', category: 'Business & Accounting' },
        { name: 'Domestic Production Activities Deduction', category: 'Business & Accounting' },
        { name: 'Gross Receipts Tax', category: 'Business & Accounting' },
        { name: 'Microsoft Office Suite (Excel, Access, Word, Powerpoint)', category: 'Business & Accounting' },
        { name: 'Project Management', category: 'Business & Accounting' },
        { name: 'Expectation Management', category: 'Business & Accounting' },
        { name: 'Margin Modeling', category: 'Business & Accounting' },
        { name: 'Leadership', category: 'Business & Accounting' },
        { name: 'Asset Capitalization', category: 'Business & Accounting' },
        { name: 'Depreciation', category: 'Business & Accounting' },
        { name: 'Financial Instruments (Notes, Securities, etc)', category: 'Business & Accounting' },
        { name: 'Compliance and Reporting', category: 'Business & Accounting' },
        { name: 'GAAP', category: 'Business & Accounting' },
        { name: 'Job/ABC Costing', category: 'Business & Accounting' },
        { name: 'Revenue Recognition', category: 'Business & Accounting' },
        { name: 'Postgres', category: 'Data Engineering' },
        { name: 'SQL Server', category: 'Data Engineering' },
        { name: 'Advanced Querying', category: 'Data Engineering' },
        { name: 'DDL', category: 'Data Engineering' },
        { name: 'DML', category: 'Data Engineering' },
        { name: 'DCL', category: 'Data Engineering' },
        { name: 'T-SQL', category: 'Data Engineering' },
        { name: 'PL/SQL', category: 'Data Engineering' },
        { name: 'Microsoft Access', category: 'Data Engineering' },
        { name: 'Microsoft Excel', category: 'Data Engineering', faIcon: 'file-excel'},
        { name: 'Data Analysis', category: 'Data Engineering' },
        { name: 'Power BI', category: 'Data Engineering' },
        { name: 'SSIS', category: 'Data Engineering' },
        { name: 'NoSQL', category: 'Data Engineering' },
        { name: 'Mongo', category: 'Data Engineering' },
        { name: 'MySQL', category: 'Data Engineering' },
        { name: 'PIG', category: 'Data Engineering' },
        { name: 'Data Modeling', category: 'Data Engineering' },
        { name: 'Datawarehousing', category: 'Data Engineering' },
        { name: 'Relational Database Design', category: 'Data Engineering' },
        { name: 'Database Administration', category: 'Data Engineering' },
        { name: 'TypeScript', category: 'Software Engineering' },
        { name: 'JavaScript', category: 'Software Engineering' },
        { name: 'Angular', category: 'Software Engineering' },
        { name: 'Vue', category: 'Software Engineering' },
        { name: 'Python', category: 'Software Engineering' },
        { name: 'State Management', category: 'Software Engineering' },
        { name: 'Git-Flow', category: 'Software Engineering' },
        { name: 'Code Review', category: 'Software Engineering' },
        { name: 'Virtual Machines', category: 'Software Engineering' },
        { name: 'Linux', category: 'Software Engineering' },
        { name: 'Mac OSX', category: 'Software Engineering' },
        { name: 'Test Driven Development', category: 'Software Engineering' },
        { name: 'AWS', category: 'Cloud', faIcon: 'aws' },
        { name: 'AWS Core Services', category: 'Cloud' },
        { name: 'RDS', category: 'Cloud' },
        { name: 'CloudFormation', category: 'Cloud' },
        { name: 'Database Migration Services', category: 'Cloud' },
        { name: 'Quicksight', category: 'Cloud' },
        { name: 'Cloud SQL', category: 'Cloud' },

    ],
    courses: [
        {
            medium: 'Online',
            category: '',
            name: 'Automated Software Testing with Python',
            url: 'https://www.udemy.com/automated-software-testing-with-python/learn/v4/overview',
        },
        {
            medium: 'Online',
            category: '',
            name: 'AWS Certified Developer',
            url: 'https://www.udemy.com/aws-certified-developer-associate/learn/v4/content',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Spark and Python for Big Data with PySpark (Partial)',
            url: 'https://www.udemy.com/spark-and-python-for-big-data-with-pyspark/learn/v4/overview',
        },
        {
            medium: 'Online',
            category: '',
            name: 'React - The Complete Guide ',
            url: 'https://www.udemy.com/react-the-complete-guide-incl-redux/',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Accelerated Javascript Training',
            url: 'https://www.udemy.com/javascript-bootcamp-2016/',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Modern React with Redux (React, Redux) ',
            url: 'https://www.udemy.com/react-redux/?start=150',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Microsoft Power BI - A Complete Introduction ',
            url: 'https://www.udemy.com/powerbi-complete-introduction/',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Microsoft SQL Server 2012 Certification Training Exam 70-462, Database Administration (SQL Server)',
            url: 'https://www.udemy.com/microsoft-sql-server-2012-certification-training-exam-70-462/learn/v4/content',
        },
        {
            medium: 'Online',
            category: '',
            name: 'https://www.udemy.com/microsoft-sql-server-2012-certification-70-461/learn/v4/content',
            url: 'Microsoft SQL Server 2012 Certification Training Exam 70-461, Advanced Querying (SQL Server)',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Laravel 5.4 From Scratch (Laravel)',
            url: 'https://laracasts.com/series/laravel-from-scratch-2017',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Laravel 5.2 From Scratch ',
            url: 'https://laracasts.com/series/laravel-5-from-scratch',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Laravel 5 Fundamentals',
            url: 'https://laracasts.com/series/laravel-5-fundamentals',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Learn Vue 2: Step By Step',
            url: 'https://laracasts.com/series/learn-vue-2-step-by-step',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Laravel and the Front-end',
            url: 'https://laracasts.com/series/laravel-5-and-the-front-end',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Laravel Build Your First App ',
            url: 'https://laracasts.com/series/build-your-first-app-in-laravel',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Object-Oriented Bootcamp',
            url: 'https://laracasts.com/series/object-oriented-bootcamp-in-php',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Git Me Some Version Control',
            url: 'https://laracasts.com/series/git-me-some-version-control',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Be Awesome in PHPStorm ',
            url: 'https://laracasts.com/series/how-to-be-awesome-in-phpstorm',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Understand Regular Expressions',
            url: 'https://laracasts.com/series/understanding-regular-expressions',
        },
        {
            medium: 'Online',
            category: '',
            name: 'Setup a Mac Dev Machine From Scratch',
            url: 'https://laracasts.com/series/setup-a-mac-dev-machine-from-scratch',
        },
        {
            medium: 'Online',
            category: '',
            name: 'The PHP Practitioner',
            url: 'https://laracasts.com/series/php-for-beginners',
        },
    ],
    certificates: [
        {
            name: 'AWS Certified Developer Associate',
            url: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2018-01-29&ci=AWS00396977',
            faIcon: 'aws',
        },
    ],
};
