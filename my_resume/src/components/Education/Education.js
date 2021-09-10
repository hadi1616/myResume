import Navbar from '../NavBar/NavBar'
import ProgressBar from '../progress/ProgressBar'
import '../progress/Progress.css'


function Education() {


  const testData = [

    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 53 , language:'React'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'CSS & SCSS'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 30 , language:'javascript'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'node.js & expess'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'PostgreSQL'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'MongoDB'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'Access'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'Java'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'Python'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'C'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'C#'},
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 , language:'PHP'},
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