
# 🌋 Cataclisma V1

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

> 🤖 Bot inteligente para Minecraft baseado em Mineflayer com IA local e memória persistente.

---

## ✨ Features

- 🤖 IA integrada (Ollama)
- 🧠 Memória persistente de jogadores
- 👀 Detecta jogadores próximos
- 💬 Responde automaticamente no chat
- 🔄 Auto-reconnect
- 🎭 Sistema de skin dinâmico
- ⚡ Fácil configuração
- 🌐 Open source

---

## 📦 Tecnologias

- Node.js
- Mineflayer
- Mineflayer Pathfinder
- Ollama
- JavaScript

---

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/n0xierr/Cataclisma-V1.git
cd Cataclisma-V1
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Dê permissão (Linux / Termux)

```bash
chmod +x install.sh
```

### 4. Execute o instalador

```bash
./install.sh
```

### 5. Inicie o bot

```bash
node bot.js
```

---

## ⚙️ Configuração

Edite as informações do servidor no código:

```js
host: "SEU_SERVIDOR",
port: 25565,
username: "NomeDoBot",
version: "1.21.4"
```

---

## 💬 Comandos

| Comando           | Função                    |
| ----------------- | ------------------------- |
| `oi`              | Cumprimenta jogador       |
| `segue kari11`    | Faz o bot seguir o player |
| `para`            | Para de seguir            |
| `kari11 pergunta` | Conversa com a IA         |

---

## 🧠 Sistema de Memória

O bot salva informações dos jogadores em:

```txt
memoria.json
```

Inclui:

* Interações
* Última mensagem
* Histórico de conversa

---

## 🤖 IA Local (Ollama)

Modelos recomendados:

* Gemma 3
* Llama 3.2

Instalação:

```bash
ollama pull gemma3
```

---

## 🛣️ Roadmap

### V1

* ✔ Memória persistente
* ✔ IA integrada
* ✔ Auto-reconnect

### V2

* ⏳ Sistema de amizades
* ⏳ Proteção de jogadores
* ⏳ Integração com Discord
* ⏳ Painel web
* ⏳ Sistema de comandos avançados

---

## 👨‍💻 Autor

Desenvolvido por **N0xierr**

GitHub: [https://github.com/n0xierr](https://github.com/n0xierr)

---

## 📄 Licença

Este projeto está sob licença MIT.

---

⭐ Se curtiu o projeto, deixe uma estrela no repositório!

```

