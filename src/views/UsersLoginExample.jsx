import { useContext } from "react"
import CardUser from "../components/CardUser"
import Login2Example from "../components/Login2Example"
import { Context } from "../store/appContext"

const Users = () => {
    const { store } = useContext(Context)
    return (
        <div className="row pt-5">
            {
                store.user === null ?
                    <Login2Example />           
                    :
                   <div className="col-6 offset-3">
                       {
                           store?.userData?.users?.map(user => {
                               return (
                                   <div key={user.id}>
                                       {<CardUser user= {user} />}
                                   </div>
                               )
                            })
                       }
                    </div>
            }
        </div>
    )
}
export default Users;