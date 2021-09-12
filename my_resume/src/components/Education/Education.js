import Navbar from '../NavBar/NavBar'
import ProgressBar from '../progress/ProgressBar'
import '../progress/Progress.css'


function Education() {


  const testData = [

    { bgcolor:'#3c7990' , completed: 92, language:'React.js '},
    { bgcolor:'#d88a46', completed: 68, language:'Access '},
    { bgcolor:'#908501', completed: 74, language:'CSS & SCSS '},
    { bgcolor: '#15cf9b', completed: 82, language:'C#'},
    { bgcolor:'#C22E0B', completed: 86, language:'node.js & expess'},
    { bgcolor: '#6D2D4f', completed: 70, language:'Java'},
    { bgcolor: '#79b043', completed: 95, language:'javascript'},
    { bgcolor:'#006F62', completed: 79, language:'Python'},
    { bgcolor: '#a88074', completed: 88, language:'PostgreSQL'},
    { bgcolor:'#9D315A', completed: 72 , language:'C'},
    { bgcolor: '#821717', completed: 85 , language:'MongoDB'},
    { bgcolor:'#20a0ab', completed: 68 , language:'PHP'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 53 , language:'React'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'Access'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'CSS & SCSS'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'C#'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'node.js & expess'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'Java'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 30 , language:'javascript'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'Python'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'PostgreSQL'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'C'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'MongoDB'},
    // { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'PHP'},
  ];

  return (
    <>
    <div className={'ProgressBar'}>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} language={item.language}/>
      ))}
      </div>
    </>
  )
}

export default Education