
const Session = require('../db/models/Session');

const generateSession = async (user) => {

    const newSession = new Session({
        user: user._id,
    });

    await newSession.save();

    return newSession;
}

const deleteSession = async (id) => {
    return await Session.findByIdAndDelete(id)
}

module.exports = {
    generateSession,
    deleteSession,
};
