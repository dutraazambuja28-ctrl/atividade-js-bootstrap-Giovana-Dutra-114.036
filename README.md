# Painel de Estudos - JavaScript ES6 e Bootstrap

## 📚 Nome e Tema do Projeto
- **Nome do Projeto:** Atividade Prática - Painel de Estudos (Painel Acadêmico)
- **Tema:** Acompanhamento de progresso acadêmico, disciplinas e metas de aprendizado de um aluno.

---

## 💻 Explicação da Interface Criada
A interface foi desenvolvida utilizando o framework **Bootstrap** via CDN, garantindo uma estrutura limpa, moderna e responsiva sem a necessidade de arquivos CSS adicionais. 

A estrutura da página é composta por:
1. Uma **Navbar** superior escura com o título do painel.
2. Um cabeçalho institucional (**Hero**) de boas-vindas com título de destaque e descrição.
3. Um **Alerta** informativo instruindo o usuário a abrir o Console do navegador (`F12`) para acompanhar a execução dos scripts.
4. Uma grade de três **Cards** responsivos detalhando os módulos de estudo (JavaScript ES6, Interface Bootstrap e Desafio Integrador), complementados por **Badges** coloridos de status.
5. Um **Botão** centralizado de destaque visual.
6. Um **Rodapé** minimalista ao final da página.

---

## 🧩 Componentes Bootstrap Utilizados
- `navbar` e `navbar-brand`
- `container`, `row`, `col` (Sistema de Grid Responsivo)
- `card`, `card-title`, `card-text`
- `badge` (com as variações `bg-success`, `bg-warning`, `bg-secondary`)
- `alert` (`alert-info`)
- `btn` (`btn-outline-primary`)
- `footer`

---

## 📝 Diferença entre `let`, `const` e `var`
- **`const`**: Utilizada para declarar constantes, variáveis cujos valores **não podem ser reatribuídos** após a declaração inicial (ex: o nome do aluno e o curso). Isso traz mais segurança e previsibilidade ao código.
- **`let`**: Utilizada para declarar variáveis cujos valores **podem ser modificados** ao longo da execução do programa (ex: a quantidade de atividades concluídas e notas). Possui escopo de bloco.
- **`var`**: Forma antiga de declaração de variáveis presente nas versões anteriores ao ES6. Possui escopo de função ou global e sofre de um comportamento chamado *hoisting* (içamento), o que pode gerar bugs silenciosos. Atualmente, seu uso é evitado em favor de `let` e `const`.

---

## 🗂️ Tipos de Dados Utilizados
No arquivo `script.js`, foram aplicados os seguintes tipos primitivos:
- **String (`string`)**: Textos entre aspas, como o nome do aluno (`Giovana Dutra`), o curso e o título do painel.
- **Number (`number`)**: Valores numéricos inteiros ou decimais utilizados para cálculos de notas, médias e cargas horárias (`8.5`, `120`, etc.).
- **Boolean (`boolean`)**: Valores lógicos binários (`true` ou `false`) utilizados nas comparações de aprovação e status de matrícula.
- **Null (`null`)**: Representação intencional da ausência de valor em uma variável de observação do tutor.

---

## ⚖️ Explicação da Condição Criada (`if/else`)
A estrutura condicional avalia se a média final do estudante atinge a nota de corte (`mediaFinal >= 7.0`):
- **Caminho verdadeiro (`if`)**: Se a média for maior ou igual a 7.0, o sistema exibe no Console a mensagem informando a aprovação acadêmica.
- **Caminho falso (`else`)**: Caso contrário, imprime o aviso de que o aluno necessita de recuperação.

---

## 🧗 Maior Dificuldade Encontrada e Resolução
- **Dificuldade:** A principal dificuldade foi compreender o funcionamento das classes utilitárias do Bootstrap (como a estrutura de grades `container`, `row`, `col` e o dimensionamento de espaçamentos) e como integrá-las de forma harmônica na construção da interface sem escrever CSS manual.
- **Resolução:** A dificuldade foi superada consultando a documentação oficial do Bootstrap e testando individualmente os componentes visuais (como cards, badges e alertas).