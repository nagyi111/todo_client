import { Label } from '@heroui/react'
import { Button } from '@heroui/react'
import { InputGroup } from '@heroui/react'
import { TextField } from '@heroui/react'
import React, { useState } from 'react'
import { login } from '../api'

export const Login = ({ setisLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const myUsername = "DOMI"
    const myPw = "123"

    const handleLogin = async () => {
        try {
            const data = await login(username, password)
            setisLoggedIn(data.success)
        } catch (error) {
            console.log(error)
            setMsg(error.response?.data?.msg || 'Nem sikerült kapcsolódni a szerverhez!')
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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