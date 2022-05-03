<template>
    <div>
        <h1>News list</h1>
        <p v-for="item in lists" :key="item">
        {{item}}
            <!-- {{item.heading}}
            {{item.label}
            {{item.source}} -->
        </p>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "NewsApi",
    data()
    {
        return {
            lists:[]
        };
    },
    async mounted()
    {
        let result = await axios.get("http://127.0.0.1:8000/asdf");
        
        this.lists = result.data;
        console.log("news_list: ", this.lists);
    }
}
</script>


