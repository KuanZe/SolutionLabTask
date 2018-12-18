// State

const initialState = {
    coffeeList: [],
    index: 0
}

//Reducer

export default (state = initialState, action) => {
    switch (action.type) {
     case 'ADD_COFFEE':
      return {
            ...state,
            coffeeList: action.payload
      }
      case 'REMOVE_COFFEE':
      return {
            ...state,
            coffeeList: action.payload
      }
      case 'INCREASE_INDEX':
      return {
            ...state,
            index: action.payload
      }
     default:
      return state
    }
   }

//Actions

const addCoffee = (newCoffee) => (dispatch, getState) => {
    let currentCoffeeList = getState().appState.coffeeList;
    newCoffee.id = getState().appState.index;
    currentCoffeeList = currentCoffeeList.concat([newCoffee]);
    dispatch({
     type: 'ADD_COFFEE',
     payload: currentCoffeeList
    })
    dispatch({
        type: 'INCREASE_INDEX',
        payload: newCoffee.id + 1
       })
   }

const removeCoffee = (id) => (dispatch, getState) => {
    let currentCoffeeList = [...getState().appState.coffeeList];
    let removeIndex = currentCoffeeList.map(function(item) { return item.id; })
                       .indexOf(id);
    if (removeIndex !== -1) {
        currentCoffeeList.splice(removeIndex, 1);
        dispatch({
        type: 'REMOVE_COFFEE',
        payload: currentCoffeeList
        })
      }
   }


export const actions = {
    addCoffee,
    removeCoffee
}