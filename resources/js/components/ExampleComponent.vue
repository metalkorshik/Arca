<template>
    <div>
        <div v-for="num in arr">
            <span>{{num}}</span>
        </div>
        <button v-on:click="addNum()">Add num</button>
    </div>
</template>

<script>
    export default {
        data: () => { 
            return {
                arr: [1, 3]
            }
        },
        methods: {
            addNum: function (){
                this.arr.push(Math.random() * 10);
            }
        }
    }
</script>
