export const RECEIVE_USERS = 'RECEIVE_USERS'

export function ReceiveUsers (users) {

  return {
    type: RECEIVE_USERS,
    users,
  }
}
