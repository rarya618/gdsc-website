import UserTeam from "./UserTeam";

type UserDetailsWithId = {
    firstName: string;
    lastName: string;
    email: string;
    hotspots: string[];
    teams: UserTeam[];
}

export default UserDetailsWithId;