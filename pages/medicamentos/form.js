import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import validatorCadastro from '@/validators/validatorsCadastro'
import { mask } from 'remask'

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

    axios.post('/api/medicamentos', dados)
    push('/medicamentos')


    }
    function handlechange(event){
      const name = event.target.name
      const valor = event.target.value
      const mascara = event.target.getAttribute('mask')

      setValue(name, mask(valor, mascara));
    }
    return (
        <Pagina titulo='Medicamentos'>
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
                    <Form.Control mask='99/99/9999' type="text" {...register('validade', validatorCadastro.datainicio)} 
                    onChange={handlechange} />
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



                <div className='text-center'>

                    <Link className='btn btn-danger' href="/medicamentos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar

                    </Link>
                    <Button className='ms-2' variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className=' me-2' />
                        Salvar
                    </Button>
                </div>
            </Form>

        </Pagina>
    )
}

export default form