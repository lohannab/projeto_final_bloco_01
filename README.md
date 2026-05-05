# 👗 Projeto Final Bloco 01: Moda Atual

"Estilo é uma forma de dizer quem você é sem precisar falar."

Este é o projeto consolidatário do **Bloco 01** do bootcamp da **Generation Brasil**. Após passarmos por lógica e fundamentos de POO, este sistema de e-commerce (Moda Atual) aplica de forma integrada todos os conceitos de desenvolvimento backend em TypeScript.

---

## 👔 O PROJETO

O **Moda Atual** é um sistema de gerenciamento de estoque para uma loja de moda, focado em organização, escalabilidade e aplicação de padrões de projeto (*Design Patterns*).

### Diferenciais Técnicos:
* **Abstração Avançada:** Uso da classe abstrata `Produtos` para garantir que nenhum produto genérico seja criado sem especialização.
* **Interface (Contratos):** Implementação da `ProdutosRepository` para definir o comportamento esperado do sistema de dados.
* **Polimorfismo:** Diferentes comportamentos de visualização e lógica para categorias distintas (Vestidos e Bolsas).

---

## ⚙️ FUNCIONALIDADES (CRUD)

O sistema permite a gestão completa do catálogo:
1. **Cadastrar Produto:** Entrada de novos itens com atributos específicos (tamanho, estilo, SKU).
2. **Listar todos os Produtos:** Visão geral do inventário.
3. **Consultar por SKU:** Busca rápida e precisa de itens únicos.
4. **Atualizar Produto:** Modificação de preços, títulos ou categorias.
5. **Deletar Produto:** Remoção de itens do estoque.

---

## 📂 ESTRUTURA DE CLASSES

* **`Produtos` (Abstract):** A espinha dorsal do sistema (SKU, Título, Categoria, Preço).
* **`Vestidos` (Subclasse):** Especializada com atributos como *Tamanho* e *Comprimento*.
* **`Bolsas` (Subclasse):** Especializada com atributos como *Estilo* e se *Acompanha Carteira*.
* **`ProdutosRepository`:** Interface que dita as regras do repositório.

---

## 🛠️ TECNOLOGIAS

* **TypeScript:** Tipagem estrita para evitar erros em tempo de execução.
* **Node.js:** Ambiente de execução.
* **Readline-sync:** Para interação dinâmica via terminal.

---

## 🌟 CONCLUSÃO DO BLOCO

Este projeto marca o encerramento da primeira etapa da jornada, provando a capacidade de construir sistemas modulares, limpos (Clean Code) e prontos para evoluções futuras.

---
💻 Desenvolvido por **Lohanna B.**
"Tech, design and purposeful solutions"
