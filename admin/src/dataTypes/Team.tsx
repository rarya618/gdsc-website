type Team = {
    id: string;
    pin: number;
    owner: string;
    type: string;
    open?: boolean;
    name: string;
    members: string[];
}

export default Team;