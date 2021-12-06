const getState = ({ getStore, getActions, setStore }) => {
	let store = {
    user: null,
    email: '',
    password: ''
  } 
  return {
		store, 
		actions: {
			// Use getActions to call a function within a fuction
            handleChange: e => {
                setStore ({ ...store, [e.target.name]: e.target.value })
              },
              handleSubmitLogin: async e => { 
                try {
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
              }
		}
	};
};

export default getState;
