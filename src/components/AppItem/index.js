// Write your code here
import './index.css'

const AppItem = props => {
  const {appsLists} = props
  const {appName, imageUrl} = appsLists
  return (
    <li className="list-item-image">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
