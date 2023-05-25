const RoomSchema = require('../model/room');

class RoomService {
    async getUsersByRoomId(id) {
        try {
            const users = await RoomSchema
                .findOne({id})
                .populate('users')
                .exec();

            return users.users;
        } catch (error) {
            console.error(error);            
        }
    }
}

module.exports = new RoomService();