# Site RW - Projeto Next.js

Este é o código-fonte para o site da RW AI, construído com Next.js, TypeScript e Tailwind CSS.

## Visão Geral

O projeto contém um site de marketing completo com várias páginas de conteúdo, uma página de preços e um fluxo de cadastro de usuário.

## Como Rodar o Projeto

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## **IMPORTANTE**: Integração de E-mail

O formulário de cadastro em `/cadastro` atualmente apenas simula o envio bem-sucedido no front-end. Para que o envio de e-mails de confirmação funcione de verdade, é necessário integrar um serviço de e-mail transacional.

### Onde Implementar

A lógica de envio de e-mail deve ser adicionada dentro de uma **API Route** do Next.js.

1.  **Crie a API Route:** Crie um arquivo como `src/app/api/register/route.ts`.

2.  **Modifique o Formulário:** Atualize o componente do formulário em `src/app/cadastro/page.tsx` para enviar os dados para essa nova API route (`/api/register`) em vez de apenas mudar o estado localmente.

3.  **Implemente a Lógica de Envio:** Dentro da `route.ts`, você receberá os dados do formulário e usará o SDK de um serviço de e-mail para enviar a confirmação.

### Exemplo com [Resend](https://resend.com/)

Abaixo está um exemplo simples de como a API route poderia ser com o serviço Resend:

```typescript
// Em: src/app/api/register/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Configure o Resend com sua API Key (use variáveis de ambiente!)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, businessType, agentName } = body;

    // Valide os dados aqui...

    // Envie o e-mail
    await resend.emails.send({
      from: 'onboarding@yourdomain.com', // Seu domínio verificado no Resend
      to: email,
      subject: 'Bem-vindo à RW AI! Confirme seu cadastro.',
      html: `<p>Olá ${name},<br>Obrigado por se inscrever! Estamos animados para ter você conosco.</p>`,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
```

Lembre-se de instalar o SDK (`npm install resend`) e configurar suas variáveis de ambiente (`.env.local`) com a chave da API.
