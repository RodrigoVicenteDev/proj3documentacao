function SchemaComentario() {
  return (
    <>
      <h1>Schema Comentario</h1>
      <p> Estrutura do Schema no DB para o Model de Comentario</p>
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


<span>const ComentarioSchema = new Schema(</span>
    <span>{"{"}</span>
    <span>{" "} <b>autor:</b>{`{ type: Schema.Types.ObjectId, ref: "Usuario" }`},</span>
    <span>{" "} <b>content:</b> {`{ type: String, require: true, minlength: 1, maxlength: 300 }`},</span>
    <span>{" "} <b>resposta:</b>{`[{ type: Schema.Types.ObjectId, ref: "respostas" }],`}</span>
    <span>{" "} <b>avaliacao:</b>{`{ type: Number }`},</span>
  <span>{"}"},</span>
  <span>{`{ timestamps: true }`}</span>
<span>);</span>


        </code>
      </pre>
    </>
  );
}

export default SchemaComentario;
