import axios from 'axios'
import { useEffect, useState } from 'react'
import List from './components/List'
import UserItem from './components/UserItem'
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
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            key={user.id}
          />
        )}
      />
    </div>
  )
}

export default App
