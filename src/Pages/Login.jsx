// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   Link,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// import React, { useContext, useState } from 'react'
// import {   Navigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const {isAuth, login} = useContext(AuthContext)

//   const handleSubmit = () => {
//     const payload = {
//       email,
//       pass,
//     };
//     fetch("http://localhost:8080/users/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(payload)
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         // console.log(res);
//         if(res.token){
//           login(res.token)
//         }

//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   };
//   if(isAuth){
//     return <Navigate to="/dashboard" />
//   }

//   return (
//     <>
//      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
//         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//           <Stack align={"center"}>
//             <Heading fontSize={"3xl"}>Login to your Dashboard</Heading>
//           </Stack>
//           <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
//             <Stack spacing={4}>
//               <FormControl isRequired>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormControl>

//                            <FormControl isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     value={pass}
//                     onChange={(e) => setPass(e.target.value)}
//                   />
//                   <InputRightElement h={"full"}>
//                     <Button
//                       variant={"ghost"}
//                       onClick={() =>
//                         setShowPassword((showPassword) => !showPassword)
//                       }
//                     >
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>

//               <Stack spacing={10}>
//                 <Stack
//                   direction={{ base: "column", sm: "row" }}
//                   align={"start"}
//                   justify={"space-between"}
//                 >
//                   <Checkbox>Remember me</Checkbox>
//                 </Stack>
//                 <Button
//                   bg={"blue.400"}
//                   color={"white"}
//                   onClick={handleSubmit}
//                   _hover={{
//                     bg: "blue.500",
//                   }}
//                 >
//                   Login
//                 </Button>
//               </Stack>
//               <Stack pt={6}>
//                 <Text align={"center"}>
//                   New to our App ?{" "}
//                   <Link color={"blue.400"} href={"/signup"}>
//                     Create an Account
//                   </Link>
//                 </Text>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>

//     </>
//   )
// }

// export default Login

import React, { useContext, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const { isAuth, login } = useContext(AuthContext);

  const validateForm = () => {
    const errors = {};

    // Validate email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email address";
    }

    // Validate password
    if (pass.length === 0) {
      errors.pass = "Password is required";
    }

    setError(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const payload = {
        email,
        pass,
      };

      fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            login(res.token);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Login to your Dashboard</Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl isRequired isInvalid={!!error.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Text color="red.500" fontSize="sm">
                {error.email}
              </Text>
            </FormControl>

            <FormControl isRequired isInvalid={!!error.pass}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text color="red.500" fontSize="sm">
                {error.pass}
              </Text>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text fontSize="sm" color="gray.600">
                  {/* Add any additional text if needed */}
                </Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                onClick={handleSubmit}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                New to our App?{" "}
                <Link color={"blue.400"} href={"/signup"}>
                  Create an Account
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
