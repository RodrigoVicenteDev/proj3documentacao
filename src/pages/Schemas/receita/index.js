function SchemaReceita() {
  return (
    <>
      <h1>Schema Receita</h1>
      <p> Estrutura do Schema no DB para o Model de Receita</p>
      <pre>
        <code
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            backgroundColor: " #f1f1f1",
            padding: "2px",
            width: "1000px",
          }}
        >

<span>const ReceitaSchema = new Schema{`({`}</span>

  <span>{"  "}<b>autor: </b>{`{ type: Schema.Types.ObjectId, ref: "Usuario" }`},</span>
  <span>{"  "}<b>imagemurl: </b>{`{type:String}`},</span>
  <span>{"  "}<b>imagemupload:</b>{`{type:String}`},</span>
 <span>{"  "}<b>nome:</b>{` { type: String, require: true }`},</span>
  <span>{"  "}<b>tempo:</b> {`{ type: Number, require: true }`},</span>
  <span>{"  "}<b>feito:</b>{` { type: Number }`},</span>
 <span>{"  "}<b>dificuldade:</b>{"{"}</span>
   <span>{"    "}type: String,</span>
    <span>{"    "}enum: {`["facil", "medio", "dificil"]`},</span>
    <span>{"    "}require: true,</span>
 <span>{"  "}{" }"},</span>
  <span>{"  "}<b>porcoes:</b>{`{ type: String, require: trus }`},</span>
 <span>{"  "}<b>ingredientes:</b> {`[{ type: String, require: true }]`},</span>
 <span>{"  "}<b>preparo: </b>{`[{ type: String, require: true }]`},</span>
 <span>{"  "}<b>comentarios:</b> {`[{ type: Schema.Types.ObjectId, ref: "Comentarios" }]`},</span>
  <span>{"  "}<b>favoritos:</b>{` {type:Number}`},</span>
{"});"}







        </code>
      </pre>
    </>
  );
}

export default SchemaReceita;