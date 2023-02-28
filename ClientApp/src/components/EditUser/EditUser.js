import React, { useState } from 'react';
import {
    Form,
    Input,
    option,
    InputGroup,
} from 'reactstrap';


 function EditUser() {
     return (<Form>

         <InputGroup> 

        </InputGroup>
        
        <Input
            className="mb-3"
            placeholder="default"
        />
        <Input
            bsSize="sm"
            className="mb-3"
            placeholder="sm"
        />
        <Input
            bsSize="lg"
            className="mb-3"
            type="select"
        >
            <option>
                Large Select
            </option>
        </Input>
        <Input
            className="mb-3"
            type="select"
        >
            <option>
                Default Select
            </option>
        </Input>
        <Input
            bsSize="sm"
            className="mb-3"
            type="select"
        >
            <option>
                Small Select
            </option>
        </Input>
    </Form>)
}

export default EditUser;