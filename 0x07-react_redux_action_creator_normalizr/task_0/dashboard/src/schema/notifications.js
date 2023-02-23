import * as notifications from '../../notifications.json'

export const  getAllNotificationsByUser =  (userId) => {
    let userNot = []
    notifications.default.map((item) => {
        if (item.author.id == userId){
            userNot.push(item.context)
        }
            
    })
    return userNot
}

