<script setup>
import { useReservationStore } from "@/stores/reservation";
import { storeToRefs } from "pinia";

const store = useReservationStore();
const { getSelectedTable } = storeToRefs(store);

const getChairTransform = (table, index) => {
  const angle = (360 / table.capacity) * (index - 1);
  const distance = table.size + 15;

  if (table.shape === "round") {
    return `rotate(${angle}, ${table.x}, ${table.y}) translate(${table.x + distance}, ${table.y})`;
  } else {
    let cx = table.x;
    let cy = table.y;
    const rectWidth = table.size * 2;
    const rectHeight = table.size * 1.4;
    const offset = 40;

    if (index === 1) return `translate(${cx}, ${cy - rectHeight / 2 - 15})`;
    if (index === 2) return `translate(${cx}, ${cy + rectHeight / 2 + 15})`;

    if (table.capacity >= 4) {
      if (index === 3) return `translate(${cx - rectWidth / 2 - 15}, ${cy})`;
      if (index === 4) return `translate(${cx + rectWidth / 2 + 15}, ${cy})`;
    }

    if (table.capacity >= 6) {
      if (index === 5) return `translate(${cx - rectWidth / 2 - 15}, ${cy - offset})`;
      if (index === 6) return `translate(${cx + rectWidth / 2 + 15}, ${cy - offset})`;
    }

    if (table.capacity >= 8) {
      if (index === 7) return `translate(${cx - rectWidth / 2 - 15}, ${cy + offset})`;
      if (index === 8) return `translate(${cx + rectWidth / 2 + 15}, ${cy + offset})`;
    }

    return `translate(${cx}, ${cy})`;
  }
};
</script>

<template>
  <div class="floor-plan-svg-wrapper">
    <svg viewBox="0 0 800 600" class="floor-plan-svg">
      <rect
        x="10"
        y="10"
        width="780"
        height="580"
        rx="20"
        fill="#292929"
        stroke="#3d3d3d"
        stroke-width="4"
      />
      <path d="M 350 590 L 450 590" stroke="#292929" stroke-width="8" />
      <text x="400" y="560" text-anchor="middle" fill="#5c5c5c" font-size="14" font-weight="bold">
        MAIN ENTRANCE
      </text>
      <path
        d="M 360 590 Q 400 540 440 590"
        fill="none"
        stroke="#5c5c5c"
        stroke-width="2"
        stroke-dasharray="5,5"
      />
      <rect
        x="30"
        y="30"
        width="200"
        height="100"
        rx="5"
        fill="#363636"
        stroke="#4a4a4a"
        stroke-width="2"
      />
      <text x="130" y="85" text-anchor="middle" fill="#888" font-size="16" letter-spacing="2">
        OVEN & BAR
      </text>
      <path d="M 780 100 L 780 500" stroke="#ff8c00" stroke-width="4" stroke-opacity="0.3" />
      <text
        x="760"
        y="300"
        text-anchor="middle"
        transform="rotate(-90, 760, 300)"
        fill="#ff8c00"
        fill-opacity="0.5"
        font-size="12"
      >
        STREET VIEW WINDOW
      </text>
      <g
        v-for="table in store.tables"
        :key="table.id"
        @click="store.setSelectedTable(table)"
        class="table-group"
        :class="{
          occupied: table.status === 'occupied',
          'table-selected': table.id === store.selectedTableId,
        }"
      >
        <g v-for="i in table.capacity" :key="i" :transform="getChairTransform(table, i)">
          <rect x="-10" y="-10" width="20" height="20" rx="4" class="chair-base" />
        </g>

        <component
          :is="table.shape === 'round' ? 'circle' : 'rect'"
          :cx="table.shape === 'round' ? table.x : null"
          :cy="table.shape === 'round' ? table.y : null"
          :r="table.shape === 'round' ? table.size : null"
          :x="table.shape === 'rect' ? table.x - table.size : null"
          :y="table.shape === 'rect' ? table.y - table.size * 0.7 : null"
          :width="table.shape === 'rect' ? table.size * 2 : null"
          :height="table.shape === 'rect' ? table.size * 1.4 : null"
          :rx="table.shape === 'rect' ? 8 : null"
          class="table-shape"
          :class="{
            'table-available': table.status === 'available' && table.id !== store.selectedTableId,
            'table-occupied': table.status === 'occupied',
            'table-selected': table.id === store.selectedTableId,
          }"
        />

        <text
          :x="table.x"
          :y="table.y + 5"
          text-anchor="middle"
          class="table-label"
          :class="{
            'table-label-selected': table.id === store.selectedTableId,
            'table-label-default': table.id !== store.selectedTableId,
          }"
        >
          {{ table.label }}
        </text>

        <g transform="translate(0, 20)">
          <text :x="table.x" :y="table.y + 15" text-anchor="middle" fill="#9ca3af" font-size="10">
            {{ table.capacity }}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.floor-plan-svg-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 3;
}
.floor-plan-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}
.table-group {
  cursor: pointer;
  transition: all 0.3s;
}
.table-group:not(.occupied):hover {
  opacity: 0.9;
}
.table-group.occupied {
  cursor: not-allowed;
  opacity: 0.7;
}
.table-shape {
  transition: all 0.5s ease-out;
  stroke-width: 2px;
}
.table-available {
  fill: rgba(0, 128, 0, 0.2);
  stroke: var(--color-available);
}
.table-available:hover {
  fill: rgba(0, 128, 0, 0.4);
  stroke: var(--color-available);
}
.table-occupied {
  fill: rgba(204, 0, 0, 0.25);
  stroke: var(--color-occupied);
}
.table-selected {
  fill: var(--secondary-color);
  color: var(--light-color);
}
.chair-base {
  stroke: var(--color-surface-light);
  stroke-width: 1px;
  fill: var(--color-chair);
}
.table-occupied .chair-base {
  fill: #881337;
}
.table-selected .chair-base {
  fill: var(--secondary-color);
}
.table-label {
  pointer-events: none;
  user-select: none;
  font-size: 14px;
  font-weight: bold;
}
.table-label-selected {
  fill: #fff;
}
.table-label-default {
  fill: #fff;
}
</style>
