<script setup lang="ts">
import defaultConfig from "@config/default.json";
import createFormatter from "datetime-format-parse";
import { computed, ref, watch } from "vue";

let formatter = createFormatter(defaultConfig);
let config = ref(JSON.stringify(defaultConfig, null, 2));
let pivotTz = ref(defaultConfig.constants.TZ);

let configJsonObj = computed(() => JSON.parse(config.value));
let now = ref(new Date());
let supportedTz = (<any>Intl).supportedValuesOf("timeZone");

watch([pivotTz, configJsonObj], () => {
  config.value = JSON.stringify(
    {
      ...configJsonObj.value,
      constants: {
        TZ: pivotTz.value,
      },
    },
    null,
    2
  );
  formatter = createFormatter(JSON.parse(config.value));
});

function formatNowDate(key: keyof typeof defaultConfig.formats) {
  try {
    return formatter[key](now.value);
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div>
    <h1>Библиотека для форматирования и парсинга с учетом временной зоны</h1>
    <p>
      Берет время в TZ клиента и переводит его в TZ указанное в конфиге
      <code>config/default.json::constants.TZ</code>
    </p>
    <p>Нужно для того, чтобы показывать время в TZ отличной от системной.</p>
    <label for="pivotTz"></label>
    <select
      name=""
      id=""
      v-model="pivotTz"
    >
      <option v-for="tz in supportedTz">
        {{ tz }}
      </option>
    </select>
    <input
      type="select"
      v-model="pivotTz"
    />
  </div>
  <textarea
    name=""
    id=""
    rows="20"
    cols="90"
    v-model="config"
  >
  </textarea>
  <div>
    <table>
      <thead>
        <tr>
          <th>Функция</th>
          <th>Паттерн</th>
          <th>
            Вычисление текущего времени в TZ
            {{ pivotTz }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) of configJsonObj.formats">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
          <td>{{ formatNowDate(key) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%; /* Make the table take full width of its container */
  border-collapse: collapse; /* Collapse borders for a cleaner look */
  margin-bottom: 20px; /* Add some space below the table */
}

th,
td {
  border: 1px solid #ccc; /* Light grey border for all cells */
  padding: 8px; /* Add padding inside cells */
  text-align: left; /* Align text to the left */
}

th {
  background-color: #f2f2f2; /* Light grey background for table headers */
  font-weight: bold; /* Make header text bold */
}

tr:nth-child(even) {
  background-color: #f9f9f9; /* Zebra striping for even rows */
}

tr:hover {
  background-color: #e0e0e0; /* Highlight rows on hover */
}
</style>
