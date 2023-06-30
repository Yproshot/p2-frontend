import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion, Col, Row, Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Fa } from "react-icons";
import { FaRegTrashAlt } from "react-icons/Fa"
import { BiEditAlt } from "react-icons/Bi"
import axios from "axios";

const index = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
      axios.get('/api/pacientes').then( resultado => {
        setPacientes(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/pacientes').then(resultado => {
      setPacientes(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/pacientes/' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Pacientes">

      <Link href="/pacientes/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>id</th>
            <th>telefone</th>
            <th>CPF</th>
            <th>email</th>
            <th>cep</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/pacientes/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.nome}</td>
              <td>{item.id}</td>
              <td>{item.telefone}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.cep}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  );
};

export default index;