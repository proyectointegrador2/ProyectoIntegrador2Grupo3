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
            <Label for="exampleEditordeUsario">
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
                id="examplename"
                name="name"
                type="name"
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
                id="examplelastName"
                name="lastName"
                type="lastName"
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
                defaultValue={formik.values.email}
                invalid={formik.touched.email && Boolean(formik.errors.email)}
                onChange={formik.handleChange}
            />
            {
                Boolean(formik.errors.email) && formik.touched.email &&
                <FormFeedback>
                    {formik.errors.email}
                </FormFeedback>
            }
        </FormGroup>
        <FormGroup>
            <Label for="exampleDireccion">
                Direccion
            </Label>
            <Input
                id="examplDireccion"
                name="Direccion"
                type="Direccion"
                
                defaultValue={formik.values.address}
                invalid={formik.touched.address && Boolean(formik.errors.address)}
                onChange={formik.handleChange}

                
            />
            {
                Boolean(formik.errors.address) && formik.touched.address &&
                <FormFeedback>
                    {formik.errors.address}
                </FormFeedback>
            }
        </FormGroup>
        <FormGroup>
            <Label for="exampleusername">
                Nombre de Usuario
            </Label>
            <Input
                id="exampleusername"
                name="username"

                type="username"
                defaultValue={formik.values.username}
                invalid={formik.touched.username && Boolean(formik.errors.username)}
                onChange={formik.handleChange}
            />
            {
                Boolean(formik.errors.username) && formik.touched.username &&
                <FormFeedback>
                    {formik.errors.username}
                </FormFeedback>
            }
        </FormGroup>
        <FormGroup>
            <Label for="examplepassword">
                Contraseña
            </Label>
            <Input
                id="examplepassword"
                name="password"

                type="password"
                type="password"
                defaultValue={formik.values.password}
                invalid={formik.touched.password && Boolean(formik.errors.password)}
                onChange={formik.handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="examplephone">
                Numero telefonico
            </Label>
            <Input
                id="examplephone"
                name="phone"
                type="phone"
                defaultValue={formik.values.phone}
                invalid={formik.touched.phone && Boolean(formik.errors.phone)}
                onChange={formik.handleChange}

                
            />
            {
                Boolean(formik.errors.phone) && formik.touched.phone &&
                <FormFeedback>
                    {formik.errors.phone}
                </FormFeedback>
            }
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