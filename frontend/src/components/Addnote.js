import { useState } from "react";

function Addnote({addnote})
{
    const [text,setText] = useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(text.trim()=="") return;

        addnote(text);
        setText("");
    };

    return(
        <form onSubmit={handlesubmit} style={{margin:"20px"}}>

            <input
             type="text" 
             value={text}
             onChange={(e) => setText(e.target.value)}
             placeholder="write a note..."
             style={{padding:"10px",width:"250px"}}
            ></input>

            <button type="submit" style={{padding:"10px", marginLeft:"10px"}}>Add</button>

        </form>
    )
}

export default Addnote;