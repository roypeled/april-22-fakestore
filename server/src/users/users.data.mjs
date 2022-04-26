import { User } from "./users.model.mjs";


export async function getAllUsers() {
    return User.find();
}

export async function getUserById(id) {
    return User.findById(id);   
}

export async function addUser(userObj) {
    const user = new User(userObj);
    return user.save();
}

export async function removeUser(id) {
    return User.findByIdAndDelete(id);
}

export async function editUser(id, user) {
    return User.findByIdAndUpdate(id, user);
}