import ToggleThemeButton from "./ui/ToggleThemeButton";

const Home = () => {
  return (
    
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-onBackground text-2xl">Home</h1>
      <ToggleThemeButton />
    </div>
    
  )
}

export default Home;