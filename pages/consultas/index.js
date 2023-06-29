import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion, Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Fa } from "react-icons";
import { FaRegTrashAlt } from "react-icons/Fa"
import { BiEditAlt } from "react-icons/Bi"
import axios from "axios";

const index = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
      axios.get('/api/consultas').then( resultado => {
        setConsultas(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/consultas').then(resultado => {
      setConsultas(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/consultas/' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Consultas">

      <Link href="/consultas/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      {consultas.map(item => (
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.id}{"  "}{item.motivo}</Accordion.Header>
        <Accordion.Body>
          <p>Id do paciente: {item.pacienteId}</p>
          <p>Id do medico: {item.medicoId}</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
       ))}
    </Pagina>
  );
};

export default index;