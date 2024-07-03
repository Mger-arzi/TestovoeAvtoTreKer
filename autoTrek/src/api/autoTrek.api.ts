import axios from "axios";

export const instance = axios.create({
  baseURL: "https://gps.autotracker.group",
  withCredentials: true,
});



export const autoTrek = {
  getAutoTrek() {
    return instance.get<AutoTrek>("api/devices");
  },
  createAutoTrek(item: Item) {
    return instance.post<AutoTrek>("api/devices", { item });
  },
  deleteAutoTrek(id: string) {
    return instance.delete<AutoTrek>(`/api/devices/${id}`);
  },
}
export type AutoTrek = Root2[]

export type Root2 = {
  id: number
  attributes: Attributes
  groupId: number
  calendarId: number
  protocol: unknown
  name: string
  uniqueId: string
  status: string
  lastUpdate: string
  positionId: number
  phone: unknown
  model: unknown
  contact: unknown
  category: unknown
  disabled: boolean
  expirationTime: unknown
}

export type Attributes = {
  deviceImage?: string
  "processing.copyAttributes"?: string
  "decoder.timezone"?: string
  speedLimit?: number
  "web.reportColor"?: string
  deviceInactivityStart?: number
}
export type Item = {
  id: number
  name: string
  uniqueId: string
  status: string
  disabled: boolean
  lastUpdate: string
  positionId: number
  groupId: number
  phone: string
  model: string
  contact: string
  category: string
  attributes: object
}


