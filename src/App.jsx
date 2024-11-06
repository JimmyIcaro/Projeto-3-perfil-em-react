import Profile from "./components/Profile"

export default function App(){
  return(
    <body>
      <Profile img={'./profile.jpeg'} name={'Jimmy Icaro'} bio={'Estudante de Desenvolvimento de Sistemas da EEEP Deputado Roberto Mesquita'} phone={'+55 85 9128-9051'} email={'jimmyicaro6@gmail.com'} instagramUrl={'https://www.instagram.com/jimmylegals/'} githubUrl={'https://github.com/JimmyIcaro'} twitterUrl={'https://x.com/MinecraftBruh6'}></Profile>
    </body> 
  )
}