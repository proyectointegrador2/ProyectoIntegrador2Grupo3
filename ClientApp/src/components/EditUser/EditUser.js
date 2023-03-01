import React, { useState } from 'react';
import {
Form,
FormGroup,
Label,
Input,
Button,
FormFeedback,
} from 'reactstrap';

import { userProfileSchema } from "../../helpers/formsSchema"
import { useFormik } from'formik'

function EditUser() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            name: '',
            lastName: '',
            email: '',
            address: '',
            phone: ''
        },
        validationSchema: userProfileSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (<Form onSubmit={formik.handleSubmit}>

        <FormGroup>
            <Label for="exampleEmail">
                Editor de Usario
            </Label>
            <Input
                plaintext
                defaultValue="Nombre de Perfil"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleNombre">
                Nombre
            </Label>
            <Input
                id="exampleNombre"
                name="Nombre"
                defaultValue={formik.values.name}
                invalid={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
                
            />
            {
                Boolean(formik.errors.name) && formik.touched.name &&
                <FormFeedback>
                    {formik.errors.name}
                </FormFeedback>
            }
        </FormGroup>
        <FormGroup>
            <Label for="exampleApellido">
                Apellido
            </Label>
            <Input
                id="exampleApellido"
                name="Apellido"
                defaultValue={formik.values.lastName}
                invalid={formik.touched.lastName && Boolean(formik.errors.lastName)}
                onChange={formik.handleChange}

                
            />
            {
                Boolean(formik.errors.lastName) && formik.touched.lastName &&
                <FormFeedback>
                    {formik.errors.lastName}
                </FormFeedback>
            }
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">
                Correo Electronico
            </Label>
            <Input
                id="exampleEmail"
                name="email"

                type="email"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleDirección">
                Dirección
            </Label>
            <Input
                id="examplDirección"
                name="Dirección"

                
            />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">
                Nombre de Usuario
            </Label>
            <Input
                id="exampleNombre de Usuario"
                name="Nombre de Usuario"

                type="Nombre de Usuario"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleContrasena">
                Contraseña
            </Label>
            <Input
                id="exampleContrasena"
                name="Contrasena"

                type="password"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleNumber">
                Numero telefonico
            </Label>
            <Input
                id="exampleNumber"
                name="phone"

                
            />
        </FormGroup>

        <FormGroup>
            <Label for="exampleSexo">
                Sexo
            </Label>
            <Input
                id="exampleSexo"
                name="Sexo"
                type="select"
            >
                <option>
                    Masculino
                </option>
                <option>
                    Femenino
                </option>
                <option>
                    No difinido
                </option>

            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="exampleRoldeUsuario">
                Rol de usuario
            </Label>
            <Input
                id="exampleSelect"
                name="Rol de usuario"
                type="select"
            >
                <option>
                    Administrador
                </option>
                <option>
                    Cliente
                </option>
            

            </Input>
        </FormGroup>

        <Button type="submit">
            Modificar Usuario
        </Button>
    </Form>)
}

export default EditUser;