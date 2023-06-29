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
      axios.get('/api/medicamentos/' + query.id).then(resultado => {
        const medicamentos = resultado.data
        
        
        for(let atributo in medicamentos){
          setValue(atributo, medicamentos[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/medicamentos/' + query.id, dados)
    push('/medicamentos/')

  }

  return (
    <Pagina titulo="Medicamentos">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome', validatorCadastro.nome)} />
                </Form.Group>
                {errors.nome && (
                    <span className="error-message bg-dark text-danger">
                      {errors.nome.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="codigo">
                    <Form.Label>Codigo:</Form.Label>
                    <Form.Control type="text" {...register('codigo', validatorCadastro.codigo)} />
                </Form.Group>
                {errors.codigo && (
                    <span className="error-message bg-dark text-danger">
                      {errors.codigo.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="dosagem">
                    <Form.Label>Dosagem:</Form.Label>
                    <Form.Control type="text" {...register('dosagem', validatorCadastro.dosagem)} />
                </Form.Group>
                {errors.dosagem && (
                    <span className="error-message bg-dark text-danger">
                      {errors.dosagem.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="validade">
                    <Form.Label>Validade:</Form.Label>
                    <Form.Control type="text" {...register('validade', validatorCadastro.validade)} />
                </Form.Group>
                {errors.validade && (
                    <span className="error-message bg-dark text-danger">
                      {errors.validade.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control type="text" {...register('quantidade', validatorCadastro.quantidade)} />
                </Form.Group>
                {errors.quantidade && (
                    <span className="error-message bg-dark text-danger">
                      {errors.quantidade.message}
                    </span>
                  )}

      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/medicamentos'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;