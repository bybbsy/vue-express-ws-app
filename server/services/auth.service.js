const UserModel = require('../model/user')


class AuthService {
    async login(payload) {
        try {
            const { email } = payload;

            const user = await UserModel.findOne({ email })

            return user;
        } catch (e) {
            console.log(e)
        }
    }
}