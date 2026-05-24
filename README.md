# EcoBH — Conectando pessoas ao descarte correto

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)
![CSS](https://img.shields.io/badge/CSS-Moderno-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Mapas-199900?style=for-the-badge)
![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-Dados%20abertos-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Estácio](https://img.shields.io/badge/Faculdade-Est%C3%A1cio-2563EB?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Public%C3%A1vel-14B8A6?style=for-the-badge)
![License](https://img.shields.io/badge/Licen%C3%A7a-MIT-0F172A?style=for-the-badge)

> **Banner sugerido:** use um print da landing page do EcoBH com o mapa aberto em mobile e desktop.

---

## Português

### Descrição

EcoBH é um site/app web moderno para ajudar moradores de Belo Horizonte a encontrar pontos de coleta, locais de descarte correto e orientações sobre reciclagem, reutilização, doação e logística reversa.

O projeto foi criado para apresentação acadêmica na Estácio, portfólio pessoal, GitHub, LinkedIn e possível demonstração para professores, empresas ou comunidade.

### Objetivo

Criar uma plataforma simples, bonita e útil que conecte pessoas a informações de descarte responsável em Belo Horizonte, com foco em impacto social, sustentabilidade, tecnologia e utilidade pública.

### Problema social identificado

Muitas pessoas querem descartar corretamente, mas não sabem onde levar eletrônicos, móveis velhos, óleo usado, pilhas, baterias, vidro, papelão, plástico, roupas ou recicláveis comuns. A falta de informação aumenta o descarte irregular, reduz a reciclagem e prejudica a cidade.

### Solução proposta

O EcoBH oferece:

- mapa interativo com pontos de coleta em Belo Horizonte;
- pedido de localização aproximada para priorizar pontos próximos;
- busca por bairro ou endereço;
- filtros por tipo de material;
- cards com endereço, bairro, horário, descrição, distância aproximada e rota;
- rotas via Google Maps e OpenStreetMap;
- guia educativo por categoria de descarte;
- página acadêmica sobre impacto social e Sistemas de Informação;
- formulário visual para sugerir pontos ou correções;
- fallback local caso APIs externas estejam indisponíveis.

### Tecnologias utilizadas

- React 18
- Vite
- JavaScript moderno
- CSS moderno com glassmorphism, gradientes, glow effects e animações
- Leaflet.js
- OpenStreetMap
- Nominatim
- Overpass API
- Geolocation API do navegador
- Vercel para deploy

### Funcionalidades

- Landing page com visual de startup
- Mapa interativo
- Solicitação de localização do usuário
- Filtro por material
- Busca por bairro/endereço
- Lista de pontos com distância aproximada
- Botões de rota
- Categorias de descarte
- Conteúdo educativo
- Página acadêmica do projeto
- Formulário com validação básica
- Design responsivo para desktop, tablet e celular
- Fallback com dados locais

### Como instalar

```bash
npm install
```

### Como rodar localmente

```bash
npm run dev
```

Acesse:

```bash
http://localhost:5173
```

### Como gerar build

```bash
npm run build
```

### Como visualizar a build

```bash
npm run preview
```

### Deploy na Vercel

O projeto já está preparado para Vercel com `vercel.json`.

Configurações recomendadas:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Não há necessidade de chave privada no front-end.

### Estrutura de pastas

```text
src/
  components/
    CategoriesPage.jsx
    ContactPage.jsx
    EducationPage.jsx
    Footer.jsx
    Home.jsx
    MapView.jsx
    NavBar.jsx
    PointCard.jsx
    ProjectPage.jsx
    SectionTitle.jsx
  data/
    categories.js
    collectionPoints.js
  services/
    geoApi.js
  utils/
    geo.js
  App.css
  App.jsx
  main.jsx
public/
  favicon.svg
vercel.json
```

### APIs utilizadas

- **OpenStreetMap:** mapa aberto e colaborativo.
- **Leaflet:** renderização do mapa interativo.
- **Nominatim:** busca de endereço e bairro.
- **Overpass API:** consulta de pontos públicos marcados como reciclagem.
- **Geolocation API:** localização aproximada autorizada pelo usuário.

### Dados locais

O arquivo `src/data/collectionPoints.js` contém uma base inicial demonstrativa de pontos em Belo Horizonte. Esses dados servem como fallback e protótipo acadêmico.

Antes de uso oficial, os locais, horários e permissões devem ser revisados com fontes públicas, prefeitura, cooperativas ou responsáveis pelos pontos.

### Impacto social

O EcoBH busca reduzir o descarte irregular, melhorar o acesso à informação ambiental, apoiar a economia circular e aproximar moradores de pontos de coleta, cooperativas, iniciativas de doação e logística reversa.

### Relação com Sistemas de Informação e Sociedade

O projeto demonstra como Sistemas de Informação pode transformar dados, interfaces, mapas, APIs e experiência do usuário em uma solução prática para uma demanda urbana real.

### Relação com projeto de extensão da Estácio

O EcoBH dialoga com extensão universitária ao propor uma solução voltada à comunidade, com impacto social local, linguagem educativa e potencial de aplicação real em Belo Horizonte.

### Melhorias futuras

- Curadoria oficial dos pontos de coleta
- Painel administrativo
- Backend e banco de dados
- PWA para uso offline
- Avaliações e denúncias de informação incorreta
- Parcerias com cooperativas e órgãos públicos
- Analytics de impacto social
- Versão com TypeScript e testes automatizados

### Autor

Desenvolvido por **Isaquefl**.

Contato: **isaquefcontato@gmail.com**

### Licença

Este projeto pode ser disponibilizado sob licença MIT.

---

## English

### Description

EcoBH is a modern web app that helps people in Belo Horizonte find collection points, responsible disposal locations and clear guidance about recycling, reuse, donations and reverse logistics.

The project was designed for an Estácio academic presentation, personal portfolio, GitHub, LinkedIn and professional demonstrations.

### Goal

Build a simple, polished and useful platform that connects people to responsible waste disposal information in Belo Horizonte, focusing on social impact, sustainability, technology and public utility.

### Social problem

Many people want to dispose of waste correctly but do not know where to take electronics, old furniture, used cooking oil, batteries, glass, cardboard, plastic, clothes or common recyclables. Lack of accessible information increases irregular disposal and harms the city.

### Proposed solution

EcoBH provides:

- an interactive map with collection points in Belo Horizonte;
- approximate location request to prioritize nearby places;
- address and neighborhood search;
- filters by material type;
- cards with address, neighborhood, opening hours, description, approximate distance and route links;
- routes through Google Maps and OpenStreetMap;
- educational disposal guide by category;
- academic project page about social impact and Information Systems;
- visual form to suggest new points or corrections;
- local fallback data when external APIs are unavailable.

### Tech stack

- React 18
- Vite
- Modern JavaScript
- Modern CSS with glassmorphism, gradients, glow effects and animations
- Leaflet.js
- OpenStreetMap
- Nominatim
- Overpass API
- Browser Geolocation API
- Vercel deployment support

### Features

- Startup-style landing page
- Interactive map
- User location permission request
- Material filters
- Address/neighborhood search
- Approximate distance calculation
- Route buttons
- Disposal categories
- Educational content
- Academic project page
- Form with basic validation
- Responsive layout
- Local fallback dataset

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

### Build

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

### Deploy to Vercel

This project is Vercel-ready through `vercel.json`.

Recommended settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

No private frontend key is required.

### Local data

The file `src/data/collectionPoints.js` includes an initial demonstration dataset for Belo Horizonte. It works as a fallback and academic prototype.

Before official use, places, hours and permissions must be reviewed with public sources, local government, cooperatives or location owners.

### Social impact

EcoBH aims to reduce irregular disposal, improve access to environmental information, support circular economy and connect residents to collection points, cooperatives, donation initiatives and reverse logistics.

### Information Systems and Society

The project demonstrates how Information Systems can transform data, interfaces, maps, APIs and user experience into a practical solution for a real urban demand.

### Future improvements

- Official data curation
- Admin dashboard
- Backend and database
- Offline PWA
- User reports and reviews
- Partnerships with cooperatives and public agencies
- Social impact analytics
- TypeScript version and automated tests

### Author

Built by **Isaquefl**.

Contact: **isaquefcontato@gmail.com**

### License

This project may be released under the MIT license.
