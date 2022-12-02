import PeopleContext from "./PeopleContext"

interface PeopleProviderProps {
    children: JSX.Element
}

const PeopleProvider = ({children}:PeopleProviderProps ) => {
  return (
      <PeopleContext.Provider value={{}}>
          {children}
   </PeopleContext.Provider>
  )
}
export default PeopleProvider