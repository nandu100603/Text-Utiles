import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  
}

const toggleMode = (cls) =>{
  removeBodyClasses()
  document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert(" Dark mode has been enabled","success");
  //document.title='TextUtils - Dark Mode' 
  setInterval(()=>{
document.title = 'TextUtils is Amazing Mode'; // Dynamically change the title
  },2000);

  setInterval(()=>{
   // document.title = 'Install TextUtils Now';
      },15000);


  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert(" Light mode has been enabled","success");
    document.title = 'TextUtiles - Light Mode' // Dynamically change the title
  }
}


  return (
    <>    
{/*<Navbar tit="Neha" abo="Anjali"/>
<Navbar/>
<Navbar tit="Man"/> 
  <Navbar/>*/}
  
   <>   

<Navbar tit="TextUtils" mode={mode} toggleMode={toggleMode}/>
{/*
<Alert alert={alert}/>
<div className='container my-4' mode={mode}>
   
    
<About mode={mode}/>  */}
         
 <TextForm showAlert={showAlert} heading="Try TextUtiles - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>    {/* exact path if we put this means the react do exact matching else partial matching*/}

  
  
  
  </>


    </>
  );
}
export default App;