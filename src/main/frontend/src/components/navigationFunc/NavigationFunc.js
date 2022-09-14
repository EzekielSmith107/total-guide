import { useState } from "react"
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"

const NavigationFunc = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    </>
  )
}

export default NavigationFunc