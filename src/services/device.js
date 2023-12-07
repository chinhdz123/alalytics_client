import { METHOD, request } from "@/utils/request";
import {
  DEVICE,
  ENTITYID,
  ADDDEVICE,
  DELETEDEVICE,
  TRAINDEVICE,
  LOGDEVICE,
  HABITDEVICE,
} from "./api";

export async function getListDevice() {
  return request(DEVICE, METHOD.GET);
}
export async function getListEntityId() {
  return request(ENTITYID, METHOD.GET);
}
export async function saveDevice(params) {
  return request(ADDDEVICE, METHOD.POST, params);
}
export async function deleteDevice(params) {
  return request(DELETEDEVICE, METHOD.POST, params);
}
export async function trainDevice(params) {
  return request(TRAINDEVICE, METHOD.POST, params);
}
export async function getLogDevice(params) {
  return request(LOGDEVICE, METHOD.POST, params);
}
export async function getHabitDevice(params) {
  return request(HABITDEVICE, METHOD.POST, params);
}
export default {
  getListDevice,
  getListEntityId,
  saveDevice,
  deleteDevice,
  trainDevice,
  getLogDevice,
  getHabitDevice,
};
