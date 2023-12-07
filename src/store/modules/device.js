import apiService from "@/services/device";

export default {
  namespaced: true,
  state: {
    listDevice: [],
    listEntityId: [],
    listLog: [],
    listHabit: [],
  },
  getters: {},
  actions: {
    async getListDevice(context) {
      const { data } = await apiService.getListDevice();
      const list_devices = data.list_devices;
      console.log(list_devices);
      context.commit("setDeviceList", list_devices);
    },
    async getListEntityId(context) {
      const { data } = await apiService.getListEntityId();
      context.commit("setEntityIdList", data);
    },
    async saveDevice(context, body) {
      await apiService.saveDevice(body);
    },
    async deleteDevice(context, body) {
      console.log(body);
      await apiService.deleteDevice(body);
    },
    async trainDevice(context, body) {
      const data = await apiService.trainDevice(body);
      console.log(data);
    },
    async getLogDevice(context, body) {
      const log = await apiService.getLogDevice(body);
      context.commit("setListLog", log.data);
    },
    async getHabitDevice(context, body) {
      const habit = await apiService.getHabitDevice(body);
      context.commit("setListHabit", habit.data);
    },
  },
  mutations: {
    setDeviceList(state, list) {
      state.listDevice = list;
    },
    setEntityIdList(state, list) {
      state.listEntityId = list;
    },
    setListLog(state, list) {
      state.listLog = list;
    },
    setListHabit(state, list) {
      state.listHabit = list;
    },
  },
};
