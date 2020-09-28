<template>
  <div>
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "WordGraph",
  data() {
    return {
      chart: null,
      chartData: [{ word: "foo" }, { word: "bar" }]
    };
  },
  mounted() {
      this.renderChart(this.chartData);
  },
  methods: {
    renderChart() {
      // const margin = 60;
      const svgWidth = 1000;
      const svgHeight = 600;
      // const chartWidth = 1000 - 2 * margin;
      // const chartHeight = 600 - 2 * margin;

      const svg = d3
        .select("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

      this.chart = svg
        .append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20)
      
      // this.chart = svg
      //   .append("g")
      //   .attr("transform", `translate(${margin}, ${margin})`);

      // const yScale = d3
      //   .scaleLinear()
      //   .range([chartHeight, 0])
      //   .domain([0, chartWidth]);

      // this.chart.append("g").call(d3.axisLeft(yScale).ticks(data.length));

      // const xScale = d3
      //   .scaleBand()
      //   .range([0, chartWidth])
      //   .domain(data.map(d => d.word))
      //   .padding(0.2);

      // this.chart
      //   .append("g")
      //   .attr("transform", `translate(0, ${chartHeight})`)
      //   .call(d3.axisBottom(xScale));


    }
  }
};
</script>

<style scoped>
</style>
