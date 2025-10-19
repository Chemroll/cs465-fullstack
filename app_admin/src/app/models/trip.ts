export interface Trip {
    _id: string, //Internal primary key in MongoDB
    code: string,
    name: string,
    lenght: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
}