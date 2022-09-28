import ListaTarea from "./ListaTarea";
import {Form, Button} from "react-bootstrap";
import { useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea] = useState('')
    const [arregloTarea, setArregloTarea] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        // no podemos usar el push con el state
        setArregloTarea([...arregloTarea,tarea])
        setTarea('')
    };

    return (
        <div>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control 
        type="text"
         placeholder="Ingrese una tarea" 
         onChange={(e) => setTarea(e.target.value)} 
         value={tarea} 
         />
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
    <ListaTarea arregloTarea={arregloTarea}> </ListaTarea>
        </div>
    );
};

export default FormularioTarea;