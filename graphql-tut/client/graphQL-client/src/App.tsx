import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {gql,useQuery} from "@apollo/client"

// this is one way to todo connection and declare query 
// import {ApolloClient,InMemoryCache} from '@apollo/client'

// const client = new ApolloClient({
//   uri: 'http://localhost:8000/graphql',
//   cache: new InMemoryCache(),
// })

// const query = `
// query Query3 {
//   getTodos{
//     id
//     title
//     completed
//     userId
//     user{
//       name
//     }
    
    
//   }
// }
// `
const query = gql`
query GetTodosWithUser{
  getTodos{
    id
    title
    completed
    user{
      id
      name
    }
  }
} `


function App() {
  const {data,loading} = useQuery(query);
  console.log(data)


  if(loading) return <h1>Loading...</h1>
  return (
    <>
     <div className='App'>
{/* {JSON.stringify(data)}
 */}

 <table>
  <tbody>
    {
      data.getTodos.map(todo=><tr key={todo.id}>
        <td>{todo.title}</td>
        <td>{todo.completed === false? 0: 1}</td>
        {/* <td>{todo.user.id}</td> */}
        <td>{todo.user.name}</td>
      </tr>)
    }
  </tbody>
 </table>

     </div>
    </>
  )
}

export default App
