type Task = {
    id: string,
    name: string;
    description: string;
    available: boolean;
    callToAction: string;
    type: string;
    endsAt?: any;
    color?: string;
    users: string[]
}

export default Task