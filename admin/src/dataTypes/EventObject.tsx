import DateTime from "./DateTime"

type EventObject = {
    id: string,
    name: string,
    location: string,
    active: boolean,
    dateTime: DateTime
}

export default EventObject