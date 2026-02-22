# Como publicar este site no WordPress ou Hospedagem

Este projeto foi desenvolvido em **React**, uma tecnologia moderna usada pelo Facebook, Netflix e Airbnb. Ele é **muito mais rápido e seguro** que um site WordPress comum, mas funciona de forma diferente.

Você **não** pode simplesmente copiar o código `App.tsx` e colar no editor do WordPress. Você precisa "gerar" (build) o site primeiro.

## Opção 1: Hospedar separadamente (Mais Profissional e Gratuito)
A melhor forma não é colocar "dentro" do WordPress, mas sim conectar seu domínio (`www.ivvacontabilidade.online`) diretamente a este site.

1. Crie uma conta no **Netlify** ou **Vercel** (são gratuitos).
2. Faça o upload da pasta `dist` (veja abaixo como gerar).
3. Configure seu domínio lá.
4. **Vantagem:** O site carrega instantaneamente e nunca sai do ar.

---

## Opção 2: Colocar na sua hospedagem atual (Onde está o WordPress)

Se você já paga uma hospedagem (Hostgator, Locaweb, Hostinger) e quer usar o mesmo espaço:

### Passo 1: Gerar os arquivos finais
No terminal deste projeto, execute:
```bash
npm run build
```
Isso criará uma pasta chamada `dist` com arquivos `.html`, `.css` e `.js`. **Estes são os arquivos que você vai usar.**

### Passo 2: Enviar para o servidor
1. Acesse o **cPanel** ou **Gerenciador de Arquivos** da sua hospedagem.
2. Vá para a pasta `public_html`.
3. Se você quer que este site substitua o WordPress, apague os arquivos do WordPress (faça backup antes!) e coloque os arquivos da pasta `dist` lá.
4. Se você quer manter o WordPress e usar este site em uma pasta (ex: `www.ivvacontabilidade.online/novo`), crie a pasta `novo` e coloque os arquivos da pasta `dist` dentro dela.

### Passo 3: Configuração Importante (Arquivo .htaccess)
Para que a navegação funcione (ex: clicar em "Contato" e não dar erro), crie um arquivo chamado `.htaccess` na mesma pasta onde colocou o site, com este conteúdo:

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

---

## Opção 3: Usar como Tema do WordPress (Avançado)
Isso requer conhecimento técnico para transformar os arquivos estáticos em um tema PHP. Não recomendamos para iniciantes, pois perde-se a performance do React se não for feito corretamente (Headless WP).

## Resumo
Para ter o resultado profissional que você deseja:
1. Gere o site com `npm run build`.
2. Pegue os arquivos da pasta `dist`.
3. Faça upload na sua hospedagem (substituindo o index.php do WordPress pelo index.html do React).
