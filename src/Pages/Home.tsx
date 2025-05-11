import { useEffect } from "react"



const Home = () => {
  useEffect(() => {
    fetch('http://localhost:5296/api/todotask/')
      .then(res => res.text())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <h1>Welcome to the Checkers Game</h1>
      <div className="w-auto flex justify-around mt-10">
        <button>Create room</button>
        <button>Join room</button>
      </div>
    </>


  )
}

export default Home