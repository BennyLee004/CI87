import React, {useEffect} from 'react'

function ExampleLesoon8() {
    useEffect(() => {
        const handleScroll = () => {
            const position = document.documentElement.scrollTop;
            console.log("Scrolling position", position)
        }
        document.addEventListener("scroll", handleScroll)
        return   () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, []);
  return (
    <div>ExampleLesoon8</div>
  )
}

export default ExampleLesoon8