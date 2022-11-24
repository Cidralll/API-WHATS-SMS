const { create, Whatsapp } = require('venom-bot');

class Sender {

    constructor() {
        this.initialize();
    }

    async sendText(to, body) {
        await this.client.sendText(to , body)
    }

    initialize() {
        const start = (client) => {
            this.client = client;
        }

        create('wsl-sender-dev')
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }
}

module.exports = Sender;