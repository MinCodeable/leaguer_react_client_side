import { SmallButtonAlert } from "../UI/ButtonStyles"

export default function ButtonAlert() {

  function handleAlert(){
    alert("component button")
  }
  
  return (
      <SmallButtonAlert onclick={handleAlert}> Button </SmallButtonAlert>
  )
}
