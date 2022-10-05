import UserTeam from "./UserTeam";

type UserDetailsWithId = {
    firstName: string;
    lastName: string;
    email: string;
    tasks: string[];
    teams: UserTeam[];
}

export default UserDetailsWithId;