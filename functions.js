const Enmap = require('enmap');


function incHealth(userid, amount, dbname) {
    if (!dbname) dbname = 'data'; 
    const database = new Enmap({ name: dbname });
    if (!userid) return new ReferenceError("cannot set 'userid' of undefined");
    if (!/^[0-9]+$/.test(amount)) return new Error("'amount' has to only include numbers");
    database.ensure(userid, { health: 100, hunger: 100, thirst: 100 }, 'body');
    let toSet = parseInt(amount);
    if (toSet > 100) toSet = 100;
    if (toSet < 0) toSet = 0;
    if (database.get(userid).body.health == 100) toSet = 0;
    const newData = database.get(userid).health + toSet;
    database.set(userid, newData, 'health');
    let check = false;
    if (database.get(userid).body.health == 0) check = true;
    return check;
};

function incHunger(userid, amount, dbname) {
    if (!dbname) dbname = 'data'; 
    const database = new Enmap({ name: dbname });
    if (!userid) return new ReferenceError("cannot set 'userid' of undefined");
    if (!/^[0-9]+$/.test(amount)) return new Error("'amount' has to only include numbers");
    database.ensure(userid, { health: 100, hunger: 100, thirst: 100 }, 'body');
    let toSet = parseInt(amount);
    if (toSet > 100) toSet = 100;
    if (toSet < 0) toSet = 0;
    if (database.get(userid).health == 100) toSet = 0;
    const newData = database.get(userid).body.hunger + toSet;
    database.set(userid, newData, 'body.hunger');
    let check = false;
    if (database.get(userid).body.hunger == 0) check = true;
    return check;
};

function incThirst(userid, amount, dbname) {
    if (!dbname) dbname = 'data'; 
    const database = new Enmap({ name: dbname });
    if (!userid) return new ReferenceError("cannot set 'userid' of undefined");
    if (!/^[0-9]+$/.test(amount)) return new Error("'amount' has to only include numbers");
    database.ensure(userid, { health: 100, hunger: 100, thirst: 100 }, 'body');
    let toSet = parseInt(amount);
    if (toSet > 100) toSet = 100;
    if (toSet < 0) toSet = 0;
    if (database.get(userid).health == 100) toSet = 0;
    const newData = database.get(userid).body.thirst + toSet;
    database.set(userid, newData, 'body.thirst');
    let check = false;
    if (database.get(userid).body.thirst == 0) check = true;
    return check;
};

function deHealth(userid, amount, dbname) {
    if (!dbname) dbname = 'data'; 
    const database = new Enmap({ name: dbname });
    if (!userid) return new ReferenceError("cannot set 'userid' of undefined");
    if (!/^[0-9]+$/.test(amount)) return new Error("'amount' has to only include numbers");
    database.ensure(userid, { health: 100, hunger: 100, thirst: 100 }, 'body');
    let toSet = parseInt(amount);
    if (toSet > 100) toSet = 100;
    if (toSet < 0) toSet = 0;
    if (database.get(userid).health == 0) toSet = 0;
    const newData = database.get(userid).body.health - toSet;
    database.set(userid, newData, 'body.health');
    let check = false;
    if (database.get(userid).body.health == 0) check = true;
    return check;
};

function deHunger(userid, amount, dbname) {
    if (!dbname) dbname = 'data'; 
    const database = new Enmap({ name: dbname });
    if (!userid) return new ReferenceError("cannot set 'userid' of undefined");
    if (!/^[0-9]+$/.test(amount)) return new Error("'amount' has to only include numbers");
    database.ensure(userid, { health: 100, hunger: 100, thirst: 100 }, 'body');
    let toSet = parseInt(amount);
    if (toSet > 100) toSet = 100;
    if (toSet < 0) toSet = 0;
    if (database.get(userid).health == 0) toSet = 0;
    const newData = database.get(userid).body.hunger - toSet;
    database.set(userid, newData, 'body.hunger');
    let check = false;
    if (database.get(userid).body.hunger == 0) check = true;
    return check;
};

function embed(msg, color, description) {
    const em = new MessageEmbed()
      .setColor(color)
      .setDescription(description);
    return msg.channel.send(em).catch(err => client.debugg ? console.error : false);
};

function healthNotify(msg) {
    if (new Enmap({ name: dbname }).get(id).body.health == 50) {
        return embed(msg, "ORANGE", `⚠️ **${msg.author.username}** please be aware that your health is low go to the doctor soon to avoid dying.`);
    } else if (new Enmap({ name: dbname }).get(id).body.health == 20) {
        return embed(msg, "RED", `❗ **${msg.author.username}** your health is extremely low, please visit the doctor before doing anything else again!`);
    } else {
        return;
    }
};

function deathNotify(msg) {
    return embed(msg, "BLACK", `☠️ **${msg.author.username}** you died, you lost **95%** of your balance.`);
};

function deThirst(userid, amount, dbname) {
    if (!dbname) dbname = 'data'; 
    const database = new Enmap({ name: dbname });
    if (!userid) return new ReferenceError("cannot set 'userid' of undefined");
    if (!/^[0-9]+$/.test(amount)) return new Error("'amount' has to only include numbers");
    database.ensure(userid, { health: 100, hunger: 100, thirst: 100 }, 'body');
    let toSet = parseInt(amount);
    if (toSet > 100) toSet = 100;
    if (toSet < 0) toSet = 0;
    if (database.get(userid).health == 0) toSet = 0;
    const newData = database.get(userid).body.thirst - toSet;
    database.set(userid, newData, 'body.thirst');
    let check = false;
    if (database.get(userid).body.thirst == 0) check = true;
    return check;
};

function Function(msg, id, amount, dbname) {
    if (!id) return new Error("'id' is undefined");
    if (!amount) return new Error("'amount' is undefined");
    if (!dbname) dbname = 'data';
    const a = deHunger(msg.author.id, 5, dbname);
    const b = deThirst(msg.author.id, 5, dbname);
    if (a) {
        const c = deHealth(msg.author.id, 5, 'users');
        if (c) {
            const output = (parseInt(new Enmap({ name: dbname }).get(id).balance) * 95) / 100;
            const newBal = parseInt(new Enmap({ name: dbname }).get(id).balance) - output;
            if (parseInt(new Enmap({ name: dbname }).get(id).balance >= 1)) set(msg.author.id, newBal, 'balance');
            incHealth(msg.author.id, 100);
            incHunger(msg.author.id, 100);
            incThirst(msg.author.id, 100);
            return deathNotify(msg);
        }
        if (parseInt(new Enmap({ name: dbname }).get(id).body.health) <= 50) {
            return healthNotify(msg);
        }
    } else if (b) {
        const c = deHealth(msg.author.id, 5, 'users');
        if (c) {
            const output = (parseInt(new Enmap({ name: dbname }).get(id).balance) * 95) / 100;
            const newBal = parseInt(new Enmap({ name: dbname }).get(id).balance) - output;
            if (parseInt(new Enmap({ name: dbname }).get(id).balance >= 1)) new Enmap({ name: dbname }).set(msg.author.id, newBal, 'balance');
            incHealth(msg.author.id, 100);
            incHunger(msg.author.id, 100);
            incThirst(msg.author.id, 100);
            return deathNotify(msg);
        }
        if (parseInt(new Enmap({ name: dbname }).get(id).body.health) <= 50) {
            return healthNotify(msg);
        }
    }
}

module.exports = { Function };