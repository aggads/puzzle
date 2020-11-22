<template>
  <div>
    <h1>Puzzle Game</h1>
    <br />
    <div class="action">
      <button type="button" class="btn btn-danger" v-on:click="switchOff()">Switch off</button>
      <button type="button" class="btn btn-success"><router-link to="/home">Return to menu</router-link></button>
    </div>
    <div class="block">
      <ul style="display: grid; grid-template-columns: repeat(5, 1fr)">
        <li v-for="(item, index) in block" :key="index">
          <button v-on:click="onClick(index, index + 1, index - 1, index + 5, index - 5)">
            <img :src="item.image" class="img-fluid" alt="" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Green from "../assets/images/green.png";
import Red from "../assets/images/red.png";

export default {
  name: "Home",
  data() {
    return {
      block: [
        {
          id: 0,
          image: Red,
        },
        {
          id: 1,
          image: Red,
        },
        {
          id: 2,
          image: Red,
        },
        {
          id: 3,
          image: Red,
        },
        {
          id: 4,
          image: Red,
        },
        {
          id: 5,
          image: Red,
        },
        {
          id: 6,
          image: Red,
        },
        {
          id: 7,
          image: Red,
        },
        {
          id: 8,
          image: Green,
        },
        {
          id: 9,
          image: Red,
        },
        {
          id: 10,
          image: Red,
        },
        {
          id: 11,
          image: Red,
        },
        {
          id: 12,
          image: Red,
        },
        {
          id: 13,
          image: Red,
        },
        {
          id: 14,
          image: Red,
        },
        {
          id: 15,
          image: Red,
        },
        {
          id: 16,
          image: Red,
        },
        {
          id: 17,
          image: Red,
        },
        {
          id: 18,
          image: Red,
        },
        {
          id: 19,
          image: Red,
        },
        {
          id: 20,
          image: Red,
        },
        {
          id: 21,
          image: Red,
        },
        {
          id: 22,
          image: Red,
        },
        {
          id: 23,
          image: Red,
        },
        {
          id: 24,
          image: Red,
        },
      ],
      box: {
        id: 0,
        isOn: false,
      },
    };
  },
  mounted() {
    console.log(this.box);
  },
  computed: {},
  methods: {
    onClick(i, befor, after, up, down) {
      this.block = this.block.map((item) => {
        console.log(i);
        if (item.id === i || item.id === befor || item.id === after || item.id === up || item.id === down) {
          if (item.image === Green) {
            item.image = Red;

            // if (item.id != 5 && item.id != 10 && item.id != 15 && item.id != 20) {
            //   item.image = Red;
            // } else {
            //   //   if (item.id != 4 && item.id != 9 && item.id != 14 && item.id != 19 && item.id != 24) {
            //   //     item.image = Green;
            //   //   } else {
            //   item.image = Green;
            //   //   }
            // }
          } else {
            item.image = Green;

            // if (item.id != 5 && item.id != 10 && item.id != 15 && item.id != 20) {
            //   item.image = Green;
            //   // } else {
            //   //   if (item.id != 4 && item.id != 9 && item.id != 14 && item.id != 19 && item.id != 24) {
            //   //     item.image = Red;
            // } else {
            //   item.image = Red;
            // }
            // }
          }
          console.log(item);
        }
        return item;
      });
    },
    switchOff() {
      for (let i = 0; i < this.block.length; i++) {
        this.block[i].image = Red;
      }
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
.block {
  display: inline-block;
}
.box {
  width: 5%;
}
button {
  margin: 2%;
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
