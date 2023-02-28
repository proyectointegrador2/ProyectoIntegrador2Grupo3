import React, { useState } from 'react';
import {
Form,
FormGroup,
Label,
Input,
Button,



} from 'reactstrap';

function EditUser() {
    return (<Form>
        <FormGroup>
            <Label for="exampleEmail">
                Editor de Usario
            </Label>
            <Input
                plaintext
                value="Nombre de Perfil"
            />
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
                id="examplePassword"
                name="password"

                type="password"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleUrl">
                Contraseña
            </Label>
            <Input
                id="exampleUrl"
                name="url"

                type="url"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleNumber">
                Numero telefonico
            </Label>
            <Input
                id="exampleNumber"
                name="number"

                type="number"
            />
        </FormGroup>

        <FormGroup>
            <Label for="exampleSelect">
                Sexo
            </Label>
            <Input
                id="exampleSelect"
                name="select"
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
            <Label for="exampleSelect">
                Rol de usuario
            </Label>
            <Input
                id="exampleSelect"
                name="select"
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