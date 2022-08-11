// import Navbar from '../NavBar/NavBar'
import ProgressBar from '../progress/ProgressBar'
import '../progress/Progress.css'
import '../Education/Education.css'
import Slide from "react-reveal";


function Education() {


  const testData = [

    { bgcolor: '#B85042', completed: 92, language: 'React.js' },
    { bgcolor: '#6883BC', completed: 86, language: 'Node.js/Expess' },
    { bgcolor: '#79b043', completed: 95, language: 'javascript' },
    { bgcolor: '#908501', completed: 74, language: 'CSS/SCSS' },
    { bgcolor: '#a88074', completed: 88, language: 'PostgreSQL' },
    { bgcolor: '#821717', completed: 85, language: 'MongoDB' },
    { bgcolor: '#20a0ab', completed: 88, language: 'WordPress' },
    { bgcolor: '#d88a46', completed: 68, language: 'Access' },
    { bgcolor: '#234E70', completed: 82, language: 'C#' },
    { bgcolor: '#6D2D4f', completed: 70, language: 'Java' },
    { bgcolor: '#006F62', completed: 79, language: 'Python' },
    { bgcolor: '#9D315A', completed: 72, language: 'C' },
    { bgcolor: '#E3B448', completed: 68, language: 'PHP' },
  ];
//i should make the coding language appearing slowly
  return (
    <>
      <div className='mainContainer'>
        <Slide top duration={1100}>
          <h1 className={'H1Education'}>Education</h1>
        </Slide>
        <div className={'ProgressBar'}>
          {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} language={item.language} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Education