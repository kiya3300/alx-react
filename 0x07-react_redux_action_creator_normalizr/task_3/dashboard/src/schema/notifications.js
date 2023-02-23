import * as d from '../dcation.json'
import { normalize, schema } from 'normalizr';




const user = new schema.Entity("users")

const message = new schema.Entity("messages", {}, {
    idAttribute: "guid"
});

const dcation = new schema.Entity("dcations", {
    author: user,
    context: message
})

export const normalizedData = normalize(d.default, [dcation])

export const getAlldcationsByUser = (userId) => {
    let userNotifs = []
    const dcations = normalizedData.entities.dcations
    const messages = normalizedData.entities.messages
    const ddList = normalizedData.result.filter((dd) => dcations[dd].author == userId)
    ddList.forEach((id) => userNotifs.push(messages[dcations[id].context]))
    return userNotifs
}