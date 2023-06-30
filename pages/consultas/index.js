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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>motivo</th>
            <th>Id do Medico</th>
            <th>Id do Paciente</th>
            <th>Data da consulta</th>
            <th>Horario</th>
            <th>observação</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/consultas/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.motivo}</td>
              <td>{item.medicoid}</td>
              <td>{item.pacienteid}</td>
              <td>{item.datainicio}</td>
              <td>{item.horario}</td>
              <td>{item.observacao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;