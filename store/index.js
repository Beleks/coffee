
export const state = () => ({
  sum: 0,
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
  ],
  history: [

  ]
})

export const mutations = {
  setSum(state, sum) {
    state.sum = sum
  },
  changeSum(state, obj) {
    state.newValues[obj.index].sum = obj.newSum
    console.log(state.newValues == state.oldValues)
    console.log(state.oldValues)
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
    state.oldValues = mas
  },
  setHistoryFromLS(state, mas) {
    state.history = mas
  },
  saveAfterResult(state, record) {
    // state.newValues[0].sum = 10
    // console.log(state.oldValues[0].sum, 'state.oldValues[0].sum 1')
    
    let oldV = JSON.stringify(state.newValues)
    // console.log(oldV, 'oldV')
    state.oldValues = JSON.parse(oldV)
    // state.newValues[0].sum = 10
    // console.log(state.oldValues[0].sum, 'state.oldValues[0].sum')
    localStorage.setItem('oldValues', oldV)



    let history = localStorage.getItem('history')
    if (history) {
      state.history = JSON.parse(history)
      state.history.unshift(record)
      localStorage.setItem('history', JSON.stringify(state.history))
    }
    else {
      state.history.unshift(record)
      localStorage.setItem('history', JSON.stringify(state.history))
    }
  },
}

export const actions = {
  getLocalData({ commit }) {
    let newValuesLS = localStorage.getItem('newValues')
    let oldValuesLS = localStorage.getItem('oldValues')
    let LShistory = localStorage.getItem('history')
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
    if (LShistory) {
      commit('setHistoryFromLS', JSON.parse(LShistory))
    }
  }
}
