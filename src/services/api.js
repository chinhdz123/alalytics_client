const BASE_URL = process.env.VUE_APP_API_BASE_URL;
module.exports = {
  DEVICE: `${BASE_URL}/get_list_device`,
  ENTITYID: `${BASE_URL}/get_list_entity_id`,
  ADDDEVICE: `${BASE_URL}/add_device`,
  DELETEDEVICE: `${BASE_URL}/delete`,
  TRAINDEVICE: `${BASE_URL}/train`,
  LOGDEVICE: `${BASE_URL}/log`,
  HABITDEVICE: `${BASE_URL}/show_habit`,
};
