import arrSort from '../app';
const arr1 = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
]

const arr2 = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
]

test('sort to health', () => {
    const recieved = arrSort(arr1);
    expect(recieved).toEqual(arr2);
})