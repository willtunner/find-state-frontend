# Teste Técnico Front-end 

### (Exibido os estados que o back-end retorna )
> Aplicação simples que contem um dropdown centralizado na tela que mostra os estados retornados pelo back-end com 4 bordas coloridas criadas com flex-box do css.
>
> Front-end criado em nextJs utilizando a dependência axios, typeScript para buscar os estados que 
a api retorna, criado uma função para desincriptografar os nomes dos estados encriptografado com uma criptografia própria sem uso de bibliotecas.

### Imagem do projeto
<div align="center">
  <img src="/img/01.png" width="30%">
</div>

### Como usar

```ini
  - Certifique de que o node esteja insalado v20^, ou baixe 'https://nodejs.org/'
  - Certifique se o NextJs está instalado, ou instale 'npx create-next-app@latest'
  - Baixe o projeto aqui no github e descompacta
  - Abra a pasta do projeto e instale a dependencias utilizando 'npm install'
  - Executa o código 'npm run dev' no terminal para iniciar o projeto.
```


Api executada no seguinte path:

- `http://localhost:3001/`: Path raiz onde mostra o dropdown a ser exibido

### Escolha o estado

Ao clicar no dropdown será mostrado todos os estados e quando digitar ele irá mostrar somente os estados com os caracteres digitados, quando tiver o focus a cor da borda muda para um laranja assim como o hover do dropdown. 

### Como funciona
> Usando o axios comuminos o path GET: `http://localhost:3000/states` que o back-end fornece os estado, como o nome dos estados está criptografado ele será exibido dessa forma. 
> Foi criado uma função para descriptografar o nome dos estados.


```json
[
     {
        "id": 12,
        "name": "Dfuh"
    },
    {
        "id": 27,
        "name": "Dodjrdv"
    },
    {
        "id": 13,
        "name": "Dpd2rqdv"
    }
]
```

### Technologies used:
 ![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-%23000000.svg?style=for-the-badge&logo=axios&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&color=green)
 ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 






