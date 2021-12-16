const getState = ({ getStore, getActions, setStore }) => { 
  return {
		store: {
      user: null,
      userData: null,
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      token: '',

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
                  const response = await fetch('https://enigmatic-scrubland-84232.herokuapp.com/https://3000-purple-primate-ri751mg6.ws-us23.gitpod.io/api/v1/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({email: store.email, password: store.password})
                  })
                  const data = await response.json()
                  const userLogged = await fetch('https://enigmatic-scrubland-84232.herokuapp.com/https://3000-purple-primate-ri751mg6.ws-us23.gitpod.io/api/v1/auth/user' + data.id)
                  const userLogged_info = await userLogged.json()
                  localStorage.setItem("auth", JSON.stringify(userLogged_info))
                  setStore({user: userLogged_info.data})
                } catch (error) {
                  console.error(error)
                }
              },
              revalidate: (user) => {
                setStore({ CurrentUser: user })
              },

              login_user: async (user, history) => {
                console.log(user, history)
                
                  const userSaved = await fetch("https://3000-amaranth-ferret-7ryvtxp5.ws-us23.gitpod.io/api/v1/auth/login", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user),
                  })
                  const resp = await userSaved.json ()
                  console.log(resp)
                  setStore({ user: resp.user[0]});
                  setStore({ access_token: resp.token});
                  localStorage.setItem('token', resp.token)
                  history.push('/firstview')
            },
      /*         login_user: async (email, password, history) => {
                    const opts = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body:JSON.stringify({
                        email: email,
                        password: password
                      })
                    };
                    try{ 
                        const userSaved = await fetch("https://3000-amaranth-ferret-7ryvtxp5.ws-us23.gitpod.io/api/v1/auth/login")
                        if (userSaved.status !== 200){
                          alert("There has been some error");
                          return false;
                        }
                        
                        const resp = await userSaved.json ()
                          console.log("Esto viene del Backend", resp);
                          localStorage.setItem('access_token', resp.access_token)
                          return true;
                          //history.push('/firstview')
                      }
                      catch(error) {
                        console.error("Acá hay algo malo")
                      }
                    },            */
              
                observation_register: async state => {
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
              
              sendFormRegister: async (state, history) => {
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

              register_user: async (user) => {
                try {
                  const actions = getActions()
                  const store = getStore()
                  const resp = await 
                  fetch('https://3000-amaranth-ferret-7ryvtxp5.ws-us23.gitpod.io/api/v1/auth/register', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user),
                  })
                  const data = await resp.json();
                  //console.log(data)
                  setStore({...store, currentUser: data })
                  await actions.register_user(data.access_token)
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
              /*var requestOptions = {
              method: 'GET',
              redirect: 'follow'
              };

                fetch("{{url}}/mushrooms", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));*/
              
              
              // localStorage.setItem(key, value)
              //revalidate: (user) => {}
      }
    }
};

export default getState;

/*const getState = ({ getStore, getActions, setStore}) => {
  return (
      store: {
          currentUser: null
      } ,
      actions: {
          login: async (user_data) => {
              try {
               const resp = await fetch("localhost:5000/mushrooms?id=1&type=consumible", {
                  method: "POST",
                  headers: {"Content-type": "application/json"},
                  body: JSON.stringify(user_data)
               })
               const data = await resp.json()
               setStore({ currentUser: data})
              } catch (error) {
               console.log(error)
              }
          }
      }
  )
}

export default getState*/


