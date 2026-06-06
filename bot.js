const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'KariEph.aternos.me',
  port: 51866,
  username: 'kari11'
})

bot.on('spawn', () => {
  console.log('Bot conectado!')

  setInterval(() => {
    const actions = ['forward', 'back', 'left', 'right']
    const action = actions[Math.floor(Math.random() * actions.length)]

    bot.setControlState(action, true)

    if (Math.random() > 0.5) {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)
    }

    setTimeout(() => {
      bot.setControlState(action, false)
    }, 2000)

    bot.look(
      Math.random() * Math.PI * 2,
      (Math.random() - 0.5) * 0.5,
      true
    )
  }, 10000)
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return

  if (message.toLowerCase() === 'oi') {
    bot.chat('Salve!')
  }
})

bot.on('error', console.log)
bot.on('end', () => console.log('Bot desconectado'))