import DateTime from "./DateTime"

type EventObjectWithoutId = {
    name: string,
    location: string,
    active: boolean,
    dateTime: DateTime,
    members: string[]
}

export default EventObjectWithoutId