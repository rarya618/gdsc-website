import DateTime from "./DateTime"

type EventObject = {
    id: string,
    name: string,
    location: string,
    active: boolean,
    dateTime: DateTime,
    members: string[]
}

export default EventObject