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
import { mask } from "remask";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if(query.id){
      axios.get('/api/consultas/' + query.id).then(resultado => {
        const consultas = resultado.data
        
        
        for(let atributo in consultas){
          setValue(atributo, consultas[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/consultas/' + query.id, dados)
    push('/consultas/')

  }

  function handlechange(event){
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(valor, mascara));
  }

  return (
    <Pagina titulo="Consultas">
       <Form>
                                      <Form.Group className="mb-3" controlId="motivo">
                    <Form.Label>Motivo da consulta:</Form.Label>
                    <Form.Control type="text" {...register('motivo', validatorCadastro.motivo)} />
                </Form.Group>
                {errors.motivo && (
                    <span className="error-message bg-dark text-danger">
                      {errors.motivo.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="pacienteid">
                    <Form.Label>Id do paciente:</Form.Label>
                    <Form.Control type="text" {...register('pacienteid', validatorCadastro.pacienteid)}
                     />
                </Form.Group>
                {errors.pacienteid && (
                    <span className="error-message bg-dark text-danger">
                      {errors.pacienteid.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="medicoid">
                    <Form.Label>Id do Medico:</Form.Label>
                    <Form.Control type="text" {...register('medicoid', validatorCadastro.medicoid)} />
                </Form.Group>
                {errors.medicoid && (
                    <span className="error-message bg-dark text-danger">
                      {errors.medicoid.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="datainicio">
                    <Form.Label>Data da consulta:</Form.Label>
                    <Form.Control mask='99/99/9999' type="text" {...register('datainicio', validatorCadastro.datainicio)}  onChange={handlechange}/>
                </Form.Group>
                {errors.datainicio && (
                    <span className="error-message bg-dark text-danger">
                      {errors.datainicio.message}
                    </span>
                  )}
                
                <Form.Group className="mb-3" controlId="horario">
                    <Form.Label>Horario:</Form.Label>
                    <Form.Control mask='99:99' type="text" {...register('horario', validatorCadastro.horario)}
                    onChange={handlechange} />
                </Form.Group>
                {errors.horario && (
                    <span className="error-message bg-dark text-danger">
                      {errors.horario.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="observacao">
                    <Form.Label>Observação:</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" {...register('observacao', validatorCadastro.observacao)} 
                    />
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
      <Link className="ms-2 btn btn-danger" href={'/consultas'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;