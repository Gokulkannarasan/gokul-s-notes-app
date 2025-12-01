function Noteitem({text,id,deletenotes})
{
    return(
        <div style={{
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            width: "300px",
            borderRadius: "5px"
        }}>
      
          <p>{text}</p>

          <button style={{background:"red",color:"white",padding:"5px"}}
          onClick={()=>deletenotes(id)}
          >
            Delete
          </button>


        </div>
    );
}
export default Noteitem;