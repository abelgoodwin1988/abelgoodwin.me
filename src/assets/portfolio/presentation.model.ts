export interface Presentations {
    presentations: Presentation[];
}

export interface Presentation {
    title: string;
    subtitle: string;
    source: URL;
    technologoes: Technology[];
    faIcon?: string;
    faIconGroup?: string;
}

export interface Technology {
    name: string;
    faIcon?: string;
    faIconGroup?: string;
}

type URL = string;
