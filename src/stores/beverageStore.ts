import { defineStore } from "pinia";
import temperatures from "../data/temperatures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures,
    currentTemp: temperatures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    savedBeverages: [] as BeverageType[],
    name: "",
  }),

  actions: {
    makeBeverage() {
      this.savedBeverages.push({
        id: Date.now().toString(),
        name: this.name,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      });
    },
    showBeverage(beverageId: string) {
      const beverage = this.savedBeverages.find((b) => b.id === beverageId);
      if (beverage) {
        this.name = beverage.name;
        this.currentTemp = beverage.temp;
        this.currentBase = beverage.base;
        this.currentCreamer = beverage.creamer;
        this.currentSyrup = beverage.syrup;
      }
    },
  },
  persist: true,
});
