import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const useDefaultStore = defineStore('DefaultId', () => {
  const aboutContent = ref('Implementiert von © Maisam Mohammadi, HTL Wien West 2023');

  // #region person
  const person = ref({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    height: '',
    weight: '',
    traveldistance: '',
    calories: '',
    time: { hours: 0, minutes: 0, seconds: 0 },
  });

  const getPerson = async () => {
    const result = await axios.get('http://localhost:3000/persons/1');
    person.value = result.data;
  };

  const updatePerson = async () => {
    await axios.patch(`http://localhost:3000/persons/${person.value.email}`, person.value);
    getPerson();
  };
  // #endregion

  // #region records
  const records = ref([]);

  const currentRecord = ref(null);

  const getRecords = async () => {
    const result = await axios.get('http://localhost:3000/records/1');
    records.value = result.data;
  };

  const addRecord = async () => {
    await axios.post('http://localhost:3000/records', currentRecord.value);
    getRecords();
  };
  // #endregion
  return {
    aboutContent,
    person,
    getPerson,
    records,
    getRecords,
    currentRecord,
    addRecord,
    updatePerson,
  };
});

export default useDefaultStore;
