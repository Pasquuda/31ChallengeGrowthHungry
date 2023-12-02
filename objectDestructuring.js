const personInfo = (person) => {
    const {
        name,
        age: personAge,
        location: {country: origin, city: homeCity},
        friendsQty = 0, createdAtYear = new Date().getFullYear()
    } = person
    return {
        name,
        personAge,
        origin,
        homeCity,
        friendsQty,
        createdAtYear
    }
}

const person = {
    name: 'Alice',
    age: 19,
    location: {
        country: 'England',
        city: 'London',
    },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/