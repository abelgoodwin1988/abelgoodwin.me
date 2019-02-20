import * as moment from 'moment';

export interface Resume {
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    courses: Course[];
    certificates: Certficate[];
}

interface Experience {
    company: string;
    position: string;
    startDate: moment.Moment;
    endDate: moment.Moment | string;
    location: Location;
    accomplishments: Accomplishment[];
}

interface Location {
    city: string;
    state: string;
    country: string;
}

type Accomplishment = string;

interface Education {
    university: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    location: Location;
    description: string;
}

interface Skill {
    name: string;
    description: string;
    category: SkillCategory[];
}

type SkillCategory = string;

interface Course {
    medium: string;
    category: string;
    name: string;
    url: string;
}

interface Certficate {
    name: string;
    url: string;
}
