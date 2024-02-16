import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const useDefaultStore = defineStore('DefaultId', () => {
  const aboutContent = ref('Implementiert von © Maisam Mohammadi, HTL Wien West 2023');

  const person = ref({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    height: '',
    weight: '',
    traveldistance: '',
    calories: '',
  });

  const getPerson = async () => {
    const result = await axios.get('http://localhost:3000/persons/1');
    person.value = result.data;
  };

  return { aboutContent, person, getPerson };
});

export default useDefaultStore;
