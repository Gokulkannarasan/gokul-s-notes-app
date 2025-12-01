import Noteitem from "./Noteitem";
function Noteslist({notes,deletenotes})
{
    return(

        <div style={{margin:"20px"}}>

            {notes.length===0?(<p>No notes yet.</p>):
            (
                notes.map((note,index)=>(
                    <Noteitem
                        key={index}
                        text={note.text}
                        id={note.id}
                        deletenotes={deletenotes}
                    />
                ))
            )}

        </div>

    );

}
export default Noteslist;