import { Label } from '@heroui/react'
import { Button } from '@heroui/react'
import { InputGroup } from '@heroui/react'
import { TextField } from '@heroui/react'
import React, { useState } from 'react'

export const Login = ({ setisLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [msg, setMsg] = useState('')

    const myUsername = "DOMI"
    const myPw = "123"

    const handleLogin = () => {
        console.log(username, pw)

        if (username === myUsername && pw === myPw) {
            setisLoggedIn(true)
            setMsg('')
        } else {
            setMsg('Helytelen felhasználónév jelszó páros!')
        }
    }

    return (
        <div className='max-w-md m-auto p-4 bg-indigo-400 rounded-2xl'>
            <TextField fullWidth name="username">
                <Label>Felhasználónév</Label>

                <InputGroup fullWidth>
                    <InputGroup.Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputGroup>
            </TextField>

            <TextField fullWidth name="password">
                <Label>Jelszó</Label>

                <InputGroup fullWidth>
                    <InputGroup.Input
                        type="password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                </InputGroup>
            </TextField>

            <Button
                className="m-4 bg-indigo-950"
                onPress={handleLogin}
            >
                Belépés
            </Button>

            <p>{msg}</p>
        </div>
    )
}

export default Login