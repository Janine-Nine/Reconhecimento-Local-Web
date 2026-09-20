# Reconhecimento Local Web — Protótipo legado

Esta pasta contém apenas a versão estática original do site. A aplicação oficial
fica na raiz do workspace, em `src/`, e usa Angular, Ionic, Firebase e Firestore.

## Estrutura

```
legacy-prototype/
  index.html          # redireciona para home.html
  home.html
  sobre.html
  projetos.html
  servicos.html
  contato.html
  css/style.css       # estilos e temas do protótipo
  js/i18n.js          # traduções PT/EN/ES
  js/main.js          # menu, navegação e formulário demonstrativo
  images/logo.png
```

## Como visualizar

Abra `home.html` ou `index.html` diretamente no navegador. Para evitar
restrições de `file://`, também é possível servir esta pasta com qualquer
servidor estático:

```bash
python -m http.server 8080
```

Depois, acesse `http://localhost:8080/home.html`.

O formulário desta versão é apenas demonstrativo e salva dados no
`localStorage`. O formulário conectado ao Firestore está na aplicação oficial.
