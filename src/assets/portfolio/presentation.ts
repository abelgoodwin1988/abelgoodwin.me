import * as prType from './presentation.model';
/* tslint:disable: max-line-length */
export const Presentations: prType.Presentations = {
    presentations: [
        {
            title: 'Introduction To Glue',
            subtitle: `Presentation to the Denver AWS Users Group. Introductory thoughts on AWS Glue and a small Glue Spark Demo`,
            source: 'https://docs.google.com/presentation/d/1V3gI2ETAdaBn-sPp9SNayQeSJ2BHluaxOMJOYjRcJAk/edit?usp=sharing',
            faIcon: 'aws',
            faIconGroup: 'fab',
            technologoes: [
                { name: 'AWS', faIcon: 'aws', faIconGroup: 'fab' },
                { name: 'Glue' },
                { name: 'Apache Spark' },
                { name: 'Unstructured Data' },
            ],
        },
        {
            title: 'Vue + TS',
            subtitle: 'Introduction to TS conception through Vue',
            source: 'https://gist.github.com/abelgoodwin1988/b1f7cadaf0c90f24e02873201953ead2',
            faIcon: 'microsoft',
            faIconGroup: 'fab',
            technologoes: [
                { name: 'Vue', faIcon: 'vuejs', faIconGroup: 'fab' },
                { name: 'TypeScript' },
            ],
        },
    ],
};
