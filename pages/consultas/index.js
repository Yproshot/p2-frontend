import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logadouro</th>
            <th>Complemento</th>
            <th>Num.</th>
            <th>Bairro</th>
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
              <th>{item.nome}</th>
            <th>{item.cpf}</th>
            <th>{item.matricula}</th>
            <th>{item.email}</th>
            <th>{item.telefone}</th>
            <th>{item.cep}</th>
            <th>{item.logadouro}</th>
            <th>{item.complemento}</th>
            <th>{item.numero}</th>
            <th>{item.bairro}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;