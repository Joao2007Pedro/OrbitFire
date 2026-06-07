# AI.md - Registro de Uso de Inteligencia Artificial
**Projeto:** OrbitFire - Web Development  
**Disciplina:** Web Development - Prof. Israel Marques  
**Global Solution 2026 - FIAP - Engenharia de Software - 1 Ano**

---

## Interacao 1

**O que foi solicitado para a IA:** Geracao da estrutura base da landing page em HTML e CSS, incluindo as 6 secoes obrigatorias (Problema, Tecnologia, Objetivos, Publico-alvo, Beneficios, Aplicacao), menu de navegacao e rodape.

**O que a IA retornou:** Codigo HTML semantico completo com as 6 secoes, menu fixo com comportamento de scroll, rodape com dados da equipe e arquivo CSS com variaveis, reset, Flexbox, Grid e Google Fonts.

**O que foi alterado ou rejeitado e o motivo:** Os dados da equipe no rodape e no `integrantes.txt` foram preenchidos manualmente com nome e RM reais, pois a IA usou placeholders. O link do GitHub tambem foi inserido manualmente apos criacao do repositorio.

---

## Interacao 2

**O que foi solicitado para a IA:** Implementacao das funcionalidades JavaScript obrigatorias para Web Development: slideshow com 3 imagens, quiz dinamico com 10 perguntas sobre o tema, troca de tema de fundo com 3 opcoes e formulario com validacao completa.

**O que a IA retornou:** Arquivo `webdev.js` com 4 modulos independentes: slideshow com autoplay e suporte a toque, sistema de temas com persistencia em `localStorage`, quiz com 10 perguntas sobre satelites e queimadas, e formulario com validacao de campos obrigatorios, formato de e-mail e selecao de canal.

**O que foi alterado ou rejeitado e o motivo:** As perguntas do quiz foram revisadas para garantir alinhamento com o projeto. Uma pergunta sobre custo de APIs foi substituida por outra sobre o satelite CBERS-4A, por ser mais relevante ao contexto espacial do OrbitFire.

---

## Interacao 3

**O que foi solicitado para a IA:** Planejamento de versionamento Git para organizar funcionalidades prontas, atingir a meta de commits estruturados em branches separadas, validar criterios de texto por secao e orientar migracao do repositorio pessoal para uma Organizacao GitHub.

**O que a IA retornou:** Roteiro tecnico de comandos Git dividido por contexto funcional (slide, quiz, temas, validacao, ajustes e documentacao) e instrucoes para transferencia segura do repositorio mantendo historico de commits.

**O que foi alterado ou rejeitado e o motivo:** A sequencia de commits foi executada com adaptacoes pontuais. Links de metadados (`equipe.txt`, `integrantes.txt`, `link_github.txt`) foram ajustados manualmente para refletir a URL da Organizacao (`https://github.com/OrbitFire/OrbitFire`).

---

## Interacao 4

**O que foi solicitado para a IA:** Revisao e correcao do `index.html` e do `css/style.css` seguindo as normas do documento da Global Solution e, se necessario, consulta ao documento de design do OrbitFire. Apos os ajustes, atualizar este arquivo `AI.md`.

**O que a IA retornou:** Reescrita do `index.html` com texto legivel, estrutura semantica, metadados, navegacao por ancoras, seis secoes principais exigidas, galeria/slideshow, seletor de tema, quiz, formulario de alertas e rodape com nome, RM e link do repositorio. Tambem retornou novo `css/style.css` responsivo, com variaveis, Grid/Flexbox, estados de hover/foco, tema visual coerente e classes preservadas para compatibilidade com os scripts existentes.

**O que foi alterado ou rejeitado e o motivo:** Foram removidos caracteres quebrados por codificacao e substituidos textos decorativos por conteudo direto sobre o problema, tecnologia, objetivos, publico, beneficios e aplicacao. Algumas acentuacoes foram normalizadas sem caracteres especiais para evitar novo erro de encoding. A estrutura exigida pelo JavaScript foi mantida para nao quebrar slideshow, quiz, temas e validacao do formulario.
