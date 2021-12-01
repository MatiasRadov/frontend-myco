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
              handleSubmit: async e => { 
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
            
              }
		}
	};
};

export default getState;
