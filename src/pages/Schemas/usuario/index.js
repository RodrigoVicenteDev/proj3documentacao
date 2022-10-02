function SchemaUsuario() {



  
      
    return ( <>
    <h1>Schema Usuario</h1>
    <p> Estrutura do Schema no DB para o Model de Usuario</p>
<pre>
    <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"1000px"
  }}>





    <span>const UsuarioSchema = new Schema{`(`}{`{`}{"{"}</span><br></br>

      <span>  <b>nome:</b> {`{ type: String, require: true },`}<br></br></span>
      <span>  <b>email:</b>{" {"}<br></br></span>
      <span>  {"  "}  <b>type:</b> String,<br></br></span>
      <span>  {"  "}  <b>required:</b> true,<br></br></span>
      <span>  {"  "}  <b>unique:</b> true,<br></br></span>
      <span>  {"  "}  <b>match:</b>{" /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,"}<br></br></span>
     <span>  {" },"}<br></br></span>
    <span>  <b>receitas:</b>{` [{ type: Schema.Types.ObjectId, ref: "Receita" }],`}<br></br></span>
    <span>  <b>favoritas:</b>{` [{ type: Schema.Types.ObjectId, ref: "Receita" }],`}<br></br></span>
    <span>  <b>comentarios:</b>{` [{ type: Schema.Types.ObjectId, ref: "Comentario" }],`}<br></br></span>
     <span>  <b>resposta:</b> {`[{ type: Schema.Types.ObjectId, ref: "Resposta" }],`}<br></br></span>
     <span>  <b>passwordHash: </b>{`{ type: String, required: true },`}<br></br></span>
     <span>  <b>emailConfirm:</b>{` { type: Boolean, default: false },`}<br></br></span>
     <span>  <b>profilePic:</b>{" {"}<br></br></span>
     <span>   {"  "} <b> type: String,</b><br></br></span>
    <span>    {"  "} <b>default:</b><br></br></span>
     <span>   {"  "}    "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png",<br></br></span>
     <span>  {" }"},<br></br></span>
   <span>  {" });"}<br></br></span>
        
  
    </code>
    </pre>
    </> );
}

export default SchemaUsuario;