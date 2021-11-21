<template>
  <div class="GameArea">
    <!-- <div style="flex:1;">{{PlayHistory}}</div> -->
    <div id="board" style="flex:1"></div>
    <PlayerInput @theyEntered="this.onEnter" />
   </div>
</template>

<script>
import PlayerInput from "./PlayerInput";
import * as d3 from "d3";
export default {
  name: 'GameArea',
  components: {
    PlayerInput
  },
  data: () => {
    return {
      playHistory: [""],
      lastMove: [""],
      svg: null,
      enteredText: null,
      lineCounter: 0,
    }
  },
  mounted() {
    this.renderBoard();
  },
  
  methods: {
    onEnter(theirEntry){
      this.lastMove = theirEntry.split('-');
      this.playHistory.push(this.lastMove);
      this.renderBoard();
    },
    renderBoard() {
      const w = 1000;
      const h = 1000;

      if (this.svg === null){
        this.svg = d3
          .select("#board")
          .append("svg")
          .attr("width", w)
          .attr("height", h);
      
        this.svg.append("rect")
          .attr("stroke", "black")
          .attr("fill", "#0000FF")
          .attr("width", w)
          .attr("height", h);
      }     
    
      this.lineCounter++;          
      
      this.svg.append("text")
        .attr("x", w / 2)
        .attr("y", h / 2)
        .attr("dy", (2 + 1.5*this.lineCounter).toString() + "em")
        .text(this.lastMove.toString());
    }
  } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.GameArea {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
}
</style>
