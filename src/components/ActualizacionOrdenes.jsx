import {Fragment, useState} from 'react';
import { Col, Row } from 'react-bootstrap';

export function ActualizarOrdenes (){
    return(
        <Fragment>
        <div>
            <h1>Bienvenido a Actualizar Ordenes</h1>
            
              <form>
                <Row>
                    <Col xs={6}>
                    <label htmlFor="fecha">Fecha:</label>
                    <input name="fecha" type="text" placeholder="Fecha" required id="fecha"/>
                    </Col>
                    <Col xs={6}>  
                    <label htmlFor="hora">Hora:</label>
                    <input name="hora" type="text" placeholder="Hora" required id="hora"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <label htmlFor="estado">Estado:</label>
                    <input name="estado" type="estado" placeholder="Estado" required id="estado"/>
                    </Col>
                </Row>
                <Row> 
                    <Col xs={4}>
                      <label htmlFor="usuario">Largo:</label>
                      <input name="usuario" type="text" placeholder="Usuario" required id="usuario"/>
                    </Col>
                    <Col xs={4}>
                      <label htmlFor="ancho">Ancho:</label>
                      <input name="ancho" type="number" placeholder="Ancho" required id="ancho"/>
                    </Col>
                    <Col xs={4}>
                      <label htmlFor="alto">Alto:</label>
                      <input name="alto" type="text" placeholder="Alto" required id="alto"/>
                    </Col>
                </Row>
                <Row>    
                      <Col>
                      <label htmlFor="peso">Peso:</label>
                      <input name="peso" type="text" placeholder="Peso" required id="peso"/>
                      </Col>
                </Row>
                <Row>
                      <Col xs={6}>
                      <label htmlFor="dirRecogida">Dirección recogida:</label>
                      <input name="dirRecogida" type="text" placeholder="Dirección Recogida" required id="dirRecogida"/>
                      </Col>
                      <Col xs={6}>
                      <label htmlFor="ciudadRecogida">Ciudad recogida:</label>
                      <input name="ciudadRecogida" type="text" placeholder="Ciudad Recogida" required id="ciudadRecogida"/>
                      </Col>
                </Row>
                <Row>
                      <Col xs={6}>
                      <label htmlFor="nombreDestinatario">Nombre destinatario:</label>
                      <input name="nombreDestinatario" type="text" placeholder="Nombre Destinatario" required id="nombreDestinatario"/>
                      </Col>
                      <Col xs={6}>
                      <label htmlFor="idDestinatario">CC/NIT destinatario:</label>
                      <input name="idDestinatario" type="text" placeholder="ID Destinatario" required id="idDestinatario"/>
                      </Col>
                </Row>
                <Row>
                      <Col xs={6}>
                      <label htmlFor="dirEntrega">Dirección entrega:</label>
                      <input name="dirEntrega" type="text" placeholder="Dirección entrega" required id="dirEntrega"/>
                      </Col>
                      <Col xs={6}>
                      <label htmlFor="ciudadEntrega">Ciudad entrega:</label>
                      <input name="ciudadEntrega" type="text" placeholder="Ciudad entrega" required id="ciudadEntrega"/>
                      </Col>
                </Row>
                      <button type="submit">Registrar Órden</button>
                
              </form>
      
            
        </div>

        </Fragment>
    );
};