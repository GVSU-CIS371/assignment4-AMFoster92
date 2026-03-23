<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="creamer.name !== 'No Cream'" :creamer="creamer"/>
      </template>
      <template v-slot:mid>
        <Syrup v-if="syrup.name !== 'No Syrup'" :syrup="syrup"/>
      </template>
      <template v-slot:bottom>
        <Base :base="base"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { CreamerType, SyrupType, BaseBeverageType  } from "../types/beverage";
type Props = {
  isIced: boolean;
  creamer: CreamerType
  syrup: SyrupType
  base: BaseBeverageType
};
defineProps<Props>();
</script>
