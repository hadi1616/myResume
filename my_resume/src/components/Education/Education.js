import Navbar from '../NavBar/NavBar'
import ProgressBar from '../progress/ProgressBar'


function Education() {


  const testData = [

    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 60 },
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 30 },
    { bgcolor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), completed: 53 },
  ];

  return (
    <>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}

    </>
  )
}

export default Education