import {useEffect, useState} from "react";

const DarkModeToggle=()=>{
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains("dark"))
    }, []);
    useEffect(() => {
        if (darkMode) {
            window.document.documentElement.classList.add('dark')
            localStorage.setItem("vidyaDarkMode", "true")
        } else {
            window.document.documentElement.classList.remove('dark')
            localStorage.setItem("vidyaDarkMode", "false")
        }
    }, [darkMode])

    const onClick = () => {
        setDarkMode(!darkMode)
    }
    return(  <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onClick={onClick}/>
        <div
            className="w-[48px] h-[24px] bg-[#AEB3CB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-[12px] peer dark:bg-dark_toggle peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-[#F1F3FA]  dark:after:bg-[#252B42]  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>)

}
export  default  DarkModeToggle;