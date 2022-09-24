<template>
  <div>
    <h1 id="titulo">Home - Título Principal</h1>
    <h2 :style="{ color: cor.atual }">Home - Título Secundário</h2>
    <div v-show="cor.atual === 'blue'">A cor é: azul</div>

    <input type="text" v-model="cor.atual" @keydown="mudaCor()" /><br />
    <button @click="mudaCor()">Muda cor do Título</button>
    <p v-html="cor.atual" />

    <!-- Condicional -->
    <div v-if="cor.atual === 'red'">vermelho</div>
    <div v-else>Agora não é vermelho agora é: {{ cor.atual }}</div>

    <!-- Condicional (Ex: Alterna a visibilidade do elemento) -->
    <div v-show="cor.atual === 'cores'">
      <h3>Tabela de Cores</h3>

      <table>
        <thead>
          <tr>
            <th>Nome da Cor</th>
            <th>Código da Cor</th>
          </tr>
        </thead>
        <tbody>
          <!-- Renderiza o elemento -->
          <tr v-for="(cor, index) in cores" :key="index">
            <td>{{ cor.nome }}</td>
            <td>{{ cor.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- (innerHTML) Insere como HTML simples -->
    <div v-html="texto.html"></div>

    <!-- Permite que exiba um texto dentro dos 2 bigodes -->
    <span v-pre>{{ Permite exibição de texto dentro do double mustache }}</span>

    <div>
      <!-- Renderize o elemento e o componente apenas uma vez e ignore as atualizações futuras. -->
      <p v-once>{{ nome }}</p>

      <!-- Atualize o conteúdo de texto do elemento -->
      <p v-text="nome"></p>
      <button @click="alteraNome">Alterar Nome</button>
    </div>
  </div>

  <!-- Não entendi muito bem como usar -->
  <div v-memo="[valueA, valueB]">...</div>

  <!-- Oculta o conteudo até a página ser completamente carregada -->
  <div v-cloak>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      cor: {
        atual: "",
      },
      cores: [
        { nome: "red", id: "#FF0000" },
        { nome: "blue", id: "#0000FF" },
        { nome: "black", id: "#000000" },
        { nome: "orange", id: "#FFA500" },
      ],
      texto: {
        html: "<div><h2>Testando o v-html...</h2></div>",
      },
      nome: "Dimas",
      message: "Carregando...",
    };
  },
  methods: {
    mudaCor() {
      document.getElementById("titulo").style.color = this.cor.atual;
    },
    alteraNome() {
      this.nome = "Gideão";
    },
  },
  mounted() {
    setTimeout(() => {
      this.message = "Página completamente carregada!";
    }, "3000");
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
