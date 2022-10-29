import { FC } from 'react'
import { IUser } from '../../types/types'
import styles from './UserItem.module.scss'

const UserItem: FC<IUser> = ({ id, name, email, address }) => {
  return (
    <div className={styles.UserItem}>
      {id}. {name} проживает в городе {address.city} на улице {address.street}
      email: {email}
    </div>
  )
}

export default UserItem
