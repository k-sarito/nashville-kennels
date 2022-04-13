import React, { useEffect, useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button><br/>
     </> 
  )
}

export const MadLib = () => {
  let [madLibrary, setMadLibrary] = useState({})

  const libObject = {
  pluralNoun1: "unicorns",
   adjective1: "pretty",
   noun: "street",
   typeOfFood: "mexican",
   articleOfClothing: "dickey",
   verbEndingIning: "wallowing",
   pluralNoun2: "trees",
   pluralNoun3: "lasers",
   numberVal: "113",
   celebrity: "Taylor Swift",
   color: "golden rod",
   verbEndingIning2: "licking",
   typeOfFood: "Italian sweets",
   pluralNoun: "concrete shoes",
   adjective2: "gloomy",
   adjective3: "claustrophobic"
  }


  useEffect(() => {
    setMadLibrary(libObject)
  }, [])


  return (
    <>
      <h3>Mad Lib</h3>
      <p>Would it surprise you to learn that the most majestic {madLibrary.pluralNoun1} in the world eat garbage? Well, they do! Everything from {madLibrary.adjective3} soda cans to {madLibrary.noun}-stained type of food boxes to used article of clothing - and more! Some have been spotted {libObject.verbEndingIning2} dumpsters and then using their long {madLibrary.pluralNoun} to spear as many bags of {madLibrary.pluralNoun2} as they can before being caught. According to an interview with the Number Minutes News, {madLibrary.celebrity} once came home to find a {madLibrary.color} unicorn {madLibrary.verbEndingIning} up in the recycling bin. The poor thing had mistaken leftover type of food for dried up {madLibrary.pluralNoun3}. "It was a {madLibrary.adjective1} mistake. I am a good cook!"</p>
    </>
  )

}