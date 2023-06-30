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
  const [exames, setExames] = useState([]);

  useEffect(() => {
      axios.get('/api/exames').then( resultado => {
        setExames(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/exames').then(resultado => {
      setExames(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/exames/' + id)
      getAll()
    }
  }

  

  return (
    <Pagina titulo="Exames">

      <Link href="/exames/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Tipo de Exame</th>
            <th>Id do Medico</th>
            <th>Id do Paciente</th>
            <th>data do exame</th>
            <th>data do resultado</th>
          </tr>
        </thead>
        <tbody>
          {exames.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/exames/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.exame}</td>
              <td>{item.medicoId}</td>
              <td>{item.pacienteId}</td>
              <td>{item.dataInicio}</td>
              <td>{item.dataFim}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;