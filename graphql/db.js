export const people = [
    {
        id: "0",
        name: "DoYeonKim",
        age: 32,
        gender: "male"
    },
    {
        id: "1",
        name: "Jisoo",
        age: 28,
        gender: "female"
    },
    {
        id: "2",
        name: "GyeongRee",
        age: 30,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}