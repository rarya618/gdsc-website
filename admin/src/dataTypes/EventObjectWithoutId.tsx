import DateTime from "./DateTime"

type EventObjectWithoutId = {
    name: string,
    location: string,
    active: boolean,
    dateTime: DateTime
}

export default EventObjectWithoutId