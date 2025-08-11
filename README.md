# 🚗 AutoLux - Frontend para Loja de Veículos

O **AutoLux Frontend** é a interface de usuário desenvolvida com **Next.js** e **TypeScript**, para conectar e consumir a API do **AutoLux API**. Ele oferece uma experiência de usuário moderna e interativa para as funcionalidades do backend, como gerenciamento de veículos, pedidos, favoritos, simulação de financiamento e muito mais.

**Nota**: Este README é baseado no planejamento para o projeto completo, porém, o desenvolvimento do frontend está no início. Várias funcionalidades e melhorias estão sendo planejadas para as próximas versões. Este é apenas o começo!!

![Home](./src/assets/home-pizzaria.jpeg)
![Cart](./src/assets/cart-pizzaria.jpeg)

## ⚙️ Tecnologias Utilizadas

- **Next.js**
- **TypeScript**
- **Axios**
- **React Hook Form**
- **Zod**
- **Tailwind CSS**
- **React Icons**
- **Cookies-next**

## 📦 Funcionalidades

### 🔐 Autenticação
- **Cadastro de usuários**: Formulário para registrar novos usuários no sistema.
- **Login com e-mail e senha**: Permite que os usuários façam login com autenticação JWT.
- **Proteção de rotas privadas**: Apenas usuários autenticados com JWT podem acessar páginas restritas.
- **Controle de acesso**: Diferencia os usuários **ADMIN** e **USER** com base nas permissões configuradas no backend.

### 🚘 Veículos
- **Cadastro de veículos**: Interface para exibir, cadastrar, editar e excluir veículos (com permissão de administrador).
- **Exibição detalhada**: Listagem de veículos com detalhes como nome, modelo, motor, cor, preço, ano, etc.
- **Busca e filtragem**: Implementação de busca dinâmica para localizar veículos específicos.
- **Carrossel de imagens**: Exibição de até 5 imagens de cada veículo, com suporte para upload de imagens para o Cloudinary via backend.

### 🏷️ Marcas e Categorias
- **Exibição de marcas e categorias**: Interface para listar marcas e categorias de veículos, consumindo os dados da API.

### ❤️ Sistema de Favoritos
- **Adicionar/remover favoritos**: Usuários podem favoritar veículos e visualizá-los em uma lista personalizada.
- **Integração com o backend**: Toda a gestão dos favoritos é realizada via API, mantendo os dados sincronizados.

### 📦 Pedidos
- **Criação de pedidos**: Interface para os usuários criarem pedidos de compra de veículos.
- **Histórico de pedidos**: Os usuários podem consultar o histórico de seus pedidos, com status dinâmico (PENDING, APPROVED, PREPARING, SENT, DELIVERED, CANCELLED).

### 💸 Simulação de Financiamento
- **Simulador de financiamento**: Os usuários podem calcular o valor das parcelas, juros e o valor total do financiamento de um veículo.
- **Integração com a API**: Os dados são enviados para o backend, onde o cálculo é feito e o resultado retornado ao frontend.

### ⭐ Avaliações
- **Avaliação de veículos**: Usuários podem deixar notas e comentários para os veículos, ajudando outros usuários na escolha.

### 🐳 Suporte a Docker
- **Docker**: O projeto pode ser facilmente rodado em containers Docker, com configuração para ambientes de desenvolvimento e produção.
- **Docker Compose**: Inclui um arquivo `docker-compose.yml` para rodar a aplicação com backend e banco de dados.

### 🔁 Integração Contínua (CI)
- **GitHub Actions**: Integração com GitHub Actions para testes automáticos e builds contínuos a cada push ou pull request.

