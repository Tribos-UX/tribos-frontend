import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const GroupsContext = createContext()

const initialGroupsListState = ['Grupo UX on Focus']

const GroupsProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState(initialGroupsListState)

  const getNumberOfListItems = () => groupsList.length

  const addItem = (newListItem) => {
    setGroupsList([...groupsList, newListItem])
  }

  const contextValue = {
    groupsList,
    getNumberOfListItems,
    addItem,
  }

  return (
    <GroupsContext.Provider value={contextValue}>
      {children}
    </GroupsContext.Provider>
  )
}

export const useGroupsContext = () => useContext(GroupsContext)

export default GroupsProvider
