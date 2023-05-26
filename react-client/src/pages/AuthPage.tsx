import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export function AuthPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (e.target.name === 'email') {
      setEmail(val.trim());
    } else if (e.target.name === 'password') {
      setPassword(val.trim())
    }
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (email?.length && password?.length) {
      localStorage.setItem('email', email);

      navigate('/rooms')
    }
  }


  return (
    <Box
      mt='5'
      display='flex'
      justifyContent='center'>
      <form
        onSubmit={handleFormSubmit}>
        <FormControl
          py='10'
          px='5'
          bgColor='white'
          width='500px'
          onChange={handleInputChange}
        >
          <Box>
            <FormLabel>Email</FormLabel>

            <Input type='email' name='email' />
          </Box>

          <Box mt={5}>
            <FormLabel>Password</FormLabel>

            <Input type='password' name='password' />
          </Box>

          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Log in
          </Button>
        </FormControl>
      </form>
    </Box>
  )
}
