import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsSave } from "react-icons/bs"
import { AiOutlineRollback } from "react-icons/ai"
import axios from "axios";
import validatorCadastro from "@/validators/validatorsCadastro";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if(query.id){
      axios.get('/api/exames/' + query.id).then(resultado => {
        const exames = resultado.data
        
        
        for(let atributo in exames){
          setValue(atributo, exames[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/exames/' + query.id, dados)
    push('/exames/')

  }

  return (
    <Pagina titulo="Exames">
            <Form>
                <Form.Group className="mb-3" controlId="exame">
                    <Form.Label>Tipo do Exame:</Form.Label>
                    <Form.Control type="text" {...register('exame', validatorCadastro.exame)} />
                </Form.Group>
                {errors.exame && (
                    <span className="error-message bg-dark text-danger">
                      {errors.exame.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="medicos.id">
                    <Form.Label>Id do Medico:</Form.Label>
                    <Form.Control type="text" {...register('medicos.id', validatorCadastro.medicos.id)} />
                </Form.Group>
                {errors.medicos.id && (
                    <span className="error-message bg-dark text-danger">
                      {errors.medicos.id.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="pacientes.id">
                    <Form.Label>Id do Paciente:</Form.Label>
                    <Form.Control type="text" {...register('pacientes.id', validatorCadastro.pacientes.id)} />
                </Form.Group>
                {errors.pacientes.id && (
                    <span className="error-message bg-dark text-danger">
                      {errors.pacientes.id.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="dataInicio">
                    <Form.Label>Data do exame:</Form.Label>
                    <Form.Control type="text" {...register('dataInicio', validatorCadastro.dataInicio)}/>
                </Form.Group>
                {errors.dataInicio && (
                    <span className="error-message bg-dark text-danger">
                      {errors.dataInicio.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="dataFim">
                    <Form.Label>Data do resultado:</Form.Label>
                    <Form.Control type="text" {...register('dataFim', validatorCadastro.dataFim)}/>
                </Form.Group>
                {errors.dataFim && (
                    <span className="error-message bg-dark text-danger">
                      {errors.dataFim.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="observacao">
                    <Form.Label>Observação:</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" {...register('observacao', validatorCadastro.observacao)}/>
                </Form.Group>
                {errors.observacao && (
                    <span className="error-message bg-dark text-danger">
                      {errors.observacao.message}
                    </span>
                  )}

      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/exames'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;