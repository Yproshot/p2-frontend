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
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
      axios.get('/api/medicos').then( resultado => {
        setMedicos(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/medicos').then(resultado => {
      setMedicos(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/medicos/' + id)
      getAll()
    }
  }
console.log(medicos)
  return (
    <Pagina titulo="Medicos">

      <Link href="/medicos/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Salario</th>
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
          {medicos.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/medicos/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
            <th>{item.nome}</th>
            <th>{item.cpf}</th>
            <th>{item.matricula}</th>
            <th>{item.id}</th>
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