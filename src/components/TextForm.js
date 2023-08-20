import React, {useState} from 'react'

export default function TextForm(props) {
    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); // when we copy the text the blue color highlighter displays so to remove that i used 
        props.showAlert(" Copy Text ","success")
    }
    const extraSpace = ()=>{
        var newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra space removed ","success")
    }
    const handleUpClick = ()=>{
        //console.log("On Click");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase","success")
    }
    const handleLoClick = ()=>{
        //console.log("On Click");
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowercase","success")
    }
    const handleClearClick = ()=>{
        //console.log("On Click");
        let newText="";
        setText(newText)
        props.showAlert("Text is cleared","success")
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value)//Used for writing the text on the text area box
        props.showAlert(" Start Writing","success")
    }

   
      const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert(" Speak","success")
    }

    const [text, setText] = useState('enter Text');//the state can be changed by only using this way
    

  return (
    <>
        {/*<div className="container">
            <h1>Text Utilities</h1>
  </div>*/}
        <div className="d-flex justify-content-center">
      
      </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3 my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            </div>
           
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >
                Convert to UpperCase
            </button>
         
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                Convert to LowerCase
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                Clear text
            </button>
            <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={speak} id="toggle">
                Speak
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
                Copy
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={extraSpace}>
                Remove Spaces
            </button>
            

            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            
            <p>{text.length>0?text.trim().split(/\s+/).length:0} words and {text.length} characters</p>  {/* split(/\s+/) ===>Even new line */}
            <p>{0.08*(text.length>0?text.trim().split(" ").length:0)} Minutes read</p>
            
            <h2>Preview</h2>

            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>

        
    
  )
}
