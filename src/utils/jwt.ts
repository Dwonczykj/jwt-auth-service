import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({});

const SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not defined");
}

export const createToken = (payload: object, options?: jwt.SignOptions): string => {
    return jwt.sign(payload, SECRET_KEY, options);
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error("Invalid token");
    }
};

export const decodeToken = (token: string) => {
    return jwt.decode(token);
};

export const refreshToken = (payload: object, options?: jwt.SignOptions): string => {
    return jwt.sign(payload, SECRET_KEY, { ...options, expiresIn: "15m" });
};

/**
 * DOCUMENTATION
 * HTML list of what is happening in the code in the createToken function
 * 
 * 1. The createToken function is called with a payload and options
 * 2. The payload is encoded using the SECRET_KEY
 * 3. The encoded payload is returned
 * 
 * 
 */
export const jwtDocumentationHTML = () => {
    return `
    <ul>
        <li>1. The createToken function is called with a payload and options</li>
        <li>2. The payload is encoded using the SECRET_KEY</li>
        <li> 2.1 The encoding is done using the jwt.sign method</li>
        <li> 2.2 The jwt.sign method is a method of the jwt library</li>
        <li> 2.3 The jwt.sign method takes a payload, a secret key, and options</li>
        <li> 2.4 The payload is the data that we want to encode</li>
        <li> 2.5 The secret key is the key that we want to use to encode the payload</li>
        <li> 2.6 The options are the options that we want to use to encode the payload</li>
        <li> 2.7 The options include the expiration time, the algorithm, and the issuer</li>
        <li> 2.8 The encoded payload is returned</li>
        <li> 2.9 The JWT Algorithms</li>
        <li> 2.9.1 The Default JWT Algorithm is HS256 and is a symmetric algorithm</li>
        <li> 2.9.1.1 The HS256 algorithm uses the secret key to encode and decode the payload</li>
        <li> 2.9.1.2 The HS256 algorithm is a symmetric algorithm, which means that the same key is used for encoding and decoding</li>
        <li> 2.9.1.3 The HS256 algorithm is a fast algorithm</li>
        <li> 2.9.1.4 The HS256 algorithm is a secure algorithm</li>
        <li> 2.9.1.5 The HS256 algorithm is a simple algorithm</li>
        <li> 2.9.1.6 The HS256 algorithm is a widely supported algorithm</li>
        <li> 2.9.2 Another JWT Algorithm is RS256 and is an asymmetric algorithm</li>
        <li> 2.9.2.1 The RS256 algorithm uses a **public key** to encode the payload and a **private key** to decode the payload</li>
        <li> 2.9.2.2 The RS256 algorithm is a fast algorithm</li>
        <li> 2.9.2.3 The RS256 algorithm is a secure algorithm</li>
        <li> 2.9.2.4 The RS256 algorithm is a simple algorithm</li>
        <li> 2.9.2.5 The RS256 algorithm is a widely supported algorithm</li>
        <li> 2.9.3 Another JWT Algorithm is ES256 and is an asymmetric algorithm</li>
        <li> 2.9.3.1 The ES256 algorithm uses a **public key** to encode the payload and a **private key** to decode the payload</li>
        <li> 2.9.3.2 The ES256 algorithm is a fast algorithm</li>
        <li> 2.9.3.3 The ES256 algorithm is a secure algorithm</li>
        <li> 2.9.3.4 The ES256 algorithm is a simple algorithm</li>
        <li> 2.9.3.5 The ES256 algorithm is a widely supported algorithm</li>
        <li> 3. The encoded payload is returned</li>
        <li> 4. Verfiying / Validating the token</li>
        <li> 4.1 The verifyToken function is called with the token</li>
        <li> 4.2 The verifyToken function is a method of the jwt library</li>
        <li> 4.3 The verifyToken function takes a token and either a secret key (in the case of HS256 i.e. secret for HMAC algorithms ) or a public key (the PEM encoded public key for RSA and ECDSA in the case of RS256 and ES256)</li>
        <li> 4.4 The verifyToken function returns the **decoded** payload</li>
        <li> 4.5 The verifyToken function throws an error if the token is invalid</li>
        <li> 5. The decoded payload is returned</li>
    </ul>
    `;
};

export const howDoEncodersWorkHTML = () => {
    return `
    <ul>
        <li> 1. An encoder is a function that encodes a payload into a token</li>
        <li> 2. An encoder uses the secret key or the public key to encode the payload by internally using a cryptographic algorithm which is a mathematical function that takes an input and returns an output</li>
        <li> 3. Cryptographic algorithms are of two types: Symmetric and Asymmetric</li>
        <li> 3.1 Symmetric algorithms use the same key for encoding and decoding</li>
        <li> 3.2 Asymmetric algorithms use different keys for encoding and decoding</li>
        <li> 3.3 The HS256 algorithm is a Symmetric algorithm</li>
        <li> 3.4 The RS256 and ES256 algorithms are Asymmetric algorithms</li>
        <li> 3.5 The payload is encoded using the algorithm and the secret key or the public key</li>
        <li> 4 A Simple Cryptographic Algorithm</li>
        <li> 4.1 A Simple Cryptographic might work by: </li>
        <li> 4.1.1 Taking the payload and the secret key</li>
        <li> 4.1.2 Concatenating the payload and the secret key</li>
        <li> 4.1.3 Hashing the concatenated string</li>
        <li> 4.1.4 Returning the hashed string</li>
        <li> 4.1.5 The hashed string is the encoded payload</li>
        
        
    </ul>
    `;
};

export const mermaidDiagramsHTML = {
    jwtAlgorithms: {
        HS256: {
            name: "HS256",
            description: "Symmetric algorithm",
            diagram: `
            graph TD
            A[Payload] --> B[Secret Key]
            B --> C[Encoded Payload]
            `
        },
        RS256: {
            name: "RS256",
            description: "Asymmetric algorithm",
            diagram: `
            graph TD
            A[Payload] --> B[Public Key]
            B --> C[Encoded Payload]
            C --> D[Private Key]
            D --> E[Decoded Payload]
            `
        },
        ES256: {
            name: "ES256",
            description: "Asymmetric algorithm",
            diagram: `
            graph TD
            A[Payload] --> B[Public Key]
            B --> C[Encoded Payload]
            C --> D[Private Key]
            D --> E[Decoded Payload]
            `
        }
    }
}