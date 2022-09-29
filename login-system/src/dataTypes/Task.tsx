type Task = {
    id: string,
    name: string;
    description: string;
    available: boolean;
    callToAction: string;
    postEnrolment?: {display: string, disabled?: boolean, link?: string};
    endsAt?: any;
    color?: string;
    users: string[]
}

export default Task