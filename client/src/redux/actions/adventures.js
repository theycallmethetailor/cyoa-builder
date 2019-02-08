//EXAMPLE:
// export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED'
// export function fetchProducts() {
//   return async (dispatch) => {
//     const response = await fetch(`http://localhost:8082/api/products`)
//     const json = await response.json()
//     dispatch({
//       type: PRODUCTS_RECEIVED,
//       products: json._embedded.products
//     })
//   }
// }

export const GET_ADVENTURES = 'GET_ADVENTURES';
export const getAdventures = () => {
    return async dispatch => {
        fetch('http://127.0.0.1:8000/index')
            .then(response => response.json())
            .then(adventures => {
                dispatch({
                    type: GET_ADVENTURES,
                    payload: adventures.adventures
                })
            })
            .catch(err => console.log(err))
    }

}

export const GET_ADVENTURE = 'GET_ADVENTURE'
export const getAdventure = id => {
    return async dispatch => {
        fetch(`http://127.0.0.1:8000/adventures/${id}`)
            .then(response => response.json())
            .then(adventure => {
                dispatch({
                    type: GET_ADVENTURE,
                    payload: adventure
                })
            })
    }
}


export const ADD_ADVENTURE = 'ADD_ADVENTURE';
export const ADVENTURE_ERROR = 'ADVENTURE_ERROR'
export const addAdventure = newAdventure => {
    console.log(newAdventure)
    return async dispatch => {
        fetch('http://127.0.0.1:8000/adventures/new', {
            method: 'POST',
            body: JSON.stringify(newAdventure),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: ADD_ADVENTURE,
                    payload: response
                })
            })
            .catch(err => {
                dispatch({
                    type: ADVENTURE_ERROR,
                    payload: err
                })
            })
    }
}
