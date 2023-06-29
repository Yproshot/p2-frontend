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

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

    axios.post('/api/exames', dados)
    push('/exames')


    }
    return (
        <Pagina titulo='Exames'>
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


                <Form.Group className="mb-3" controlId="medicoId">
                    <Form.Label>Id do Medico:</Form.Label>
                    <Form.Control type="text" {...register('medicoId', validatorCadastro.medicoId)} />
                </Form.Group>
                {errors.medicoId && (
                    <span className="error-message bg-dark text-danger">
                      {errors.medicoId.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="pacienteId">
                    <Form.Label>Id do Paciente:</Form.Label>
                    <Form.Control type="text" {...register('pacienteId', validatorCadastro.pacienteId)} />
                </Form.Group>
                {errors.pacienteId && (
                    <span className="error-message bg-dark text-danger">
                      {errors.pacienteId.message}
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


                <div className='text-center'>

                    <Link className='btn btn-danger' href="/exames">
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