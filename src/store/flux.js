import { createBrowserHistory } from 'history';
const getState = ({ getStore, getActions, setStore }) => { 
  let history = createBrowserHistory();
  return {
		store: {
      user: null,
      userData: null,
      email: '',
      password: ''
    } , 
		actions: {
			// Use getActions to call a function within a fuction
            handleChange: e => {
              const store = getStore()  
              setStore ({ ...store, [e.target.name]: e.target.value })
              },
              handleSubmitLogin: async e => { 
                try {
                  const store = getStore()
                  e.preventDefault()
                  const response = await fetch("https://reqres.in/api/login", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({email: store.email, password: store.password})
                  })
                  const data = await response.json()
                  const userLogged = await fetch('https://reqres.in/api/users/' + data.id)
                  const userLogged_info = await userLogged.json()
                  setStore({user: userLogged_info.data})
                } catch (error) {
                  console.error(error)
                }
            
              },
              sendForm: async state => {
                try {
                    const actions = getActions()
                    const store = getStore()
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/auth/login', {
                        method: 'POST',
                        headers: { "Content-type": "application/json"},
                        body: JSON.stringify(state)
                    })
                    const data = await resp.json()
                    setStore({...store, currentUser: data })
                    await actions.getSingleUser(data.token)
                } catch (error) {
                    console.error(error)
                }

              },
              
              sendFormRegister: async state => {
                try {
                    
                    const store = getStore()
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'https://3000-purple-primate-ri751mg6.ws-us21.gitpod.io/api/v1/auth/register/', {
                        method: 'POST',
                        headers: { "Content-type": "application/json"},
                        body: JSON.stringify(state)
                    })
                    
                    const data = await resp.json()
                    setStore({...store, currentUser: data })
                    history.push('/')
                } catch (error) {
                    console.error(error)
                }

              },

              sendCollabForm: async state => {
                try {
                  const actions = getActions()
                  const store = getStore()
                  const resp = await fetch( {
                    method: 'POST',
                    headers: { "Content-type": "application/json",
                    authorization: 'Bearer '+ store.user.token },
                    body: JSON.stringify(state)
                  })
                  const data = await resp.json()
                    await actions.getSingleUser(data.id)
                    setStore({ currentUser: data })
                } catch (error) {
                    console.log(error)
                }
              },
              
              getSingleUser: async (token) => {
                const store = getStore()
                try {
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/users', {
                        headers: { 
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${token}`
                    }
                    })
                    const data = await resp.json()
                    setStore({ userData: data })
                } catch (error) {
                    console.log(error) //UPS se me olvido xD!!!
                }
            },

              getMushroom: async () => {
                try {
                  const actions = getActions()
                  const store = getStore()
                  const resp = await fetch('localhost:5000/mushrooms?id=1&type=consumible', { //url de ejemplo para query params
                    method: 'GET',
                    headers: { "Content-type": "application/json",
                    authorization: 'Bearer '+ store.user.token },
                  })
                  const data = await resp.json()
                    await actions.getSingleMushroom(data.id)
                    setStore({ currentUser: data })
                } catch (error) {
                    console.log(error)
                }

		          }
      }
    }
};

export default getState;
