

import React from 'react'
import { Button, Spinner } from 'reactstrap'

function SubmitButton({text, loading}) {
    if(loading) { 
        return (
            <Button type='submit' size='lg' color='primary' disabled>
                <Spinner size="sm">Loading...</Spinner>
                <span>
                    {' ' + text}
                </span>
            </Button>
        )
    } 
    else return <Button type='submit' size='lg' color='primary'>{text}</Button>
}

export default SubmitButton