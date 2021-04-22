import { useContext } from 'react'
import { Route as ReactRoute, Redirect } from 'react-router'
import { Store } from '../App'

export const Route = ({component: Component, isPrivate, ...props}) => {

    const {state: {
        isAuthenticated
    }} = useContext(Store)

    return (
        <ReactRoute render={(props) => {
            if (isPrivate &&!isAuthenticated) {
                return (
                    <Redirect to={{
                        pathname: '/restricted',
                        state: {from: window.location.pathname}
                    }}/>
                )
            }

            return <Component {...props}/>
        }} {...props}/>
    )
}