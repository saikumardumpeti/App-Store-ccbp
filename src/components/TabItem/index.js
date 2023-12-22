// Write your code here
import './index.css'

const TabItems = props => {
  const {tabsItems, changingToNewTab, isActive} = props
  const {displayText, tabId} = tabsItems
  const activeTab = isActive ? 'atcive' : ''

  const onChangeTab = () => {
    changingToNewTab(tabId)
  }
  return (
    <li className={`list-tab ${activeTab}`}>
      <button type="button" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
