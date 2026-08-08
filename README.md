# 🌎 Reconhecimento Local Web

Aplicação web desenvolvida para promover o **reconhecimento de iniciativas, projetos e ações locais**, utilizando tecnologias modernas para aplicações web híbridas.

O repositório possui a aplicação principal em **Ionic + Angular + TypeScript**, além de protótipos e arquivos antigos preservados para referência e histórico de desenvolvimento.

---

## 🚀 Tecnologias

### Aplicação principal

* **Ionic Framework**
* **Angular**
* **TypeScript**
* **HTML5**
* **CSS3**
* **Firebase Hosting**

### Protótipo legado

* **HTML5**
* **CSS3**
* **Bootstrap**
* **JavaScript**

---

## 📁 Estrutura do repositório

```text
Reconhecimento-Local-Web/
├── reconhecimento-local-web/          # Aplicação principal
├── _archive/
│   ├── app-teste-duplicado/            # Cópia de teste do app Ionic
│   ├── root-dependencies/              # Dependências e arquivos antigos
│   └── site-html-legado/               # Protótipo estático em HTML/CSS/Bootstrap
├── README.md
└── .gitignore
```

---

## 💻 Aplicação principal

A pasta `reconhecimento-local-web/` contém a **versão atual e oficial do projeto**, desenvolvida com **Ionic, Angular e TypeScript**.

A aplicação está preparada para execução local e publicação utilizando **Firebase Hosting**.

### Instalação

Clone o repositório e acesse a pasta da aplicação:

```bash
git clone https://github.com/SEU-USUARIO/Reconhecimento-Local-Web.git

cd Reconhecimento-Local-Web/reconhecimento-local-web
```

Instale as dependências:

```bash
npm install
```

### ▶️ Executar localmente

Execute:

```bash
npm start
```

A aplicação estará disponível, normalmente, em:

```text
http://localhost:4200/
```

---

## 📦 Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

O processo de build gera os arquivos necessários para publicação da aplicação.

A pasta `www` está configurada no projeto para ser utilizada como diretório público no **Firebase Hosting**.

---

## 🔥 Firebase Hosting

O projeto possui um arquivo:

```text
reconhecimento-local-web/firebase.json
```

Esse arquivo contém as configurações necessárias para o Firebase Hosting.

### Deploy

Acesse a pasta da aplicação:

```bash
cd reconhecimento-local-web
```

Depois execute:

```bash
firebase deploy
```

> **Pré-requisito:** é necessário ter o Firebase CLI instalado e estar autenticado na conta do Firebase.

---

## 🎨 Protótipo estático legado

O diretório:

```text
_archive/site-html-legado/
```

contém uma versão anterior do projeto desenvolvida com **HTML, CSS, Bootstrap e JavaScript**.

Esse protótipo foi mantido como referência visual, permitindo comparar a evolução da interface e realizar testes rápidos relacionados à identidade visual do projeto.

### ▶️ Executar o protótipo

Entre na pasta:

```bash
cd "_archive/site-html-legado"
```

Inicie um servidor HTTP local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
```

---

## 🗃️ Arquivos arquivados

As pastas dentro de `_archive/` não fazem parte da versão principal da aplicação.

Elas foram preservadas para **histórico, testes, comparação e referência durante o desenvolvimento**.

### `app-teste-duplicado/`

Cópia de teste da aplicação Ionic mantida como backup.

### `root-dependencies/`

Contém dependências e arquivos antigos utilizados durante etapas anteriores do desenvolvimento.

### `site-html-legado/`

Protótipo estático desenvolvido antes da versão atual em Ionic/Angular.

---

## 📌 Status do projeto

**Em desenvolvimento 🚧**

A aplicação principal está sendo desenvolvida utilizando **Ionic + Angular + TypeScript**, enquanto os arquivos legados permanecem organizados no diretório `_archive/`.

---

## 👩‍💻 Desenvolvimento

Projeto desenvolvido por **Janine Cunha**, com foco em desenvolvimento web, aplicações híbridas e evolução de interfaces utilizando tecnologias modernas.

---

## 📄 Licença

Este projeto está disponível para fins de estudo e desenvolvimento.
