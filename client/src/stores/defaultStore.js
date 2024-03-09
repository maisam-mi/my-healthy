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
    const errorMessage = ref('');

    const getPerson = async (email) => {
      const result = await axios.get(`http://localhost:3000/persons/${email}`);
      person.value = result.data;
    };

    const updatePerson = async () => {
      await axios.patch(`http://localhost:3000/persons/${person.value.email}`, person.value);
      getPerson(person.value.email);
    };

    const addPerson = async (data) => {
      await axios.post('http://localhost:3000/persons', data);
      isAuthenticated.value = true;
      getPerson(data.email);
    };

    const authenticatePerson = async (data) => {
      const user = await axios.get(`http://localhost:3000/persons/${data.email}`);
      console.log('step 1:', user.data);
      const password = bcrypt.hashSync(data.password, user.data.salt);
      console.log('step 2:', password);
      const result = await axios.patch('http://localhost:3000/persons/authenticate', {
        email: data.email,
        password,
      });
      console.log('step 3:', result);
      person.value = result.data;
      isAuthenticated.value = true;
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
      isAuthenticated,
      getPerson,
      addPerson,
      authenticatePerson,
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
