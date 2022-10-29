import axios from 'axios'
import { useEffect, useState } from 'react'
import UserList from './components/UserList'
import './styles/app.scss'
import { IUser } from './types/types'

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  )
}

export default App
