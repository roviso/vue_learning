<template>
    <div class="data-bind">
        <h1> {{UcaseTitle}}  </h1>
        <h2>You are {{ age}} years old</h2>
        <textarea type = 'text'  v-model="message"/>
        <p style="white-space:pre-line">{{message}}</p>
        
    </div>
</template>

<script>
export default {
    name: "DataBind",
    props:['title','age'],
    data(){
        return {
            message: 'SHITMACHINE'
        }
    },
    computed:{
        UcaseTitle(){
            return this.title.toUpperCase()
        }
    }
}
</script>



<style scoped>
.data-bind {
    background-color: rgb(225, 231, 235);
    width: 300px;
    height: max-content;
    padding: 33px;
    /* padding-left: 68px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

}
</style>