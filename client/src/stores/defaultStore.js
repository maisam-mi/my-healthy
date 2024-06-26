import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import bcrypt from 'bcryptjs';

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

    const isAuthenticated = ref(false);

    const getPerson = async (email) => {
      const result = await axios.get(`http://localhost:3000/persons/${email}`);
      person.value = result.data;
    };

    const updatePerson = async () => {
      await axios.patch(`http://localhost:3000/persons/${person.value.email}`, person.value);
      getPerson(person.value.email);
    };

    const addPerson = async (data, password) => {
      data.salt = bcrypt.genSaltSync(10);
      data.password = bcrypt.hashSync(password, data.salt);
      await axios.post('http://localhost:3000/persons', data);
      await getPerson(data.email);
      isAuthenticated.value = true;
    };

    const authenticatePerson = async (data) => {
      const user = await axios.get(`http://localhost:3000/persons/${data.email}`);
      const password = bcrypt.hashSync(data.password, user.data.salt);
      const result = await axios.patch('http://localhost:3000/persons/authenticate', {
        email: data.email,
        password,
      });
      person.value = result.data;
      isAuthenticated.value = true;
    };

    const deletePerson = async () => {
      await axios.delete(`http://localhost:3000/persons/${person.value.email}`);
    };
    // #endregion

    // #region records
    const records = ref([]);

    const currentRecord = ref(null);

    const getRecords = async (pid) => {
      const result = await axios.get(`http://localhost:3000/records/${pid}`);
      records.value = result.data;
    };

    const addRecord = async () => {
      await axios.post('http://localhost:3000/records', currentRecord.value);
      getRecords(person.value.pid);
    };
    // #endregion

    const resetVariables = async () => {
      person.value = {
        firstname: '',
        lastname: '',
        email: '',
        birthdate: '',
        height: '',
        weight: '',
        traveldistance: '',
        calories: '',
        time: { hours: 0, minutes: 0, seconds: 0 },
      };
      records.value = [];
      currentRecord.value = null;
      isAuthenticated.value = false;
    };

    return {
      aboutContent,
      person,
      isAuthenticated,
      getPerson,
      addPerson,
      authenticatePerson,
      deletePerson,
      records,
      getRecords,
      currentRecord,
      addRecord,
      updatePerson,
      resetVariables,
    };
  },
  {
    persist: true,
  },
);

export default myHealthyStore;
