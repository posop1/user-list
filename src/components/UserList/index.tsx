import { FC } from 'react'
import { IUser } from '../../types/types'
import UserItem from '../UserItem'
import styles from './UserList.module.scss'

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.UserList}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  )
}

export default UserList
