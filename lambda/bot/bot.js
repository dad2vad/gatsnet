const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const startAction = require('./actions/start')

const bot = new Telegraf('695543276:AAFGzztD66s1A0lz3rfdzEoKxtzQBZakqKU')

bot.start(ctx => {

  return startAction(ctx)
})

bot.command('/set', (ctx) => {
    return  ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', Extra.HTML().markup((m) =>
            m.inlineKeyboard([
            m.callbackButton('Coke', 'Coke'),
            m.callbackButton('Pepsi', 'Pepsi')
        ])))
})

bot.help((ctx) => ctx.reply("/wrap /caption /random /inline /simple /pyramid /special /custom /onetime /del"))
bot.hears('Hi', (ctx) => ctx.reply('Hola'))

bot.action(/.+/, (ctx) => {
    return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`)
})

exports.handler = async event => {
	console.log(event.body)
  await bot.handleUpdate(JSON.parse(event.body));
  return { statusCode: 200, body: '' };
}