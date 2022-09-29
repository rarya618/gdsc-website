import UserTeam from "./UserTeam";

type UserDetails = {
    firstName: string;
    lastName: string;
    email: string;
    tasks: string[];
    teams: UserTeam[];
}

export default UserDetails;