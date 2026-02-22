# A Melhor Opção para Publicar o Site da IVVA Contabilidade

Para um site profissional de contabilidade que precisa transmitir **confiança**, **autoridade** e **velocidade**, a melhor opção técnica é usar uma plataforma moderna de hospedagem estática como **Vercel** ou **Netlify**.

## Por que Vercel ou Netlify são as melhores opções?

1.  **Velocidade Extrema:** Seu site é distribuído em servidores no mundo todo (CDN). Ele carrega instantaneamente, o que é crucial para não perder clientes.
2.  **Segurança Total:** Como não há banco de dados ou painel administrativo (como no WordPress), é praticamente impossível o site ser hackeado.
3.  **Custo Zero:** Para sites institucionais como este, o plano gratuito dessas plataformas é mais do que suficiente e muito generoso.
4.  **Manutenção Zero:** Não precisa atualizar plugins, temas ou PHP. O site simplesmente funciona para sempre.

---

## Cenário A: Você quer o máximo de performance e não se importa em configurar o DNS

**Recomendação: Vercel**

1.  Crie uma conta gratuita na [Vercel](https://vercel.com).
2.  Instale a Vercel CLI no seu computador (`npm i -g vercel`) ou conecte sua conta do GitHub.
3.  Rode o comando `vercel` na pasta do projeto.
4.  O site estará no ar em segundos.
5.  Configure seu domínio `www.ivvacontabilidade.online` no painel da Vercel.

*Atenção:* Se você já usa e-mails profissionais (ex: `contato@ivvacontabilidade.online`) em outra hospedagem, precisará configurar os registros DNS com cuidado para não tirar o e-mail do ar.

---

## Cenário B: Você já tem hospedagem (cPanel/Hostgator) e quer manter os e-mails lá sem mexer no DNS

**Recomendação: Upload via cPanel (Gerenciador de Arquivos)**

Esta é a opção mais segura se você não tem um técnico para configurar o DNS.

1.  No seu computador, abra o terminal na pasta do projeto e rode:
    ```bash
    npm run build
    ```
2.  Isso criará uma pasta chamada `dist`.
3.  Acesse o cPanel da sua hospedagem.
4.  Vá em **Gerenciador de Arquivos** > `public_html`.
5.  Faça o upload de **todos os arquivos** que estão DENTRO da pasta `dist` (não a pasta em si, mas o conteúdo dela: `index.html`, pasta `assets`, etc).
6.  **Muito Importante:** Crie um arquivo chamado `.htaccess` na mesma pasta `public_html` com o seguinte conteúdo para que as rotas (como `/contato`) funcionem:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Conclusão

*   **Para Performance e Modernidade:** Vercel.
*   **Para Simplicidade (se já tem hospedagem):** Upload no cPanel.

Ambas as opções entregarão um site muito superior a um WordPress comum em termos de velocidade e segurança.
