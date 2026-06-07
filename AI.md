# AI.md — Registro de Uso de Inteligência Artificial
**Projeto:** OrbitFire — Web Development  
**Disciplina:** Web Development · Prof. Israel Marques  
**Global Solution 2026 · FIAP · Engenharia de Software · 1º Ano**

---

## Interação 1

**O que foi solicitado para a IA:** Geração da estrutura base da Landing Page em HTML e CSS, incluindo as 6 seções obrigatórias (Problema, Tecnologia, Objetivos, Público-alvo, Benefícios, Aplicação), menu de navegação e rodapé.

**O que a IA retornou:** Código HTML semântico completo com as 6 seções, menu fixo com scroll behavior, rodapé com dados da equipe, e arquivo CSS com variáveis, reset, Flexbox e Google Fonts (Syne + Space Mono).

**O que foi alterado ou rejeitado e o motivo:** Os dados da equipe no rodapé e no `integrantes.txt` foram preenchidos manualmente com nome e RM reais, pois a IA usou placeholders. O link do GitHub também foi inserido manualmente após criação do repositório.

---

## Interação 2

**O que foi solicitado para a IA:** Implementação das funcionalidades JavaScript obrigatórias para Web Development: slideshow com 3 imagens, quiz dinâmico com 10 perguntas sobre o tema, troca de tema de fundo (3 opções) e formulário com validação completa.

**O que a IA retornou:** Arquivo `webdev.js` com 4 módulos em IIFE independentes: slideshow com autoplay e suporte a touch/swipe, sistema de temas com persistência em localStorage, quiz com 10 perguntas sobre satélites e queimadas, e formulário com validação de campos vazios, formato de e-mail e seleção de canal.

**O que foi alterado ou rejeitado e o motivo:** As 10 perguntas do quiz foram revisadas para garantir que todas estivessem corretas e alinhadas com o conteúdo trabalhado no projeto. Uma pergunta sobre o custo das APIs foi removida e substituída por uma sobre o satélite CBERS-4A, por ser mais relevante ao contexto espacial do projeto.

---

## Interação 3

**O que foi solicitado para a IA:** Planejamento de esteira de versionamento (Git) para fragmentar as funcionalidades prontas e atingir a meta obrigatória de no mínimo 15 commits estruturados em branches separadas, validação dos critérios de restrição de texto por seção e consultoria para migração de repositório pessoal para Organização GitHub.

**O que a IA retornou:** Roteiro técnico sequencial de comandos de Git (`checkout -b`, `add`, `commit -m`) divididos por contexto funcional (Slide, Quiz, Temas, Validação, Ajustes e Documentação) simulando o fluxo ágil. Instruções passo a passo para a transferência segura de propriedade do repositório para a Organização GitHub mantendo o histórico de commits intacto.

**O que foi alterado ou rejeitado e o motivo:** A sequência de commits foi executada com adaptações pontuais, inserindo comentários reais de identificação de arquitetura no código-fonte para forçar o Git a registrar alterações incrementais verdadeiras. Os links de arquivos de metadados (`equipe.txt`, `integrantes.txt`, `link_github.txt`) foram modificados manualmente para refletir a nova URL de produção da Organização (`https://github.com/OrbitFire/OrbitFire`).