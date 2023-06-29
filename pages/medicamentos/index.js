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
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
      axios.get('/api/medicamentos').then( resultado => {
        setMedicamentos(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/medicamentos').then(resultado => {
      setMedicamentos(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/medicamentos/' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Medicamentos">

      <Link href="/medicamentos/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>curso</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/medicamentos/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;