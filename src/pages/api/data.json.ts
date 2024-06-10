import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    const url = 'https://delipe-mail-907e570e0648.herokuapp.com/send-mail';

    const emailData = {
    "from": "'Destak | Indique e ganhe' <sites@delipe.com.br>",
    "email": import.meta.env.SMTP_CLIENT_EMAIL,
    "subject": "Formulário de contato | Site",
    "text": `Nome: ${body.nome}\nTelefone: ${body.telefone}\nCPF: ${body.cpf}\nNome do indicado: ${body.nomeIndicado}\nTelefone do Indicado: ${body.telefoneIndicado}\nEndereço do Indicado: ${body.enderecoIndicado}`,
    "smtp": import.meta.env.SMTP_HASH

    };

    
    await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Email sent:', data);
        })
        .catch(error => {
            console.error('There was a problem sending the email:', error);
        });


    return new Response(
        JSON.stringify({
            name: "isaque",
            telefone: "teste"
        })
    )
}


// import nodemailer from "nodemailer"
// export const prerender = false;

// export const POST: APIRoute = async ({ params, request,  }) => {
//     const body = await request.json();


//         console.log(body)
//         // Configurações do serviço de e-mail
//         const emailConfig = {
//             host: import.meta.env.SMTP_HOST,
//             port: Number(import.meta.env.SMTP_PORT),
//             secure: import.meta.env.SMTP_SECURE==="true",
//             auth: {
//                 user: import.meta.env.SMTP_AUTH_USER,
//                 pass: import.meta.env.SMTP_AUTH_PASSWORD,
//             },
//         };

//         // Crie um objeto de transporte de e-mail
//         const transporter = nodemailer.createTransport(emailConfig);

//         // Defina os detalhes do e-mail a ser enviado
//         const mailOptions = {
//             from: import.meta.env.SMTP_FROM,
//             to: import.meta.env.SMTP_CLIENT_EMAIL,
//             subject: "Formulário Site | Área de cobertura",
//             text: `Nome: ${body.nome}\nTelefone: ${body.telefone}\nCEP: ${body.cep}`,
//         };

//         // Envie o e-mail
//         await transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log("Erro ao enviar e-mail:", error);
//             } else {
//                 console.log("E-mail enviado:", info.response);
//             }
//         });



//     return new Response(
//       JSON.stringify({
//         name: "anakin"
//       })
//     )
//   }


