import UserTeam from "./UserTeam";

type UserDetails = {
    firstName: string;
    lastName: string;
    email: string;
    hotspots: string[];
    teams: UserTeam[];
}

export default UserDetails;