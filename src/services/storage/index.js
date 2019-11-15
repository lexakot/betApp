import { AsyncStorage } from 'react-native';

export default class Storage {
  constructor(type) {
    this.type = type;
  }

  delete = async () => AsyncStorage.removeItem(`ServiceOrder-${this.type}`)

  get = async () => {
    const item = await AsyncStorage.getItem(`ServiceOrder-${this.type}`);

    return JSON.parse(item);
  }

  save = async item => AsyncStorage.setItem(`ServiceOrder-${this.type}`, JSON.stringify(item));

  setIdToArray = async (id) => {
    const ids = await AsyncStorage.getItem(`BetApp-${this.type}`);
    const parseIds = JSON.parse(ids);
    if (ids && parseIds.includes(id)) {
      const index = parseIds.indexOf(id);
      parseIds.splice(index, 1);
      await AsyncStorage.setItem(`BetApp-${this.type}`, JSON.stringify(parseIds));
      return;
    }
    const arr = [];
    if (parseIds) {
      parseIds.push(id);
      await AsyncStorage.setItem(`BetApp-${this.type}`, JSON.stringify(parseIds));
    } else {
      arr.push(id);
      await AsyncStorage.setItem(`BetApp-${this.type}`, JSON.stringify(arr));
    }
  }

  getIdFromArray = async () => {
    const ids = await AsyncStorage.getItem(`BetApp-${this.type}`);
    return JSON.parse(ids);
  }
}
