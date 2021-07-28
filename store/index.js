
export const state = () => ({
  oldValues: [
    { name: 'Американо', price: 50, sum: 869 },
    { name: 'Чай', price: 15, sum: 280 },
    { name: 'Горячий шоколад', price: 60, sum: 122 },
    { name: 'Латте', price: 90, sum: 87 },
    { name: 'Капучино', price: 80, sum: 221 },
    { name: 'Ванильный капучино', price: 0, sum: 0 },
    { name: 'Кофе с молоком', price: 60, sum: 186 },
    { name: 'Мокачино', price: 80, sum: 25 },
  ],
  newValues: [
    { name: 'Американо', price: 50, sum: 869 },
    { name: 'Чай', price: 15, sum: 280 },
    { name: 'Горячий шоколад', price: 60, sum: 122 },
    { name: 'Латте', price: 90, sum: 87 },
    { name: 'Капучино', price: 80, sum: 221 },
    { name: 'Ванильный капучино', price: 0, sum: 0 },
    { name: 'Кофе с молоком', price: 60, sum: 186 },
    { name: 'Мокачино', price: 80, sum: 25 },
  ]
})

export const mutations = {
  changeSum(state, obj){
    state.newValues[obj.index].sum = obj.newSum
  }
}
