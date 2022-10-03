function Deletes() {
    return ( 
<>
 <pre>
                <p>Deletar usuario:</p>
            <code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
  backgroundColor:" #f1f1f1",
  padding: "2px",
  width:"900px"
  }}>
<span><b>Verbo:</b>DELETE</span>
<span><b>EndPoint:</b>/usuario/deletar/</span>

  </code>
 

<p>Deletar Receita:</p>
<code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
backgroundColor:" #f1f1f1",
padding: "2px",
width:"900px"
}}>
<span><b>Verbo:</b>DELETE</span>
<span><b>EndPoint:</b>/receita/deletar/{`{id}`}</span>

</code>


<p>Deletar Comentario:</p>
<code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
backgroundColor:" #f1f1f1",
padding: "2px",
width:"900px"
}}>
<span><b>Verbo:</b>DELETE</span>
<span><b>EndPoint:</b>/comentario/deletar/{`{id}`}</span>

</code>

<p>Deletar Resposta:</p>
<code style={{display:"flex", flexDirection:"column" ,textAlign:"left", 
backgroundColor:" #f1f1f1",
padding: "2px",
width:"900px"
}}>
<span><b>Verbo:</b>DELETE</span>
<span><b>EndPoint:</b>/resposta/deletar/{`{id}`}</span>

</code>


</pre>
</>
     );
}

export default Deletes;