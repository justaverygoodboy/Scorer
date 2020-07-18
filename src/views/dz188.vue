<template>
<div class="wrppaer">
  <div class="class"><strong>电子信息类188班</strong></div>
  <div class="tp-block" v-for="(bw,index) in bws" :key="index">
    <div class="tp-item">
      <div><strong>{{bw.zw}}</strong></div>
      <div class="tri-inp-a">
        <div class="uni-inp">  
          <span class="info">同学评分平均分：</span>
          <input class="input" v-model="bw.ts" :placeholder="bw.ts"/>
        </div>
        <div class="uni-inp">
          <span class="info">班委评分平均分：</span>
          <input class="input" v-model="bw.bs" :placeholder="bw.bs"/>
        </div>
        <div class="uni-inp">
          <span class="info">您的评分：</span>
          <input class="input" v-model="bw.fs" :placeholder="bw.fs"/>
        </div>
      </div>  
    </div>
  </div>
  <div class="results-show">
    <div class="result" v-for="(bw,index) in bws" :key="index">
      <strong>{{bw.zw}}</strong>的最终分数：{{bw.fs*0.3+bw.bs*0.2+bw.ts*0.5}} ; {{bw.score}}
    </div>
  </div>
</div>
</template>
<script>
var storage = window.localStorage;
export default {
  name: 'dz181',
  data () {
    return {
      bws: [{
        zw: '班长',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      },
      {
        zw: '副班长',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      },
      {
        zw: '团支书',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      },
      {
        zw: '生活委员',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      },
      {
        zw: '文体委员',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      },
      {
        zw: '心理委员',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      },
      {
        zw: '学习委员',
        score: '',
        ts: '',
        bs: '',
        fs: '',
      }]
    }
  },
  methods: {
    saveDate() {

    },
    readDate() {

    }
  },
  created() {
    this.readDate()
  }
}
</script>
<style>
.tp-item {
  width: 1000px;
  height: 90px;
  border-bottom: solid 1px black;
  margin-bottom: 30px;
  margin-top: 30px;
}
.input {
  width: 100px;
}
.tri-inp-a {
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
}
.uni-inp {
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 5px;
}
.result {
  margin-bottom: 10px;
}
</style>
