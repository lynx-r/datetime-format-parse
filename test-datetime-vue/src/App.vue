<script setup lang="ts">
import defaultConfig from "@config/default.json";
import { computed, ref, watch } from "vue";
import createFormatter from "../../lib/package";

let formatter = createFormatter(defaultConfig);
console.log(defaultConfig);
console.log(formatter.formatDatetimeInTest2222("2023-07-19T12:21:15+03:00"));
let config = ref(JSON.stringify(defaultConfig.format, null, 2));
let pivotTz = defaultConfig.constants.TZ;

let configJson = computed(() => JSON.parse(config.value));
let now = ref(new Date());
let supportedTz = Intl.supportedValuesOf("timeZone");
let selectedTz = ref(pivotTz);

watch([selectedTz, configJson], () => {
  const newConfig = {
    format: configJson.value,
    constants: {
      TZ: selectedTz.value,
    },
  };
  formatter = createFormatter(newConfig);
});
</script>

<template>
  <div>
    <label for="pivotTz"></label>
    <select
      name=""
      id=""
      v-model="selectedTz"
    >
      <option v-for="tz in supportedTz">
        {{ tz }}
      </option>
    </select>
    <input
      type="select"
      v-model="selectedTz"
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
    <ul>
      <li v-for="(value, key) of configJson">
        <code>{{ key }}</code> / <i>{{ value }}</i> /
        <b>{{ formatter[key](now) }}</b>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
