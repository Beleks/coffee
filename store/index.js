
export const state = () => ({
  oldValues: [
    { name: 'Американо', price: 50, sum: 0 },
    { name: 'Чай', price: 15, sum: 0 },
    { name: 'Горячий шоколад', price: 60, sum: 0 },
    { name: 'Латте', price: 90, sum: 0 },
    { name: 'Капучино', price: 80, sum: 0 },
    { name: 'Ванильный капучино', price: 0, sum: 0 },
    { name: 'Кофе с молоком', price: 60, sum: 0 },
    { name: 'Мокачино', price: 80, sum: 0 },
  ],
  newValues: [
    { name: 'Американо', price: 50, sum: 0 },
    { name: 'Чай', price: 15, sum: 0 },
    { name: 'Горячий шоколад', price: 60, sum: 0 },
    { name: 'Латте', price: 90, sum: 0 },
    { name: 'Капучино', price: 80, sum: 0 },
    { name: 'Ванильный капучино', price: 0, sum: 0 },
    { name: 'Кофе с молоком', price: 60, sum: 0 },
    { name: 'Мокачино', price: 80, sum: 0 },
  ]
})

export const mutations = {
  changeSum(state, obj) {
    state.newValues[obj.index].sum = obj.newSum
    
    localStorage.setItem('newValues', JSON.stringify(state.newValues))
  },
  setNewValuesFromLS(state, mas) {
    state.newValues = mas
  },
  // setNewValuesToLS(state) {
  //   localStorage.setItem('newValues', state.newValues)
  // },
  // setOldValuesToLS(state) {
  //   localStorage.setItem('newValues', state.oldValues)
  // },
  setOldValuesFromLS(state, mas) {

  }
}
export const actions = {
  getLocalData({ commit }) {
    let newValuesLS = localStorage.getItem('newValues')
    let oldValuesLS = localStorage.getItem('oldValues')

    if (newValuesLS) {
      commit('setNewValuesFromLS', JSON.parse(newValuesLS))
    }
    else {
      // let firstValue = [
      //   { name: 'Американо', price: 50, sum: 869 },
      //   { name: 'Чай', price: 15, sum: 280 },
      //   { name: 'Горячий шоколад', price: 60, sum: 122 },
      //   { name: 'Латте', price: 90, sum: 87 },
      //   { name: 'Капучино', price: 80, sum: 221 },
      //   { name: 'Ванильный капучино', price: 0, sum: 0 },
      //   { name: 'Кофе с молоком', price: 60, sum: 186 },
      //   { name: 'Мокачино', price: 80, sum: 25 }
      // ]
      // localStorage.setItem('newValues', JSON.stringify(firstValue))
    }
    if (oldValuesLS) {
      commit('setOldValuesFromLS', JSON.parse(oldValuesLS))

    }
  }
}
