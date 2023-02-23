import * as notifi from '../notification.json'
import { normalize, schema } from 'normalizr';




const user = new schema.Entity("users")

const message = new schema.Entity("messages", {}, {
    idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
    author: user,
    context: message
})

export const normalizedData = normalize(notifi.default, [notification])

export const getAllNotificationsByUser = (userId) => {
    let userNotifs = []
    const notifications = normalizedData.entities.notifications
    const messages = normalizedData.entities.messages
    const NotifIdList = normalizedData.result.filter((notifId) => notifications[notifId].author == userId)
    NotifIdList.forEach((id) => userNotifs.push(messages[notifications[id].context]))
    return userNotifs
}