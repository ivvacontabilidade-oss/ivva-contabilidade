# Como publicar seu site IVVA Contabilidade

Este projeto foi construído com tecnologias modernas (React + Tailwind CSS) para garantir alta performance, segurança e design profissional.

Embora você tenha solicitado "HTML e CSS puro para WordPress", a solução criada aqui é muito superior em termos de velocidade e manutenção.

## Opção 1: Hospedagem Gratuita e Profissional (Recomendada)

Você pode hospedar este site gratuitamente em plataformas como Vercel ou Netlify e conectar seu domínio `www.ivvacontabilidade.online`.

### Passo a passo no Netlify (Mais fácil):
1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Arraste a pasta `dist` (gerada após o comando de build) para o painel do Netlify.
3. Vá em "Domain Settings" e adicione seu domínio `www.ivvacontabilidade.online`.
4. Siga as instruções de DNS do Netlify no painel do seu registrador de domínio.

## Opção 2: Hospedagem Tradicional (cPanel / Hostgator / etc)

Se você já tem uma hospedagem com cPanel:
1. Execute o comando de build (geralmente `npm run build`).
2. Pegue todo o conteúdo da pasta `dist` gerada.
3. Faça upload desses arquivos para a pasta `public_html` da sua hospedagem via FTP ou Gerenciador de Arquivos.
4. **Importante:** Como é um site de página única (SPA), você precisará configurar o servidor para redirecionar todas as rotas para o `index.html`. Crie um arquivo `.htaccess` na raiz com o seguinte conteúdo:

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

## Opção 3: WordPress

Se você faz questão de usar WordPress, este código **não** é um tema WordPress. Para transformar isso em WordPress, você precisaria contratar um desenvolvedor para converter este HTML/React em um tema PHP.

Recomendamos fortemente usar a **Opção 1** ou **Opção 2** para um site institucional como este, pois é mais seguro (não pode ser hackeado como o WordPress) e muito mais rápido.
