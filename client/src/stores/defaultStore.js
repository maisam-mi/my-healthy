import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

const useDefaultStore = defineStore("DefaultId", () => {
  const aboutContent = ref(
    "Implementiert von © Maisam Mohammadi, HTL Wien West 2023"
  );

  //#region person
  const person = ref({
    firstname: "",
    lastname: "",
    email: "",
    birthdate: "",
    height: "",
    weight: "",
    traveldistance: "",
    calories: "",
  });

  const getPerson = async () => {
    const result = await axios.get("http://localhost:3000/persons/1");
    person.value = result.data;
  };
  //#endregion

  //#region records
  const records = ref([]);

  const getRecords = async () => {
    const result = await axios.get("http://localhost:3000/records/1");
    records.value = result.data;
  };
  //#endregion
  return { aboutContent, person, getPerson, records, getRecords };
});

export default useDefaultStore;
