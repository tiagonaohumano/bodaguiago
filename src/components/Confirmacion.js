import React from "react";
import '../components/ConfirmacionStyles.css';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap"
import swal from 'sweetalert';



export default function Confirmacion() {

    const { register, reset, watch } = useForm()
    const incluirNombre1 = watch('incluirNombre1');
    const incluirNombre2 = watch('incluirNombre2');
    const incluirNombre3 = watch('incluirNombre3');

    function clickMe() {
        swal ({
            title: "Confirmado!",
            text: "Su confirmación ha sido enviada con éxito",
            icon: "success",
            button: "ok",
        });
    }
    
  
    function Submit(e) {
        const formElement = document.querySelector("form")
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(formElement)
        fetch("https://script.google.com/macros/s/AKfycbxMm1C4zcfzDQbZufaF6g4FKsF4STwxRda4vuBpHcMt6Fxtl5bl8ZBVL166Z5-iFxJWHw/exec", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            console.log(data)
        }).catch((error) => console.log(error));
        reset();

    }

    return (

        <Container className="confirmacion-container" id="confirmacion">
            <Row>
                <Col sm={12}>
                    
                    

                    <form className="form" onSubmit={(e) => Submit(e)}>

                        <div className='container'>
                            <div className='title'>
                                <h2>Confirmación</h2>
                            </div>
                        </div>

                        <div className="checkbox-questions col-sm-12">
                            <input placeholder="Nombre" name="Nombre" id="Nombre" type="text" />
                            <input placeholder="Nombre" name="Nombre1" type="text" />

                            <div className="form-group checkbox-group">
                                <label>Añadir Nombres:</label>

                                <div className="checkbox-options">
                                    <input className="checkbox" type="checkbox" id="incluirNombre1" name="active" {...register('incluirNombre1')} />
                                    <label for="incluirNombre1">+1</label>
                                    <input className="checkbox" type="checkbox" id="incluirNombre2" name="active" {...register('incluirNombre2')} />
                                    <label for="incluirNome2">+2</label>
                                    <input className="checkbox" type="checkbox" id="incluirNombre3" name="active" {...register('incluirNombre3')} />
                                    <label for="incluirNombre3">+3</label>
                                </div>
                            </div>

                            {incluirNombre1 && (
                                <input placeholder="Nombre" name="Nombre2" type="text" />
                            )}

                            {incluirNombre2 && (
                                <div>
                                    <input placeholder="Nombre" name="Nombre2" type="text" />
                                    <input placeholder="Nombre" name="Nombre3" type="text" />
                                </div>
                            )}

                            {incluirNombre3 && (
                                <div>
                                    <input placeholder="Nombre" name="Nombre2" type="text" />
                                    <input placeholder="Nombre" name="Nombre3" type="text" />
                                    <input placeholder="Nombre" name="Nombre4" type="text" />
                                </div>
                            )}
                        </div>


                        <div className="radio-questions col-sm-12">

                            <hr />

                            <div className="col-sm-12 radio-group">
                                <div className="col-sm-4 col-md-4">
                                    <legend className="form-pergunta">Autobus de Madrid:</legend>
                                </div>
                                <div className="col-sm-4 col-md-6 radio-group">
                                    <div className="form-group form-radio">
                                        <input className="radio" type="radio" id="autobusMadridSi" name="AutobusMadrid" value="Sí" />
                                        <label for="autobusMadridSi">Sí</label>
                                    </div>
                                    <div className="form-group form-radio">
                                        <input className="radio" type="radio" id="autobusMadridNo" name="AutobusMadrid" value="No" />
                                        <label for="autobusMadridNo">No</label>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="col-sm-12 radio-group">
                                <div className="col-sm-4 col-md-4">
                                    <legend className="form-pergunta">Autobus de Rascafría:</legend>
                                </div>
                                <div className="col-sm-4 col-md-6 radio-group">
                                    <div className="form-group form-radio">
                                        <input className="radio" type="radio" id="autobusMadridSi" name="AutobusRascafria" value="Sí" />
                                        <label for="autobusMadridSi">Sí</label>
                                    </div>
                                    <div className="form-group form-radio">
                                        <input className="radio" type="radio" id="autobusMadridNo" name="AutobusRascafria" value="No" />
                                        <label for="autobusMadridNo">No</label>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="col-sm-12 form-observaciones">
                                <div className="observaciones">
                                    <textarea name="Observaciones" placeholder="Observaciones"/>
                                </div>
                            </div>

                            <input className="button" type="submit" onClick={clickMe} />                  


                        </div>

                    </form>

                    

                </Col>
            </Row>
        </Container>



    );
}

