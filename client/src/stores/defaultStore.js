import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const myHealthyStore = defineStore(
  'DefaultId',
  () => {
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

    const getPerson = async (email) => {
      const result = await axios.get(`http://localhost:3000/persons/${email}`);
      person.value = result.data;
    };

    const updatePerson = async () => {
      await axios.patch(`http://localhost:3000/persons/${person.value.email}`, person.value);
      getPerson();
    };

    const addPerson = async (data) => {
      await axios.post('http://localhost:3000/persons', data);
      getPerson(data.email);
    };
    // #endregion

    // #region records
    const records = ref([]);

    const currentRecord = ref(null);

    const getRecords = async (pid) => {
      const result = await axios.get(`http://localhost:3000/records/${pid}`);
      console.log(result.data);
      records.value = result.data;
    };

    const addRecord = async () => {
      await axios.post('http://localhost:3000/records', currentRecord.value);
      getRecords(person.value.pid);
    };
    // #endregion
    return {
      aboutContent,
      person,
      getPerson,
      addPerson,
      records,
      getRecords,
      currentRecord,
      addRecord,
      updatePerson,
    };
  },
  {
    persist: true,
  },
);

export default myHealthyStore;
